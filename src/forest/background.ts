// ============================================================================
// Friendly Forest — automatic seasonal background system
// ============================================================================
//
// Each page of the site maps to a Friendly Forest location. For each location
// we want to show the correct image for the current season, at the correct
// size for the visitor's screen, and gracefully fall back when a specific
// image doesn't exist yet.
//
// Image naming convention (files live in /public/backgrounds/<location-slug>/):
//   "[<secondary>-]<season>-<size>.<ext>"
//   - Full images are .png   e.g. "backgrounds/acorn-crossing/summer-full.png"
//   - Mobile images are .jpg e.g. "backgrounds/acorn-crossing/summer-mobile.jpg"
//   - Some locations have a secondary variant (Gypsa's Hollow: outside/inside)
//     e.g. "backgrounds/gypsas-hollow/outside-fall-full.png"
//
// The browser can't list the /public folder at runtime, so instead of assuming
// which files exist, we build an ordered list of candidate URLs (best match
// first) and probe them in order, using the first one that actually loads.
// ============================================================================

export type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter'
export type ScreenSize = 'mobile' | 'full'

/** A location in the Friendly Forest that a page can be set in. */
export interface ForestLocation {
  /** Human-readable name, e.g. "Acorn Crossing". */
  name: string
  /**
   * URL slug used for the image folder + filenames, e.g. "acorn-crossing".
   * Images live in /public/backgrounds/<slug>/.
   */
  slug: string
  /**
   * Given a season, return the secondary variant token (e.g. "outside" /
   * "inside") that appears in the filename, or null if the location has no
   * secondary variant. Used for Gypsa's Hollow, which is viewed from outside
   * in summer/fall and inside in winter/spring.
   */
  secondaryForSeason?: (season: Season) => string | null
}

// ----------------------------------------------------------------------------
// Locations
// ----------------------------------------------------------------------------

export const ACORN_CROSSING: ForestLocation = {
  name: 'Acorn Crossing',
  slug: 'acorn-crossing',
}

export const GYPSAS_HOLLOW: ForestLocation = {
  name: 'Gypsas Hollow',
  slug: 'gypsas-hollow',
  // Summer & Fall -> exterior view; Winter & Spring -> interior view.
  secondaryForSeason: (season) =>
    season === 'Summer' || season === 'Fall' ? 'outside' : 'inside',
}

export const WORKSHOP_CLEARING: ForestLocation = {
  name: 'Workshop Clearing',
  slug: 'workshop-clearing',
}

export const MELDAS_HILL: ForestLocation = {
  name: 'Meldas Hill',
  slug: 'meldas-hill',
}

export const TANGLED_TRAIL: ForestLocation = {
  name: 'Tangled Trail',
  slug: 'tangled-trail',
}

// ----------------------------------------------------------------------------
// Route -> location mapping
// ----------------------------------------------------------------------------
//
// Matched longest-prefix-first so that e.g. "/gypsa/character-bible" resolves
// the same way as "/gypsa". Anything not matched falls through to the 404
// location (Tangled Trail), which is also what the router renders.

interface RouteRule {
  prefix: string
  location: ForestLocation
}

const ROUTE_RULES: RouteRule[] = [
  { prefix: '/about', location: GYPSAS_HOLLOW },
  { prefix: '/crochet', location: GYPSAS_HOLLOW },
  { prefix: '/cats', location: GYPSAS_HOLLOW },
  { prefix: '/gypsa', location: GYPSAS_HOLLOW },

  { prefix: '/cookie-cutters', location: WORKSHOP_CLEARING },
  { prefix: '/projects', location: WORKSHOP_CLEARING },

  { prefix: '/lotro', location: MELDAS_HILL },

  // The Friendly Forest meta/lore section — set at the Forest's entrance.
  { prefix: '/forest', location: ACORN_CROSSING },

  { prefix: '/', location: ACORN_CROSSING },
]

/**
 * Resolve the Friendly Forest location for a given pathname.
 * `isNotFound` should be true when the router is rendering the 404 page, since
 * an unknown path could otherwise look like the home route.
 */
