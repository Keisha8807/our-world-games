# Game #001 — MYSTERY DASH: The Rec Center Mystery

**Status:** DRAFT — approve the cast, secrets, and clue sets → APPROVED → build.
**Inherits:** Studio Design Bible v1
**Genre module:** `modules/DEDUCTION.md` (filled below)

---

## CORE CARD

### 1. Kid Test
Run around the rec center, investigate suspicious kids, escape the Sneak, and figure out who took the missing item.

### 2. Game Identity / Fantasy
You're hanging out at the neighborhood rec center when the Golden Sneaker trophy goes missing. One of the four kids is secretly the Sneak. You've got two minutes to find evidence, catch who's acting sus, and point the finger at the right one.

### 3. Emotional Promise
`Suspicion → tension → "WAIT, I was wrong!" → reveal → "run it back"`

### 4. Replay Hook
Every round re-rolls the Sneak, the red-herring kid and their secret, and where the evidence is hidden. Same rec center, never the same answer. Wrong accuse shows you the clue you missed — so you *know* you can get it next time.

### 5. First 10 Seconds
Trophy case glows → sneaker vanishes with a *poof* → four kids freeze in a line-up with (?) bubbles → "FIND THE SNEAK" → you're already moving. Within a few steps someone glances over their shoulder and bolts. No menu, no tutorial screen; controls shown as a one-time ghost overlay.

### 6. Core Loop
`OBSERVE → SUSPECT → INVESTIGATE → DISCOVER → RECONSIDER → ACCUSE → REPLAY`
- **Player action:** run room to room, grab glowing evidence, watch who acts sus, tag the kid who's hiding, hide when chased.
- **Immediate result:** evidence pops onto the Case Board and matching suspects pulse; chase music when pursued.
- **Reward:** correct accuse → confetti, drumroll reveal, detective badge, time bonus.
- **Fail state:** caught by the Sneak → drop one clue (re-collectable) + 3s wobble, Sneak dashes off. Wrong accuse → record scratch, Sneak does a little dance, "You missed the popcorn!", instant replay. Timer out → reveal + replay.

### 7. Theme Test
- **Mechanic check:** YES — three-clue elimination + a chaser + a decoy is fun on its own (Outfoxed! logic with a clock).
- **Identity check:** YES — contemporary Black kids, a real neighborhood rec center, and a highly specific cast make it unmistakably ours.

### 8. Hero & Cast Snapshot *(Studio Character Standard applies)*
**Playable detectives (pick 1 of 2 at start):**
- **Zuri** — 4b hair in two high puffs with a gold-tipped scrunchie, deep brown/warm undertone, oversized green windbreaker, magnifier on a lanyard, quick bouncy run.
- **Malik** — short 4a twists with a taper, medium brown/golden undertone, striped hoodie + rolled cuffs, magnifier in the front pocket, determined lean-forward run.

**Suspects (all innocent-looking, one is the Sneak):**
- **Puffs** — 4c big double puffs with pink bobbles, dark brown/cool undertone, purple jacket, always bouncing. Tells: purple fiber, bounce trail.
- **Red Kicks** — low fade with a hard part, medium-deep brown/warm, tall for his age, red high-tops he's clearly proud of, always running. Tells: red scuff, speed lines.
- **Beads** — waist-length box braids with gold beads at the ends, light brown/golden, sketchbook under her arm, walks slow and observes. Tells: gold bead, paper scrap.
- **Headphones** — short 4a twists with a lineup, deep brown/neutral, stocky, big over-ear headphones, dribbling a basketball. Tells: static note, ball print.

**Representation spec check:** YES.

### 9. V1 Environment — The Rec Center (one map, 5 rooms in a loop)
Gym → Game Room → Art Room → Snack Window → Hallway → Gym.
Three details that make it ours: hand-painted "REC CENTER SUMMER LEAGUE" banners in the gym; a snack window with hot fries, quarter waters, and a hand-written price sign; a bulletin board with a Double Dutch sign-up sheet and a lost bonnet notice.
Hiding spots (5): bleachers, locker, art-room curtain, equipment bin, snack counter.

