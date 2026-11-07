# Gypsa Closed Silhouette — Junction Treatment Spec (Upright, Stage 3)

**Status:** All six junctions walked through and revised with the user against the standing and stretched-upright squirrel references (2026-09-11). Junctions approved. No code written yet — ready to build `closed_silhouette.py`.
**Date:** 2026-09-04 (junctions revised & approved 2026-09-11)
**Scope:** Turn the First Merge (blur/threshold union of support volumes) into ONE deliberate authored closed contour for the UPRIGHT pose.

---

## 0. Governing principles (what this stage is and isn't)

**What Stage 3 must deliver:** a single continuous closed Bézier boundary that (a) reads as one continuous animal, (b) guarantees Gypsa's max silhouette dimensions, and (c) serves as the clipping mask for the Stage 4 clipped render.

**Fidelity bar:** silhouette level only. Smooth intentional junctions and a canonical tail edge. NO surface detail, interior lines, fur strands, or rendered-fur texture. The Production Workflow's polished sample silhouette is *concept only* (Canon Summary marks it "not canon"); its finish level is not the target here. "Foundation before finish."

**Frozen — do NOT change (per the ChatGPT First Merge diagnostic):**
- Back 1.70H, upper arm 0.62H, forearm 0.72H, palm 0.22H, longest finger 0.24H
- Hind-leg structural lengths, head size, canonical tail length/centerline
- All rig joint positions and all support-volume sizes/placements
- Muzzle stays **provisional** — the silhouette must not redesign it; it awaits a separate canonical-muzzle measurement pass. Ears likewise discounted (schematic, not the canonical Soft Taper ears).

**Authorized exception to the freeze (reference-driven, recorded here for a clean record):**
- **Haunch support volume** (Junction 3): enlarge slightly and reshape from oval to teardrop (wide at hip/rump, tapering to the knee), per the stretched upright squirrel reference. Rig joint positions stay frozen; only the haunch envelope changes. This is the sole support-volume change this pass authorizes.

**Method:** keep the frozen rig + support volumes as the underlay; author the outer boundary as one path that traces the volume masses through smooth junctions, and derives the tail edge from `fur_radius(u)` rather than the scalloped union. Output a new script (`closed_silhouette.py`) producing the single-path silhouette side-by-side against the First Merge for validation. Every junction below is expressed relative to existing rig landmarks and frozen volume parameters so it is reproducible, not eyeballed.

**Rig landmarks referenced** (from `gypsa_reference_svg.compute_joints`): `Hc` head center, `Nc` neck base, `Sc` shoulder anchor, `Pc` pelvic anchor, `Tr` tail root, `S/E/W` shoulder/elbow/wrist, `Kb/Tf` palm-front/fingertip, `H/K/Hk/T/Th` hip/knee/hock/ball/toe. Back side = +X, face side = −X.

---

## Junction 1 — Head → Body Column (the "no visible neck" treatment)

**Problem (diagnostic, "biggest issue"):** merged contour shows a narrow near-cylindrical neck then a sudden outward flare into the torso. Reads as head on a stalk — too human, not squirrel-like.

**Root cause:** neck capsule does its structural job, but the silhouette traces it literally, producing a visible waist between head and body. Real standing grey squirrels show no such waist: the back of the skull flows directly into the back, and the jaw/cheek sits directly on the chest mass.

**Reference:** `standing grey squirrel reference.jpg` — upright alert pose on a fence post. Key observation: the head-to-body transition is one continuous column with no readable neck on either side. The back line is an unbroken convex curve from skull to rump. The front line drops from chin to chest with no pinch.

**Treatment:** keep the canonical rig and structural neck capsule frozen underneath. The outer contour simply skips the neck as a discrete feature. The head's lower contour merges directly into the shoulder/chest mass with no waist on either side.

Three rules:

1. **Back side (+X) — strictly monotonic:** one continuous convex curve from the back of the skull straight into the upper back. No nape dip, no flat neck segment. The curve's radius never tightens between skull and back — it only ever opens outward. The boundary may ride over the existing dorsal-bridge nape oval and shoulder volumes, but it must never dip inward between them.

