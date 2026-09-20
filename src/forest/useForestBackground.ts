// ============================================================================
// useForestBackground
// ----------------------------------------------------------------------------
// Resolves and returns the best available background image URL for the current
// route + screen size, using the candidate/fallback logic in background.ts.
//
// How it works:
//  - Determines the current location (from the route) and season (from today).
//  - Picks a screen size from a matchMedia query at the 768px breakpoint (the
//    same breakpoint the existing layout CSS uses).
//  - Builds an ordered list of candidate URLs and probes them in order by
//    preloading each Image(); the first that loads successfully is used.
//  - While probing, it immediately returns the global tree background so the
//    page is never left without a background.
// ============================================================================

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  backgroundCandidates,
  fallbackFor,
  locationForPath,
  seasonForDate,
  type ScreenSize,
} from './background'

const MOBILE_QUERY = '(max-width: 768px)'

function getScreenSize(): ScreenSize {
  if (typeof window === 'undefined' || !window.matchMedia) return 'full'
  return window.matchMedia(MOBILE_QUERY).matches ? 'mobile' : 'full'
}

/**
 * Probe candidate URLs in order, resolving with the first that loads.
 * Falls back to the last candidate (always a tree background) if none load.
 * Returns a cleanup function that cancels in-flight image loads.
 */
function probeCandidates(
  candidates: string[],
  onResolved: (url: string) => void,
): () => void {
  let cancelled = false
  let index = 0

  const tryNext = () => {
    if (cancelled) return
    if (index >= candidates.length) return

    const url = candidates[index]
    const isLast = index === candidates.length - 1
    index += 1

    // The final candidate is always a bundled fallback; trust it without
    // probing so we don't loop forever if even that fails to report load.
    if (isLast) {
      if (!cancelled) onResolved(url)
      return
    }

    const img = new Image()
    img.onload = () => {
      if (!cancelled) onResolved(url)
    }
    img.onerror = () => {
      tryNext()
    }
    img.src = url
  }

  tryNext()
  return () => {
    cancelled = true
  }
}

export function useForestBackground(isNotFound = false): string {
  const { pathname } = useLocation()
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize)

  // Track viewport size changes so we swap between mobile .jpg and full .png.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia(MOBILE_QUERY)
    const handler = () => setScreenSize(mql.matches ? 'mobile' : 'full')
    handler()
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  // Start with a safe fallback so the background is never empty.
  const [resolvedUrl, setResolvedUrl] = useState<string>(() =>
    fallbackFor(getScreenSize()),
  )

  useEffect(() => {
    const location = locationForPath(pathname, isNotFound)
    const season = seasonForDate()
    const candidates = backgroundCandidates(location, season, screenSize)

    // Show a sensible fallback immediately while we probe for a better match.
    setResolvedUrl(fallbackFor(screenSize))

    const cancel = probeCandidates(candidates, setResolvedUrl)
    return cancel
  }, [pathname, screenSize, isNotFound])

  return resolvedUrl
}
