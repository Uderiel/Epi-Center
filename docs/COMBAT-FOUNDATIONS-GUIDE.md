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

## Approved safeguards for controlled offensive actions (2026-10-28)
Status: approved design rules; not yet implemented in live encounter engine or UI.
- A controller cannot compel expenditure of a captured character's limited-use abilities, consumables, or optional resources. The player may voluntarily choose a legal technique that spends those resources.
- The controller selects a legal target by default, while the player chooses the eligible offensive technique. Explicitly authored exceptional control abilities require separate review and must not silently bypass resource safeguards.
- If no legal offensive technique is available, forfeit the controlled offensive action; do not fabricate an attack, bypass cooldowns, spend resources involuntarily, or grant extra actions.
- Keep the captured character's original initiative slot, eligible defenses, resistance and escape opportunities; no bonus turn for the controlling form.
- Future implementation should test empty action menus, depleted resources, cooldowns, target invalidation, ally targeting, and action-economy invariants.

## Provisional influence progression and content rebuild policy (2026-10-28)
Status: user accepted as provisional playtest baseline; no live combat implementation.
- Influence changes: failed control resistance +5 percentage points; successful control resistance -15; successful ally intervention -10; failed ally intervention no change. Clamp to 0-100. Maintain at least one possible successful resistance outcome; exact DC scaling still requires playtesting.
- Rebuild combat stats and ten-attribute allocations for NPCs, transformation forms and cursed objects individually as content is developed. Preserve existing lore, quests, save compatibility and content identities.
- Legacy six-attribute values are design references only, not automatically converted or copied into the new system. Do not apply player creation budget/cap indiscriminately to NPCs or independent form stats.
- Prefer a shared combatant/ability/effect schema with entity-specific acquisition, activation, equipment and encounter rules. Avoid hardcoded per-entity combat logic.
- The approved influence baseline is not a finalized balance guarantee; validate against varied builds and party sizes before shipping.

## Approved defensive attribute pairings (2026-10-28)
Status: attribute pairings approved; numeric formulas and hit probabilities remain provisional and unimplemented.
- Physical Defense: primary Reflexes, secondary Endurance.
- Mental Defense: primary Willpower, secondary Reasoning.
- Arousal Defense: primary Stability, secondary Insight.
- Candidate passive defense formula for each: 10 + primary attribute + floor(secondary attribute / 2). Base 10 and half weighting require simulation before approval.
- Candidate attack resolution: 1d20 + attack-specific attribute + applicable modifiers versus the targeted defense. Meeting the defense succeeds is proposed, not yet approved.
- Candidate balance target: approximately 50-60% ordinary attack hit chance against comparably developed defenders; test cross-specialty mismatches and active reactions before committing.

## Initial defense accuracy simulation (2026-10-28)
Status: analytical playtest only; no formula or rarity progression approved or implemented.
- Tested 3 representative archetype builds (40 allocation points each), 4 hypothetical rarity tiers, all 144 attacker/defender archetype and rarity combinations; exact enumeration of 20 possible attack rolls, with hit on tie.
- Proposed attack attribute used for tests: Physical Fitness, Mental Influence, Arousal Presence. Passive defense = 10 + primary + floor(secondary/2). Hypothetical rarity adds +2 attack and +2 passive defense per tier; not a production rarity rule.
- Equal-rarity hit chances by attacking archetype Physical: versus Physical 40%, Mental 70%, Arousal 70%; Mental: versus Physical 70%, Mental 40%, Arousal 70%; Arousal: versus Physical 70%, Mental 65%, Arousal 40%.
- Same-specialty hit chance versus passive defense base 7/8/9/10/11: 55/50/45/40/35 percent respectively.
- Rarity gap +/-1 tier changes hit chance by 10 percentage points under the hypothetical +2/tier model. Do not assume rarity boosts both attack and defense in final design.
- Exhaustive 400-pair d20 test of active defense max(passive, 1d20+primary) for primary=7, secondary=3, attack bonus=7: base 8 passive hit 50%, active hit 38.75%; base 10 passive hit 40%, active hit 33%.
- Findings: base 10 may suppress equally specialized attacks; base 8 reaches 50% target. +2 per rarity tier is aggressive if rarity also raises damage/health. Test broader allocation distributions, action economy, damage, resource costs, final transformation resistance and party composition before approving numbers.

