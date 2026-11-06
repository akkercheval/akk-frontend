// ============================================================================
// Section navigation model
// ----------------------------------------------------------------------------
// Single source of truth for cross-subsection navigation in the four areas of
// the site that have their own subsections: LotRO, Cookie Cutters, The Making
// of Gypsa, and The Friendly Forest.
//
// Everything that needs to know "what are the subpages of this section" reads
// from here:
//   - SectionNav      (desktop sub-nav row of sibling subpages)
//   - Breadcrumbs     (ancestor chain on deep pages)
//   - Layout          (folds the current section's links into the mobile menu)
//
// The tree mirrors the real routes declared in src/App.tsx. Each node is a
// navigable page. `children` express URL/hierarchy depth (e.g. a raid that has
// boss pages beneath it). Only pages that can actually be linked to as static
// URLs live here — dynamic routes like /cookie-cutters/:id are intentionally
// omitted since they can't be enumerated.
// ============================================================================

export interface NavNode {
  /** Absolute route path, e.g. "/lotro/raids". Must match a route in App.tsx. */
  to: string
  /** Short label shown in the sub-nav row and breadcrumbs. */
  label: string
  /** Optional longer label used for breadcrumbs where a fuller name reads better. */
  breadcrumbLabel?: string
  /** Child pages nested beneath this one in the URL hierarchy. */
  children?: NavNode[]
}

export interface Section {
  /** The section's root/landing route, e.g. "/lotro". */
  to: string
  /** Section name shown as the first breadcrumb and the sub-nav heading. */
  label: string
  /** Top-level subpages of the section (the sub-nav row items). */
  children: NavNode[]
}

// ----------------------------------------------------------------------------
// Section definitions
// ----------------------------------------------------------------------------

const ABOUT: Section = {
  to: '/about',
  label: 'About',
  children: [
    { to: '/about/resume', label: 'Resume' },
  ],
}

const LOTRO: Section = {
  to: '/lotro',
  label: 'LotRO',
  children: [
    {
      to: '/lotro/raids',
      label: 'Raids & Instances',
      breadcrumbLabel: 'Raids & Instances',
      children: [
        {
          to: '/lotro/raids/folly-of-nagakhedi',
          label: 'Folly of Nagakhêdi',
          children: [
            { to: '/lotro/raids/folly-of-nagakhedi/badharal-the-gorger', label: 'Badharál the Gorger' },
            { to: '/lotro/raids/folly-of-nagakhedi/maukhorn', label: 'Maukhorn' },
            { to: '/lotro/raids/folly-of-nagakhedi/legion-of-lhaereth', label: 'The Legion of Lhaereth' },
            { to: '/lotro/raids/folly-of-nagakhedi/zamaktar-the-putrescent', label: 'Zamâktar the Putrescent' },
          ],
        },
      ],
    },
    { to: '/lotro/instances', label: 'Instances' },
    { to: '/lotro/new-player', label: 'New Player' },
    { to: '/lotro/classes', label: 'Classes' },
    { to: '/lotro/festivals', label: 'Festivals' },
    { to: '/lotro/stories', label: 'Stories' },
    { to: '/lotro/blog', label: "Melda's Blog" },
    { to: '/lotro/links', label: 'Guides & Streamers' },
  ],
}

const COOKIE_CUTTERS: Section = {
  to: '/cookie-cutters',
  label: 'Cookie Cutters',
  children: [
    { to: '/cookie-cutters/browse', label: 'Browse' },
    { to: '/cookie-cutters/search', label: 'Search' },
  ],
}

