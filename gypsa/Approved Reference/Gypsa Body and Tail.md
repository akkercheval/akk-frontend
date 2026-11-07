# Gypsa Body and Tail

**Version 0.6 — front-tail projection and consistent cross-sectional thickness expanded alongside accepted neck, limb/digit, and tail construction wording. Numerical neck widths await validated front/profile construction. Inherited geometry is provisional unless explicitly confirmed below.**
Head appearance belongs to [Head and Expression](Gypsa%20Head%20and%20Expression.md); equipment dimensions to [Equipment](Gypsa%20Equipment.md).

## Unit and construction

**1H = chin-to-cranial-top head height, excluding ears and projecting crown fur.** This structural unit is distinct from the outline calibration span (ear tips through bottom of neck/shoulder; see Rendering Standard). Use anatomical left/right, not canvas left/right, except where an explicit camera convention is stated.

Gypsa has a soft compact young-adult build, a pear-shaped torso, substantial neck, narrow shoulders, rounded haunches, and elongated squirrel feet. The surface follows the rig; moving landmarks to rescue an incorrect outline is not validation.

**Accepted neck description:** Gypsa has a substantial, softly rounded neck that supports the head with a broad, continuous transition into the shoulders and upper torso. Preserve fullness beneath the jaw and along the back of the neck through head turns and tilts. Avoid a narrow, pinched connection between head and body. The neck in `Gypsa head correction no hair.png` supplies the preferred fullness.

**Deferred neck measurements:** add front-view side-to-side width and profile front-to-back depth from the validated front and profile construction. Measure both in H at the same defined anatomical neck level in a neutral pose, excluding projecting fur tufts. Choose and annotate that repeatable level during construction; do not assume a circular cross-section or derive both dimensions from the three-quarter no-hair image. Nc→Sc = 0.30H describes the existing construction length, not neck thickness. No numerical width or depth is settled yet.

**User-selected construction reference:** use `canonical-body-dummy-v2.0-profile.svg` during reference-image development for proportions, landmarks, and especially the squirrel hind-leg arrangement. It is a line construction drawing, not a soft-tissue or volume reference. Its narrow drawn neck does not prescribe neck thickness. Preserve the folded squirrel leg structure when adding volume; do not straighten it into human-like legs. Reconcile the SVG against current measurements before using it as a measured master: its legacy hand labels still state 0.24H fingers, superseded by 0.26H fingers and 0.48H total reach. The historical SVG remains a development source outside the final packet.

Axial hierarchy: Hc (head center) → Nc (head attachment) → Sc (shoulder spine) → Pc (pelvic spine) → Tr (tail root). Limb branches: Sc → S → E → W → Kb → Tf and Pc → H → K → Hk → T → Th. Here H in the limb chain is the hip joint, while the unit H is head height; T is the ball of the foot, not the crown tip.

| Upright reference landmark | Height above ground |
| --- | --- |
| Ground | 0.00H |
| Knee reference line | 0.85H |
| Pc, pelvic anchor | 1.45H |
| Tr, terminal spine/root | 1.55H |
| Sc, shoulder/neck transition | 3.15H |
| Nc, head base attachment | 3.45H |
| Cranial top, derived for the upright neutral construction | 4.45H |
| Ear tips, inherited estimate only | approximately 4.60H |

These are construction landmarks, not universal screen-space heights for tilted or moving poses. Sc→Pc = 1.70H; Nc→Sc = 0.30H; Pc→Tr = 0.10H along the spine. Hc was stored at (−0.061, 3.946) and face-direction point Hf at (−0.551, 3.796), in the historical left-facing profile frame (+x rearward, +y up, Pc x=0). They remain technical working coordinates, not a replacement for the preferred head appearance.

## Limbs and digits

| Segment | Length | Status |
| --- | --- | --- |
| Shoulder S → elbow E | 0.62H | Inherited provisional, Arm Candidate C |
| E → wrist W | 0.72H | Inherited provisional |
| W → finger base Kb, palm | 0.22H | Current hand construction |
| Kb → longest fingertip Tf | **0.26H** | User-confirmed |
| W → Tf, total reach | **0.48H** | User-confirmed; sum of palm and fingers |
| Hip H → knee K | 0.59H | Inherited provisional, Hind Leg Candidate C |
| K → hock Hk | 0.82H | Inherited provisional |
| Hk → ball T | 0.59H | Inherited provisional |
| T → toe end Th | 0.27H | Inherited provisional |

