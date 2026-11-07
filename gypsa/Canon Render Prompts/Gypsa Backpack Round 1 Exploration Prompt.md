# Gypsa Backpack — Round 1 Exploration Prompt

**Purpose:** Generate a Round 1 *exploration* raster image of **Gypsa's woodland
backpack, rendered entirely on its own** (no character, no body) in **3/4 view**,
as a **single comparison sheet of four backpacks side by side** — one per top-flap
variation. Rendering the pack alone lets us compare design variations without the
character's body distracting from (or distorting) the object. This is a broad
exploration pass — we want to see the backpack interpreted, not a frozen final
design. Later rounds refine it to canon.

**Status:** Not yet canon. This prompt sources its identity from
`Approved Reference/gypsa-character-bible.md` §8 (Equipment → Backpack), its
scale from `Approved Reference/Gypsa Canonical Geometry Table v0.1.md`, its
tail-clearance envelope from `Approved Reference/Tail Specification Neutral
Pose.md` + `Approved Reference/Gypsa Tail Neutral Curve.png`, and its color
palette + rendering rules from `Approved Reference/gypsa-production-guide.md`.

**Scale unit:** 1H = head height (chin to cranial top, excluding ears).

---

## 0.0 OUTCOME — Acorn flap selected as canon (2026-09-22)

The four-up comparison sheet (`ChatGPT Image Sep 22, 2026, 06_01_48 PM.png`,
edited from the 05_49_06 original) resolved this exploration. **Decision:**

- **Top flap = ACORN shape → CANON.** It read best of the four and sells the
  "acorn-inspired flap" from the Character Bible; the quilted cross-hatch cap
  texture is kept. Runner-up was the rounded-rectangle. The "leaf" flap was
  rejected in part because it rendered as a generic pointed leaf, not an oak leaf.
- **Walking-stick carry = SIDE-MOUNT.** The top/back-mount (packs 2 and 4) is
  impractical — the stick appears to skewer the pack and fouls the flap. Two plain
  leather straps down one side is canonical.
- **Cookie-cutter charm = ACORN shape**, to echo the acorn flap (replacing the
  oak-leaf cutter the render used). It is tied to the **backpack's top loop**, not
  to the walking stick.
- **Refinements folded into canon:** enlarge the oak-leaf body patch; lengthen the
  acorn "nut" so it descends longer before tapering to the point; add a **leather
  top loop** (a common backpack hang loop) that the render omitted.

**Canonical spec now lives in
`../../Approved Reference/Gypsa Backpack.md`.** This exploration doc is retained
as the lineage record for how that decision was reached.

---

## 0. Findings from the first full-character render (Round 1a)

The first render (`ChatGPT Image Sep 22, 2026, 04_11_09 PM.png`) drew Gypsa
wearing the pack in profile. It taught us useful things, but confirmed we should
**explore the backpack on its own** rather than re-rendering the whole character.

**Adhered well to canon:**
- Palette close to canon (canvas ~`#A8743A`, leather flap ~`#6B4A2E`, green
  oak-leaf patch, silver acorn charm; correct cool-gray fur + warm belly).
- Strong character read: young-adult Eastern Gray Squirrel, upright, calm, kind
  eyes, gentle closed-mouth smile, low rounded ears.
- Backpack identity mostly on-spec: rounded leather flap, drawstring, oak-leaf
  patch, a neat cross-stitch repair, acorn charm, two straps, natural materials.

**Drifted from canon:**
- **Tail attachment (main error):** the tail was glued to the *side of the hip /
  haunch* instead of emerging from the terminal spine (tail root **Tr**,
  ~1.55H on the centerline). Canon: the tail root is integrated into the rump on
  the spine line — never surface-attached to the hip or thigh.
- **Back length** read shorter than canonical Sc→Pc = 1.70H, making her a touch
  stubby.
- **Walking stick** rendered far too short/stubby (canon: full found-oak branch,
  base on ground, fork tips at eye line 3.95H) and used one strap + one holster
  rather than plain leather straps.
- Delivered a near-**profile**, not the requested 3/4.

