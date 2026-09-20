# Gypsa Canonical Tail Design Specification  
## Profile Neutral Tail — Canonical Specification   

**Status:** Canonical. The Canonical Profile View is the approved master lateral tail construction.  
**Species basis:** Stylized Eastern gray squirrel.  
**Purpose:** Defines Gypsa's neutral/resting tail construction. Future rotations, poses, and expressions must preserve these structural attributes unless deliberately exploring a change.  

## 1. Structural length
- The structural tail length is defined by the approved Canonical Profile Tail drawing. Future drawings must preserve this length when measured along the structural centerline from the fixed sacral root to the structural tip.  
- Measurement follows the tail structural centerline, not a straight-line root-to-tip measurement.  
- Measurement begins at the anatomical tail root at the terminal spine/sacral region.  
- Measurement ends at the structural tail tip, not the outermost fur.  
- Fur extending beyond the structural tip is not included in the measurement.
- Do not enlarge the overall tail simply to satisfy a numerical annotation. The approved tail-to-body relationship remains a primary visual constraint.  

## 2. Anatomical root

The tail originates at the **terminal end of Gypsa's spine/sacral region**, immediately before the rear contour of the rump begins curving forward underneath her.  

The tail must read anatomically as a **continuation of the spine**, not as an appendage attached to the outside of the rump.  

The structural centerline should therefore leave the sacral root in a direction compatible with the terminal spinal path before gradually entering the resting tail curve.  

All Tail drawings must match the approved Canonical Profile Tail's root in root origin, thickness, and direction from the body.

## 3. Visible root integration

The accepted root-integration reference is the Canonical Profile View.

The Canonical Profile View governs the exact visible transition between the body and tail.    

The underlying structural tail is narrow at its origin, but the **visible fur envelope must not pinch down to that narrow structure**.  

The structural centerline continues directly from the terminal spine into the tail. The rump lies below that continuation.  

Required characteristics:
- Body fur blends continuously into tail-base fur.  
- Upper tail contour flows naturally out of the back.  
- The middle of the tail continues naturally from the terminal end of the spine.    
- Lower tail contour transitions smoothly out of the back just above the rump.  
- No narrow stalk.  
- No hourglass pinch.  
- No obvious seam.  
- No abrupt flare immediately after the root.  
- The precise skeletal attachment may be shown with construction guides, but should be largely concealed by fur in the finished silhouette.  

The visual reading should be:  
    spine → tail  
not:  
    body → attachment → tail.  

## 4. Neutral structural gesture — Relaxed S-Sweep B  

The accepted overall shape is the Relaxed S-Sweep B as established by the Canonical Profile View. The Canonical Profile View is the primary reference for the exact Neutral structural gesture; the written description below explains how that curve should be interpreted and reconstructed.  

From root to tip:  

**Root departure:** The centerline begins by moving rearward and gently upward from the sacral root.  

**Lower sweep:** It follows the general direction of Gypsa's back while remaining behind it, establishing an open cavity between body and tail.  

**Middle rise:** The centerline turns progressively upward. This portion is relatively upright but retains a gentle outward bow rather than becoming a straight vertical column.  

**Upper sweep:** The curve opens broadly away from the body before turning inward. The upper turn must remain broad and relaxed, not circular or tightly hooked.  

**Descending section:** After the upper turn, the tail travels forward/downward toward its tip.  

**Terminal backward curl:** The final portion makes a small, gentle backward directional reversal. This is a finishing gesture, not a second major curl.  

The terminal curl must not turn the tip into a spiral, question mark, hook, or tight C-shape.  

The Neutral tail curve is stored in a Tr-local coordinate system, and its entire geometry rotates/translates with the Tr/pelvic reference frame unless a tail expression explicitly changes it.  

## 4a. Structural Centerline Landmarks  

The structural centerline is described by five named landmarks. Each landmark identifies a **meaningful geometric location** on the tail. The curve between landmarks is defined by cubic Bézier handles: the named points describe *where* the tail passes; the handles describe *how* the curve travels between them.  

