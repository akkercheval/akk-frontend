import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/canonical-body-dummy-v2.0.md?raw'
import profile from '../../../gypsa/Approved Reference/canonical-body-dummy-v2.0-profile.svg?url'
import back from '../../../gypsa/Approved Reference/canonical-body-dummy-v2.0-back.svg?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: profile, caption: 'Body Dummy v2.0 — profile view (staff shown)' },
  { src: back, caption: 'Body Dummy v2.0 — straight-on front/back view' },
]

export default function GyspaBodyDummy() {
  return <CanonicalDoc content={content} images={images} />
}
