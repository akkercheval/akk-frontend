# Gypsa Canon Documentation Coverage Assessment

**Question:** Do the five Approved Reference documents, together, give an image renderer enough to produce a fully canon, consistent render of Gypsa?

**Short answer:** **No — not yet, for a full-character render.** The five docs are a strong, well-structured *written* specification and they are internally consistent on most points. But three things block guaranteed consistency: (1) several **numerical values are explicitly deferred/provisional** (outline calibration, neck width/depth, final paw outlines, tail body-integration), (2) there is **no approved reference image** in the set — every image slot in the registry is "Pending" — so the renderer has prose but no validated visual target, and (3) a few values **conflict with the still-circulating v1.0 Character Sheet** (chiefly inner-ear color). For a **head-only** render the docs are close to sufficient; for a **full figure with equipment and tail**, they are not.

**Docs assessed (canon):**
- D1 `START HERE — Gypsa Reference Guide.md` (v0.1)
- D2 `Gypsa Head and Expression.md` (v0.10)
- D3 `Gypsa Body and Tail.md` (v0.6)
- D4 `Gypsa Equipment.md` (v0.4)
- D5 `Gypsa Rendering Standard.md` (v0.8)

---

## 1. Coverage by dimension

| Dimension | Owning doc | Coverage | Enough to render consistently? |
| --- | --- | --- | --- |
| Identity / personality | D1 | Strong | Yes |
| Silhouette / proportions | D3 | Strong prose, keyed to structural H | Mostly — see G1 (neck width), G7 (no turnaround) |
| Head construction | D2 | Strong | Mostly — see G2 (landmarks), G3 (clearance width) |
| Body / limbs / paws | D3 | Good | No — see G4 (paw outlines), G1 (neck) |
| Tail | D3 | Detailed curve + envelope | Partial — see G5 (body integration, front width) |
| Equipment | D4 | Strong, measured | Mostly — see G6 (detail plates) |
| Color palette (exact values) | D5 | Mostly exact hex | Partial — see G8 (pending tokens), C-conflicts |
| Linework / outline weight | D5 | **Deferred** | No — see G9 (OPEN calibration) |
| Shading / finish style | D5 | Clear rules | Yes, with G10 caveat (shadow tones pending) |
| Pose / expression range | D2, D1 | Behavioral definitions only | Partial — see G11 (no visual expression sheet) |
| Scale relationships (prop vs body) | D3, D4 | Good (H-based) | Mostly — see G6 |
| Turnaround / multi-view consistency | D1 registry | **None approved** | No — see G7 |

Legend: "Strong" = specified and settled; "Partial/Mostly" = specified but with a named open item; "No" = a decision the renderer needs is explicitly unresolved or missing a visual anchor.

---

## 2. Gaps and ambiguities (with concrete fixes)

### G1 — Neck width and depth are undefined
*D3* → "Deferred neck measurements": front-view side-to-side width and profile front-to-back depth are explicitly "No numerical width or depth is settled yet." The renderer is told the neck is "substantial" but given no H value.
**Fix:** After a validated front + profile head/neck construction, pin two numbers in D3, e.g. "Neck width ≈ 0.XXH side-to-side and depth ≈ 0.XXH front-to-back, measured at [named anatomical level], neutral pose, excluding fur tufts." Until then, mark the neck as render-at-risk.

### G2 — Ear and crown anatomical landmarks are deferred
*D2* → "Validation still required": low ear roots, rotation range, and the crown origin/sweep/front-curl endpoint "await annotation; no numerical angle is prescribed." Two renders can both "follow the prose" and still differ in tip height and curl reach.
**Fix:** Add to D2 a small landmark table on the eventual head master: ear root position (as fraction of skull height from the eye line), neutral vs. attentive rotation in degrees, crown origin point, and the front-curl endpoint expressed relative to the eye/brow line (not relative to lashes). This is called out as pending in tracker C2/C6.

### G3 — Below-eye gray clearance has no minimum width
*D2* → "Below-eye clearance — canonical" and *D5* → facial color pattern both require a continuous visible gray strip but state "No fixed pixel width is established yet." A renderer cannot verify "visible at display size" without a target.
**Fix:** Once validated at 48–64 px, record a minimum clearance as a fraction of eye height (e.g. "≥ 0.XX of eye-opening height, continuous, including the far eye and lower corners") in D2, with D5 owning the color boundary.

