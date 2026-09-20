import MarkdownPage from '../../components/MarkdownPage'
import content from '../../../gypsa/Approved Reference/gypsa-production-guide.md?raw'
import './MakingOfGypsa.css'

export default function GyspaProductionGuide() {
  return (
    <div className="gypsa-notebook">
      <div className="gypsa-notebook_spiral" aria-hidden="true"></div>
      <div className="gypsa-page">
        <MarkdownPage content={content} />
      </div>
    </div>
  )
}
