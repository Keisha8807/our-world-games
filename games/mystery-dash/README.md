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

**Milestone 0 — movement + room readability scaffold**

Current prototype includes:
- one simplified rec-center layout
- Ari movement with keyboard
- four named suspect placeholders
- one clue interaction
- Case Board toggle

The colored geometry is **internal placeholder art only**. It is not a kid playtest build and does not replace the approved character direction.

## Build order

1. **Movement + map shell** — get around the rec center quickly and clearly.
2. **Deduction engine** — randomized Sneak/red herring, valid clue matrix, Case Board updates, accusation/reveal.
3. **NPC behavior** — canonical baseline behaviors + suspicious deviations.
4. **Pressure/chase** — only after deduction works.
5. **Touch controls** — joystick + context button + Case Board.
6. **Gameplay-scale character assets** — replace placeholders without changing canon.
7. **Juice + audio hooks + persistence** — score, stickers, high score, reduced-motion-safe feedback.
8. **Kid playtest** — no new maps/content until the core loop passes.

## V1 checklist

- [x] Builder handoff created
- [x] Phaser/TypeScript/Vite scaffold started
- [x] Simplified map/movement scene created
- [ ] Deduction engine produces exactly one defensible solution
- [ ] Case Board supports evidence-based reconsideration
- [ ] Accusation + reveal + instant replay work
- [ ] Touch + keyboard verified
- [ ] Chase adds pressure without replacing deduction
- [ ] Gameplay-scale character assets integrated
- [ ] 60fps target checked on phone + Chromebook
- [ ] Instant restart within two actions
- [ ] Anonymous kid playtest completed
- [ ] Continue / revise / kill decision recorded

## Hard scope rule

Do not add multiplayer, accounts, chat, trading, cosmetics store, extra maps, extra mystery premises, pets, open world, real-money purchases, or a large procedural mystery generator during V1.
