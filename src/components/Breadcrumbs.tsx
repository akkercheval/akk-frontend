// ============================================================================
// Breadcrumbs
// ----------------------------------------------------------------------------
// Shows the ancestor chain for pages nested more than one level deep inside a
// section (e.g. LotRO > Raids & Instances > Folly of Nagakhêdi > Maukhorn).
// The section sub-nav row shows siblings; breadcrumbs show ancestors, so the
// two complement rather than duplicate each other. Only rendered when the
// trail is deep enough to be useful. The final crumb is the current page and
// is not a link.
// ============================================================================

import { Link, useLocation } from 'react-router-dom'
import { breadcrumbsForPath, shouldShowBreadcrumbs } from '../nav/sections'
import './Breadcrumbs.css'

export default function Breadcrumbs() {
  const { pathname } = useLocation()

  if (!shouldShowBreadcrumbs(pathname)) return null

  const crumbs = breadcrumbsForPath(pathname)
  const lastIndex = crumbs.length - 1

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs_list">
        {crumbs.map((crumb, index) => {
          const isLast = index === lastIndex
          return (
            <li className="breadcrumbs_item" key={crumb.to}>
              {isLast ? (
                <span className="breadcrumbs_current" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link to={crumb.to} className="breadcrumbs_link">
                    {crumb.label}
                  </Link>
                  <span className="breadcrumbs_sep" aria-hidden="true">
                    ›
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
