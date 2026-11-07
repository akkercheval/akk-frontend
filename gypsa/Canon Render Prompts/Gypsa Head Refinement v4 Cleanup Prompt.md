# Gypsa Head Refinement v4 — Light Cleanup Prompt (ChatGPT)

**Goal:** a gentle polish pass on `Gypsa Head Refinement v3.png` to reach a near-final canonical three-quarter head. v3 already solved the hard problems (squirrel ears, short muzzle, species read, flat iris, inner-ear color, rounded crown). This pass makes small proportion and tidy-up adjustments only — do **not** redo the ears or muzzle from scratch.

**Inputs to attach to ChatGPT (both, in this order):**
1. `Gypsa Head Refinement v3.png` — the image to edit.
2. `EasternGraySquirrel_GAm.jpg` — **shape/proportion reference only** (for ear and muzzle length). Not a color, texture, or style reference.

**Why keep the reference attached:** two of the five tweaks are proportion nudges (ear and muzzle length). The reference photo is what finally fixed the ear shape in v3, so it helps here too. The prompt tells ChatGPT to use it for proportion only.

**Edit philosophy for this pass:** small nudges, not rebuilds. Over-editing is now the main risk — the species read and color are correct and must survive. If any change would require reshaping the ears' basic form or the overall face, it's too big for this pass.

---

## Primary v4 cleanup prompt

```text
I am attaching TWO images:
(1) the CHARACTER to edit — a stylized cartoon squirrel head, three-quarter view, flat colors, transparent background;
(2) a REAL EASTERN GRAY SQUIRREL PHOTO, provided ONLY as a proportion reference for ear and muzzle LENGTH. Do NOT copy the photo's colors, fur texture, realism, or style. The character stays a flat cartoon.

This is a LIGHT CLEANUP pass. Make only the small adjustments below. Do NOT redesign the ears or muzzle, and do NOT change the eyes (size, shape, position), the flat brown irises, black pupils, white catchlights, eyelashes, eyebrows, the rounded crown fur and its sweep, the overall head shape, the flat colors, the clean dark outlines, or the transparent background.

1. EARS — slightly larger: the ears are a touch too short and small. Make them MODESTLY TALLER and a little larger overall, matching the proportions of the reference squirrel's ears — still short-to-moderate, broad-based, with a soft rounded top and gentle inward curve. Do NOT make them tall, narrow, or pointed; keep the rounded squirrel shape and the same low, to-the-side placement. Keep the near ear (image-right) showing its warm-brown inner surface and the far ear (image-left) showing only its gray back.

2. MUZZLE — slightly longer: the muzzle is a touch too short. Extend it a SMALL amount forward so it looks a little less stubby, matching the reference squirrel's muzzle length — still a SHORT, BROAD, ROUNDED squirrel muzzle, NOT a long dog/wolf snout. Keep the broad chin, full cheeks, and the small flat dark nose with no highlight.

3. MUZZLE CONTOUR — tidy: simplify the looping line around the nose and upper lip so the muzzle contour is clean and smooth. Remove the puffy, pouch-like double-loop look on the near side; keep a single clean muzzle/cheek contour and the gentle friendly smile.

4. BELOW-EYE GRAY — small boundary move: lower the warm-brown muzzle/cheek color boundary slightly beneath BOTH eyes so a continuous, visible GRAY strip of fur sits between each lower eye outline and the warm marking. The warm marking must not touch the eye outlines. Move the COLOR boundary only — do not move or resize the eyes.

5. PERIPHERAL FUR — slightly shorter: shorten the fur spikes a little along the neck outline and lower jaw into softer, gently tapered tufts. Leave the crown hair and ears as they are.

Flat fills only — no gradients, gloss, airbrushing, or rim light. Keep the character reading clearly as a friendly cartoon Eastern Gray Squirrel. Apply only the five small changes above; preserve everything else exactly.
```

---

## Verify checklist (run on the v4 output)

Accept only if **all** pass:

- [ ] **Ears:** modestly taller/larger than v3 but still short-to-moderate, broad-based, rounded top — NOT tall/narrow/pointed; same low side placement; inner/back coloring unchanged.
- [ ] **Muzzle length:** slightly longer than v3, still short, broad, and rounded — not a snout.
- [ ] **Muzzle contour:** single clean contour; the puffy double-loop near the nose/lip is gone; smile intact.
- [ ] **Below-eye gray:** continuous visible gray strip under both eyes; warm marking not touching the eye outlines.
- [ ] **Peripheral fur:** neck/jaw fur a bit softer/shorter; crown and ears untouched.
- [ ] **Species read:** still clearly an Eastern Gray Squirrel.
- [ ] **Preserved (must be unchanged):** eye size/shape/position; flat brown iris + black pupil + white catchlight; three upper lashes per eye; eyebrows; rounded crown + sweep; flat colors; dark outlines; transparent background; flat dark nose with no highlight.
- [ ] **Finish:** flat fills, no gradient/gloss/rim light.

---

## If v4 overshoots or drifts

- **Ears too tall/pointed again:** re-run with "You made the ears too tall/pointed — pull them back to a SHORT, ROUNDED, broad-based squirrel ear, only slightly larger than the previous version."
- **Muzzle too long:** re-run with "The muzzle is now too long/snouty — shorten it back toward a compact rounded squirrel muzzle; I wanted only a small increase."
- **It regressed a protected feature** (iris, inner-ear color, crown, eyes): reject, re-attach the prior accepted image, and append "In your last attempt you also changed [feature]. Leave it exactly as in the attached image; apply only the listed cleanup changes."
- **Split if needed:** if the five changes fight each other, do ears + muzzle length first (with the reference photo), then the contour/gray/fur tidy-ups in a second pass on the accepted output.

---

## After v4 passes

Save as `Gypsa Head Refinement v4.png` (single spaces). Run the **Final full-image acceptance check** in `Gypsa Head Refinement 20261031 Correction Pass.md`. When it passes, promote it as the **approved canonical three-quarter head** and we use it as the visual anchor for the R1 head turnaround (front + profile generated to match).
```
