# Gypsa R1 — Head Turnaround Render Prompts (ChatGPT)

**Goal:** produce an approved front view and an approved left profile view of Gypsa's head, each matching the anatomy of `Gypsa Provisional Head Reference.png` (the canonical three-quarter anchor), so that the three views together form the R1 head turnaround.

**Canon basis:** the five Approved Reference documents; specifically *Head and Expression* v0.10 for view-specific ear/crown rules and *Rendering Standard* v0.9 for palette and finish.

---

## Overview and process

R1 is built in **two independent phases.** Each view is generated fresh from the three-quarter anchor; you cannot rotate a 3/4 image into a front or profile. Both must be validated individually before being assembled into a turnaround sheet.

**Phase order:**
1. Generate and approve the **front view**.
2. Generate and approve the **left profile view**.
3. Assemble the **R1 turnaround sheet** (all three panels on one image).

Each phase has its own prompt, verify checklist, and fallback notes below.

**Attach to every ChatGPT turn:**
- `Gypsa Provisional Head Reference.png` — the visual anchor. Tell ChatGPT this is the **character reference to match**. Label it clearly.
- `EasternGraySquirrel_GAm.jpg` — **squirrel shape reference only**, for ear and muzzle proportions. Not for color, texture, or style.

---

## Canon palette (flat sRGB) — carry through every step

| Token | Hex | Used for |
| --- | --- | --- |
| Coat gray | `#595652` | Crown, skull, outer/back of ears, neck |
| Warm brown | `#B97A3D` | Muzzle, belly, eyebrows, inner ear |
| Outline | `#1E1E1E` | All outlines |
| Nose | `#2B2B2B` | Flat dark nose, no highlight |
| Iris | `#533923` | Flat, uniform, no bands/gradient |
| Pupil | `#000000` | Solid black |
| White | `#FFFFFF` | Sclera, catchlight |
| **NEVER USE** | `#E7B37A` | (retired pale inner-ear tan) |

Flat fills only — no gradients, airbrushing, gloss, or rim light throughout.

---

## Phase 1 — Front view

### What the front view must show (canon rules)

- **Bilateral symmetry** of skull and muzzle. The muzzle presents its full forward projection; both cheeks visible, roughly equal. Full lower jaw and soft chin.
- **Both ears** showing chiefly their **front edges** — in true neutral, ears face sideways and only the front contour is visible from the front (*Head and Expression* → "True neutral: ears face either side of the head. A direct frontal view shows chiefly their front edges."). Ear roots sit low on the sides of the skull; tips rise only modestly above.
- **Crown:** the sweep **originates behind Gypsa's anatomical LEFT ear** (viewer's right). In the front view the crown is seen from the front — the curl end will be visible above the forehead/brows on the viewer's left side, and the origin side (viewer's right) shows the fuller root of the sweep. Do not mirror the crown or relocate its origin. Both eyebrows must be fully visible beneath the curl.
- **Both eyes** fully visible, large almond "Quiet Observer" shape, three upper lashes per eye (foreshortened naturally in front view but both sets present), flat `#533923` iris, solid black pupil, white catchlight.
- **Eyebrows:** slim, gently arched, warm brown `#B97A3D`, tufted, inward `#1E1E1E` outline at ~75% head-outline weight.
- **Below-eye gray clearance:** a continuous visible gray strip beneath both lower lids. The warm muzzle marking must not touch either eye outline.
- **Nose:** centered, compact flat dark `#2B2B2B` triangle. No gloss.
- **No peripheral fringe or sawtooth** along the skull/cheek edges — gentle, purposeful fur tufts only.

### Front view prompt

