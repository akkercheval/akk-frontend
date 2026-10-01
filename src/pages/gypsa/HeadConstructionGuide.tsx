import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/gypsa-canonical-head-construction-guide.md?raw'
import neutralPose from '../../../gypsa/Approved Reference/Gypsa Canonical Head Neutral Pose.png?url'
import referenceViews from '../../../gypsa/Approved Reference/Gypsa Canonical Head Reference Views.png?url'
import muzzle from '../../../gypsa/Approved Reference/Gypsa Canonical Muzzle.png?url'
import expressions from '../../../gypsa/Approved Reference/Gypsa Head Expressions.png?url'
import profileView from '../../../gypsa/Approved Reference/Gypsa Profile View.png?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: neutralPose, caption: 'Canonical Head — Neutral Pose (closest overall reference)' },
  { src: referenceViews, caption: 'Head Reference Views — Front / 3-4 / Profile validation' },
  { src: muzzle, caption: 'Canonical Muzzle — the authoritative muzzle drawing' },
  { src: expressions, caption: 'Head Expressions — the 8 core expressions' },
  { src: profileView, caption: 'Canonical Profile View' },
]

export default function HeadConstructionGuide() {
  return <CanonicalDoc content={content} images={images} />
}