### G4 — Final paw/foot outlines unfinished
*D3* → "Hands have three fingers plus one opposed thumb … Resolve taper, relative finger lengths, clustered fan, and thumb opposition in the final paw study"; feet "definitive outlines remain unfinished." Digit **lengths** are settled (palm 0.22H, fingers 0.26H, reach 0.48H) but **shape** is not.
**Fix:** Produce the paw study (see I3 below) and add final outline shapes + neutral relaxed-curl description to D3. **Conflict to note:** *Gypsa Closed Silhouette Junction Spec.md* (supporting, not canon) still cites "longest finger 0.24H" — superseded by D3's 0.26H (tracker C1). Keep that value out of any render.

### G5 — Tail body-integration and front-view visible width unresolved
*D3* → "Projection and the recent front renders" and "Outstanding construction": the downward-dip root integration, and the exact exposed tail width beside the body in front/three-quarter, "still require visual construction validation" and "must be validated across views, not invented as a fixed strip."
**Fix:** Build the tail construction sheet (I5) and record the validated exposed-width range beside the torso per view in D3.

### G6 — Equipment detail treatments deferred
*D4* → "Occlusion and validation": "Final detail plates must establish cap scallop/lattice treatment, leaf outline/stitches, and cord and hardware treatment." Dimensions are solid; fine detail rendering is not pinned.
**Fix:** Produce the equipment detail plate (I7) and add cap-lattice, leaf-stitch, and cord/hardware notes to D4. Also settle cord/hardware **colors** (currently pending in D5).

### G7 — No approved multi-view / turnaround reference exists
*D1* → "Image registry": every slot I1–I8 is "Pending" or "Deferred," and "No images have been approved into this new reference set." Consistency across front/three-quarter/profile/back is asserted in prose but never shown on one validated character. This is the single biggest consistency risk.
**Fix:** Build the head turnaround first (I1), then the body turnaround (I3), assembling from individually validated views per D1's workflow. See §3.

### G8 — Several palette tokens are explicitly pending
*D5* → "Remaining palette work": facial-marking boundaries, shadow tones, detailed sclera/catchlight treatment, and cord/hardware colors are not finalized. The core character tokens (coat, muzzle, inner ear, outline, nose, iris, pupil, claws) **are** settled.
**Fix:** Validate marking boundaries and shadow tones on the head master, then add exact hex for shadow and cord/hardware to the D5 table.

### G9 — Outline calibration is OPEN (absolute line weight undecided)
*D5* → "Outline calibration — discussion required": the historical "2.35% of head height" rule uses **two different spans** (Structural H vs. the ear-tip-to-shoulder calibration span) and "This draft does not choose the denominator." Tracker C5 is OPEN. Two renders can differ in absolute line weight and both be "compliant."
**Fix:** Run the comparison D5 proposes (one unchanged large drawing, both spans annotated, inspected at 48–64 px), record the user's decision, and update D5 **and** the external `style-guide/line-weight/line-weight-standard.md` together. Until then, only *relative* weights (eyebrow 75%, fur-transition 40%) are usable.

### G10 — Shadow tone/lighting convention not validated
*D5* → "Accepted shadow treatment": discrete flat shadows are allowed but "Shadow tones and lighting convention still require palette validation." A renderer has permission but no shadow color or a fixed light direction.
**Fix:** Pin a shadow hex (or a defined darkening of each base) and a default light direction in D5.

### G11 — Expressions are behavioral, not visual
*D2* → "Expression system": eight expressions are defined as coordinated behaviors ("level resting head, balanced relaxed brows …") but "Their visual implementation must be validated on the completed head." No expression image exists.
**Fix:** Build the expression sheet (I6) on the approved head once I1 exists.

### Potential doc-vs-doc / doc-vs-image conflicts to watch
Per *D1* → "Never resolve contradictory rules by averaging them; report the conflict for review":

| Conflict | Detail | Resolution per canon |
| --- | --- | --- |
| **Inner-ear color** | v1.0 Character Sheet prints Inner Ear **#E7B37A**; D5 v0.8 + D2 v0.10 make it **#B97A3D** | Canon docs win — use **#B97A3D**. The sheet is a superseded/archived image, not canon. (Noted in *Proposed Final References* 2026-10-30 entry.) |
| **Longest-finger length** | *Closed Silhouette Junction Spec* (supporting) says 0.24H; D3 says **0.26H** | D3 + tracker C1 win — **0.26H**, reach 0.48H. |
| **Outline denominator** | Structural H vs. ear-tip-to-shoulder calibration span (both in the standard) | Genuinely OPEN (G9/C5); do not pick one silently. |
| **Pupil token history** | Older #111111 pupil vs. current **#000000** | D5 + D2 win — **#000000** black pupils. The v1.0 sheet's "#111111 Eyes" row is superseded. |
| **Iris** | Various generated studies show banded/brighter brown | D5/D2 win — flat **#533923**; generated gradients are defects, not reference. |

