# Epi-Center Combat Foundations — Guide and Eve Dialogue Reference

Status: foundation prototype; no live combat interface yet. This document is the source for future Guide entries and Eve's explanations. Exact balance values are provisional.

## What is a combatant?
Players, NPCs, forms and cursed objects use the same basic record: identity, type, rarity, ten attributes, Health, Stamina, Resolve, Arousal, abilities, conditions, equipment, relationships and form state. Each individual may have different resource maximums and special actions. Rarity sets a baseline difficulty, not an automatic win.

## What do the four bars mean?
- Health: physical survival. Zero can mean physical defeat.
- Stamina: effort and exertion. Exhaustion does not automatically mean defeat.
- Resolve: mental resilience and capacity to resist influence. Zero can mean mental defeat.
- Arousal: an internal pressure meter. Reaching its encounter-defined maximum can be a loss condition.
Willpower and Stability are attributes for checks; Resolve is a resource, not an eleventh attribute.

## What happens when I am captured or encased?
Capture is not necessarily the end of play. Look for ways to recover Resolve and attempt mental saving throws, while also seeking opportunities to escape physically. The prototype has a Resist action that restores a small amount of Resolve on success and an Escape action that reduces restraint/encasement. The exact action economy and capture-specific difficulty modifiers are not finalized. Recovering Resolve improves the ability to withstand sustained mental pressure; it does not directly add a bonus to a d20 saving throw.

## What does a saving throw do?
A saving throw is a d20 roll plus a relevant attribute and modifiers against a difficulty target. It can resist hypnosis, influence, restraint or other effects. The prototype uses natural 20 as success and natural 1 as failure.

## What if a form wins?
The current encounter records defeat, but defeat is not permanent loss of agency or mastery potential. A form may gain influence over routines or actions as defined by future consequence rules. The player can resist internally, escape and try again. A form's victory does not automatically complete all 23 transformation stages or replace original attributes.

## What is mastery?
Mastery can eventually follow overcoming a form, including from within its influence. Mastery tiers and exact progress rules are not yet designed. Do not award mastery automatically from a single prototype combat result.

## What does the engine save?
Combat runs on an isolated snapshot. Its outcome record states who won, how combatants ended, and what occurred. The engine does not automatically alter persistent player or form data. A later consequence system will interpret approved outcomes.

## What can Eve explain?
Suggested future dialogue intents: `combat.basics`, `combat.resources`, `combat.saving_throws`, `combat.capture`, `combat.form_influence`, `combat.mastery`. Eve should use the same explanations as this Guide, with short examples and no new mechanics.

## Developer references
`rebuild/combat/engine.js`: `combatant`, `encounterSnapshot`, `savingThrow`, `act`, `victory`, `outcomeRecord`, `simulate`. Prototype fixtures: Kibbles, Erin's heels, ordinary NPC. Current combat actions and numbers remain provisional and should not be treated as final balancing.

## Automatic combat alignment
No player or form chooses a specialization manually. Physical = Fitness + Endurance + Reflexes + 0.5 Intuition; Mental = Willpower + Reasoning + Stability + 0.5 Insight; Arousal = Influence + Presence + Insight + 0.5 Intuition. Each score divided by the sum of all three scores gives its percentage. Equal leaders are Hybrid, all-zero is Unassigned. Alignment measures allocation, not raw combat power. The Character screen and Stats drawer show a three-segment alignment bar and score breakdown. Future form/NPC/cursed-object profiles use the same function. Matchup modifiers remain provisional.

## Approved encounter action and reaction decisions (2026-10-28)
Status: **approved design rules; not yet integrated into the live Play encounter interface or engine.** Do not confuse this section with implemented mechanics. User confirmed Android combat alignment display in character creation Save Slot 2 and character stats Save Slot 1.

- **Flexible turn order (Option B):** Each combatant has one main action and one minor action per turn, usable in either order. Either may be skipped. Reaction allowance is separate.
- **Hybrid defense (Option C):** Routine attacks check passive defense; a combatant may elect to spend an eligible reaction on active defense. Proposed safety rule: effective defense = max(passive defense, active defense roll), so a poor active roll cannot lower protection. Exact passive-defense formulas, tie resolution and bonuses remain provisional.
- **Reaction allowance:** Normally one reaction per round, shared among defense, counterattack and explicitly reaction-tagged special abilities. This is the recommended architecture pending final engine integration.
- **Juri / Counter Attack:** The foe's initial attack resolves completely first, hit or miss. Juri may then retaliate using her reaction if she remains capable and other prerequisites are satisfied. The legacy +5 Strength attack bonus must be mapped into the ten-attribute system without silently converting it.
- **Juri / Athletic Save:** Tier-four, once per encounter. When a physical attack would hit, spend the available reaction and the encounter use to roll 1d6. Results 4, 5, 6 negate damage and on-hit effects from **one incoming attack instance**; results 1, 2, 3 fail and the attack resolves normally. The use is expended on attempt even if the roll fails. Multi-hit attacks are not wholly canceled. Does not remove pre-existing effects. Does not protect against mental or arousal attacks by default.
- **Forms and abilities:** Distinguish allocated base attributes, independent form attributes, passive modifiers, activated main/minor abilities, reaction abilities, and temporary encounter conditions. Combat Alignment describes attribute distribution, not an ability restriction. Do not replace the base character's attributes until the established 23-stage transformation requirement is completed.
- **Legacy examples for later conversion:** Neko Cafe form (roll-enhancing d6); Street Fighter Juri (counter and emergency save); Nature Dryad (two root attacks every third turn and limited transformation-buildup protection); Lolita Maid (encounter-duration cognitive debuff); Bimbo's Seductress (once-per-encounter ally extra attack). Preserve original legacy stat and skill meanings pending explicit six-to-ten attribute mapping. Do not equate extra attack with extra full turn.
- **Proposed ability record model:** trigger -> eligibility -> cost -> roll -> effects -> duration -> cleanup. Abilities should be registered as data and shown contextually in the mobile encounter interface, with available reactions shown during enemy turns and main/minor choices on the player's turn.

