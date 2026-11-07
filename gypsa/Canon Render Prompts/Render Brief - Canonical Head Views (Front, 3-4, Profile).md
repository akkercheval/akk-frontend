# Render Brief — Gypsa Canonical Head Views (Front, 3/4 Left, Profile Left)

**Date:** 2026-10-02
**Goal:** Produce a true, canon-faithful set of head reference views that finally
fixes the two long-standing drifts (pointed ears, short muzzle). We build the
three views **one at a time**, each inheriting the approved previous view, then
assemble a single combined turnaround sheet **only after** all three singles are
approved.

**Why this order (and not one all-in-one render):** ChatGPT treats a three-panel
image as *one picture of three heads* and will let the ears be right in one panel
and wrong in another (exactly the self-contradiction we found in
`Gypsa Reference Images.png`). Rendering each view separately lets us validate the
ear and muzzle per view against the studies, accept/re-roll each independently,
and feed approved views forward as consistency anchors. This matches the head
guide's own rules: *validate one variable at a time*, and *profile views are
mandatory when attachment relationships are involved.*

**View set (matches the Canonical Head Construction Guide):** Front, **3/4 Left**,
**Profile Left**. Keep 3/4 and profile both facing **left** so the set is on-spec
and mutually consistent.

---

## How to use this document

Each step gives you: (1) the attachments to add, (2) a paste-in prompt, and (3) a
drift checklist to verify before accepting. For **every** step, paste the
**Shared Head Design Brief** (Section A) first, then the step's prompt, then
attach that step's images.

Do one step at a time. Approve a view before starting the next. Save each approved
PNG into `Rendering/output/` and note any drift so the next step can correct for it.

---

# Section A — Shared Head Design Brief (paste into EVERY step)

*The condensed, single-source description of Gypsa's head. Same text for all four
steps.*

## Who she is
Gypsa is the friendly mascot of "AK's Friendly Forest of Chaos" — a stylized
young-adult Eastern Gray Squirrel, curious, kind, patient, quietly playful. The
head should read as a warm, approachable fellow explorer, not a know-it-all and
not a small child.

## Art style
- Warm, handcrafted storybook feel. **Rounded forms, soft curves, flat colors**
  (no gradients, no photo texture, no gloss, no rim light).
- Clean, even outline in `#1E1E1E`. Canonical line weight = **2.35% of head
  height** (render large — head ≥ 400 px — so the outline is ~9–10 px).
- Minimal interior detail; the **silhouette** carries recognition.

## Head structure (the skull is the foundation — everything conforms to it)
- Soft, **rounded squirrel cranium**, broad enough for full cheeks without going
  spherical/childlike. Substantial rounded volume behind the ear is preserved in
  every view; the rear skull never falls away abruptly.

## Ears — "Soft Taper" (THE #1 THING RENDERERS GET WRONG)
- **Moderate size. Rounded upper contour. Gentle inward curl. Broad natural base.**
- **Attached LOW on the SIDES of the skull**, facing sideways — NOT perched on top,
  NOT facing forward.
- **Tips rise only slightly above the skull.**
- **They are squirrel ears — NOT cat ears, NOT fox/wolf ears, NOT rabbit ears.**
  Do **not** draw tall, pointed, triangular, or high-set ears. If in doubt, make
  them rounder and shorter, matching the attached Canonical Ear study exactly.

## Muzzle (SECOND most common drift — do NOT shorten it)
- Muzzle **projects forward** enough to communicate curiosity; it **inflates from
  the skull like a balloon under a blanket** (no hard glued-on seam).
- Small, soft, rounded nose; **fuller lower jaw**; gentle (not sharp) chin.
- Do **not** flatten or shorten the muzzle into a pushed-in kitten face. Match the
  attached Canonical Muzzle study's forward projection.

## Eyes — "Quiet Observer"
- Large almond eyes, **defined upper lid, softer lower lid**, single soft
  highlight. Gaze sits just past the viewer. Large but not so large she reads as a
  child. Eye size stays constant across views.

