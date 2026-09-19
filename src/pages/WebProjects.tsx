export default function WebProjects() {
  const projects = [
    { name: 'Boone County Community Band', url: 'https://bccband.weebly.com/' },
    { name: 'Boone County Community Orchestra', url: 'https://booneorchestra.boonecountyin.org/' },
    { name: 'Boone County Community Music', url: 'https://bccmusic.boonecountyin.org/' },
    { name: "Symphony Celebrates America's 250th", url: 'https://symphony.boonecountyin.org/' },
  ]

  return (
    <section className="page-card">
      <h2>Web Projects</h2>
      <ul className="acorn-list">
        {projects.map((p) => (
          <li key={p.url}>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