```text
I am attaching TWO images:
(1) CHARACTER REFERENCE — a stylized flat-cartoon Eastern Gray Squirrel head in three-quarter left-facing view. This is Gypsa. Match her anatomy exactly: same skull shape and volume, same muzzle (broad, rounded, forward-projecting), same eye size and almond shape, same ear size and Soft Taper form (broad-based, rounded top, gentle inward curl, low roots), same crown fur mass and sweep.
(2) SQUIRREL SHAPE REFERENCE — a real Eastern Gray Squirrel photo. Use ONLY for ear and muzzle proportion guidance; do NOT copy its colors, texture, realism, or style.

Draw a NEW image: the same character (Gypsa) in a FRONT VIEW — facing directly toward the viewer, head level, neutral/calm expression.

ANATOMY to preserve from the character reference:
- SKULL: same rounded cranium, same overall head size and volume. Bilateral symmetry in front view — both sides match.
- MUZZLE: broad, rounded, forward-projecting — seen from the front it reads as a wide rounded snout, full and compact, not long or pointed. Both cheeks visible. Full lower jaw and soft chin. Keep the same muzzle depth as the reference.
- EARS (Soft Taper): both ears show chiefly their FRONT EDGES from this angle — in neutral stance, ears face sideways so from the front you see a narrow front-edge silhouette, not the full inner surface. Both ears: broad-based at the skull, rounded at the top, LOW roots on the sides of the skull (not on top), tips rising only modestly above the skull. Same ear size as the reference.
- CROWN FUR: the sweep originates behind Gypsa's anatomical LEFT ear (viewer's RIGHT). The curl end appears above the forehead on the viewer's LEFT. The origin side (viewer's right) shows the fuller, denser root of the sweep. Both eyebrows must be fully visible beneath the curl. Do NOT mirror the crown. Same volume and rounded-hump silhouette as the reference; no spikes or sawtooth.
- EYES: both large, almond-shaped "Quiet Observer" eyes, fully visible from the front, gentle forward gaze. Flat iris #533923 (uniform, no bands/gradient), solid black #000000 pupil ~75% iris span, white #FFFFFF catchlight. Three upper lashes per eye (foreshortened naturally at this angle but both sets visible), no lower lashes.
- EYEBROWS: slim, gently arched warm-brown #B97A3D filled bands with soft tufted edges and a dark #1E1E1E inward outline. Both visible, separated from the upper lids by a strip of gray fur.
- BELOW-EYE GRAY: a continuous visible GRAY #595652 strip beneath BOTH lower lids. The warm muzzle marking (#B97A3D) must NOT touch either eye outline; the gray gap must be visible including at the corners.
- NOSE: centered compact flat dark #2B2B2B triangle. No gloss, no highlight.

FINISH: flat fills, clean #1E1E1E outlines, transparent background. No gradients, airbrushing, gloss, or rim light. Gentle purposeful fur tufts at edges — no sawtooth fringe. Keep the same linework weight and cartoon illustration style as the character reference.

PALETTE (flat sRGB): coat/skull/outer ears #595652; muzzle/eyebrows/inner ear #B97A3D; outline #1E1E1E; nose #2B2B2B; iris #533923; pupil #000000; white #FFFFFF. Do NOT use #E7B37A.

The result must clearly show the SAME CHARACTER as the reference, now facing the viewer directly. It must read unmistakably as an Eastern Gray Squirrel.
```

### Front view — verify checklist

Accept only if **all** pass:

