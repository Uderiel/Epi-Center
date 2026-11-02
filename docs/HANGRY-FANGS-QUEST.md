# Hangry Fangs — canonical quest contract

Owner decisions: November1,2026 conversation. Implementation candidate: v1.0.49. Owner acceptance pending. Read OPEN-TASKS-AND-DECISIONS for deferred systems.

- Quest name: Hangry Fangs. Difficulty: Risky.
- Eve's First Steps reward handoff: “If you are interested, I have another quest that is a bit more risky.” Offer is persisted; acceptance can occur later.
- Description: “Rumors are going around that a dog has been seen in the northeast alley, not in a pack like the others. It looks kind of hungry, and seems a bit weird... like it's not entirely there. Either way, why don't you just check it out? Could be a tail wagging time!” Eve asks the player to inform her when the lone canine situation is resolved.
- Target display name: NE Alley Crate; owner reference73; unchanged internal ID NE Alley (4).
- Verified route: Spire → Central Hub N → N. Main Street (1) → NE Alley (1) → NE Alley (4), then reverse. No shortcut through Cherished Touch or Burke's Sweets. Parenthesized references/segment numbers are not player labels.

## Discovery and encounter

Inspect surroundings reveals a large crate. Examine/look closely reveals it knocked over sideways, rattling, lid against one side and a dog-sized gap. Examining once does not start combat. Further approach/opening/calling/whistling can initiate the existing engine. Explicit negation such as “I don't whistle” does not initiate combat. Positive crate prompts are bounded text recognition, not an unrestricted language simulation.

A purchased snack offered through Items at the examined crate consumes one snack and grants mastery without combat. Combat Inventory can consume one snack as Minor while hands remain usable. Combat defeat of Kibbles by approved Health/Resolve victories grants mastery through the existing engine. Mastered form never respawns as a hostile world encounter for that save. Fleeing leaves the quest incomplete; a retry is possible only with legal resources and no retained encasement blocking the approach. No player pools are refilled by a retry or mastery.

The player may encounter Kibbles before accepting/finishing/reporting First Steps. The discovery journal initially provides ONLY title/report contact; Eve's description/difficulty/target/rewards appear after briefing or successful acknowledgement. Reporting independently discovered mastery does not require completing First Steps first.

## Reporting and rewards

Only Eve at Central Hub Spire can acknowledge success. Active combat, retained encasement and canine appearance block reporting. A mastered canine player can will-release; public dog sounds do not trigger quest dialogue. Rewards commit once and persist across reload:

| Reward | Stored field | Behavior |
| --- | --- | --- |
|300 gold|gold|Added once at report|
|75 Tier Mastery XP|inventory.tierMasteryXP|Outside-combat owned-form selector, chosen integer amount transferred into forms[id].tierMasteryXP|
|50% Neko Cafe coupon|inventory.nekoCafeCoupons|One coupon for50% off one item, single use; redemption pending Cafe purchase implementation|

Completed Journal entry receives the full briefing, Risky difficulty, route, rewards and completion timestamp. Existing mastered form saves initialize a legacy mastery resolution, never automatic payment. Subsequent developer grants do not retroactively satisfy an initialized world quest. The Dev encounter remains an isolated fixture.

## Persistent state and ownership

quests.hangryFangs: id/title/status, briefed, crateStage(0/1/2), discovered, masteryRecorded, resolution, rewarded, completedAt. World encounter carries origin=hangry_fangs through serialization/dispatch; only that encounter's mastery outcome satisfies the world objective. Reward/journal updates are pure module rules; UI does not duplicate them. Existing save schema1/three keys and original player/form resource ownership remain unchanged.

world.visited + historical hubExpansion.visited retain explored nodes; knowledge derives neighboring names through legal edges. world.examined independently gates details. devShowLocationRefs defaults false per save, changes presentation only and never reveals fogged nodes.

## Explicitly unfinished

The third authored quest resolution — defeated/encased player earning mastery through internal mental resistance — remains deferred until a general encased-player supplement and Kibbles-specific behavior are designed. The current combat Resist Mental button does not implement it. No new escape checks, schedules or influence thresholds are invented. Tier price curves, rarity/tier effects, Repository registered storage/host allocation, coupon redemption, pack deterrence and new alley art are also pending. See active log IDs ENC-01, KB-01/02, XP-01, REP-01, SHOP-01, WORLD-02 and ART-01.

