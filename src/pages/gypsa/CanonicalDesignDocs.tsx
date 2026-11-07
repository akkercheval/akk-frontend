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
    heading: 'The Reference Set',
    docs: [
      {
        to: '/gypsa/reference-guide',
        title: 'Reference Guide (START HERE)',
        blurb: 'Identity, how to use the reference set, image registry, and the render-request template.',
      },
      {
        to: '/gypsa/head-and-expression',
        title: 'Head & Expression',
        blurb: 'Skull, muzzle, eyes, ears, crown, and the eight expressions.',
      },
      {
        to: '/gypsa/body-and-tail',
        title: 'Body & Tail',
        blurb: 'Proportion unit, body and limb geometry, hands and feet, and the full tail.',
      },
      {
        to: '/gypsa/equipment',
        title: 'Equipment',
        blurb: 'Backpack, bandana, and walking stick: shape, scale, attachment, and carry.',
      },
      {
        to: '/gypsa/rendering-standard',
        title: 'Rendering Standard',
        blurb: 'Palette, flat-color finish, outline, transparency, and export requirements.',
      },
    ],
  },
  {
    heading: 'Additional Canon Documents',
    docs: [
      {
        to: '/gypsa/character-bible',
        title: 'Character Bible',
        blurb: 'Who Gypsa is — personality, backstory, and core identity.',
      },
      {
        to: '/gypsa/body-dummy',
        title: 'Body Dummy (v2.0)',
        blurb: 'Canonical body dummy specification.',
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
            A consolidated five-document specification set for consistent renders
          </p>
          <p>
            Gypsa's canon is being consolidated into five documents that together
            describe her completely — identity, head, body and tail, equipment, and
            rendering. Each document owns its facts so there's one authoritative
            answer for every detail.
          </p>
          <p>
            <em>These five documents are a consolidated draft reference set (version
            0.1, currently under review). The older per-feature reference documents
            have been archived, and the final canon reference images have not been
            produced yet.</em>
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
