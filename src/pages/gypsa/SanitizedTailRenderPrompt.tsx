import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/Gypsa Directionally Sanitized Tail Render Prompt.md?raw'
import furEnvelope from '../../../gypsa/Approved Reference/Gypsa Canonical Tail Fur Envelope.png?url'
import validation from '../../../gypsa/Approved Reference/Gypsa Tail Validation Three Views.png?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: furEnvelope, caption: 'Canonical Tail Fur Envelope — Soft Stylized B' },
  { src: validation, caption: 'Neutral Tail Validation — three views' },
]

export default function SanitizedTailRenderPrompt() {
  return <CanonicalDoc content={content} images={images} />
}