## Eyebrows — organic fur brows
- Soft **directional fur strokes**, light and slightly irregular — NOT smooth
  groomed cosmetic arcs.

## Forehead / crown fur — "Soft Layered Sweep"
- Authority: [Gypsa Crown Fur Specification v1.0](../Approved%20Reference/Gypsa%20Crown%20Fur%20Specification.md), confirmed 2026-10-09. Start at rear crown centered between ears; sweep clockwise **viewed directly from the face**, initially image-right / Gypsa's left ear, then curve into longest tip on facial midline. Tip height is halfway vertically between neutral eye-opening top and lowest center-facing eyelash point of each eye. Preserve that head-attached geometry across views. Old opposite sweep-side labels in image references are superseded.
- Longer front tufts flowing asymmetrically across the crown, tapering gradually
  into normal coat. **There is no visible line where the hair ends.** Crown volume
  stays shallow enough that the rounded skull still reads. Do not obscure the brow.
- The central tip may descend between brows to its eye/lash landmark height. Preserve both brows; do not enforce an all-tips-above-brows restriction. No existing reference is a complete validated v1.0 crown render.

## Default neutral expression
- Eyes slightly widened with **interest** (not surprise), **one brow a touch
  higher**, a **small closed-mouth smile**, head tilt ~7°. Reads as
  *"I think I found something interesting…"*

## Scope of these renders — HEAD + a little upper body only
- Head and the top of the shoulders/chest, with the **green bandana** (oak-leaf
  green `#4F7A3A`) tied at the neck. No full body, no backpack, no walking stick,
  no scenery, no text labels.

## Color palette (use exactly)
| Part | Hex |
| --- | --- |
| Fur (main) | `#595652` |
| Belly / face | `#B97A3D` |
| Inner ear | `#E7B37A` |
| Outline | `#1E1E1E` |
| Nose | `#2B2B2B` |
| Eyes | `#111111` |
| Bandana (oak-leaf green) | `#4F7A3A` |

## Output
- **Fully transparent background** (real alpha — no white card, no checkerboard,
  no shadow, no scenery). Single head centered, a little margin, square framing.

## Gypsa's head is NOT
Pointed/tall/high-set ears; short pushed-in muzzle; four-arc groomed eyebrows;
glossy/3D/gradient shading; a visible "hairline" edge; an overly round childlike
face.

---

*End of shared brief. The four steps follow.*

---

# Step 1 — FRONT head (lock this first)

> **Attempt log.** The first Step-1 attempts drifted into a **generic bear/puppy
> cub**: ears small but perched **on top of the head** (not low on the sides),
> big lashed "cute cub" eyes, broad round muzzle, and no squirrel identity. See
> `output/Friendly Squirrel Portrait with Green Bandana.png`. The lesson: words
> alone don't hold "squirrel," and the renderer treats our stylized studies as
> *mood*, not geometry. **This Path-A rework anchors species and ear placement to
> real squirrel photos and leads with those constraints.** If one more well-aimed
> attempt still lands on a generic cub, switch to the geometry/vector approach
> (Path B) instead of burning more renders.

**Attach these images** (tell the renderer what each governs):
1. `EasternGraySquirrel_GAm.jpg` — **SPECIES + EAR PLACEMENT anchor (most
   important).** A real Eastern Gray Squirrel in profile. Governs: this is a
   SQUIRREL, not a bear/puppy; ears sit **low on the sides** of a rounded skull
   with cranium bulging above/behind them; muzzle projects forward. *(Copy the
   anatomy and proportions, NOT the realistic photo texture or the pose.)*
2. `Approved Reference/inquisitive squirrel reference.jpg` — **near-front squirrel
   head anchor.** Same purpose from a more frontal angle: forward muzzle, low side
   ears, alert friendly feel.
3. `Approved Reference/Gypsa Canonical Ear.png` — **the stylized ear shape** to use
   (rounded upper contour, gentle inward curl). Combine with the photos: photo =
   *where/how the ear attaches*; this study = *the stylized shape*.
