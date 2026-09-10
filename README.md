# Our World Games — Black Kids Game Universe

Great kids' games where Black kids happen to be the heroes. Not a catalog where every game is explicitly *about* being Black.

Black kids saving kingdoms, running businesses, solving mysteries, caring for pets, learning to read, styling hair, playing ball, making music, and building their block. Representation is the default world, not the lesson.

## The plan

**Concept → tiny MVP → play it → improve the fun → add content → add more games → build portal → connect the world.**

Not: build 300-game platform → pray kids like it.

Each game starts as a small browser MVP that proves ONE player motivation. Winners get absorbed into **Our World** — a connected neighborhood.

| # | Game | Tests | Status |
|---|------|-------|--------|
| 001 | Mystery Dash: Rec Center | suspense, deduction, replayability | 🟡 Concept + cast refinement |
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
docs/                            # Design system (start here)
  STUDIO-DESIGN-BIBLE.md         # Written once, inherited by every game
  standards/                     # Reusable visual/cultural implementation standards
    BLACK-HAIR-DIGITAL-STANDARD.md # Code My Crown-informed hair construction + QA rules
  GAME-CONCEPT-CARD-TEMPLATE.md  # Lean per-game card — earns permission to build
  modules/                       # Genre modules: DEDUCTION, FASHION, CARE, RHYTHM, ECONOMY
  BUILDER-HANDOFF-TEMPLATE.md    # Compressed build contract generated from an approved card
  MVP-BUILDER-PROMPT.md          # Wrapper prompt; Builder Handoff is pasted into it
  GAME-001-MYSTERY-DASH.md       # Game cards live here
  research/                      # market notes, playtest notes (no kid PII ever)
games/
  mystery-dash/                  # Game #001 MVP code goes here
  style-rush/                    # Game #002 (empty until #001 tested)
  pet-er/                        # Game #003
```

## Rules for every MVP

1. ONE sentence pitch a child in the target range understands.
2. ONE clear core loop, with the first satisfying interaction in roughly 10 seconds.
3. Keep V1 countable and small; exact character/map/content counts come from the approved card.
4. No unapproved accounts, chat, online multiplayer, trading, purchases, ads, trackers, or open world in V1.
5. Keyboard + touch first-class; Chromebook-friendly; target smooth 60fps where supported; fast first interaction.
6. Local-only progress/high scores where needed. No unnecessary kid data leaves the browser.
7. Goal of V1: **prove the core game is fun and test the stated playtest hypothesis.** Nothing else.
8. Named characters stay named. Do not compress them into hairstyle/outfit labels during handoff or build.
9. A written representation spec may be READY FOR ART; actual visual approval happens only after artwork passes the shared standards.

## Workflow per game

1. Copy `docs/GAME-CONCEPT-CARD-TEMPLATE.md`, fill the core card + relevant genre module. The Studio Design Bible and shared standards are inherited — don't rewrite them.
2. For character-driven games, preserve canonical names and enough face/hair/clothing/movement detail to keep every child distinct. Use `docs/standards/BLACK-HAIR-DIGITAL-STANDARD.md` for Black hair art/animation.
3. Approve the design → condense it into a Builder Handoff (`docs/BUILDER-HANDOFF-TEMPLATE.md`) without deleting identity/rules → paste that handoff into `MVP-BUILDER-PROMPT.md`.
4. Playtest with real kids. Record: did they understand it, replay unprompted, change strategy, ask for another round/content?
5. Only then: revise/add content, then move to the next game.

## Representation source note

Our internal Black hair standard is informed by Dove **Code My Crown** and the Open Source Afro Hair Library. Their guides/assets remain their creators' work; Our World Games does not claim certification or endorsement. Third-party source models are not stored here by default. Review the current source license before directly incorporating any external downloadable asset.

## Privacy

This is child-directed work. NEVER commit: kids' names, photos, videos, emails, school info, precise location, analytics with identifiers, or API keys. Playtest notes stay anonymous ("Tester A, age 8").
