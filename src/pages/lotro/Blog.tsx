import MarkdownPage from '../../components/MarkdownPage'
import genConMeetup from '../../../lotro/blog/2026-07-31-lotro-gen-con-meetup.md?raw'
import welcome from '../../../lotro/blog/2026-09-18-welcome-to-meldas-blog.md?raw'
import wolvesOfMordor from '../../../lotro/blog/2026-09-30-expansion.md?raw'

// Posts in reverse chronological order
const posts = [wolvesOfMordor, genConMeetup, welcome]

export default function Blog() {
  return (
    <>
      {posts.map((content, index) => (
        <MarkdownPage key={index} content={content} />
      ))}
    </>
  )
}
