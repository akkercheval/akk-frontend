import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../components/MarkdownPage.css'
import './ClassGuide.css'

interface ClassGuideProps {
  /** Display name of the class, e.g. "Beorning". */
  name: string
  /** Icon filename inside /images/LotRO/classes, e.g. "beorning-icon.png". */
  icon: string
  /** Markdown body (without the top-level class-name heading). */
  content: string
}

/** Turn heading text into a URL-fragment-friendly id (e.g. "Pets" -> "pets"). */
function slugify(children: ReactNode): string {
  const text = extractText(children)
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
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

export default function ClassGuide({ name, icon, content }: ClassGuideProps) {
  return (
    <article className="page-card markdown-page class-guide">
      <p className="class-guide-back">
        <Link to="/lotro/classes">&larr; Back to Classes</Link>
      </p>
      <h1 className="class-guide-title">
        <img
          className="class-guide-icon"
          src={`/images/LotRO/classes/${icon}`}
          alt={`${name} class icon`}
          width={48}
          height={48}
        />
        <span>{name}</span>
      </h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => <h2 id={slugify(children)}>{children}</h2>,
          h3: ({ children }) => <h3 id={slugify(children)}>{children}</h3>,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
