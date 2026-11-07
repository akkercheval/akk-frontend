# Canonical Body Dummy v2.0

## 1. Design Philosophy

The Canonical Body Dummy is a neutral reference framework.

It exists to reduce variables and improve design decisions.

Its purpose is not to express personality, but to provide a stable foundation upon which personality can be built.

Every curve in the dummy should be drawable with one confident stroke.

**What changed in v2.0:** the dummy is now generated directly from Gypsa's
**canonical structural rig** (`tools/gypsa_reference_svg.py`) rather than hand-
placed. Every proportion — back length, arm and leg segments, head size, and the
tail curve — is driven by the current canon measurements. Earlier versions
(v1.0 / v1.1) predate the structural exploration and used approximate limb
lengths and an eyeballed tail; they are retained in `Older Reference Revisions`.

## 2. Purpose

*The Canonical Body Dummy exists to answer questions like:*
- Does this head fit?
- Is the backpack too large?
- Does the tail overpower the silhouette?
- Is the walking stick too long?
- Does the overall posture still feel like Gypsa?

*It should NOT answer questions like:*
- Is the backpack attractive?
- Are the eyes expressive?
- Does the fur look right?

**It should be:**
- Simple
- Repeatable
- Measurable
- Emotionally neutral

*This drawing is evaluated for function before beauty.*

## 3. Canonical Measurements (v2.0)

All values in head-height units (**1H = head height, chin to cranial top,
excluding ears**). These are the current provisional-canon structural values;
the authority is `Gypsa Canonical Geometry Table v0.1.md`.

### Landmark heights (above ground)

| Landmark | Height |
| --- | --- |
| Ear tips | 4.60H |
| Top of head | 4.45H |
| Base of head (Nc) | 3.45H |
| Shoulder / neck transition (Sc) | 3.15H |
| Hip joint (Pc) | 1.45H |
| Knee (reference) | 0.85H |
| Ground | 0.00H |

**Overall height ≈ 4.45H** (ground to top of head). The character is taller than
the early v1.x estimate (~3.85 units) because the canonical **back length
(1.70H)** raised the shoulder — and the head and ears rise with it.

### Axial spine

| Segment | Length |
| --- | --- |
| Nc → Sc (neck) | 0.30H |
| Sc → Pc (back) | **1.70H** — Back Length Exploration Candidate B |
| Pc → Tr (spine → tail root) | 0.10H |

### Arms (branch from Sc)

| Segment | Length |
| --- | --- |
| S → E (upper arm) | 0.62H — Arm Exploration Candidate C |
| E → W (forearm) | 0.72H — Arm Exploration Candidate C |
| W → Kb (palm depth) | 0.22H — revised from squirrel-paw study |
| Kb → Tf (finger length) | 0.26H — revised from squirrel-paw study |
| W → Tf (total hand reach) | 0.48H — L1 + L2 |

*Note: earlier dummy text listed 0.75 / 0.9 units for the arms and a single
"W → Tf = 0.24H" paw extent. Those were superseded — the arms adopt the Arm
Exploration (a gentle middle ground between an anatomical squirrel and a
stylized cartoon), and the hand now uses the three-landmark system W → Kb → Tf,
where the finger length (Kb→Tf) is 0.26H and 0.48H is the total wrist-to-
fingertip reach. Palm depth and finger length are 0.22H / 0.26H (the longest
finger is a little longer than the wrist-to-finger-base span), matching
`Gypsa Joint System.md`.*

### Hind legs (branch from Pc, Candidate C)

| Segment | Length |
| --- | --- |
| H → K (hip → knee) | 0.59H |
| K → Hk (knee → hock/heel) | 0.82H |
| Hk → T (hock → ball of foot) | 0.59H |
| T → Th (ball → visible toe end) | 0.27H — Digit Exploration Candidate D |

Squirrel Z-fold: knee forward, hock back. *(Earlier dummy text listed 0.8 / 0.95
units; superseded by the Hind Leg Exploration.)*

## 4. Construction Components

### Head
- Simple placeholder oval, slightly wider than tall, centered on the head
  center (Hc).
- Its only job is maintaining consistent scale.
- **Ear (profile shows one):** a single near-side ear is drawn, since in a true
  side view the far ear is largely hidden behind the head. The ear runs from the
  canonical root (El, 4.296H) to the tip (Elt, 4.596H) — length 0.30H — attached
  low toward the back of the crown, rounded, and proportional to the 1.0H head
  (about 30% of head height). This replaces the earlier two small placeholder
  ovals.

