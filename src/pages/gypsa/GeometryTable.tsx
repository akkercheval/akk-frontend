import CanonicalDoc, { type CanonicalImage } from '../../components/CanonicalDoc'
import content from '../../../gypsa/Approved Reference/Gypsa Canonical Geometry Table v0.1.md?raw'
import upright from '../../../gypsa/Approved Reference/gypsa_upright_reference.svg?url'
import muzzle from '../../../gypsa/Approved Reference/Gypsa Canonical Muzzle.png?url'
import './MakingOfGypsa.css'

const images: CanonicalImage[] = [
  { src: upright, caption: 'Source of the extracted coordinates — the upright profile reference' },
  { src: muzzle, caption: 'Canonical Muzzle — the drawing the muzzle measurements were read from' },
]

export default function GeometryTable() {
  return <CanonicalDoc content={content} images={images} />
}
