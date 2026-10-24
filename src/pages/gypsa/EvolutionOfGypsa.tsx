import { Link } from 'react-router-dom'
import './MakingOfGypsa.css'
import './EvolutionOfGypsa.css'

// Beat 1 — a real squirrel and the first idea
import realSquirrel from '../../../gypsa/EasternGraySquirrel_GAm.jpg?url'
import firstConcept from '../../../gypsa/Gypsa Squirrel v1.png?url'

// Beat 2 — head and muzzle
import headExploration from '../../../gypsa/Exploration/Head/Head Design Exploration - Phase 1.png?url'
import canonMuzzle from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/Gypsa Canonical Muzzle.png?url'

// Beat 3 — eyes, ears, brows
import eyeReference from '../../../gypsa/Exploration/Eyes/Gypsa Canonical Eye Reference.png?url'
import canonEar from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/Gypsa Canonical Ear.png?url'

// Beat 4 — crown fur
import crownFur from '../../../gypsa/Exploration/Hair/Gypsa Forehead and Crown Fur Reference.png?url'

// Beat 5 — body rig and proportions
import uprightRig from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/gypsa_upright_reference.svg?url'
import bodyDummy from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/canonical-body-dummy-v2.0-profile.svg?url'

// Beat 6 — the tail
import canonTail from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/Gypsa Canonical Neutral Tail Reference.png?url'
import tailValidation from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/Gypsa Tail Validation Three Views.png?url'

// Beat 7 — equipment
import backpack from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/Canonical Backpack Reference.png?url'
import walkingStick from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/Gypsa Canonical Walking Stick Reference.png?url'

// Beat 8 — full-body assembly
import fullBodyFront from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/Gypsa Provisional Full Body Front Pose.png?url'
import fullBodyBack from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/Gypsa Provisional Full Body Back Pose.png?url'

// Beat 9 — consolidating the canon
import characterSheet from '../../../gypsa/Older Reference Revisions/Approved References as of 20261026/Gypsa Character Sheet v2.0.png?url'

