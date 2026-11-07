import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from 'react-router-dom'
import './MarkdownPage.css'

interface MarkdownPageProps {
  content: string
}

function ColorCell({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement> & { children?: React.ReactNode }) {
  const text = String(children ?? '').trim()
  const hexMatch = text.match(/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/)

  if (hexMatch) {
    return (
      <td {...props}>
        <span className="color-swatch-inline" style={{ backgroundColor: text }} />
        <code>{text}</code>
      </td>
    )
  }

  return <td {...props}>{children}</td>
}

/**
 * Source markdown links to sibling documents by filename so the files stay
 * portable outside the site (the Gypsa canon set does this). On the site those
 * filenames must resolve to routes. Keys are the decoded file basenames.
 */
const MD_FILE_ROUTES: Record<string, string> = {
  'Gypsa Head and Expression.md': '/gypsa/head-and-expression',
  'Gypsa Body and Tail.md': '/gypsa/body-and-tail',
  'Gypsa Equipment.md': '/gypsa/equipment',
  'Gypsa Rendering Standard.md': '/gypsa/rendering-standard',
  'START HERE — Gypsa Reference Guide.md': '/gypsa/reference-guide',
  // LotRO: Folly of Nagakhêdi boss pages (index.md links to them by filename)
  'badharal-the-gorger.md': '/lotro/raids/folly-of-nagakhedi/badharal-the-gorger',
  'maukhorn.md': '/lotro/raids/folly-of-nagakhedi/maukhorn',
  'legion-of-lhaereth.md': '/lotro/raids/folly-of-nagakhedi/legion-of-lhaereth',
  'zamaktar-the-putrescent.md': '/lotro/raids/folly-of-nagakhedi/zamaktar-the-putrescent',
}

function MarkdownLink({
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children?: React.ReactNode }) {
  // Only relative links to .md files need special handling; everything else
  // (external URLs, site-absolute paths, #anchors) renders as a normal anchor.
  const isRelativeMd =
    !!href && !/^([a-z][a-z0-9+.-]*:|\/|#)/i.test(href) && /\.md(#.*)?$/i.test(href)

  if (!isRelativeMd) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  const rawName = href!.replace(/#.*$/, '').split('/').pop() ?? ''
  let basename: string
  try {
    basename = decodeURIComponent(rawName)
  } catch {
    basename = rawName
  }

  const route = MD_FILE_ROUTES[basename]
  if (route) {
    return <Link to={route}>{children}</Link>
  }

  // A relative .md file with no page on the site: show the text, not a dead link.
  return <>{children}</>
}

export default function MarkdownPage({ content }: MarkdownPageProps) {
  return (
    <article className="page-card markdown-page">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ td: ColorCell, a: MarkdownLink }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
