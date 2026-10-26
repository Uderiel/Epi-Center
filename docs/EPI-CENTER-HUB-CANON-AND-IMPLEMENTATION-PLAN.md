# Central Hub — Consolidated Canon, Spatial Plan and Implementation Backlog
Updated 2026-10-26. **Documentation checkpoint only.** No gameplay source changed; last owner-accepted playable build is v0.8.74. The World Bible contains the detailed canon entries; this file consolidates the conversation into an actionable handoff. Do not mistake confirmed narrative for implemented mechanics.

### 2026-10-26 owner decision: collapsible same-screen reference drawers — approved design direction

Owner explicitly chooses **same-screen expandable/collapsible side tabs** instead of separate full-screen reference pages. Live conversation/feed and adjacent text input remain the player's permanent home. Location drawer opens to a concise current-location description and collapses back without leaving Play; Form drawer exposes **current form's influence percentage, needs and restrictions** (e.g. Erin), then collapses so player can act in the feed; Character and Quest quick-reference drawers work similarly. Drawers must derive values directly from authoritative game state, not stale copied data. Opening/closing a drawer is **read-only**: no game turn, clock advancement, NPC action or location change. Preserve unfinished typed text, scroll position and dialogue history. Major workflows such as **character creation** may use full-screen views. Keep map destination selection narrating results in live feed and returning there. This is an approved **UI design direction**, not implemented gameplay; scope a phased architecture/refactor and test on Android before expanding NPCs and locations. Current owner-accepted game remains v0.8.74; Eve candidate v0.8.78 remains unaccepted.

### 2026-10-26 owner sketch: live feed as primary world interface — proposed architectural priority

Owner provided hand-drawn mobile wireframe and explicitly requests a UI consolidation **before adding further NPCs and locations**, pending design discussion. Main screen: current location header and artwork, one dominant live conversation/action feed, context selectors (World, NPCs, Players, Forms), a text input consistently adjacent to the feed, quick-reference expandable side tabs (character/form status, location, quests), and compact bottom navigation. **All player actions and consequential prompts**—dialogue, NPC replies, world inspection, map-selected travel, arrival, blocked routes, Erin's apartment room navigation, transformation and other state changes—must resolve via existing authoritative game rules and append understandable narration/results to the same persistent feed. After map destination selection, return to Play/feed and show pathing or travel refusal there; never silently show a location update without narrative. Feed is the source of in-world information; alerts/toasts reserved for transient UI/system failures. Input remains visible alongside feed on mobile; feed scrolls independently. Preserve actor autonomy, travel pending/interruptions, save key, accepted mechanics, and player history. Design/implementation **NOT YET APPROVED OR BUILT**; plan phased audit and migration before expanding world content. Eve v0.8.78 replay separate panel should ultimately become a feed entry only. Distinguish navigation/quick-reference panels from gameplay events. Current accepted gameplay v0.8.74; latest Eve candidate v0.8.78 not owner-accepted.

## Cardinal geography — design target, not a live-map claim

```text
                            NORTH
                      Cherished Touch
                              |
            (NW open)     Central Hub       Residential Walkway (NE)
                          [SPIRE / SPAWN]           -> Applewood Apartments
                              |
 WEST ROAD <- western approach              EAST ROAD -> eastern approach
       |                                          |
       +-- Neko Café (SW of Spire,               +-- Burke's Sweets
            SW corner of West Road)                   (south of first East Road map location)
                                                        |
                                                 Alley behind Burke's Sweets
                                                        |
                                               [hidden latex dungeon entrance]
```

- Spire is the center reference. Cherished Touch is the first location **directly north**; Residential Walkway is **northeast** and leads toward Applewood Apartments, not the primary north route.
- **Neko Café is southwest of the Spire**, specifically on the **southwest corner of the western road**, and the first destination on the western approach. A due-west café marker is incorrect. West Market Walk is provisional, not confirmed canonical café content.
- The eastern road must be unlocked before deeper travel. The owner's narrative traversal is **Hub -> East Road -> east again -> south** to reach the alley district. Burke's Sweets is **south of the first eastern-road map location**, and the alley is **behind Burke's Sweets**. Do not force a contradictory map topology until individual road-node names are settled.
- **Access Tunnel A South is an Underworld location** and should not be offered as an overworld/surface path. Friendly Farms Approach is a southern surface direction; exact additional path nodes remain subject to route verification.
- Compass should be visually spatial (3x3 or equivalent), with N/S/E/W clear and NE/SW destinations correctly placed. v0.8.74's owner-accepted compass layout must be preserved as baseline; additions are pending.

## Eve: owner-resolved implementation decisions (2026-10-26)

See [World Bible](EPI-CENTER-WORLD-BIBLE.md), commit `e843d22`, for the exact six-point specification. The user chose **cheerful corporate/gullible** voice; a **brief auto-greeting** that explicitly teaches the **free-text input** and permits exploration; **variable avoidance or blue-to-red fragmented glitches** on contradictions and stronger Countess conflicts; **current player-ID identity** (recognize whatever name/form currently controls the character, never original appearance/name or underlying will); **remote A.S.S. help anywhere** but visible hologram only inside Spire outer ring; and **nonretaliatory, unhurt, untraceable projection** under insults or attacks. Eve initially trusts neutral systems and does not recognize Countess corruption. She gains partial recognition as **Hub Cylinders** return, but programming blocks full explanation. No VR/outside-world disclosure. All pending implementation and tests.

## NPC: Eve — confirmed behavior, not yet implemented

