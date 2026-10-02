import { Link } from 'react-router-dom'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import './Lotro.css'

interface GuideLink {
  to: string
  title: string
  blurb: string
}

const guides: GuideLink[] = [
  {
    to: '/lotro/expansions/wolves-of-mordor/pre-order-guide',
    title: 'Expansion Pre-Order Guide',
    blurb:
      'What each pre-order package includes, plus how the cosmetics look across every race, dyed and undyed',
  },
]

export default function WolvesOfMordor() {
  return (
    <section className="page-card">
      <h2>The Wolves of Mordor</h2>
      <p>
        Draugardh, a distant corner of Mordor beyond Gorgoroth, where the Free
        Peoples&rsquo; victory proves far from complete and the were-wolves of
        Mordor stir once more. Guides and previews for the 2026 expansion live
        here.
      </p>
      <p>
        <Link to="/lotro/expansions">&larr; Back to Expansions</Link>
      </p>

      <div className="lotro-nav-links">
        {guides.map((guide) => (
          <Link to={guide.to} className="lotro-nav-card" key={guide.to}>
            <strong>{guide.title}</strong>
            <span>{guide.blurb}</span>
          </Link>
        ))}
      </div>

      <LotroDisclaimer />
    </section>
  )
}
