import './Home.css'

export default function Home() {
  return (
    <section className="welcome-section">
      <div className="welcome-greeting">
        <img
          src="/images/first-gypsa-mascot.png"
          alt="Gypsa the squirrel waving hello"
          className="welcome-mascot"
        />
        <h2>Welcome to the Forest!</h2>
      </div>
      <p>
        This is the home of all things chaotic and friendly — from cookie cutter
        collections and crochet projects to adventures in Middle-earth and a
        whole lot of cats.
      </p>
      <p className="welcome-invite">
        <em>"Come on! I think there's something interesting over here."</em>
        <br />
        <span className="welcome-signature">— Gypsa</span>
      </p>
      <p>
        Feel free to explore the branches above and see what catches your eye.
      </p>
    </section>
  )
}
