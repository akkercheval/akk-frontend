import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Browse.css'

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

export default function CookieCutterBrowse() {
  const [cutters, setCutters] = useState<CookieCutter[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const isLoggedIn = !!sessionStorage.getItem('akk-token')

  useEffect(() => {
    fetch(`${API_BASE}/api/cookiecutters`)
      .then((res) => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`)
        return res.json()
      })
      .then((data) => setCutters(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="page-card cc-browse">
      <div className="cc-browse-header">
        <Link to="/cookie-cutters" className="cc-back-link">
          ← Back to collection
        </Link>
        <h2>Browse the Collection</h2>
        <div className="cc-browse-toolbar">
          <p className="cc-count">
            {!loading && !error && `${cutters.length} cookie cutters`}
          </p>
          {isLoggedIn && (
            <Link to="/cookie-cutters/new/edit" className="cc-btn cc-btn-add">
              + Add New
            </Link>
          )}
        </div>
      </div>

      {loading && <p className="cc-status">Loading the collection...</p>}
      {error && <p className="cc-status cc-error">Could not load collection: {error}</p>}

      {!loading && !error && cutters.length === 0 && (
        <p className="cc-status">The collection is empty — time to go shopping!</p>
      )}

      {!loading && !error && cutters.length > 0 && (
        <div className="cc-grid">
          {cutters.map((cutter) => (
            <Link
              key={cutter.cookieCutterId}
              to={`/cookie-cutters/${cutter.cookieCutterId}`}
              className="cc-item"
            >
              <div className="cc-item-name">{cutter.name}</div>
              <div className="cc-item-details">
                <span className="cc-item-type">{cutter.type}</span>
                {cutter.lengthInches && cutter.widthInches && (
                  <span className="cc-item-size">
                    {cutter.lengthInches}″ × {cutter.widthInches}″
                  </span>
                )}
              </div>
              {cutter.comments && (
                <p className="cc-item-comments">{cutter.comments}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
