import { Link } from 'react-router-dom'
import './MakingOfGypsa.css'

export default function MakingOfGypsa() {
  return (
    <div className="gypsa-notebook">
      <div className="gypsa-notebook_spiral" aria-hidden="true"></div>
      <div className="gypsa-page">
        <section className="gypsa-intro">
          <h2>The Making of Gypsa</h2>
          <p className="subtitle">
            How a squirrel found her way into the Friendly Forest of Chaos
          </p>
          <p>
            Gypsa — short for Gypsophila — is the official mascot of AK's Friendly
            Forest of Chaos. She's a young adult Eastern Gray Squirrel who lives
            here in the forest, guiding visitors through its winding paths with
            curiosity, warmth, and a walking stick she found on a trail years ago.
          </p>
          <p>
            She's not saying, <em>"Follow me because I know everything."</em>
            {' '}She's saying,{' '}
            <em>"Come on! I think there's something interesting over here."</em>
          </p>
          <div className="gypsa-motto">
            "There's always something interesting just around the next tree."
          </div>
        </section>

        <section className="gypsa-section">
          <h3>Reference Documents</h3>
          <div className="gypsa-nav-links">
            <Link to="/gypsa/project-status" className="gypsa-nav-card">
              <strong>Project Status</strong>
              <span>Current phase, goals, and roadmap</span>
            </Link>
            <Link to="/gypsa/character-bible" className="gypsa-nav-card">
              <strong>Character Bible</strong>
              <span>Personality, beliefs, equipment, and identity</span>
            </Link>
            <Link to="/gypsa/production-guide" className="gypsa-nav-card">
              <strong>Production Guide</strong>
              <span>SVG standards, colors, methodology, and construction rules</span>
            </Link>
            <Link to="/gypsa/canonical-design" className="gypsa-nav-card">
              <strong>Canonical Design Documentation</strong>
              <span>Head, body, and tail geometry, construction, and reference drawings</span>
            </Link>
            <Link to="/gypsa/milestones" className="gypsa-nav-card">
              <strong>Design Milestones</strong>
              <span>Timeline of progress</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
