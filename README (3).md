# Our World Games — Black Kids Game Universe

Great kids' games where Black kids happen to be the heroes. Not a catalog where every game is explicitly *about* being Black.

Black kids saving kingdoms, running businesses, solving mysteries, caring for pets, learning to read, styling hair, playing ball, making music, and building their block. Representation is the default world, not the lesson.

## The plan

**Concept → tiny MVP → play it → improve the fun → add content → add more games → build portal → connect the world.**

Not: build 300-game platform → pray kids like it.

Each game starts as a small browser MVP that proves ONE player motivation. Winners get absorbed into **Our World** — a connected neighborhood.

| # | Game | Tests | Status |
|---|------|-------|--------|
| 001 | Mystery Dash: Rec Center | suspense, deduction, replayability | 🟡 Concept Card in progress |
| 002 | Style Rush | identity, customization, collecting | ⚪ Next |
| 003 | Pet ER: Rescue Vets | care, nurture, collecting | ⚪ Queued |
| 004 | Double Dutch Hero | rhythm, arcade, score-chasing | ⚪ Queued |
| 005 | Grow Your Block | progression, economy, retention | ⚪ Queued |
| 006 | Challenge Party | elimination pressure, mini-games | ⚪ Later |
| — | Our World | connected neighborhood | 🔒 After 3–6 proven MVPs |

See `ROADMAP.md` for the full sequence and what each game teaches us.

## Lanes

- **Play (5–12):** entertainment — Mystery Dash, Double Dutch, Challenge Party
- **Learn (4–10):** academics disguised as games — Word Dash, Math Monsters, Story Detective
- **Life (7–14):** practical skills — Lemonade Boss, Pet ER, Grow Your Block

## Repo layout

```
docs/                          # Concept cards, prompts, research (start here)
  GAME-CONCEPT-CARD-TEMPLATE.md
  GAME-001-MYSTERY-DASH.md
  MVP-BUILDER-PROMPT.md
  research/                    # market notes, kid playtest notes (no kid PII ever)
games/
  mystery-dash/                # Game #001 MVP code goes here
  style-rush/                  # Game #002 (empty until #001 tested)
  pet-er/                      # Game #003
```

## Rules for every MVP

1. ONE sentence pitch a 7-year-old understands.
2. ONE core loop, fun in 10 seconds.
3. ONE character, ONE map, ONE score system.
4. No accounts, chat, multiplayer, trading, purchases, or open world in V1.
5. Keyboard + mouse + touch. 60fps. Fast load. Chromebook-friendly.
6. Local high scores only. No kid data leaves the browser.
7. Goal of V1: **prove the core game is fun.** Nothing else.

## Workflow per game

1. Fill out a Concept Card in `docs/` (copy the template).
2. Paste the finished card into `MVP-BUILDER-PROMPT.md` and generate the browser game into `games/<slug>/`.
3. Playtest with real kids. Record: replays unprompted? session length? "one more round?" quote?
4. Only then: add content, then next game.

## Privacy

This is child-directed work. NEVER commit: kids' names, photos, videos, emails, school info, analytics with identifiers, or API keys. Playtest notes stay anonymous ("Tester A, age 8").