None of these are true internal contradictions **within** the five canon docs; they are stale values in older/supporting material. The one genuinely unresolved question is the outline denominator (G9).

---

## 3. Recommended minimal reference-image set

Goal: the **smallest** set of validated images that locks visual consistency. The renderer has good prose; what it lacks is a *validated visual anchor*. Build these in order; each later sheet is assembled from earlier validated views (per *D1* → "Use and validation" and *Proposed Final References* → sequence). These map onto the registry slots I1–I7.

### R1 — Head turnaround (registry I1) — build first
**Shows:** the same completed head in front, three-quarter (canonical left-facing), and true profile — identical muzzle volume, skull, eyes, ears (Soft Taper), and crown across rotations.
**Why:** resolves G2, G3, G7 for the head and becomes the base for R2/R4. The head is the most-rendered asset (48–64 px header/Home) and the most historically inconsistent, so it earns the first slot.
**Partially satisfied by:** the 10-31 three-quarter head and the 10-30 studies supply a near-final three-quarter *only*; front and profile do not exist. No promotion yet.
```text
Create a Gypsa head turnaround on one clean sheet: three large panels — FRONT, THREE-QUARTER (left-facing canonical), and TRUE PROFILE (left) — of the SAME head. Keep identical across all three: broad rounded muzzle projecting forward with full cheeks and soft chin; large almond "Quiet Observer" eyes with defined upper lid, three upper lashes per eye (no lower), solid flat #533923 iris, black #000000 pupil, white catchlight; slim gently-arched warm-brown (#B97A3D) tufted eyebrows with a #1E1E1E inward outline; Soft Taper ears — broad-based, soft rounded tips, gentle inward curl, low side roots — inner surface #B97A3D, outer/back gray #595652; one broad softly-layered gray crown sweep originating behind the anatomical-left ear with rounded humps (no spikes) and a restrained front curl above the eyes; continuous visible gray strip beneath both eyes. Flat fills, clean #1E1E1E outlines, flat #2B2B2B nose, transparent background. Palette: coat #595652, warm fur #B97A3D, outline #1E1E1E, nose #2B2B2B, iris #533923, pupil #000000, white #FFFFFF. No gradients, gloss, rim light, or #E7B37A.
```

### R2 — Color / callout sheet (supports G8, settles palette at a glance)
**Shows:** the approved three-quarter head beside a labeled swatch strip with every canon hex and a callout of each marking boundary (gray eye-surround, warm muzzle/brow/inner-ear, below-eye clearance), plus the flat/no-gradient rule stated on-sheet.
**Why:** a single authoritative palette plate kills the recurring #E7B37A / banded-iris / brighter-orange drift. It replaces the stale v1.0 sheet's palette block.
**Partially satisfied by:** the v1.0 Character Sheet has a palette block, but it prints the **wrong inner-ear token** and old pupil/eye values, so it must not be promoted as-is.
```text
Create a Gypsa color callout sheet: the approved three-quarter head on the left; on the right a vertical swatch list with flat color chips and labels — Coat/outer ear/neck #595652; Muzzle, belly, eyebrows, INNER EAR #B97A3D; Outline #1E1E1E; Nose #2B2B2B; Iris #533923 (flat, no bands); Pupil #000000; Sclera/catchlight #FFFFFF; Claws #FFFFFF; Backpack leather & stick wood #6B4A2E; Backpack canvas #A8743A; Oak green #4F7A3A; Acorn cutter #B8B8B8. Add callouts pointing to: gray eye-surround, continuous gray strip below each eye, warm muzzle/cheek region, warm inner ear, warm brow. Note on sheet: flat fills only, no gradients/gloss, no #E7B37A. Neutral backing allowed for annotations; it is not part of the character.
```

### R3 — Body turnaround + paw/foot insets (registry I3, supports G1, G4, G7)
**Shows:** front, three-quarter, profile, and back of the full body **without** pack/stick obscuring anatomy, using the approved head; plus insets — open hand, relaxed-curl grip, foot profile, toe arrangement (three fingers + opposed thumb; three toes).
**Why:** supplies the missing neck width/depth, final paw/foot outlines, and body proportion anchor keyed to structural H.
**Partially satisfied by:** `canonical-body-dummy-v2.0-profile.svg` is a line construction only (not volume/soft-tissue) per D3; old full-body renders are not validated.
```text
Create a Gypsa body turnaround on one sheet: FRONT, THREE-QUARTER, PROFILE, and BACK of the full upright figure WITHOUT backpack or walking stick, using the approved head. Soft compact young-adult squirrel build: pear torso, substantial rounded neck with broad continuous shoulder transition (no pinched neck), narrow shoulders, rounded haunches, folded squirrel hind legs (backward-Z), elongated plantigrade feet flat on the ground. Keep segment proportions in head-heights H consistent across views. Add four small insets: open hand, relaxed grip, foot profile, toe arrangement — three fingers plus one opposed thumb, three toes per foot. Flat fills, #1E1E1E outlines, canon palette, transparent background, no gradients. Annotate the neck width/depth level used.
```

