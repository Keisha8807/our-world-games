# Mystery Dash (Game #001) — MVP build

**Build branch:** `build/mystery-dash-v1`

## Source of truth

- Concept: `../../docs/GAME-001-MYSTERY-DASH.md`
- Builder handoff: `../../docs/GAME-001-MYSTERY-DASH-BUILDER-HANDOFF.md`
- Studio rules: `../../docs/STUDIO-DESIGN-BIBLE.md`
- Visual standards: `../../docs/standards/`

## Stack

- Phaser
- TypeScript
- Vite
- HTML5 browser MVP

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Current milestone

**Milestone 2 — deduction + first NPC behavior layer implemented; CI build green**

Current prototype includes:
- one simplified rec-center layout
- Ari keyboard movement
- four named suspect placeholders
- randomized Sneak + red herring + innocent secret each round
- three sequential evidence stages
- round validation that guarantees:
  - clue 1 leaves at least three plausible suspects
  - clues 1 + 2 leave exactly the Sneak + red herring
  - clue 3 leaves exactly one valid Sneak
- Case Board that shows discovered evidence and plausible/cleared suspects without explicitly naming the culprit
- accusation by click or keyboard number keys
- wrong-accusation penalty while the case continues
- correct reveal, red-herring secret explanation, score/time bonus, timeout reveal, and instant replay
- 120-second timer
- canonical baseline behavior cues for Nia, Malik, Zuri, and Jayden
- suspicious deviations for the Sneak and red herring without making nervous behavior automatic proof
- close-range `E` investigation after clue 2 that can explain the red herring's innocent secret without automatically clearing the whole evidence trail

The colored geometry is **internal placeholder art only**. It is not a kid playtest build and does not replace the approved character direction.

### Build validation

GitHub Actions workflow: `.github/workflows/mystery-dash-ci.yml`

Latest deduction/NPC milestone: **TypeScript + Vite build passed**.

CI verifies compilation/build only. It does **not** replace real browser/device testing or kid playtesting.

## Build order

1. **Movement + map shell** — implemented.
2. **Deduction engine** — implemented and build-verified.
3. **NPC behavior** — first baseline/suspicious-deviation layer implemented and build-verified.
4. **Pressure/chase** — HOLD until the deduction loop is manually played; chase must not become the only fun part.
5. **Touch controls** — joystick + context button + Case Board.
6. **Gameplay-scale character assets** — replace placeholders without changing canon.
7. **Juice + audio hooks + persistence** — score, stickers, high score, reduced-motion-safe feedback.
8. **Kid playtest** — no new maps/content until the core loop passes.

## V1 checklist

- [x] Builder handoff created
- [x] Phaser/TypeScript/Vite scaffold started
- [x] Simplified map/movement scene created
- [x] Deduction engine code guarantees exactly one defensible solution per generated round
- [x] Case Board code supports evidence-based narrowing/reconsideration
- [x] Accusation + reveal + instant replay implemented
- [x] TypeScript/Vite build passes CI
- [x] First NPC baseline/suspicious behavior layer implemented
- [ ] Core deduction round manually played in browser
- [ ] Touch + keyboard verified on target devices
- [ ] Chase adds pressure without replacing deduction
- [ ] Gameplay-scale character assets integrated
- [ ] 60fps target checked on phone + Chromebook
- [ ] Instant restart within two actions verified in play
- [ ] Anonymous kid playtest completed
- [ ] Continue / revise / kill decision recorded

## Hard scope rule

Do not add multiplayer, accounts, chat, trading, cosmetics store, extra maps, extra mystery premises, pets, open world, real-money purchases, or a large procedural mystery generator during V1.
