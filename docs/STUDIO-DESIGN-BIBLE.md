# Our World Games — Studio Design Bible (v1.1)

**What this is:** the rules every game inherits. Written once, referenced everywhere.
A game's Concept Card should never re-explain anything in here — it just says
*"Follows Studio Design Bible v1.1"* and adds game-specific detail.

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

- Kids look like **kids** (ages ~7–12): childlike proportions, faces, posture, and energy appropriate to the art style.
- No miniature adults, no sexualized proportions, no adult glam styling on child bodies.
- Kid logic in the writing: secrets are cupcakes and broken controllers, not adult crimes.
- Contemporary fashion can influence silhouettes and accessories without turning children into mini influencers.

## 3. Black character design standard

Every named/recurring character spec must include enough information to create a distinct child rather than a reused base with a different skin tone or hairstyle.

| Attribute | Required level of detail |
|---|---|
| **Skin** | Named undertone + depth (e.g. "deep brown, warm red undertone", "medium brown, golden"). Cast must show range — no single default brown. |
| **Hair** | Follow `docs/standards/BLACK-HAIR-DIGITAL-STANDARD.md`. Specify the actual style, construction/parting, length, volume/silhouette, accessories, movement plan, and small-screen read. Texture typing such as 4a/4b/4c may be used as a secondary descriptor, never as the whole design. |
| **Face** | Varied noses, lips, eye shapes, brows, face shapes, and other age-appropriate distinguishing features. Do not reuse one face with different hair. |
| **Body** | Varied kid builds and heights — tall, short, stocky, slim, etc. Keep proportions visibly childlike. |
| **Clothing** | Contemporary, believable for the setting and child. Avoid making every Black character streetwear-coded. |
| **Accessories** | Contemporary and specific when useful to identity/gameplay (headphones, sketchbook, basketball, backpack charms, bracelets, etc.). |
| **Readability** | Silhouette recognizable at small gameplay size in about 2 seconds. Use multiple cues — not hair alone. |
| **Behavior** | At least one distinctive idle/movement/personality cue for recurring or gameplay-important characters. |

**Gender readability:** when a character is intended to read clearly as a boy or girl, the full design may communicate that through face, hair, clothing silhouette, accessories, posture, and movement — not pink/blue coding, eyelashes alone, or exaggerated body differences. Some characters may intentionally be less gender-coded.

**Hair reference standard:** Dove *Code My Crown* and the Open Source Afro Hair Library are core educational references for textured hair and protective-style representation. Our internal implementation rules live in `docs/standards/BLACK-HAIR-DIGITAL-STANDARD.md`.

**Visual approval rule:** a written spec can be **READY FOR ART**, but it cannot be marked visually approved until actual art/model output has been reviewed at portrait and gameplay scale.

**Third-party asset boundary:** do not commit OSAHL source models to this repo or feed OSAHL downloadable model assets into AI training datasets/workflows. If direct use of an OSAHL asset is ever proposed, review and document the then-current license first.

## 4. Cultural authenticity

- Specific over generic: a rec center has a trophy case, folding tables, a snack window, a bulletin board, sports equipment, after-school clutter, and details that make sense for that particular place.
- Contemporary Black American by default for the first Our World neighborhood. Other Black diasporic settings are welcome later and must be specified with the same care, not swapped in as flavor.
- No monolith: families, neighborhoods, music, food, fashion, language, and traditions vary.
- No stereotype shorthand — not in dialogue, villains, environments, fashion, or jokes.
- Humor is kid humor. Slang is light, natural, and never the entire proof that a character is Black.
- Cultural details should support a believable life, not function as a checklist.

## 5. Two-part theme test

Run both, in order, on every card:

1. **Mechanic check** — Would the core interaction still be compelling without relying on representation as its only hook? This is a thought experiment, not an instruction to strip identity from actual playtest art.
2. **Identity check** — When our world and characters are present, is this recognizably *our* game, not a generic mechanic with Black skins?

Both must be YES before an MVP is approved.

## 6. Child safety & privacy (applies to every V1)

- Privacy-minimal by design: **no child accounts, chat, multiplayer, trading, purchases, ads, or external social links** in V1 unless a later approved product requirement explicitly changes this after legal/privacy review.
- No collection of names, emails, photos, voice, precise location, or other unnecessary child personal information.
- Local-only persistence for MVP progress/high scores where possible — and the game must still fully work if storage is unavailable.
- No API keys, secrets, or third-party trackers committed to the repo or build.
- No death, gore, weapons, or realistic violence in the initial 7–11 lane. Fail states are funny and recoverable.
- Playtest notes are anonymous ("Tester A, age 8"). No identifying photos/video or school information in the repo.

## 7. Accessibility baseline

- Touch-first, keyboard-complete (Chromebook without a mouse must work).
- Big tap targets (target ~48px or larger where practical). No multi-touch required for the core loop.
- Icons and visual cues over reading; any required text is short and appropriate to the youngest intended player.
- Color is never the only critical signal; pair it with shape, icon, label, or motion.
- Sound on/off toggle; nothing essential depends on audio.
- Reduced-motion friendly: screen shake/flashes are subtle and can be reduced or disabled when the build supports settings.
- Pause anytime. Instant restart in very few actions.

## 8. Technical baseline (V1)

- Single-player HTML5 browser MVP by default; no install required.
- Fast first interaction on school Chromebooks and mid-range phones is more important than asset-heavy spectacle.
- Target smooth 60fps where the device supports it.
- Desktop + mobile layouts/controls must both work.
- Clean event hooks for a future portal: `game_started`, `game_paused`, `score_updated`, `game_completed`, `achievement_unlocked`, `reward_earned`. Hooks only — no portal in V1.

## 9. MVP discipline (non-negotiable)

> The goal of a V1 build is to prove that the core game is fun.
> Not prove the business. Not prove the whole platform. Not prove the world. Just prove one game.

- V1 content is **countable** and **small**.
- Monetization, audio branding, sound/animation counts, and platform strategy are **not** Concept Card gates.
- Every card has a mandatory **Out of V1** list and a **Kill/Continue** criterion.
- Once a card is approved, we stop expanding the design and build.
- If a new idea appears during build, park it unless it is required to test the approved hypothesis.

---

*Version 1.1 — 2026-09. Change this doc deliberately; every game inherits it.*