Historical shoulder/hip joint offsets from their spinal anchors are 0.08H forward in profile; validate their projection when constructing views. Segment lengths stay constant across upright and all-fours poses; joint angles change. Old rig-specific arm rotation settings are not mandatory for waving or gripping.

Hands have **three fingers plus one opposed thumb**. Resolve taper, relative finger lengths, clustered fan, and thumb opposition in the final paw study. Feet have three toes and elongated soles; definitive outlines remain unfinished. Do not promote an exploratory paw sheet because its digit count is correct.

The hind limb follows a **backward-Z construction in the left-facing profile reference**: hip-to-knee forward/down, knee-to-hock back/down, hock-to-ball forward/down. The apparent letter shape mirrors in the opposite profile; the anatomical relationships remain the same. Preserve this folded squirrel structure when adding volume. A frontal outline alone cannot certify this depth relationship.

**User-confirmed foot contact:** in a relaxed standing pose, Gypsa rests on her entire foot, including the heel. During walking and stretching, the supporting foot can lift its heel slightly, with contact toward the ball and toes, as illustrated by the profile SVG. Heel contact changes with the action; do not impose a permanently raised heel on standing poses. Adjust joint angles to establish ground contact while preserving segment lengths. The SVG's raised-heel arrangement is a construction reference for that pose, not the sole standing-foot configuration.

## Proportion validation

Retire early approximate “heads tall” descriptions as proof of compliance. Declare the structural H, annotate skull/chin and body landmarks, and measure projected or reconstructed segment lengths appropriately. Do not claim a hidden joint passes from appearance alone. Full-body renders have not automatically passed because older reviews say so. Ear-tip height is affected by ear pose and remains provisional.

## Tail identity and attachment

Neutral gesture is **Relaxed S-Sweep B**, with **Soft Stylized B** fur. The root continues from the terminal spine/sacral region immediately above the rump; it never attaches to the side of a thigh, hip, or rump surface. The visible fur base blends broadly into the body without a narrow stalk, hourglass pinch, seam, or abrupt flare.

The lower sweep is smaller; the broad upper sweep relaxes away from the body, descends toward the tip, and ends in a subtle backward reversal. Avoid a tight spiral or question-mark hook. The pack fits the natural tail cavity rather than forcing the tail into shape.

### Working structural curve

Structural length Tr→Tst is approximately **4.08H**, measured along the curve, excluding fur beyond the tip. Use cubic Bézier segments, not straight lines through these landmarks. In this table +x is rearward and +y upward; positions are relative to Tr, handles relative to their landmark.

| Point | Position (H) | Incoming handle (H) | Outgoing handle (H) |
| --- | --- | --- | --- |
| Tr, root | (0, 0) | — | (0.150, −0.105) |
| Tt1, low root bowl | (0.283, −0.170) | (−0.180, 0) | (0.420, 0.100) |
| Tt2, rising inflection | (0.425, 1.199) | (0.140, −0.420) | (−0.140, 0.480) |
| Tt3, structural apex | (1.006, 2.181) | (−0.340, 0) | (0.400, 0) |
| Tst, structural tip | (1.265, 1.529) | (0.200, 0.500) | — |

**User-confirmed initial direction:** the tail dips slightly downward from the root into the low root bowl before rising into the S-sweep. This supersedes legacy prose describing an immediately upward departure. The stored curve follows the accepted direction; its exact coordinates, dip depth, and integration with body volume still require visual construction validation.

### Fur envelope

**Accepted description and development source:** `Gypsa Canonical Tail Fur Envelope.png` supplies useful overall envelope shape and root-to-tip fur lean. Its sharp spikes explain direction; they are not the intended final fur finish. Translate them into softer directional groups while retaining the envelope, taper, and distal lean. The straightened diagram describes distribution along the tail, not a replacement for the curved S-sweep pose.

