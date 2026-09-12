# GAME-001 — Mystery Dash: The Rec Center Mystery — Builder Handoff

**Status:** BUILD READY FOR MVP PROTOTYPE
**Source:** `docs/GAME-001-MYSTERY-DASH.md`
**Standards:** `docs/STUDIO-DESIGN-BIBLE.md`, `docs/standards/BLACK-HAIR-DIGITAL-STANDARD.md`, `docs/standards/CHARACTER-VISUAL-APPROVAL-STANDARD.md`

> This is the build contract. Do not add features outside this handoff. Character concept art establishes visual direction only; final production sprites remain pending.

## GAME
**Mystery Dash: The Rec Center Mystery**  
**Ages:** 7–11

## ONE-LINER
Run around the rec center, investigate suspicious kids, escape the Sneak, and figure out who took the missing Golden Sneaker.

## FIRST 10 SECONDS
- 0–2 sec: rec-center trophy case flashes; the Golden Sneaker disappears with a quick `POOF`.
- 2–5 sec: Nia, Malik, Zuri, and Jayden appear in a fast suspect lineup with `?` icons and the message **ONE OF THEM IS THE SNEAK.**
- 5–10 sec: the selected detective is already moving in the hallway. One suspect glances back and hurries around a corner. A nearby clue glints. The player can move to it immediately.
- First interaction: **CLUE FOUND +50** and a quick Case Board pulse.
- No tutorial wall. Use one-time visual control hints only.

## CORE LOOP
**OBSERVE → SUSPECT → INVESTIGATE → DISCOVER → RECONSIDER → ACCUSE → REVEAL → REPLAY**

- Move through the rec center and watch suspect behavior.
- Gather physical, location/time, and behavioral evidence.
- New evidence updates the Case Board but never automatically names the culprit.
- Follow, switch suspicion, investigate another zone, hide during a chase, or accuse.
- Correct accusation: reveal + celebration + detective sticker + score/time bonus.
- Wrong accusation: record scratch, wrong portrait marked, round continues if time remains.
- Caught during a chase: short funny stumble/wobble and drop one recoverable clue. No death, gore, weapons, or elimination animation.
- Timer expiration reveals the culprit and offers instant replay.

## CHARACTERS — CANONICAL NAMES, FOLLOW EXACTLY

### Ari — age 10 — selectable detective — girl
Deep brown skin with warm/red undertone; slim-soft oval child face; almond dark eyes; expressive brows; rounded nose tip; natural full lips. Small/medium knotless-style individual braids with believable box sections, shoulder-to-upper-back length, a few selected clear/gold-toned beads, weighted delayed swing. Roomy varsity/windbreaker layer, graphic tee, relaxed cargos, colorful high-top fictional sneakers, small studs. Quick bouncy run, leans into discoveries, bold and curious.

### Tre — age 10 — selectable detective — boy
Medium-dark brown skin with neutral-warm undertone; narrow-round child face; round-almond eyes; broader nose bridge than Ari; wide grin. Clean low taper/fade with dense short mini twists on top; compact silhouette with subtle compression/rebound rather than sway. Relaxed graphic tee, open zip hoodie, cargo joggers, crew socks, fictional statement sneakers. Focused lean-forward run and quick stop-and-look behavior.

### Nia — age 9 — recurring suspect — girl
Warm medium-brown skin with golden undertone; round-oval child face; soft full cheeks; wide dark eyes; small rounded nose; full lips. Two braided ponytails built from clear gathered sections, below-shoulder length, small number of colorful beads near ends, moving as weighted paired clusters. Varsity jacket, graphic top, active skort, crew socks, fictional high-top sneakers, bright backpack charm. Social baseline; checks backpack and lightly plays with a braid. Nervous tell: faster whole-braid/ponytail twisting.

### Malik — age 11 — recurring suspect — boy
Deep dark-brown skin with warm-neutral undertone; longer child face; strong brows; deep-set dark eyes; broad nose; big grin; tallest of the group without teen proportions. Neat front-to-back cornrows with intentional part lines into a short tapered finish. Basketball tee/jersey layer, undershirt, athletic shorts, tall socks, fictional basketball sneakers, basketball prop. Baseline: rhythmic dribble. Suspicious deviation: abruptly stops, tucks ball, reroutes.

