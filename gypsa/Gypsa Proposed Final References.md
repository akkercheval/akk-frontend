# Gypsa Proposed Final References

**Status: documentation consolidation and three-quarter head studies in progress; no final reference image approved.**
**Reference-set version: 0.1 draft.**
This is the working progress, decision, and provenance record. It is not renderer-facing canon. The original filename's typo (`Propsed`) has been corrected.

**Goal:** Create a set of markdown documents and raster images which, when combined, create a complete, consistent description of Gypsa, ensuring consistent renders.  

## Manual baseline and shared inner-ear brown — 2026-10-30

- User manually corrected colors and smoothed the crown's upper curve. Preserve the supplied image as the new working baseline: `Rendering/Gypsa User Edited Crown and Shared Ear Brown Baseline 20261030.png`, copied without image modification from `ChatGPT Image Oct 30, 2026, 10_48_54 AM.png`.
- Inner ears now share canonical warm-fur brown #B97A3D with muzzle/belly, eyebrows, and tail underside. The former #E7B37A inner-ear token is superseded. D5 v0.8 owns this palette decision; D2 ear wording records its placement. Archived references and historical study reports remain unchanged.
- Manual crown cleanup supersedes the corresponding generated curve. This is a working baseline, not approval of all anatomy, linework, export quality, or every pixel color. Crown finalization and cross-view validation remain pending.

## Head decisions — 2026-10-29

This record supersedes earlier pending-iris statements in the historical entries below. Active specifications are Head and Expression v0.10 (with the 2026-10-30 ear-color addendum) and Rendering Standard v0.8.

- User makes solid dark-brown #533923 irises canonical. No texture, mottling, gradients, or lighter bands. Keep black pupils distinct, with white catchlights. The preceding user request sets pupil span at about 75% of iris width/height for this head study; measured validation remains pending.
- Three upper-lid lash details per eye, curved and tapered toward the outer corner, with perspective-appropriate far-eye foreshortening; no lower lashes.
- Current slim, filled, gently arched, softly tufted eyebrows are canonical in shape, using #B97A3D and the already accepted inward outline at 75% standard weight. The prior 25% thickness reduction is historical construction context, not a recurring instruction. Current generated orange drift is not approved.
- Gray clearance below both eyes, including the far eye and lower corners, must remain visibly continuous between eye and fur-transition outlines. Adjust marking boundaries without changing eye or muzzle anatomy. No new colored crescent and no fixed pixel width yet.
- Approved ear placement and rotation are preserved for this view: near anatomical left ear shows interior; far anatomical right ear shows gray back. Smooth tapered outlines follow the original ear reference. Some near-ear interior tufts still need cleanup.
- Latest study: `Rendering/Gypsa Head Black Pupils 75 Percent Study 20261029.png`. Useful feature examples do not make the entire image canonical. Open defects include palette drift, nonuniform irises, gradients/nose gloss, uncertain far-eye clearance, and slight interior transparency. No image promoted to Approved Reference by this documentation update.
- Crown wording reconciliation is complete in D2 v0.10; exact landmarks remain pending. Remaining documentation work includes measured outline/clearance checks at final display size and feature-specific approvals for the eventual master. Do not introduce new anatomical measurements from an unvalidated render.

### Crown reconciliation — 2026-10-29

- Active direction: broad, softly layered squirrel-fur sweep originating just behind the anatomical left ear, blending smoothly from the groups nearest that ear into a fuller main mass and a shortened, soft front curl. Preserve both visible brows and the rounded skull; no tall crest or jagged fringe. Use anatomical orientation rather than a camera-dependent clockwise instruction.
- The user's old tuft attachment, preserved as `Rendering/Gypsa User Tuft Shape Reference 20261029.png`, supplies overall shape only; the desired tuft is fuller/larger. `Rendering/Gypsa User Edited Head Baseline 20261029.png` supersedes earlier generated hair details the user manually removed. Later head studies are working descendants, not pixel-exact or final references.
- Preserve the accepted shorter reach from the smooth-crown review subject to the later manual cleanup; annotate its anatomical endpoint on the validated master. No new numerical height, width, tip position, or mandatory lock count is introduced.
- **Superseded historical October 9 construction, retained for provenance only:** C0 centered between the ears at the rear crown; front-view clockwise flow initially toward image-right/Gypsa's left; longest tip T on the facial midline; `y(T) = y(Etop) + 0.5 * (y(Llow) - y(Etop))`, where Etop is the neutral eye-opening top and Llow the lowest center-facing lash contour. The former paired-eye calibration and midline placement are not active requirements. Do not use them to lengthen the current curl or relocate its origin.
- Removed those historical instructions from renderer-facing D2 and replaced its validation checklist with origin/sweep/curl/rear-blend annotation across views. Earlier tracker entries remain historical; this decision and the active C6 row govern current work.

