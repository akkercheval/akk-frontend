import { Link } from 'react-router-dom'
import MarkdownPage from '../../components/MarkdownPage'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import content from '../../../lotro/expansions/wolves-of-mordor/pre-order-guide/index.md?raw'
import './Lotro.css'

interface GalleryLink {
  to: string
  title: string
  blurb: string
}

const galleries: GalleryLink[] = [
  {
    to: '/lotro/expansions/wolves-of-mordor/pre-order-guide/were-wolf-hunters',
    title: "Were-wolf Hunter's Set",
    blurb:
      'Collector\u2019s / Ultimate armour across multiple races, plus an Evendim Blue dye example',
  },
  {
    to: '/lotro/expansions/wolves-of-mordor/pre-order-guide/dauntless-commander',
    title: "Dauntless Commander's Set",
    blurb:
      'Ultimate-exclusive armour, shown mostly undyed since it does not dye well',
  },
  {
    to: '/lotro/expansions/wolves-of-mordor/pre-order-guide/mounts-and-war-steeds',
    title: 'Mounts & War-steed Cosmetics',
    blurb: 'The horse and pony, plus per-piece war-steed previews',
  },
]

export default function WolvesPreOrderGuide() {
  return (
    <section className="page-card">
      <p>
        <Link to="/lotro/expansions/wolves-of-mordor">
          &larr; Back to The Wolves of Mordor
        </Link>
      </p>

      <MarkdownPage content={content} />

      <div className="lotro-nav-links">
        {galleries.map((gallery) => (
          <Link to={gallery.to} className="lotro-nav-card" key={gallery.to}>
            <strong>{gallery.title}</strong>
            <span>{gallery.blurb}</span>
          </Link>
        ))}
      </div>

      <LotroDisclaimer />
    </section>
  )
}
