# EPI-CENTER — WORLD, FORMS & SYSTEMS BIBLE
**Historical checkpoint:** v0.8.61, 2026-10-25
**Status:** canonical living creator/staff Bible; designed and implemented concepts are clearly distinguished.
**Companion:** [Expanding Dossier Design](EPI-CENTER-DOSSIER-DESIGN.md) · [Handoff](EPI-CENTER-PROJECT-HANDOFF.md) · [Current Status](EPI-CENTER-CURRENT-STATUS.md) · [Testing](EPI-CENTER-TEST-CHECKLIST.md)

## Project identity
Epi-Center is a persistent browser RPG evolved from a 1.5-year Discord roleplay world. A.S.S. = Automated Service Systems, the in-world interface. Android Chrome is the primary playtest environment. AI-run NPCs can initially assist; human-run NPCs may follow. Players' actions should alter persistent world state, not only narration. Current localStorage saves are browser-local, not online accounts or shared multiplayer.

## Canonical world
- Players enter through immersion pods, awaken amnesiac in Epi-Center's Central Hub and meet AI Eve.
- The central Spire remains sealed until **Hub Cylinders** are recovered. The Countess opposes unlocking it.
- Central Hub, Access Tunnels, Underworld Hub (Lilith's marketplace), Friendly Farms Approach, R&D Labs and Infinitum Warehouse PVP are major places. Resistance, Countess-aligned guild and Thieves Guild are factions.
- The Overworld is ruined Squirrel City, involving NU Corp, the Collector and the real-world New Glow company. Epi-Center power, pod gold costs, neural-scan revival, retained lost gear, infection/corruption and rescue are interconnected designed systems.

## Form and survival rules
Health, Mental Resilience and Arousal are core stats; Stamina was proposed. Forms may attempt first-wear takeover. MR reaching zero or Arousal reaching 100% can cause defeat; resistance can tame a form. Forms have rarity, mastery/XP, mission and location-specific risks. Slime Guard, Elder Succubus, Mecha and pole-dancer examples were discussed. Turn-based missions and open exploration have different rhythms. **Do not assume full mechanics are coded.**

## Erin — primary reusable humanoid template
Erin is a 23-year-old executive secretary, a separate conscious personality sharing a transformed body with player Jeremiah Miller. She is tidy, bookish, professional, subtly humorous, thoughtful and conflict-averse. She likes foxes, floral scents, handmade keepsakes, cabins and lakes (not tents), neutral cozy socks, signature red heels; remembers a deceased golden retriever. Morning coffee, evening tea, full-bodied dry red wine, cream puffs and mint chocolate-chip ice cream; cooks for health. Trust is distinct from influence and mastery. At 100% influence, autonomy must execute actual actions and allow persuasion. **Current autonomy has known defects.** Erin-T is a future separate NPC, not a shared-consciousness duplicate.

## Erin's home and the rationale
Applewood Apartments, North Quadrant, Unit 3C. Living room: sofa, reading chair, plants, keepsakes, TV, roughly 80–120 novels. Kitchen: groceries, food preparation, eating, dishes. Hall: art, plants, entry and laundry utility closet. Bedroom: warm beige/oatmeal bed and reading blanket; dresser with hair accessories, lotions/night creams, coordinated bras, panties, hosiery, sleepwear; dresser top mirror, two lotions, three perfumes and lace runner. One closet with workwear, casual, footwear and accessories; eight defined pairs of shoes including red heels. Bathroom: sink/mirror, makeup/skincare, cabinets, toilet, bath/shower, bath supplies, menstrual supplies and heating pad. **Why:** warm, orderly and lived-in, reflecting her professional and personal habits; every described physical item should be interactable and persistent.

## Physical item contract
One identity and location per item; equipment layers may overlap regions but each garment must independently equip/unequip. Clean/worn/dirty condition is independent of location. Inventory ↔ equipment ↔ closet/dresser ↔ hamper ↔ washer/dryer transitions must preserve identity and condition, with no teleportation or duplication. Footwear should not be laundry. Eight appearance regions: Head, Neck, Torso, Arms, Hands, Hips, Legs, Feet. Keep red heels and Bella German Shepherd skinsuit working.

## Physiology
Approximately 28-day menstrual cycle with desired slight variation, typical four–five-day period, realistic mild symptoms and practical products. Progresses with in-game time, not room visits. Avoid punitive stereotypes or constant intrusive alerts. Existing fixed-cycle code is only a partial implementation.

## Development status and roadmap
**User-confirmed by v0.8.61:** several sink/curling/skincare, makeup, bath, toothbrush, persistence and temporary grooming interactions; see live checklist for exact confirmed tests.
**Awaiting v0.8.61 tests:** duplicate makeup controls; dresser lotion and perfume in Scent & Physiology; 24-hour expiry; apartment navigation/item consistency.
**Known defects / pending:** accessories, shoe laundry, legacy items, washer flow, appearance transformation-stage descriptions, autonomous Erin routines, period supplies, resilience audit.
**Next order agreed:** finish apartment and inventory → fully implement Erin's workplace/boss/coworkers → Monday–Sunday clock and work schedule → believable, state-changing autonomous routines at 100% influence → later wider world and NPC/form systems.
**Historical note:** original handoff/changelog still reference v0.8.51 and should be reconciled against actual versioned HTML, not blindly rewritten.

## Templates
**Location:** stable ID, region/layer, purpose, design WHY, environment, exits, people, interactions, danger, lore, discovery prerequisites, source, implementation status, test evidence.
**NPC:** stable ID, appearance, history, motivations, voice, preferences, relationships, routines, boundaries, secrets, interaction triggers, design WHY, implementation status.
**Form:** stable ID, appearance, rarity, first-use takeover, stats, powers, risks, progression, location interactions, player observations, implementation status.
**Object:** stable ID, location/ownership, design WHY, use/equip/storage actions, persistence, condition, discovery flags, implementation status.
**System:** inputs, state, triggers, outputs, edge cases, persistence, player feedback, dependencies, tests and verification.

## Player discovery and journaling
The [dossier specification](EPI-CENTER-DOSSIER-DESIGN.md) separates full private canon from per-character earned knowledge and encounter logs. The Dollhouse back room is a discovery-gating example; its exact layout/secrets are not established in available records. No unseen secrets should be exposed through search or client data.

## Source integrity
Derived from project handoff, changelog, current status, checklist and available earlier design summaries. Not a verbatim transcription of all messages. Original HTML is authoritative for code; reported tests for confirmed behavior. Distinguish **confirmed**, **implemented but unverified**, **partial**, **designed**, **future**, and **known defect**. Do not invent missing canon.

---

# CANONICAL MASTER BIBLE — MAINTENANCE CONTRACT (2026-10-25)

**Purpose and authority.** This is the **single, comprehensive, living creator/staff reference** for Epi-Center: worldbuilding, gameplay systems, form and NPC definitions, locations, objects, interactions, rationale, UI/display proposals, roadmap and decisions. The separate per-player dossier is an **earned discovery view**, not the master source. This Bible is updated as the project evolves; it need not preserve obsolete failed implementation details. The changelog retains the change history.

**Maintenance rules**
1. For every accepted new idea or design decision, add or revise the appropriate canonical entry here. Distinguish `APPROVED DESIGN`, `PROPOSED`, `IMPLEMENTED`, `USER VERIFIED`, `PENDING` and `SUPERSEDED` when relevant.
2. When a design changes, update the current canonical description and add a concise `Changed from → to; reason; date/version` note. Retire discarded concepts rather than leaving contradictory instructions.
3. Keep concrete specifics: exact items, rooms, character tastes, behavior constraints, interactions, reveal conditions, and the reasoning behind them. Staff should understand *what* to build and *why*.
4. Never infer unrecorded canon or present an untested feature as complete. Preserve source uncertainty and flag missing original dialogue/screenshots.
5. The current build and test checklist track live QA; this Bible tracks **enduring game design**. A short compatibility note can reference current build, but do not turn the Bible into a bug log.
6. This repository may be public: secret canonical lore and player-private records **must not** be committed publicly if secrecy matters. Before production, move restricted creator entries to a private store/repository. The dossier should fetch only server-authorized earned facts.

## Canonical design entry template
```text
ID / category / name / aliases / owner:
Canonical description:
Origin and design rationale (why it exists):
Visual / sensory presentation:
Personality, motives or functional rules:
Location, inventory, relationships and dependencies:
Interactive actions and expected state changes:
Time, schedule, persistence and edge cases:
Player-discoverable facts and explicit unlock triggers:
Hidden creator-only truths (private storage only):
Current implementation / verification:
Decision history: changed from → to, reason, date:
Source notes and unresolved questions:
```

## Character: Erin — expanded canonical design

**Identity:** 23-year-old executive secretary. In the current humanoid-form experiment, player Jeremiah Miller has undergone 23 transformation stages into Erin's body. Erin is **another conscious individual**, not a mere outfit, passive dialogue generator, or alternate player personality. Jeremiah presently controls the shared body at lower influence; both can sense its physical experience. Her thoughts, boundaries and preferences remain her own. A separate future **Erin-T** is intended to be an autonomous NPC with independent state and no shared consciousness.

**Temperament:** thoughtful, tidy, professional, bookish, subtly funny, conflict-averse. Relationships develop organically. She may reject or resist an annoying player, negotiate, persuade, compromise, or protect her own interests. Mastery of a form does not equal romantic affection, friendship or obedience.

**Trust tiers (existing design):** guarded 0–24; warm 25–49; gently playful 50–74; spontaneous 75–89; deeply familiar 90–100. **Influence is separate:** reaching 100 can enable Erin to take genuine initiative and control the body, but must not instantly imply affection or unconditional cooperation.

**Likes and lived experience:** foxes, handmade keepsakes, floral fragrances, warm neutral socks, professional red heels, reading and her substantial book collection; enjoys lakes and cabins but dislikes tents. Her deceased golden retriever matters emotionally. Coffee in the morning, tea in the evening, dry full-bodied red wine, cream puffs and mint chocolate chip ice cream. She cooks for health, not primarily as a passion project. She favors polished, practical dress and hygiene.

**Autonomy contract:** when Erin controls the body, routines must execute real travel, object interactions, inventory changes, grooming, meals, work and sleep in the same systems used by players. No repeated "I'm going to bed" messages without a location/state transition. Player persuasion attempts remain possible. Avoid automatic missed-work penalties before a functioning workplace exists.

**Upcoming workplace design (not yet canonicalized in detail):** implement office, her personal workspace, boss, coworkers, travel and meaningful tasks with the same environmental depth as the apartment; names and personalities are TBD, not invented. Then add Monday–Sunday, weekday/work/weekend rules, and a variable but plausible self-directed routine. Until destinations are actually built, do not simulate shopping or visits to nonexistent friends/shops.

## Location: Applewood Apartments, North Quadrant, Unit 3C — detailed specification

**Design intent:** a believable, warm, ordered home that embodies Erin's restrained professional style and quieter interests. Every described possession should eventually be a selectable persistent physical item or an intentionally static environmental detail; avoid cosmetic action text that does not affect game state.

**Living room:** sofa, reading chair, TV, plants, keepsakes and approximately 80–120 novels. Books support her bookish personality; keepsakes and plants give personal history and household maintenance opportunities.

**Kitchen and dining:** persistent groceries/stock, meal prep, food consumption, dishes, washing and cleaning. Actions can alter hunger, hygiene, available food, dirty dishes, time and social opportunities. Previously tested spinach-and-feta salad, consumption and dishwashing are historical playtest examples, not an exhaustive recipe catalog.

**Hallway / utility:** entry nook, art, plants, utility closet with washer/dryer. Clothing physically moves between the bedroom hamper, washer/dryer and carried inventory.

**Bedroom:** peaceful oatmeal/beige upholstered headboard, several pillows, lightweight reading blanket at foot, six-drawer dresser, hamper, ironing board, one closet. Dresser top first in UI: mirror, lace runner, **two individually selectable lotions**, **three individually selectable perfumes**. Drawers: 1 hair ties, clips, brush, hand mirror; 2 lotions/night creams; 3 matching-order bras (cups nested front-to-back); 4 matching-order panties; 5 socks/pantyhose/tights; 6 sleepwear. Sleepwear: two lightweight pajama sets, two heavier sets, oversized sleep shirt, understated nightgown. Product interaction should be contextual (select → inspect/use → action), not duplicated global controls.

**One closet with sections**, not multiple independent wardrobes. Professional: tailored blouses, knee-length skirts, jackets/cardigans, occasional formal dresses. Casual: sweaters, leggings, fitted tops, jeans, T-shirts, brown leather jacket. Hosiery belongs in dresser, not duplicated in closet. Exactly eight shoe pairs: signature red work heels, matte black closed-toe heels, gloss cream closed-toe heels, red suede closed-toe heels, black flats, sneakers, brown leather winter boots, brown ankle boots with two-inch wedge heels. No peep toes. She commonly favors black sheer/semi-sheer pantyhose with skirts, nude hosiery when suitable and professional tights in cold weather.

**Bathroom:** sink/mirror and a polished natural makeup sequence (moisturizer, primer, foundation, blush, eyeshadow, eyelash curling, mascara, lipstick, setting spray), hair tools, skincare and toiletries, medicine cabinet, menstrual supplies and heating pad, functional toilet/toilet paper, shower/tub, bath pillow, floral oils/salts, bubble bath, candle and towels. She favors a relaxing bath when time permits, shower when rushed. Grooming should update the existing Character Face, Scalp Hair and Scent & Physiology fields as appropriate; temporary cosmetics/fragrance expire by in-game time and may be removed by washing.

## Item, clothing, equipment and laundry — authoritative behavior

- Each physical item has one stable ID, one physical location, ownership, independent condition and action history; do not let legacy and newer item stores disagree.
- Equip/unequip are independent by item, including layered garments. Eight appearance regions: Head, Neck, Torso, Arms, Hands, Hips, Legs, Feet. Jewelry remains visible in equipment. Removing outerwear must not strip underlayers.
- Condition clean/worn/dirty is not a location. Briefly wearing something need not make it dirty. Unequipped clothing enters carried inventory; putting away preserves its condition. Hamper → washer → completed cycle → still in machine until collected → inventory → put away. Nothing duplicates, disappears or teleports.
- Footwear is not normal laundry and must not receive hamper/washer actions.
- Keep existing red heels form and Bella German Shepherd skinsuit compatible with layered equipment.
- Save/reload and navigation must preserve appearance and the actual location of every item.

## Forms, progression and game-state contracts

**Form dossier template:** origin, appearance, category, rarity, first-use takeover behavior, resilience/arousal risks, health/stamina effects, abilities, environment affinity, counters, experience/mastery, ownership/physical identity, and discoverable information. Examples discussed include Slime Guard, Elder Succubus, Mecha-area forms, pole-dancer forms, red heels form, Bella German Shepherd skinsuit, and future animal/inanimate/flying/aquatic forms. Do not invent exact stats for unspecified examples.

**Transformation:** may involve multiple stages, and Character appearance/portrait/voice/neck/face descriptions should reflect the current stage. Inanimate transformations should preserve a physical object's persistent identity and allow staged transitions. Existing DEV stages 2 and 20–23 need verification against displayed appearance.

**Core game loops:** fog-of-war location discovery; quests, journals and gold/XP; turn-based mission encounters; PVP Infinitum Warehouse control; factions and world choices; power produced by active pod players versus inactive drain; gold pod upkeep; Overworld survival, corruption/rescue, neural-scan revival and persistent lost gear. These are overarching design commitments, not proof of current playable completeness.

**Physiology:** ~28-day menstrual cycle, mild natural variability, periods generally 4–5 days; bloating, occasional cramps and fatigue; usable pads/tampons, heating pad when resting, hygiene, appropriate OTC relief and clothing consequences. Advance with time even when player does not enter bathroom. Private status rather than repetitive alerts. Shared-body physical sensation is context dependent.

## Player dossier — subordinate discovery product, NOT the Bible

The canonical Bible holds the complete authored definitions, WHY, mechanics, world rules and proposed UI. The player dossier contains only the **relevant subset the character has earned** through seeing, hearing, speaking, inspecting, acting, or credible reports. Facts have stable IDs, reveal conditions, provenance, confidence and timestamps. It is individual to the player character, with search, filters, bookmarks, related entries and encounter timelines.

**Example:** one player enters the Dollhouse back room and can see earned back-room facts; another cannot. The Dollhouse's actual canonical details are not established by the currently reviewed sources. Do not create them without source evidence or explicit design approval.

**Architecture:** derive discoveries from genuine action events; do not expose unrevealed creator-only secrets in downloadable client data. A server-side authoritative store will be needed for secure multiplayer. Player dossiers supplement, but do not replace, the primary save/event history.

## Proposed UI/display index
- A.S.S. hybrid world-map overlay with fog-of-war, discoverable locations and contextual travel.
- Character appearance fields: Face, Scalp Hair, Scent & Physiology, equipped layers and state-dependent descriptions.
- Nested contextual room/object panels (one coherent set of controls; no duplicated overlays).
- Equipment and laundry showing each physical item's identity, location, condition and allowed actions.
- Private physiology and mental-resilience attribution, with minimal intrusive notifications.
- Creator/staff canonical Bible with source links, revision notes and cross-references.
- Player-facing discovery journal with search, filters, earned facts, rumors, relationship links, visited locations and encounters.
- Future office/workplace UI and calendar with Mon–Sun work schedules.
- Later multiplayer membership, human/AI NPC coordination and persistent world consequences.

## Decision history (current canon)
- **Hub Cylinders**, not crystals (terminology corrected).
- **One closet with sections**, not several wardrobes (physical location model clarified).
- **Single physical item record**, not parallel legacy/new inventories (prevents contradiction).
- **One contextual action panel**, not repeated makeup/product buttons.
- **Autonomous actions must change real state**, not just emit narrative text.
- **Creator Bible vs player dossier**: complete evolving canonical source vs individual discovery-based subset (2026-10-25).
- **Approved release flow**: develop on `epicenter-dev`; user tests; merge to `main` only after explicit approval; update canonical docs and give next link/checklist.

## Source coverage and ongoing enrichment
Current source coverage: available project handoff, changelog, development status, checklist, historical summaries and current discussion. These do not contain every original Discord screenshot or full verbatim conversation. Recover and attach original quotes and screenshots when available; do not fabricate exact motivations or secret room details. The Bible should be expanded as new canonical material is recovered or decided.

## Decision update — v0.8.61 playtest (2026-10-25)
- **Confirmed**: initial grooming, makeup, bath, lotion/perfume appearance, navigation, and save/reload checks passed. **New regression**: after 24-hour expiration, curling/skincare narration claims reapplication but appearance may remain unchanged.
- **Object identity**: bathroom items (including conditioner and heating pad) must appear in carried inventory and return to their actual storage locations; avoid UI-only pickup.
- **Routine hygiene**: ordinary wiping is implicit in using the toilet; remove standalone toilet-paper-use prose. Shampoo and conditioner belong to actual washing rather than use while standing outside the shower; bath pillow is passive bath equipment.
- **Menstrual protection**: pads/tampons should be physically worn/inserted and tracked until changed or removed, with state progression such as clean/dry → used → soaked → overflowing where applicable. A change should consume a fresh supply and dispose of the previous product, rather than always claiming one was removed. Exact timing and leak consequences remain to be designed/tested.
- **Heating pad**: carried inventory object usable while seated/reclining on sofa, armchair or bed; put-away returns it to medicine cabinet.
- **Accessories**: earrings, necklace, rings and bracelet should be independently equipped and visible in correct Head/Neck/Hands/Arms regions.
- **Shoes**: footwear may be physically carried/equipped but is excluded from ordinary garment clean/worn/dirty laundry lifecycle.
- **Priority unchanged**: complete and verify apartment before workplace, weekday calendar and Erin autonomy.