## Proposed Markdown Documentation  
| Proposed document	| Contents |  
| -- | -- |  
| 1. START HERE — Gypsa Reference Guide.md | Brief identity and personality; inventory of approved images and their roles; reference-set version; instructions for using the set; a short render-request template covering pose, expression, camera, equipment, and intended placement. |  
| 2. Gypsa Head and Expression.md | Skull, muzzle, jaw, eyes, brows, ears, crown; how these forms behave across views; resting versus attentive ears; eight expression definitions. Explicitly distinguish camera direction from ear attention. |  
| 3. Gypsa Body and Tail.md	| One consistent proportion system; body landmarks and limb lengths; hand and foot construction; tail root, centerline, volume, fur direction, and projection; upright and eventual all-fours behavior. |  
| 4. Gypsa Equipment.md	| Backpack, bandana, and walking stick: shape, scale, attachment, materials, markings, held/stowed arrangements, and permitted occlusion. |  
| 5. Gypsa Rendering Standard.md | Complete palette and color placement; flat-color treatment; outline calibration; fur-edge language; transparency; small-size simplification; export requirements and a concise acceptance checklist. |  

All documents should be consolidated specifications, not abbreviated collections of the old documents. Each fact should have one owner. Historical reasoning, rejected alternatives, generator instructions, milestones, and project status should remain available elsewhere.  
The set should be self-contained enough that a renderer does not need to follow links into Exploration to discover an essential rule.  

## Proposed Reference Images  
| Sheet | What it should show |  
| -- | -- |  
| 1. Head turnaround | Large front, three-quarter, and true profile views of the same completed head. Identical muzzle volume, skull, eyes, ears, and crown across rotations. |  
| 2. Head construction details | Muzzle projection and jaw relationship; the same ears in resting and attentive orientations; crown origin, sweep, longest-tip landmark, and rear taper. Use corrected crops or diagrams without unrelated faulty features. |  
| 3. Body turnaround | Front, three-quarter, profile, and back without backpack or stick obscuring the anatomy. Include compact hand/foot detail insets: open hand, grip, foot profile, and toe arrangement. |  
| 4. Equipped character | Consistent front, three-quarter, and rear views showing how the approved equipment fits. Include held-stick and stowed-stick configurations. |  
| 5. Tail construction | Profile master, front and three-quarter projections, root integration, and a clear fur-flow detail. Any visible body context must use current proportions. |  
| 6. Expressions | The eight established expressions applied to the approved head. Expressions change behavior without shortening the muzzle or redesigning the ears. |  
| 7. Equipment details | Backpack views and attachments; acorn flap, leaf patch, functional acorn cookie cutter tied to the hanging loop; bandana knot and wrap; walking-stick silhouette and scale. |  
| 8. Squirrel Mode (later) | Validated all-fours profile and three-quarter poses with the pack and stowed stick. Existing rigs and correction history are foundations, not a complete finished reference. |

Keep panels large enough to inspect. Seven crowded, unreadable sheets would be worse than additional clear files. Preserve individual source drawings outside the renderer-facing folder. Assemble sheets from individually validated views; do not ask one generation to invent a whole consistent turnaround.

## Current milestone and sequence

1. Archive the entire previous Approved Reference set without modifying its contents.
2. Draft the five consolidated documents, reconcile known conflicts, and record unresolved questions here.
3. Review the documents together until they are consistent and sufficiently complete. Resolve the outline calibration question through direct comparison before finalizing the rendering standard.
4. Only after the documentation milestone, complete a correct three-quarter head, preserving the preferred muzzle. Validate profile next, then front, before assembling the head sheet.
5. Build the remaining reference sheets from approved components; validate each panel before promotion.
6. Produce website artwork and update website documentation imports. The user will manage the website update; broken old imports during this transition are explicitly acceptable. No publication is planned before the milestone.

Documents in `Approved Reference/` are currently **draft specifications**, not a claim that final approval has occurred. No legacy image is automatically promoted. The intended final folder contains only mutually consistent documents and images that are safe to imitate in everything they visibly depict.

## Documentation tracker