Its pixel labels are source construction units, not final export dimensions. Using the working structural length 1600 source px = 4.08H gives 40 px = 0.102H, 160 px = 0.408H, 1400 px = 3.57H, and 1760 px ≈ 4.49H. Use the labeled relationships rather than measuring distances on the displayed raster; validate the working H scale during final construction. Replace pixel annotations with H in the final reference sheet. The source's exaggerated spikiness and pixel labels keep it a development reference rather than a finished renderer-facing plate.

- Longer than body fur, in soft directional groups with controlled irregularity, not individual scraggly hairs or a plush tube.
- Fur leans distally toward the tip along the **local** root-to-tip tangent, regardless of whether that tangent points left, right, up, or down on the canvas.
- Historical working envelope: root fur 0.102H, mature fur 0.408H, gradual root transition over 0.408H of arc length; mature distal lean approximately 45 degrees on either side of the centerline.
- Taper begins around 3.57H along the centerline and continues smoothly beyond Tst; fur extends approximately 0.408H beyond the structural tip. Approximate total fur-extended axial reach is 4.49H, not a vertical height or straight root-tip distance.
- Volume develops gradually at the root, is strongest in the middle/upper tail, and tapers toward the distal end. No sudden loss of lower-tail volume.

### Projection and the recent front renders

Profile reveals the neutral S most clearly. Three-quarter view introduces overlap and foreshortening. Direct front view projects much of the S into depth near the body centerline; the fur envelope remains broad and bushy, with legitimate occlusion by body and pack.

**Isolated neutral tail, viewed from the front:** before adding the body, construct a tall, relatively narrow, roughly rectangular fur envelope with softly irregular sides and rounded transitions at its upper and lower limits. This describes the overall projected mass, not a literal rectangle with straight edges or square corners. The upper limit follows the highest fur-covered part of the upper S sweep; the lower limit follows the lowest fur-covered part of the lower sweep. Include fur beyond the structural centerline at both limits. The distal tail tip is not necessarily the highest or lowest point of this projection. Overlapping portions at different depths must not be mistaken for a tail that narrows abruptly toward the bottom of the image.

**Placement behind the body:** the intended neutral upper sweep reaches a little below the center of the head. Distinguish the structural apex from its outer fur boundary when annotating the final construction. The tail can therefore be visible beside the torso and up alongside the lower head where the projected envelope extends beyond the body. First establish the complete tail, then occlude it with the body and equipment. Do not remove lower-tail volume to achieve occlusion or prescribe identical visible strips on both sides regardless of pose. Validate the actual exposed width and upper/lower limits with the completed body.

**Consistent thickness across views:** treat the straightened tail as having an approximately round fur envelope at each station along its length. At a given station, transverse thickness should be consistent when viewed from the side, above, or below; do not make a broad profile tail into a thin ribbon in front view. This does not make every station equally thick: retain the root transition and distal taper. Wrap the same envelope around the S curve and derive front and three-quarter projections from that volume, preserving local root-to-tip fur lean.

**Overlap and shading:** the upper sweep can shade lower portions depending on light direction and depth. Restrained flat shadow shapes are accepted in the Rendering Standard; establish the silhouette and overlap independently of shading. The tail's anatomical underside carries the muzzle/belly reddish-brown accent specified there. This permanent marking follows the tail surface and is separate from shadows; neither implies reduced volume.

**User-confirmed diagnosis:** the tail is present in the recent Front Pose renders, but tapers too drastically and becomes invisible from the shoulders downward. Those images are not valid envelope masters. Correct the existing tail's taper, volume, and depth relationships. Do not interpret the problem as an absent tail, add a duplicate, or swing it sideways merely to expose an S. Exact visible width below the shoulders must be validated across views, not invented as a fixed strip on both sides.

Thinking, Puzzled, and Inquisitive curve explorations are provisional until fur and volume are validated. Other extended tail expressions remain undeveloped. Do not import their historical curves as approved final silhouettes.

## Outstanding construction

Validate body soft tissue over the rig, final paw outlines, the accepted downward-then-rising tail root's depth and body integration, current front/three-quarter tail envelope, and Squirrel Mode with the same limb lengths. No complete body turnaround is approved in the new packet yet.
