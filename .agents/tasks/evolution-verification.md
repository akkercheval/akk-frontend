# Evolution of Gypsa — verification note

## Build result
`npm run build` (`tsc -b && vite build`) run from `akk-app` **exited 0**.
- 466 modules transformed.
- No TypeScript errors, no Vite import-resolution errors.
- All 17 image imports resolved to hashed assets in `dist/assets/`.
- Only warning is the pre-existing ">500 kB chunk" notice (unrelated to this change).

## Route
`/gypsa/evolution` is declared in `src/App.tsx` in the Gypsa route group:
`<Route path="gypsa/evolution" element={<EvolutionOfGypsa />} />`, with the
matching `import EvolutionOfGypsa from './pages/gypsa/EvolutionOfGypsa'`.

## Nav card
A new `gypsa-nav-card` on `src/pages/gypsa/MakingOfGypsa.tsx` links to
`/gypsa/evolution` ("Evolution of Gypsa" — "Follow her design journey from first
sketch to finished canon."), placed alongside the Canonical Design Documentation
and Design Milestones cards.

## Per-beat images used (all confirmed to exist on disk)
1. **A real squirrel, and a first idea** — `gypsa/EasternGraySquirrel_GAm.jpg`, `gypsa/Gypsa Squirrel v1.png`
2. **Finding her head and muzzle** — `gypsa/Exploration/Head/Head Design Exploration - Phase 1.png`, `gypsa/Older Reference Revisions/Approved References as of 20261026/Gypsa Canonical Muzzle.png`
3. **Eyes, ears, and brows** — `gypsa/Exploration/Eyes/Gypsa Canonical Eye Reference.png`, `.../20261026/Gypsa Canonical Ear.png`
4. **Crown fur** — `gypsa/Exploration/Hair/Gypsa Forehead and Crown Fur Reference.png`
5. **Building the body: rig and proportions** — `.../20261026/gypsa_upright_reference.svg`, `.../20261026/canonical-body-dummy-v2.0-profile.svg`
6. **The tail** — `.../20261026/Gypsa Canonical Neutral Tail Reference.png`, `.../20261026/Gypsa Tail Validation Three Views.png`
7. **Her gear: backpack, bandana, walking stick** — `.../20261026/Canonical Backpack Reference.png`, `.../20261026/Gypsa Canonical Walking Stick Reference.png`
8. **Full-body passes** — `.../20261026/Gypsa Provisional Full Body Front Pose.png`, `.../20261026/Gypsa Provisional Full Body Back Pose.png`
9. **Consolidating her canon (present day)** — `.../20261026/Gypsa Character Sheet v2.0.png`

## Note on image selection
These image choices are a **first-draft editorial selection** using the retained
working renders as placeholders. The user is expected to refine which specific
image best tells each beat, and these will be upgraded to final canon artwork in
a later pass. No images were resized or exported; no files under `gypsa/` were
modified.
