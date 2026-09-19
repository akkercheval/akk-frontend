// ============================================================================
// SectionNav
// ----------------------------------------------------------------------------
// Desktop-only sub-navigation row. When the visitor is inside one of the four
// multi-subsection areas, this renders that section's top-level subpages as a
// row of pills so they can move between siblings without returning to the
// section landing page. Hidden on small screens (the mobile hamburger menu
// carries these links instead — see Layout).
// ============================================================================

import { Link, useLocation } from 'react-router-dom'
import { sectionForPath } from '../nav/sections'
import './SectionNav.css'

function normalizePath(pathname: string): string {
  if (!pathname) return '/'
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

export default function SectionNav() {
  const { pathname } = useLocation()
  const path = normalizePath(pathname)
  const section = sectionForPath(path)

  // Not inside a multi-subsection area -> render nothing.
  if (!section) return null

  return (
    <nav className="section-nav" aria-label={`${section.label} sections`}>
      <div className="section-nav_inner">
        <Link
          to={section.to}
          className={`section-nav_link${path === section.to ? ' section-nav_link--active' : ''}`}
        >
          Overview
        </Link>
        {section.children.map((child) => {
          // A top-level child is active when the current path is that child or
          // sits beneath it (e.g. a boss page keeps "Raids & Instances" lit).
          const isActive = path === child.to || path.startsWith(child.to + '/')
          return (
            <Link
              key={child.to}
              to={child.to}
              className={`section-nav_link${isActive ? ' section-nav_link--active' : ''}`}
            >
              {child.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
