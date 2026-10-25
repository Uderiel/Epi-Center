# EPI-CENTER — EXPANDING DOSSIER & DISCOVERY JOURNAL
**Design archive / proposed feature** · 2026-10-25 · v0.8.61 checkpoint
**Status: DESIGNED, NOT IMPLEMENTED.** This is a specification, not a claim that the game already tracks these records. Keep distinct from the currently active apartment/bathroom test checklist.

## Purpose
Create a searchable, filterable in-game journal of people, forms, locations, objects, organizations, discoveries and the player's own encounters. Each player's dossier reflects **only what that character has actually learned**. Visiting the Dollhouse back room, for example, should unlock details that remain unknown to players who never entered it. Dossier entries are a supplementary audit trail for player actions, not the authoritative save-state or a way to infer secrets without discovery.

## Two separate layers
1. **Creator / canonical knowledge base (private):** full design rationale, original discussion notes, facts, mysteries, contradictions, history, future hooks, canonical relationships, intended interactions, implementation and test status. NEVER ship spoiler-only facts to a client if secrecy matters.
2. **Player dossier (per character):** only earned/observed/revealed facts, contextual descriptions, timestamps, visit records and clues. Server-authorized visibility required for eventual multiplayer. Hidden records should not be delivered to browsers merely hidden in UI.

## Shared entry schema
- stable `entry_id`, `entry_type` (person, form, location, object, faction, system, event)
- `canonical_name`, aliases, tags, region, relationships and source provenance
- `creator_notes` (design intent and WHY; private)
- `implementation_status` and `verification_status` (independent fields)
- `facts[]`: `fact_id`, text, source, certainty (observed/reported/inferred), visibility, prerequisites, discovery method, reveal priority, spoiler level, revision history
- `encounters[]`: event ID, in-game day/time, location, action, consequence, evidence reference
- `links[]`: connections to people, items, places, quests, form abilities
- `media[]`: approved portrait, sketch, map or image references (optional)

## Discovery / reveal rules
- First encounter: silhouette/name or vague descriptor, if actually seen.
- First conversation or inspection: baseline details the player heard/observed.
- Repeated interactions, dialogue, trust, quests and investigation: deeper facts unlocked by explicit triggers.
- Private areas: only reveal if entered, witnessed, told credibly, or otherwise discovered.
- Contradictory rumors may coexist as *claims*, never silently promoted to verified truth.
- Player choices may alter facts, NPC relations and world conditions; journal keeps historical observations plus current known status.
- Do not equate an in-game event with knowledge unless the character plausibly perceived it.
- Character and account identities separate; optional cross-character sharing only by deliberate game rule.

## Player UI
Journal tab → Search by title, alias, tags and unlocked text. Filters: All / People / Forms / Places / Objects / Factions / Quests / Encounters; Discovered / Updated / Rumors / Unresolved; Region; Recently learned. Each entry has Overview, Known Facts, Encounters, Related Entries and Clues. Unknown entries are absent or explicitly redacted according to discovery rules. An optional “New discovery” notification links to the precise newly unlocked fact. A visit timeline offers a compact audit trail. Allow bookmarks and sorting.

## Canonical record sample: Erin (person / humanoid form)
**Canonical:** Erin is a 23-year-old executive secretary, a distinct conscious personality sharing a transformed body with Jeremiah Miller in the current form test. Both sense the body's experience. Influence controls potential agency; trust is separate from obedience, affection or mastery. She is thoughtful, tidy, professional, conflict-averse, bookish and subtly funny. She enjoys cozy neutral socks, foxes, handmade keepsakes, floral scents, lakes and cabins (not tents); favorite red heels. Her deceased golden retriever is an emotional memory. Morning coffee, evening tea, dry full-bodied red wine, cream puffs and mint-chocolate-chip ice cream. She cooks for health, not chiefly as a hobby. **Source:** earlier project design and handoff; individual historical quotes are not all preserved.
**Design WHY:** build Erin as a fully realized, reusable humanoid-form simulation with authentic independent preferences and household habits, before introducing Erin-T. Her home reflects a tidy, practical professional with warm, bookish personal taste. Autonomy at 100% influence must cause actual actions and allow persuasion; this remains a KNOWN DEFECT / FUTURE IMPLEMENTATION.
**Player reveal examples (proposed, not currently coded):**
- `erin.met`: person known after direct encounter.
- `erin.work`: secretary role revealed through conversation, observed work, or documents.
- `erin.bookish`: books observed at home or discussed.
- `erin.flower_scent`: noticed perfume or discussion.
- `erin.dog_memory`: disclosed only after meaningful dialogue, not simply from entering her apartment.
- `erin.body_shared`: only if the player has appropriate first-hand experience or explicit information.
- `erin.trust`: observed social cues; raw numeric trust should remain private unless game design deliberately exposes it.