| Landmark | Geometric meaning |  
| --- | --- |  
| **Tr** | Structural root — the fixed sacral attachment where the centerline leaves the terminal spine. |  
| **Tt1** | Lowest point of the initial root bowl — the low point of the gentle dip as the centerline departs the root before rising. |  
| **Tt2** | Inflection point where the long rising shaft transitions toward the upper arc — where the centerline's curvature reverses from the rising shaft into the upper sweep. |  
| **Tt3** | Highest point of the structural centerline — the apex of the upper arc. |  
| **Tst** | Structural tip — the endpoint of the structural centerline. |  

**Notes:**  
- **Tvt (visible fur tip) is not a structural landmark.** It marks the extent of the fur envelope beyond the structural tip and is therefore excluded from the structural centerline and from structural line drawings. It remains defined in the fur-envelope specifications only.  
- The centerline is rendered as a cubic Bézier `<path>` (`Tr → Tt1 → Tt2 → Tt3 → Tst`), not as a straight-segment polyline. Each segment carries its own tangent handles so the curve reproduces the Relaxed S-Sweep B gesture described in Section 4.  
- The landmarks formalize the qualitative gesture of Section 4: **Tr → Tt1** is the *root departure* into the *lower sweep*, **Tt1 → Tt2** is the *middle rise*, **Tt2 → Tt3** is the *upper sweep* to its apex, and **Tt3 → Tst** is the *descending section* with the *terminal backward curl*.  

## 5. Tail-to-body proportion  

The Canonical Profile View governs the visual relationship between tail and body.

The tail should be large and unmistakably squirrel-like, but must not visually overwhelm Gypsa.  

The accepted reference establishes:  
- overall apparent tail width  
- distance between tail and back  
- relative height  
- size of the upper sweep  
- approximate visual mass compared with Gypsa  
- amount of negative space between body and tail  

Therefore:  
**Structural length and apparent visual size are separate constraints. Both must be satisfied.**  

## 6. Fur envelope — Soft Stylized B  

The accepted fur treatment is [**Soft Stylized B**](Gypsa Canonical Tail Fur Envelope.png).  

It occupies the middle ground between the rejected Naturalistic/Scraggly and Plush treatments.  

Required characteristics:

- Tail fur is visibly and substantially longer than Gypsa's ordinary body fur.  
- Fur is organized into larger directional groups, rather than individually rendered hairs.  
- Outer silhouette is soft and flowing with controlled irregularity.  
- Interior/concave portions may show somewhat stronger directional separation.  
- Fur follows the structural gesture of the tail.  
- Enough variation remains to unmistakably communicate long squirrel fur.  
- The tail must not resemble a smooth padded tube.  

Avoid:  
- scraggly or excessively separated individual hairs  
- uniformly fuzzy edges  
- rounded plush-toy volume  
- excessively smooth cylindrical forms  
- dramatic random tufts that disrupt the approved silhouette  

## 7. Fur-volume distribution  

Fur volume should develop gradually along the structural tail.  

**At the root:** restrained and integrated with body fur.  

**Lower tail:** fur progressively lengthens and the envelope widens naturally.  

**Middle/upper tail:** strongest visual volume and longest flowing fur groups.  

**Toward the end:** structural mass tapers while long fur preserves softness and flow.  

**At the tip:** fur extends beyond and around the structural tip sufficiently to create a soft termination.  

There must be **no sudden expansion immediately beyond the root.**  

## 8. Thickness  

The accepted Soft Stylized B envelope determines the approximate thickness.  

The neutral B tail must **not be drawn thinner merely because its S-curve is more compact**.  

Likewise, it must not be made thicker to emphasize its length.  

Tail thickness should remain comparable to the accepted A/B envelope proportions from the successful exploration, with the supplied Soft Stylized B reference taking precedence.  

## 9. Tip construction  

The tip has two overlapping components:  

**Structural tip:** the endpoint of the structural centerline.  