### Zuri — age 10 — recurring suspect — girl
Dark brown skin with neutral-cool undertone; heart-oval child face; wider-set eyes; thick natural brows; broad-soft nose; expressive smile. Two high natural puffs with visible gathered bases, dense coily texture, irregular soft outer shape, sparing clips/cuffs/scrunchie detail, soft delayed bounce. Oversized graphic sweatshirt, wide-leg jeans, chunky fictional sneakers, art pouch with markers/pencils. Baseline: expressive hands/checks art pouch. Suspicious deviation: clamps hands to pouch and leaves quickly.

### Jayden — age 9 — recurring suspect — boy
Medium-brown skin with golden-neutral undertone; small oval child face; round dark eyes; softly curved brows; compact broad nose; mischievous half-smile; youngest/shortest silhouette. Defined short coils on top with clean low taper, compact textured crown with minimal large-scale motion. Matching kid track jacket/pants set, graphic tee, retro-style fictional sneakers, game-controller backpack charm. Baseline: thumb/controller idle motion. Suspicious deviation: motion stops, hands hide in pockets, detours.

## CHARACTER STANDARD
- Preserve all canonical names.
- Do not replace names with hairstyle/outfit labels.
- Characters must remain visibly child-aged.
- Follow the Black Hair Digital Standard for construction, movement, accessories, and gameplay-scale readability.
- Hair is identity first, not the recurring culprit clue system.
- Do not imitate recognizable commercial sneaker logos/silhouettes or another children's franchise style.

## ENVIRONMENT
One neighborhood rec center map with five connected zones:

`Gym → Game Room → Art Room → Snack Area → Hallway/Trophy Case → Gym`

Lived-in details: folding bleachers, basketball rack, summer/community-program banners, bulletin board with after-school flyers, Double Dutch signup/tutoring/local-team notices, backpacks/jackets on hooks, unfinished kid artwork, old-but-loved controllers, handwritten snack menu, lost-and-found bin, trophy case with the Golden Sneaker pedestal.

Five hide/interact locations:
1. bleachers
2. equipment bin
3. art-room curtain/storage divider
4. locker/cubby area
5. game-room furniture/arcade corner

Do not use generic graffiti or stereotype shorthand to signal Blackness.

## GENRE RULES — DEDUCTION
Every round contains:
- 1 Sneak
- 1 innocent Red Herring/Sus hiding an unrelated kid-sized secret
- 2 normal/clearable suspects

Roles randomize; identities and normal baseline behaviors do not.

### Evidence stages
Use three evidence stages per round.
- Clue 1 must fit at least 3/4 suspects or otherwise remain too broad to solve the case.
- Clues 1 + 2 must leave at least 2 plausible suspects.
- Full evidence set must identify exactly 1 valid Sneak.
- At least one later discovery should weaken or contradict a plausible early theory.
- Validate the clue matrix before a round starts; reroll invalid combinations.

### Evidence pool
Use a mix of:
- physical/object: shoe tread/scuff, clothing thread/fabric, backpack charm shape, snack wrapper/napkin mark, game token, marker/paint trace, sports tape, room-specific object
- location/time: room entry/exit, brief security snapshot, object before/after a visit, environmental timing cue
- behavior: break from normal idle habit, fleeing a location, hiding an object, repeated return, looking over shoulder

### V1 red-herring secret pool
1. Broken controller
2. Birthday surprise
3. Mascot/art mistake
4. Snack stash

Each red herring requires:
1. genuinely suspicious behavior
2. a real innocent explanation
3. discoverable clearing evidence

### Case Board
One-button visual Case Board showing suspect portraits, discovered evidence icons, known/observed rooms, and `?`, `✓`, and `⚠` states. It may show which suspects are consistent with a clue but must not rank suspects or announce the solution.

