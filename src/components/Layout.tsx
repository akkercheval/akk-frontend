import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import ForestBackground from '../forest/ForestBackground'
import { locationForPath } from '../forest/background'
import { sectionForPath } from '../nav/sections'
import SectionNav from './SectionNav'
import Breadcrumbs from './Breadcrumbs'
import './Layout.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Web Projects', to: '/projects' },
  { label: 'LotRO', to: '/lotro' },
  { label: 'Cookie Cutters', to: '/cookie-cutters' },
  { label: 'Crochet', to: '/crochet' },
  { label: 'Cats & Critters', to: '/cats' },
  { label: 'Making of Gypsa', to: '/gypsa' },
  { label: 'The Friendly Forest', to: '/forest' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const forestLocation = locationForPath(pathname)
  const activeSection = sectionForPath(pathname)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app">
      <ForestBackground />
      <header className="site-header">
        <div className="header-content">
          <div className="header-left">
            <img
              src="/icons/acorn-transparent-background.png"
              alt="Acorn icon"
              className="mascot"
            />
            <div className="title-block">
              <h1 className="site-title">AK's Friendly Forest of Chaos</h1>
              <p className="site-subtitle">
                Web Developer · Clarinet Player · Cookie Cutter Enthusiast
              </p>
            </div>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`hamburger-bar${menuOpen ? ' open' : ''}`} />
            <span className={`hamburger-bar${menuOpen ? ' open' : ''}`} />
            <span className={`hamburger-bar${menuOpen ? ' open' : ''}`} />
          </button>

          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link) => {
                const isCurrentSection = activeSection?.to === link.to
                return (
                  <li key={link.to} className="nav-item">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `nav-link${isActive ? ' nav-link--active' : ''}`
                      }
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>

                    {/*
                      Mobile only: when this top-level item is the section the
                      visitor is currently in, fold its subpages in beneath it
                      so they can jump between subsections from the hamburger
                      menu. Hidden on desktop via CSS (the SectionNav row
                      carries these links there instead).
                    */}
                    {isCurrentSection && activeSection && (
                      <ul className="nav-sublist">
                        {activeSection.children.map((child) => (
                          <li key={child.to} className="nav-subitem">
                            <NavLink
                              to={child.to}
                              className={({ isActive }) =>
                                `nav-sublink${isActive ? ' nav-sublink--active' : ''}`
                              }
                              onClick={closeMenu}
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>

      <SectionNav />

      <main className="main-content" data-location={forestLocation.slug}>
        <div className="page-column">
          <Breadcrumbs />
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} AK's Friendly Forest of Chaos</p>
      </footer>
    </div>
  )
}
