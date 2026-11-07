# Gypsa Directionally Sanitized Tail Render Prompt  
## Purpose  

Create Gypsa's canonical neutral tail fur envelope around a **supplied structural centerline**.  

The supplied structural centerline may be straight, curved, curled, S-shaped, C-shaped, vertical, horizontal, diagonal, or may reverse direction one or more times.  

**The position or direction of the tail on the page must never determine fur direction.**  

All fur construction is determined exclusively by:  
1. Position along the directed structural centerline.  
2. The local forward tangent of the centerline.  
3. Canonical fur length.
4. Canonical fur angle relative to the local forward tangent.  

The supplied structural centerline is authoritative geometry. **Do not redraw, reinterpret, smooth, straighten, improve, reposition, shorten, lengthen, or otherwise alter it.**  

## Canonical Scale  

Gypsa's canonical measurement unit is **H (Head Height).**  

**1H = 196 pixels** in the source Gypsa Profile View.  

The accepted Profile View structural tail centerline measures approximately 800 pixels along its curve:  
    **800 px ÷ 196 px = 4.0816H**  

Therefore define Gypsa's canonical structural tail length as:  
    **4.08H**  

All dimensions below are proportional to this canonical scale. The drawing may be rendered at any convenient resolution, but these proportions must remain unchanged.  

---  

## 1. Directed Structural Centerline  

Treat the supplied structural centerline as a **directed path**.  

Define normalized arc-length position S along this path:  
- **S = 0.00** = STRUCTURAL ROOT  
- **S = 1.00** = STRUCTURAL TIP  

S always increases as one travels along the supplied centerline from structural root toward structural tip.  

### Critical Direction Rule  

Throughout this specification:
    **FORWARD / DISTAL = increasing S**  
    **BACKWARD / PROXIMAL = decreasing S**  

These definitions are independent of the orientation of the drawing.  

Therefore:  
- Distal does **not** mean right.  
- Distal does **not** mean left.  
- Distal does **not** mean up.  
- Distal does **not** mean down.  
- Distal does **not** mean geometrically pointing toward the final tip's location on the page.  
- Distal means **only movement farther along the directed centerline from S toward S+ΔS**.  

Likewise, proximal means only movement backward along the directed centerline from S toward S−ΔS.  

This remains true even when the centerline:  
- curves sharply  
- changes horizontal direction  
- changes vertical direction  
- doubles back  
- forms an S or C  
- curls inward  
- places the structural tip to the left, right, above, or below the structural root  

**Never infer fur direction from the relative page positions of the root and tip.**  

## 2. Frozen Centerline Geometry  

The supplied structural centerline is canonical and must remain unchanged.  

**ABSOLUTE GEOMETRY RULE:**  

Trace and preserve the supplied centerline exactly.  

Do not:  
- smooth its curves  
- exaggerate its curves  
- reduce its curves  
- move the structural root  
- move the structural tip  
- change its arc length  
- change its relationship to any supplied body  
- modify it to accommodate the fur envelope  

### Construction Hierarchy  

**CENTERLINE DETERMINES FUR.**  

**FUR NEVER DETERMINES CENTERLINE.**  

Leave the structural centerline visible in construction or validation drawings when requested.  

---

## 3. Structural Root  

The first point of the supplied centerline is:  
    **STRUCTURAL ROOT — S = 0.00**  

If the supplied reference drawing includes a structural-root marker, preserve its center exactly at the first point of the supplied centerline.  

Do not reposition the structural root based upon the newly generated fur silhouette.  

The visible fur envelope develops around the structural root; it does not define or relocate the structural root.  

If the root is labeled in a construction drawing, label it:  
    **STRUCTURAL ROOT**  

Do not label the visible fur silhouette itself as the structural root.  

---  

## 4. Local Forward Tangent  

**DIRECTION MUST PROPAGATE CONTINUOUSLY FROM THE ROOT.**

At every point S along the structural centerline, the local forward tangent points from the current position toward a nearby point farther along the directed path:  

**S → S+ΔS**  

This is the local distal direction. The sequential-propagation rule below determines which of the tangent's two possible orientations is forward.  

Begin at S=0 and travel along the centerline toward increasing S. At each successive station, inherit the forward direction from the preceding station and rotate it only as much as the centerline itself turns.  

**Never independently choose between the two possible directions of the local tangent at a later point on the curve.**  

Once root→tip direction has been established at S=0, it may never flip by 180° anywhere along the path.  