**Conclusion / method for this round:** per the production guide's rule to
*"freeze approved components while testing dependent features,"* we now explore
**only the backpack** (no full body, so the tail can't be mis-attached). See
§5 for how we keep tail attachment correct when the body *is* eventually drawn.

---

## 1. What the backpack is (identity)

A **woodland backpack** Gypsa has carried and repaired for years — a trusted,
lived-in piece of kit, not new-from-a-store gear. Per the Character Bible it
reads as:

- Sturdy, handcrafted, and made from **natural materials** — cotton / linen
  canvas body, with **leather** for the top flap and the straps.
- A **top flap** (cover) over a **drawstring closure**.
- **Two shoulder straps.**
- An **oak leaf** and/or **acorn** patch, applied as **carefully sewn-on
  mending** (see §3.2).
- A small **cookie cutter, tied on as a charm** (see §3.3).
- **Two leather straps** on the pack to carry her **found-oak walking stick**, so
  she can stow it and drop to all fours ("Squirrel Mode") when she needs to run
  (see §3.4).

**Personality read:** careful, resourceful, gentle. Every addition is *earned* —
nothing decorative without a reason. The pack should look like it belongs to
someone who repairs useful things and keeps small keepsakes.

**It must NOT read as:** a modern nylon hiking pack, a tactical/military pack, a
sleek branded daypack, or a fantasy/magical satchel.

---

## 2. Canonical calculations (the sizing constraints)

These numbers define the backpack's envelope. Both are derived so the values
survive a rescale to any sheet resolution. (Even though this round renders the
pack alone, these proportions govern its overall shape — build it at roughly
**height : width ≈ 1.60 : shoulder-width** and keep it trim in depth.)

### 2.1 Maximum total backpack height — Tr → Sc = **1.60H**

The backpack sits on Gypsa's back between her tail root and shoulders. Its
**maximum vertical height** is the spinal distance from the **tail root (Tr)** up
to the **shoulder / neck transition (Sc)**.

From `Gypsa Canonical Geometry Table v0.1.md`, both points lie on the vertical
profile spine (x = 0):

| Landmark | Height above ground |
| --- | --- |
| Sc — shoulder / neck transition | **3.15H** |
| Tr — terminal spine / tail root | **1.55H** |

Because both sit on the same vertical spine line, the distance is purely
vertical:

> **Tr → Sc = 3.15H − 1.55H = 1.60H**

**➡ Maximum total backpack height = 1.60H.**

### 2.2 Maximum thickness (front-to-back depth) — from the neutral tail

The pack must **comfortably clear Gypsa's neutral tail**, whose lower S-curve
bulges outward behind her. We derive thickness from the canonical neutral-tail
raster `Gypsa Tail Neutral Curve.png`, standardized against the tail reference
line so it is scale-independent.

**Measured pixel points on `Gypsa Tail Neutral Curve.png`:**

| Point | Pixel (x, y) | Meaning |
| --- | --- | --- |
| Tail root (Tr) | (14, 312) | Structural root at the base of the S |
| Lower-S maximum | (95, 250) | Outermost bulge of the lower S curve (peak rearward excursion) |
| Upper-S minimum | (46, 120) | Innermost point of the upper S arc |

**Absolute maximum thickness (given, from this canonical image): 81 px.**

**Standardizing against the tail reference line (scale-independent):** the
neutral tail climbs from Tr (y = 312) to the top of the upper arc (y = 120) —
a vertical rise of **192 px** — corresponding to the tail rising past the
shoulder to roughly its apex (canon: Tt3 apex ≈ 2.18H above Tr). Image scale:

> **192 px ÷ 2.18H ≈ 88 px per H**

| Thickness | Pixels (this image) | Normalized (÷ 88 px/H) |
| --- | --- | --- |
| **Absolute maximum thickness** | **81 px** | **≈ 0.92H** |
| **Thickness baseline (chosen)** | **52 px** | **≈ 0.59H** |

> **➡ Backpack thickness baseline = 52 px ≈ 0.59H**, absolute max **81 px ≈
> 0.92H**. Render near the baseline so it looks trim; never exceed the cap.

### 2.3 Width — matches Gypsa's shoulders

> **➡ The backpack is always rendered to the same width as Gypsa's shoulders.**

### 2.4 Envelope summary

| Dimension | Value | Source |
| --- | --- | --- |
| **Height (max)** | **1.60H** (Tr → Sc) | Geometry Table (Sc 3.15H − Tr 1.55H) |
| **Thickness (baseline)** | **≈ 0.59H** (52 px canonical) | Neutral tail clearance |
| **Thickness (absolute max)** | **≈ 0.92H** (81 px canonical) | Neutral tail clearance |
| **Width** | **= shoulder width** | Character silhouette rule |
| **Vertical placement (on body)** | base near **Tr (1.55H)**, top at/under **Sc (3.15H)** | Geometry Table |

---

## 3. What to explore this round (the variation axes)

Render **four backpacks by themselves, side by side in one image**, each in the
same 3/4 view (front-3/4, tilted so the top flap, front face, and the
walking-stick-carrying side are all visible). No character or body appears. Vary
the following across the four packs. **Axis 1 (flap shape) is the primary
variable** and defines the four packs; the other axes are distributed across them
(see §3.5).

### 3.1 Axis 1 — Top-flap shape (PRIMARY)

Four flap shapes, one per render:

| Variant | Flap shape |
| --- | --- |
| **A** | **Simple rectangle** (crisp corners) |
| **B** | **Rectangle with curved (rounded) corners** |
| **C** | **Acorn shape** (rounded acorn-body/cap silhouette) |
| **D** | **Leaf shape** (a broad leaf silhouette) |

All flaps are **leather** (`#6B4A2E`), fold down over the top of the canvas body,
and sit above a **drawstring closure**.

### 3.2 Axis 2 — Mending / patches (paired with flap shape)

All repairs must look **carefully done** — a **neatly sewn-on patch** with tidy
visible stitching, signaling care, not damage. Patch placement depends on the
flap shape:

**Rectangular flaps (A, B) → patch is ON THE FLAP itself:**
- **A (simple rectangle):** one **large oak-leaf** patch on the flap.
- **B (rounded rectangle):** **two smaller patches** on the flap — one **oak
  leaf** and one **acorn**.

**Shaped flaps (C, D) → patch is ON THE BACKPACK BODY** (not the flap), and the
**entire patch must be fully visible below the flap's lower edge:**
- **C (acorn flap):** one **leaf** patch on the body, fully below the flap.
- **D (leaf flap):** one **acorn** patch on the body, fully below the flap.

Patch colors: oak-leaf `#4F7A3A`; acorn in the leather/canvas family with a
darker cap; stitching in outline color `#1E1E1E`.

### 3.3 Axis 3 — Cookie-cutter charm

A **small cookie cutter** that Gypsa has **tied to her backpack as a charm** —
show a short cord/string knotted around it and fastened to the pack (a strap
loop, buckle, or drawstring). It reads as a **cookie cutter tied on as a keepsake
charm**, `#B8B8B8`, not a manufactured clip-on. (Canonically an acorn-shaped
cutter, a gift from her grandmother.)

### 3.4 Axis 4 — Walking-stick carry (two options)

Carry the found-oak walking stick using **two simple leather straps** (plain
leather straps — no holster/boot, no buckle-and-loop combo). Two placements to
explore, one per render:

| Option | Placement |
| --- | --- |
| **Side-mount** | Stick runs **vertically down one side** of the pack, held by two leather straps. |
| **Back-mount** | Stick lies **across the back face** of the pack (roughly diagonal/horizontal), held by two leather straps. |

Render the **full-length found-oak branch** proportioned like the canonical stick
(thicker tapering base, gentle natural waviness, subtle knots, asymmetric top
fork) — **do not shrink it to a stub**. It's fine for the stick to extend beyond
the pack's outline; show it at believable full length.

### 3.5 Combining the axes into one comparison sheet

Produce **one image containing four backpacks side by side** (a single row, four
equal cells), one per flap shape. Flap shape (Axis 1) is primary and pairs with a
fixed patch treatment (Axis 2). The tied-on cookie-cutter charm (Axis 3) appears
on **all four**. The walking-stick carry (Axis 4) is distributed so **both
placements appear**: two packs side-mount, two packs back-mount. This single sheet
covers every option on every axis, which is sufficient for a full comparison.

| Pack (left → right) | Flap (Axis 1) | Patch (Axis 2) | Charm (Axis 3) | Stick carry (Axis 4) |
| --- | --- | --- | --- | --- |
| 1 | Simple rectangle | Large oak leaf, **on flap** | tied-on cutter | **Side-mount** |
| 2 | Rounded rectangle | Oak leaf + acorn (two), **on flap** | tied-on cutter | **Back-mount** |
| 3 | Acorn | Leaf, **on body** below flap | tied-on cutter | **Side-mount** |
| 4 | Leaf | Acorn, **on body** below flap | tied-on cutter | **Back-mount** |

All four backpacks are the **same size, same 3/4 angle, evenly spaced** on a plain
background so the only differences are the intended variations. No labels or
callouts.

---

## 4. Color palette (canonical — from the Production Guide)

Use the canonical backpack palette. Do not invent new hues.

| Part | Color |
| --- | --- |
| Backpack flap (leather top cover) | `#6B4A2E` |
| Backpack body (canvas) | `#A8743A` |
| Oak leaf embroidery / leaf patch | `#4F7A3A` |
| Cookie-cutter charm | `#B8B8B8` |
| Outline | `#1E1E1E` |

Straps and walking-stick straps read as leather in the flap family (`#6B4A2E`);
stitching in the outline color.

---

## 5. Keeping the tail attached correctly (for later full-body renders)

This round renders the backpack alone, so there is no tail to misplace. When the
pack is later shown **on Gypsa**, prevent the Round 1a hip-attachment error with
this hierarchy:

1. **Freeze the body.** Supply an approved Gypsa drawing (canonical profile or an
   approved full render) as an image reference and instruct: *"Do not redraw or
   re-pose Gypsa; keep her body and tail exactly as supplied. Add only the
   backpack."* Regenerating the whole character is what invites tail drift.
2. **Explicit tail-root clause** (backstop if the body is drawn): *"Gypsa's tail
   must emerge from the terminal spine at the base of her back — the tail root
   (Tr), on the spine centerline about 1.55H above the ground, integrated into
   the rump. The tail must NEVER attach to the side of the hip, the thigh, the
   haunch, or the rump surface."*
3. **Supply a marked tail-root reference** (most reliable): provide a structural
   drawing with **Tr** marked and instruct that the tail begins at that marker
   and follows the canonical neutral centerline, per
   `Approved Reference/Gypsa Directionally Sanitized Tail Render Prompt.md`.

---

## 6. Rendering style

Friendly Forest foreground style (per `gypsa-production-guide.md`):

- Flat colors, clean linework, rounded joins.
- Canonical outline color `#1E1E1E`; canonical line weight ≈ 2.35% of head
  height.
- No shading gradients, no photorealism, no painterly rendering, no raster
  texture effects.
- Transparent or plain neutral background (no environment scene).
- Handcrafted, warm, believable — "found and repaired," not manufactured.

---

## 7. Priority order (if references conflict)

1. **This round's variation axes** — §3 (flap shape, patch placement, tied-on
   charm, two-strap stick carry).
