import MarkdownPage from '../../components/MarkdownPage'
import content from '../../../gypsa/gypsa-production-guide.md?raw'
import './MakingOfGypsa.css'

export default function ProductionGuide() {
  return (
    <div className="gypsa-notebook">
      <div className="gypsa-notebook_spiral" aria-hidden="true"></div>
      <div className="gypsa-page">
        <MarkdownPage content={content} />
      </div>
    </div>
  )
}