- [ ] **Species and character read:** immediately reads as the same stylized Eastern Gray Squirrel as the reference; bilateral symmetry.
- [ ] **Skull/muzzle:** same rounded cranium, full forward-projecting muzzle, both cheeks, full jaw and chin.
- [ ] **Ears:** front-edge silhouette only (narrow profile from front), broad-based, rounded top, LOW side roots, tips only modestly above skull; same size as reference.
- [ ] **Crown:** origin-side (viewer's right) fuller/denser; curl end above forehead on viewer's left; both brows fully visible; rounded humps, no spikes.
- [ ] **Eyes:** both fully visible, almond shape, flat `#533923` iris, black pupil, white catchlight, three upper lashes per eye, no lower lashes.
- [ ] **Below-eye gray:** continuous visible strip under both lower lids; warm marking does not touch either eye outline.
- [ ] **Nose:** flat `#2B2B2B`, centered, no gloss.
- [ ] **Finish:** flat fills, no gradients/gloss/rim light, transparent background, dark outlines.

---

## Phase 2 — Left profile view

### What the profile view must show (canon rules)

- **True left profile:** Gypsa faces viewer's left. Only the LEFT (near/anatomical) side of the head is visible.
- **Muzzle:** full projection visible in profile — the front of the muzzle, the nose, and the lower jaw/chin all project forward from the skull as a distinct rounded volume. Do not shorten or flatten the muzzle into the face. Preserve the forward projection from the three-quarter reference.
- **Near (left) ear:** the LEFT ear in profile. Front attachment is near/just above the eye line; rear attachment is lower and farther back. Inner surface may be partially visible from this angle — this is not an error (*Head and Expression* → "Profile or three-quarter view does not automatically require hiding the interior."). Soft Taper form: broad-based, rounded top, gentle inward curl.
- **Crown:** same sweep, seen from the left side. The origin is directly visible — it sits just behind this ear. The fur sweeps across the crown and the curl end hangs down toward the forehead. Rounded humps; no spikes. Both the origin and the curl end should be identifiable.
- **Near (left) eye:** fully visible, almond shape, flat iris, black pupil, catchlight, three upper lashes. Far (right) eye is hidden behind the skull — do NOT show the far eye; it is occluded in a true profile.
- **Near (left) eyebrow:** visible above and slightly behind the near eye. Far eyebrow is hidden.
- **Ear — far side:** the far (right) ear is either hidden behind the skull or just its front edge barely visible at the skull rim. Do NOT show the full far ear interior; it is behind the head.
- **Below-eye gray clearance:** continuous visible gray strip beneath the near eye's lower lid. Warm marking must not touch the eye outline.
- **Rounded cranial volume** continues behind and beneath the ear. Substantial rear-skull and neck volume — do not flatten the back of the head.

### Left profile prompt

```text
I am attaching TWO images:
(1) CHARACTER REFERENCE — a stylized flat-cartoon Eastern Gray Squirrel head in three-quarter left-facing view. This is Gypsa. Match her anatomy exactly: same skull shape and volume, same muzzle (broad, rounded, forward-projecting), same eye size and almond shape, same ear size and Soft Taper form (broad-based, rounded top, gentle inward curl, low roots), same crown fur mass and sweep.
(2) SQUIRREL SHAPE REFERENCE — a real Eastern Gray Squirrel photo. Use ONLY for ear and muzzle proportion guidance; do NOT copy its colors, texture, realism, or style.

Draw a NEW image: the same character (Gypsa) in a TRUE LEFT PROFILE VIEW — facing viewer's left, head level, neutral/calm expression. Only the left side of the head is visible.

ANATOMY to match from the character reference:
- SKULL: same rounded cranium, same overall head volume. Substantial rounded volume both behind the ear and continuing to the rear of the skull. Full neck volume below.
- MUZZLE: the muzzle projects FORWARD clearly in profile — the nose and lower jaw extend in front of the skull as a distinct rounded volume. Preserve the same muzzle depth and forward projection as the reference. Do NOT shorten or flatten the muzzle into the face. Full lower jaw and soft chin beneath the mouth.
- EAR (left/near ear, now facing viewer): the ear's front attachment is near or just above the eye line; its rear attachment is lower and farther back on the skull. The ear is broad-based, rounded at the top, with a gentle inward curl — the Soft Taper form. Its inner surface may be partially visible from this angle (this is not an error). Low roots. Tip rises only modestly above the skull. Match the same ear size as the reference.
- FAR EAR (right/hidden): the far ear is behind the skull; show none of it, or at most a tiny front-edge sliver at the skull rim. Do NOT show the far ear's full form or inner surface.
- CROWN FUR: the sweep ORIGINATES just behind the LEFT ear, which is now fully visible. The fur sweeps across the crown toward the forehead; the curl end hangs toward the front. Rounded fur humps; same crown volume and restrained height as the reference. No spikes or sawtooth.
- EYE (left/near eye): fully visible, large, almond-shaped "Quiet Observer" eye. Flat iris #533923 (uniform, no bands/gradient), solid black #000000 pupil ~75% iris span, white #FFFFFF catchlight. Three upper lashes grouped toward the outer corner, no lower lashes.
- FAR EYE: NOT visible — it is behind the skull. Do not show the far eye.
- EYEBROW (left/near): slim, gently arched warm-brown #B97A3D filled band with soft tufted edges and dark #1E1E1E inward outline, visible above and just behind the near eye. Gray separation between brow and upper lid.
- FAR EYEBROW: not visible in true profile.
- BELOW-EYE GRAY: a continuous visible GRAY #595652 strip beneath the near eye's lower lid. The warm muzzle marking (#B97A3D) must NOT touch the eye outline.
- NOSE: compact flat dark #2B2B2B triangle at the front of the muzzle. No gloss, no highlight.

FINISH: flat fills, clean #1E1E1E outlines, transparent background. No gradients, airbrushing, gloss, or rim light. Gentle purposeful fur tufts at edges — no sawtooth fringe. Match the same linework weight and cartoon illustration style as the character reference.

PALETTE (flat sRGB): coat/skull/outer ear #595652; muzzle/eyebrows/inner ear #B97A3D; outline #1E1E1E; nose #2B2B2B; iris #533923; pupil #000000; white #FFFFFF. Do NOT use #E7B37A.

The result must clearly show the SAME CHARACTER as the reference, now seen from the left side. It must read unmistakably as an Eastern Gray Squirrel.
```

### Left profile — verify checklist

Accept only if **all** pass:

- [ ] **Species and character read:** same character as the reference, clearly an Eastern Gray Squirrel, facing left.
- [ ] **Skull:** same rounded cranium, substantial rear-skull and neck volume; rear of head not flattened.
- [ ] **Muzzle:** clear forward projection in profile — nose and jaw extend in front of the skull; muzzle not flattened or shortened.
- [ ] **Near (left) ear:** Soft Taper form, broad-based, rounded top, front attachment near/above eye line, rear attachment lower; low root; tip only modestly above skull; inner surface may be partially visible (acceptable).
- [ ] **Far (right) ear:** NOT visible (at most a tiny front-edge sliver). Far eye and far eyebrow also NOT visible.
- [ ] **Crown:** origin visible just behind the near ear; sweep and curl end toward the front; rounded humps; no spikes.
- [ ] **Near eye:** almond shape, fully visible, flat `#533923` iris, black pupil, white catchlight, three upper lashes, no lower lashes.
- [ ] **Below-eye gray:** continuous visible strip under the near lower lid; warm marking does not touch the eye outline.
- [ ] **Nose:** flat `#2B2B2B`, at muzzle front, no gloss.
- [ ] **Finish:** flat fills, no gradients/gloss/rim light, transparent background.

---

## Phase 3 — Assemble the R1 turnaround sheet

Once the front view and left profile are **individually accepted**, assemble all three on one sheet.

### Turnaround sheet prompt

```text
I am attaching THREE images, each individually approved:
(1) Gypsa FRONT VIEW (facing viewer)
(2) Gypsa THREE-QUARTER VIEW (left-facing, the canonical anchor)
(3) Gypsa LEFT PROFILE VIEW (facing viewer's left)

Arrange these three images as a clean HEAD TURNAROUND SHEET: place them side by side in the order FRONT — THREE-QUARTER — PROFILE, left to right, on a neutral light-gray or off-white background. All three should be at the same approximate scale (match head height across all three). Add a small centered label beneath each panel: "Front", "Three-Quarter", "Profile". Add a title at the top: "Gypsa — Head Turnaround (Provisional)". Keep the character images exactly as supplied — do NOT redraw, recolor, or modify any of them. Flat, clean layout with consistent margins.
```

### Turnaround sheet — verify checklist

- [ ] All three panels at matching head scale.
- [ ] Order: Front — Three-Quarter — Profile, left to right.
- [ ] Labels beneath each panel; title at top.
- [ ] No redrawing, recoloring, or modification of any panel.
- [ ] Clean neutral backing; no busy background.

---

## If a view requires a second attempt

- **If the species read drifts canine/feline:** re-run with both reference images and append: "The previous attempt had [ears too tall and pointed / muzzle too long]. Keep the ear and muzzle proportions matching the squirrel shape reference — short, broad-based rounded ears and a short, compact, rounded muzzle."
- **If the crown mirrors:** append: "The crown must originate behind Gypsa's anatomical LEFT ear — in front view that is the viewer's RIGHT side. The curl end is on the viewer's LEFT. Do NOT mirror the crown."
- **If the far eye/ear appear in the profile:** append: "This is a true left profile. The far eye, far ear interior, and far eyebrow are all hidden behind the skull. Remove them."
- **If the muzzle is flattened in profile:** append: "The muzzle must project forward in profile — the nose and lower jaw should clearly extend in front of the skull as a rounded volume. Do not flatten the muzzle into the face."
- **If a feature regresses:** reject, re-attach the previous accepted image, and append: "In your last attempt you also changed [feature]. Leave it exactly as in the attached reference; change only [the specific requested feature]."

---

## After R1 is complete

Save individual approved views as:
- `Gypsa Head Front Approved.png`
- `Gypsa Head Profile Left Approved.png`
- `Gypsa R1 Head Turnaround.png` (the assembled sheet)

Update the Image Registry in `Approved Reference/START HERE — Gypsa Reference Guide.md`:
- Promote I1 from Pending to the approved turnaround sheet filename + approval date.
- Consider promoting I2-prov (the three-quarter head) to final at the same time if the turnaround confirms its anatomy is consistent across all three views.

With R1 complete, the following become unblocked:
- Ear proportions and crown landmarks can be pinned numerically from the validated front + profile.
- Neck width/depth (G1) can be estimated from the front view.
- Below-eye clearance range (currently provisional) can be reconfirmed.
- Expression sheet (R4) can begin from the approved head.
