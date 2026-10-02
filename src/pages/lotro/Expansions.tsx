import { Link } from 'react-router-dom'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import './Lotro.css'

interface ExpansionLink {
  to: string
  title: string
  blurb: string
}

const expansions: ExpansionLink[] = [
  {
    to: '/lotro/expansions/wolves-of-mordor',
    title: 'The Wolves of Mordor',
    blurb:
      'Pre-order guide and cosmetic previews for the 2026 expansion — see the gear on every race before you buy',
  },
]

export default function Expansions() {
  return (
    <section className="page-card">
      <h2>Expansions</h2>
      <p>
        Guides for expansion-specific content that isn&rsquo;t tied to a single
        instance or quest line — pre-order breakdowns, cosmetic previews, new
        systems, and anything else that arrives with a fresh chapter of
        Middle-earth.
      </p>
      <p>
        <Link to="/lotro">&larr; Back to LotRO</Link>
      </p>

      <div className="lotro-nav-links">
        {expansions.map((expansion) => (
          <Link to={expansion.to} className="lotro-nav-card" key={expansion.to}>
            <strong>{expansion.title}</strong>
            <span>{expansion.blurb}</span>
          </Link>
        ))}
      </div>

      <LotroDisclaimer />
    </section>
  )
}
