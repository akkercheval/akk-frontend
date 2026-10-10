import { Link } from 'react-router-dom'
import './Classes.css'

interface ClassLink {
  slug: string
  name: string
  icon: string
}

const classes: ClassLink[] = [
  { slug: 'beorning', name: 'Beorning', icon: 'beorning-icon.png' },
  { slug: 'brawler', name: 'Brawler', icon: 'brawler-icon.png' },
  { slug: 'burglar', name: 'Burglar', icon: 'burglar-icon.png' },
  { slug: 'captain', name: 'Captain', icon: 'captain-icon.png' },
  { slug: 'champion', name: 'Champion', icon: 'champion-icon.png' },
  { slug: 'guardian', name: 'Guardian', icon: 'guardian-icon.png' },
  { slug: 'hunter', name: 'Hunter', icon: 'hunter-icon.png' },
  { slug: 'lore-master', name: 'Lore-master', icon: 'lore-master-icon.png' },
  { slug: 'mariner', name: 'Mariner', icon: 'mariner-icon.png' },
  { slug: 'minstrel', name: 'Minstrel', icon: 'minstrel-icon.png' },
  { slug: 'rune-keeper', name: 'Rune-keeper', icon: 'rune-keeper-icon.png' },
  { slug: 'warden', name: 'Warden', icon: 'warden-icon.png' },
]

export default function Classes() {
  return (
    <section className="page-card">
      <h2>Class Guides</h2>
      <p>
        Twelve classes, twelve ways to adventure through Middle-earth. These
        guides are written for players who are new to the game or new to the
        class &mdash; the goal is to get you comfortable and confident, not to
        chase the last point of theorycraft.
      </p>
      <p>
        <Link to="/lotro">&larr; Back to LotRO</Link>
      </p>

      <p>
        <Link to="/lotro/classes/overview" className="class-overview-link">
          Compare all twelve classes &rarr;
        </Link>
      </p>

      <div className="class-button-grid">
        {classes.map((cls) => (
          <Link
            to={`/lotro/classes/${cls.slug}`}
            className="class-button"
            key={cls.slug}
          >
            <img
              className="class-button-icon"
              src={`/images/LotRO/classes/${cls.icon}`}
              alt={`${cls.name} class icon`}
              width={64}
              height={64}
              loading="lazy"
            />
            <span className="class-button-name">{cls.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
