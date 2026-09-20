import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/gypsa-body-construction-v1.0.md?raw'
import upright from '../../../gypsa/Approved Reference/gypsa_upright_reference.svg?url'
import allFours from '../../../gypsa/Approved Reference/gypsa_all-fours_reference.svg?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: upright, caption: 'Upright profile structural rig' },
  { src: allFours, caption: 'All-fours profile structural rig' },
]

export default function BodyConstruction() {
  return <CanonicalDoc content={content} images={images} />
}
