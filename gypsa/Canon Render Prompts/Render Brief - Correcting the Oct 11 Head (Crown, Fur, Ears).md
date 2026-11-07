# Render Brief — Correcting the Oct 11 Head (Crown, Fur, Ears)

**Date:** 2026-10-11
**Base image:** `Rendering/ChatGPT Image Oct 11, 2026, 05_40_42 PM.png` (3/4 left head)
**Goal:** Keep what this render finally got right — the muzzle, nose, jaw, smile,
and almond eyes — and correct, **one issue at a time**, the three features that
are off-canon: (1) the spiky crown tuft, (2) the over-spiky fur edges everywhere,
and (3) the pointed/tufted ears. Finish with an optional flat-color pass.

**Why this render is worth building on:** For the first time in a while the muzzle
tracks `Gypsa Canonical Muzzle.png` — forward projection, small soft nose, fuller
lower jaw, gentle chin, upturned closed-mouth smile, soft cheek transition — and
the eyes read as the defined "Quiet Observer" almond rather than the over-round
back-pose eye. Those are the hard parts. We do **not** want to re-roll the whole
head and risk losing them. Every step below is a **targeted edit** that preserves
the face and changes only the one named feature.

**Why one issue at a time (the standing lesson):** Per the 2026-10-09 visual
review and the Canon Summary, asking one generation to resolve everything lets the
model "fix" one feature while silently drifting another (the good muzzle, in this
case). Each step is a single controlled correction; inspect for collateral change
before accepting, then feed the approved result forward as the base for the next
step.

---

## How to use this document

