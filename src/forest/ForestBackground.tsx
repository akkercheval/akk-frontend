// ============================================================================
// ForestBackground
// ----------------------------------------------------------------------------
// A fixed, full-viewport layer rendered behind all page content. It shows the
// correct Friendly Forest background for the current route, season, and screen
// size (resolved by useForestBackground). Replaces the single static
// background that used to live in index.css.
// ============================================================================

import { useForestBackground } from './useForestBackground'
import './ForestBackground.css'

interface ForestBackgroundProps {
  /** True when the router is showing the 404 page (the Tangled Trail). */
  isNotFound?: boolean
}

export default function ForestBackground({ isNotFound = false }: ForestBackgroundProps) {
  const url = useForestBackground(isNotFound)

  return (
    <div
      className="forest-background"
      style={{ backgroundImage: `url("${url}")` }}
      aria-hidden="true"
    />
  )
}
