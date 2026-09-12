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

**Milestone 1 — deduction engine implemented; browser/build verification pending**

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

The colored geometry is **internal placeholder art only**. It is not a kid playtest build and does not replace the approved character direction.

A GitHub Actions build check has been added at `.github/workflows/mystery-dash-ci.yml`. If Actions are enabled for the repository/branch, it runs `npm install` + `npm run build` for Mystery Dash changes.

## Build order

1. **Movement + map shell** — implemented.
2. **Deduction engine** — implemented; verify in browser/build before locking.
3. **NPC behavior** — canonical baseline behaviors + suspicious deviations.
4. **Pressure/chase** — only after deduction works in play.
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
- [ ] Browser/build verification completed
- [ ] NPC baseline/suspicious behavior implemented
- [ ] Touch + keyboard verified on target devices
- [ ] Chase adds pressure without replacing deduction
- [ ] Gameplay-scale character assets integrated
- [ ] 60fps target checked on phone + Chromebook
- [ ] Instant restart within two actions verified in play
- [ ] Anonymous kid playtest completed
- [ ] Continue / revise / kill decision recorded

## Hard scope rule

Do not add multiplayer, accounts, chat, trading, cosmetics store, extra maps, extra mystery premises, pets, open world, real-money purchases, or a large procedural mystery generator during V1.