| ID | Deliverable | Status | Remaining acceptance work |
| --- | --- | --- | --- |
| D1 | [START HERE — Gypsa Reference Guide](Approved%20Reference/START%20HERE%20%E2%80%94%20Gypsa%20Reference%20Guide.md) | Initial draft | Review identity, ownership, rendering workflow, and image registry |
| D2 | [Gypsa Head and Expression](Approved%20Reference/Gypsa%20Head%20and%20Expression.md) | v0.10: current crown reconciled; iris, lashes, brows, and eye clearance recorded | Validate far-cheek occlusion, smoother brow transition and inherited measurements; annotate and validate ears/crown across views; validate expressions and eye clearance on the completed head; palette ownership remains with D5 |
| D3 | [Gypsa Body and Tail](Approved%20Reference/Gypsa%20Body%20and%20Tail.md) | v0.6: front-tail projection and cross-sectional thickness expanded; neck, limbs, and tail construction wording reviewed | Validate inherited geometry, tail root integration and isolated/occluded tail projections; finalize paw outlines; add neck width/depth from validated front/profile construction |
| D4 | [Gypsa Equipment](Approved%20Reference/Gypsa%20Equipment.md) | v0.4: equipment wording reviewed; user-edited bandana orientation and occlusion/validation accepted; canonical stick measurements retained | Resolve remaining component details; validate bandana rear drape, right-side carry clearance, and future drawings |
| D5 | [Gypsa Rendering Standard](Approved%20Reference/Gypsa%20Rendering%20Standard.md) | v0.8: inner ears share #B97A3D warm fur; solid #533923 irises; eyebrow outlines at 75% and fur-transition outlines at 40%; gray eye clearance required | Review remaining tokens; validate underside boundaries/shadow tones and eye clearance; compare outline definitions directly; validate small-size treatment |

## Decisions and documentation conflicts

Latest explicit user decisions below override contradictory archived text. The archive remains historical evidence, not a competing active authority.

| ID | Topic | Resolution / current understanding | Status and owner |
| --- | --- | --- | --- |
| C1 | Hand measurements | User confirms palm 0.22H, fingers 0.26H, total wrist-to-tip 0.48H. Old 0.24H finger / 0.46H total values are superseded. | Resolved in D3 |
| C2 | Ear attachment and attention | Roots remain at the lower side mounting position in every orientation. True neutral ears face either side. Ears typically rotate slightly forward or toward the object of attention. Rotation never raises or relocates the roots. Camera direction does not dictate ear orientation. | Ear section accepted in D2 v0.5; landmark annotation and consistent rendering pending |
| C3 | Front-view tail | The tail is present in the recent Front Pose images. The user identifies excessive taper that makes it invisible from shoulders downward; neither is a correct tail-envelope master. Correct taper/volume and projection of the existing tail; do not add a second tail or force a lateral S solely to expose it. | Diagnosis resolved in D3; image correction pending |
| C4 | Proportions | Early approximate total-head-height notes and visual “passes” are not validation. Use a declared structural H, landmark overlays, and pose-aware measurement. | Rule resolved in D3; render measurements pending |
| C5 | Outline measurement | User wants direct analysis before choosing the correct interpretation. Historical 2.35% rule uses conflicting spans in different docs. Record both definitions; do not silently settle the denominator or claim a calibrated pass. | OPEN, D5 |
| C6 | Crown | Current direction: origin just behind anatomical left ear, broad smooth layered sweep, fuller mass and shortened soft curl, both brows visible. User manual cleanup supersedes deleted earlier details. October 9 rear-centered origin and eye/lash tip formula are historical only. | Wording reconciled in D2 v0.10; anatomical landmarks and consistent rendering across views pending |
| C7 | Muzzle/skull appearance | User accepts the new muzzle wording and the no-hair reference's overall skull and cheek fullness. Correct the exposed far cheek at that particular angle and slightly round the brow transition toward the early muzzle study's gentle rising curve. Historical measurements came from another drawing and remain provisional. | D2 v0.2; visual/cross-view validation pending |
| C8 | Tail root direction | User confirms a slight downward dip from the root before the rise. Legacy immediately-upward prose is superseded. Exact curve coordinates, dip depth, and body integration still require visual validation. | Direction resolved in D3 v0.4 |
| C9 | Color and finish claims | Previous reviews called shaded renders flat and judged palette by eye. Exact colors and alpha need verification; old appearance images do not establish a finish pass. | D5; final checks pending |
| C10 | Reference paths and website imports | Several old filenames/relative paths are stale. Consolidation separates the active packet from historical sources. Website imports will temporarily break with user authorization. | Migration accepted; website update deferred to user |
| C11 | Complete color map | Gray eye surrounds and light-brown brows remain confirmed. Irises are dark brown slightly darker than leather; stick shares leather #6B4A2E; tail underside shares muzzle/belly reddish brown #B97A3D, replacing gray accents. Exact iris/facial refinement, marking boundaries, shadow tones, eye subregions, and cord/hardware remain for validation. | Partially resolved, D5 v0.4 |
| C12 | Equipment detail choices | Stick-carry side resolved as wearer's right. Final bandana drop, cap/patch detailing, and exact knot inventory on the branch remain unsettled. Preserve established structure; annotate remaining choices before final plates. | Partially resolved; remaining details OPEN, D4 |

