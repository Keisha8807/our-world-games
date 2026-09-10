# Our World Games — Black Hair Digital Standard (v1)

**Status:** Required studio standard for character art and animation involving Black hair.

**Applies to:** concept art, AI-assisted concept art, 2D sprites, 2.5D characters, 3D models, animation, character customization, cosmetics, promotional art, and future Our World avatar systems.

**Informed by:** Dove **Code My Crown** and the Open Source Afro Hair Library (OSAHL).

**Important:** This is an internal Our World Games implementation and QA standard. It is **not** a claim of certification, endorsement, or formal compliance by Dove, the CROWN Coalition, OSAHL, or any contributor to Code My Crown.

---

## 1. Why this standard exists

Black hair is not a color swatch, a helmet, or one generic “curly” mesh.

Our games center Black children. Their hair must therefore receive the same design care as faces, animation, clothing, gameplay readability, and environment art.

Code My Crown was created by Black artists, academics, stylists, animators, and developers to improve how textured hair and protective styles are represented in games. Dove describes the guide as including detailed visual references, step-by-step creation guidance, 15 foundational digital sculpts, 360-degree reference material, cultural insight, and open-source technical resources.

Our World Games uses that work as a **design reference and quality benchmark** while building original characters and assets.

---

## 2. The core rule: hair is constructed, not labeled

A character spec must never stop at:

- “Black hair”
- “curly hair”
- “4c hair”
- “braids”
- “locs”
- “Afro”

Those descriptions are too broad to build from.

Every important character hair spec must define enough information for an artist or model to understand **how the style is actually constructed and how it should read in motion**.

### Required hair fields

For each hero, recurring character, or named NPC, specify:

1. **Texture / strand behavior** — coils, curls, waves, loc'd strands, braided strands, twists, etc. Numeric texture typing (for example 4a/4b/4c) may be included as a secondary descriptor, but it is not sufficient by itself.
2. **Style name** — the actual hairstyle.
3. **Base / scalp construction** — center part, side part, box sections, radial sections, cornrow direction, taper/fade area, gathered base, loose roots, etc.
4. **Length** — short, ear length, shoulder length, mid-back, etc.
5. **Volume / density** — compact, fluffy, high-volume, medium density, etc.
6. **Shape / silhouette** — what makes the hair recognizable from gameplay distance.
7. **Accessories** — beads, barrettes, cuffs, scrunchies, bows, headbands, durag/headwrap where contextually appropriate.
8. **Movement plan** — rigid, springy, swinging, weighted, clustered, delayed follow-through, minimal motion, etc.
9. **Small-screen read** — what must remain visible when the character is only a few dozen pixels tall.

---

## 3. Texture labels are supporting information, not the design

Texture typing can help communicate curl tightness, but it should not become a substitute for observation.

Two children can have similar curl patterns and completely different hairstyles, density, shrinkage, parting, length, or silhouette.

Our workflow prioritizes:

**specific real-world style reference → construction → silhouette → motion → texture label**

not:

**texture number → generic mesh**.

---

## 4. Protective styles require visible logic

Braids, twists, cornrows, loc styles, and other protective styles should show believable construction.

When the camera distance allows it, check:

- where the style originates at the scalp
- whether parting/sections make sense
- whether braid/twist thickness is consistent with the intended look
- whether gathered styles have believable tension and direction
- whether cornrow paths have intentional direction/pattern
- whether beads/cuffs are attached to appropriate strands
- whether accessories have plausible scale and weight
- whether scalp visibility is natural for the chosen style

Avoid the visual shortcut where braids appear to float from an undifferentiated hair cap.

---

## 5. Hair is dynamic, but different styles move differently

Do not apply one universal “hair bounce” animation.

### Examples

**Short coils / taper with textured top**
- very little large-scale swing
- subtle compression/rebound
- silhouette stays mostly stable

**High puffs / Afro puffs**
- soft delayed bounce as a mass
- slight secondary motion at the outer edge
- should not behave like hard spheres

**Loose Afro / high-volume coils**
- mass moves as a soft volume
- edge movement is subtle and irregular
- avoid long straight-hair swishing

