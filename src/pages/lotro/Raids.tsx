import { Link } from 'react-router-dom'
import './Lotro.css'

interface EncounterLink {
  to: string
  title: string
  blurb: string
}

const encounters: EncounterLink[] = [
  {
    to: '/lotro/raids/folly-of-nagakhedi',
    title: 'Raid Overview',
    blurb: 'Roster, roles, consumables, tiers, and mid-raid quick reference',
  },
  {
    to: '/lotro/raids/folly-of-nagakhedi/badharal-the-gorger',
    title: 'Badharál the Gorger',
    blurb: 'Boss 1 — mechanics, positioning, tier differences, and wipe checklist',
  },
  {
    to: '/lotro/raids/folly-of-nagakhedi/maukhorn',
    title: 'Maukhorn',
    blurb: 'Boss 2 — mechanics, positioning, tier differences, and wipe checklist',
  },
  {
    to: '/lotro/raids/folly-of-nagakhedi/legion-of-lhaereth',
    title: 'The Legion of Lhaereth',
    blurb: 'Boss 3 — mechanics, positioning, tier differences, and wipe checklist',
  },
  {
    to: '/lotro/raids/folly-of-nagakhedi/zamaktar-the-putrescent',
    title: 'Zamâktar the Putrescent',
    blurb: 'Final boss — phases, enrage plan, tier differences, and loot',
  },
]

export default function Raids() {
  return (
    <section className="page-card">
      <h2>Raid &amp; Instance Guides</h2>
      <p>
        Written strategy for our 12-person raid, organized so you can jump
        straight to the fight you need mid-progression.
      </p>
      <p>
        <Link to="/lotro">← Back to LotRO</Link>
      </p>

      <h3>Folly of Nagakhêdi</h3>
      <p>Four bosses across three difficulty tiers (Tier 1 · Tier 2 · Tier 3).</p>
      <ul className="acorn-list">
        {encounters.map((enc) => (
          <li key={enc.to}>
            <Link to={enc.to}>
              <strong>{enc.title}</strong>
            </Link>
            {' — '}
            {enc.blurb}
          </li>
        ))}
      </ul>
    </section>
  )
}