The old `Rendering/Analysis - Front Pose Ear Edit 202610111023.md` contains an incorrect missing-tail diagnosis, unsupported approximate proportion passes, and overconfident color/finish claims. Its corrective prompts must not be reused as current instructions. This tracker and the new documents supersede those claims; the file remains historical.

## Image progress and development sources

All eight deliverables below are **not yet approved**. Source filenames refer to the archive unless another folder is named. A source can be useful without being safe to supply as unrestricted rendering context.

| ID | Deliverable | Sources and necessary work | Status |
| --- | --- | --- | --- |
| I1 | Head turnaround | Preferred no-hair muzzle; dedicated muzzle studies; `Rendering/Gypsa Head with Crown Tuft.png`. Complete one three-quarter head, then matching profile and front. Protect muzzle through every local edit. | Waiting for documentation milestone |
| I2 | Head construction details | Ear study, attentive 10:23 render, crown specification and Hair explorations. Annotate fixed low roots, changing orientation, crown flow/tip, and muzzle volume. Correct or omit every unrelated faulty feature. | Not started |
| I3 | Body turnaround and paw insets | Archived rigs/dummies and Arms, Back, Hind Legs, Digits, Hands explorations. Validate proportions; settle hand/foot outlines. Do not copy obsolete figure labels. | Not started |
| I4 | Equipped character | Provisional front/back/waving renders plus approved future I1/I3/I5/I7. Validate pack fit, held/stowed stick, head consistency, and tail. | Not started |
| I5 | Tail construction | Profile, neutral curve, `Gypsa Canonical Tail Fur Envelope.png`, three-view study, sanitized tail prompt. Preserve the envelope source's shape and root-to-tip lean while softening spikes into final fur groups; convert labeled pixel units to H using a validated construction scale. Fix old body landmarks and front taper; validate root integration with the accepted downward dip before rising. Non-neutral curves await fur validation. | Not started |
| I6 | Expressions | Existing eight-expression logic; rebuild on I1. Old pointed ears/short muzzles cannot carry forward. | Not started |
| I7 | Equipment details | Standalone backpack and thickened stick; bandana specification and feature sources. Validate dimensions/finish and create clear front knot/tied-end and rear triangle views, both with and without backpack occlusion. | Not started |
| I8 | Squirrel Mode | All-fours rig and Full Body explorations/correction history. Validate digits, limb attachments, gear, and tail using the same segment lengths. | Deferred |

Real-squirrel photos belong in development research, not the final stylized packet. Retain rejected candidates and original renders outside Approved Reference for history. Rebuild the old Character Sheet v2.0 / mixed Reference Images only if needed later; do not create another omnibus sheet before the focused set agrees.

## Archive and intermediate-work record

- Snapshot destination: `Older Reference Revisions/Approved References as of 20261026/` (user-created name retained).
- Move every current item from `Approved Reference/` into that snapshot, preserving bytes and filenames. Archive verification is recorded in `Rendering/Documentation Consolidation/archive-manifest.json`.
- The snapshot's internal relative links may reflect the old directory position. It is an immutable historical snapshot; new active documents do not depend on those links for rendering instructions.
- Technical generators, raw Bézier data, historical journals, and exploration sheets remain outside the new renderer packet.
- Each new candidate should have a saved prompt, source list, intended single change, before/after review, and decision recorded here or linked here. Intermediate candidates stay in Rendering; approval is explicit, never inferred from recency.
- No images are generated, corrected, or promoted during this documentation step.

| Step | Result | Evidence / next action |
| --- | --- | --- |
| Tracker consolidation | User decisions and proposed deliverables recorded | This document |
| Legacy reference archive | Complete: 51 files moved and SHA-256 verified | [Archive manifest](Rendering/Documentation%20Consolidation/archive-manifest.json) |
| Five-document draft | Initial content prepared as v0.1 | D1–D5 above |
| Consistency and link check | Initial checks complete | Exactly five active Markdown drafts; 19 local links resolve; 51 archived files still match SHA-256; superseded hand values absent from active drafts. Open design questions remain listed above. Website build intentionally not run because archived imports are expected to break. |
| Documentation approval | Pending | Resolve open questions before image production |

### Draft source map

All sources below are historical development evidence, not additional active renderer instructions. Files named without a directory are in [the archived snapshot](Older%20Reference%20Revisions/Approved%20References%20as%20of%2020261026/).

