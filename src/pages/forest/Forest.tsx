import { Link } from 'react-router-dom'
import './Forest.css'

export default function Forest() {
  return (
    <section className="page-card forest-landing">
      <h2>The Friendly Forest</h2>
      <p className="forest-subtitle">
        A little world of watercolor woodland, one location per corner of the site.
      </p>
      <p>
        Every page of AK's Friendly Forest of Chaos is set somewhere in the
        Forest. Each location keeps the same geography year-round while the
        seasons change around it, so visitors come to recognize these places
        rather than just see pretty backgrounds.
      </p>

      <h3>Locations</h3>
      <div className="forest-nav-links">
        <Link to="/forest/acorn-crossing" className="forest-nav-card">
          <strong>Acorn Crossing</strong>
          <span>The entrance to the Forest — home / main page</span>
        </Link>
        <Link to="/forest/gypsas-hollow" className="forest-nav-card">
          <strong>Gypsa's Hollow</strong>
          <span>Gypsa's home in an old oak — About, Crochet, Cats, Gypsa</span>
        </Link>
        <Link to="/forest/workshop-clearing" className="forest-nav-card">
          <strong>The Workshop Clearing</strong>
          <span>A communal clearing — Cookie Cutters &amp; Web Projects</span>
        </Link>
        <Link to="/forest/meldas-hill" className="forest-nav-card">
          <strong>Melda's Hill</strong>
          <span>A hillside hole-dwelling — the LotRO area</span>
        </Link>
        <Link to="/forest/tangled-trail" className="forest-nav-card">
          <strong>The Tangled Trail</strong>
          <span>Where navigation went wrong — the 404 page</span>
        </Link>
      </div>

      <h3>Reference</h3>
      <div className="forest-nav-links">
        <Link to="/forest/guidelines" className="forest-nav-card">
          <strong>Shared Guidelines &amp; Location Index</strong>
          <span>Image specs, the seasons system, and design philosophy</span>
        </Link>
        <Link to="/forest/principles" className="forest-nav-card">
          <strong>The Seven Principles</strong>
          <span>The Friendly Forest methodology</span>
        </Link>
      </div>
    </section>
  )
}