## Phase 1 expanded balance stress test (2026-10-28)
Status: completed analytical/provisional simulation, NOT approved live balance or implemented encounter rules.
- Reproducible local script: epi_center_phase1_sim.py; outputs epi_center_phase1_accuracy.csv (2430 scenarios), epi_center_phase1_multi_enemy.csv (162), epi_center_phase1_transformation.csv (108 scenarios x 12000 trials). Files supplied to user in conversation, not committed to repo.
- Nine valid 40-point, <=7-per-attribute builds: three specialists, even generalist, three hybrids, fragile attacker, low-Stability vulnerability. Tested base passive defenses 8 and 10, three disciplines, five hypothetical rarity gaps (-2 to +2 with +2 attack per tier), active defense, one to three enemies.
- At base 8, passive defenses (Physical/Mental/Arousal): Physical specialist 18/11/12; Mental specialist 12/18/16; Arousal specialist 12/12/18; Even generalist 14/14/14; Physical/Mental hybrid 15/15/14; Mental/Arousal hybrid 12/16/16; Physical/Arousal hybrid 15/11/15; Fragile attacker 9/12/14; Low Stability 15/15/9.
- Multi-enemy stress: generic +7 Arousal attacker versus even generalist base-8 Arousal defense 14 yields 70% passive hit chance. With 1/2/3 enemies, expected hits without reaction 0.7/1.4/2.1 per round; with one active reaction 0.562/1.262/1.962. Multiple attackers outpace a single reaction.
- Transformation stress assumptions: six rounds, independent per-attacker tracks, +7 attack vs Arousal defense, +20 buildup per successful attack, threshold 100, final check 50% success and reset to 50 on success; one active defense against first attacker per round; no ally rescue, escape, damage, incapacitation, arousal prerequisite or player counteroffense. Fixed RNG seed 20261028.
- Transformation-loss estimates with base 8 and one active reaction, for 1/2/3 attackers: Arousal specialist 1.88/7.06/12.36%; even generalist 8.65/28.23/43.63%; low-Stability build 31.31/64.62/81.56%. These are narrow scenario outcomes, not full encounter win rates.
- Findings: generalists and hybrids retain broadly viable passive defenses, but single-stat vulnerabilities and concentrated enemy action economy can be punishing. Test targeted anti-swarm measures, allies, escape and counteroffense in Phase 2 before changing formulas.
- Phase 2 full encounter simulation (Health, damage, reactions, resources, transformation, influence, allies, rarity) intentionally deferred until user reviews Phase 1.

## Simulation scope correction: equipped forms, mastery, and party preparation (2026-10-28)
Status: user clarification of established game design; future balance testing requirement, not a new engine implementation.
- Phase 1 accuracy, swarm, and transformation simulations evaluated isolated base-character attribute profiles. They DID NOT model equippable form stats, form mastery, pre-combat suit selection, or coordinated multiplayer party composition. Interpret low-attribute vulnerability findings as unprepared/isolated stress cases, not proof of build nonviability.
- Equipped forms have their own combat stats/attributes and abilities; mastery can modify combat effectiveness. Do not assume base stats are always the effective combat stats, and do not automatically merge or overwrite base/form attributes without following approved transformation/equipment rules.
- Players may anticipate encounters and equip suits/forms with defensive or offensive profiles appropriate to threats. Players may coordinate complementary forms with allies to offset weaknesses. Preserve meaningful value for preparation, mastery, and team tactics.
- Future Phase 2 full-encounter simulations must stratify: unprepared base-only, prepared equipped-form, different mastery levels, coordinated complementary parties, and poorly matched parties; compare solo and multiple attackers at multiple rarities. Report assumptions for form stats, mastery bonuses, and party roles explicitly as provisional until approved.
- Evaluate whether specialists, generalists, hybrids and non-meta allocations remain viable through form selection and teamwork, without erasing the intended risks of surprise or poor preparation.

