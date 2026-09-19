import MarkdownPage from './MarkdownPage'
import './CanonicalDoc.css'

export interface CanonicalImage {
  /** Bundled URL for the image (import via `?url`). */
  src: string
  /** Short caption shown beneath the figure. */
  caption: string
}

interface CanonicalDocProps {
  /** Raw markdown content (import via `?raw`). */
  content: string
  /** Canonical reference images shown as a gallery above the document body. */
  images?: CanonicalImage[]
  /** Optional heading for the image gallery. */
  galleryTitle?: string
}

/**
 * Renders a canonical design document: a curated gallery of the approved
 * reference images followed by the document's markdown body, all inside the
 * shared Gypsa notebook layout.
 */
export default function CanonicalDoc({
  content,
  images = [],
  galleryTitle = 'Canonical Reference Images',
}: CanonicalDocProps) {
  return (
    <div className="gypsa-notebook">
      <div className="gypsa-notebook_spiral" aria-hidden="true"></div>
      <div className="gypsa-page">
        {images.length > 0 && (
          <section className="canonical-gallery" aria-label={galleryTitle}>
            <h3 className="canonical-gallery_title">{galleryTitle}</h3>
            <div className="canonical-gallery_grid">
              {images.map((image) => (
                <figure className="canonical-figure" key={image.src}>
                  <img src={image.src} alt={image.caption} loading="lazy" />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
        <MarkdownPage content={content} />
      </div>
    </div>
  )
}
