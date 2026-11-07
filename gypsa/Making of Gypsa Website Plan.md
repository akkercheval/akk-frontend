# The Making of Gypsa — Website Section Plan

**Status: planning. Describes the long-term structure for the "Making of Gypsa" section of the website.**

This document outlines a four-layer approach to presenting Gypsa's design and design process on the website. The goal is to let an interested visitor follow the full evolution of Gypsa's design without overwhelming a casual visitor who would otherwise glance at a wall of specifications and navigate away.

## Design goal

Two audiences want opposite things from this section:

- **The casual visitor** wants a short, warm, visual introduction to Gypsa. They should enjoy the page and leave satisfied without needing to dig.
- **The curious visitor** wants to follow the whole journey — the real-squirrel reference, the exploration, the rejected candidates, and the evolution into the current canon.

The resolution is **layering**: a shallow, visual top layer that most people enjoy, with clearly-marked doors into progressively deeper material. The front page never carries the full weight; depth is present but gated so volume never threatens the casual experience.

## The four layers

### Layer 1 — The Making of Gypsa (front page)

The page most visitors see. Deliberately short and visual.

- A few paragraphs of story: who Gypsa is, where she came from, her role as the Friendly Forest guide.
- A single hero image.
- One honest sentence that there is a whole design journey behind her, linking to Layer 2.

This page must never become a wall of specifications. A typical visitor reads it, enjoys the squirrel, and leaves — which is the intended outcome for them.

**Current page:** `src/pages/gypsa/MakingOfGypsa.tsx` (already thin; keep it that way).

### Layer 2 — Evolution of Gypsa (illustrated narrative)

The heart of the "follow the process" goal and the main new page to build. A single scrollable, illustrated page that tells the design story in roughly 8–12 beats, each a short paragraph plus one or two images drawn from the retained renders.

Suggested beats (chronological, image-forward, lightly captioned):

1. The real-squirrel reference and first concept.
2. Head and muzzle exploration.
3. Eyes, ears, brows.
4. Crown fur.
5. The body rig and proportion work.
6. The tail.
7. Equipment — backpack, bandana, walking stick.
8. Full-body assembly passes.
9. Consolidating everything into a clean canon reference set (present day).

A curious person should be able to follow the whole arc in a few minutes of scrolling without opening a single specification. Most of the retained process value lives here. Reader-facing narrative smooths past fine canon-vs-superseded nuance (e.g. "accepted pending future fur validation"); that precision belongs in Layers 3 and 4.

**New page to build:** `src/pages/gypsa/EvolutionOfGypsa.tsx` at route `/gypsa/evolution`.

### Layer 3 — The working archive (for the deep-divers)

For the genuinely interested. The existing Milestones timeline plus an index into the deeper material: exploration sheets, rejected candidates, and the technical construction documents. Framed explicitly as "the full working archive — raw and historical." The bulk of the 50+ retained files belong here, behind a clear "this is the deep end" label, so volume never threatens the casual experience.

**Existing spine:** `gypsa/Milestones.md` → `src/pages/gypsa/Milestones.tsx`.
**Source material:** `gypsa/Older Reference Revisions/Approved References as of 20261026/` and the `gypsa/Exploration/` folders.

### Layer 4 — Canonical reference set (how to draw her correctly)

The five consolidated canon documents stay their own thing, pitched at "how to render her correctly" rather than "how she came to be." Reference, not narrative. Kept separate from the Evolution story.

**Current pages:** `src/pages/gypsa/CanonicalDesignDocs.tsx` (hub) and the five document pages (Reference Guide, Head & Expression, Body & Tail, Equipment, Rendering Standard). Currently version 0.1 drafts under review.

## How a visitor moves through the layers

```
Front page (Layer 1)
  ├─→ Evolution of Gypsa narrative (Layer 2)
  │       └─→ Working archive / Milestones (Layer 3)
  └─→ Canonical reference set (Layer 4)
```

Most visitors stop at Layer 1 or 2. The process evolution is fully followable for anyone who wants it. The depth is present but gated.

## Build sequence and open items

1. **This plan document** — records the four-layer approach. (This file.)
2. **Evolution of Gypsa narrative page (Layer 2)** — near-term build using existing retained renders as placeholder imagery; editorial selection of which image tells each beat to be refined with the user.
3. **Archive index (Layer 3)** — a later pass; the Milestones page already covers much of this.
4. **Final polished artwork** — deferred. Per `Gypsa Proposed Final References.md`, website artwork follows the documentation and head milestones. The Evolution page can use existing retained renders now and be upgraded to final art later.

### Open editorial questions

- **Per-beat image selection:** which specific retained images best tell each narrative beat. Editorial judgment the user owns.
- **Image sizing:** the retained renders live under `gypsa/...` and many are large source masters. A narrative page likely wants display-sized exports rather than full-resolution imports. Decide whether to address now or in a later polish pass.
- **Canon nuance:** how much canon-vs-superseded qualification to surface in reader-facing narrative (recommend: minimal; keep precision in Layers 3–4).

As the Approved Reference documents are finalized and the final canon reference images are generated, Layers 1, 2, and 4 will be updated to use the final art in place of the retained placeholder renders.
