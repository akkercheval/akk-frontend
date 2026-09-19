import { Link } from 'react-router-dom'
import './CookieCutters.css'

export default function CookieCutters() {
  return (
    <section className="page-card cookie-cutters-landing">
      <h2>Cookie Cutter Collection</h2>
      <p>
        I've been collecting cookie cutters for more than twenty years. What
        started as a few holiday shapes inherited from my grandmother has grown
        into a collection of hundreds — animals, letters, seasonal shapes,
        oddities found at thrift stores, and custom designs I've had made over
        the years.
      </p>
      <p>
        Every cutter has a story. Some were gifts. Some were impulse buys at
        craft fairs. Some came in bulk lots where the real treasure was buried
        under a pile of duplicate stars and hearts.
      </p>
      <p>
        This part of the forest is where you can explore the collection.
      </p>

      <div className="cc-links">
        <Link to="/cookie-cutters/browse" className="cc-link-card">
          <span className="cc-link-icon" aria-hidden="true">🍪</span>
          <span className="cc-link-text">
            <strong>Browse the collection</strong>
            <span>See everything, sorted by name</span>
          </span>
        </Link>

        <Link to="/cookie-cutters/search" className="cc-link-card">
          <span className="cc-link-icon" aria-hidden="true">🔍</span>
          <span className="cc-link-text">
            <strong>Search for a shape</strong>
            <span>Find a specific cutter by name or theme</span>
          </span>
        </Link>
      </div>

      <div className="cc-secret-login">
        <Link
          to="/cookie-cutters/login"
          className="cc-acorn-login"
          aria-label="Admin login"
          title="🌰"
        >
          <img src="/icons/acorn.png" alt="" className="cc-acorn-img" />
        </Link>
      </div>
    </section>
  )
}