### Unresolved before implementation
1. Reaction prompt timing and attack visibility, including hidden effects and interrupted turns.
2. Passive Physical/Mental/Arousal defense formulas, active-defense rolls, ties and reaction timing exceptions.
3. Main/minor action assignment and ability prerequisites, including ally-granted extra attacks and turn-count semantics.
4. Stamina/Resolve costs, recovery rates, and zero-resource behavior.
5. Conditions, durations, restraint, capture, and transformation-buildup immunity.
6. Legacy Str/Dex/Con/Wis/Int/Cha conversion into the ten-attribute system, including form-specific base stats and bonuses.
7. Encounter defeat/escape/capture consequences, save persistence and mastery/progression.

Do not change approved numeric ability details during conversion without user review. No new live encounter UI or combat balance is claimed by this guide update.

## Cross-discipline and transformation encounter decisions (2026-10-28)
Status: approved design direction, not yet implemented in engine or live UI.
- Reaction visibility: show ordinary attack roll before reaction choice; explicitly concealed/surprise abilities may hide details. Before-impact defenses and after-resolution counters are separate windows.
- Physical, Mental, and Arousal combat share action/reaction/defense architecture. Specialization does not restrict access to other disciplines.
- Capture, incapacitation, transformation, influence and allegiance are separate state dimensions. Arousal thresholds can unlock absorption, but do not automatically finish 23 transformation stages or replace base attributes.
- Liquid Latex Panther (original legacy example): Small Countess pet, Health 250, Con 13 Dex 17 Str 13 Wis 17 Int 13 Cha 13. Capture roll 1d20+17; absorption after target Arousal reaches 100; escape 1d50 needing 35+ once per hour after an attempt. Preserve legacy figures pending ten-attribute conversion; maintain resistance, rescue and escape routes. Countess withdrawal and Mistress escape measures are narrative considerations.
- Robot Sentry (original legacy example): Medium compound guard, Health 350, Con 22 Dex 27 Str 22 Wis 22 Int 27 Cha 20; scans, pursues, reports and carries knockout gas. Legacy incapacitation is opposed 1d20+Int vs player 1d20+Wis. Convert explicitly rather than copying old attribute modifiers.
- Temporary allegiance or influence changes need explicit targeting, duration, resistance, agency and cleanup; never silently persist as permanent control.
- Third-party copyrighted or trademarked characters and likenesses are not game content. Juri is a private mechanics reference only; create original forms for production.

### Additional unresolved rules
- Separate transformation buildup and staged conditions; stacking across sources.
- Capture/absorption and influence thresholds; resistance during and after transformation.
- Temporary allegiance changes and multiplayer targeting/agency.
- Hourly escape attempts and rescue scenes outside round-based combat.
- Gas and technical incapacitation defense categories, nonlethal outcomes, and effect timing.

## Approved encounter-only transformation buildup (2026-10-28)
Status: approved design architecture; numeric buildup rates and resistance checks provisional; not implemented in live combat.
- Encounter Transformation Buildup is a temporary combat-only meter, separate from the existing 23-stage free-roam transformation progression.
- Track buildup independently per transformation source and target; do not automatically pool different opponents' progress. Cooperative effects require explicit ability definitions.
- A successful transformation ability may add buildup, with a proposed normalized 0-100 meter. Failure adds none unless ability explicitly states otherwise. Exact amounts are not approved.
- Defenses, escape, specialized protections, and ally actions can prevent or reduce buildup according to ability rules. Define counterplay and limits before implementation.
- At threshold, resolve encounter-specific capture/transformation opportunity, not automatic permanent replacement of player attributes or advancement of free-roam stages.
- At encounter end, discard temporary buildup tracks; persist only separately approved consequence records (e.g., temporary capture or influence), never implicit transformation-stage changes.
- Resolve simultaneous sources, repeated attempts, protection duration and encounter-end cleanup deterministically; numerical balancing remains open.

