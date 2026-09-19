import { SquirrelMascot404 } from '../components/SquirrelMascot404'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found">
      <SquirrelMascot404 className="not-found-squirrel" />
      <h2>404 — Lost in the Forest!</h2>
      <p>
        This squirrel couldn't find what you were looking for.
        Maybe try one of the paths above?
      </p>
    </section>
  )
}
