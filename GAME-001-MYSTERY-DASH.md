# Game Concept Card #001 — MYSTERY DASH: The Rec Center Mystery

**Status:** DRAFT — needs approval before building. See playtest plan at bottom.

## 1. One-liner
> Run around the rec center, find clues, avoid the Sneak, and figure out who stole the item before time runs out.

**Tagline:** Everybody's hiding something. Find out who took it.

## 2. Basics
- **Title (working):** Mystery Dash
- **Ages:** 7–11, touch-first
- **Fantasy:** You're hanging out at the neighborhood rec center when something disappears. One of the 4 kids is secretly the Sneak. Gather evidence and accuse before time runs out.
- **World note:** It's their rec center, their friend group, their game. Black kids are the default cast, not tokens.

## 3. Core loop (V1)
`OBSERVE → SUSPECT → INVESTIGATE → DISCOVER → CHANGE YOUR MIND → ACCUSE → REPLAY`
- Player action: run room to room, grab glowing clues, watch who acts sus, hide when chased
- Immediate result: clue popup (+50), Case Board narrows suspects, chase music on pursuit
- Reward: correct accuse + confetti + badge + time bonus; Sus caught +100
- Difficulty ramp: 90→120s timer (start 120s, tighten later), Sneak faster each mystery, clues spread wider
- Fail state: caught = drop 1 clue + 3-sec slowdown, NO death/gore; wrong accuse = funny Sneak dance-escape + "you missed X" hint, instant replay
- Replay hook: new random Sneak + new Sus + new clue spots every round; "I haven't been fooled / I was SO close"

## 4. Hero & cast (readable in 2 seconds each)
- **You (Detective):** customizable Black kid, magnifier icon, expressive run.
- **Suspect A — Puffs:** big puffs, purple jacket, always bouncing. Tells: purple fiber, bounce trail.
- **Suspect B — Red Kicks:** low fade, red sneakers, always running. Tells: red scuff, speed lines.
- **Suspect C — Beads:** long braids + gold beads, sketchbook, walks slow. Tells: gold bead, paper scrap.
- **Suspect D — Headphones:** short twists, headphones, dribbling basketball. Tells: static note, ball print.

V1 story roles (hidden, randomized per round):
- **Sneak (1):** stole the item. Occasionally dashes rooms, shoulder-glance, drops sparkle.
- **Sus / Red Herring (1 innocent):** hiding an unrelated funny secret, runs FROM player, hides, (!!)→(?) bubble. Catch to reveal + clear.
- **Normal (2):** walk, idle emotes. Confusing attributes only.

Sus secret pool (V1, pick 1): broke a controller / hid a birthday cupcake / painted mascot purple / ate the snacks.

## 5. Map — Rec Center (ONE map, 5 rooms in a loop)
Gym → Game Room → Art Room → Snack Area → Hallway → back to Gym.
- Hiding spots (5): bleachers, locker, curtain, equipment bin, snack counter.
- Art direction: warm, modern neighborhood rec center, afternoon light; gym wood + banners, game room neon-lite, art room colorful, snack area cozy. Original characters and UI — nothing copied from existing franchises.

## 6. V1 content — 5 mysteries, same map
1. Golden Sneaker — footprint, red scuff, popcorn
2. Trophy — gold star sticker, purple paint, torn ticket
3. Game Controller — battery, chip crumbs, blue wire
4. Art Ribbon — paint smudge, gold bead, paper scrap
5. Cash Box — coin, grease spot, hallway key

Clue rule: Clue 1 matches 3/4 suspects, Clues 1+2 match 2/4, all 3 match ONLY the Sneak. Never all in one room.

## 7. Deduction logic (V1, buildable)
- Pre-author 3 clue-sets per suspect per mystery (icons only, minimal text) instead of procedural generation.
- Randomize: Sneak (1/4), Sus (1 of remaining 3), Sus secret, clue room placement.
- Case Board (🔍 button): 4 faces auto-marked ✅/❓/⚠️ + collected clue icons; tap clue → pulse matching suspects. Game does the logic; kid gets the aha.
- OUT of V1: Witness/Helper roles, cameras/timestamps, alibi dialogue, tasks, mini-game tournaments.

## 8. Controls
- Touch: virtual joystick + big TAP buttons (hide / grab / accuse).
- Keyboard/mouse: WASD/arrows + Space/E + click. Mouse for board/accuse.
- Chromebook: full keyboard playable, no multi-touch required.

## 9. Juice
- Success: clue pop +50, sparkle burst, board pulse, correct-accuse confetti + badge + drumroll reveal.
- Fail: caught = boing + dropped-clue icon floats; wrong accuse = record-scratch + Sneak dance.
- Chase: music shift, vignette pulse, small screen shake (subtle, kid-safe).

## 10. Systems (V1)
- Score: +50/clue, +100 Sus caught, +200 correct accuse, +0–100 time bonus, −50 wrong accuse (floor 0).
- Local high score + per-mystery best. localStorage with graceful fallback.
- Pause/resume, game-over (timer), instant restart (<2 taps), sound on/off.
- Events/hooks for future portal: game_started, score_updated, game_completed, reward_earned.

## 11. Deliberately OUT of V1
Multiplayer, accounts, chat, trading, store/purchases, open world, dialogue system, 15 roles, tasks, pets, inventory economy, educational quizzes.

## 12. Expansion (later)
New maps (School, Museum, Carnival, Haunted House), Witness/Helper roles, camera/timestamp evidence, tasks, multiplayer 6–10, Detective Board collection feeding Our World, seasonal mysteries.

## 13. Playtest plan
- Testers: A (age ?), B (age ?) — anonymous, no PII.
- Watch: unprompted replays in 10 min? Do they chase the Sus? Do they say "WAIT IT WAS HIM"? Session length? Accuse accuracy by round 3?
- Continue if: 3+ unprompted replays, at least 1 "one more round" quote. Kill/tweak if: clues feel unfair, accusations feel random, or no chase excitement.
