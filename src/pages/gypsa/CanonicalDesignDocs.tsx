import { Link } from 'react-router-dom'
import './MakingOfGypsa.css'

interface DocLink {
  to: string
  title: string
  blurb: string
}

interface DocGroup {
  heading: string
  docs: DocLink[]
}

const groups: DocGroup[] = [
  {
    heading: 'Head',
    docs: [
      {
        to: '/gypsa/head-construction',
        title: 'Head Construction Guide',
        blurb: 'Approved head geometry, features, expressions, and validation rules',
      },
      {
        to: '/gypsa/canonical-design/ears',
        title: 'Ear Specification',
        blurb: 'Canonical squirrel-ear geometry and root/tip joint pairs',
      },
    ],
  },
  {
    heading: 'Body & Proportions',
    docs: [
      {
        to: '/gypsa/body-dummy',
        title: 'Body Dummy Specification',
        blurb: 'Neutral construction framework and canonical proportions',
      },
      {
        to: '/gypsa/canonical-design/body-construction',
        title: 'Body Construction',
        blurb: 'Body landmarks, structural hierarchy, and the rigging diagram',
      },
    ],
  },
  {
    heading: 'Tail',
    docs: [
      {
        to: '/gypsa/canonical-design/tail-design',
        title: 'Tail Design Specification',
        blurb: 'Neutral profile tail: root, S-sweep, fur envelope, and precedence',
      },
      {
        to: '/gypsa/canonical-design/tail-neutral-pose',
        title: 'Tail Specification — Neutral Baseline',
        blurb: 'Neutral tail landmarks, arc positions, and fur parameters',
      },
      {
        to: '/gypsa/canonical-design/tail-render-prompt',
        title: 'Tail Render Prompt',
        blurb: 'Canonical straight-tail fur envelope render standard',
      },
      {
        to: '/gypsa/canonical-design/tail-render-prompt-sanitized',
        title: 'Directionally Sanitized Tail Render Prompt',
        blurb: 'Fur envelope around any supplied centerline (fixes direction drift)',
      },
    ],
  },
  {
    heading: 'Structural References',
    docs: [
      {
        to: '/gypsa/canonical-design/joint-system',
        title: 'Joint Reference System',
        blurb: 'Full joint name/meaning table for head, limbs, and tail',
      },
      {
        to: '/gypsa/canonical-design/geometry-table',
        title: 'Canonical Geometry Table',
        blurb: 'Every joint coordinate, segment length, and tail control point',
      },
    ],
  },
]

export default function CanonicalDesignDocs() {
  return (
    <div className="gypsa-notebook">
      <div className="gypsa-notebook_spiral" aria-hidden="true"></div>
      <div className="gypsa-page">
        <section className="gypsa-intro">
          <h2>Gypsa's Canonical Design Documentation</h2>
          <p className="subtitle">
            The structural canon — geometry, construction, and reference drawings
          </p>
          <p>
            These documents freeze Gypsa's approved structure so future art stays
            on-model. Each page pairs the written specification with the canonical
            reference images that authoritatively depict that feature.
          </p>
          <div className="gypsa-motto">
            "A newer generated image never supersedes a canonical reference merely
            because it is newer."
          </div>
          <p>
            <Link to="/gypsa" className="gypsa-back-link">← Back to The Making of Gypsa</Link>
          </p>
        </section>

        {groups.map((group) => (
          <section className="gypsa-section" key={group.heading}>
            <h3>{group.heading}</h3>
            <div className="gypsa-nav-links">
              {group.docs.map((doc) => (
                <Link to={doc.to} className="gypsa-nav-card" key={doc.to}>
                  <strong>{doc.title}</strong>
                  <span>{doc.blurb}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