| Draft | Main source material and consolidation treatment |
| --- | --- |
| D1 | Character Bible, Production Guide, Canon Summary, Project Status; separates identity/use from history and pending work |
| D2 | Head Construction Guide, Canonical Muzzle and no-hair head, Ear Specification, Crown Fur Specification; Eyes/Eyebrows/Head/Hair explorations and Muzzle Correction notes; current user ear instructions override higher mounting |
| D3 | Geometry Table, Joint System, Body Construction, Body Dummy, tail design/envelope/sanitized prompt; Arms/Back/Hind Legs/Digits/Hands/Tail explorations; current hand and front-tail corrections override older records |
| D4 | Backpack, Bandana, Walking Stick and Measurements; uses the stick specification's 3.45H fork split and thicker diameters rather than obsolete lower bounds or thin-render measurements |
| D5 | Production Guide, updated Ear Specification, equipment palettes, external project line-weight standard; preserves core tokens and records incomplete color mapping/outline calibration explicitly |

The existing [project-wide line-weight standard](../style-guide/line-weight/line-weight-standard.md) was not changed. Future resolution must reconcile that authority as well as D5. All original snapshot files remain byte-identical, so their contradictory wording is intentionally retained as history rather than rewritten in place.

## Proposed initial website art (recommendations, not new canon)

| Priority | Illustration | Intended use |
| --- | --- | --- |
| W1 | Everyday greeting portrait/bust, potentially slight three-quarter | Header and Home, currently 48–64 px; optional About crop |
| W2 | Full-body three-quarter explorer with equipment and readable tail | Making of Gypsa and Friendly Forest hub |
| W3 | Gently puzzled compact pose | 404, if the user chooses to replace the joke squirrel |

Produce transparent masters and derived display exports; inspect the greeting at actual 48–64 px sizes. Defer seasonal sets, walking scenes, and hobby-specific scenes until needed. Acorn remains the recommended small site icon. These art priorities follow the documentation and head milestones, not precede them.

## Completion gates

### User-edited working baseline and eyelash study — 2026-10-29

- User manually removes unwanted hair/eye details and designates [this attachment copy](Rendering/Gypsa%20User%20Edited%20Head%20Baseline%2020261029.png) as the new working baseline. Preserve it intact; do not restore erased details from previous studies.
- User requests two additional upper lash details per eye, three total per eye, with no other changes. Produced [three-lash study](Rendering/Gypsa%20User%20Baseline%20Three%20Upper%20Lashes%20Study%2020261029.png); [prompts and review](Rendering/Gypsa%20User%20Baseline%20Three%20Upper%20Lashes%20Study%2020261029.md). Final lash count is visually present, but exact pixel preservation outside lashes is not certified. Image awaits user review.

### Crown refinement — smooth sweep study

- On 2026-10-29 the user supplies [an older tuft shape reference](Rendering/Gypsa%20User%20Tuft%20Shape%20Reference%2020261029.png), requesting its overall shape at a larger size, with origin still just behind her anatomical left ear. The reference applies to tuft shape only. Produced [reference tuft study](Rendering/Gypsa%20Three%20Quarter%20Head%20Reference%20Tuft%20Study%2020261029.png); [prompt and review](Rendering/Gypsa%20Three%20Quarter%20Head%20Reference%20Tuft%20Study%2020261029.md). Candidate awaits review.
- User authorized rounding the three near-left-ear crown groups, softening their separations, and easing the front hook while preserving height, volume, and approved endpoint. Produced [rounded crown study](Rendering/Gypsa%20Three%20Quarter%20Head%20Rounded%20Crown%20Study%2020261028.png); [prompt and review](Rendering/Gypsa%20Three%20Quarter%20Head%20Rounded%20Crown%20Study%2020261028.md). Contours are softer; exact endpoint preservation is not certified and image approval remains pending.
- User accepts the longest front-curl endpoint in the smooth crown study. Preserve that position while lengthening the three crown groups closest to her anatomical left ear into a smoother transition. Produced [crown transition study](Rendering/Gypsa%20Three%20Quarter%20Head%20Crown%20Transition%20Study%2020261028.png); [prompt and review](Rendering/Gypsa%20Three%20Quarter%20Head%20Crown%20Transition%20Study%2020261028.md). New image awaits review; approved endpoint still needs anatomical annotation for other views.
- Latest user direction: relatively smooth sweep starting just behind Gypsa's anatomical left ear; less spiky, shorter between the eyes, with a natural curl rather than a mohawk or spear-like tip. This supersedes the earlier centered-origin instruction where conflicting; the exact revised tip landmark needs review after the study.
- Produced [smooth crown study](Rendering/Gypsa%20Three%20Quarter%20Head%20Smooth%20Crown%20Study%2020261028.png); [prompt and review](Rendering/Gypsa%20Three%20Quarter%20Head%20Smooth%20Crown%20Study%2020261028.md). Image approval remains pending. The prompt's pixel shortening is not a new canon measurement.
- Work sequence: crown first, ears/rotation next, short eyelashes last. Do not alter other accepted features to compensate for the crown.