**Long braids / twists**
- weighted follow-through
- clustered strand movement rather than one solid slab
- delay after turns, jumps, or sudden stops
- accessories can add additional weight at the ends

**Beaded braids**
- beads should remain attached to braid ends
- the ends can have more pronounced weighted swing
- avoid chaotic bead clipping through the face/body

**Locs**
- motion depends heavily on length, thickness, styling, and whether they are loose, tied, or gathered
- do not animate all loc styles like straight loose hair

The goal is not expensive simulation in every MVP. The goal is **credible behavior appropriate to the visual style**.

---

## 6. Silhouette matters at gameplay distance

Mystery Dash and other browser games will often show children fairly small on screen.

Every hairstyle must pass two tests:

### Portrait test
Does it look accurate and appealing close up?

### Gameplay test
Can the hairstyle still be recognized as intentional when the character is small and moving?

If detailed parting disappears at gameplay scale, preserve the larger shape, length, accessories, and movement cues that communicate the style without caricaturing it.

Do not exaggerate hair into a stereotype just to make the silhouette readable.

---

## 7. Variation must exist across the cast

Do not create six Black children by changing only skin tone and hair.

Across a cast, vary:

- face shape
- nose shape
- eye shape
- lip shape
- skin depth and undertone
- body build and height
- hair texture and styling
- hair length and volume
- clothing silhouette
- posture and movement
- interests and signature objects

Hair is one part of identity, not the entire character.

Do not make every girl braided and every boy faded.

---

## 8. Hair can change over time

A recurring Black character does not need one permanent hairstyle forever.

Our future character bible may track:

- canonical natural texture
- current style
- alternate approved styles
- home/sleep hair states where relevant
- event/season styles

Examples of believable continuity:

- puffs → twists → braids
- coils → cornrows for sports/weekend → coils again
- long braids → braided bun
- locs worn loose → ponytail/gathered style

A change in hairstyle should still preserve facial identity, age, body, personality, and other recognizable character cues.

---

## 9. Context matters

Hair presentation should make sense for the scene.

Examples:

- a bonnet, scarf, or durag can make sense at home, bedtime, early morning, or during hair care
- a sports style may prioritize secure/gathered hair
- a special event may inspire a fresh style
- a child may wear beads, clips, cuffs, bows, headbands, or no accessories at all

Do not scatter culturally specific items into scenes merely to signal “Black.”

---

## 10. Hair must not become a stereotype or permanent clue system

In mystery games, hair or hair accessories may occasionally participate in a clue when narratively appropriate, but Black hair should **not** become the repeated source of incriminating evidence.

For example, do not build a system where:

- “bead found = girl with braids did it”
- “loc on floor = kid with locs did it”
- the most culturally distinctive hairstyle is always the suspicious identifier

Mystery evidence should usually draw from a broader pool:

- shoes / tread
- clothing fibers
- backpacks or charms
- hobby objects
- room/location evidence
- timestamps
- behavior
- environmental traces
- witness observations

Hair is identity first, not a gameplay gimmick.

---

## 11. Art-generation brief requirements

Before generating or commissioning a named character, the brief must include:

### Character identity
- name
- age
- gender presentation if relevant
- skin depth + undertone
- face shape and distinguishing facial features
- body build / height relationship

### Hair identity
- texture/strand behavior
- exact style
- parting/construction
- length
- volume/density
- accessories
- silhouette
- motion expectation

### Clothing identity
- top/layer
- bottoms
- shoes
- accessories
- signature object

### Age lock
Include an explicit instruction that the character must look like a child of the stated age and must not be glamorized or given adult body proportions.

---

## 12. AI-assisted concept art rules

AI can be used to explore **original** character concepts, but generated outputs must still pass human visual QA.

Do not accept an image merely because the prompt contained the correct words.

Reject or regenerate if the output shows:

