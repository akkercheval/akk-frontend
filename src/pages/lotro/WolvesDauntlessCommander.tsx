import { Link } from 'react-router-dom'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import CosmeticViewer, { type CosmeticView } from '../../components/CosmeticViewer'

const BASE = '/images/LotRO/wolves-of-mordor'

const views: CosmeticView[] = [
  {
    id: 'human',
    label: 'Human',
    group: 'Race',
    src: `${BASE}/dauntless-commander-f-human-undyed.png`,
    alt: "Dauntless Commander's set on a female human, undyed",
    caption: 'Female Human — undyed',
  },
  {
    id: 'elf',
    label: 'Elf',
    group: 'Race',
    src: `${BASE}/dauntless-commander-f-elf-undyed.png`,
    alt: "Dauntless Commander's set on a female elf, undyed",
    caption: 'Female Elf — undyed',
  },
  {
    id: 'dwarf',
    label: 'Dwarf',
    group: 'Race',
    src: `${BASE}/dauntless-commander-dwarf-undyed.png`,
    alt: "Dauntless Commander's set on a dwarf, undyed",
    caption: 'Dwarf — undyed',
  },
  {
    id: 'beorning',
    label: 'Beorning',
    group: 'Race',
    src: `${BASE}/dauntless-commander-f-beorning-undyed.png`,
    alt: "Dauntless Commander's set on a female Beorning, undyed",
    caption: 'Female Beorning — undyed',
  },
  {
    id: 'hobbit',
    label: 'Hobbit',
    group: 'Race',
    src: `${BASE}/dauntless-commander-f-hobbit-undyed.png`,
    alt: "Dauntless Commander's set on a female hobbit, undyed",
    caption: 'Female Hobbit — undyed',
  },
  {
    id: 'cloak-hooded',
    label: 'Hooded Cloak',
    group: 'Options',
    src: `${BASE}/dauntless-commander-cloak-hooded-undyed.png`,
    alt: "Dauntless Commander's hooded cloak, undyed",
    caption: 'Hooded cloak — undyed',
  },
  {
    id: 'dyed',
    label: 'Dyed',
    group: 'Options',
    src: `${BASE}/dauntless-commander-f-hobbit-evendim-blue-dye.png`,
    alt: "Dauntless Commander's set dyed Evendim Blue on a female hobbit",
    caption: 'Full set dyed Evendim Blue (Female Hobbit) — this set does not dye well',
  },
  {
    id: 'dyed-cloak',
    label: 'Dyed Cloak',
    group: 'Options',
    src: `${BASE}/dauntless-commander-f-hobbit-cloak-evendim-blue-dye.png`,
    alt: "Dauntless Commander's hooded cloak dyed Evendim Blue on a female hobbit",
    caption: 'Hooded cloak dyed Evendim Blue (Female Hobbit)',
  },
]

export default function WolvesDauntlessCommander() {
  return (
    <section className="page-card">
      <p>
        <Link to="/lotro/expansions/wolves-of-mordor/pre-order-guide">
          &larr; Back to the Pre-Order Guide
        </Link>
      </p>

      <h2>Dauntless Commander&rsquo;s Set</h2>
      <p>
        The <strong>Ultimate</strong>-edition-exclusive armour. Unlike the
        Were-wolf Hunter&rsquo;s gear, this set does <strong>not</strong> dye
        well — the <em>Dyed</em> buttons show an Evendim Blue attempt so you can
        judge for yourself. Pick a race or option below; the image resizes to fit
        your window.
      </p>

      <CosmeticViewer views={views} defaultViewId="human" />

      <LotroDisclaimer />
    </section>
  )
}