## Phase 2 exploratory form choice/mastery/rarity simulation (2026-10-28)
Status: provisional numerical experiment, NOT production rarity/mastery mechanics; 1,248 configurations x 180 Monte Carlo trials = 224,640 encounters. Script and CSV provided in conversation.
- Model uses form-specific attributes instead of treating the base build as permanent combat specialization. Compares unequipped/base profiles, Warrior, Guardian, Mindwarden, Composure, Striker, rarity tiers 0-3, mastery levels 0-2, physical/mental/arousal enemy focus, difficulty 0-3, 1-3 enemies, and coordinated/mismatched parties.
- Simplifications: player actions before enemy actions rather than rolled initiative; one active reaction/player/round; 12-round maximum; hypothetical rarity +1 accuracy/defense per tier plus HP/damage; hypothetical mastery limited offense/reaction/support boosts; arbitrary HP/damage/attack DC and transformation buildup; 180 trials per configuration, so estimates are noisy.
- Example difficulty-2 Arousal solo mission: tier-0 Warrior wins 1.1% at mastery 0, 28.3% mastery 2; tier-2 Warrior 71.7% / 92.8%; tier-2 Composure 72.2% / 92.8%. At tier-2 mastery-0, transformation loss Warrior 23.9% vs Composure 8.9%.
- Model limitation discovered: parties of three virtually always win comparable cases, so party scaling, enemy tactics, role utility and action economy are NOT validated; revise model before balance conclusions.
- Interpret as directional evidence that form choice, suit tier, mastery, and preparation can affect outcomes; do not finalize rarity progression, base defense, or encounter difficulty from this experiment.
- Core design reaffirmed: base character identity and roleplay persist; player may equip and master independently statted forms, switch tactical roles, and coordinate complementary suits. Appropriate higher-tier suits may be necessary for reliably viable dangerous missions; low-tier suit use is allowed but riskier.

## Expanded faction, equipment and meta-build stress test (2026-10-28)
Status: exploratory simulation only; no combat numbers, encounter selector, rarity, mastery or gear modifiers approved for production.
- 2,520 configurations x 1,600 seeded trials = 4,032,000 simulated 10-round encounters. Local reproducible files: epi_center_balance_stress.py and epi_center_balance_stress_results.csv (shared in chat, not committed to repo).
- Variables: Slime/Mecha/Mixed threats, enemy count 2-4, mission tiers 0-3, form tiers 0-3, mastery 0-2, none/offense/defense/resist/balanced gear, coordinated vs uncoordinated, 5 three-player compositions, standard vs counter-capable enemy variant.
- Provisional simplified model: three allies act before enemy exchange; one attack each, damage/HP and accuracy scaled by hypothetical rarity/mastery/gear; slime buildup to 100 and final 50% resistance. No complete action/reaction system, distinct form abilities, real equipment database, faction-specific tactics, player-selected target priorities, objectives, influence, or full encounter selector. This is a sensitivity/stress test, NOT validated game balance.
- At tier-2 three-enemy standard missions with tier-2 high-mastery balanced-gear coordinated parties, win rates Slime/Mecha/Mixed: Warrior+Mindwarden+Composure 73.94/77.94/78.81%; three generalists 97.19/97.75/97.25%; Guardian+Mindwarden+Composure 51.69/47.19/48.75%; three Warriors 99.81/100/100%; three Strikers 100/100/100%.
- Tier-2 Slime 3-enemy mission, balanced mixed party: tier-0 unmastered unequipped 0%; tier-0 high-mastery balanced gear 0.13%; tier-1 moderate mastery balanced gear 3.12%; tier-2 unmastered unequipped 19.31%; tier-2 high-mastery balanced gear 73.94%; tier-3 high-mastery offensive gear 95.63%.
- Key model failure: damage-first resolution causes offensive party meta dominance and makes support/defense roles underpowered. DO NOT interpret as definitive form balance; next test must include unique ability mechanics, alternative objectives, resistances, interrupts, control and support actions, encounter telegraphs, and counterplay.
- Design proposal for later review: mission difficulty labels reflect intrinsic threat, not player-relative safety; offer optional party-readiness estimate based on observed party stats/gear/mastery and known threat intel, not guaranteed outcome. Use authored faction-consistent encounter templates with bounded selection by mission tier/party size, never secret dynamic stat fudging or automatic hard counters to players' chosen gear. Record challenge metrics (win rates, round counts, transformation/control outcomes, ally losses, resource expenditure, contribution by role) and flag dominant builds across diverse encounters.
