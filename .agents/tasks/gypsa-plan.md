# Implementation Plan — Gypsa canon documentation consolidation (website update)

## Context and decisions

The user archived the entire old `akk-app/gypsa/Approved Reference/` set (51 files, moved byte-for-byte into `Older Reference Revisions/Approved References as of 20261026/`) and replaced it with FIVE new draft specification documents (version 0.1, under review, NO approved images yet):

1. `START HERE — Gypsa Reference Guide.md` — identity, packet use, image registry, request template
2. `Gypsa Head and Expression.md` — skull, muzzle, face, ears, crown, expressions (supersedes head construction guide, ear spec, crown/expressions)
3. `Gypsa Body and Tail.md` — proportion unit, body/limb/paw geometry, full tail (supersedes body construction, body dummy, geometry table, joint system, all tail docs)
4. `Gypsa Equipment.md` — backpack, bandana, walking stick
5. `Gypsa Rendering Standard.md` — palette, finish, outline, transparency, exports (supersedes production guide rendering content)

Every current page under `src/pages/gypsa/` except `MakingOfGypsa.tsx`, `CanonicalDesignDocs.tsx`, and `Milestones.tsx` imports markdown/images from paths that no longer exist in `Approved Reference/`, so `npm run build` currently FAILS.

Design decisions (made here, grounded in the codebase):

- **D1 — Map many old pages to the five new docs, rendered as MarkdownPage, not CanonicalDoc.** The five new docs are text-only drafts with NO images in `Approved Reference/`. Per the user's `Gypsa Proposed Final References.md`, no legacy image is promoted into the new set, and archived images must not be surfaced as if canon. Therefore each new page renders its draft as a plain markdown document using the existing `MarkdownPage` component wrapped in the shared notebook layout (the exact pattern already used by `ProjectStatus.tsx` / `CharacterBible.tsx` / `ProductionGuide.tsx`). We do NOT use `CanonicalDoc` (its gallery would be empty or would force archived images in).
- **D2 — Delete the 14 old content pages and their routes rather than redirect.** Rationale: no file outside `App.tsx` / `MakingOfGypsa.tsx` / `CanonicalDesignDocs.tsx` links to any of these sub-routes (verified by grep: only the top-level `/gypsa` link exists in `Layout.tsx` and `Forest.tsx`, and it stays valid). The old granular per-feature structure is explicitly being replaced by the five-document set. Nothing is published yet and the user manages publication, so stale old URLs 404ing is acceptable and is the honest representation of the new state. Redirects would preserve a navigation vocabulary the consolidation is deliberately retiring.
- **D3 — Restructure the two nav hubs to describe the five-document set** and add an honest status note (version 0.1, under review, final canon reference images not yet produced).
- **D4 — Import style for the new docs.** Follow the existing `?raw` style verbatim, including spaces and the em dash in filenames (existing code already imports e.g. `Ear Specification.md?raw`, so spaces work; the em dash `—` must import literally). Example: `import content from '../../../gypsa/Approved Reference/START HERE — Gypsa Reference Guide.md?raw'`.

Verification throughout is the authoritative build: from inside `akk-app`, run `npm run build` (`tsc -b && vite build`). `node_modules` already exists, so `npm install` is not required. Do NOT run `npm run dev`. Vite fails the build on any missing `?raw`/`?url` import, so a passing build proves no import is dangling.

Constraints: touch ONLY `akk-app/src/**` and `akk-app/src/App.tsx`. Do NOT modify anything under `akk-app/gypsa/` (the five drafts, archive, images). Do NOT touch `Milestones.tsx` or `Milestones.md` (already done). Do NOT delete from the archive. Match existing conventions (notebook wrapper markup, CSS class names, import style).

## Per-page disposition (authoritative mapping)

