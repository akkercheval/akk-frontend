import MarkdownPage from '../../components/MarkdownPage'
import genConMeetup from '../../../lotro/blog/2026-07-31-lotro-gen-con-meetup.md?raw'
import welcome from '../../../lotro/blog/2026-09-18-welcome-to-meldas-blog.md?raw'
import wolvesOfMordor from '../../../lotro/blog/2026-09-30-expansion.md?raw'
import './Blog.css'

// Posts in reverse chronological order
const posts = [wolvesOfMordor, genConMeetup, welcome]

export default function Blog() {
  return (
    <>
      <div className="blog-header">
        <img
          src="/images/melda-interim-listening-sitting.png"
          alt="Melda the squirrel sitting thoughtfully on a wooden bench"
          className="blog-mascot"
        />
        <div className="blog-header-text">
          <h2>Melda's Blog</h2>
          <p>
            Adventures across Middle-earth, written from Melda's perspective —
            raid nights, festivals, expansion launches, and the quiet moments
            in between.
          </p>
        </div>
      </div>

      {posts.map((content, index) => (
        <MarkdownPage key={index} content={content} />
      ))}
    </>
  )
}
