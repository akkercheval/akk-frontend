import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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

export default function MarkdownPage({ content }: MarkdownPageProps) {
  return (
    <article className="page-card markdown-page">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{ td: ColorCell }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
