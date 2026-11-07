# Render Prompt — Waving Front Pose: Ear Correction Only

**Date:** 2026-10-11
**Base image:** `../Approved Reference/Gypsa Provisional Front Pose Waving.png`
(full-body, front, waving, holding the walking stick)
**Goal:** Correct **only the ears** — reshape the tall, pointed, spiky triangular
ears into the canonical **"Soft Taper"** squirrel ear. Change **nothing else**.
Every other feature in this render — including features that are themselves still
off-canon (the spiky crown fur, the bristly silhouette, the missing tail) — is
**out of scope for this step** and must be left exactly as it is in the base.

**Why ears only:** Per the standing project lesson (2026-10-09 visual review and
the Canon Summary), asking one generation to fix everything lets the model "fix"
one feature while silently drifting another. This is a single, controlled edit:
one feature changes, everything else is locked. The crown, silhouette, and tail
get their own separate correction steps later.

> **Authority docs:** `../Approved Reference/Ear Specification.md`,
> `../Approved Reference/Gypsa Canon Summary.md` (Head Assembly → Ears).
> **Shape authority image:** `../Approved Reference/Gypsa Canonical Ear.png` —
> *"the correct ears. Nothing drawn since has depicted the ears correctly."*

---

## How to run this

1. **Prefer an edit/inpaint over a fresh generation.** Where the tool supports it
   (e.g. ChatGPT image edit / inpaint), ask it to **modify the provided base
   image**, not redraw from scratch. That is the single best protection for the
   good muzzle, eyes, and body. If the tool insists on redrawing, the Preserve
   Lock plus the attached base is the fallback.
2. **Attach these images, telling the model what each one governs:**
   - **The waving front-pose base** (`Gypsa Provisional Front Pose Waving.png`) —
     the character and everything to preserve.
   - `../Approved Reference/Gypsa Canonical Ear.png` — **the ear shape authority**:
     rounded upper contour, gentle inward curl, broad base. Match this exactly.
     *(Governs the ears only — not its crown, muzzle, framing, or line style.)*
   - `../Approved Reference/Ear Construction Front view.png` — supporting ear
     construction detail for the **front** view specifically.
   - `../Approved Reference/Gypsa Provisional Full Body Back Pose.png` — supports
     how the corrected **"Soft Taper"** ear sits on the rounded skull in a real
     full render. *(Governs ear shape/placement only; not the base's crown.)*
3. Paste the **Preserve Lock** (Section A) first, then the **Ear Correction
   Prompt** (Section B).
4. Run the **drift checklist** (Section C) before accepting.
5. Save the approved PNG to `Rendering/output/gypsa_front_waving_earfix_v1.png`.

---

# Section A — Preserve Lock (paste first)

> **This is an EDIT of the attached base image, not a new character.** Keep
> Gypsa's identity and everything already in the base **exactly as it is**, and
> change **only the ears**.
>
> **Preserve unchanged (do NOT touch):**
> - **The face** — muzzle (forward projection, small soft nose, fuller lower jaw,
>   gentle chin, upturned closed-mouth smile), the large calm **almond** "Quiet
>   Observer" eyes, eyebrows, and the warm neutral expression. Do not resize,
>   restyle, or move any of it.
> - **The crown / head fur** — leave it **exactly as in the base**, even though it
>   is spiky. Correcting the crown is a **separate step**; do not "improve" it here.
> - **The body, pose, and gesture** — the upright standing posture, the raised
>   waving right hand, the left hand holding the walking stick, arms, legs, feet,
>   belly.
> - **The silhouette / fur-edge treatment everywhere except the ear outline** —
>   do not smooth or de-spike the cheek, jaw, neck, or body edges here; that too
>   is a separate step.
> - **Equipment** — green bandana with the front square knot, backpack straps,
>   and the oak walking stick.
> - **Color palette** — gray coat `#595652`, warm face/belly `#B97A3D`, inner ear
>   `#E7B37A`, outline `#1E1E1E`, nose `#2B2B2B`, eyes `#111111`.
> - **Framing & background** — same crop, scale, and position on the canvas; same
>   background exactly as in the base (do not add or remove a background, shadow,
>   card, checkerboard, scenery, or text).
> - **Line style** — same clean, even `#1E1E1E` outline weight as the rest of the
>   drawing.
>
> **Art style:** warm storybook cartoon, rounded soft forms, flat colors, clean
> even `#1E1E1E` outline. She is a stylized young-adult Eastern Gray **squirrel**.

---

# Section B — Ear Correction Prompt (paste after the Preserve Lock)

> Edit the attached base image of Gypsa. Change **only the two ears** — nothing
> else in the image may change.
>
> Reshape both ears from the current tall, pointed, spiky triangles into the
> canonical **"Soft Taper"** squirrel ear, matching the attached Canonical Ear
> study:
> - **Moderate size** — not tall or towering; the rounded top of the skull stays
>   full and clearly visible **above and behind** the ears.
> - **Rounded upper contour** — the top of each ear is a soft curve, not a point
>   and not a sharp tip.
> - **A gentle inward curl** at the upper edge, as in the Canonical Ear reference.
> - **A broad base** where the ear meets the head.
> - **Attached low on the sides** of the rounded skull — not perched high on top
>   like cat or fox ears.
> - **Warm inner-ear color `#E7B37A`**, same as the base.
> - The ear's own outline uses the **same soft, plush fur edge** as the Canonical
>   Ear reference — **no spiky sawtooth tips, no sharp pointed tip, no inner ear
>   tufts spiking upward.**
>
> **Do NOT** draw tall, pointed, triangular cat / fox / wolf ears. **Do NOT**
> change the muzzle, nose, mouth, eyes, eyebrows, the crown fur, the body, pose,
> hands, the waving gesture, the walking stick, the bandana, the backpack, the
> colors, the line weight, the framing, or the background. Leave every one of
> those exactly as in the attached base. Only the two ears change.

---

# Section C — Drift checklist (run before accepting)

- ✅ **FIRST CHECK — collateral damage:** the muzzle, nose, mouth, eyes, eyebrows,
  crown fur, body, pose, waving hand, walking stick, bandana, backpack, colors,
  framing, and background are **all unchanged** from the base. If anything other
  than the ears moved, **reject and re-roll**, no matter how good the new ears look.
- ✅ Both ears now have a **rounded upper contour** — no sharp points, no tips.
- ✅ A visible **gentle inward curl** on each ear's upper edge.
- ✅ **Broad base**, moderate size; ears sit **low on the sides** of the skull.
- ✅ **Rounded cranium stays full** above and behind the ears.
- ✅ Ear edges are **soft and plush** — no spiky sawtooth, no inner-ear up-spikes.
- ✅ Reads clearly as a **squirrel** ear, not cat / fox / wolf.
- ✅ Inner-ear color `#E7B37A`; even `#1E1E1E` outline; background unchanged.

Save approved as `Rendering/output/gypsa_front_waving_earfix_v1.png`.

---

## Notes

- This step does **not** promote anything to Approved Reference. It produces one
  corrected candidate in `Rendering/output/`.
- The remaining known drifts on this image — **missing tail**, **spiky crown fur**,
  and the **bristly overall silhouette** — are intentionally left for their own
  separate single-feature correction steps. Do not fold them into this edit.
- If the tool cannot change the ears without disturbing the crown fur that sits
  directly above them, keep the ears correct and the **crown unchanged**; a crown
  that is still spiky is acceptable here, a drifted muzzle/eyes is not.
