# Canonical Ear Specification

## Ear Shape — "Soft Taper" (unchanged)

Gypsa has **squirrel ears, not cat/fox/wolf ears and not rabbit ears**. The
canonical ear *shape* is **"Soft Taper"**:

- Moderate size.
- **Rounded upper contour** (a soft dome, never a sharp point or tip).
- Broad, natural base.
- Soft, plush fur edge — no spiky sawtooth tips.

The shape authority remains `Gypsa Canonical Ear.png` and `Ear Construction
Front view.png`. The shape is the same in every pose; only its **orientation**
changes with view and attention (see below).

## Ear Orientation — resting vs. attentive

**Added 2026-10-11, confirmed by user.** Real squirrels rotate their ears toward
whatever has their attention. A front-facing squirrel that is *watching you*
turns its ears **outward and forward** so the cupped interior faces the viewer.
This supersedes the earlier blanket rule that the ear interior must never face
the viewer in front view. We now define two orientations of the same Soft-Taper
ear:

### Resting / relaxed orientation (profile, 3/4, calm poses)

- Ears **attached low on the sides** of the skull, not perched on top.
- A **gentle inward curl** to the upper edge.
- In 3/4 and profile, the ear reads largely edge-on; the interior is not
  presented to the camera.
- This is the orientation shown in `Gypsa Canonical Ear.png` and remains correct
  for calm, side, and rotated views.

### Attentive / front-facing orientation (CANON for the front "watching-you" pose)

- The ears **rotate outward and forward** so the **broad, cupped inner ear faces
  the viewer** — the alert "listening to you" posture of a real attentive
  squirrel.
- Mounted a little **higher on the sides** of the rounded skull than the resting
  ear and **splayed outward** (a soft outward "10-and-2" fan), rather than low and
  inward-curled.
- The upper contour stays a **soft rounded dome** — the outward rotation must not
  reintroduce a tall pointed triangle.
- Warm inner-ear color `#E7B37A` is visible as the cupped interior.
- The rounded cranium remains full above and between the ears.
- **Reference authority for this orientation:** `../Rendering/Attentive squirrel
  reference.png` (real-squirrel inspiration for the orientation) and the approved
  front render `Gypsa Front Pose Ear Edit 202610111023.png` (the Gypsa-stylized
  realization of it). The attentive orientation is the **canonical default for a
  front-facing, viewer-engaged Gypsa**; the resting orientation governs profile,
  3/4, and calm poses.

> **Note:** This changes *orientation only*, not the Soft-Taper shape. A front
> attentive ear is still rounded-topped, broad-based, and plush-edged — it is
> simply rotated to present its cupped interior to the viewer instead of being
> seen edge-on.

## Ear Geometry

This joint system defines both ears using root/tip pairs.

| Geometry | Value | Status |
| El — left ear root | Coordinate relative to Hc TBD | Canonical landmark once extracted |
| Elt — left ear tip | Segment length TBD | Canonical geometry already visually established |
| Er — right ear root | Coordinate relative to Hc TBD | Canonical landmark once extracted |
| Ert — right ear tip | Segment length TBD | Canonical geometry already visually established |

*Watch item:* the attentive orientation's higher side-mount and outward splay are
not yet reduced to El/Er/Elt/Ert coordinates. A dedicated annotated **attentive
front-ear construction study** (mount height, outward rotation angle, cupped-
interior extent) is the pending next step before these landmarks are finalized.