| Page file | Current broken import target | Disposition |
| --- | --- | --- |
| `MakingOfGypsa.tsx` | none (no raw imports) | KEEP; update nav cards + add status note (item 8) |
| `CanonicalDesignDocs.tsx` | none (router Links only) | KEEP; restructure link groups to the 5 docs + status note (item 7) |
| `Milestones.tsx` | `gypsa/Milestones.md` (not moved) | UNCHANGED — do not touch |
| `ProjectStatus.tsx` | `gypsa-project-status.md` | DELETE (content → Reference Guide / Milestones) |
| `CharacterBible.tsx` | `gypsa-character-bible.md` | DELETE (content → Reference Guide, item 2) |
| `ProductionGuide.tsx` | `gypsa-production-guide.md` | DELETE (content → Rendering Standard, item 6) |
| `BodyDummy.tsx` | `canonical-body-dummy-v2.0.md` + 2 SVGs | DELETE (→ Body and Tail, item 4) |
| `BodyConstruction.tsx` | `gypsa-body-construction-v1.0.md` + 2 SVGs | DELETE (→ Body and Tail, item 4) |
| `GeometryTable.tsx` | `Gypsa Canonical Geometry Table v0.1.md` + SVG + PNG | DELETE (→ Body and Tail, item 4) |
| `JointSystem.tsx` | `Gypsa Joint System.md` + 2 SVGs | DELETE (→ Body and Tail, item 4) |
| `HeadConstructionGuide.tsx` | `gypsa-canonical-head-construction-guide.md` + 5 PNGs | DELETE (→ Head and Expression, item 3) |
| `EarSpecification.tsx` | `Ear Specification.md` + 2 PNGs | DELETE (→ Head and Expression, item 3) |
| `TailDesignSpecification.tsx` | tail md + 7 PNGs | DELETE (→ Body and Tail, item 4) |
| `TailNeutralPose.tsx` | `Tail Specification Neutral Pose.md` + 2 PNGs | DELETE (→ Body and Tail, item 4) |
| `TailRenderPrompt.tsx` | `Gypsa Canonical Tail Render Prompt.md` + PNG | DELETE (→ Body and Tail, item 4) |
| `SanitizedTailRenderPrompt.tsx` | sanitized tail md + 2 PNGs | DELETE (→ Body and Tail, item 4) |

New pages created (items 2–6), all rendering drafts via `MarkdownPage`:

| New page file | Route | Imports (`?raw`) |
| --- | --- | --- |
| `ReferenceGuide.tsx` | `/gypsa/reference-guide` | `START HERE — Gypsa Reference Guide.md` |
| `HeadAndExpression.tsx` | `/gypsa/head-and-expression` | `Gypsa Head and Expression.md` |
| `BodyAndTail.tsx` | `/gypsa/body-and-tail` | `Gypsa Body and Tail.md` |
| `Equipment.tsx` | `/gypsa/equipment` | `Gypsa Equipment.md` |
| `RenderingStandard.tsx` | `/gypsa/rendering-standard` | `Gypsa Rendering Standard.md` |

## Ordered implementation items

Each item leaves the tree buildable **except** that the build only returns fully green once routing/imports are consistent. To avoid a guaranteed-red intermediate state, create all five new pages first (items 2–6), then wire routes and hubs and remove old pages in the same pass (items 7–9), then verify (item 10). The final verification (item 10) is the authoritative pass/fail gate.

- [ ] 1. Create a shared markdown-doc page component to avoid five near-identical files, matching the existing notebook wrapper used by `ProjectStatus.tsx`.
      Create `GypsaDocPage` that accepts a `content: string` prop and renders `<div className="gypsa-notebook"><div className="gypsa-notebook_spiral" aria-hidden="true"></div><div className="gypsa-page"><MarkdownPage content={content} /></div></div>`, importing `./MakingOfGypsa.css` (same CSS the current pages import). This is the exact structure in `ProjectStatus.tsx`; reusing it keeps the notebook styling identical.
      Files: `akk-app/src/pages/gypsa/GypsaDocPage.tsx`
      Verify: deferred to item 10 (no route uses it yet; `tsc` will type-check it during the item 10 build).

- [ ] 2. Create the Reference Guide page.
      New component `ReferenceGuide` importing `import content from '../../../gypsa/Approved Reference/START HERE — Gypsa Reference Guide.md?raw'` and rendering `<GypsaDocPage content={content} />`.
      Files: `akk-app/src/pages/gypsa/ReferenceGuide.tsx`
      Verify: deferred to item 10.

