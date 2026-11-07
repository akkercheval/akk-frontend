import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import CosmeticViewer, { type CosmeticView } from '../../components/CosmeticViewer'
import content from '../../../lotro/expansions/wolves-of-mordor/survival-instincts/index.md?raw'
import '../../components/MarkdownPage.css'
import './Lotro.css'

const BASE = '/images/LotRO/wolves-of-mordor/survival-instincts'

const TOP_ID = 'survival-instincts-page'

/** In-page sections, in the order they appear, for the jump-link bar. */
const pageSections: { id: string; label: string }[] = [
  { id: 'the-launch-letter', label: 'Launch Letter' },
  { id: 'the-letter-in-game', label: 'Letter Screenshots' },
  { id: 'the-trait-tree-panel', label: 'Trait Tree Panel' },
  { id: 'the-skill-groups', label: 'Skill Groups' },
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

const letterViews: CosmeticView[] = [
  {
    id: 'letter-1',
    label: 'Page 1',
    group: 'Letter',
    src: `${BASE}/survival-instincts-letter-page-1.png`,
    alt: 'Survival Instincts launch letter, page 1',
    caption: 'The launch letter, page 1',
  },
  {
    id: 'letter-2',
    label: 'Page 2',
    group: 'Letter',
    src: `${BASE}/survival-instincts-letter-page-2.png`,
    alt: 'Survival Instincts launch letter, page 2',
    caption: 'The launch letter, page 2',
  },
]

const panelViews: CosmeticView[] = [
  {
    id: 'trait-tree-panel',
    label: 'Trait Tree Panel',
    group: 'Panel',
    src: `${BASE}/survival-instincts-trait-tree-panel.png`,
    alt: 'The Survival Instincts tab of the Trait Tree Panel, Wolves of Mordor selected',
    caption:
      'Survival Instincts tab: Skills, Tactics, Enhancements and Lessons, with Points Available, Points Spent and Resets Available along the bottom',
  },
]

interface SkillGroup {
  id: string
  name: string
  summary: string
  views: CosmeticView[]
}

const skillGroups: SkillGroup[] = [
  {
    id: 'khemozel',
    name: 'Khemoz\u00eal',
    summary:
      'The \u201cSkills of the Khemoz\u00eal\u201d trait grants three skills: Wolf-hunters, Survival and Defence.',
    views: [
      {
        id: 'khemozel-trait',
        label: 'Trait',
        group: 'Trait',
        src: `${BASE}/survival-instincts-traits-skills-khemozel.png`,
        alt: 'Skills of the Khemoz\u00eal trait tooltip',
        caption: 'Skills of the Khemoz\u00eal trait',
      },
      {
        id: 'khemozel-wolf-hunters',
        label: 'Wolf-hunters',
        group: 'Skills',
        src: `${BASE}/survival-instincts-skills-khemozel-wolf-hunters.png`,
        alt: 'Khemoz\u00eal Wolf-hunters skill tooltip',
        caption: 'Khemoz\u00eal Wolf-hunters: summons spectral wolf-hounds that savage a target',
      },
      {
        id: 'khemozel-survival',
        label: 'Survival',
        group: 'Skills',
        src: `${BASE}/survival-instincts-skills-khemozel-survival.png`,
        alt: 'Khemoz\u00eal Survival skill tooltip',
        caption: 'Khemoz\u00eal Survival: restores Morale instantly, then over time',
      },
      {
        id: 'khemozel-defence',
        label: 'Defence',
        group: 'Skills',
        src: `${BASE}/survival-instincts-skills-khemozel-defence.png`,
        alt: 'Khemoz\u00eal Defence skill tooltip',
        caption: 'Khemoz\u00eal Defence: reduces incoming damage for a short time',
      },
    ],
  },
  {
    id: 'scouts',
    name: 'Scouts of Draugardh',
    summary:
      'The \u201cSkills of the Scout\u201d trait grants three skills: Strike, Whistle and Herbs.',
    views: [
      {
        id: 'scout-trait',
        label: 'Trait',
        group: 'Trait',
        src: `${BASE}/survival-instincts-traits-skills-scout.png`,
        alt: 'Skills of the Scout trait tooltip',
        caption: 'Skills of the Scout trait',
      },
      {
        id: 'scout-strike',
        label: 'Strike',
        group: 'Skills',
        src: `${BASE}/survival-instincts-skills-scout-strike.png`,
        alt: 'Scout Strike skill tooltip',
        caption: 'Scout Strike: guarantees critical hits for your next three skills',
      },
      {
        id: 'scout-whistle',
        label: 'Whistle',
        group: 'Skills',
        src: `${BASE}/survival-instincts-skills-scout-whistle.png`,
        alt: 'Scout Whistle skill tooltip',
        caption: 'Scout Whistle: nearby Scouts loose a volley of arrows on the marked ground',
      },
      {
        id: 'scout-herbs',
        label: 'Herbs',
        group: 'Skills',
        src: `${BASE}/survival-instincts-skills-scout-herbs.png`,
        alt: 'Scout Herbs skill tooltip',
        caption: 'Scout Herbs: restores morale to you and your fellowship',
      },
    ],
  },
  {
    id: 'tetikir',
    name: 'T\u00eatikir',
    summary:
      'The \u201cSkills of the T\u00eatikir\u201d trait grants three skills: Cry, Ancestors and Guidance.',
    views: [
      {
        id: 'tetikir-trait',
        label: 'Trait',
        group: 'Trait',
        src: `${BASE}/survival-instincts-traits-skills-tetikir.png`,
        alt: 'Skills of the T\u00eatikir trait tooltip',
        caption: 'Skills of the T\u00eatikir trait',
      },
      {
        id: 'tetikir-cry',
        label: 'Cry',
        group: 'Skills',
        src: `${BASE}/survival-instincts-skills-tetikir-cry.png`,
        alt: 'T\u00eatikir Cry skill tooltip',
        caption: 'T\u00eatikir Cry: a battle cry that deals Light damage to nearby foes',
      },
      {
        id: 'tetikir-ancestors',
        label: 'Ancestors',
        group: 'Skills',
        src: `${BASE}/survival-instincts-skills-tetikir-ancestors.png`,
        alt: 'T\u00eatikir Ancestors skill tooltip',
        caption: 'T\u00eatikir Ancestors: restores 20% of maximum Morale',
      },
      {
        id: 'tetikir-guidance',
        label: 'Guidance',
        group: 'Skills',
        src: `${BASE}/survival-instincts-skills-tetikir-guidance.png`,
        alt: 'T\u00eatikir Guidance skill tooltip',
        caption: 'T\u00eatikir Guidance: boosts outgoing damage and healing for your next five critical hits',
      },
    ],
  },
]

function BackToTop() {
  return (
    <p className="neighbours-back-to-top">
      <a href={`#${TOP_ID}`}>&uarr; Back to top</a>
    </p>
  )
}

export default function WolvesSurvivalInstincts() {
  return (
    <section className="page-card" id={TOP_ID}>
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

      <h2 id="the-letter-in-game">The Letter In-Game</h2>
      <p>
        The original letter as it appears in the mailbox, for comparison with the
        readable text above.
      </p>
      <CosmeticViewer views={letterViews} defaultViewId="letter-1" />
      <BackToTop />

      <h2 id="the-trait-tree-panel">The Trait Tree Panel</h2>
      <p>
        Survival Instincts lives on its own tab of the Trait Tree Panel. Traits
        you have assigned points to (and the ones you have slotted) are
        highlighted in gold; the slotted traits are repeated in the active column
        on the right.
      </p>
      <CosmeticViewer views={panelViews} defaultViewId="trait-tree-panel" />
      <BackToTop />

      <h2 id="the-skill-groups">The Skill Groups</h2>
      <p>
        Each group below has a trait that grants three skills while it is
        equipped. The tooltips show what each skill does, its requirement and its
        cooldown.
      </p>
      {skillGroups.map((group) => (
        <div className="neighbour-gallery" key={group.id}>
          <h3>{group.name}</h3>
          <p>{group.summary}</p>
          <CosmeticViewer views={group.views} defaultViewId={group.views[0]?.id} />
        </div>
      ))}
      <BackToTop />

      <LotroDisclaimer />
    </section>
  )
}
