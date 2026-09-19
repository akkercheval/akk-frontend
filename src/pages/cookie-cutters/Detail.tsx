import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './Detail.css'

interface CookieCutter {
  cookieCutterId: number
  name: string
  lengthInches: number | null
  widthInches: number | null
  type: string
  comments: string | null
  dateAcquired: string | null
  imageUrl: string | null
}

const API_BASE = import.meta.env.VITE_API_URL || ''
const IMAGE_BASE = import.meta.env.VITE_COOKIE_CUTTER_IMAGE_BASE || ''

export default function CookieCutterDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [cutter, setCutter] = useState<CookieCutter | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)

  const isLoggedIn = !!sessionStorage.getItem('akk-token')

  useEffect(() => {
    fetch(`${API_BASE}/api/cookiecutters/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(res.status === 404 ? 'Cookie cutter not found' : `Server returned ${res.status}`)
        return res.json()
      })
      .then((data) => setCutter(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  const handleDelete = () => {
    if (!confirm(`Delete "${cutter?.name}"? This cannot be undone.`)) return

    setDeleting(true)
    const token = sessionStorage.getItem('akk-token')

    fetch(`${API_BASE}/api/cookiecutters/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Delete failed: ${res.status}`)
        navigate('/cookie-cutters/browse')
      })
      .catch((err) => {
        setError(err.message)
        setDeleting(false)
      })
  }

  const getImageUrl = (imageUrl: string | null) => {
    if (!imageUrl) return null
    if (imageUrl.startsWith('http')) return imageUrl
    return `${IMAGE_BASE}/${imageUrl}`
  }

  if (loading) {
    return (
      <section className="page-card cc-detail">
        <p className="cc-status">Loading...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="page-card cc-detail">
        <Link to="/cookie-cutters/browse" className="cc-back-link">
          ← Back to browse
        </Link>
        <p className="cc-status cc-error">{error}</p>
      </section>
    )
  }

  if (!cutter) return null

  const imageUrl = getImageUrl(cutter.imageUrl)

  return (
    <section className="page-card cc-detail">
      <Link to="/cookie-cutters/browse" className="cc-back-link">
        ← Back to browse
      </Link>

      <div className="cc-detail-content">
        {imageUrl && (
          <div className="cc-detail-image-wrapper">
            <img
              src={imageUrl}
              alt={cutter.name}
              className="cc-detail-image"
            />
          </div>
        )}

        <div className="cc-detail-info">
          <h2>{cutter.name}</h2>

          <div className="cc-detail-meta">
            <span className="cc-detail-type">{cutter.type}</span>
            {cutter.lengthInches && cutter.widthInches && (
              <span className="cc-detail-size">
                {cutter.lengthInches}″ × {cutter.widthInches}″
              </span>
            )}
            {cutter.dateAcquired && (
              <span className="cc-detail-date">
                Acquired: {cutter.dateAcquired}
              </span>
            )}
          </div>

          {cutter.comments && (
            <p className="cc-detail-comments">{cutter.comments}</p>
          )}

          {isLoggedIn && (
            <div className="cc-detail-actions">
              <Link
                to={`/cookie-cutters/${cutter.cookieCutterId}/edit`}
                className="cc-btn cc-btn-edit"
              >
                Edit
              </Link>
              <button
                className="cc-btn cc-btn-delete"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
