# Game Concept Card — TEMPLATE (v3)

**Target length: ~2 pages.** If it's longer, you're writing a GDD. Cut.
Everything about representation, safety, privacy, accessibility, and tech baseline lives in
`STUDIO-DESIGN-BIBLE.md` — don't repeat it here.

**Layers:** Studio Design Bible (once) → **this card** (every game) → one Genre Module (`modules/`) → Builder Handoff (generated from the approved card).

---

# Game #___ — TITLE

**Status:** DRAFT / APPROVED
**Inherits:** Studio Design Bible v1
**Genre module:** `modules/________.md` (pick ONE; two only if truly needed)

### 1. Kid Test
One sentence a 7-year-old could say back to you after hearing it once.

### 2. Game Identity / Fantasy
Who am I, where am I, what am I trying to do? (2–3 sentences.)

### 3. Emotional Promise
The feeling arc of one round, as an arrow: `___ → ___ → ___ → ___`

### 4. Replay Hook
Why does round 2 happen without an adult asking? What changes each round?

### 5. First 10 Seconds
What the kid sees, does, and discovers before they've had time to get bored. No menus, no tutorial screens.

### 6. Core Loop
`VERB → VERB → VERB → VERB → REPLAY`
- Player action:
- Immediate result:
- Reward:
- Fail state (funny, recoverable):

### 7. Theme Test (both must be YES)
- **Mechanic check:** Would the core interaction still be compelling without representation as its only hook?
- **Identity check:** With our world and cast restored, is this unmistakably ours, not a mechanic with Black skins?

### 8. Hero & Cast Snapshot
Follows the Studio Character Standard (Bible §3). Per character, one line: **name/handle — hair (texture+style+details) — skin — signature color/item — movement/energy — role in the game.**
Readable in 2 seconds at small size.

**Representation spec check:** Have we specified enough concrete visual and cultural detail for an artist/AI to produce distinct, age-authentic Black children rather than generic characters with brown skin? YES / NO

### 9. V1 Environment
One place. Rooms/zones listed. Three specific details that make it *this* place and not a generic one.

### 10. Countable V1 Content
Numbers only. (Maps, characters, items, rounds, levels, secrets, etc. — no sound or animation counts.)

### 11. Controls
- Touch:
- Keyboard:
- Chromebook (no mouse):

### 12. Out of V1 (mandatory)
Explicit list. If it's tempting, it goes here.

### 13. Playtest Hypothesis + Kill/Continue
- **Hypothesis:** Kids aged ___ who like ___ will ___ because ___.
- **Continue if:**
- **Kill / rework if:**
- **Future World Connection (one line):** which neighborhood spot; what collectible may transfer later.

---

**Approval gate:** all 13 answered + genre module filled → status APPROVED → generate `BUILDER-HANDOFF` → build. No more design docs.