## Final encounter transformation resistance (approved 2026-10-28)
Status: approved design; exact DC and reduction value provisional; no engine implementation yet.
- When a source-target encounter-only transformation buildup track reaches its threshold (proposed 100), the defender receives a final resistance check before the encounter-specific transformation objective succeeds.
- This final check is available even when the defender has already spent the normal reaction; it is a threshold safeguard, not a reaction ability.
- On success, prevent the immediate transformation objective and reduce only that source-target buildup substantially; 50/100 is a provisional playtest reset value.
- On failure, resolve the source's defined encounter-specific transformation consequence. Do not automatically advance persistent 23-stage free-roam transformation progress or replace base character attributes.
- Resistance attribute, DC, modifiers, limits on repeated threshold checks, special immunity, simultaneous thresholds and subsequent escape/rescue rules remain to be approved.

## Approved defender-choice transformation resistance (2026-10-28)
Status: approved design rule, not implemented in the live encounter engine.
- Each transformation ability defines its eligible resistance attributes, ordinarily two thematically appropriate choices; the defender chooses one when making the final transformation resistance check.
- Physical assimilation example: Endurance or Fitness. Mental conditioning: Willpower or Stability. Arousal-driven transformation: Stability or Willpower. Unusual effects explicitly define their own eligible attributes.
- Do not let attacks automatically target the defender's weakest attribute, and do not allow unrestricted choice among all ten attributes.
- Display both allowed attributes and current bonuses, including relevant conditions, in the mobile resistance prompt. Resolve one check using the selected attribute.
- Meaningful choice can arise from ability-specific secondary consequences, resource costs and conditions, but exact modifiers, DCs, and numeric balancing are not yet approved.

## Encased-player contested control proposal (2026-10-28)
Status: design discussion; user proposed control checks and influence/arousal-scaled difficulty. Numeric DC and turn-action rules are NOT yet approved or implemented.
- An encased player may have physical options restricted while Mental or Arousal resistance remains available.
- At the encased player's turn, propose one control-resistance roll with an eligible Mental or Arousal attribute. Success reduces encasing-form influence and preserves the player's offensive action; failure lets the encasing form direct one offensive action for that turn, not the entire turn.
- The player should retain visible status, combat log and eligible defense/escape actions. Encasing form must respect action eligibility and resource limits; control is temporary and contestable.
- Influence percentage should be primary control difficulty driver; arousal percentage a smaller secondary modifier. Suggested playtest DC: 14 + 2*floor(influence/25) + (arousal>=75 ? 2 : arousal>=50 ? 1 : 0). This is PROVISIONAL; exact scaling, boundary at 100%, and base DC need approval.
- Use selected ten-attribute modifier for the resistance roll; combat alignment percentages are descriptive, not substitute modifiers.
- Open decisions: when influence increases, how much successful resistance removes, whether one roll covers both channels, how controlled offensive action is selected and resolved in multiplayer, and escape while encased.

## Approved controlled-offense and archetype parity (2026-10-28)
Status: user-approved design direction; not yet implemented in live combat.
- When an encased player fails their Mental or Arousal control-resistance check, the encasing form may direct ONE eligible offensive action during that player's turn, including targeting the player's allies.
- Control of that action is temporary; it does not grant control over the entire turn, defensive reactions, resistance choices, escape opportunities, or permanent allegiance.
- The form-directed offensive action must respect the character's action economy, available resources, legal targets, and applicable conditions. Exact selection and multiplayer handling remain unresolved.
- Physical, Mental, and Arousal specialties have distinct situational advantages and disadvantages across approach, containment, transformation buildup, influence struggle, and recovery; no archetype dominates all stages.
- Specialty/Combat Alignment is a descriptive guideline derived from attribute allocation, not a restriction, override, or substitute for individual ten-attribute scores. Actual attributes, abilities, conditions, and rolls resolve actions.
- Stage-based options are design goals, not free automatic bonuses; define concrete abilities and counters before implementation.

## Approved controlled-action player engagement (2026-10-28)
Status: approved design rule; not yet implemented in live encounter UI or engine.
- During temporary encasement control, the captured character retains their existing initiative slot and turn rotation; the controller does not gain a second turn through them.
- At the controlled character's turn, offer the eligible Mental or Arousal resistance check. Success preserves independent offensive action and reduces influence. Failure grants the encasing form target selection for ONE offensive action, including an ally target.
- On a failed resistance check, the player still chooses which legal offensive technique their character uses against the controller-selected target. Resolve with the character's actual stats, abilities, costs, conditions, and remaining action allowance.
- Explicit ability text may exceptionally dictate the technique as well as the target; such exceptions must be authored and documented, not assumed.
- Preserve the player's access to permitted defensive reactions, resistance choices and escape options. Do not create a bonus action or extra turn for the controlling form.
- Still unresolved: how to handle no legal offensive technique, target becoming invalid, voluntary resource spending, ability cooldowns, and the exact influence gain/loss and resistance DC formula.
