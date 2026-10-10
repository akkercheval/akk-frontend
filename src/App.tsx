import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WebProjects from './pages/WebProjects'
import Crochet from './pages/Crochet'
import Cats from './pages/Cats'
import NotFound from './pages/NotFound'

// Cookie Cutters
import CookieCutters from './pages/cookie-cutters/CookieCutters'
import CookieCutterBrowse from './pages/cookie-cutters/Browse'
import CookieCutterSearch from './pages/cookie-cutters/Search'
import CookieCutterDetail from './pages/cookie-cutters/Detail'
import CookieCutterEdit from './pages/cookie-cutters/Edit'
import CookieCutterLogin from './pages/cookie-cutters/Login'

// The Friendly Forest
import Forest from './pages/forest/Forest'
import ForestGuidelines from './pages/forest/Guidelines'
import ForestPrinciples from './pages/forest/Principles'
import AcornCrossing from './pages/forest/AcornCrossing'
import GypsasHollow from './pages/forest/GypsasHollow'
import WorkshopClearing from './pages/forest/WorkshopClearing'
import MeldasHill from './pages/forest/MeldasHill'
import TangledTrail from './pages/forest/TangledTrail'

// LotRO
import Lotro from './pages/lotro/Lotro'
import LotroRaids from './pages/lotro/Raids'
import FollyOfNagakhedi from './pages/lotro/FollyOfNagakhedi'
import BadharalTheGorger from './pages/lotro/BadharalTheGorger'
import Maukhorn from './pages/lotro/Maukhorn'
import LegionOfLhaereth from './pages/lotro/LegionOfLhaereth'
import ZamaktarThePutrescent from './pages/lotro/ZamaktarThePutrescent'
import LotroExpansions from './pages/lotro/Expansions'
import WolvesOfMordor from './pages/lotro/WolvesOfMordor'
import WolvesPreOrderGuide from './pages/lotro/WolvesPreOrderGuide'
import WolvesNeighbors from './pages/lotro/WolvesNeighbors'
import WolvesWereWolfHunters from './pages/lotro/WolvesWereWolfHunters'
import WolvesDauntlessCommander from './pages/lotro/WolvesDauntlessCommander'
import WolvesMountsWarSteeds from './pages/lotro/WolvesMountsWarSteeds'
import WolvesDauntlessWarSteed from './pages/lotro/WolvesDauntlessWarSteed'
import WolvesWereWolfWarSteed from './pages/lotro/WolvesWereWolfWarSteed'
import LotroInstances from './pages/lotro/Instances'
import LotroNewPlayer from './pages/lotro/NewPlayer'
import LotroClasses from './pages/lotro/Classes'
import LotroClassesOverview from './pages/lotro/classes/Overview'
import ClassBeorning from './pages/lotro/classes/Beorning'
import ClassBrawler from './pages/lotro/classes/Brawler'
import ClassBurglar from './pages/lotro/classes/Burglar'
import ClassCaptain from './pages/lotro/classes/Captain'
import ClassChampion from './pages/lotro/classes/Champion'
import ClassGuardian from './pages/lotro/classes/Guardian'
import ClassHunter from './pages/lotro/classes/Hunter'
import ClassLoreMaster from './pages/lotro/classes/LoreMaster'
import ClassMariner from './pages/lotro/classes/Mariner'
import ClassMinstrel from './pages/lotro/classes/Minstrel'
import ClassRuneKeeper from './pages/lotro/classes/RuneKeeper'
import ClassWarden from './pages/lotro/classes/Warden'
import LotroFestivals from './pages/lotro/Festivals'
import LotroStories from './pages/lotro/Stories'
import LotroBlog from './pages/lotro/Blog'
import LotroLinks from './pages/lotro/Links'

