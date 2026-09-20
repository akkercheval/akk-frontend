# Gypsa Design Milestones

## Milestone 1 2026/07/29
Character concept established.

## Milestone 2 2026/07/29
Character Bible completed.

## Milestone 3 2026/07/29
Production Guide established.

## Milestone 4 2026/07/29
Head Exploration Phase 1 completed.
Two surviving candidates identified.

## Milestone 5 2026/07/30
Canonical Body Dummy approved.

## Milestone 6 2026/08/02
Head Exploration Phase 2, Phase 2c: Muzzle Exploration - Phase 1 completed
Three surviving Muzzle candidates identified.

Canonical Muzzle Discovered (Pending Validation)

## Milestone 7 2026/08/02
Canonical Muzzle v1.0 — Approved pending complete head validation.  

## Milestone 8 2026/08/09
Canonical Eyes Explored.  
Four initial candidates where created.  
Two Candidates: The Observer and Discoverer were chosen for further exploration.  
Second Round consisted of three combination candidates: Quiet Observer, Curious Observer, and Attentive Discoverer.  
Quiet Observer candidate was approved as Gypsa's canonical eyes.  

## Milestone 9 2026/08/10  
Canonical Ears Explored.  
Soft Taper Ear Candidate chosen as Gypsa's canonical ears.  

## Milestone 10 2026/08/13  
Gypsa's Canonical Eyebrows were chosen: Organic Fur Brow.  
Gypsa Eyebrow expression explored both in isolation and with ear expression.  
Initial set of head expressions approved.  
Initial Head Validation Completed.  

## Milestone 11 2026/08/15  
Gypsa's Forehead and Crown Fur explored and approved: Soft Layered Sweep.   

## Milestone 12 2026/08/18
Created Gypsa Head to Body Integration Construction Sheet and provisionally validation and froze head to body proportions. 

## Milestone 13 2026/08/19
Created Gypsa's Tail: Design Specification Markdown and Three Views Validation Sheet.  

## Milestone 14 2026/08/22  
Gypsa Canonical Tail Fur Envelope established.  
Gypsa Tail Expression Exploration Group A First Drawing Pass accepted as canon pending future fur validation.  

## Milestone 14 2026/08/23  
Gypsa Directionally Sanitized Tail Render Prompt accepted as canon for drawing Gypsa's tail.  
Gypsa Tail Expression Group Render Prompt.md established as canon for Inquisitive, Thinking, and Puzzled expressions, pending future fur validation.  

## Milestone 15 2026/08/24
Built Gypsa's upright and all-fours structural references (Rig — Production Workflow Stage 1) with the Python/SVG toolchain.

## Milestone 16 2026/08/24
Canonical Hind Legs chosen: Candidate C (H→K 0.59H, K→Hk 0.82H, Hk→T 0.59H).

## Milestone 17 2026/08/24  
Canonical Digit Lengths chosen: Candidate D (W→Tf 0.24H fingers, T→Th 0.27H toes).  

## Milestone 18 2026/08/24  
Canonical Arm Lengths chosen: Candidate C (S→E 0.62H, E→W 0.72H).  
Arms were the last non-canon structural measurement — all of Gypsa's structural geometry is now provisionally canon.  
Consolidated everything into the Gypsa Canon Summary and Gypsa Canonical Geometry Table v0.1.  

## Milestone 19 2026/08/24  
**Canonical Back Length chosen: Candidate B (Sc→Pc 1.70H).**  
The shoulder-to-hip span had been inherited from the body-landmark table (1.20H) and never explicitly validated.  
The Back Length Exploration measured the reference squirrel (~3.88H at full stride), set Gypsa deliberately shorter per her hobbit-burglar character counterpart, and compared candidates as union envelopes and full silhouettes.  
B replaces the inherited 1.20H; the hip stays fixed at 1.45H, so the shoulder rises to 3.15H and the head/ears ride up with it. Updated both structural reference generators, the Geometry Table, and the Canon Summary.  

## Milestone 20 2026/08/24  
**Rebuilt the Canonical Body Dummy as v2.0**, now generated from the canonical rig (`tools/body_dummy.py`) instead of hand-authored.  
Produced two labelled views — `canonical-body-dummy-v2.0-profile.svg` (side, staff shown, tail attaching at the base of the spine) and `canonical-body-dummy-v2.0-back.svg` (straight-on symmetric, tail on the center line).  
Arms/legs are canonical centerlines; hand ovals sit fully outside the arm line.  
Archived v1.0/v1.1 to `Older Reference Revisions`.  
All structural geometry is now canon and documented; ready to begin Production Workflow Stage 2 (Support Volumes).  

## Milestone 21 2026/09/03  
**Established Gypsa's hand landmark system and measured the muzzle.**  
Adopted the three-landmark hand system W (wrist) → Kb (finger-base/palm-front) → Tf (fingertip) with L1 = W→Kb palm depth (Hand Exploration Candidate C, 0.22H), L2 = Kb→Tf finger length (canonical 0.24H, preserved), L3 = W→Tf total reach (0.46H). This supersedes the earlier "W→Tf = 0.24H" — 0.24H is now the finger length, and the true wrist-to-fingertip reach is 0.46H, so Tf moved outward in both structural references.  
Added the Kb joint to both generators, the Joint System, the Geometry Table, and the Canon Summary.  
Separately, measured the canonical muzzle from `Gypsa Canonical Muzzle.png` (Revised 3/4 Left): ~0.32H forward projection, ~0.44H attachment-oval diameter, ~0.36H nose-to-chin height (all provisional, documented in the Geometry Table) — measuring the approved drawing rather than redesigning it.  

## Milestone 22 2026/09/03  
Built Gypsa's upright Support Volumes (Production Workflow Stage 2) and completed the First Merge (Stage 3) — `tools/support_volumes.py`, `tools/volume_merge.py`. Support volumes wrap the frozen rig: pear torso, head + ear teardrops + measured egg muzzle, tapered neck, hind leg as overlapping haunch + calf ovals (Option B) + foot, W/Kb/Tf hand (palm circle + tapered clustered fingers + opposed thumb), and a tail fur envelope derived from the Canonical Tail Fur Envelope reference (fur radius = spike·sin45°, with the fur-tip extension). The first merge unioned the volumes into a single silhouette (`gypsa_volume_merge_upright.svg`), preserved as `gypsa_volume_merge_upright_v1.0_FirstMerge.svg`. The merge validated all structural decisions (back, arms, hind legs, palm, head, tail) and identified transition work: added a shoulder/chest bridge, a rounded dorsal nape oval, and a tapered neck to smooth the back-of-head → nape → shoulder → back contour; corrected the head volume to exactly 1.0H tall. Remaining Stage-3 contour work (torso→haunch flow, haunch→lower-leg smoothing, rump→tail integration, canonical tail-edge derivation) is deferred to the deliberate closed-contour step.  
