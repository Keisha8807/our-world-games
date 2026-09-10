# Our World Games — Studio Design Bible (v1)

**What this is:** the rules every game inherits. Written once, referenced everywhere.
A game's Concept Card should never re-explain anything in here — it just says
*"Follows Studio Design Bible v1"* and adds game-specific detail.

**What this is not:** a checklist to fill out per game. If you're copying this into a card, stop.

---

## 1. World philosophy

- Black kids are the **default heroes**, not a theme, a lesson, or a special episode.
- Blackness is the world the game lives in — the setting, the cast, the details — never the plot twist.
- Genre comes first. These are great kids' games (mystery, style, pets, rhythm, economy, party)
  where Black kids happen to be the heroes.
- Warm, funny, confident. Nobody is a victim, a token, or a teaching moment.
- Original characters, worlds, and UI. Nothing lifted from existing franchises.

## 2. Age authenticity

- Kids look like **kids** (ages ~7–12): bigger heads, shorter limbs, round faces, kid posture and energy.
- No miniature adults, no sexualized proportions, no adult fashion silhouettes on child bodies.
- Kid logic in the writing: secrets are cupcakes and broken controllers, not crimes.

## 3. Black character design standard

Every character spec must include **all** of the following. "Braids" or "curly" alone is not a spec.

| Attribute | Required level of detail |
|---|---|
| **Skin** | Named undertone + depth (e.g. "deep brown, warm red undertone", "medium brown, golden"). Cast must show range — no single default brown. |
| **Hair texture** | 3c / 4a / 4b / 4c, or "locs", "loc'd", etc. |
| **Hairstyle** | Specific style: high puffs, box braids, knotless braids, cornrows (pattern), twists, short twists, low fade, high-top fade, taper, waves, afro, bantu knots, locs (length), pressed/silk press, bonnet-day, etc. |
| **Hair details** | Parting, length, edges, accessories (beads, cuffs, bows, bobbles, barrettes, durag, headband, headwrap). |
| **Face** | Varied noses, lips, eye shapes, face shapes. Do not reuse one face with different hair. |
| **Body** | Varied builds — tall, short, stocky, slim. Kid bodies. |
| **Clothing** | Contemporary, believable for the setting; what kids actually wear (hoodies, kicks, jerseys, leggings, jean jackets, bonnets/scarves at home). |
| **Accessories** | Contemporary and specific (headphones, sketchbook, basketball, backpack with pins, slides with socks). |
| **Readability** | Silhouette recognizable at small size in 2 seconds. One signature color per character. |

**Gender readability:** boys and girls should read as intended through hair, clothing, and posture — not pink/blue coding or caricature. Some ambiguity is fine and welcome.

**Reference standard:** Dove *Code My Crown* (textured hair and protective styles rendered with respect and accuracy).

## 4. Cultural authenticity

- Specific over generic: a rec center has a trophy case, folding tables, a snack window with hot fries, a bulletin board, a Double Dutch rope in the corner.
- Contemporary Black American by default (v1). Other diasporic settings are welcome later and must be specified with the same care, not swapped in as flavor.
- No monolith: families, neighborhoods, music, and food vary. Avoid "the one Black neighborhood."
- No stereotype shorthand — not in dialogue, not in villains, not in jokes.
- Humor is kid humor. Slang is light, current-ish, and never the punchline.

## 5. Two-part theme test (replaces "fun without the theme")

Run both, in order, on every card:

1. **Mechanic check** — Would the core interaction still be compelling without relying on
   representation as its only hook? (Thought experiment. Do **not** playtest with gray boxes —
   crude placeholder art distorts feel and perceived responsiveness.)
2. **Identity check** — When our world and characters are restored, is this recognizably
   *our* game, not a generic mechanic with Black skins?

Both must be YES.

## 6. Child safety & privacy (applies to every V1)

- COPPA-safe by design: **no accounts, no chat, no multiplayer, no trading, no purchases, no ads, no external links** in V1.
- No collection of names, emails, photos, voice, location, or device identifiers. No analytics with identifiers.
- Local-only persistence (localStorage) — and the game must still fully work if storage is unavailable.
- No API keys, secrets, or third-party trackers in the repo or the build.
- No death, gore, weapons, or realistic violence. Fail states are funny and recoverable.
- Playtest notes are anonymous ("Tester A, age 8"). No photos or video of kids in the repo, ever.

## 7. Accessibility baseline

- Touch-first, keyboard-complete (Chromebook without a mouse must work).
- Big tap targets (≥ 48px). No multi-touch required.
- Icons over reading; any text is short and paired with an icon. Readable by a 7-year-old.
- Color is never the only signal (pair with shape/icon/motion).
- Sound on/off toggle; nothing depends on audio to be playable.
- Reduced-motion friendly: screen shake and flashes are subtle and can be disabled.
- Pause anytime. Instant restart in ≤ 2 taps.

## 8. Technical baseline (V1)

- Single-player HTML5, runs in a browser tab, no install, loads in < 3 seconds on a school Chromebook.
- 60 fps target on mid-range phones.
- Desktop + mobile portrait/landscape handled.
- Clean event hooks for a future portal: `game_started`, `game_paused`, `score_updated`,
  `game_completed`, `achievement_unlocked`, `reward_earned`. Hooks only — no portal in V1.

## 9. MVP discipline (non-negotiable)

> The goal of a V1 build is to prove that the core game is fun.
> Not prove the business. Not prove the whole platform. Not prove the world. Just prove one game.

- V1 content is **countable** and **small**.
- Monetization, audio branding, sound/animation counts, and platform strategy are **not** discussed on a Concept Card.
- Every card has a mandatory **Out of V1** list and a **Kill/Continue** criterion.
- Once a card is approved, we stop designing and build.

---

*Version 1 — 2026-09. Change this doc deliberately; every game inherits it.*