- [ ] 3. Create the Head and Expression page.
      New component `HeadAndExpression` importing `import content from '../../../gypsa/Approved Reference/Gypsa Head and Expression.md?raw'` and rendering `<GypsaDocPage content={content} />`.
      Files: `akk-app/src/pages/gypsa/HeadAndExpression.tsx`
      Verify: deferred to item 10.

- [ ] 4. Create the Body and Tail page.
      New component `BodyAndTail` importing `import content from '../../../gypsa/Approved Reference/Gypsa Body and Tail.md?raw'` and rendering `<GypsaDocPage content={content} />`.
      Files: `akk-app/src/pages/gypsa/BodyAndTail.tsx`
      Verify: deferred to item 10.

- [ ] 5. Create the Equipment page.
      New component `Equipment` importing `import content from '../../../gypsa/Approved Reference/Gypsa Equipment.md?raw'` and rendering `<GypsaDocPage content={content} />`.
      Files: `akk-app/src/pages/gypsa/Equipment.tsx`
      Verify: deferred to item 10.

- [ ] 6. Create the Rendering Standard page.
      New component `RenderingStandard` importing `import content from '../../../gypsa/Approved Reference/Gypsa Rendering Standard.md?raw'` and rendering `<GypsaDocPage content={content} />`.
      Files: `akk-app/src/pages/gypsa/RenderingStandard.tsx`
      Verify: deferred to item 10.

- [ ] 7. Rewrite `CanonicalDesignDocs.tsx` to describe the five-document set and add the honest status note.
      Replace the four old `groups` (Head / Body & Proportions / Tail / Structural References) with ONE group (or an ungrouped list) of five `DocLink`s pointing at the new routes, keeping the existing `DocLink`/`gypsa-nav-card` rendering exactly:
      - `/gypsa/reference-guide` — "Reference Guide (START HERE)" — "Identity, how to use the reference set, image registry, and the render-request template."
      - `/gypsa/head-and-expression` — "Head & Expression" — "Skull, muzzle, eyes, ears, crown, and the eight expressions."
      - `/gypsa/body-and-tail` — "Body & Tail" — "Proportion unit, body and limb geometry, hands and feet, and the full tail."
      - `/gypsa/equipment` — "Equipment" — "Backpack, bandana, and walking stick: shape, scale, attachment, and carry."
      - `/gypsa/rendering-standard` — "Rendering Standard" — "Palette, flat-color finish, outline, transparency, and export requirements."
      Update the intro copy so it describes a consolidated five-document specification set (not "reference drawings"), and add a status note paragraph inside the existing `.gypsa-intro` section, before the motto, using plain notebook markup (a `<p>` with an emphasized lead) — do NOT import new CSS. Status note text (exact): "These five documents are a consolidated draft reference set (version 0.1, currently under review). The older per-feature reference documents have been archived, and the final canon reference images have not been produced yet." Keep the existing "← Back to The Making of Gypsa" link and the motto block.
      Files: `akk-app/src/pages/gypsa/CanonicalDesignDocs.tsx`
      Verify: deferred to item 10.

- [ ] 8. Update `MakingOfGypsa.tsx` nav cards and add a status note.
      In the "Reference Documents" section, remove the Project Status, Character Bible, and Production Guide cards (those pages are deleted). Keep the "Canonical Design Documentation" card (update its blurb to "The five-document consolidated reference set: identity, head, body & tail, equipment, and rendering") and the "Design Milestones" card (unchanged `to="/gypsa/milestones"`). Add a status note paragraph in the `.gypsa-intro` section (after the existing intro paragraphs, before or after the motto) with exact text: "The reference documentation is being consolidated into a new five-document set (version 0.1, under review). The final canon reference images are not yet produced." Use existing notebook markup (`<p>`), no new CSS, matching the warm first-person tone.
      Files: `akk-app/src/pages/gypsa/MakingOfGypsa.tsx`
      Verify: deferred to item 10.