**Furred tip:** the visible silhouette created by long hairs extending beyond the structural endpoint.  

The upper sweep turns inward and descends before reaching the tip. The final structural section then curls **slightly backward**.  

The backward finish should be immediately perceptible when examining the construction but subtle in the overall silhouette.  

It must **not** significantly increase the apparent size of the upper curl.  

## 10. Backpack relationship  
Gypsa's neutral tail posture exists independently of her backpack; the backpack does **not force the tail into this shape**.  

Instead, the natural Relaxed S-Sweep creates useful negative space behind Gypsa's back.  

Her explorer backpack is chosen and adjusted to occupy that space:  
- backpack sits immediately above the tail root  
- backpack does not cover or compress the root  
- lower tail passes naturally behind/below the backpack region  
- rising tail follows broadly around the backpack's rear profile  
- backpack fits inside the natural tail sweep rather than forcing the tail outward  

When validating backpack compatibility, the tail should remain canonical and the backpack should be fitted to it, not vice versa.  

## 11. Profile-body relationship  

The finalized **canonical profile body** is locked.  

When constructing or validating the tail:  
- Do not resize Gypsa.  
- Do not alter head/body proportions.  
- Do not move the pelvis to accommodate the tail.  
- Do not alter the back/rump contour except where the approved fur overlap is required to integrate the tail.  
- Do not move the sacral root.  
- Ear tips and body landmarks must remain consistent with the finalized Head-to-Body Integration Construction Sheet.  

Changes to Gypsa's apparent size are **rendering errors**, not acceptable tail-design adjustments.  

## 12. What is canonical vs. what remains provisional

**Approved / locked:**  
- Root location  
- Length of tail as determined by Canonical Profile View
- Relaxed S-Sweep B gesture  
- Spine-to-tail root integration as established by the Canonical Profile View  
- Soft Stylized B fur language  
- General B tail-to-body ratio  
- Natural backpack clearance  
- Small backward terminal curl 
- The geometric meaning of the five structural landmarks (Tr, Tt1, Tt2, Tt3, Tst) as defined in Section 4a  
- Representation of the structural centerline as a cubic Bézier path (named landmarks + tangent handles)  
- Exact final centerline coordinates, exact tip position, and exact highest point remain governed visually by the Canonical Profile View; the landmarks name these locations but their precise coordinates are still tuned against the reference  

**Not yet locked:**  
- Exact backpack dimensions within the tail cavity  
- Front and 3/4 projections of the neutral tail  

Those remaining properties should emerge from the final canonical profile construction and subsequent rotation validation rather than being invented independently.  

## 13. Reference precedence  

If future images disagree, use this hierarchy:  
**Anatomical attachment and visible root integration:** Canonical Profile View.  
**Overall shape and tail/body ratio:** Canonical Profile View.  
**Fur treatment:** accepted Soft Stylized B fur-envelope reference.  
**Terminal tip:** small backward-curl as shown in Canonical Profile View.

A newer generated image **does not supersede these references merely because it is newer.**  

## Canonical Neutral Tail Validation Addendum
- **Relaxed S-Sweep B + Soft Stylized B** is the canonical neutral tail.  
- The Canonical Profile View is the master lateral construction.  
- Structural length is defined by the approved Canonical Profile View, measured along the structural centerline from the fixed sacral root to the structural tip. Rotation changes its apparent projection but never its underlying length.  
- The root is permanently fixed at the terminal spine/sacral region, immediately before the rump begins curving forward underneath Gypsa.  
- The visible fur base must remain broad and integrated rather than pinching to the structural root.  
- Profile view shows the S-sweep most completely.  
- 3/4 View preserves that same structure but introduces foreshortening, visible width, self-overlap, and partial occlusion.  
- Front View largely collapses the S-curve into depth; therefore the structural centerline projects approximately onto Gypsa's body centerline while the fur envelope remains broad and bushy.  
- Rotation changes apparent projection, never the tail's underlying length, thickness, or physical volume.  