2. **Front side (−X) — chest directly under the jaw:** from the lower jaw/cheek, the contour drops and immediately swells forward into the chest mass, so the chest sits directly under the jaw. A very shallow concave scoop at the throat (just under the chin) is permitted to preserve a whisper of chin/throat definition, but this scoop must be slight — the narrowest point of the throat must remain **no narrower than the widest point of the lower head** at the same height. The contour then swells forward into the shoulder/chest bridge volume and onward into the torso.

3. **No-waist guarantee (the governing constraint):** at every height between the base of the skull and the top of the torso, the silhouette's total width (back edge to front edge) must be **monotonically non-decreasing going downward** — it can hold steady or widen, but it can never pinch inward. The very shallow front-side throat scoop is the sole permitted exception and is bounded by Rule 2 above. This single constraint replaces the earlier "~0.20H minimum half-width" number and is reproducible from rig landmarks without eyeballing.

**Accept when:** you cannot point to a discrete neck; the eye reads one continuous head-to-body column (as in the standing grey squirrel reference). The back line is an unbroken convex curve. The front has at most a subtle chin-to-throat scoop before the chest arrives.

---

## Junction 2 — Torso → Haunch (flow, keep the pear)

**Problem (diagnostic):** torso itself is a strong positive — 1.70H Candidate B length, good taper, pear quality (narrower shoulder, broadening to pelvis). But the transition into the hindquarter should be organic rather than two stacked masses.

**Reference:** `standing grey squirrel reference.jpg`. Two observations drive this junction: (a) the back line from shoulder to rump is a long, calm, nearly-straight gently-convex curve, while the belly is the big rounded mass that bulges forward; and (b) there is a soft belly-to-thigh tuck — a mild concavity where the rounded belly meets the front of the thigh — before the contour continues into the haunch.

**Treatment:** preserve gross width/length; only make the contour organic where torso meets haunch, leaning into the natural back/belly asymmetry the reference shows.
- Back side (+X) — calm and long: a single gently-convex sweep from the shoulder/upper-back through the torso's widest lower-back into the haunch oval's upper-rear. Nearly straight, low curvature — the calm side. One curve, no shelf where the two ovals overlap.
- Belly side (−X) — round, then tuck: the chest indication from Junction 1 flows into a pronounced rounded belly curve (more convex than the back — this is the visually active side), which then draws back into a soft belly-to-thigh tuck: a shallow concavity where the belly meets the front of the thigh, before the contour resumes into the front of the haunch. The tuck must be gentle (a soft indentation, not a sharp notch) — analogous to the shallow throat scoop in Junction 1.
- Keep the pear silhouette: shoulder region narrower, body broadening toward the pelvis, with the asymmetry (calm back, round belly) making it read as an animal rather than a symmetric ellipse.

**Accept when:** the back reads as one long calm curve and the belly as a rounder mass; a soft belly-to-thigh tuck is present but never sharp; no visible seam at the oval overlap; pear preserved.

---

## Junction 3 — Haunch → Lower Leg (teardrop haunch, thin lower leg)

**Problem (diagnostic):** literal union preserves every support-volume bulge — contour artifacts around rump/upper-thigh and through the knee (K) to hock (Hk) transition. Should be continuous curves, not preserved bulges.