If adjacent fur groups suddenly face one another, or if their distal components reverse relative to the preceding fur groups, the mapping is incorrect.  

Sequential Traversal is therefore:  
    **start at root → establish forward → move a little farther → rotate forward direction with curve → move farther → rotate again → never reset**  

---  

## 5. Neutral Fur Direction  

Treat the visible fur envelope as being formed by individual overlapping fur spikes or fur groups originating along the structural centerline.  

The tail has been gently **combed from structural root toward structural tip**, meaning from lower S toward higher S.  
 
Therefore:  

**Every fur spike must have a positive distal component along the local forward tangent.**  

**No fur spike may have a negative/proximal component that causes it to lean toward decreasing S.**  

This is the authoritative fur-flow rule.  

---  

## 6. Two Neutral Fur Families  

At each centerline station, neutral fur forms two general families on opposite sides of the structural centerline.  

Using the **local forward tangent** as 0°:
- one fur family projects approximately +45° from the local forward tangent  
- the opposite fur family projects approximately −45° from the local forward tangent  

Both ±45° directions are measured from the **FORWARD/DISTAL tangent**, never from the backward/proximal tangent.  

Therefore both fur families retain a positive component toward increasing S.  

As the structural centerline curves, both fur families rotate continuously with the local tangent.  

### Critical prohibition  

Do not make fur point toward the structural tip's **location on the page**.  

Instead, make fur point partially **forward along the centerline at its own local position**.  

---

## 7. Fur Appearance  

The ±45° construction describes the **underlying directional axis** of the fur groups.  

It does **not** mean the finished tail should consist of large, isolated, mechanically uniform triangular spikes.  

Preserve Gypsa's canonical neutral fur character:  
- soft  
- flowing  
- fine  
- overlapping  
- slightly irregular  
- stylized eastern gray squirrel fur  

Individual fur groups should overlap visually and collectively form a continuous soft envelope.  

Do not create: 
- a regular sawtooth pattern  
- porcupine-like quills  
- evenly spaced triangular spikes  
- mechanically identical fur groups  

Controlled organic variation in individual fur length, spacing, and outline is permitted, provided that the canonical length profile and distal directional rule remain unmistakable.  

---  

## 8. Canonical Fur Length  

Through the mature region:  **Standard mature fur-spike length ≈ 0.408H**  

This length is measured from the fur group's approximate origin at the structural centerline to its visible distal end.  

The standard fur length follows the centerline construction regardless of the centerline's orientation or curvature.  

---  

9. Root Transition  

Fur must **not** begin at full mature length.  

At: **S = 0.00**  

initial fur length is approximately: **0.102H**  

This equals 25% of standard mature fur length.  

During the first: **0.408H of arc length**  

or approximately: **S = 0.00 → S = 0.10**  

progressively increase fur length from: **0.102H → 0.408H**  

The transition must be continuous:  
    **short body-like fur → transitional fur → mature tail fur**  

Root fur already follows the local distal-direction rule.  

Do not create:
- a narrow stalk  
- hourglass pinch  
- abrupt flare  
- bulbous root  
- immediately full-length tail fur  

The established 0.102H root fur and 0.408H root-transition measurements are canonical.  

---  

10. Mature Tail Region  

From approximately: **S = 0.10 → S = 0.875**  

maintain approximately: **0.408H standard mature fur length**  

and: **±45° relative to the local FORWARD tangent**  

Maintain reasonably consistent apparent volume while allowing controlled organic variation.  

When the centerline curves tightly, fur on the concave side may naturally overlap neighboring fur groups.  

**Do not reverse, redirect, or arbitrarily shorten fur merely to avoid this overlap during the neutral construction pass.**  

---  

## 11. Continuous Distal Taper  

Begin the visible distal taper at approximately: **S = 0.875**  

equivalent to: **3.57H from the structural root**  

From this station through the visible fur tip, **create one continuous uninterrupted taper.**  

During this taper:  
1. progressively reduce outward fur projection  
2. progressively reduce the absolute fur angle from approximately ±45° toward 0° relative to the local forward tangent  
3. increasingly align terminal fur with the local forward/distal tangent  
4. progressively narrow both sides of the silhouette toward the structural path  

The structural tip occurs at: **S = 1.00 / 4.08H**  

but this must cause **absolutely no visible change** in the outer fur silhouette.  

Do not:  
- terminate the envelope there  
- restart the fur there  
- create a shoulder  
- create a flattened region  
- create a seam  
- abruptly shorten fur  
- abruptly change fur direction  

