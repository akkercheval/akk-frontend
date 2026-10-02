import { useState } from 'react'
import './CosmeticViewer.css'

/** A single selectable view in the cosmetic viewer. */
export interface CosmeticView {
  /** Stable key, used for React keys and selection state. */
  id: string
  /** Button label, e.g. "Human" or "Dyed". */
  label: string
  /** Which button group this view belongs to, e.g. "Race", "Options", "Piece". */
  group: string
  /** Public image URL, e.g. "/images/LotRO/wolves-of-mordor/....png". */
  src: string
  /** Alt text / caption for the image. */
  alt: string
  /** Optional short caption shown under the image. */
  caption?: string
}

interface CosmeticViewerProps {
  /** All selectable views. The first one is shown by default. */
  views: CosmeticView[]
  /** Optional id of the view to show first (defaults to views[0]). */
  defaultViewId?: string
}

export default function CosmeticViewer({ views, defaultViewId }: CosmeticViewerProps) {
  const initial =
    (defaultViewId && views.find((v) => v.id === defaultViewId)?.id) ??
    views[0]?.id
  const [selectedId, setSelectedId] = useState(initial)

  const selected = views.find((v) => v.id === selectedId) ?? views[0]

  if (!selected) return null

  // Group order follows first appearance in the views list.
  const groupOrder = views.reduce<string[]>((acc, v) => {
    if (!acc.includes(v.group)) acc.push(v.group)
    return acc
  }, [])

  return (
    <div className="cosmetic-viewer">
      {groupOrder.map((group) => {
        const groupViews = views.filter((v) => v.group === group)
        if (groupViews.length === 0) return null
        return (
          <div className="cosmetic-viewer-group" key={group} role="group" aria-label={group}>
            <span className="cosmetic-viewer-group-label">{group}</span>
            <div className="cosmetic-viewer-buttons">
              {groupViews.map((view) => (
                <button
                  type="button"
                  key={view.id}
                  className={
                    'cosmetic-viewer-button' +
                    (view.id === selected.id ? ' is-active' : '')
                  }
                  aria-pressed={view.id === selected.id}
                  onClick={() => setSelectedId(view.id)}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>
        )
      })}

      <figure className="cosmetic-viewer-stage">
        <img
          className="cosmetic-viewer-image"
          src={selected.src}
          alt={selected.alt}
        />
        {selected.caption && (
          <figcaption className="cosmetic-viewer-caption">{selected.caption}</figcaption>
        )}
      </figure>
    </div>
  )
}
