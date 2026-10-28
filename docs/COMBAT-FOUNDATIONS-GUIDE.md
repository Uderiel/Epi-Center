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