export default function EvolutionOfGypsa() {
  return (
    <div className="gypsa-notebook">
      <div className="gypsa-notebook_spiral" aria-hidden="true"></div>
      <div className="gypsa-page">
        <section className="gypsa-intro">
          <h2>Evolution of Gypsa</h2>
          <p className="subtitle">
            From a real squirrel on a trail to the forest's friendly guide
          </p>
          <p>
            Gypsa didn't arrive fully formed. She started as a photo of an Eastern
            Gray Squirrel and grew, one piece at a time, into the character who now
            greets visitors to the Friendly Forest. Her head, her eyes, her big
            expressive tail, even the little acorn backpack — each one took some
            exploring before it settled.
          </p>
          <p>
            Here's the short version of that journey. Scroll through a few minutes
            of it and you'll see how she came together. The images are retained
            working renders from along the way; final canon artwork is still to come.
          </p>
          <Link to="/gypsa" className="gypsa-back-link">
            ← Back to The Making of Gypsa
          </Link>
        </section>

        <section className="gypsa-beat">
          <h3>A real squirrel, and a first idea</h3>
          <p>
            It all began with a real Eastern Gray Squirrel. That reference set the
            tone: a gray-dominant coat, a soft build, and a curious little face. The
            very first render was rough, but it was enough to say, "yes, that's who
            we're chasing."
          </p>
          <div className="gypsa-beat__images">
            <figure>
              <img src={realSquirrel} alt="Photograph of a real Eastern Gray Squirrel used as Gypsa's starting reference" loading="lazy" />
              <figcaption>The real-world reference — an Eastern Gray Squirrel.</figcaption>
            </figure>
            <figure>
              <img src={firstConcept} alt="Gypsa's earliest squirrel concept render, version 1" loading="lazy" />
              <figcaption>Gypsa's very first concept render.</figcaption>
            </figure>
          </div>
        </section>

        <section className="gypsa-beat">
          <h3>Finding her head and muzzle</h3>
          <p>
            Her face came first. A sheet of candidate heads got narrowed down to the
            two that felt most like her, and from there the muzzle was shaped until it
            read friendly rather than sharp. That gentle muzzle became one of the
            anchors everything else is built around.
          </p>
          <div className="gypsa-beat__images">
            <figure>
              <img src={headExploration} alt="Early head design exploration sheet showing candidate squirrel head shapes" loading="lazy" />
              <figcaption>Head exploration, narrowing the candidates.</figcaption>
            </figure>
            <figure>
              <img src={canonMuzzle} alt="Gypsa's settled canonical muzzle shown in a three-quarter view" loading="lazy" />
              <figcaption>The muzzle, settled into its friendly shape.</figcaption>
            </figure>
          </div>
        </section>

        <section className="gypsa-beat">
          <h3>Eyes, ears, and brows</h3>
          <p>
            Next came the features that give Gypsa her look. Her eyes landed on the
            "Quiet Observer" candidate — curious but calm. Her ears took a soft
            tapered shape, and organic fur brows finished the expression. Together
            they're what make her feel like she's about to point out something
            interesting.
          </p>
          <div className="gypsa-beat__images">
            <figure>
              <img src={eyeReference} alt="Gypsa's canonical eye reference showing her Quiet Observer eye design" loading="lazy" />
              <figcaption>The "Quiet Observer" eyes.</figcaption>
            </figure>
            <figure>
              <img src={canonEar} alt="Gypsa's canonical soft-taper ear reference" loading="lazy" />
              <figcaption>The soft-taper ear.</figcaption>
            </figure>
          </div>
        </section>

        <section className="gypsa-beat">
          <h3>Crown fur — the little sweep on top</h3>
          <p>
            A small but important touch: the soft layered fur that sweeps across her
            forehead and crown. It's the detail that keeps her head from looking bald
            or stiff and gives her a bit of personality right at the top.
          </p>
          <div className="gypsa-beat__images">
            <figure>
              <img src={crownFur} alt="Reference sheet for Gypsa's forehead and crown fur, a soft layered sweep" loading="lazy" />
              <figcaption>The soft layered sweep of her crown fur.</figcaption>
            </figure>
          </div>
        </section>

        <section className="gypsa-beat">
          <h3>Building the body: rig and proportions</h3>
          <p>
            With the face sorted, attention turned to the rest of her. A structural
            rig fixed how tall she stands and where her limbs sit, and a body dummy
            turned those measurements into a shape. This is the unglamorous but
            essential work that keeps her consistent from one drawing to the next.
          </p>
          <div className="gypsa-beat__images">
            <figure>
              <img src={uprightRig} alt="Gypsa's upright structural reference rig showing proportions and joints" loading="lazy" />
              <figcaption>The upright structural rig.</figcaption>
            </figure>
            <figure>
              <img src={bodyDummy} alt="Gypsa's canonical body dummy v2.0 in profile view" loading="lazy" />
              <figcaption>The body dummy that turned the rig into a shape.</figcaption>
            </figure>
          </div>
        </section>

        <section className="gypsa-beat">
          <h3>The tail</h3>
          <p>
            No squirrel is complete without the tail, and Gypsa's is big and
            expressive. The work here covered everything from its fur envelope to the
            way it rests in a neutral curve, checked across several views so it reads
            right from any angle.
          </p>
          <div className="gypsa-beat__images">
            <figure>
              <img src={canonTail} alt="Gypsa's canonical neutral tail reference" loading="lazy" />
              <figcaption>The neutral resting curve of her tail.</figcaption>
            </figure>
            <figure>
              <img src={tailValidation} alt="Gypsa's tail validated across three different views" loading="lazy" />
              <figcaption>The same tail checked across three views.</figcaption>
            </figure>
          </div>
        </section>

        <section className="gypsa-beat">
          <h3>Her gear: backpack, bandana, and walking stick</h3>
          <p>
            Gypsa travels prepared. She carries an acorn-flap leather backpack, wears
            an oak-leaf-green bandana, and leans on a walking stick she found on a
            trail — a forked oak branch that's been with her for years. Each piece
            was explored and settled on its own before joining her kit.
          </p>
          <div className="gypsa-beat__images">
            <figure>
              <img src={backpack} alt="Gypsa's canonical acorn-flap leather backpack reference" loading="lazy" />
              <figcaption>The acorn-flap backpack.</figcaption>
            </figure>
            <figure>
              <img src={walkingStick} alt="Gypsa's canonical found-oak-branch walking stick reference" loading="lazy" />
              <figcaption>The found-oak-branch walking stick.</figcaption>
            </figure>
          </div>
        </section>

        <section className="gypsa-beat">
          <h3>Putting it all together: full-body passes</h3>
          <p>
            Then came the moment everything came together — the first full-body
            renders with all her gear on. It took a few passes to get her proportions
            and soft, friendly build just right, but these poses showed Gypsa as a
            whole character for the first time: front pose holding her stick, rear
            pose with it stowed for the walk.
          </p>
          <div className="gypsa-beat__images">
            <figure>
              <img src={fullBodyFront} alt="Gypsa provisional full-body front pose holding her walking stick, wearing her backpack and bandana" loading="lazy" />
              <figcaption>Front pose, stick in hand.</figcaption>
            </figure>
            <figure>
              <img src={fullBodyBack} alt="Gypsa provisional full-body rear pose walking with her stick stowed on the backpack" loading="lazy" />
              <figcaption>Rear pose, stick stowed for the trail.</figcaption>
            </figure>
          </div>
        </section>

        <section className="gypsa-beat">
          <h3>Consolidating her canon (present day)</h3>
          <p>
            That brings us to today. Everything learned along the way is being
            gathered into one clean, consistent canon reference set, so Gypsa can be
            drawn the same way every time. The final canon images are still to come —
            but the journey that got her here is all right above.
          </p>
          <div className="gypsa-beat__images">
            <figure>
              <img src={characterSheet} alt="Gypsa character sheet version 2.0 gathering her design into one reference" loading="lazy" />
              <figcaption>Gathering everything into one reference set.</figcaption>
            </figure>
          </div>
        </section>

        <div className="gypsa-motto">
          "There's always something interesting just around the next tree."
        </div>
      </div>
    </div>
  )
}