### R4 — Expression sheet (registry I6, supports G11)
**Shows:** the eight canon expressions (Neutral, Inquisitive, Concentrating, Puzzled, Amused, Delighted, Concerned, Determined) on the approved head, anatomy constant.
**Why:** turns D2's behavioral table into a validated visual target so expression renders stop redesigning muzzle/ears.
**Partially satisfied by:** the v1.0 sheet shows six differently-named expressions on the **old** head — not usable.
```text
Create a Gypsa expression sheet: eight panels of the APPROVED head — Neutral/Calm, Inquisitive, Concentrating, Puzzled, Amused, Delighted, Concerned, Determined — with IDENTICAL underlying anatomy (same muzzle volume, Soft Taper ears, eyes, crown). Vary only brows, lids/gaze, mouth, and head tilt/ear attention per the canon behavior notes; do not shorten the muzzle, enlarge/round the eyes, or redesign the ears. Flat fills, #1E1E1E outlines, canon palette, transparent background.
```

### R5 — Equipment + scale/prop sheet (registry I7 + I4 scale, supports G6)
**Shows:** backpack front/side/open with acorn-cap flap (cap-only diamond lattice), oak-leaf patch with stitches, functional hollow acorn cookie-cutter charm on the hanging loop; bandana front square knot + rear triangle; walking stick silhouette with grip bend and asymmetric Y-fork; **all sized against the body in H** (pack 1.60H tall, stick fork split 3.45H, etc.), and the stowed stick on the wearer's right.
**Why:** locks equipment detail + the prop-to-body scale relationships in one plate; D4 has the numbers but no validated visual.
**Partially satisfied by:** the v1.0 sheet has a backpack detail row, but it is tied to the old body/head and its charm/flap detail isn't validated against D4's current wording.
```text
Create a Gypsa equipment + scale sheet. Row 1: backpack FRONT (oak-leaf patch face), SIDE, and OPEN (drawstring) — structured canvas #A8743A body, acorn-shaped leather #6B4A2E flap with diamond-lattice quilting on the CAP ONLY and a smooth unquilted nut, oak-leaf #4F7A3A patch with visible stitching at ~1/3 body-front height, and a functional HOLLOW metal #B8B8B8 acorn cookie-cutter (visible band depth, open center) tied by a short cord to the centered hanging loop; two leather shoulder straps on the back face. Row 2: bandana — front square knot at the throat with two ends over the upper chest and the triangle point draping over the back (solid oak green #4F7A3A); walking stick — found oak branch, single grip bend, asymmetric Y-fork (short arm ~60% of long arm), not a straight dowel. Row 3: scale strip showing the pack and stick measured against the upright figure in head-heights H (pack 1.60H tall; stick base 0.00H, grip-bend 2.56H, fork split 3.45H, long tip 3.95H), and the stick STOWED along the wearer's RIGHT side by two leather straps. Flat fills, #1E1E1E outlines, canon palette, transparent background, no gradients.
```

> **Deferred intentionally:** tail construction sheet (I5) and Squirrel Mode (I8). The tail still has open integration/width questions (G5), so a tail plate should follow once R1/R3 give a validated body to attach it to; Squirrel Mode is already deferred in D1/D3. Keeping the first promotion set to R1–R5 matches *Proposed Final References* → "Seven crowded, unreadable sheets would be worse than additional clear files."

---

## 4. Verdict

For a **head/bust render** (the main website need at 48–64 px): the five docs plus a promoted **R1 + R2** would be sufficient and consistent. For a **full equipped figure**: the docs are **not yet sufficient** on their own — close the deferred numbers (G1 neck, G4 paws, G5 tail, G9 outline) and promote **R1, R3, R5** so there is a validated visual anchor, because prose alone has repeatedly produced inconsistent renders. The documents are well-organized and mostly non-contradictory; the gaps are deferred decisions and the complete absence of any **approved image**, not conflicting rules — with the single genuinely-open rule being the outline-calibration denominator (G9/C5).
