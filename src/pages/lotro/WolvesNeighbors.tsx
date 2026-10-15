import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import CosmeticViewer, { type CosmeticView } from '../../components/CosmeticViewer'
import content from '../../../lotro/expansions/wolves-of-mordor/neighbors/index.md?raw'
import '../../components/MarkdownPage.css'
import './Lotro.css'

const BASE = '/images/LotRO/wolves-of-mordor/neighbors'

const TOP_ID = 'neighbours-top'

/** In-page sections, in the order they appear, for the jump-link bar. */
const pageSections: { id: string; label: string }[] = [
  { id: 'unlocking-neighbours', label: 'Unlocking Neighbours' },
  { id: 'earning-neighbour-reputation', label: 'Earning Reputation' },
  { id: 'friendship-status-chapter-unlocks', label: 'Friendship & Chapters' },
  { id: 'the-four-launch-neighbours', label: 'The Four Neighbours' },
  { id: 'known-issues', label: 'Known Issues' },
  { id: 'selection-the-neighbour-info-panel', label: 'Selection & Info Panel' },
  { id: 'the-neighbours', label: 'Neighbour Galleries' },
]

/** Slugify heading text to match the ids used in the jump-link bar. */
function slugify(children: ReactNode): string {
  return extractText(children)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s-]+/g, '-')
}

function extractText(node: ReactNode): string {
  if (node == null || node === false) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (typeof node === 'object' && 'props' in node) {
    return extractText((node as { props: { children?: ReactNode } }).props.children)
  }
  return ''
}

interface NeighbourGallery {
  id: string
  name: string
  summary: string
  views: CosmeticView[]
}

