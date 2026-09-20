# Gypsa Joint Reference System  
## Summary of the extended system:
| Region | Points | Purpose |  
| --- | --- | --- |  
| Forelimb | S → E → W → Kb → Tf | Adds palm-front (Kb) + paw endpoint (Tf) |  
| Hindlimb | H → K → Hk → T → Th | Adds visible toe extent |  
| Tail | Tr → Tt1 → Tt2 → Tt3 → Tst → Tvt | Centerline control with structural regions |  
| Head | Hc, Hf | Position/orientation |  
| Ears | El → Elt, Er → Ert | Root + tip for rotation |  

| Reference Marker | Body Part | Reference Location|  
| --- | --- | --- |  
| Hc | Head | head center (the cranial center, gives you position and scale) |  
| Hf | Head | face direction point (nose tip or muzzle tip — defines which way she's looking) |  
| El  | Head | left ear root (where the ears attach to the skull) |  
| Elt | Head | left ear tip — one segment you can rotate for expression |  
| Er | Head | right ear root |  
| Ert | Head | right ear tip |  
| S | Forelimb | Shoulder |  
| E | Forelimb | Elbow |  
| W | Forelimb | Wrist |  
| Kb | Forelimb | finger-base / palm-front (front edge of the palm where the fingers begin; W→Kb = palm depth 0.22H) |  
| Tf | Forelimb | front paw / fingertip (endpoint beyond Kb; Kb→Tf = finger length 0.26H, W→Tf = total reach 0.48H) |  
| Nc | Torso | neck/base-of-head or neck pivot |  
| Sc | Torso | shoulder/spinal point |  
| Pc | Torso | pelvic/spinal point |  
| H | Hindlimb | Hip |  
| K | Hindlimb | Knee |  
| Hk | Hindlimb | Heel |  
| T | Hindlimb | Ball of the Foot |  
| Th | Hindlimb | hind toe visible end (the forward extent of the foot beyond T) |  
| Tr | Tail | Root of the tail: where the tail attaches to the end of the spine |  
| Tt1 | Tail | end of root transition (~0.408H along centerline from Tr, where fur reaches mature length) |  
| Tt2 | Tail | peak of upper sweep (where the S-curve reaches its highest point — this is the point that most defines the tail's gesture) |  
| Tt3 | Tail | beginning of distal taper (~3.57H along centerline, where the tail starts narrowing) |  
| Tst | Tail | structural tip (4.08H along centerline) |  
| Tvt | Tail | visible fur tip (~4.49H, where the fur actually ends) |  

## Tail Curvature Note:
Interpolate between tail points with cubic Bézier curves. Six points with tangent handles gives you plenty of control to express different tail expressions (the S-sweep, a thinking curl, an excited lift) while preserving the structural length constraint — the arc length from Tr to Tst must always equal 4.08H regardless of the shape.  