**Reference:** `stretched upright squirrel reference.jpeg` (tall reach pose, closest to Gypsa's upright stance). In this pose the hind limb reads as **big teardrop haunch → thin tapered lower leg → long flat foot**, NOT as an even "drumstick." The haunch is a dominant mass, wide at the hip/rump and tapering down toward the knee (teardrop / inverted pear), carrying nearly all the limb's visual weight. The lower leg (K→Hk) is long and comparatively thin, with only a subtle knee transition — it does not form its own separate calf mass. Because Gypsa stands upright (not a typical real-world squirrel behavior), this stretched pose is the better anatomical guide than the crouched standing reference.

**Volume change authorized (deliberate, reference-driven exception to the section-0 freeze):** enlarge the haunch support volume slightly and reshape it from an oval to a **teardrop** — wide at the hip/rump, tapering toward the knee. This is the one support-volume change this pass authorizes; it is recorded in section 0. The lower-leg (calf) volume stays thin and may be de-emphasized so it does not read as a second mass. Rig joint positions (H, K, Hk, T, Th) remain frozen — only the haunch envelope changes.

**Treatment:** the outer boundary spans the enlarged teardrop haunch (over H→K) and the thin lower leg (over K→Hk) as one continuous limb, smoothing OVER the knee rather than tracing into each ellipse.
- Rear of leg: single convex curve from the broad haunch-back tapering into the thin calf-back; the knee is absorbed, no bulge.
- Front of leg: gentler curve following the front of the teardrop haunch then the thin lower leg, with the natural slight concavity at the front of the knee fold allowed (anatomy, not an artifact) but shallow.
- The haunch should visibly dominate; the lower leg should read as a slim tapered column beneath it, matching the stretched reference.
- Foot: leave blocky/provisional. Final foot shape is explicitly unfinished; do not solve it here. Contour meets the existing foot wedge (Hk→T→Th) but does not redesign it. **Target for the future foot pass: a planted, elongated, plantigrade foot** — whole sole (heel to toe) flat on the ground, long relative to the lower leg, toes spreading forward — per both squirrel references.

**Accept when:** the haunch reads as a dominant teardrop mass; the lower leg reads as a slim tapered column; no scalloping at K; the limb is one continuous flow; foot untouched (deferred to the plantigrade foot pass).

---

## Junction 4 — Rump → Tail Root (no waist / no notch)

**Problem (diagnostic, "watch carefully"):** a slight waist/notch still perceptible between rump and lower tail mass. Canon requires the tail emerge continuously from the terminal spine, not look attached to the rump.

**Key correction — the top and bottom of the tail root are NOT the same:** the dorsal (top) edge and the ventral (bottom) edge behave differently and must be governed by different rules.
- **Top edge (dorsal, in line with the back):** the back and the top of the tail form ONE continuous smooth line. The tail reads as a direct continuation of the back — no notch, no seam. This is the "hard to say where body stops and tail begins" case.
- **Bottom edge (ventral):** this is NOT one smooth line — it is two distinct edges meeting. What you see below the tail is the **rear edge of the haunch**, and the tail continues *past/beyond* the body. The fur directions oppose each other here: the tail's underside fur leans toward the tail tip, while the haunch fur leans toward the rear of the haunch. That opposition makes the junction legitimately visible. The haunch rear edge is preserved as its own edge; it is NOT dissolved into the tail.

**Treatment:** two different rules for the two edges. The support system already rigidly shifts the whole tail back by `TAIL_ATTACH_DX = 0.30H` so the root fur circle overlaps the torso oval.

- **Top edge (dorsal, +X back line) — one continuous smooth line:** the boundary flows from the back/rump directly into the tail-root fur radius with NO concave pinch. Where the rump curve and the root fur circle (`FUR_ROOT ≈ 0.072H` growing to `FUR_MAX ≈ 0.289H`) meet, blend with a curve whose radius never dips below the rump's local radius — the merge point is convex or flat, never concave. Goal in canon terms: **hard to say where body stops and tail begins** along the back.

- **Bottom edge (ventral) — two edges meeting, junction preserved:** do NOT force a smooth continuous line here. Trace the **rear edge of the haunch** as its own edge down to where the haunch mass ends, then let the tail's underside continue *beyond and behind* the body from that point. A visible junction (corner/crease) where the two edges meet is correct and intended — it reflects the opposing fur directions (haunch fur toward the rear of the haunch, tail underside fur toward the tail tip). Do not blend these into one arc.

**Accept when:** the top/back edge is one continuous smooth line from mid-back through the rump into the tail with no notch (body-to-tail ambiguous by design); the bottom shows the haunch rear edge as its own edge with the tail underside continuing beyond it, and the fur-direction junction between them is preserved rather than smoothed away.

---

## Junction 5 — Tail Edge (derive from canonical fur rules, NOT the scallops)

**Problem (diagnostic):** literal union of overlapping support ellipses produces a scalloped outer contour. That is not the Soft Stylized B fur envelope. Canonical tail authority is the dedicated fur-envelope construction. Do not smooth scallops by eye and accidentally invent a new tail.

**New refinement — the tail is NOT symmetric in profile.** The current envelope offsets the centerline by a single `±fur_radius(u)` (a symmetric tube). From the side a real squirrel tail is asymmetric in two ways, and both should show in the silhouette edge:

- **(A) Curvature-dependent (pose):** the **inside of a bend is smoother**, the **outside of a bend is more bristled**. This is consistent with Canonical Tail Spec §6 ("interior/concave portions may show somewhat stronger directional separation"). It should be keyed automatically to the **sign of the centerline curvature** so it stays reproducible and updates correctly when tail expressions bend the centerline differently — not hand-painted per drawing.
- **(B) Intrinsic top/bottom (fur lean):** even in a fully stretched-out tail (per `stretched upright squirrel reference.jpeg`), the **top edge is smoother and nearly flat** while the **bottom/belly edge is more bristled**, like the back of the haunch. This comes from individual fur strands leaning toward the tail tip, which throws the fur mass slightly toward the belly side and makes the base envelope itself asymmetric. Starting intent: a gentle bias — the belly rail runs modestly larger and more textured than the dorsal rail (tunable parameter, begin ~10–20%), not a dramatic difference.

Effects (A) and (B) compound: where the belly side is also the outside of a bend, it is the most bristled; where the dorsal side is the inside of a bend, it is the smoothest.

**Canon note (flagged, not silently diverged):** the Canonical Tail Design Specification currently treats the Soft Stylized B envelope as symmetric/locked (§6, §12). Effect (B) — intrinsic top/bottom asymmetry of the *silhouette shape* — is a deliberate, reference-driven refinement of that. Once this junction is approved and rendered, add a companion note to the Canonical Tail Spec so the two documents agree. Effect (A) is already anticipated by §6 and needs no divergence.

**Treatment:** build the closed tail contour analytically from the envelope machinery in `support_volumes.py`, retaining the structural centerline/support beneath, but split the single symmetric radius into two per-side rails:
- Ride the centerline via `point_at_arc(u)` for `u` in `[0, 1+EXT_FRAC]` (includes the fur-tip straight extension, `EXT_FRAC = 0.10`).
- At each `u`, offset the centerline by a **dorsal radius** on the top/back side and a **belly radius** on the bottom side, each derived from the base `fur_radius(u)` scaled by: (i) a top/bottom bias factor per effect (B), and (ii) a curvature term per effect (A) that increases the outside-of-bend radius / roughness and decreases the inside-of-bend one, driven by the sign of the local centerline curvature.
- Respect the existing base profile regions exactly: root transition `u 0.00–0.10` (FUR_ROOT→FUR_MAX), mature constant `u 0.10–0.875` (FUR_MAX), single uninterrupted visible taper `u 0.875–(1+EXT_FRAC)` (FUR_MAX→0). The asymmetry modulates these radii; it does not change the region boundaries or the structural centerline/length.
- The dorsal rail is the smoother of the two (fewer/softer undulations); the belly rail carries the controlled bristled texture (still Soft Stylized B — organized directional groups, not scraggly individual hairs, per §6).
- The dorsal rail is the same edge that Junction 4's top rule feeds into (back → tail top, one continuous smooth line). The belly rail is the edge that continues *beyond* the haunch rear edge per Junction 4's bottom rule.
- Cap the tip smoothly where both radii `→ 0`. The result is a smooth, asymmetric two-rail closed edge, NOT sampled ovals and NOT a symmetric tube.

**Accept when:** tail edge is a smooth continuous asymmetric two-rail curve derived from the fur-envelope radius profile; no scallops; centerline gesture/length unchanged; the dorsal rail reads smoother/flatter and the belly rail reads more bristled (effect B); the outside of any bend is more bristled than the inside (effect A); the asymmetry stays within Soft Stylized B (organized directional groups, never scraggly individual hairs or a symmetric tube).

---

## Junction 6 — Neutral Finger Clustering (quiet the hand)

**Problem (diagnostic):** palm size (Candidate C 0.22H) is good, but merged silhouette confirms fingers are too splayed for neutral — reads like a cartoon glove/starburst. Issue is angular spread + equal prominence + separation all the way to the palm, NOT finger length (longest digit is reasonable vs 0.72H forearm).

**Design intent — Gypsa's hands are human-like, not squirrel-like.** She holds a walking stick and gestures (e.g. pointing at something interesting), so the hand must function as a hand, not a squirrel forepaw. We do NOT adopt the tucked/curled clump read of a real squirrel's forepaws. The neutral hand is a relaxed *human-style* hand.

**The neutral pose is a relaxed curl** — more curled than the splayed support volumes and First Merge suggest, but a soft relaxed curl, not a fist and not a starburst. Because Gypsa has **three fingers rather than four**, even in a relaxed curl there is still a bit of visible separation between the digits — individual fingers remain readable rather than merging into a single mitten mass.

**Treatment:** for the silhouette (posing structure underneath stays intact):
- Pose the three principal fingers in a **relaxed curl** for neutral: reduce the angular `step` (they are no longer splayed) and curl them inward, but keep enough spacing that the three digits still read as distinct — a small amount of visible separation persists even when curled, precisely because there are only three.
- The result is a soft, readable hand, NOT a splayed starburst and NOT a single mitten blob.
- Thumb remains the obvious divergent digit — human-like opposed placement so it can oppose the fingers to grip (broader + shorter), sitting apart from the three fingers.
- The hand must remain plausibly **gripping-capable and gesture-capable**: the neutral silhouette should look like a relaxed hand that could close around the walking stick or extend to point, not a paw.
- Net effect: a quiet but human-readable hand at full-character scale; individual digit structures retained beneath for future posing (grip, point, wave).

**Accept when:** the neutral hand reads as a relaxed human-style hand with three still-distinct curled fingers and a distinct opposed thumb; not a splayed starburst, not a fist, not a squirrel forepaw clump; palm center still evident; the hand plausibly reads as able to grip the staff and to gesture.

---

## Deferred (explicitly NOT in this pass)
- **Muzzle:** stays provisional; awaits canonical-muzzle measurement. Silhouette must not let the long blunt provisional projection drive a redesign.
- **Ears:** schematic bumps discounted; canonical Soft Taper ears handled separately.
- **Foot:** final foot shape unfinished; not solved here.

---

## Deliverable (spec approved — ready to build)
`tools/closed_silhouette.py` → `output/gypsa_closed_silhouette_upright.svg`:
1. Frozen rig + support volumes as faint underlay (validation only).
2. ONE authored closed path applying Junctions 1–6, filled canonical fur `#595652` with canonical outline `#1E1E1E`.
3. Side-by-side against the preserved First Merge so each junction can be checked against its accept criterion.
4. Preserve as a versioned artifact once approved.

**Approval status (2026-09-11):** All six junction treatments and the "silhouette-fidelity, no surface detail" bar walked through and revised against the standing and stretched-upright squirrel references, and approved by the user. Summary of revisions from the original draft:
1. **Head → Body Column** — reframed from "short neck indication" to no-visible-neck: strictly monotonic back edge, chest under the jaw, a single very shallow throat scoop allowed, governed by a no-waist (monotonically-non-decreasing width) constraint.
2. **Torso → Haunch** — added back/belly asymmetry (calm long back, rounder belly) and a permitted soft belly-to-thigh tuck.
3. **Haunch → Lower Leg** — haunch enlarged and reshaped oval→teardrop (authorized volume exception, recorded in §0), thin tapered lower leg, plantigrade planted foot set as the future foot-pass target.
4. **Rump → Tail Root** — split into two edges: continuous smooth top (back→tail-top), and a preserved haunch-rear-edge junction on the bottom reflecting opposing fur directions.
5. **Tail Edge** — symmetric tube replaced by an asymmetric two-rail envelope: curvature-dependent (inside smooth / outside bristled) plus intrinsic top/bottom fur-lean bias (~10–20% belly bias); flagged that the Canonical Tail Spec needs a companion note for effect (B).
6. **Neutral Finger Clustering** — human-like relaxed curl (grip/gesture-capable), three fingers kept, still slightly separated even when curled; no mitten blob, no fist, no squirrel forepaw clump.

**Open follow-ups (do not block building the upright silhouette):**
- ✓ Saved the stretched-upright reference image into the folder as `stretched upright squirrel reference.jpeg` (referenced by Junctions 3 and 5).
- After Junction 5 is rendered and approved, add the companion asymmetry note to `Approved Reference/Gypsa Canonical Tail Design Specification.md`.
