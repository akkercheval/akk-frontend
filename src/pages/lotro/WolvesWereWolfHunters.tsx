import { Link } from 'react-router-dom'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import CosmeticViewer, { type CosmeticView } from '../../components/CosmeticViewer'

const BASE = '/images/LotRO/wolves-of-mordor'

const views: CosmeticView[] = [
  {
    id: 'human',
    label: 'Human',
    group: 'Race',
    src: `${BASE}/were-wolf-hunters-f-human-undyed.png`,
    alt: "Were-wolf Hunter's set on a female human, undyed",
    caption: 'Female Human — undyed',
  },
  {
    id: 'elf',
    label: 'Elf',
    group: 'Race',
    src: `${BASE}/were-wolf-hunters-f-elf-undyed-hooded.png`,
    alt: "Were-wolf Hunter's set on a female elf, undyed, hood up",
    caption: 'Female Elf — undyed, hood up',
  },
  {
    id: 'dwarf',
    label: 'Dwarf',
    group: 'Race',
    src: `${BASE}/were-wolf-hunters-dwarf-undyed.png`,
    alt: "Were-wolf Hunter's set on a dwarf, undyed",
    caption: 'Dwarf — undyed',
  },
  {
    id: 'beorning',
    label: 'Beorning',
    group: 'Race',
    src: `${BASE}/were-wolf-hunters-f-beorning-undyed.png`,
    alt: "Were-wolf Hunter's set on a female Beorning, undyed, with the Hunter's Hound pet",
    caption: "Female Beorning — undyed (shown with the Hunter's Hound pet)",
  },
  {
    id: 'hobbit',
    label: 'Hobbit',
    group: 'Race',
    src: `${BASE}/were-wolf-hunters-f-hobbit-evendim-blue-dye.png`,
    alt: "Were-wolf Hunter's set on a female hobbit, dyed Evendim Blue",
    caption: 'Female Hobbit — dyed Evendim Blue (no undyed hobbit shot yet)',
  },
  {
    id: 'cloak-hooded',
    label: 'Hooded Cloak',
    group: 'Options',
    src: `${BASE}/were-wolf-hunters-cloak-hooded-undyed.png`,
    alt: "Were-wolf Hunter's hooded cloak, undyed",
    caption: 'Hooded cloak — undyed',
  },
  {
    id: 'dyed',
    label: 'Dyed',
    group: 'Options',
    src: `${BASE}/were-wolf-hunters-f-hobbit-evendim-blue-dye.png`,
    alt: "Were-wolf Hunter's set dyed Evendim Blue on a female hobbit",
    caption: 'Full set dyed Evendim Blue (Female Hobbit)',
  },
  {
    id: 'dyed-cloak',
    label: 'Dyed Cloak',
    group: 'Options',
    src: `${BASE}/were-wolf-hunters-f-hobbit-cloak-evendim-blue-dye.png`,
    alt: "Were-wolf Hunter's hooded cloak dyed Evendim Blue on a female hobbit",
    caption: 'Hooded cloak dyed Evendim Blue (Female Hobbit)',
  },
]

export default function WolvesWereWolfHunters() {
  return (
    <section className="page-card">
      <p>
        <Link to="/lotro/expansions/wolves-of-mordor/pre-order-guide">
          &larr; Back to the Pre-Order Guide
        </Link>
      </p>

      <h2>Were-wolf Hunter&rsquo;s Set</h2>
      <p>
        Included with the <strong>Collector&rsquo;s</strong> and{' '}
        <strong>Ultimate</strong> editions. This set dyes well — use the{' '}
        <em>Dyed</em> buttons to see an Evendim Blue example. Pick a race or
        option below; the image resizes to fit your window.
      </p>

      <CosmeticViewer views={views} defaultViewId="human" />

      <LotroDisclaimer />
    </section>
  )
}