- Always-present fixed A.S.S. custodian NPC at Central Hub spawn. **Automatically** introduces herself to each new player once, acknowledges amnesia, and assures the player that this is perfectly normal. Believes every entrant volunteered. She does not knowingly lie; her programmed interpretation establishes the opening mystery.
- Friendly, factual, neutral, order-oriented; no moral understanding of right/wrong. Not an ally or enemy. Countess-created chaos interferes with the order Eve prefers.
- Her dialogue is the in-world **Guide tab**. Guide documentation must be expanded as systems are implemented, and Eve's answers should reflect the current Guide without fabricating unavailable mechanics.
- Does **not volunteer** the Countess, dangers or risks. Never calls Epi-Center VR, and **never acknowledges an outside real world**, even after Spire unlock. Says everything within Epi-Center **is real**. Answers “Where am I?” with **Epi-Center Overworld**; geographic-coordinate requests cause glitches.
- Contradiction between voluntary entry and missing memories causes a red glitch; Countess questions cause a stronger glitch. As Hub Cylinders are recovered, she can increasingly recognize the Countess's suppression of her support systems but cannot openly explain it due to programming restrictions. The specifics of each cylinder milestone remain TBD.
- Generic feminine hologram, normally blue, intermittently red when destabilized. Appearance subtly shifts when an observer thinks they recognize her; no permanent face. Can project to many players simultaneously but **never outside the Spire outer ring**.
- Implementation gate: inspect existing spawn, Guide, chat, save flags, and actor boundaries; avoid repeat introductions on reload. Write focused dialogue tests including contradictions, geographic questions, Countess, and non-disclosure.

## NPC: Elizabeth and Pet — confirmed appearance and rough encounter

- Elizabeth is a roaming hub Dominatrix who resides east. Pale milky skin, dark eyes, long wavy black hair, black nails; leather skirt, corset over long-sleeved mesh shirt, thigh-high leather boots with spikes on toes and heels. Direct, rude, sometimes abrasive, not a deep lore exposition NPC.
- Walks **Pet**, an adult man fully covered in a feminizing latex gimp suit, canine-shaped mask, gag, collar and leash. Pet moves on all fours and has **no spoken dialogue**. Do not invent his name or personality.
- Elizabeth casually mentions that she left Pet's favorite toy in a latex dungeon; do not force quest acceptance. Route, encounter and exact object remain rough draft.

## Central Hub quests — original Discord text and status

### FETCH — Safe / UNAVAILABLE
- Discord: “The Dominatrix has forgotten something in a latex dungeon... would you mind getting it? NOW!”
- Tags: BDSM / submissive / dominant. Rewards: **500 gold, new form, buffs/debuffs**.
- Requires eastern route and dungeon; remains **Unavailable**, not playable.
- After unlocking East Road, the player can investigate the alley behind Burke's Sweets. Text such as “I check my surroundings” or equivalents describes garbage and a faint **shimmering liquid-black slime trail** seeping from behind **stacked wooden panels**. Examine/follow trail or move panels to uncover entrance. Natural-language alternatives and multiple investigative paths must work.
- Dungeon premise: assess dominance/submission through interaction; goth latex form outcomes (male/female/futanari). Exact encounter, form mechanics, recovery, rewards and narrative resolution TBD. The Discord “Safe” label is a quest classification, not an excuse to invent risk-free mechanics.

### If the Panties Fit — Safe / ROUGH DRAFT
- Discord: “If they aren't yours... don't touch em.. or they might just making you the one who they belong to.”
- Tags: Race change / Twinning. Reward: **new temporary form**.
- Search Central Hub via text (“search surroundings” and variations) -> reveal **interactable bikini-cut panties**, with a small amount of intimate bodily residue in the gusset -> inspect -> optional pickup -> inventory -> optional equip. Eve can suggest searching surroundings as a tutorial tip. **One retrieval only** per player/quest instance, with persisted claim state; no repeat farming.
- On equip, first-wear form mechanic analogous to Erin's favorite red heels but **different anatomical progression**: transformation **starts at hips and spreads both upward and downward simultaneously toward hair and toes**. Do not use the heels' feet-upward sequence.
- A new attractive female form of a varying race is **rerolled for each different player** who equips the item, deliberately contrasting with their original character when possible. Preserve each player's assigned result and transformation progress on reload. Transfer/re-equip semantics, exact random pool and mastery checks TBD.
- Easy-to-master temporary form, simple requirements; tasks at player's private residence extend the tutorial. Specific tasks and rewards TBD. Preserve original appearance and residence permissions.

## Architecture and test gates

- User's Discord world relied on spontaneous human roleplay and flexible interpretation. Do **not** implement quests as brittle fixed-command linear scripts. Prefer a reusable intent interpreter (search, inspect, pick up, equip, follow, move, converse) tied to persistent world objects, location gating, equipment and form progression, with later human/AI NPC facilitation.
- Current scripted AI seams must not be represented as true autonomous human-equivalent NPCs. Keep human override and dynamic narrative architecture as future work.
- Separate **owner-confirmed canon**, **rough draft**, **implemented in code**, **automated test passed**, and **owner/device accepted**. No new game build or acceptance test was executed for this documentation update.
- Suggested staged patches: (1) Eve automatic introduction/Guide integration, (2) Central Hub search and one-time item discovery, (3) first-wear hip-out temporary form and residence tasks, (4) Elizabeth roaming and eastern roads/Burke's Sweets, (5) alley/dungeon and FETCH when owner expands it. Stage boundaries are planning only, not commitments.
- Preserve save key `epicenter_foundation_v060`, player state, existing v0.8.74 cardinal layout and all accepted patches. Do not overwrite released versioned HTML. Publish a new immutable build and a short owner test set only when implementation occurs.
- Open questions: Eve's exact introduction script; cylinder thresholds and restricted revelations; Elizabeth's patrol frequency; Neko Café staff/interior; eastern road node names; dungeon encounter and form details; panties race pool, repeat-equip/transfer behavior and residence tasks.
