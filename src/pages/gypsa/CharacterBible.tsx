import MarkdownPage from '../../components/MarkdownPage'
import content from '../../../gypsa/Approved Reference/gypsa-character-bible.md?raw'
import './MakingOfGypsa.css'

export default function GyspaCharacterBible() {
  return (
    <div className="gypsa-notebook">
      <div className="gypsa-notebook_spiral" aria-hidden="true"></div>
      <div className="gypsa-page">
        <MarkdownPage content={content} />
      </div>
    </div>
  )
}
