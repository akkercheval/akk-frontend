# The Friendly Forest — Shared Guidelines & Location Index

This document holds the guidelines, specifications, and design philosophy that apply to **every** Friendly Forest location. Each individual location now has its own document under `akk-app/forest/locations/`. See the [Location Index](#location-index) below for the current list.

## Location Guidelines

Each seasonal version depicts the same physical location. Major trees, paths, doors, windows, roots, structures, and terrain remain fixed. Seasonal changes affect foliage, weather, light, vegetation, small objects in use, and evidence of recent activity. The location should never be redesigned simply because the season changes.

Seasonal variants should preserve the recognizable composition and viewing angle of the canonical location whenever practical.

## Image File Specification

These conventions match how the website automatically loads backgrounds. The site picks the correct image for each page based on location, current season, and screen size, and falls back gracefully when a specific image doesn't exist yet.

**Folder structure**
Background images live in `akk-app/public/backgrounds/<location-slug>/`, where the slug is the lowercase-hyphenated location name (for example `acorn-crossing`, `gypsas-hollow`, `workshop-clearing`).

**Naming**
`[<secondary>-]<season>-<size>.<ext>`
- Season is lowercase: `spring`, `summer`, `fall`, `winter`.
- Size is `full` (desktop) or `mobile`.
- Examples: `backgrounds/acorn-crossing/summer-full.png`, `backgrounds/gypsas-hollow/outside-fall-full.png`, `backgrounds/acorn-crossing/summer-mobile.jpg`.
- The secondary token is only used where a location has variants (Gypsa's Hollow: `outside` / `inside`).

**Full (desktop)**
- Format: `.png`
- Dimensions: **1672 × 941 px** (≈16:9 landscape), matching the source images.
- This is the canonical master for each location/season. Everything else is derived from it.

**Mobile**
- Format: `.jpg` (aim for roughly 150–400 KB)
- Dimensions: **706 × 941 px** (3:4 portrait)
- Produce it by **cropping** the 1672 × 941 full-size image — do not stretch or scale up, so there is no distortion.
  - Keep the full **941 px height**.
  - Take a **706 px-wide vertical slice** (706 = 941 × 3/4), positioned so the composition's important elements stay in frame.
- Because the mobile crop trims the sides, keep key elements (Gypsa's door, the sign, the path) away from the extreme left/right edges of the full-size image so they survive the crop.
- Optional: the crop may be scaled down proportionally (e.g. 720 × 960, also 3:4) for smaller files. Scale both dimensions by the same factor to avoid distortion.

**Fallback order (handled automatically by the site)**
For any page, the site uses the first image that exists, in this order:
1. Correct location + correct season + correct size
2. Same location + correct season + Full (used when the mobile crop is missing)
3. Same location + a different season, preferring Summer, then Spring, then Fall, then Winter
4. The global tree background (`backgrounds/_fallback/tree-full.png` / `backgrounds/_fallback/tree-mobile.jpg`)

This makes the summer full-size image the practical baseline to create first for each location.

## The Seasons System

Rather than generating four independent paintings of every location, first establish a canonical **summer master** for each location. Once its geography is accepted, the other seasons are transformations of that same scene.

The tree stays the same tree. The trail bends in exactly the same place. Melda's windows remain exactly where they were. Gypsa's door doesn't mysteriously move six feet around the trunk. Only nature changes.

| Element | Spring | Summer | Autumn | Winter |
| --- | --- | --- | --- | --- |
| Canopy | fresh yellow-green | deep full green | ochre/gold/russet | bare branching |
| Ground | shoots, violets, clover | grasses, flowers | fallen leaves, acorns | snow/leaf litter |
| Light | cool, fresh | warm, bright | low golden | pale blue-gray |
| Water | lively/full | calm | reflective | partly frozen |
| Gypsa clues | planting/mending | exploring | gathering | tracks, stored supplies |
| Melda's home | new herbs | lush garden | harvest | chimney smoke |

This gives 20 images from only five compositions, but because each seasonal version preserves the same underlying geometry, visitors subconsciously recognize them as locations. That continuity matters enormously.

It also follows the workflow developed while designing Gypsa: once the underlying structure is approved, freeze it rather than rediscovering it during each new pass.

## Visual Constants

Some visual constants should be preserved across every image. The current background already gives much of the vocabulary:

- The giant mature deciduous trees are one of the Friendly Forest's signatures.
- The watercolor texture should remain visible rather than becoming digitally slick.
- Distant objects should lose contrast and become slightly bluer.
- Foregrounds should contain lots of small natural discoveries — clover, acorns, mushrooms, grasses, tiny flowers — but never so much detail that page content becomes difficult to read.

Most importantly, the backgrounds should have quiet areas deliberately composed for the website UI. This is something to design from the beginning rather than crop around afterward. For example, an image that is visually strongest along the left and bottom leaves the sky as an enormous calm region for content. Future images could deliberately alternate where their quiet regions occur according to the layout of their pages.

## Characters Stay Separate

Keep Gypsa herself out of the canonical background paintings. The backgrounds establish the Forest. Gypsa should be an SVG layer placed into those environments afterward. That lets her change pose, expression, activity, outfit, season, and eventually animation without requiring us to regenerate the Forest — and it obeys the same separation of structure and character established in her construction.

## Geography & Discovery

The Friendly Forest is a real little world. Its geography roughly runs:

> Forest Entrance / Acorn Crossing → Gypsa's Hollow → Workshop Clearing → Fern Creek → Melda's Hill

with side trails leading to places not yet discovered — and, despite everyone's best efforts, the Tangled Trail.

We don't need to map all of it. In fact, we specifically shouldn't. Gypsa is an explorer, and her motto promises that something interesting is always around the next tree. A fully mapped Forest would undermine that idea.

Just as illustrations should feel like moments from Gypsa's life ("What was Gypsa doing just before we arrived?"), the backgrounds can ask a similar question: "What happens in this part of the Forest when we're not here?" That gives a much stronger design target than "make a crochet background" or "make a cat background."

The development approach mirrors how Gypsa herself was built: don't try to make everything at once. Start with one canonical summer establishing view, confirm the visual language holds across a second location, then expand.

## Location Index

The current Friendly Forest locations. Each links to its own detailed document under `akk-app/forest/locations/`.

### 1. Acorn Crossing
The entrance to the Friendly Forest: a large oak beside a well-worn, stone-set path, with rolling hills and a distant river. The site's home / main entrance.
- **Website pages:** Home (`/`)

### 2. Gypsa's Hollow
Gypsa's home in a very old, broad oak — exterior (summer/fall) and cozy interior (winter/spring) views of the same dwelling, rich with domestic detail.
- **Website pages:** About (`/about`), Crochet (`/crochet`), Cats (`/cats`), Gypsa section (`/gypsa`)

### 3. The Workshop Clearing
A sunny clearing built around an ancient lightning-struck stump, now a communal workbench surrounded by an outdoor kitchen, a cookie-cutter cabinet, and three sheltered work stations.
- **Website pages:** Cookie Cutters (`/cookie-cutters`), Web Projects (`/projects`)

### 4. Melda's Hill
A comfortable hole-dwelling home set into a grassy hill at the woodland edge — ambiguously Middle-earth or a strange corner of the Forest. Eventually Great-Aunt Melda's home.
- **Website pages:** LotRO (`/lotro`)

### 5. The Tangled Trail
A real woodland place where navigation has gone spectacularly wrong.  There's a crooked trail leading to an old tree and a clearly labeled trail leading back to Acorn Crossing.  
- **Website pages:** the 404 / "page not found" page
