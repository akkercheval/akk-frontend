# Gypsa Canonical Geometry Table

**Version:** 0.1  
**Source:** Values extracted from the upright profile structural reference (`tools/gypsa_reference_svg.py` → `output/gypsa_upright_reference.svg`).  
**Unit:** 1H = head height (chin to cranial top, excluding ears).  

**Canon status:** All structural measurements in this table are **provisionally canon**. Back length adopted from **Back Length Exploration — Candidate B** (Sc→Pc = 1.70H). Arm lengths adopted from **Arm Exploration — Candidate C** (S→E = 0.62H, E→W = 0.72H). Digit lengths adopted from **Digit Length Exploration — Candidate D** (W→Tf = 0.24H, T→Th = 0.27H).  

## Coordinate System

- Origin: the pelvic anchor **Pc** sits at x = 0. Ground is y = 0.  
- **+X = rightward = toward Gypsa's back** (away from the body/face).  
- **−X = forward = toward Gypsa's face.**  
- **+Y = upward.**  
- Gypsa faces left (−X) in this profile.  

## Overview Table

| System | Geometry | Length / value | Status | Upright vs. all-fours behavior |  
| --- | --- | --- | --- | --- |  
| Global | Head-height unit | 1.00H | **Canonical** | Invariant |  
| Head | Cranial height, chin → skull top | 1.00H | **Canonical** | Invariant |  
| Head | Nose/muzzle tip → back of skull | ~0.98H | **Working canonical** | Invariant |  
| Head | Hc — cranial center | (−0.061, +3.946) | Structural point | Translates/rotates with head |  
| Head | Hf — face-direction point | (−0.551, +3.796) | Structural point | Rotates with head; establishes facing direction |  
| Head | Muzzle forward projection (attachment → nose tip) | ~0.32H | **Provisional (measured from canon drawing)** | Rotates with head; nose protrudes past the head edge |  
| Head | Muzzle attachment oval (blue cheek circle) diameter | ~0.44H | **Provisional (measured)** | Rotates with head |  
| Head | Nose-to-chin front height | ~0.36H | **Provisional (measured)** | Rotates with head |  
| Neck / spine | Nc — base-of-head attachment | (0.000, +3.450) | Structural point | Major articulation point between head and torso |  
| Torso / spine | Sc — shoulder / neck transition spinal point | (0.000, +3.150) | Structural point | Part of axial skeleton |  
| Torso / spine | Pc — pelvic-region spinal point | (0.000, +1.450) | Structural point | Part of axial skeleton |  
| Tail / spine | Tr — terminal spine / tail root | (0.000, +1.550) | **Canonical landmark** | On the Pc→Sc line, 0.10H above Pc; moves with pelvis/spine |  

## Body Landmark Heights (above ground)

| Landmark | Height |  
| --- | --- |  
| Ground | 0.00H |  
| Knee (reference line) | 0.85H |  
| Hip joint (Pc) | 1.45H |  
| Shoulder / neck transition (Sc) | 3.15H |  
| Base of head (Nc) | 3.45H |  
| Ear tips (Elt / Ert) | 4.60H |  

## Axial Skeleton Segments

| Segment | Length | Status | Behavior |  
| --- | --- | --- | --- |  
| Nc → Sc | 0.30H | Landmark-derived | Length invariant; angle changes with pose |  
| Sc → Pc | 1.70H | **Provisional canon (Back Exploration B)** | Length invariant; rotates toward horizontal in all-fours |  
| Pc → Tr | 0.10H (along Pc→Sc line) | **Canonical** | Preserves spine→tail continuity |  

*Note: Sc→Pc = 1.70H is the canonical back length chosen in the Back Length Exploration (Candidate B). The hip stays fixed at 1.45H and the back grows upward, so the shoulder sits at 3.15H and the base-of-head/head/ear landmarks ride up with it. This supersedes both the inherited 1.20H landmark-pinned span and the earlier ~1.07H working torso.*

## Forelimb (branch from Sc)

| Segment | Length | Status |  
| --- | --- | --- |  
| Sc → S (3D offset) | 0.08H | **Provisional canon** (structural offset; near-side shoulder forward of spine anchor) |  
| S → E (upper arm) | 0.62H | **Provisional canon** (Arm Exploration C) |  
| E → W (forearm) | 0.72H | **Provisional canon** (Arm Exploration C) |  
| W → Kb (L1, palm depth) | 0.22H | **Provisional canon** (revised from squirrel-paw study) |  
| Kb → Tf (L2, finger length) | 0.26H | **Provisional canon** (revised from squirrel-paw study) |  
| W → Tf (L3, total hand reach) | 0.48H | **Provisional canon** (= L1 + L2) |  

**Hand landmark system:** the front paw has three landmarks — **W** (wrist) → **Kb** (finger-base / palm-front) → **Tf** (fingertip) — with three lengths: L1 = W→Kb (palm depth, **0.22H**), L2 = Kb→Tf (finger length, **0.26H**), L3 = W→Tf (total reach, **0.48H**). The longest finger is slightly longer than the wrist-to-finger-base span. Finger *shape/placement* (taper, per-finger lengths, clustered fan, opposed thumb) is a pending refinement and does not change these lengths.  

*Revision (2026-09-16): palm depth and finger length were set to L1 = 0.22H / L2 = 0.26H after reviewing the Hand Exploration alongside reference squirrel paws, giving a finger a little longer than the palm-front span. This aligns the Geometry Table with `Gypsa Joint System.md`, the matching authority for these two lengths. (Earlier working iterations tried 0.22/0.24 and 0.26/0.22; this 0.22/0.26 pairing is the current decision.)*