// Gypsa
import MakingOfGypsa from './pages/gypsa/MakingOfGypsa'
import ProjectStatus from './pages/gypsa/ProjectStatus'
import CharacterBible from './pages/gypsa/CharacterBible'
import ProductionGuide from './pages/gypsa/ProductionGuide'
import BodyDummy from './pages/gypsa/BodyDummy'
import HeadConstructionGuide from './pages/gypsa/HeadConstructionGuide'
import Milestones from './pages/gypsa/Milestones'
import CanonicalDesignDocs from './pages/gypsa/CanonicalDesignDocs'
import EarSpecification from './pages/gypsa/EarSpecification'
import BodyConstruction from './pages/gypsa/BodyConstruction'
import JointSystem from './pages/gypsa/JointSystem'
import GeometryTable from './pages/gypsa/GeometryTable'
import TailDesignSpecification from './pages/gypsa/TailDesignSpecification'
import TailNeutralPose from './pages/gypsa/TailNeutralPose'
import TailRenderPrompt from './pages/gypsa/TailRenderPrompt'
import SanitizedTailRenderPrompt from './pages/gypsa/SanitizedTailRenderPrompt'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<WebProjects />} />
          <Route path="crochet" element={<Crochet />} />
          <Route path="cats" element={<Cats />} />

          {/* LotRO */}
          <Route path="lotro" element={<Lotro />} />
          <Route path="lotro/raids" element={<LotroRaids />} />
          <Route path="lotro/raids/folly-of-nagakhedi" element={<FollyOfNagakhedi />} />
          <Route path="lotro/raids/folly-of-nagakhedi/badharal-the-gorger" element={<BadharalTheGorger />} />
          <Route path="lotro/raids/folly-of-nagakhedi/maukhorn" element={<Maukhorn />} />
          <Route path="lotro/raids/folly-of-nagakhedi/legion-of-lhaereth" element={<LegionOfLhaereth />} />
          <Route path="lotro/raids/folly-of-nagakhedi/zamaktar-the-putrescent" element={<ZamaktarThePutrescent />} />
          <Route path="lotro/expansions" element={<LotroExpansions />} />
          <Route path="lotro/expansions/wolves-of-mordor" element={<WolvesOfMordor />} />
          <Route path="lotro/expansions/wolves-of-mordor/neighbours" element={<WolvesNeighbors />} />
          <Route path="lotro/expansions/wolves-of-mordor/pre-order-guide" element={<WolvesPreOrderGuide />} />
          <Route path="lotro/expansions/wolves-of-mordor/pre-order-guide/were-wolf-hunters" element={<WolvesWereWolfHunters />} />
          <Route path="lotro/expansions/wolves-of-mordor/pre-order-guide/dauntless-commander" element={<WolvesDauntlessCommander />} />
          <Route path="lotro/expansions/wolves-of-mordor/pre-order-guide/mounts-and-war-steeds" element={<WolvesMountsWarSteeds />} />
          <Route path="lotro/expansions/wolves-of-mordor/pre-order-guide/dauntless-commander-war-steed" element={<WolvesDauntlessWarSteed />} />
          <Route path="lotro/expansions/wolves-of-mordor/pre-order-guide/were-wolf-hunters-war-steed" element={<WolvesWereWolfWarSteed />} />
          <Route path="lotro/instances" element={<LotroInstances />} />
          <Route path="lotro/new-player" element={<LotroNewPlayer />} />
          <Route path="lotro/classes" element={<LotroClasses />} />
          <Route path="lotro/classes/overview" element={<LotroClassesOverview />} />
          <Route path="lotro/classes/beorning" element={<ClassBeorning />} />
          <Route path="lotro/classes/brawler" element={<ClassBrawler />} />
          <Route path="lotro/classes/burglar" element={<ClassBurglar />} />
          <Route path="lotro/classes/captain" element={<ClassCaptain />} />
          <Route path="lotro/classes/champion" element={<ClassChampion />} />
          <Route path="lotro/classes/guardian" element={<ClassGuardian />} />
          <Route path="lotro/classes/hunter" element={<ClassHunter />} />
          <Route path="lotro/classes/lore-master" element={<ClassLoreMaster />} />
          <Route path="lotro/classes/mariner" element={<ClassMariner />} />
          <Route path="lotro/classes/minstrel" element={<ClassMinstrel />} />
          <Route path="lotro/classes/rune-keeper" element={<ClassRuneKeeper />} />
          <Route path="lotro/classes/warden" element={<ClassWarden />} />
          <Route path="lotro/festivals" element={<LotroFestivals />} />
          <Route path="lotro/stories" element={<LotroStories />} />
          <Route path="lotro/blog" element={<LotroBlog />} />
          <Route path="lotro/links" element={<LotroLinks />} />

          {/* Cookie Cutters */}
          <Route path="cookie-cutters" element={<CookieCutters />} />
          <Route path="cookie-cutters/browse" element={<CookieCutterBrowse />} />
          <Route path="cookie-cutters/search" element={<CookieCutterSearch />} />
          <Route path="cookie-cutters/login" element={<CookieCutterLogin />} />
          <Route path="cookie-cutters/new/edit" element={<CookieCutterEdit />} />
          <Route path="cookie-cutters/:id" element={<CookieCutterDetail />} />
          <Route path="cookie-cutters/:id/edit" element={<CookieCutterEdit />} />

          {/* The Friendly Forest */}
          <Route path="forest" element={<Forest />} />
          <Route path="forest/guidelines" element={<ForestGuidelines />} />
          <Route path="forest/principles" element={<ForestPrinciples />} />
          <Route path="forest/acorn-crossing" element={<AcornCrossing />} />
          <Route path="forest/gypsas-hollow" element={<GypsasHollow />} />
          <Route path="forest/workshop-clearing" element={<WorkshopClearing />} />
          <Route path="forest/meldas-hill" element={<MeldasHill />} />
          <Route path="forest/tangled-trail" element={<TangledTrail />} />

          {/* Gypsa */}
          <Route path="gypsa" element={<MakingOfGypsa />} />
          <Route path="gypsa/project-status" element={<ProjectStatus />} />
          <Route path="gypsa/character-bible" element={<CharacterBible />} />
          <Route path="gypsa/production-guide" element={<ProductionGuide />} />
          <Route path="gypsa/body-dummy" element={<BodyDummy />} />
          <Route path="gypsa/head-construction" element={<HeadConstructionGuide />} />
          <Route path="gypsa/milestones" element={<Milestones />} />

          {/* Gypsa — Canonical Design Documentation */}
          <Route path="gypsa/canonical-design" element={<CanonicalDesignDocs />} />
          <Route path="gypsa/canonical-design/ears" element={<EarSpecification />} />
          <Route path="gypsa/canonical-design/body-construction" element={<BodyConstruction />} />
          <Route path="gypsa/canonical-design/joint-system" element={<JointSystem />} />
          <Route path="gypsa/canonical-design/geometry-table" element={<GeometryTable />} />
          <Route path="gypsa/canonical-design/tail-design" element={<TailDesignSpecification />} />
          <Route path="gypsa/canonical-design/tail-neutral-pose" element={<TailNeutralPose />} />
          <Route path="gypsa/canonical-design/tail-render-prompt" element={<TailRenderPrompt />} />
          <Route path="gypsa/canonical-design/tail-render-prompt-sanitized" element={<SanitizedTailRenderPrompt />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
