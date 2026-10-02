import { Link } from 'react-router-dom'
import LotroDisclaimer from '../../components/LotroDisclaimer'
import './Lotro.css'

interface SectionLink {
  to: string
  title: string
  blurb: string
}

const sections: SectionLink[] = [
  {
    to: '/lotro/raids',
    title: 'Raid & Instance Guides',
    blurb: 'Written strategy for the 12-person raid and group instances',
  },
  {
    to: '/lotro/expansions',
    title: 'Expansions',
    blurb: 'Pre-order guides, cosmetic previews, and new systems by expansion',
  },
  {
    to: '/lotro/new-player',
    title: 'New Player Guides',
    blurb: 'Getting started in Middle-earth without the overwhelm',
  },
  {
    to: '/lotro/classes',
    title: 'Class Guides',
    blurb: 'Builds, rotations, trait trees, and role notes by class',
  },
  {
    to: '/lotro/festivals',
    title: 'Festival Guides',
    blurb: 'Seasonal festival quests, rewards, and cosmetics',
  },
  {
    to: '/lotro/stories',
    title: 'Character Stories',
    blurb: 'In-character tales from the kinship',
  },
  {
    to: '/lotro/blog',
    title: "Melda's Blog",
    blurb: 'Adventures across Middle-earth, from Melda\u2019s perspective',
  },
  {
    to: '/lotro/links',
    title: 'Guides & Streamers',
    blurb: 'Curated links to other guides, wikis, tools, and streamers',
  },
]

export default function Lotro() {
  return (
    <section className="page-card">
      <h2>The Lord of the Rings Online</h2>
      <p>
        Adventures in Middle-earth — written guides, stories, and blogging from
        Melda&rsquo;s hillside in the Friendly Forest.
      </p>

      <p>In LotRO, I am Amandakay, Elweenia, Melda, and many others across multiple servers.  I began playing LotRO in January of 2007.  My main raiding characters have lived on Elendilmir, Arkenstone, and finally Glamdring.</p>  
      <p>I have been a member of many different and different kinds of kinships over the years, and have been fortunate to play with a solid variety of players and playstyles.</p>  
      <p>I've defeated every boss, cleared every instance, and yet after nearly 20 years, still have plenty to learn about LotRO and Middle Earth.  Welcome to my adventures in Middle Earth!</p>

      <div className="lotro-nav-links">
        {sections.map((section) => (
          <Link to={section.to} className="lotro-nav-card" key={section.to}>
            <strong>{section.title}</strong>
            <span>{section.blurb}</span>
          </Link>
        ))}
      </div>

      <LotroDisclaimer />
    </section>
  )
}
