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
          <p>
            <em>The reference documentation is being consolidated into a new
            five-document set (version 0.1, under review). The final canon reference
            images are not yet produced.</em>
          </p>
        </section>

        <section className="gypsa-section">
          <h3>Reference Documents</h3>
          <div className="gypsa-nav-links">
            <Link to="/gypsa/canonical-design" className="gypsa-nav-card">
              <strong>Canonical Design Documentation</strong>
              <span>The five-document consolidated reference set: identity, head, body & tail, equipment, and rendering</span>
            </Link>
            <Link to="/gypsa/evolution" className="gypsa-nav-card">
              <strong>Evolution of Gypsa</strong>
              <span>Follow her design journey from first sketch to finished canon.</span>
            </Link>
            <Link to="/gypsa/milestones" className="gypsa-nav-card">
              <strong>Design Milestones</strong>
              <span>Timeline of progress</span>
            </Link>
            <Link to="/gypsa/project-status" className="gypsa-nav-card">
              <strong>Project Status</strong>
              <span>Current state of the Gypsa project</span>
            </Link>
            <Link to="/gypsa/production-guide" className="gypsa-nav-card">
              <strong>Production Guide</strong>
              <span>Production workflow and process guide</span>
            </Link>
          </div>
        </section>

        <section className="gypsa-section">
          <h3>Canon Documents</h3>
          <div className="gypsa-nav-links">
            <Link to="/gypsa/character-bible" className="gypsa-nav-card">
              <strong>Character Bible</strong>
              <span>Who Gypsa is — personality, backstory, and core identity</span>
            </Link>
            <Link to="/gypsa/body-dummy" className="gypsa-nav-card">
              <strong>Body Dummy (v2.0)</strong>
              <span>Canonical body dummy specification</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