- generic “brown-skinned cartoon kid” faces reused across characters
- incorrect or nonsensical braid origins/parting
- braids merging into fingers, clothing, or each other
- beads floating or fused incorrectly
- locs rendered as generic straight ropes without believable root/volume logic
- puffs rendered as rigid perfect spheres
- textured hair behaving visually like straight silky hair
- adult makeup, lashes, body proportions, or influencer styling on young children
- girls and boys differentiated only by lashes/pink/blue
- hair accessories fused to scalp or placed randomly
- skin tone shifts that erase character continuity

### Source-material boundary
Do **not** upload OSAHL downloadable 3D model files into generative-AI training workflows or use them to create AI training sets. OSAHL's published license explicitly prohibits use of the Library for AI training sets/databases.

If an OSAHL asset is ever considered for direct use in a game, review the current OSAHL license at that time and document the asset, artist, source, license version, and permitted use before incorporating it.

For ordinary AI-assisted concepting, use our **written internal specification plus lawfully usable visual references** rather than assuming a third-party asset can be fed into an AI system.

---

## 13. 2D / 2.5D MVP guidance

For a small browser MVP, perfect strand-level simulation is not required.

Prioritize:

1. accurate silhouette
2. believable root/part construction where visible
3. recognizable style
4. age-appropriate scale
5. motion that fits the style
6. no clipping that destroys the style

A simplified but respectful style is better than a highly detailed but structurally wrong one.

---

## 14. 3D / future Our World guidance

Before production-ready 3D hair is approved, evaluate:

- front, side, back, and top views
- scalp/root construction
- silhouette at multiple distances
- deformation during run/jump/turn/sit animations
- clipping with shoulders, backpacks, hats, hoodies, and accessories
- LOD behavior
- performance cost on target mobile hardware

For long braids, twists, or locs, test rapid direction changes and crouch/sit poses early.

---

## 15. Character hair QA gate

A named character is **not visually approved** until the actual art/model exists and passes review.

Use these states:

- **SPEC DRAFT** — description incomplete
- **SPEC READY FOR ART** — sufficient detail to create art
- **ART TEST** — first visual implementation exists
- **REVISION REQUIRED** — one or more standards fail
- **VISUALLY APPROVED** — reviewed at portrait + gameplay scale

Do not use “representation check: YES” before art exists.

### Visual approval checklist

- [ ] The child reads at the intended age.
- [ ] The face is distinct from other cast members.
- [ ] Skin depth/undertone matches the approved character spec.
- [ ] The hairstyle is specific, not generic.
- [ ] Parting/construction is believable at the chosen art scale.
- [ ] Hair volume and silhouette make sense.
- [ ] Accessories attach and move plausibly.
- [ ] Hair motion matches the style.
- [ ] Character remains readable on a phone-sized screen.
- [ ] The style does not rely on stereotype exaggeration.
- [ ] The child still looks like the same character in movement/alternate poses.

---

## 16. Reference workflow

For each named character:

1. Write the character spec.
2. Gather a **small reference board** for hairstyle construction, child-age clothing, and movement.
3. Use Code My Crown / OSAHL educational material to check whether our construction assumptions are sound.
4. Create original concept art.
5. Review portrait view.
6. Review side/back view if the game will show them.
7. Review gameplay-size silhouette.
8. Test movement.
9. Revise.
10. Only then mark **VISUALLY APPROVED**.

Do not copy a real child's identity or one reference photo exactly. References teach construction and styling; our characters remain original.

---

## 17. Source and license notes

Primary educational references:

- Dove — Code My Crown: https://www.dove.com/us/en/campaigns/purpose/code-my-crown.html
- Open Source Afro Hair Library: https://afrohairlibrary.org/
- OSAHL current license: https://afrohairlibrary.org/license/

Code My Crown and OSAHL remain the work of their respective creators/rights holders. This document summarizes **Our World Games' own operating rules** inspired by those resources; it does not reproduce their full guide, assets, or code.

---

## 18. Studio principle

> **Black hair is character design, construction, movement, culture, and continuity — not a hat placed on a brown avatar.**

When we cannot render a style faithfully at the current technical level, simplify carefully or choose a style we can execute well rather than shipping a visibly incorrect version.

---

*Version 1 — 2026-09. Review deliberately as the project moves from browser prototypes into production art and 3D.*