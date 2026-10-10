import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../../../components/MarkdownPage.css'

import content from '../../../../lotro/classes/overview.md?raw'

export default function ClassesOverview() {
  return (
    <article className="page-card markdown-page">
      <p>
        <Link to="/lotro/classes">&larr; Back to Classes</Link>
      </p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  )
}
