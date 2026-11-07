import MarkdownPage from '../../components/MarkdownPage'
import content from '../../../gypsa/gypsa-project-status.md?raw'
import './MakingOfGypsa.css'

export default function ProjectStatus() {
  return (
    <div className="gypsa-notebook">
      <div className="gypsa-notebook_spiral" aria-hidden="true"></div>
      <div className="gypsa-page">
        <MarkdownPage content={content} />
      </div>
    </div>
  )
}