### Neck
- Minimal, not absent — just enough to separate head from torso (Nc → Sc,
  0.30H).

### Shoulders
Narrow, to preserve Gypsa's youthful, agile appearance, but wide enough that
the arms originate naturally from the torso.

### Torso
- Pear-shaped, widest about 60% down from the shoulder toward the hip.
- Tapers smoothly into the pelvis as one continuous flowing transition.
- Communicates: soft, balanced, approachable, warm, friendly. Naturally
  supports the backpack straps.

### Arms & Legs
- Drawn as simple stroked **centerlines** through the canonical joints
  (S→E→W for arms, H→K→Hk for legs) — construction lines, not filled volumes.

### Hands
- **Palm circle** whose *diameter equals the palm depth* W → Kb (0.22H),
  centered on the W→Kb span.
- **Three simple fingers** fanning from slightly separated origins on the palm
  rim, the longest equal to the canonical finger length Kb → Tf (0.26H).
- **One opposed thumb**, shorter, branching from the palm toward the grip side.
- This upgrades the earlier plain mitten oval. The fingers + thumb exist so the
  dummy can test **grip**: for the walking stick, the hand must close around the
  shaft with fingertip-to-thumb overlap. At a stick circumference ≈ 2× the
  longest finger (≈0.17H diameter), one finger length reaches halfway around the
  shaft and the thumb completes a comfortable overlapping grip.

### Tail Attachment
The tail originates at the tail root (Tr), on the Pc→Sc spine line just above
the pelvis (0.10H up) — rooted in the hips, not the lower back, to keep
believable body mechanics. In the **profile** view the tail attaches at the
**back edge of the body** (the base of the spine sits close to the back
contour, not the center of the torso). In the straight-on **front/back** view
the tail correctly sits on the center line.

### Feet
Simplified wedge forms (heel Hk → ball T → toe Th) with a clear forward
direction, to support stable walking and future hiking poses.

### Tail
- Neutral position, graceful **S-curve** — tail at rest, not expressive.
- The dummy uses the **canonical neutral S-sweep** exactly: the cubic Bézier
  through Tr → Tt1 → Tt2 → Tt3 → Tst with the canonical tangent handles (see
  the Geometry Table's tail section). This replaces the earlier hand-drawn
  S-curve.

### Backpack
- Simple rounded volume placeholder on the back; no pockets, patches, oak leaf,
  or cookie cutter. Purpose: *does the body still balance visually?*

### Walking stick (staff)
- Scale-reference placeholder, forward of the body, now carrying the walking
  stick's **canonical reference points** (see
  `../Exploration/Walking Stick/walking-stick-exploration.md`):
  - **Grip bend** at the **elbow line (2.56H)** — the natural kink where Gypsa
    grips.
  - **Y-split minimum** at the **shoulder line (3.15H)** — the fork begins no
    lower than shoulder height; below this is the minimum straight shaft.
  - **Suggested Y-split base ~3.35H**, with the two fork arms rising toward the
  - **maximum top at the eye line (3.95H)**.
- The stick still spans ground → eye line overall, preserving cross-revision
  length comparisons, but it now shows *where the grip and the hanging fork
  live*, not just total height.

## 5. Reference Pose *(baseline for evaluation only)*
- Standing upright.
- Slight forward lean (~5°), carried by the center line.
- Arms relaxed with a gentle bend.
- Tail hanging in its neutral S-curve behind her.
- Backpack in standard position.

*Gypsa at rest, before she notices something interesting.*

## 6. Construction Lines
*Visible guidelines on the reference sheet:* Top of Head, Eye Line, Shoulder
Line, Elbow Line, Hip Line, Knee Line, Ground Line, Center Line. These let us
compare future iterations objectively.

## 7. Structural Invariants
Consistent across nearly all depictions of Gypsa: overall body proportions,
reference pose (for evaluation), relative head size, shoulder width, limb
proportions, tail attachment point, backpack position, eye level relative to
the head.

## 8. Variable Elements
Head silhouette (during exploration), facial expression, ear angle, tail
language, arm pose, shoulder gesture (within limits), walking stick, backpack
accessories, seasonal clothing, props.

## 9. Generation

This dummy is produced by `tools/body_dummy.py`, which reads the canonical rig
(`gypsa_reference_svg.compute_joints()` and `tail_bezier_handles()`) and emits
two views:

