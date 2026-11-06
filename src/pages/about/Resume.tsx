import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import resumeContent from '../../assets/resume-web.md?raw'
import './Resume.css'

export default function Resume() {
  return (
    <article className="page-card resume-page">
      <div className="resume-actions">
        <a
          href="/resume.pdf"
          download="Amanda-Kercheval-Resume.pdf"
          className="resume-download-btn"
          aria-label="Download resume as PDF"
        >
          ⬇ Download PDF
        </a>
      </div>

      <div className="resume-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {resumeContent}
        </ReactMarkdown>
      </div>
    </article>
  )
}
