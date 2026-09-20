import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/Gypsa Joint System.md?raw'
import upright from '../../../gypsa/Approved Reference/gypsa_upright_reference.svg?url'
import allFours from '../../../gypsa/Approved Reference/gypsa_all-fours_reference.svg?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: upright, caption: 'Upright rig — joint markers along the axial spine and limb branches' },
  { src: allFours, caption: 'All-fours rig — same joints re-articulated into a walking stance' },
]

export default function JointSystem() {
  return <CanonicalDoc content={content} images={images} />
}