- `canonical-body-dummy-v2.0-profile.svg` — side view, faces left (staff shown).
- `canonical-body-dummy-v2.0-back.svg` — straight-on symmetric view, similar to
  the original v1.x sheet (tail on the center line behind the body).

Regenerating after any canon change keeps both views in sync automatically.

---

## 10. Revision History

### v1.0
Initial specification (hand-authored).

### v1.1
- Refined shoulder guidance
- Added torso-to-pelvis transition
- Lowered tail attachment guidance
- Added center of gravity
- Distinguished structural invariants from variable elements
- Added neutral staff placeholder

### v2.0
- Rebuilt on the canonical structural rig; the SVG is now generated, not
  hand-placed (`tools/body_dummy.py`).
- Updated all measurements to current canon: back 1.70H (Candidate B), arms
  0.62 / 0.72H (Candidate C), hind legs 0.59 / 0.82 / 0.59H (Candidate C),
  digits 0.24 / 0.27H (Candidate D).
- Overall height revised to ~4.45H (the longer back raises the shoulder/head).
- Tail now uses the exact canonical neutral S-curve Bézier.
- Staff retained at the same relative height (ground → eye line).
- v1.0 / v1.1 files moved to `Older Reference Revisions`.

#### v2.0 revision (same version, refinements after first review)
- Profile tail now attaches at the **back edge of the body** (base of the
  spine), not the center of the torso.
- Arms and legs are drawn as simple **centerlines** rather than tapered volumes
  (the hand oval and wedge foot are kept).
- Split into two labelled views: `-profile.svg` and a new straight-on
  `-back.svg` (symmetric front/back line view, like the original sheet).

#### v2.0 revision (profile sheet — joints, hand, ear, staff refs; 2026-09-16)
Applied to `-profile.svg` only (the `-back.svg` and generator
`tools/body_dummy.py` are not yet regenerated — see note below):
- **Knee construction line corrected** from ~0.92H to the canonical **0.85H**
  (y 743.4 → 755.5).
- **All canonical joints now marked and labelled** on the sheet: Hc, El/Elt,
  Nc, Sc/S, E, W, Kb, Tf, Pc/H, K, Hk, T, Th, and the tail centerline points
  Tr, Tt1, Tt2, Tt3, Tst — color-grouped by region.
- **Single near-side ear** (was two placeholder ovals): drawn El(4.296H) →
  Elt(4.596H), length 0.30H, rounded and proportional to the head.
- **Hand rebuilt** from a plain oval to a **palm circle (diameter = W→Kb =
  0.22H) + three fingers (longest = Kb→Tf = 0.24H) + opposed thumb**, so the
  dummy can test walking-stick grip.
- **Walking-stick placeholder** now shows the grip bend (elbow 2.56H), the
  Y-split minimum (shoulder 3.15H), a suggested Y-split base (~3.35H), and the
  fork rising to the eye-line max (3.95H).
- Every segment and landmark was re-verified against
  `Gypsa Canonical Geometry Table v0.1.md` (all match to three decimals).

> **Sync note:** these profile-sheet edits were made **directly to the SVG**,
> not yet reflected in the generator `tools/body_dummy.py` or the `-back.svg`
> view. Regenerate those to bring all three into sync when convenient.
>
#### v2.0 revision (hand reconciliation + finger separation; 2026-09-16)
- **Hand lengths reconciled to the deliberate squirrel-paw study values:**
  W→Kb = **0.22H** (palm depth), Kb→Tf = **0.26H** (finger length), reach
  **0.48H** — the longest finger is a little longer than the wrist-to-finger-base
  span. The Geometry Table and `Gypsa Joint System.md` now agree.
- **Finger origins separated** slightly around the palm rim (the middle finger
  still starts at Kb) so the three fingers read as distinct.
- **Tt2 tail marker corrected** onto the tail centerline at its canonical
  position (592.7, 432.7) = Tr offset (+0.425, +1.199H); it had been misplaced
  above the curve.

#### v2.0 revision (ear reshape + label cleanup; verified via render; 2026-09-16)
- **Ear reshaped** from a small floating loop into a proper rounded near-side
  ear with an inner ridge, spanning El (root, 4.296H) → Elt (tip, 4.596H).
- **Labels de-collided** after rendering the sheet to PNG for visual review
  (Elt/El, Nc/Sc, Tr/Pc·H, the Center guide label, and the stick "max top"
  callout were overlapping). Established a render → inspect → adjust loop using
  `tools/render-svg.mjs` (resvg). Geometry unchanged by this pass.