4. `Approved Reference/Gypsa Canonical Muzzle.png` — **the stylized muzzle shape**
   (forward projection, small nose, full lower jaw).

> **Deliberately NOT attached:** `Gypsa Canonical Head Neutral Pose.png`. Its own
> ears are drifted (too tall/high), and attaching it appears to reinforce the
> wrong ear placement. We reintroduce it later only if needed for expression feel.

**Paste-in prompt:**
> Using the shared design brief above, draw **the HEAD of a stylized cartoon
> Eastern Gray SQUIRREL named Gypsa, in a straight-on FRONT view**, looking at the
> viewer. **She is a squirrel — NOT a bear, NOT a puppy, NOT a cub.** Match the
> head anatomy and proportions of the attached squirrel photographs (species, ear
> placement, forward muzzle), but render her in the flat storybook cartoon style
> of the brief — do not copy the photos' realistic fur texture.
>
> **MOST IMPORTANT — the ears (this is what previous attempts got wrong):**
> - The ears attach **LOW, on the SIDES of the head, roughly at eye level**, just
>   like the attached squirrel photos. They are **NOT** on top of the head and
>   **NOT** perched like a bear-cub or puppy.
> - Shape: **moderate size, rounded upper contour, gentle inward curl**, broad
>   base — the stylized shape of the attached Canonical Ear study.
> - In this front view only the **front edge** of each ear shows; tips rise only
>   slightly above the top of the skull. The **rounded cranium bulges up and out
>   above and between the ears** (as in the squirrel photos).
>
> **The muzzle:** projects **forward** from the face and inflates softly from the
> skull (like a balloon under a blanket) — small soft rounded nose, fuller lower
> jaw, gentle chin. Do **NOT** draw a flat, broad, pushed-in round face.
>
> **The eyes:** large but calm **almond** "Quiet Observer" eyes with a defined
> upper lid and a single soft highlight — **NO eyelashes**, not giant round
> glossy cub eyes. Gaze just past the viewer. **Eyebrows** are soft directional
> **fur strokes**, not smooth groomed arcs.
>
> **Expression:** her default — eyes slightly widened with interest, one brow a
> touch higher, a small closed-mouth smile, head tilted ~7°. Warm and curious.
>
> Head plus a little upper chest with the **green bandana (`#4F7A3A`) tied in a
> front knot** at the neck. Flat colors only, clean even `#1E1E1E` outline, exact
> palette from the brief, **fully transparent background** (no card, no
> checkerboard, no shadow, no scenery). One head, centered, square frame. No full
> body, no props, no text.
>
> **Do NOT produce:** a bear or puppy; ears on top of the head; eyelashes; a
> giant-eyed cub; a flat pushed-in muzzle; realistic fur texture; any background.

**Verify before accepting:**
- ✅ Reads unmistakably as a **squirrel**, not a bear/puppy/cub.
- ✅ Ears **low on the sides at ~eye level**, rounded, moderate — NOT on top of
  the head (the specific failure of the earlier attempts).
- ✅ Rounded cranium bulges above/between the ears.
- ✅ Muzzle **projects forward**, soft and inflated — not flat/broad/pushed-in.
- ✅ Almond Quiet-Observer eyes, **no eyelashes**; fur brows (not arcs).
- ✅ Soft crown sweep, no visible hairline edge.
- ✅ Flat color, even outline, exact palette, **transparent** background.

Save approved as `Rendering/output/gypsa_head_front_v1.png`.

> **If this attempt still fails** (generic cub, ears on top, or species drift):
> stop re-rolling and switch to **Path B — build the canonical head as vector/SVG
> art from the geometry** (`gypsa_upright_reference.svg`, the body dummy, the
> geometry table, and the `gypsa/tools/` scripts), using the AI only for style
> reference. The renderer fighting our precise geometry is itself the signal that
> the geometry-driven route is the reliable one.