const neighbours: NeighbourGallery[] = [
  {
    id: 'emmathron',
    name: 'Emmathron',
    summary:
      'Male Elf who enjoys drawing. Appears in Idhobel, Swanfleet (47.2S, 19.0W); Gift Maker in Celondim, Ered Luin (28.1S, 92.1W).',
    views: [
      {
        id: 'emmathron-summoned',
        label: 'Summoned',
        group: 'Views',
        src: `${BASE}/emmathron-summoned.png`,
        alt: 'Emmathron summoned at a player house',
        caption: 'Emmathron summoned at the house',
      },
      {
        id: 'emmathron-landscape',
        label: 'Landscape',
        group: 'Views',
        src: `${BASE}/emmathron-landscape-location.png`,
        alt: 'Emmathron at his landscape location in Idhobel, Swanfleet',
        caption: 'Landscape location — Idhobel, Swanfleet (47.2S, 19.0W)',
      },
      {
        id: 'emmathron-housing-item',
        label: 'Summoning Item',
        group: 'Items',
        src: `${BASE}/emmathron-housing-item.png`,
        alt: 'Emmathron housing summoning item',
        caption: 'Housing item used to summon Emmathron',
      },
      {
        id: 'emmathron-gift',
        label: 'Gift',
        group: 'Items',
        src: `${BASE}/emmathron-gift.png`,
        alt: 'A gift from Emmathron',
        caption: 'A gift received from Emmathron',
      },
      {
        id: 'emmathron-interactions',
        label: 'Interactions',
        group: 'Panels',
        src: `${BASE}/emmathron-interactions.png`,
        alt: 'Emmathron interaction options',
        caption: 'Interaction options when visiting Emmathron',
      },
      {
        id: 'emmathron-journal',
        label: 'Journal',
        group: 'Panels',
        src: `${BASE}/emmathron-journal-entry.png`,
        alt: 'Emmathron journal entry',
        caption: 'Journal entry',
      },
      {
        id: 'emmathron-info',
        label: 'Neighbour Info',
        group: 'Panels',
        src: `${BASE}/emmathron-neighbor-info-panel.png`,
        alt: 'Emmathron Neighbour Info panel',
        caption: 'Neighbour Info panel',
      },
    ],
  },
  {
    id: 'haldo',
    name: 'Haldo Rushbank',
    summary:
      'Male Hobbit who enjoys cooking. Appears in Michel Delving, The Shire (34.2S, 75.5W); Gift Maker also in Michel Delving (34.0S, 74.9W).',
    views: [
      {
        id: 'haldo-summoned',
        label: 'Summoned',
        group: 'Views',
        src: `${BASE}/haldo-summoned.png`,
        alt: 'Haldo Rushbank summoned at a player house',
        caption: 'Haldo summoned at the house',
      },
      {
        id: 'haldo-landscape',
        label: 'Landscape',
        group: 'Views',
        src: `${BASE}/haldo-landscape-location.png`,
        alt: 'Haldo Rushbank at his landscape location in Michel Delving',
        caption: 'Landscape location — Michel Delving, The Shire (34.2S, 75.5W)',
      },
      {
        id: 'haldo-housing-item',
        label: 'Summoning Item',
        group: 'Items',
        src: `${BASE}/haldo-housing-item.png`,
        alt: 'Haldo Rushbank housing summoning item',
        caption: 'Housing item used to summon Haldo',
      },
      {
        id: 'haldo-journal',
        label: 'Journal',
        group: 'Panels',
        src: `${BASE}/haldo-journal-entry.png`,
        alt: 'Haldo Rushbank journal entry',
        caption: 'Journal entry',
      },
      {
        id: 'haldo-info',
        label: 'Neighbour Info',
        group: 'Panels',
        src: `${BASE}/haldo-neighbor-info.png`,
        alt: 'Haldo Rushbank Neighbour Info panel',
        caption: 'Neighbour Info panel',
      },
    ],
  },
  {
    id: 'golwen',
    name: 'Golwen',
    summary:
      'Female Human and former sailor who plays the flute. Appears in Dol Amroth (75.5S, 72.5W); Gift Maker in Bree-town near the Town Hall (31.2S, 51.1W).',
    views: [
      {
        id: 'golwen-summoned',
        label: 'Summoned',
        group: 'Views',
        src: `${BASE}/golwen-summoned.png`,
        alt: 'Golwen summoned at a player house',
        caption: 'Golwen summoned at the house',
      },
      {
        id: 'golwen-landscape',
        label: 'Landscape',
        group: 'Views',
        src: `${BASE}/golwen-landscape-location.png`,
        alt: 'Golwen at her landscape location in Dol Amroth',
        caption: 'Landscape location — Dol Amroth (75.5S, 72.5W)',
      },
      {
        id: 'golwen-housing-item',
        label: 'Summoning Item',
        group: 'Items',
        src: `${BASE}/golwen-housing-item.png`,
        alt: 'Golwen housing summoning item',
        caption: 'Housing item used to summon Golwen',
      },
      {
        id: 'golwen-journal',
        label: 'Journal',
        group: 'Panels',
        src: `${BASE}/golwen-journal-entry.png`,
        alt: 'Golwen journal entry',
        caption: 'Journal entry',
      },
      {
        id: 'golwen-info',
        label: 'Neighbour Info',
        group: 'Panels',
        src: `${BASE}/golwen-neighbor-info.png`,
        alt: 'Golwen Neighbour Info panel',
        caption: 'Neighbour Info panel',
      },
    ],
  },
  {
    id: 'brutha',
    name: 'Brutha',
    summary:
      'Female Dwarf who enjoys woodcarving. Appears in the Dale-lands just outside Lake-town (17.2N, 27.9W); Gift Maker inside Thorin\u2019s Hall, just past the large statue, in front of the first pillar on the left.',
    views: [
      {
        id: 'brutha-summoned',
        label: 'Summoned',
        group: 'Views',
        src: `${BASE}/brutha-summoned.png`,
        alt: 'Brutha summoned at a player house',
        caption: 'Brutha summoned at the house',
      },
      {
        id: 'brutha-landscape',
        label: 'Landscape',
        group: 'Views',
        src: `${BASE}/brutha-landscape-location.png`,
        alt: 'Brutha at her landscape location in the Dale-lands',
        caption: 'Landscape location — Dale-lands, outside Lake-town (17.2N, 27.9W)',
      },
      {
        id: 'brutha-housing-item',
        label: 'Summoning Item',
        group: 'Items',
        src: `${BASE}/brutha-housing-item.png`,
        alt: 'Brutha housing summoning item',
        caption: 'Housing item used to summon Brutha',
      },
      {
        id: 'brutha-journal',
        label: 'Journal',
        group: 'Panels',
        src: `${BASE}/brutha-journal-entry.png`,
        alt: 'Brutha journal entry',
        caption: 'Journal entry',
      },
      {
        id: 'brutha-info',
        label: 'Neighbour Info',
        group: 'Panels',
        src: `${BASE}/brutha-neighbor-info.png`,
        alt: 'Brutha Neighbour Info panel',
        caption: 'Neighbour Info panel',
      },
    ],
  },
]