export function locationForPath(
  pathname: string,
  isNotFound = false,
): ForestLocation {
  if (isNotFound) return TANGLED_TRAIL

  const path = normalizePath(pathname)

  // Longest, most specific prefixes first.
  const rules = [...ROUTE_RULES].sort((a, b) => b.prefix.length - a.prefix.length)
  for (const rule of rules) {
    if (rule.prefix === '/') {
      if (path === '/') return rule.location
    } else if (path === rule.prefix || path.startsWith(rule.prefix + '/')) {
      return rule.location
    }
  }

  // Unknown path -> the router shows NotFound, so use the Tangled Trail.
  return TANGLED_TRAIL
}

function normalizePath(pathname: string): string {
  if (!pathname) return '/'
  // Drop trailing slash except for root.
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

// ----------------------------------------------------------------------------
// Season detection (Northern Hemisphere, standard months)
// ----------------------------------------------------------------------------
//   Spring: March, April, May
//   Summer: June, July, August
//   Fall:   September, October, November
//   Winter: December, January, February

export function seasonForDate(date = new Date()): Season {
  const month = date.getMonth() // 0 = January
  if (month >= 2 && month <= 4) return 'Spring'
  if (month >= 5 && month <= 7) return 'Summer'
  if (month >= 8 && month <= 10) return 'Fall'
  return 'Winter'
}

// ----------------------------------------------------------------------------
// Filename building + fallback candidate generation
// ----------------------------------------------------------------------------

/** Order to try seasons when the requested season's image is unavailable. */
const SEASON_FALLBACK_ORDER: Season[] = ['Summer', 'Spring', 'Fall', 'Winter']

const SIZE_TOKEN: Record<ScreenSize, string> = {
  full: 'full',
  mobile: 'mobile',
}

const SIZE_EXT: Record<ScreenSize, string> = {
  full: 'png',
  mobile: 'jpg',
}

/** Build the /public URL for a specific location/season/size combination. */
export function backgroundFilename(
  location: ForestLocation,
  season: Season,
  size: ScreenSize,
): string {
  const secondary = location.secondaryForSeason?.(season) ?? null
  // Filename tokens are lowercase: "[<secondary>-]<season>-<size>.<ext>"
  const parts: string[] = []
  if (secondary) parts.push(secondary)
  parts.push(season.toLowerCase())
  parts.push(SIZE_TOKEN[size])
  const base = parts.join('-')
  return `/backgrounds/${location.slug}/${base}.${SIZE_EXT[size]}`
}

/** Fallback background used until location images exist. */
export function fallbackFor(size: ScreenSize): string {
  return size === 'mobile'
    ? '/backgrounds/_fallback/tree-mobile.jpg'
    : '/backgrounds/_fallback/tree-full.png'
}

/**
 * Build an ordered list of candidate image URLs for a page, best match first.
 *
 * Priority:
 *   1. Correct location + correct season + requested size
 *   2. Same location + correct season + Full Size (if mobile was requested)
 *   3. Same location + other seasons (Summer, Spring, Fall, Winter),
 *      requested size then Full Size
 *   4. Global tree background (requested size, then the other size)
 *
 * The list is de-duplicated while preserving order.
 */
export function backgroundCandidates(
  location: ForestLocation,
  season: Season,
  size: ScreenSize,
): string[] {
  const candidates: string[] = []
  const push = (url: string) => {
    if (!candidates.includes(url)) candidates.push(url)
  }

  // Sizes to try, in preference order. On mobile we accept the full-size PNG
  // rather than dropping to a different season/location.
  const sizesToTry: ScreenSize[] = size === 'mobile' ? ['mobile', 'full'] : ['full']

  // Seasons to try: the correct season first, then the fallback order.
  const seasonsToTry: Season[] = [
    season,
    ...SEASON_FALLBACK_ORDER.filter((s) => s !== season),
  ]

  // 1-3: same location, correct season first (all sizes), then other seasons.
  for (const s of seasonsToTry) {
    for (const sz of sizesToTry) {
      push(backgroundFilename(location, s, sz))
    }
  }

  // 4: global fallbacks.
  push(fallbackFor(size))
  push(fallbackFor(size === 'mobile' ? 'full' : 'mobile'))

  return candidates
}
