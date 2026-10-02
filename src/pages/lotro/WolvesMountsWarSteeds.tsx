import { Link } from 'react-router-dom'
import MarkdownPage from '../../components/MarkdownPage'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import content from '../../../lotro/expansions/wolves-of-mordor/pre-order-guide/mounts-and-war-steeds.md?raw'
import './Lotro.css'

interface WarSteedLink {
  to: string
  title: string
  blurb: string
}

const warSteeds: WarSteedLink[] = [
  {
    to: '/lotro/expansions/wolves-of-mordor/pre-order-guide/dauntless-commander-war-steed',
    title: "Dauntless Commander's War-steed",
    blurb: 'Full set plus caparison, head-piece, leg-guards, saddle, tail, and accessory',
  },
  {
    to: '/lotro/expansions/wolves-of-mordor/pre-order-guide/were-wolf-hunters-war-steed',
    title: "Were-wolf Hunter's War-steed",
    blurb: 'Full set plus caparison, head-piece, leg-guards, saddle, tail, and accessory',
  },
]

export default function WolvesMountsWarSteeds() {
  return (
    <section className="page-card">
      <p>
        <Link to="/lotro/expansions/wolves-of-mordor/pre-order-guide">
          &larr; Back to the Pre-Order Guide
        </Link>
      </p>

      <MarkdownPage content={content} />

      <div className="lotro-nav-links">
        {warSteeds.map((warSteed) => (
          <Link to={warSteed.to} className="lotro-nav-card" key={warSteed.to}>
            <strong>{warSteed.title}</strong>
            <span>{warSteed.blurb}</span>
          </Link>
        ))}
      </div>

      <LotroDisclaimer />
    </section>
  )
}
