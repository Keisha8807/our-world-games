# MVP Builder Prompt (paste Concept Card into the marked slot)

Use this to generate each browser-game MVP. Fill in ONLY the concept slot — don't let the AI redesign the game.

---

Build a polished, complete, playable HTML5 browser game called "[GAME NAME]" for children ages [AGE RANGE].

GAME CONCEPT
[PASTE THE APPROVED GAME CONCEPT CARD HERE. Follow it exactly. Do not add features outside the card's V1 scope.]

MVP RULE
This is a small vertical-slice MVP. Prioritize ONE extremely satisfying core gameplay loop rather than adding lots of features. The player should understand what to do within ~5–10 seconds and start playing almost immediately. Design short, replayable rounds.

CORE LOOP
[PLAYER ACTION] → [IMMEDIATE RESULT] → [REWARD / SCORE / PROGRESSION] → repeat with increasing difficulty. Progressively harder without becoming confusing.

CHARACTER
Feature [CHARACTER NAME], an original Black child protagonist. [CHARACTER DESCRIPTION]. Expressive, appealing, contemporary, memorable, no stereotypes.

VISUAL THEME
[VISUAL THEME / LOCATION]. Cohesive original art direction. Do not copy characters, artwork, interfaces, locations, logos, music, or visual identity from existing children's games or franchises.

FIRST-TIME EXPERIENCE
Minimize onboarding. Show controls visually, minimal text. Tap-to-start overlay is fine; no menu maze before gameplay.

CONTROLS
Support keyboard, mouse where appropriate, touchscreen, phones, tablets, Chromebooks, desktop. Responsive on touch AND keyboard.

GAME FEEL
Successful actions get: particles, squash-and-stretch, impact animation, small screen shake, score popups, combo/streak effects, celebration effects, responsive character animation, sound-effect hooks, smooth transitions. Never so much it blocks gameplay.

GAME SYSTEMS
Score, local high score, increasing difficulty, pause/resume, game-over, instant restart, sound controls, simple local achievements where apt. Save non-sensitive progress in localStorage; handle unavailable storage gracefully (still playable).

PERFORMANCE
Target 60fps where supported. Fast load, small size, responsive layout, mobile + low-power friendly. Load only what's needed first.

EXPANSION-READY ARCHITECTURE
Structure code so future versions can add characters, levels, environments, cosmetics, challenges, achievements, educational content, rewards, seasonal content, and modes without rebuilding core.

PLATFORM INTEGRATION
Simple events/hooks: game_started, game_paused, score_updated, game_completed, achievement_unlocked, reward_earned — for a future portal.

MVP CONTENT LIMIT
1 character, 1 mechanic, 1 environment, 1 scoring system, 1 difficulty progression, enough content to prove replayability. NO auth, multiplayer, subscriptions, purchases, chat, social, accounts, or open world.

Goal of this build: prove that the core game is fun.
