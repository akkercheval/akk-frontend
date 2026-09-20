import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/Gypsa Canonical Tail Render Prompt.md?raw'
import furEnvelope from '../../../gypsa/Approved Reference/Gypsa Canonical Tail Fur Envelope.png?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: furEnvelope, caption: 'Canonical Tail Fur Envelope — the target this prompt produces' },
]

export default function TailRenderPrompt() {
  return <CanonicalDoc content={content} images={images} />
}