const selectionViews: CosmeticView[] = [
  {
    id: 'double-selection',
    label: 'Double Selection',
    group: 'Selection Box',
    src: `${BASE}/neighbors-double-selection-options.png`,
    alt: 'The Standard edition double neighbour selection box options',
    caption: 'Standard edition — the double-selection box (open this one first)',
  },
  {
    id: 'selection-tooltip',
    label: 'Selection Tooltip',
    group: 'Selection Box',
    src: `${BASE}/neighbor-selection-tooltip.png`,
    alt: 'Tooltip shown for a neighbour selection',
    caption: 'Selection tooltip detail',
  },
  {
    id: 'empty-info',
    label: 'Empty Info Panel',
    group: 'Neighbour Info',
    src: `${BASE}/empty-neighbor-info-panel.png`,
    alt: 'The Neighbour Info panel before any neighbours are unlocked',
    caption: 'The Neighbour Info tab before unlocking any neighbours',
  },
]

function BackToTop() {
  return (
    <p className="neighbours-back-to-top">
      <a href={`#${TOP_ID}`}>&uarr; Back to top</a>
    </p>
  )
}

export default function WolvesNeighbors() {
  return (
    <section className="page-card neighbours-page" id={TOP_ID}>
      <p>
        <Link to="/lotro/expansions/wolves-of-mordor">
          &larr; Back to The Wolves of Mordor
        </Link>
      </p>

      <nav className="neighbours-jump" aria-label="Jump to a section">
        <span className="neighbours-jump_label">Jump to:</span>
        {pageSections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="neighbours-jump_link">
            {s.label}
          </a>
        ))}
      </nav>

      <div className="markdown-page">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h2: ({ children }) => <h2 id={slugify(children)}>{children}</h2>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      <h2 id="selection-the-neighbour-info-panel">
        Selection &amp; the Neighbour Info Panel
      </h2>
      <p>
        The screenshots below show the Standard edition&rsquo;s double-selection
        box, a selection tooltip, and the empty Neighbour Info tab before you
        unlock anyone.
      </p>
      <CosmeticViewer views={selectionViews} defaultViewId="double-selection" />
      <BackToTop />

      <h2 id="the-neighbours">The Neighbours</h2>
      <p>
        Each gallery includes the summoned appearance, landscape location,
        housing summoning item, journal, and Neighbour Info panel. Chapter quest
        screenshots are intentionally left out to avoid story spoilers.
      </p>

      {neighbours.map((neighbour) => (
        <div className="neighbour-gallery" key={neighbour.id}>
          <h3>{neighbour.name}</h3>
          <p>{neighbour.summary}</p>
          <CosmeticViewer views={neighbour.views} defaultViewId={neighbour.views[0]?.id} />
        </div>
      ))}
      <BackToTop />

      <LotroDisclaimer />
    </section>
  )
}