## Canonical record sample: Applewood Apartments / Unit 3C (location)
**Canonical:** Applewood Apartments, North Quadrant, Unit 3C. Living room has sofa, reading chair, plants, keepsakes, TV and about 80–120 novels. Kitchen supports groceries, cooking, eating and washing. Hallway has plants, artwork, entry nook and utility closet with washer/dryer. Bedroom is warm and peaceful: oatmeal/beige upholstered headboard, reading blanket, dresser and hamper. One closet with professional/casual/shoes/accessories sections. Bathroom includes sink/mirror, cabinets, toilet, bath/shower, towels and grooming supplies.
**Design WHY:** Erin's organized dresser, coordinated clothing and restrained decor reflect her practical, tidy, professional habits; books and keepsakes express quieter personality and history. Her cosmetics and floral fragrances reflect personal taste, not generic loot. Dresser top is displayed first, drawers below. Individual physical objects should be selectable and persistent.
**Player reveal examples (proposed):**
- `applewood.exterior`: building seen from outside.
- `applewood.unit3c.entry`: entrance and hall after authorized visit.
- `applewood.living.books`: book collection after entering/inspecting living room.
- `applewood.bedroom.dresser`: drawers and products only after inspecting bedroom/dresser.
- `applewood.bathroom.supplies`: after entering and examining storage.
- A player who has never visited cannot see private room contents just because another player did.

## Canonical record sample: Dollhouse back room (location / mystery)
**Status:** User-provided example of a private, location-gated discovery. The current available source notes do **not** establish its canonical layout, secrets, occupants or events. Do not invent those.
**Player reveal examples (proposed):** `dollhouse.front` on public visit; `dollhouse.backroom.exists` on learning of the room; `dollhouse.backroom.entered` on physically entering; `dollhouse.backroom.detail.*` only after examining actual features. The entry for a visitor may include details another player lacks.

## Canonical record sample: Eve (NPC)
**Known design:** introductory AI at Epi-Center Central Hub. Welcomes amnesiac players, introduces the Spire/Hub Cylinder objective. Full personal motivations and hidden history are not established in this checkpoint. Player-facing facts should grow through direct dialogue and story progression.

## Canonical record sample: Hub Cylinder (quest object)
**Known design:** recoverable devices required to unlock the Spire; not “crystals.” Early Discord-era play retrieved only three or four over roughly 1.5 years. The specific cylinder identities and placements need authoritative source review. Unlock exact locations only when discovered.

## Canonical record sample: Form takeover (system)
**Known design:** first wearing a form can trigger takeover; Mental Resilience and Arousal govern resistance, with MR reaching 0 or Arousal reaching 100% causing defeat/binding. Successful resistance may tame the form. Form rarity and XP/mastery progression, location-specific consequences and turn-based missions are planned. Exact balancing, probability formulas and full implementation are not established here.
**Player journal:** track encountered form, observed capabilities, first-use risk, actual takeover attempts, learned counters, mastery milestones; do not reveal every weakness by default.

## Proposed event and data model
```json
{
  "event_id": "evt-000045",
  "character_id": "player-42",
  "game_time": {"day": 12, "hour": 19, "minute": 10},
  "type": "location_entered",
  "target_id": "location.dollhouse.backroom",
  "perceived": true,
  "visibility": "character_private",
  "source_action_id": "action-0038",
  "state_change_ref": "save-event-000045",
  "grants_fact_ids": ["dollhouse.backroom.entered"]
}
```
Facts should be unlocked **idempotently** (repeat visits don't spam), while repeat encounters may append dated events. Journal events should derive from authoritative actions, with append-only IDs and save versioning. Provide migrations for existing localStorage saves. Eventually a server-side character-specific journal is required for secrecy, multiplayer and durable backups.

## Implementation stages — AFTER apartment and workplace priorities
1. Build creator-only canonical records and source citations; reconcile older conversations against source code and avoid invented canon.
2. Add a small local journal prototype (Erin, Unit 3C, a few items) with searchable/filterable unlocked entries.
3. Wire real action events (visit, inspect, talk, use, quest) to unlocks; test save/reload and duplicate prevention.
4. Extend to forms, locations, NPCs, factions, quest clues and timeline.
5. Move hidden canon and authoritative per-character events to a secure backend before multiplayer.

## Acceptance tests
- Two characters visit different locations; their dossier facts differ.
- Character A enters Dollhouse back room; B does not. B cannot access back-room secrets through search, filters, export, API or client payload.
- New facts appear only after witnessed/earned triggers; rumors marked as such.
- Search returns unlocked content only; filters and links preserve access rules.
- Reload/time skip retains discoveries; repeated actions do not duplicate facts.
- Current state and historical encounters do not contradict without a visible update.
- Dossier loss or corruption does not overwrite primary game state; restoration/rebuild strategy exists.
- The dossier is supplementary evidence, not proof of actions that the game never actually executed.

## Source limitations
This file synthesizes the available GitHub handoff/status and recovered design history. It is not a verbatim transcript of every past conversation. Exact quoted dialogue, original justifications for every object, and unspecified Dollhouse details require source recovery before canonization.