The taper must flow smoothly **through** the structural-tip station.  

---  

## 12. Structural Tip and Visible Fur Tip  

The endpoint of the supplied structural centerline is: **STRUCTURAL TIP — S = 1.00 / 4.08H**  

This is an internal anatomical/construction endpoint.  

It is **not** the visible fur tip.  

Fur continues approximately: **0.408H beyond the structural tip**  

producing a visible fur tip at an approximate total root-to-visible-tip extent corresponding to: **4.49H**  

No new structural centerline exists beyond S=1.00.  

**CRITICAL VISUAL RULE: The structural-tip marker lies INSIDE the completed visible fur envelope. The completed tail silhouette must visibly continue beyond this marker. If the outer fur silhouette terminates at or approximately at the structural-tip marker, the construction is incorrect.**  

The visible extension is produced by terminal fur anchored at or before the structural tip.  

Near S=1.00, these terminal fur groups become increasingly aligned with the final local forward tangent and extend beyond the structural endpoint.  

The final central fur group approaches:  **0° relative to the final local forward tangent**  

and creates a soft pointed or nearly pointed visible fur tip.  

The visible fur tip should therefore lie approximately **0.408H beyond the structural-tip marker in the final local forward direction**, producing a progressively narrowing pointed termination rather than a rounded cap at S=1.00.  

Do not create a:  
- rounded tip  
- blunt tip  
- bulbous tip  
- clipped tip  
- flattened tip  

---  

## 13. Endpoint Terminology  

Use these terms consistently:

**STRUCTURAL ROOT**  
The first point of the supplied centerline.
**S = 0.00**  

**STRUCTURAL TIP**  
The final point of the supplied centerline.  
**S = 1.00 / 4.08H**  

**VISIBLE FUR TIP**  
The final visible point of the terminal fur envelope beyond the structural tip.  

Do not call the visible fur tip the structural tip.  

Do not call the visible fur envelope at the base the structural root.  

---  

## 14. Critical Directional Sanity Check  

Before finalizing the drawing, conceptually inspect fur direction at multiple locations along the structural centerline.  

For every fur group, ask:  
    **Does this fur group lean partially toward a nearby point farther along the centerline at S+ΔS?**  

If YES, its distal direction is valid.  

If instead it leans partially toward a nearby point earlier along the centerline at S−ΔS, its direction is invalid and must be corrected.  

Perform this check independently of whether the fur points visually:  
- left  
- right  
- upward  
- downward  
- toward the body  
- away from the body  
- toward the final tip's page position  
- or away from the final tip's page position  

**Also compare every fur group with the fur groups immediately before and after it along increasing S. A sudden 180° reversal of distal lean is always invalid, even if the individual fur group appears visually plausible in isolation.**  

**Increasing S is the only authoritative definition of distal direction.**

---  

## 15. Critical Canonical Rules  
- Canonical structural tail length = **4.08H**  
- Structural Root = **S=0.00**  
- Structural Tip = **S=1.00**  
- Standard mature fur length = **0.408H**  
- Root fur length = **0.102H**  
- Root transition = first **0.408H / approximately S=0.00–0.10**  
- Mature region ≈ **S=0.10–0.875**  
- Neutral mature fur angle ≈ **±45° from the local forward tangent**  
- Distal taper begins = **S=0.875 / 3.57H**  
- Visible fur extends ≈ **0.408H beyond the structural tip**  
- Approximate root-to-visible-fur-tip extent = **4.49H**
- Terminal fur angle progressively approaches **0° relative to the final forward tangent**  
- Every fur group has a **positive increasing-S component**  
- No fur group deliberately points toward decreasing S  
- Page orientation is irrelevant to fur direction  
- Relative root/tip page position is irrelevant to fur direction  
- Local forward direction is established at the root and propagated continuously toward increasing S  
- Local forward direction never resets or flips 180° along the path  
- Supplied structural centerline geometry is frozen  
- Centerline determines fur; fur never determines centerline  
- No expression-dependent fluffiness unless explicitly requested  
- No color or marking development unless explicitly requested  

---  

## Final Instruction  

The supplied structural centerline defines **where the tail goes.**  

The canonical measurements define **how long the fur is.**  

The local forward tangent defines **which direction the fur flows.**  

The normalized arc-length coordinate S defines **root-to-tip ordering.**  

**Never substitute page direction, absolute left/right/up/down orientation, or the geometric position of the final visible tip for these directed-path rules.**  