### Rendering review decision record — fur-transition outlines

- User accepts the brown-gray fur-transition outline at 40% of standard outline thickness and makes visible gray separation from both eye outlines canonical. The lines must not touch or merge, including at the far eye and eye corners.
- D5 v0.6 owns the line color and relative weight; D2 v0.8 records the anatomical/eye-surround constraint. Preserve muzzle volume and eye placement when adjusting marking boundaries for clearance.
- [Fur-boundary study](Rendering/Gypsa%20Three%20Quarter%20Head%20Fur%20Boundary%20Study%2020261028.png) supplies the accepted visual direction. Acceptance of the treatment does not certify exact line weight or far-eye clearance in that generated image, or approve its crown/ears. Validate both eyes and final-size readability in the final reference.

### Rendering review decision record — eyebrow outlines

- User accepts the outlined eyebrows in [the eyebrow study](Rendering/Gypsa%20Three%20Quarter%20Head%20Eyebrow%20Outline%20Study%2020261028.png) and makes the treatment canon.
- D5 owns the finish rule: #1E1E1E, approximately 75% of standard head/crown outline thickness, entirely inside the original brow contour to preserve overall size. D2 owns brow shape and expression. Absolute outline calibration remains unresolved.
- Appearance acceptance does not establish pixel-exact compliance of the generated study or promote its crown/ears to canon.
- The subsequent fur-transition study was accepted: 40% standard weight with visible gray clearance from both eye outlines. See the fur-transition decision record and D5 for the current canonical rule.

### Rendering review decision record — shadows and palette, 2026-10-28

- User approves restrained flat shadow shapes where appropriate, including tail overlap. D5 v0.4 preserves the prohibition on gradients/airbrushing and distinguishes shadows from permanent fur markings.
- Irises are dark brown slightly darker than backpack leather #6B4A2E. Assistant-selected #533923 is provisional for the requested three-quarter head color study, not a user-approved hex.
- Walking stick shares the backpack leather base brown #6B4A2E.
- Tail accent is muzzle/belly reddish brown on its anatomical underside, replacing recurring light-gray accents. Shared working token #B97A3D; refine jointly if facial palette changes. Marking follows the tail surface through curves, not screen-bottom or lighting. Exact boundaries require final construction.
- User explicitly requests one head-only three-quarter color study before the full documentation milestone. This is a palette experiment, not approval of a canonical head master.
- Produced [head color study](Rendering/Gypsa%20Three%20Quarter%20Head%20Color%20Study%2020261028.png); [prompt and review](Rendering/Gypsa%20Three%20Quarter%20Head%20Color%20Study%2020261028.md). Brown irises and warm filled brows are visible; crown/ears and non-flat finish remain unvalidated. No promotion to Approved Reference.

### Equipment review decision record — bandana and validation

- User's edits to D4 specify a square knot at the front of the throat, two tied ends over the upper chest, and the triangle point draping over the back. Preserve that wording; the old description placing the triangle over the chest is superseded.
- With the backpack worn, shoulder straps pass over the band at the shoulders and the top of the pack partially covers the rear triangle point. Validate rear drape both with and without the pack in I7.
- User accepts the occlusion and validation section. D4 v0.4 completes the descriptive equipment review; exact triangle drop, end lengths, folds, other unresolved component details, and image validation remain pending.
- Earlier generated grip studies are not authorities for bandana construction or a complete equipment pass.

### Equipment review decision record — stowed carry and website travel direction

- User establishes straps on Gypsa's anatomical right side of the worn backpack. Attachment is fixed, not camera-dependent.
- Stow when preparing for and during all-fours running. Otherwise the stick is held or propped against a suitable object, such as a tree; upright preparation for running is a valid stowed transition.
- For the user-described right-positioned website text boxes, use leftward travel as the default departure/follow-me composition. Stage Gypsa with her left side nearer the camera so the right-side stick is farther away. A slight turn into depth can communicate running away; screen-left motion alone does not establish depth.
- Leftward travel is a composition default, not an anatomical restriction or permission to mirror asymmetric equipment. Camera/pose may reveal the right-side stick; do not promise complete concealment or relocate straps to hide it.
- D4 v0.3 records the fixed side and behavior. Validate stick clearance in the final Squirrel Mode construction; no website layout or image was changed.

