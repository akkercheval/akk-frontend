import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <section className="page-card about-section">
      <h2>About</h2>

      <div className="about-intro">
        <img
          src="/images/gypsa-interim-curious-companion-sitting.png"
          alt="Gypsa the squirrel sitting on a mossy rock, glancing curiously sideways"
          className="about-mascot"
        />
        <div className="about-intro-text">
          <p>
            Web Developer, Clarinet player, Cookie Cutter enthusiast.
          </p>
          <p>
            My little corner of the internet has gone through many incarnations
            since the Geocities days — this one lives in the Friendly Forest,
            guided by Gypsa, a curious squirrel who always thinks there's
            something interesting just around the next tree.
          </p>
        </div>
      </div>

      <h3>Interests</h3>
      <ul className="acorn-list">
        <li>Gardening</li>
        <li>Hiking</li>
        <li>State &amp; National Parks camping</li>
        <li>Crochet</li>
      </ul>

      <h3>Professional</h3>
      <p className="about-resume-link-text">
        Nearly 10 years of full-stack software engineering experience in Java, C#, Angular, and TypeScript.{' '}
        <Link to="/about/resume">View my resume →</Link>
      </p>
    </section>
  )
}