**Arm pose:** the whole arm is swung forward at S by **30°** so the paw clears the knee. Segment lengths and inter-joint angles (E, W, Tf) are preserved; only the whole-chain orientation rotates.  

## Hindlimb — Candidate C (branch from Pc)

| Segment | Length | Status |  
| --- | --- | --- |  
| Pc → H (3D offset) | 0.08H | **Provisional canon** (structural offset; near-side hip forward of spine anchor) |  
| H → K (hip → knee) | 0.59H | **Provisional canon (Candidate C)** |  
| K → Hk (knee → hock/heel) | 0.82H | **Provisional canon (Candidate C)** |  
| Hk → T (hock → ball of foot) | 0.59H | **Provisional canon (Candidate C)** |  
| T → Th (ball → visible toe end) | 0.27H | **Provisional canon** (Digit Exploration D) |  

**Leg directional pattern (upright):** H → K downward + forward; K → Hk backward + downward; Hk → T downward + forward. The whole leg is rotated as a unit so T rests on the ground (y = 0); the toe (Th) lies flat forward along the ground.  

**Upright Candidate C and quadrupedal Candidate C use exactly the same 0.59H / 0.82H / 0.59H / 0.27H hind-limb lengths. Only joint angles change.**

## Head & Ears (branch from Hc)

| Geometry | Value | Status |  
| --- | --- | --- |  
| Hc → Hf (face direction) | offset (−0.490, −0.150) | Working |  
| Muzzle forward projection (attachment → nose) | ~0.32H | Provisional (measured from canon drawing) |  
| Muzzle attachment oval (blue cheek circle) diameter | ~0.44H (radius ~0.22H) | Provisional (measured) |  
| Nose-to-chin front height | ~0.36H (half ~0.18H) | Provisional (measured) |  
| Nose protrusion past head-oval front edge | ~0.21H | Provisional (derived) |  
| Nose tip location | just past Hf, protruding past the head edge | Provisional (measured/derived) |  
| El — left ear root | (+0.039, +4.296) | Estimated (profile) |  
| Elt — left ear tip | (+0.089, +4.596) | Estimated (profile) |  
| Er — right ear root | (−0.111, +4.296) | Estimated (profile) |  
| Ert — right ear tip | (−0.136, +4.596) | Estimated (profile) |  
| Head tilt (expression) | 7° | Working |  

*Ear positions are estimated from the head construction guide's profile rules (front root just above the eye line, tips slightly above the skull) and are not yet finalized in the Ear Specification.*

*Muzzle measurements were read from the approved `Gypsa Canonical Muzzle.png` (Revised 3/4 Left view), scaled against the head height (1H). They **measure** the existing canonical muzzle drawing rather than redesigning it. Three measurements: (1) forward projection from the muzzle attachment to the nose ~0.32H; (2) the faint blue muzzle-attachment oval (cheek circle) ~0.44H in diameter (radius ~0.22H); (3) the nose-to-chin front height ~0.36H (half ~0.18H). Together these describe a broad **egg-shaped** mass that inflates from the skull: full at the back (half-height ~0.22H, mostly buried in the head so it merges softly) tapering only gently to a BROAD soft-rounded nose (half-height ~0.18H) — not a narrow point. Anchored on the Hc→Hf axis, the nose protrudes ~0.21H past the head oval's front edge. These give the support-volume muzzle a documented size and shape; the muzzle's **appearance** authority remains the drawing itself. Provisional pending confirmation in the closed silhouette.*

## Tail — Neutral S-Sweep

Represented as a cubic Bézier `<path>` through five structural landmarks. Named points describe *where* the tail passes; handles describe *how* the curve travels between them. **Tvt (visible fur tip) is excluded** — it is a fur-extent reference, not a structural landmark.

### Landmarks (offset from Tr)

| Landmark | Offset from Tr | Geometric meaning |  
| --- | --- | --- |  
| Tr | (0.000, 0.000) | Structural root |  
| Tt1 | (+0.283, −0.170) | Lowest point of the initial root bowl |  
| Tt2 | (+0.425, +1.199) | Inflection where the rising shaft transitions to the upper arc (a little above the shoulder) |  
| Tt3 | (+1.006, +2.181) | Highest point of the structural centerline (true apex) |  
| Tst | (+1.265, +1.529) | Structural tip |  

### Bézier tangent handles (offset from each landmark, H units)

| Landmark | In handle | Out handle |  
| --- | --- | --- |  
| Tr | — | (+0.150, −0.105) |  
| Tt1 | (−0.180, 0.000) | (+0.420, +0.100) |  
| Tt2 | (+0.140, −0.420) | (−0.140, +0.480) |  
| Tt3 | (−0.340, 0.000) | (+0.400, 0.000) |  
| Tst | (+0.200, +0.500) | — |  

### Tail parameters

| Parameter | Value |  
| --- | --- |  
| Structural arc length Tr → Tst | 4.08H (measured 4.07H) |  
| Overall S-axis | Leans away from the body (top further right than bottom) |  
| Lower bend | Smaller; bowl dips down and away, Tt1 is its low center |  
| Upper bend | Larger; bulges toward the head mid-segment, apex at Tt3 |  

## Terminology

- **T** — ball of the foot  
- **Th** — visible end of the hind toes  
- **Sc** — shoulder / neck transition spinal point  
- **Nc** — base-of-head attachment spinal point  
- **Pc** — pelvic spinal point  