### 10. Countable V1 Content
- 1 map, 5 rooms, 5 hiding spots
- 2 playable detectives, 4 suspects
- 1 mystery premise (Golden Sneaker) with randomized culprit, decoy, secret, and evidence placement
- 3 evidence types per round (12 pre-authored evidence icons total)
- 4 red-herring secrets
- 2 hidden roles (Sneak, Sus) + 2 Normal
- 1 timer setting (120s)

### 11. Controls
- **Touch:** virtual joystick + one big context TAP button (grab / hide / tag) + Case Board button + Accuse from the board.
- **Keyboard:** WASD/arrows, Space/E = action, Tab = Case Board, click/Enter to accuse.
- **Chromebook (no mouse):** fully playable on keyboard.

### 12. Out of V1
Multiplayer, chat, accounts, trading, cosmetics store, open world, dialogue system, Witness/Helper roles, tasks/mini-games, pets, inventory economy, educational quizzes, extra maps, extra mystery premises (Trophy, Controller, Art Ribbon, Cash Box are parked), procedural clue generation, mini-game tournaments.

### 13. Playtest Hypothesis + Kill/Continue
- **Hypothesis:** Kids 7–11 who enjoy MM2/Among Us–style tension will voluntarily replay because the culprit, decoy, and evidence change every round.
- **Continue if:** testers understand the loop without explanation, 3+ unprompted replays in 10 minutes, at least one "one more round" / "WAIT it was HIM" moment.
- **Kill / rework if:** clues feel unfair or random, accusations become guesses, or the chase isn't exciting.
- **Future World Connection:** Rec Center; earned Detective Stickers may transfer later.

---

## DEDUCTION MODULE

### D1. Roles
4 suspects → **1 Sneak** (took it), **1 Sus** (innocent decoy with a secret), **2 Normal**. Assigned randomly each round; Sus drawn from the three non-Sneaks.

### D2. Hidden information
Who the Sneak is. (The player also doesn't know who the Sus is — that's the trap.)

### D3. Clue logic
Three evidence icons per round, visual only. Generator rule: **Clue 1 fits 3/4 suspects, Clues 1+2 fit 2/4, all 3 fit only the Sneak.** No single clue solves it. Pre-authored evidence sets per suspect (12 icons); the game picks the set for whoever is Sneak and scatters it across ≥3 different rooms.

### D4. Red herrings
The Sus is hiding one of 4 secrets: **broke a controller / hid a birthday cupcake / painted the mascot purple / ate all the snacks.** They act guilty. Tagging them pops a funny reveal, clears them (✅), +100. If the Sus's secret is thematically near a clue (purple paint vs. purple fiber), that's the point.

### D5. Behavioral evidence
- **Sneak:** occasional quick dash between rooms, over-the-shoulder glance, drops a sparkle; chases the player if they get close while holding 2+ clues.
- **Sus:** runs *from* the player, ducks into hiding spots, (!!) → (?) bubble.
- **Normal:** wander, idle emotes (dribble, sketch, bounce, stretch).

### D6. Solution validation
Accuse anytime from the Case Board. Correct: +200, +0–100 time bonus, accuracy bonus if all 3 clues held. Wrong: −50 (floor 0), the missed clue is shown ("You missed the popcorn!"), round continues if time remains.

### D7. Case board
🔍 button. Four faces auto-marked ✅ (cleared) / ❓ (unknown) / ⚠️ (matches held clues). Held evidence as icons; tap an icon → matching faces pulse. No text notes.

### D8. Pressure
120s timer + the Sneak as a chaser. Caught = drop one clue (re-collectable) + 3s wobble. Never a death, never a wall.

### D9. Randomization per round
Sneak, Sus, Sus secret, evidence room placement, hiding spot the Sus prefers, detective choice.

---

## Scoring (for the build)
+50 per clue · +100 Sus tagged · +200 correct accuse · +0–100 time bonus · −50 wrong accuse (floor 0). Local high score, graceful fallback if storage unavailable.

**Approval gate:** confirm (a) the two detectives, (b) the four suspects' specs, (c) the four secrets, (d) one-premise V1 → flip to APPROVED → generate Builder Handoff → build.
