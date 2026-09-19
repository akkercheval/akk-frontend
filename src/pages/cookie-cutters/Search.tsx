import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Search.css'

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

export default function CookieCutterSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<CookieCutter[]>([])
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    setSearched(true)

    fetch(`${API_BASE}/api/cookiecutters/search?name=${encodeURIComponent(query.trim())}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`)
        return res.json()
      })
      .then((data) => setResults(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  return (
    <section className="page-card cc-search">
      <Link to="/cookie-cutters" className="cc-back-link">
        ← Back to collection
      </Link>
      <h2>Search the Collection</h2>
      <p>Search by name, shape, or theme.</p>

      <form className="cc-search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="cc-search-input"
          placeholder="e.g. cat, Christmas, heart..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search cookie cutters"
        />
        <button type="submit" className="cc-search-btn" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <p className="cc-status cc-error">Search failed: {error}</p>}

      {searched && !loading && !error && results.length === 0 && (
        <p className="cc-status">No cookie cutters found for "{query}"</p>
      )}

      {results.length > 0 && (
        <div className="cc-search-results">
          <p className="cc-result-count">
            {results.length} result{results.length !== 1 ? 's' : ''} found
          </p>
          <div className="cc-result-list">
            {results.map((cutter) => (
              <Link
                key={cutter.cookieCutterId}
                to={`/cookie-cutters/${cutter.cookieCutterId}`}
                className="cc-result-item"
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
        </div>
      )}
    </section>
  )
}