### Equipment review decision record — walking-stick thickness, 2026-10-28

- User retains all current canonical measurements, including the 0.14H grip diameter, existing diameter ranges, and 2.56H grip-bend center. Generated studies have inconsistent scale/thickness, and the controlled vector's maximum bend is misplaced at 2.6707H despite its labeled 2.56H interpolation point. Correct construction/rendering before reconsidering canon.
- User remains concerned the canonical stick may look too thick. Revisit only after a good, consistent, fully canonical render establishes the correct hand/stick scale and bend placement.
- Conditional proposal for that later review: **0.12H grip diameter, with diameters varying from 0.14H to 0.07H across the entire stick**. These are diameters, not circumferences. Exact distribution along the stick is not yet specified. This is a deferred option, not an approved specification or an instruction for current renders.
- This latest proposal supersedes the earlier candidate C profile as the option to consider later; candidate C's 0.135/0.12/0.105/0.08H values remain historical comparison data only.
- Evidence: [C measurement audit](Rendering/Walking%20Stick%20Thickness%20Comparison%2020261028/C%20Measurement%20Audit.md). No canonical numerical values were changed.

### Equipment review decision record — backpack

- User accepts the backpack description with two corrections, incorporated in D4 v0.2.
- The hanging object is an actual functional acorn-shaped cookie cutter tied to the hanging loop, not a decorative charm. Show an open metal band with cutting depth as the view permits; retain the short knotted cord and grandmother keepsake provenance.
- Diamond-lattice quilting belongs only on the acorn flap's cap. The nut portion is smooth, unquilted leather.
- Final equipment plates must demonstrate these details; no existing image is approved by the wording review.

### Body review decision record — front-tail volume and projection

- User describes the isolated neutral front-tail envelope as tall, narrow, and roughly rectangular, bounded by the upper and lower S sweeps. D3 v0.6 specifies soft fur edges and fur-covered extrema rather than literal corners or the distal tip as the bounding points.
- Upper sweep is intended a little below head center, allowing potential tail visibility beside the torso up to the lower head. Annotate structural apex versus fur boundary in construction. Establish the entire tail before body/equipment occlusion; validate exposed areas without forcing fixed bilateral strips.
- User specifies consistent thickness around a straightened tail. Use an approximately round envelope at corresponding length stations, retaining root transition/distal taper; derive views from the same volume rather than flattening the front tail.
- Upper-over-lower sweep shadow is a depth cue dependent on lighting. Subsequent finish review accepts restrained flat shadow shapes wherever appropriate; exact tones remain pending. No gradients are approved.
- I5 should include isolated front/profile/three-quarter tail projections plus body-context occlusion checks. No image has been edited or approved by this wording update.

### Body review decision record — tail fur envelope

- User accepts the fur-envelope description and selects `Gypsa Canonical Tail Fur Envelope.png` as a development reference for overall envelope shape and fur direction. The source explicitly shows root-to-tip flow; retain this local distal lean along the curved tail.
- User finds the drawing spikier than desired. Preserve its structural guidance while replacing sharp spikes with softer fur groups in the final reference; do not copy its finish literally.
- Source measurements are labeled in pixels. D3 v0.5 records their conversion using the inherited working length 1600 source px = 4.08H. Validate that scale before finalizing H annotations; do not measure the schematic raster as if it were a calibrated drawing. No image was edited or promoted.

### Body review decision record — tail attachment and initial direction

- User says the root attachment and initial curve-direction wording looks good. Root attachment wording is accepted: continuation of the terminal spine above the rump, with a broad integrated fur base.
- User explicitly confirms the slight downward dip before the rise. C8 is resolved and D3 v0.4 supersedes the old immediately-upward wording. The numeric curve is unchanged; exact coordinates, dip depth, and body integration remain subject to visual validation.

### Body review decision record — legs and foot contact

- User corrects the leg description to backward Z, as seen in the left-facing profile SVG. Anatomical sequence remains hip-to-knee forward/down, knee-to-hock back/down, hock-to-ball forward/down; opposite profile mirrors its screen appearance.
- User specifies the entire foot grounded when standing, with a slightly lifted heel during walking and stretching, as in the SVG. D3 no longer prescribes raised heels for every pose. Validate ground contact through joint angles while retaining segment lengths.
- User accepts the remainder of the limb/digit wording. Detailed paw outlines and numerical/visual construction validation remain pending; the cat-gait comparison is observational context, not a requirement to copy feline anatomy or prescribe an unreviewed running gait.

### Body review decision record — construction reference and neck

