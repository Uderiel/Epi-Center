# EPI-CENTER — WORLD, FORMS & SYSTEMS BIBLE
**Historical checkpoint:** v0.8.61, 2026-10-25
**Status:** living design archive, NOT a declaration that every feature is implemented.
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
