import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/Gypsa Canonical Tail Design Specification.md?raw'
import profileView from '../../../gypsa/Approved Reference/Gypsa Profile View.png?url'
import furEnvelope from '../../../gypsa/Approved Reference/Gypsa Canonical Tail Fur Envelope.png?url'
import validation from '../../../gypsa/Approved Reference/Gypsa Tail Validation Three Views.png?url'
import neutralCurve from '../../../gypsa/Approved Reference/Gypsa Tail Neutral Curve.png?url'
import thinkingCurve from '../../../gypsa/Approved Reference/Gypsa Tail Thinking Curve.png?url'
import puzzledCurve from '../../../gypsa/Approved Reference/Gypsa Tail Puzzled Curve.png?url'
import inquisitiveCurve from '../../../gypsa/Approved Reference/Gypsa Tail Inquisitive Curve.png?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: profileView, caption: 'Canonical Profile View — governs tail shape and body relationship' },
  { src: furEnvelope, caption: 'Canonical Tail Fur Envelope — Soft Stylized B' },
  { src: validation, caption: 'Neutral Tail Validation — three views' },
  { src: neutralCurve, caption: 'Tail expression centerline — Neutral' },
  { src: thinkingCurve, caption: 'Tail expression centerline — Thinking' },
  { src: puzzledCurve, caption: 'Tail expression centerline — Puzzled' },
  { src: inquisitiveCurve, caption: 'Tail expression centerline — Inquisitive' },
]

export default function TailDesignSpecification() {
  return <CanonicalDoc content={content} images={images} />
}
