import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/Tail Specification Neutral Pose.md?raw'
import furEnvelope from '../../../gypsa/Approved Reference/Gypsa Canonical Tail Fur Envelope.png?url'
import neutralCurve from '../../../gypsa/Approved Reference/Gypsa Tail Neutral Curve.png?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: neutralCurve, caption: 'Neutral tail structural centerline' },
  { src: furEnvelope, caption: 'Canonical Tail Fur Envelope — the neutral fur target' },
]

export default function TailNeutralPose() {
  return <CanonicalDoc content={content} images={images} />
}
