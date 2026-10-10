# Gypsa the Squirrel's Production Guide

## Image Standards

- ViewBox: 1000 × 1000
- Transparent background
- Flat colors only
- No raster effects
- No clipping masks unless absolutely necessary
- Rounded joins where appropriate
- Consistent outline thickness
- Every curve has a job
- Prefer organic authenticity over geometric perfection

## Design Principles

*Let Gypsa grow through her actions before changing her appearance.*  
*Recognition comes from the silhouette. Affection comes from the discoveries.*

- Gypsa's silhouette should feel discovered rather than constructed.
- Evaluate every design both in isolation and in context.
- Build a neutral reference before designing expressive variations.
- Distinguish between structural consistency and behavioral growth.
- A canonical design should rotate, simplify, and scale without losing its identity.
- Every exploration should produce knowledge, even if it produces no artwork.
- A successful exploration often reveals that the correct solution is a synthesis rather than one of the original candidates.
- Design relationships before features.
- Every relationship has a reason.
- Design for recognition first, discovery second, explanation last.
  1. People should instantly recognize Gypsa.
  2. Over time, they should discover delightful details.
  3. They should never need an explanation to understand the design.
- When a design problem appears, validate which component is actually responsible before changing the approved design.
- Build nature first. Reveal character second.
- Identity before behavior.
- A three-quarter view can conceal attachment errors that a profile view exposes.
- A newer generated image **does not supersede canonical references merely because it is newer.**  
- Structural geometry determines the body envelope. The body envelope never relocates structural geometry.  

### Muzzle Construction Principle

*The muzzle should seem to inflate from the skull rather than attaching to it.*

- Like blowing up a balloon under a blanket.
- The surrounding head should gently flow over it.
- This avoids the common cartoon problem where the muzzle feels like a separate piece glued onto the front.

## Design Methodology

1. Explore broadly.
2. Record lessons learned.
3. Refine into a few focused candidates.
4. Select a hybrid or canonical solution.
5. Validate in context.
6. Freeze it provisionally.
7. Move to the next dependent feature.

## Validation Principles

- Validate one variable at a time.
- Freeze approved components while testing dependent features.
- Test in isolation before testing in context.
- Orthographic validation should precede expressive validation.
- When a design problem appears, identify the responsible component before making revisions.
- Passing validation is evidence to stop changing a design, not an invitation to continue refining it.
- If a design decision cannot eventually be expressed as a path, proportion, construction rule, reusable component, or controlled parameter, it probably isn't documented precisely enough yet.  

## Color Palette

### Body

| Part | Color |  
| --- | --- |  
| Fur | #595652 |  
| Belly | #B97A3D |  
| Outline | #1E1E1E |  
| Nose | #2B2B2B |  
| Eyes | #111111 |  
| Claws | #FFFFFF |  

### Backpack

| Part | Color |  
| --- | --- |  
| Backpack Flap | #6B4A2E |  
| Backpack Body | #A8743A |  
| Oak Leaf Embroidery / Patch | #4F7A3A |  
| Acorn Cookie Cutter | #B8B8B8 |  

### Bandana

| Part | Color |  
| --- | --- |  
| Bandana Cloth | #4F7A3A (same green as the oak leaf patch) |  

## Naming Convention  

```
gypsa
 ├── body
 ├── head
 ├── ears
 ├── tail
 ├── backpack
 ├── bandana
 ├── walking-stick
 ├── eyes
 ├── mouth
 ├── nose
 ├── arms
 ├── hands
 ├── legs
 └── feet
```

## Color Tokens

- fur-dark
- fur-light
- belly
- outline
- oak-green (oak leaf patch + bandana)
- backpack-dark
- backpack-light
- cloth-wrap
- walking-stick
- bandana (= oak-green)

## Line Weight

**Canon (ratified 2026-09-16):** the canonical outline is **2.35% of head
height**, in outline color `#1E1E1E`. Gypsa carries this weight everywhere.

This is a **project-wide** standard, not a Gypsa-only decision — it applies to
all characters and all non-character foreground art. The authority is the
[Line Weight Standard](../../style-guide/line-weight/line-weight-standard.md);
Gypsa was the exploration subject. If this section and the standard ever
disagree, the standard wins.

- Author and validate at a large render (head ≥ 400 px, outline ≈ 9–10 px).
- Small uses (favicon/avatar) are downscaled from a large master, never
  separately hand-weighted.
- Selected value = exploration candidate **R2b-2** — heavier than the old Master
  Artwork outline (which measured ~0.84% of head height) so Gypsa separates from
  busy backgrounds, but deliberately thinner than the original Round 1 "C".

## Default Expression

- Eyes slightly widened — not in surprise, but in interest.
- One eyebrow raised just a touch higher than the other.
- A small, closed-mouth smile.
- Head tilted about 7°.
- Looking just past the viewer, as though she's noticed something nearby and is about to point it out.

That expression quietly says:  
*"I think I found something interesting..."*

## Foundation Before Finish

Every stage of development should first answer the question:  
*"Does it work?"*

Only after a design is structurally sound should effort be invested in making it beautiful.

Beauty built on a weak foundation is temporary.  
Beauty built on a strong foundation is enduring.

## Workflow

Research → Exploration Sheet → Lessons Learned → Refined Exploration → Lessons Learned → Canonical Decision

## Emergent Characteristics

**TBD:** Traits that appeared naturally during production and became part of Gypsa's identity.

An emergent characteristic should:

- appear repeatedly across independent explorations
- reinforce Gypsa's personality
- never be added simply because it is clever

## Canonical References

| Component | Status |
| --- | --- |
| Body Dummy | Approved |
| Head Silhouette | Approved |
| Canonical Muzzle | Approved |
| Ears | Approved |
| Eyes | Approved |
| Eyebrows | Approved |
| Forehead/Crown Fur | Design canon: [Crown Fur Specification v1.0](Gypsa%20Crown%20Fur%20Specification.md); new landmark / cross-view appearance validation pending |
| Complete Canonical Head | Approved |

**Canonical** — The current approved reference used as the foundation for future work. Canonical does not mean immutable. Changes require evidence gained through exploration and validation rather than preference alone.

---

**Friendly Forest methodology**  
For any future resident, we'll eventually ask two questions:  
*What makes this creature believable?*  
*What makes this individual unforgettable?*
