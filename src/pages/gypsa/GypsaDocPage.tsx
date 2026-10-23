import MarkdownPage from '../../components/MarkdownPage'
import './MakingOfGypsa.css'

interface GypsaDocPageProps {
  content: string
}

export default function GypsaDocPage({ content }: GypsaDocPageProps) {
  return (
    <div className="gypsa-notebook">
      <div className="gypsa-notebook_spiral" aria-hidden="true"></div>
      <div className="gypsa-page">
        <MarkdownPage content={content} />
      </div>
    </div>
  )
}