const GYPSA: Section = {
  to: '/gypsa',
  label: 'Making of Gypsa',
  children: [
    { to: '/gypsa/project-status', label: 'Project Status' },
    { to: '/gypsa/character-bible', label: 'Character Bible' },
    { to: '/gypsa/production-guide', label: 'Production Guide' },
    { to: '/gypsa/body-dummy', label: 'Body Dummy' },
    { to: '/gypsa/head-construction', label: 'Head Construction' },
    { to: '/gypsa/milestones', label: 'Milestones' },
    {
      to: '/gypsa/canonical-design',
      label: 'Canonical Design',
      breadcrumbLabel: 'Canonical Design Documentation',
      children: [
        { to: '/gypsa/canonical-design/ears', label: 'Ear Specification' },
        { to: '/gypsa/canonical-design/body-construction', label: 'Body Construction' },
        { to: '/gypsa/canonical-design/joint-system', label: 'Joint Reference System' },
        { to: '/gypsa/canonical-design/geometry-table', label: 'Geometry Table' },
        { to: '/gypsa/canonical-design/tail-design', label: 'Tail Design Specification' },
        { to: '/gypsa/canonical-design/tail-neutral-pose', label: 'Tail — Neutral Baseline' },
        { to: '/gypsa/canonical-design/tail-render-prompt', label: 'Tail Render Prompt' },
        { to: '/gypsa/canonical-design/tail-render-prompt-sanitized', label: 'Tail Render Prompt (Sanitized)' },
      ],
    },
  ],
}

const FOREST: Section = {
  to: '/forest',
  label: 'The Friendly Forest',
  children: [
    { to: '/forest/acorn-crossing', label: 'Acorn Crossing' },
    { to: '/forest/gypsas-hollow', label: "Gypsa's Hollow" },
    { to: '/forest/workshop-clearing', label: 'Workshop Clearing' },
    { to: '/forest/meldas-hill', label: "Melda's Hill" },
    { to: '/forest/tangled-trail', label: 'Tangled Trail' },
    { to: '/forest/guidelines', label: 'Guidelines' },
    { to: '/forest/principles', label: 'Principles' },
  ],
}

/** All sections that participate in sub-navigation. */
export const SECTIONS: Section[] = [ABOUT, LOTRO, COOKIE_CUTTERS, GYPSA, FOREST]

// ----------------------------------------------------------------------------
// Resolution helpers
// ----------------------------------------------------------------------------

function normalizePath(pathname: string): string {
  if (!pathname) return '/'
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

/**
 * Return the Section a given path belongs to, or null if the path is not part
 * of any multi-subsection area. A path belongs to a section when it equals the
 * section root or starts with `<root>/`.
 */
export function sectionForPath(pathname: string): Section | null {
  const path = normalizePath(pathname)
  for (const section of SECTIONS) {
    if (path === section.to || path.startsWith(section.to + '/')) {
      return section
    }
  }
  return null
}

/**
 * Build the breadcrumb trail (ancestor chain) for a path, from the section
 * root down to and including the current page. Returns an ordered list of
 * { to, label } crumbs. Returns an empty array when the path is not in a
 * section, or when it is the section landing page itself (nothing to trail).
 *
 * Each crumb's `label` prefers `breadcrumbLabel` when present, else `label`.
 * The section root is always the first crumb.
 */
export interface Crumb {
  to: string
  label: string
}

export function breadcrumbsForPath(pathname: string): Crumb[] {
  const path = normalizePath(pathname)
  const section = sectionForPath(path)
  if (!section) return []

  // Landing page of the section: no trail needed.
  if (path === section.to) return []

  const trail: Crumb[] = [{ to: section.to, label: section.label }]

  // Depth-first search for the node matching `path`, collecting ancestors.
  const walk = (nodes: NavNode[], ancestors: NavNode[]): NavNode[] | null => {
    for (const node of nodes) {
      const chain = [...ancestors, node]
      if (node.to === path) return chain
      if (node.children) {
        const found = walk(node.children, chain)
        if (found) return found
      }
    }
    return null
  }

  const chain = walk(section.children, [])
  if (chain) {
    for (const node of chain) {
      trail.push({ to: node.to, label: node.breadcrumbLabel ?? node.label })
    }
  }

  return trail
}

/**
 * True when the given path is deep enough to warrant breadcrumbs (i.e. it is
 * below a section root by more than one level, or sits under a nested node).
 * Simplest correct rule: breadcrumbs exist when the trail has more than 2
 * entries (section root + one child = a plain subpage, no breadcrumb needed;
 * anything deeper gets one).
 */
export function shouldShowBreadcrumbs(pathname: string): boolean {
  return breadcrumbsForPath(pathname).length > 2
}
