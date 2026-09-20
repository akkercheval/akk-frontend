import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/Ear Specification.md?raw'
import canonicalEar from '../../../gypsa/Approved Reference/Gypsa Canonical Ear.png?url'
import earFront from '../../../gypsa/Approved Reference/Ear Construction Front view.png?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: canonicalEar, caption: 'Canonical Ear — the correct ears (authoritative reference)' },
  { src: earFront, caption: 'Ear Construction — front view' },
]

export default function EarSpecification() {
  return <CanonicalDoc content={content} images={images} />
}
