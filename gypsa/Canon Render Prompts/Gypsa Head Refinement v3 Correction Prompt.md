# Gypsa Head Refinement v3 — Targeted Correction Prompt (ChatGPT)

**Goal:** fix the two species-breaking problems in `Gypsa Head Refinement  v2.png` — **canine-pointed ears** and the **lengthened snout** — so the head reads unmistakably as a stylized **Eastern Gray Squirrel**, while preserving v2's already-correct iris, inner-ear color, and rounded crown.

**Inputs to attach to ChatGPT (both, in this order):**
1. `Gypsa Head Refinement  v2.png` — the image to edit (note the double space in the filename).
2. `EasternGraySquirrel_GAm.jpg` — the **ear and muzzle shape reference** (real squirrel). Tell ChatGPT this is reference only, not something to copy in color or style.

**Why a reference photo:** text-only edits have now failed twice on the ears (cat-pointed, then canine-pointed) because the renderer substitutes a generic animal ear. The photo gives it a concrete squirrel target. Point it at the *proportions and silhouette* of the reference ear and muzzle, not its realism or coloring.

---

## Primary v3 prompt (ears + muzzle together, one focused edit)

```text
I am attaching TWO images:
(1) the CHARACTER to edit — a stylized cartoon squirrel head, three-quarter view, flat colors, transparent background;
(2) a REAL EASTERN GRAY SQUIRREL PHOTO, provided ONLY as a shape reference for ear and muzzle proportions. Do NOT copy the photo's colors, fur texture, realism, or style — the character stays a flat cartoon.

Edit the CHARACTER image. Make ONLY the two shape changes below. Preserve everything else exactly: the eyes (size, shape, position), the flat brown irises, black pupils and white catchlights, the eyelashes, the eyebrows, the rounded crown fur and its sweep, all flat colors, the clean dark outlines, and the transparent background.

CHANGE 1 — EARS (make them squirrel ears, not dog/wolf/cat ears):
Reshape BOTH ears to match the PROPORTIONS of the reference squirrel's ears. They must be SHORT and BROAD-BASED with a SOFT ROUNDED TOP and a gentle inward curve — like a rounded leaf or a rounded triangle with no sharp point. Reduce the ear HEIGHT substantially so the ears are only moderately taller than they are wide; they currently stand too tall and too narrow and pointed, which makes the character look like a dog or wolf. Set the ears a little lower and more to the SIDES of the skull, not high and upright on top. Keep the near ear (image-right) showing its warm-brown inner surface and the far ear (image-left) showing only its gray back with no inner patch. Keep the inner-ear color exactly as it is now.

CHANGE 2 — MUZZLE (make it a short squirrel muzzle, not a long snout):
SHORTEN the muzzle so it is SHORT, BROAD, and ROUNDED like the reference squirrel's — a compact rounded face, NOT a long projecting dog/wolf snout. Bring the nose closer to the eyes and reduce how far the muzzle juts forward. Keep the broad rounded chin and full cheeks. Keep the nose a small flat dark triangle with no highlight.

Result must clearly read as a friendly cartoon EASTERN GRAY SQUIRREL. Flat fills only — no gradients, gloss, airbrushing, or rim light. Do not change the eyes, irises, pupils, catchlights, eyebrows, crown, colors, or the transparent background. Change only the ear and muzzle shapes.
```

---

## Verify checklist (run on the v3 output)

Accept only if **all** pass:

- [ ] **Ears read as squirrel:** short, broad-based, rounded top, gentle inward curve — no tall narrow point, no dog/wolf/cat silhouette.
- [ ] **Ear placement:** lower and more to the sides, not high-upright on the skull top.
- [ ] **Muzzle read as squirrel:** short, broad, rounded; nose sits closer to the eyes; no long projecting snout.
- [ ] **Overall species read:** at a glance it's clearly an Eastern Gray Squirrel, not a canine.
- [ ] **Preserved from v2 (must be unchanged):** flat brown iris + black pupil + white catchlight; warm inner-ear color; rounded crown and sweep; eye size/shape/position; three upper lashes per eye; eyebrows; flat colors; dark outlines; transparent background.
- [ ] **Finish:** flat fills, no gradient/gloss/rim light; nose flat and dark, no highlight.

If species read is good but the renderer dropped the photo's cartoon/flat style (added realism, fur texture, or photo colors), reject and re-run with this line appended:
> The output started looking realistic/textured. Keep the character a FLAT CARTOON with solid colors and clean outlines — the squirrel photo is for EAR AND MUZZLE SHAPE ONLY, never for color, texture, or style.

---

## If v3 regresses or resists

ChatGPT may fix one shape and drift the other, or leave the ears too tall. Options:

1. **Split the edit.** Run CHANGE 1 (ears) alone first; once the ears pass, run CHANGE 2 (muzzle) on that accepted output. Two smaller edits drift less than one combined edit.
2. **If ears stay too tall/pointed,** re-run CHANGE 1 with: "The ears are STILL too tall and pointed. Make them clearly SHORTER — roughly as tall as they are wide — with a rounded top like the reference squirrel. Err on the side of too short and rounded."
3. **If the muzzle stays too long,** re-run CHANGE 2 with: "The muzzle is STILL too long and snout-like. Shorten it MORE — pull the nose noticeably closer to the eyes so the face looks compact and round like the reference squirrel."
4. **If it regresses the iris/inner-ear/crown** (the v2 wins), reject and re-attach the prior accepted image, appending: "In your last attempt you also changed [feature]. Leave that exactly as in the attached image; edit only the ears and muzzle."

---

## After v3 passes

Save the accepted result (suggest `Gypsa Head Refinement v3.png`, single spaces) and run the **Final full-image acceptance check** in `Gypsa Head Refinement 20261031 Correction Pass.md`. When it passes, this becomes the approved canonical three-quarter head and the anchor for the R1 head turnaround (front + profile generated to match it).
```
