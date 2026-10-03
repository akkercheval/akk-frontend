import { Link } from 'react-router-dom'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import CosmeticViewer, { type CosmeticView } from '../../components/CosmeticViewer'

const BASE = '/images/LotRO/wolves-of-mordor'

const views: CosmeticView[] = [
  {
    id: 'full-undyed',
    label: 'Full Set (Undyed)',
    group: 'Piece',
    src: `${BASE}/were-wolf-hunters-war-steed-all-undyed.png`,
    alt: "Were-wolf Hunter's war-steed, full set, undyed",
    caption: 'Full set — undyed',
  },
  {
    id: 'full-navy',
    label: 'Full Set (Navy)',
    group: 'Piece',
    src: `${BASE}/were-wolf-war-steed-all-navy.png`,
    alt: "Were-wolf Hunter's war-steed, full set with Navy dye",
    caption: 'Full set — dyeable pieces shown in Navy',
  },
  {
    id: 'caparison',
    label: 'Caparison',
    group: 'Piece',
    src: `${BASE}/were-wolf-hunters-war-steed-caparison-navy.png`,
    alt: "Were-wolf Hunter's war-steed caparison, Navy dye",
    caption: 'Caparison — dyeable (shown in Navy)',
  },
  {
    id: 'head-piece',
    label: 'Head-piece',
    group: 'Piece',
    src: `${BASE}/were-wolf-hunters-war-steed-head-piece-navy.png`,
    alt: "Were-wolf Hunter's war-steed head-piece, Navy dye",
    caption: 'Head-piece — dyeable (shown in Navy)',
  },
  {
    id: 'leg-guards',
    label: 'Leg-guards',
    group: 'Piece',
    src: `${BASE}/were-wolf-hunters-war-steed-leg-guards-navy.png`,
    alt: "Were-wolf Hunter's war-steed leg-guards, Navy dye",
    caption: 'Leg-guards — dyeable (shown in Navy)',
  },
  {
    id: 'saddle',
    label: 'Saddle',
    group: 'Piece',
    src: `${BASE}/were-wolf-hunters-war-steed-saddle.png`,
    alt: "Were-wolf Hunter's war-steed saddle",
    caption: 'Saddle — not dyeable',
  },
  {
    id: 'tail',
    label: 'Tail',
    group: 'Piece',
    src: `${BASE}/were-wolf-hunters-war-steed-tail.png`,
    alt: "Were-wolf Hunter's war-steed tail, with Black applied to the tail hair",
    caption:
      'Tail — four straps around the tail; takes the war-steed hide colours (Black shown, which only tints the horse\u2019s tail hair, not the cosmetic straps)',
  },
  {
    id: 'accessory',
    label: 'Accessory',
    group: 'Piece',
    src: `${BASE}/were-wolf-war-steed-accessory.png`,
    alt: "Were-wolf Hunter's war-steed accessory",
    caption: 'Accessory — not dyeable',
  },
]

export default function WolvesWereWolfWarSteed() {
  return (
    <section className="page-card">
      <p>
        <Link to="/lotro/expansions/wolves-of-mordor/pre-order-guide/mounts-and-war-steeds">
          &larr; Back to Mounts &amp; War-steed Cosmetics
        </Link>
      </p>

      <h2>Were-wolf Hunter&rsquo;s War-steed</h2>
      <p>
        The head-piece, leg-guards, and caparison are <strong>dyeable</strong>{' '}
        (shown here in Navy). The saddle and accessory are{' '}
        <strong>not dyeable</strong>. The tail is a special case — see its note.
        Pick a piece below; the image resizes to fit your window.
      </p>

      <CosmeticViewer views={views} defaultViewId="full-undyed" />

      <LotroDisclaimer />
    </section>
  )
}