2. **Scale / envelope** — §2 (height 1.60H, thickness baseline ≈ 0.59H / max ≈
   0.92H, width = shoulders).
3. **Backpack identity** — `gypsa-character-bible.md` §8.
4. **Color + rendering** — `gypsa-production-guide.md`.

A lower-priority reference must never override a higher-priority one. This is a
**Round 1 exploration**, so reasonable interpretation within these constraints is
encouraged — but keep the axes in §3 distinct so the variants stay comparable.

---

## 8. Paste-ready prompt for ChatGPT (one four-up comparison sheet)

> Create a single Round 1 exploration illustration showing **four versions of
> Gypsa's woodland backpack, side by side in one row** (four equal cells). Each
> backpack is shown **entirely by itself — no character, no body, no squirrel** —
> in the **same 3/4 view**, tilted so the top flap, the front face, and the
> stick-carrying side are visible. All four are the **same size, same angle, and
> evenly spaced** on a **plain white/transparent background**, so the only
> differences are the ones described below.
>
> **Every backpack shares these traits:** sturdy and handcrafted from natural
> materials — a **cotton/linen canvas body** (`#A8743A`) with a **leather top
> flap** (`#6B4A2E`) over a **drawstring closure**, and **two leather shoulder
> straps**. Proportions roughly **1.6 times as tall as it is deep**, about
> shoulder-width wide, kept **trim in depth**. Each carries a **small cookie
> cutter tied on as a charm** with a short knotted cord (`#B8B8B8`). Any mending
> is **carefully done** — a **neatly sewn-on patch with tidy visible stitching**,
> signaling care, not damage. Each carries a **full-length found-oak walking
> stick** (thicker tapering base, gentle natural waviness, a couple of subtle
> knots, an asymmetric top fork) held by **two simple leather straps** — no
> holster or boot; the stick may extend past the pack outline at believable full
> length.
>
> **The four backpacks, left to right:**
> 1. **Simple rectangle flap** (crisp corners). One **large oak-leaf patch**
>    (`#4F7A3A`) sewn **on the flap**. Walking stick mounted **vertically down
>    one side**.
> 2. **Rounded-rectangle flap** (rectangle with curved corners). **Two smaller
>    patches** sewn **on the flap** — one **oak leaf** (`#4F7A3A`) and one
>    **acorn**. Walking stick mounted **across the back face**.
> 3. **Acorn-shaped flap.** One **leaf patch** (`#4F7A3A`) sewn **on the canvas
>    body** (not the flap), positioned so the **entire patch is fully visible
>    below the flap's lower edge**. Walking stick mounted **vertically down one
>    side**.
> 4. **Leaf-shaped flap.** One **acorn patch** sewn **on the canvas body** (not
>    the flap), positioned so the **entire patch is fully visible below the flap's
>    lower edge**. Walking stick mounted **across the back face**.
>
> Render in flat **Friendly Forest** style: clean linework, rounded joins,
> `#1E1E1E` outlines, no shading gradients, no photorealism. **No text labels,
> callouts, measurements, numbers, or captions** — just the four backpacks.
