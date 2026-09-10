# MVP Builder Prompt (paste Builder Handoff into the marked slot)

Use this to generate each browser-game MVP. Fill in ONLY the approved Builder Handoff — do not let the building AI redesign the game, rename the cast, or expand V1 scope.

---

Build a polished, complete, playable HTML5 browser game called "[GAME NAME]" for children ages [AGE RANGE].

GAME CONCEPT / BUILD CONTRACT
[PASTE THE APPROVED BUILDER HANDOFF HERE. Follow it exactly. Do not add features outside the approved V1 scope.]

MVP RULE
This is a small vertical-slice MVP. Prioritize the approved core gameplay loop rather than adding lots of features. The player should understand what to do within ~5–10 seconds and start playing almost immediately. Design short, replayable rounds where appropriate.

SCOPE AUTHORITY
The Builder Handoff is the source of truth for:
- exact character names and counts
- exact V1 content counts
- environment
- genre rules
- controls
- scoring/progression
- visual standards
- Out-of-V1 exclusions

Do NOT replace an approved multi-character cast with a generic one-character template. Do NOT rename characters or turn them into visual labels. Do NOT add extra characters/features just because they seem useful.

CHARACTER INTEGRITY
All characters are original. Follow the canonical names and the build-relevant face, skin, hair, clothing, silhouette, movement, age, and behavior details from the handoff.

When the handoff invokes `STUDIO-DESIGN-BIBLE.md` or a shared standard such as `standards/BLACK-HAIR-DIGITAL-STANDARD.md`, treat those rules as mandatory design constraints.

A text prompt is not proof that representation is visually correct. If generated art or procedural shapes cannot faithfully execute a required hairstyle/character detail, preserve the intended age, silhouette, construction logic, and identity as closely as the MVP art style allows, and flag the limitation in build notes rather than silently substituting a generic hairstyle.

VISUAL THEME
Use the approved visual theme/location and cohesive original art direction. Do not copy characters, artwork, interfaces, locations, logos, music, or visual identity from existing children's games or franchises.

FIRST-TIME EXPERIENCE
Minimize onboarding. Show controls visually with minimal text. No menu maze before gameplay. The first satisfying interaction should happen quickly.

CONTROLS
Support the exact touch, keyboard, mouse/trackpad, and Chromebook controls specified in the handoff. Touch and keyboard must both be first-class experiences.

GAME FEEL
Use satisfying but readable feedback: particles, squash-and-stretch, impact animation, small screen shake where appropriate, score popups, combo/streak effects when relevant, celebration effects, responsive character animation, sound-effect hooks, and smooth transitions. Never let effects obscure gameplay. Keep reduced-motion friendliness in mind.

GAME SYSTEMS
Implement only systems required by the handoff. Save non-sensitive local progress/high scores only where specified; handle unavailable localStorage gracefully so the game remains playable.

PERFORMANCE
Target smooth 60fps where supported. Prioritize fast first interaction, small/lean assets, responsive layout, mobile and school-Chromebook performance, and stable gameplay.

EXPANSION-READY ARCHITECTURE
Structure code cleanly so approved future content could be added later without rebuilding the core. This is architecture only — do not implement parked features.

PLATFORM INTEGRATION
Provide simple optional hooks when requested: game_started, game_paused, score_updated, game_completed, achievement_unlocked, reward_earned. No portal/backend is part of V1 unless explicitly approved.

MVP CONTENT LIMIT
Build the **exact V1 counts in the Builder Handoff**. The default philosophy is one small mechanic/world slice, but the handoff overrides generic defaults when a game needs multiple NPCs, suspects, patients, etc. to test its actual hypothesis.

NO SCOPE CREEP
Do not add authentication, online multiplayer, subscriptions, purchases, chat, social systems, open world, trading, ads, trackers, or other parked features unless the approved handoff explicitly includes them.

GOAL OF THIS BUILD
Prove the specific playtest hypothesis in the Builder Handoff — especially whether the core game is understandable, fun, and replayable.
