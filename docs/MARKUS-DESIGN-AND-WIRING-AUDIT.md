# Historical pre-implementation audit — superseded wiring status

The design audit below was accurate before the native implementation pass. Its “unwired” findings have now been addressed as detailed in MARKUS-NATIVE-IMPLEMENTATION.md and verification/markus-native-wiring-summary.json. Settled approvals remain unchanged; production forest/calendar/checkout sources and genuinely unauthored details remain visible.

# Markus: completed design versus remaining work

Scope: owner requests a stop and audit, not a new proposal. The owner explicitly confirms the attribute spread has already been completed. That correction is authoritative; stale assistant “proposed/unapproved” labels must not reopen the decision. This audit changes records only, not gameplay.

## Design already settled

- Markus: adult male Uncommon werewolf, one of the opening store-produced forms; base price 7,000 gold. Feral hunter, primarily in the planned northern forest; prefers solitude or an actual pack of other werewolves. No human timetable, job, honor-code banter or fabricated domestic biography.
- Appearance, measurements and physiology: 6ft8in/285lb, charcoal/silver-gray coat, amber eyes, digitigrade 14-inch four-toed hind paws, five-fingered clawed hands, three-foot tail, entered 52/36/44-inch torso proportions, high salivation, very high perspiration, strong musky scent, warm skin, recorded voice, materials, private anatomy and black-leather-shorts showroom presentation. Existing optional unspecified measurements are not grounds to reopen the approved appearance.
- Existing settled 55-point spread: Endurance8/Fitness9/Intuition7/Reflexes7/Willpower4/Reasoning3/Stability3/Presence6/Insight3/Influence5. Derived Health240/Stamina245/Resolve220/Arousal230. No reapproval is needed.
- Enhanced scent/hearing, including discovery of the Spire chicken. This body is too large to examine/scare/collect in that quest: discovery only.
- Ordinary internal contest uses original-player Willpower versus form Reasoning. Hunting gives disadvantage; sleep/idle gives advantage; actual pack presence otherwise gives normal rolls. Hunting/rest take priority over pack presence. Voluntary player approach/pursuit does not force a resistance roll.
- Bloodlust after a real prey kill: sixty game minutes, +2 to the ordinary opposed form total, refreshes without stacking, accepted brief atmospheric cues. It does not change the final d50.
- Thirty-game-day conquest limit and final influence-banded d50 resistance: thresholds10/20/30/40/45, inclusive in twenty-point influence bands. Success releases without mastery; failure permanently entraps. Zero-Resolve binding remains an independent existing rule.
- Hidden alternative mastery route: three in-game days of resisting Markus-origin pack/feeding urges. First successful qualifying resistance begins the streak; failure or actual joining/feeding resets it. Unselected opportunity neither advances nor breaks it. Pack-ego appeals are established. Completion grants actual mastery; it is not merely an eligibility flag and does not demand the deadline escape roll after mastery.
- After conquest, monthly full moon still forces the form from inventory or Repository custody, replacing another worn form, for three sunset-to-sunrise nights.
- Uncommon remains Uncommon: after base mastery, Tier1 only, +2 selected/split attribute points for 500 XP. Higher-rare abilities are deferred until those forms are authored.
- Global blue-to-green resistance drawer is the approved UI standard. The player initiates the roll.

## Actually connected locally

| Slice | Verified source/evidence |
| --- | --- |
| Name, appearance and physical record | werewolf-form.js / werewolf-appearance.js; appearance and Spire checks |
| Feral living/private-AI profile; stale human dialogue exclusion | form-living.js / ai-context.js; Markus character/feral evidence |
| Spire discovery-only gate | easter-egg.js and its UI/text routes; werewolf-spire summary |
| Universal pricing and shared post-mastery XP foundation | repository-pricing.js / form-tiers.js; price/tier evidence |
| Shared resistance UI for current playable forms | resistance-availability.js and native UI adapters; universal-resistance summary, 2,324-check historical suite/eight browser checks |
| Pure policy/timing/probability helpers | contextual modes, bloodlust window, thirty-day window, d50 evaluator and stored secret-route policy; targeted evidence |

Helper/policy coverage is not proof of an actual playable Markus lifecycle. The common drawer correctly stays blue for Markus while his native resistance action is absent.

## Approved behavior still awaiting native wiring

The inspected engine has no registered Markus combat profile, and werewolf-form.js has no authored attributes property. The settled attributes and capacities therefore still need native registration/adoption. That is implementation work, not missing approval.

The live display catalogue has no authored Markus stock or completed purchase-to-equip flow. Acquisition, physical transformation, ordinary resistance/urge decisions, native bloodlust application, three-day secret-route credit/mastery completion, thirty-day expiry/release/binding and monthly compulsory form replacement/restoration are not a complete running controller.

The northern forest, real prey/hunts, other werewolves and pack finding are explicitly unbuilt world dependencies. They must not be simulated as completed merely to make a form test pass. No Markus portrait asset is connected in the inspected assets directory.

## Details without a located final decision

These are narrower than the settled concepts above; absence from the inspected records is not a claim that the owner never discussed them elsewhere:

- Exact combat technique payloads, costs and any cooldowns; quantified sensory/movement limits and detailed equipment compatibility.
- Markus-specific positive/negative relationship events and their numerical/repetition rules. The universal relationship bar already exists; human dating/job/home authoring should not be imposed on this feral form.
- Exact thirty-day attempt start/retry lifecycle. First completed transformation has been proposed, but no explicit confirmation is located.
- Exact world-month/lunar-calendar placement and daybreak restoration precedence when another form is replaced. The recurring three-night consequence itself is already approved.
- Native event cadence/credit accounting for the approved secret route, particularly the rule that unselected opportunities do not advance or break credit. This requires the actual activity controller, not another generic missed-check penalty.

The next work must follow this audit and the owner's direction. Do not ask for the attribute spread, appearance, rarity, price, established conquest modifiers or secret-route approval again. Nothing is published; no new gameplay tests were needed or claimed for this documentation-only audit.