- [ ] 9. Rewire routes in `App.tsx`: add the five new routes, remove the 14 deleted pages' imports and routes, and delete the 14 old page files.
      In `App.tsx`: remove the imports and `<Route>` entries for `ProjectStatus`, `CharacterBible`, `ProductionGuide`, `BodyDummy`, `HeadConstructionGuide`, `EarSpecification`, `BodyConstruction`, `JointSystem`, `GeometryTable`, `TailDesignSpecification`, `TailNeutralPose`, `TailRenderPrompt`, `SanitizedTailRenderPrompt` (13 content pages — note `BodyDummy` and `HeadConstructionGuide` sit in the first Gypsa block; the rest in the canonical-design block). Add imports for the five new components and add these routes in the Gypsa section: `gypsa/reference-guide`, `gypsa/head-and-expression`, `gypsa/body-and-tail`, `gypsa/equipment`, `gypsa/rendering-standard`. KEEP routes `gypsa` (MakingOfGypsa), `gypsa/milestones` (Milestones), and `gypsa/canonical-design` (CanonicalDesignDocs). Then delete the 14 now-unused old page files so no dangling `?raw`/`?url` imports remain in the build graph.
      Files to modify: `akk-app/src/App.tsx`
      Files to delete: `akk-app/src/pages/gypsa/ProjectStatus.tsx`, `CharacterBible.tsx`, `ProductionGuide.tsx`, `BodyDummy.tsx`, `HeadConstructionGuide.tsx`, `EarSpecification.tsx`, `BodyConstruction.tsx`, `JointSystem.tsx`, `GeometryTable.tsx`, `TailDesignSpecification.tsx`, `TailNeutralPose.tsx`, `TailRenderPrompt.tsx`, `SanitizedTailRenderPrompt.tsx`
      Verify: deferred to item 10.
      Note: deleting the `.tsx` files only removes them from Vite's import graph. The archived markdown/images under `Older Reference Revisions/...` are NOT touched. Do NOT delete `MakingOfGypsa.tsx`, `CanonicalDesignDocs.tsx`, `Milestones.tsx`, or the new `GypsaDocPage.tsx` / five new pages.

- [ ] 10. Build and confirm the site compiles cleanly with no dangling imports.
      Files: none (verification only)
      Verify: from `akk-app`, run `npm run build`. Expected: `tsc -b` reports no errors (confirms no unused/dangling imports left in `App.tsx` and all new components type-check) and `vite build` completes with an exit code of 0 and no "failed to resolve import" / missing `?raw`/`?url` errors. A green build is the authoritative proof that NO `?raw`/`?url` import references a file absent from `Approved Reference/` (or `gypsa/Milestones.md`).

- [ ] 11. Final consistency check of the navigation surface.
      Confirm by reading the edited files that: every `to=` in `MakingOfGypsa.tsx` and `CanonicalDesignDocs.tsx` matches a `<Route path=>` in `App.tsx`; the top-level `/gypsa` link in `Layout.tsx` and the Forest link still resolve (unchanged); and the status notes appear on both the main Gypsa page and the canonical-design hub.
      Files: none (read-only verification)
      Verify: re-run `npm run build` if any fix was needed; otherwise rely on the item 10 green build. Optionally run `npm run lint` from `akk-app` and confirm no new errors in changed files.

## Guarantees this plan provides

- After item 9, no component in the Vite import graph imports any `?raw`/`?url` path under `Approved Reference/` except the five that exist (`START HERE — Gypsa Reference Guide.md`, `Gypsa Head and Expression.md`, `Gypsa Body and Tail.md`, `Gypsa Equipment.md`, `Gypsa Rendering Standard.md`); `Milestones.tsx` still imports `gypsa/Milestones.md` (not moved). All dangling imports are removed by deleting the 14 old pages.
- The site honestly reflects the new state: five draft specs (v0.1, under review), old per-feature docs archived, final canon images not yet produced — stated in status notes on both hubs and backed by rendering the drafts verbatim (no fabricated approved images, no claimed final status).
- Nothing under `akk-app/gypsa/` is modified; `Milestones.tsx`/`Milestones.md` untouched; the archive untouched; working pages (`MakingOfGypsa`, `CanonicalDesignDocs` structure/style, `Milestones`) preserved.