---

# Step 2 — 3/4 LEFT head (anchor to the approved front)

**Attach these images:**
1. **The APPROVED front head** from Step 1 (`gypsa_head_front_v1.png`) — **the
   consistency anchor.** Same character, same ear/muzzle/eye design, now rotated.
2. `Approved Reference/Gypsa Canonical Ear.png` — ear shape authority (near ear
   keeps canonical size/contour/low attachment; far ear sits naturally behind).
3. `Approved Reference/Gypsa Canonical Muzzle.png` — this is a **3/4 muzzle study**;
   near side gains projection, far side compresses naturally.

**Paste-in prompt:**
> Using the shared design brief above and the attached **approved front head** as
> the exact same character, draw **Gypsa's head in a 3/4 view turned to her LEFT**
> (we see more of the left side of her face), same neutral expression. Keep the
> ear shape, muzzle, eyes, and coloring identical to the approved front head —
> only the rotation changes. **Near ear** keeps its canonical rounded low-set
> shape; **far ear** sits naturally behind in rotation — do NOT shorten either ear
> or migrate the base up toward the crown. The **near side of the muzzle** gains
> visible forward projection; keep it soft and inflated, not short. Flat colors,
> even `#1E1E1E` outline, exact palette, fully transparent background. One head,
> centered, square frame. No body beyond the bandana, no props, no text.

**Verify before accepting:**
- ✅ Reads as the **same character** as the approved front (not a new design).
- ✅ Both ears rounded + low; far ear behind, neither shortened.
- ✅ Near muzzle projects forward with the soft planar transition; not flat.
- ✅ Flat color, even outline, exact palette, **transparent** background.

Save approved as `Rendering/output/gypsa_head_3q_left_v1.png`.

---

# Step 3 — PROFILE LEFT head (the mandatory attachment-validation view)

**Attach these images:**
1. **The APPROVED front head** (Step 1) and **the APPROVED 3/4 head** (Step 2) —
   the character anchors.
2. `Approved Reference/Gypsa Canonical Ear.png` — ear authority; profile is where
   ear-root attachment must make anatomical sense.
3. `Approved Reference/Gypsa Canonical Muzzle.png` — the muzzle study is itself a
   3/4-left study; use it to keep forward projection honest in profile.
4. `Approved Reference/Gypsa Profile View.png` — **head-to-back flow & posture**
   cross-check (the no-visible-neck continuous curve; use for the head/neck
   silhouette only, ignore the body/tail).

**Paste-in prompt:**
> Using the shared design brief above and the attached approved front and 3/4
> heads as the exact same character, draw **Gypsa's head in a full LEFT PROFILE
> (side) view**, same neutral expression, facing left. This view must make the
> **ear-root attachment anatomically correct:** the front/root attachment sits
> **just above the eye line**, the rear/root attachment sits **lower and farther
> back**, and the **rounded cranium continues full behind and beneath the ear** —
> do NOT narrow the back of the skull. Keep the ear the same canonical rounded,
> moderate length as the other views. The **muzzle projects clearly forward** from
> the skull while staying integrated into cheek and jaw (not a sharp glued-on
> snout, not a short flat face). The crown fur tapers gradually into the coat with
> **no visible hairline edge**, and the head flows into the neck/back in one
> continuous curve (no sharp neck step). Flat colors, even `#1E1E1E` outline, exact
> palette, fully transparent background. One head, centered, square frame. No
> props, no text, no background.

**Verify before accepting:**
- ✅ Ear roots read correctly (front just above eye line; rear lower & back).
- ✅ Rounded cranium preserved behind/under the ear; ear same length as other views.
- ✅ Muzzle clearly projects forward, integrated — not short, not a sharp snout.
- ✅ No hairline edge; continuous head-to-neck flow.
- ✅ Flat color, even outline, exact palette, **transparent** background.

Save approved as `Rendering/output/gypsa_head_profile_left_v1.png`.

---

# Step 4 — Combined turnaround sheet (assemble from the three APPROVED singles)