### Accusation
Player may accuse after at least one evidence item. Keep this adjustable so the first playtest can compare unrestricted early accusation versus a two-clue minimum.

### Chase
Target round timer: ~120 sec. The Sneak becomes more reactive as meaningful evidence accumulates. Chase raises pressure but must not replace deduction. Player can hide at one of five approved spots. Being caught drops one recoverable clue.

### Randomize each round
Sneak, red-herring child, red-herring secret, evidence placement, selected clue set, safe predefined character routes, preferred avoidance/hiding area.

Never randomize canonical names, appearances, personalities, or normal baseline behaviors.

## EXACT V1 CONTENT
- 1 rec-center map
- 5 connected zones
- 5 hide/interact spots
- 2 selectable detectives: Ari, Tre
- 4 suspects: Nia, Malik, Zuri, Jayden
- 1 mystery premise: Golden Sneaker
- 1 randomized Sneak per round
- 1 randomized red herring per round
- 3 evidence categories active per round
- 12 pre-authored evidence icons/records total
- 4 innocent-secret templates
- 1 timer target: ~120 sec
- 6 local detective sticker/reward marks

## CONTROLS
**Touch:** virtual joystick + one large context-sensitive `INVESTIGATE / HIDE / INTERACT` button + Case Board button; accusation occurs inside Case Board.  
**Keyboard:** WASD/arrows; Space/E context action; Tab Case Board; Enter confirm accusation; Esc pause.  
**Chromebook:** fully playable without a mouse.  
**Orientation:** landscape.

## JUICE
- clue found: quick glint, icon pop, +50 score popup, small Case Board pulse
- suspect cleared / secret resolved: satisfying stamp/check animation
- correct accusation: brief camera emphasis, confetti/particles, character victory reaction, sticker reveal
- wrong accusation: record scratch + playful reaction, no harsh punishment
- chase: music/tension layer, subtle edge cue, modest camera feedback; reduced-motion friendly
- fail/caught: brief wobble/stumble and recoverable clue drop

## ART DIRECTION
Warm polished dimensional 2D/2.5D children's-game style with readable silhouettes, expressive but child-aged faces, contemporary individual clothing, simplified but structurally believable Black hair, and a lived-in rec-center environment. Avoid chibi/toddler drift, mini-adult glam, same-face reuse, franchise imitation, and recognizable branded footwear.

## VISUAL QA STATE
- Written cast specs: READY
- Paired concept boards: ART TEST complete
- Full-cast concept lineup: ART TEST complete
- Gameplay-scale composite readability test: suitable to proceed with MVP visual direction
- Production sprites / in-engine animation: NOT FINAL and must still be reviewed against the visual standards

## SCORING & PERSISTENCE
Provisional:
- +50 evidence discovered
- +100 red-herring secret correctly resolved / suspect cleared
- +200 correct accusation
- +0–100 remaining-time bonus
- −50 wrong accusation, score floor 0

Local high score + six sticker/reward marks only. The game must remain fully playable when browser storage is unavailable.

## SAFETY & TECH
- single-player browser MVP
- no accounts, chat, multiplayer, trading, purchases, ads, external social links, or trackers
- HTML5; responsive desktop/mobile/Chromebook
- target smooth 60fps where supported
- fast first interaction prioritized over heavy assets
- event hooks only: `game_started`, `game_paused`, `score_updated`, `game_completed`, `achievement_unlocked`, `reward_earned`

## DO NOT BUILD
Multiplayer, chat, accounts, trading, cosmetics store, open world, complex dialogue system, pets, inventory economy, educational quizzes, extra maps, extra missing-item premises, large procedural mystery generator, user-generated content, tasks/mini-game tournaments, real-money purchases, or Mystery Dash hairstyle customization.

## PLAYTEST HYPOTHESIS
Kids ages 7–11 who enjoy MM2/Among Us-style suspicion and chase tension will voluntarily replay because the culprit, red herring, secret, clue placement, and evidence path change — and because later evidence can overturn their first theory.

Primary test question: **Do kids form a theory, revise it for an evidence-based reason, and voluntarily start another round?**