## Open assumptions (reasonable, non-blocking)

- Old granular sub-page URLs (e.g. `/gypsa/head-construction`, `/gypsa/canonical-design/ears`) will 404 after removal. This is acceptable: nothing is published yet, the user manages publication, and no internal link targets them. If the user later wants redirects, that is a follow-up, not part of making the build green and honest.
- Status-note wording above is a concrete, honest default in the existing tone; the user can refine copy later without affecting the build.

## Verification note (implementation complete)

**Build (authoritative gate).** Ran `npm run build` from `akk-app` (`node_modules` present, no install needed). Result: `tsc -b` reported no errors; `vite build` completed with exit code 0, 448 modules transformed, no "failed to resolve import" / missing `?raw`/`?url` errors. The em-dash filename (`START HERE — Gypsa Reference Guide.md?raw`) imported literally without issue. Only pre-existing warning is the >500 kB chunk-size notice (unrelated, not introduced here).

**Import audit (grep of `akk-app/src/`).** Every remaining `?raw` import under `src/pages/gypsa/` and the file it targets (all confirmed present):
- `ReferenceGuide.tsx` → `gypsa/Approved Reference/START HERE — Gypsa Reference Guide.md` ✓
- `HeadAndExpression.tsx` → `gypsa/Approved Reference/Gypsa Head and Expression.md` ✓
- `BodyAndTail.tsx` → `gypsa/Approved Reference/Gypsa Body and Tail.md` ✓
- `Equipment.tsx` → `gypsa/Approved Reference/Gypsa Equipment.md` ✓
- `RenderingStandard.tsx` → `gypsa/Approved Reference/Gypsa Rendering Standard.md` ✓
- `Milestones.tsx` → `gypsa/Milestones.md` (not moved, unchanged) ✓

No `?raw`/`?url` import anywhere in `src/` references a file absent from `Approved Reference/` (or `gypsa/Milestones.md`). No import points into the `Older Reference Revisions` archive.

**Final Gypsa route list (App.tsx) → component:**
- `gypsa` → `MakingOfGypsa` (kept)
- `gypsa/milestones` → `Milestones` (kept, untouched)
- `gypsa/canonical-design` → `CanonicalDesignDocs` (restructured)
- `gypsa/reference-guide` → `ReferenceGuide` (new)
- `gypsa/head-and-expression` → `HeadAndExpression` (new)
- `gypsa/body-and-tail` → `BodyAndTail` (new)
- `gypsa/equipment` → `Equipment` (new)
- `gypsa/rendering-standard` → `RenderingStandard` (new)

**Nav-surface check.** Every `<Link to=...>` in `MakingOfGypsa.tsx` (`/gypsa/canonical-design`, `/gypsa/milestones`) and `CanonicalDesignDocs.tsx` (`/gypsa`, plus the five new doc routes) resolves to a declared route. Top-level `/gypsa` link in `Layout.tsx` / `Forest.tsx` unchanged and still valid. Honest status note present on both the main Gypsa page and the canonical-design hub.

**Removed (13 old page files + their imports/routes):** `ProjectStatus.tsx`, `CharacterBible.tsx`, `ProductionGuide.tsx`, `BodyDummy.tsx`, `HeadConstructionGuide.tsx`, `EarSpecification.tsx`, `BodyConstruction.tsx`, `JointSystem.tsx`, `GeometryTable.tsx`, `TailDesignSpecification.tsx`, `TailNeutralPose.tsx`, `TailRenderPrompt.tsx`, `SanitizedTailRenderPrompt.tsx`. These are every old Gypsa content page that imported a now-moved file; all broken imports are gone. Their routes and imports were removed from `App.tsx`. Nothing under `akk-app/gypsa/` touched; archive untouched; `Milestones.tsx`/`Milestones.md` untouched.

**Added:** `GypsaDocPage.tsx` (shared notebook wrapper) + 5 new doc pages, 5 new routes, restructured `CanonicalDesignDocs.tsx`, updated `MakingOfGypsa.tsx` cards + status note.