- User selects `canonical-body-dummy-v2.0-profile.svg` as a development reference for proportions and especially squirrel leg structure. It describes line construction, not volumes; its neck lines must not determine neck thickness.
- Check SVG geometry and landmarks against D3 before treating it as a measured master. Its historical 0.24H finger labels are superseded by the accepted 0.26H fingers / 0.48H total hand reach. Preserve the archived original.
- User accepts the substantial neck description in D3 v0.2, replacing “modest neck.” `Gypsa head correction no hair.png` supplies the preferred fullness; preserve the broad, continuous connection into shoulders/upper torso and fullness beneath the jaw and along the rear neck through turns and tilts.
- User accepts deferring numerical neck dimensions until validated front and profile construction: front-view side-to-side width and profile front-to-back depth, both in H at the same annotated anatomical neck level in a neutral pose, excluding projecting fur tufts. Define that level during construction. Do not assume a circular cross-section or derive both measurements from the three-quarter reference. Existing Nc→Sc = 0.30H is construction length, not thickness. No numerical width/depth is approved yet.

### Head review decision record — expression system

- User accepts the eight expression descriptions: Neutral / Calm, Inquisitive, Concentrating, Puzzled, Amused, Delighted, Concerned, and Determined.
- D2 v0.6 completes the descriptive wording review. Expression changes preserve head anatomy, including muzzle/jaw volume, ear attachment and size, and crown construction.
- Visual expression validation remains pending on the completed head; this acceptance does not approve existing expression images or settle provisional measurements and palette values.

### Head review decision record — ears and crown

- User accepts both written sections, while noting persistent difficulty rendering them consistently.
- D2 v0.5 records written acceptance separately from image validation. No existing ear/crown image is promoted by this decision.
- During future head production, validate ears and crown one feature at a time, rechecking previously accepted features after each edit. Confirm both remain correct together in the three-quarter master and subsequent profile/front views.
- I2 must make the difficult relationships explicit: fixed low ear roots through neutral/attentive rotation; crown rear origin, sweep direction, calibrated central tip, visible brows, and rear taper. Landmark annotation remains pending.

### Head review decision record — eyes, brows, and facial contrast

- User confirms brown irises; gray irises in the no-hair reference are wrong. Exact brown remains to be selected.
- User prefers a cohesive filled eyebrow with a bushy fur outline, intermediate between smooth solid arcs and separate brush lines. The old stroke-only rule is superseded in D2 and D5.
- User deliberately edited the no-hair image's facial coloring and confirms simply gray eye surrounds and light-brown eyebrows. Use the same facial light brown for muzzle/cheeks and brows, retaining gray around the eyes and a gray gap beneath the brows.
- No contrasting eye ring, mask, or lower-eye crescent is part of the accepted pattern. The earlier optional crescent proposal is superseded by this choice.
- Eye-area pattern accepted and recorded in D2 v0.4 and D5 v0.3. Exact palette values, repeatable marking boundaries, and visual validation remain pending; no image edit or new palette hex selection performed.

### Head review decision record — skull and muzzle

- Accepted the proposed broad, projecting, softly rounded muzzle description, full lower jaw, soft chin, compact nose, and continuous cheek transition.
- Accepted the no-hair reference's overall squirrel-like skull shape and cheek fullness as the starting appearance, with two corrections: hide the separate far-cheek bulge at that angle and round/smooth the brow region slightly.
- Far cheek here means image-left / Gypsa's anatomical right. Its visibility depends on view; preserve its underlying volume. Do not conflate a cheek bulge with the far-side muzzle surface.
- `Gypsa Canonical Muzzle.png` (referred to conversationally as “Conical”) supplies the desired gentle slope from muzzle through the inter-eye bridge and brow toward skull top. It need not be traced exactly and does not replace the preferred newer muzzle volume.
- Separate the closed-mouth smile from anatomy: expressions may change while muzzle and lower-jaw fullness remain stable.
- D2 updated to v0.2. Numerical measurements, visual corrections, remaining head sections, and final image approval are still pending. No reference image was edited.

- [ ] Every current rule has one owning document; conflicting old values are absent from active instructions.
- [ ] All open decisions are resolved or explicitly scoped as deferred; none are silently invented.
- [ ] Outline measurement has been discussed and settled using direct comparison.
- [ ] User has reviewed the five-document set before three-quarter head work starts.
- [ ] Each final image accurately depicts everything it shows, agrees with the text, and has explicit approval recorded.
- [ ] Reference images agree across views; annotations match measured geometry.
- [ ] Palette, transparency, outline, and small-size exports have been checked.
- [ ] Website imports are updated when the user reaches the documentation milestone; publishing remains deferred.