**Only start this after Steps 1–3 are each individually approved.** This step must
**not redraw** Gypsa — it only arranges the three approved heads side by side so
no new drift can be introduced.

**Attach these images:**
1. `gypsa_head_front_v1.png` (approved)
2. `gypsa_head_3q_left_v1.png` (approved)
3. `gypsa_head_profile_left_v1.png` (approved)

**Paste-in prompt:**
> Create a single clean reference sheet placing these **three provided head images
> side by side, left to right, in this order: Front, 3/4 Left, Profile Left**, on a
> transparent background. **Do NOT redraw, restyle, or regenerate the heads** —
> use the provided images as-is, at matching size and vertical alignment, evenly
> spaced. You may add a small simple caption under each ("Front", "3/4 View",
> "Side View") in a plain dark hand-lettered style and a small title "Gypsa —
> Canonical Head Views" at the top, all in `#1E1E1E`. Nothing else: no background,
> no decoration, no extra art.

> *Alternative if the renderer insists on redrawing:* skip the AI assembly and
> composite the three approved PNGs in an image editor instead. The sheet is just
> layout; the authority always remains the three approved singles.

**Verify before accepting:**
- ✅ The three heads are **pixel-identical** to the approved singles (not redrawn).
- ✅ Consistent size, alignment, spacing; transparent background.
- ✅ Captions legible and in palette (if used).

Save approved as `Rendering/output/gypsa_head_views_combined_v1.png`.

---

# Canonization & Approved-Reference cleanup (do after each approval)

Goal: **minimal Approved Reference folder, fully covered.** As each image is
approved, promote it and retire what it supersedes, so there is exactly one
authority per concept and nothing redundant.

### As each single view is approved
- Move the approved PNG from `Rendering/output/` into `Approved Reference/` with a
  clear canonical name:
  - `Gypsa Canonical Head — Front.png`
  - `Gypsa Canonical Head — 3-4 Left.png`
  - `Gypsa Canonical Head — Profile Left.png`

### Once the combined sheet (Step 4) is approved
- Move it in as `Gypsa Canonical Head Reference Views.png` — **reusing the existing
  canonical filename** so the render docs that already cite it keep working.
- **Retire the superseded files to `Older Reference Revisions/`:**
  - The current drifted `Gypsa Canonical Head Reference Views.png` (pointed ears).
  - `Gypsa Reference Images.png` (self-contradictory ears — now fully replaced by
    the new front/3-4/profile heads).
  - Re-evaluate `Gypsa Canonical Head Neutral Pose.png`: if the new Front head
    covers its role, retire it too; if it still serves as the expression-feel seed,
    keep it and note why in the audit.

### Coverage check (so "minimal" doesn't become "missing")
Before retiring anything, confirm every head concept still has an owner in
Approved Reference:
- Ear shape → `Gypsa Canonical Ear.png` (keep; it is the study the new views were
  built from).
- Muzzle → `Gypsa Canonical Muzzle.png` (keep; same reason).
- Neutral head, three rotations → the new front / 3-4 / profile singles + combined.
- Expression system (8 emotions) → still `Gypsa Head Expressions.png` for now
  (ears there are still the old drift — flag for a later regen; do NOT retire until
  replaced).

### Documentation updates on canonization
- `Gypsa Reference Image Audit.md`: update the head rows to 🟢, note the new
  canonical head set, and move the retired files into the "archived" narrative.
- `gypsa-canonical-head-construction-guide.md`: point its "best drawing" callouts
  at the new front/3-4/profile heads.
- `gypsa-production-guide.md` "Canonical References" table: no status change
  (still Approved), but the underlying images are now the corrected set.
- `Gypsa Canon Summary.md` §2 (Head Assembly): update the "Best drawing" column to
  the new heads.
- Render docs (`Gypsa Rendering Plan.md`, `Render Brief 01`): once the heads are
  canon, update any "ears drift" references to point at the new front head as the
  face authority.