Do the steps **in order**. For each step:
1. Start from the **current approved base** (Step 1 starts from the Oct 11 render;
   Step 2 starts from Step 1's approved output; and so on).
2. Attach the images that step lists, telling the model what each one governs.
3. Paste the **Preserve Lock** (Section A) first, then the step's prompt.
4. Run the **drift checklist** before accepting. The checklist's first item is
   always "the muzzle/eyes I already liked are unchanged" — if that drifted,
   reject and re-roll regardless of how good the new fix looks.
5. Save the approved PNG into `Rendering/output/` with the step's filename.

> **Prefer an edit over a fresh generation.** Where the tool supports it (e.g.
> ChatGPT image edit / inpaint on the attached base), ask it to **modify the
> provided image** rather than redraw from scratch. That is the single best
> protection for the muzzle and eyes. If the tool insists on redrawing, the
> Preserve Lock plus the attached base is the fallback.

---

# Section A — Preserve Lock (paste into EVERY step)

> **This is an EDIT of the attached base image, not a new character.** Keep Gypsa's
> identity and everything already correct **exactly as in the attached base**, and
> change **only** the one feature named in this step.
>
> **Preserve unchanged (do NOT touch):**
> - **The muzzle** — forward projection, small soft nose, fuller lower jaw, gentle
>   chin, and the upturned closed-mouth smile. This is correct; leave it alone.
> - **The eyes** — large calm **almond** "Quiet Observer" eyes, defined upper lid,
>   single soft highlight, gaze just past the viewer. Do not resize, round, or
>   re-style them. No added eyelashes beyond what is already there.
> - **Head angle and expression** — same 3/4-left turn, same warm neutral look.
> - **Color palette** — gray-dominant coat `#595652`, warm face/belly `#B97A3D`,
>   inner ear `#E7B37A`, outline `#1E1E1E`, nose `#2B2B2B`, eyes `#111111`.
> - **Framing & background** — same crop; fully transparent background (real alpha,
>   no white card, no checkerboard, no shadow, no scenery, no text).
>
> **Art style:** warm storybook cartoon, **rounded soft forms, flat colors**, clean
> even `#1E1E1E` outline. She is a stylized young-adult Eastern Gray **squirrel**.

*End of Preserve Lock. The four steps follow.*

---

# Step 1 — Fix the crown fur (the spiky quiff → Soft Layered Sweep)

**Base to start from:** `Rendering/ChatGPT Image Oct 11, 2026, 05_40_42 PM.png`

**The problem:** The current crown is a short, choppy, high-set **spiky quiff** of
separated spikes. The Crown Fur Specification §5 forbids exactly this: *"no...
spiky quiff, flattened wedge fringe, or narrow hooked locks."* It also has no
directional sweep and no single dominant forelock tip.

**What it must become — "Soft Layered Sweep":** 3–4 broad, **rounded**, overlapping
fur locks of unequal length that follow the rounded skull and taper **gradually**
into the ordinary coat with **no visible hairline edge**. The sweep originates
**centered between the ears at the back of the crown** and curves forward to **one
longest rounded tip centered between the eyes** (its tip descends to roughly
halfway between the top of the eye opening and the inner lash line). Both eyebrows
stay fully visible.

**Attach these images** (tell the model what each governs):
1. **The Oct 11 base render** — the character and the face to preserve.
2. `../Exploration/Hair/Gypsa Forehead and Crown Fur Reference.png` — **the crown
   shape authority**: broad rounded overlapping locks, gradual taper, the look to
   match. *(Governs crown only — not its ears, muzzle, or framing.)*
3. `../Exploration/Hair/Gypsa Forehead and Crown Rotation Validation.png` — how the
   same crown mass sits when the head is rotated (this base is a 3/4). *(Crown only.)*
4. `../Approved Reference/Gypsa Provisional Full Body Back Pose.png` — supports the
   rounded lock **volume** and soft downward fall. *(Crown volume only; not an
   authority for its ears/muzzle.)*

> **Authority doc:** `../Approved Reference/Gypsa Crown Fur Specification.md` v1.0.

**Paste-in prompt (after the Preserve Lock):**
> Edit the attached base image of Gypsa. Change **only the fur on the top of her
> head (the crown)**. Replace the short spiky separated-spike quiff with a **Soft
> Layered Sweep**: three to four **broad, rounded, overlapping** fur locks of
> slightly different lengths that lie softly over the rounded skull and **taper
> gradually into the surrounding coat with no visible hairline or edge**. The
> sweep originates **centered between the ears at the back of the crown** and
> **curves forward** to a **single longest rounded tip centered between the eyes**,
> whose point reaches about halfway between the top of the eye and the inner
> corner of the lash. Keep **both eyebrows fully visible**. The crown stays
> **shallow enough that the rounded skull still reads** — soft and plush, not tall,
> not a mohawk, not a fringe. **Do NOT** draw spikes, sawtooth tips, a flat wedge
> fringe, a center part, or a visible hairline. Leave the muzzle, nose, mouth,
> eyes, ears, color, framing, and transparent background exactly as in the base.

**Verify before accepting:**
- ✅ **Muzzle, nose, mouth, and eyes are unchanged** from the base. (First check.)
- ✅ Crown is 3–4 broad **rounded** overlapping locks — no separated spikes.
- ✅ Clear forward sweep to **one** longest tip near the facial midline.
- ✅ **No visible hairline edge**; fur melts into the coat; skull still reads round.
- ✅ Both eyebrows fully visible; transparent background preserved.

Save approved as `Rendering/output/gypsa_head_oct11_crownfix_v1.png`.

---

# Step 2 — Soften the fur edges everywhere (de-spike the silhouette)

**Base to start from:** `Rendering/output/gypsa_head_oct11_crownfix_v1.png` (the
approved Step 1 result).

**The problem:** Every contour — cheek, jaw, back of neck, ear backs, skull edge —
is drawn as sharp **sawtooth tufting**, so the whole silhouette reads bristly. Canon
is **"Soft Taper"** everywhere: moderate, rounded, plush contours. Compare the body
outline in the back pose, which is mostly smooth with only occasional soft fur
breaks. The spiky accent has become the default edge style and needs to come back
to an occasional, gentle break.

**Attach these images:**
1. **The Step 1 approved render** — the base to edit.
2. `../Approved Reference/Gypsa Provisional Full Body Back Pose.png` — **the soft
   silhouette authority**: mostly smooth, plush outline with only occasional gentle
   fur breaks. *(Governs edge softness only.)*
3. `../Approved Reference/Gypsa Canonical Head Neutral Pose.png` — supports the
   smooth, rounded cheek/jaw contour feel. *(Edge/contour feel only; its ears are
   drifted — do not copy them.)*

**Paste-in prompt (after the Preserve Lock):**
> Edit the attached base image. Keep every feature the same, but change the
> **fur edge treatment along the outer silhouette** — the cheek, jaw, back of the
> neck, the skull edge, and the backs of the ears. Replace the sharp, repetitive
> **sawtooth / spiky** fur edges with **soft, rounded, plush contours**. The
> outline should read mostly **smooth** with only an **occasional, gentle fur
> break**, like the soft silhouette of the attached back-pose reference — not a
> continuous bristly, prickly edge. Keep the fur **flat-colored** and the outline
> clean and even. **Do NOT** change the muzzle, nose, mouth, eyes, the crown you
> just corrected, the color palette, the framing, or the transparent background.

**Verify before accepting:**
- ✅ **Muzzle, eyes, and the Step 1 crown are unchanged.** (First check.)
- ✅ Outer silhouette reads **soft and plush**, not sawtooth/bristly.
- ✅ Only occasional gentle fur breaks remain; cheek and jaw are smooth.
- ✅ Flat color and even outline preserved; transparent background preserved.

Save approved as `Rendering/output/gypsa_head_oct11_furfix_v1.png`.

---

# Step 3 — Fix the ears (pointed/tufted → "Soft Taper")

**Base to start from:** `Rendering/output/gypsa_head_oct11_furfix_v1.png` (the
approved Step 2 result).

**The problem:** The ears are tall triangles with spiky edges and sharp tips — the
longest-standing drift on the project. The Ear Specification and `Gypsa Canonical
Ear.png` call for **"Soft Taper"**: moderate size, **rounded upper contour**, a
**gentle inward curl**, and a **broad base**, attached **low on the sides** of the
skull. They are squirrel ears, not cat/fox/wolf ears.

**Attach these images:**
1. **The Step 2 approved render** — the base to edit.
2. `../Approved Reference/Gypsa Canonical Ear.png` — **the ear shape authority**:
   rounded upper contour, gentle inward curl, broad base. Match this exactly.
3. `../Approved Reference/Ear Construction Front view.png` — supporting ear
   construction detail.

> **Authority doc:** `../Approved Reference/Ear Specification.md`.

**Paste-in prompt (after the Preserve Lock):**
> Edit the attached base image. Change **only the ears**. Reshape them from tall,
> pointed, spiky triangles into the canonical **"Soft Taper"** squirrel ear:
> **moderate size, a rounded upper contour, a gentle inward curl, and a broad
> base**, matching the attached Canonical Ear study. The ears stay **attached low
> on the sides of the rounded skull** (not perched high on top), and the **rounded
> cranium remains full above and behind them**. Keep the warm inner-ear color
> `#E7B37A`. The ear edges follow the same soft, plush fur treatment as the rest of
> the head — **no spiky sawtooth tips**. **Do NOT** draw tall, pointed, triangular
> cat/fox/wolf ears, and do NOT change the muzzle, eyes, crown, color, framing, or
> transparent background.

**Verify before accepting:**
- ✅ **Muzzle, eyes, crown, and softened fur are unchanged.** (First check.)
- ✅ Ears are **rounded on top with a gentle inward curl**, moderate, broad-based.
- ✅ Attached **low on the sides**; rounded cranium full above/behind them.
- ✅ No spiky tips; reads as a **squirrel** ear, not cat/fox/wolf.
- ✅ Flat color, even outline, transparent background preserved.

Save approved as `Rendering/output/gypsa_head_oct11_earfix_v1.png`.

---

# Step 4 (optional) — Flatten shading to the production standard

**Base to start from:** `Rendering/output/gypsa_head_oct11_earfix_v1.png` (the
approved Step 3 result).

**The problem (minor):** The render uses smooth **gradient shading** on the cheek
and neck. The production guide standard is **flat color** (no gradients, no gloss,
no rim light). This is cosmetic and lowest priority — do it only if you want the
head to match the written flat-color finish.

**Attach these images:**
1. **The Step 3 approved render** — the base to edit.
2. `../Approved Reference/Gypsa Provisional Full Body Back Pose.png` — flat-color
   coat reference (one solid gray value, warm belly value).

> **Authority doc:** `../Approved Reference/gypsa-production-guide.md`.

**Paste-in prompt (after the Preserve Lock):**
> Edit the attached base image. Keep every shape exactly the same, but convert the
> **shading to flat color**: a single solid gray `#595652` for the coat and a
> single warm `#B97A3D` for the face/belly, with the inner ear `#E7B37A`. Remove
> gradient blending, soft airbrushed shadows, gloss, and rim light. Keep the clean
> even `#1E1E1E` outline and the transparent background. **Do NOT** change any
> shapes — muzzle, eyes, crown, ears, silhouette — only the fill style.

**Verify before accepting:**
- ✅ All shapes unchanged from Step 3; only fills changed.
- ✅ Flat solid colors on the exact palette; no gradients/gloss/rim light.
- ✅ Even outline and transparent background preserved.

Save approved as `Rendering/output/gypsa_head_oct11_flat_v1.png`.

---

# After approval

- The final approved head (Step 3, or Step 4 if you did the flat pass) is a strong
  candidate **3/4-left head**. Do **not** auto-promote it to Approved Reference; a
  3/4 render alone is not a full head authority. If you want it canon, follow the
  per-view validation path in `Render Brief - Canonical Head Views (Front, 3-4,
  Profile).md` and produce the matching front and profile before assembling a sheet.
- Log the outcome in `Gypsa Visual Review 2026-10-09.md` (or a new dated review),
  noting which features this corrected pass finally resolved and any residual watch
  items (e.g. ear-root placement, crown rotation validation).
- No canonical document or image is changed by running this brief; it only produces
  new candidates in `Rendering/output/`.
