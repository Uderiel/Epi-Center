## Markus native adoption — locally implemented

Markus now registers his already-settled Uncommon55-point profile and Health240/Stamina245/Resolve220/Arousal230. Shared registerAttributeProfile supports opt-in scaleArousal metadata for this native profile, while other profiles retain their existing configuration. Native maxima, active form/combat snapshots and active-pool gain clamping use the real230capacity. This does not claim completed Arousal migration for all other actors or retune existing damage/cost/disease/service rules. See MARKUS-NATIVE-IMPLEMENTATION.md.

## Terminology correction

The resource bands in this document are rarity bands. Post-mastery tiers are a separate within-rarity progression and do not change these bands or base attribute budgets. Current owner-approved caps/rewards and implementation limits:POST-MASTERY-FORM-TIERS.md.

# Combat resources — approved base bands; remaining rules under review

**Status:** the owner approved the base bands and attribute-based derivation and directed their application to existing NPCs/forms for the next publication. Shared derivation, profile updates, no-heal legacy reconciliation and current-body/encounter/UI consumers are implemented locally. The owner now requires rarity-scaled Arousal capacity; its threshold integration and damage/cost/resistance tuning remain under review. Nothing is published.

Review one design block at a time aloud. The assistant leads the checklist. Let the owner finish and say Done before replying; mark when finished speaking. A mathematical calculation is not verified combat balance.

## Approved progression and base bands

Players are expected to acquire higher-tier forms to confront higher-tier opponents. Common versus Legendary should be overwhelmingly unfavorable. Do not weaken, auto-scale or normalize a Legendary to make that matchup fair. Evaluate ordinary pacing primarily between comparable tiers. No new rarity engagement lock or automatic victory/defeat is approved.

| Rarity | Base minimum | Base maximum | Existing attribute budget, unchanged |
| --- | ---: | ---: | ---: |
| Common | 100 | 150 | 45 |
| Uncommon | 200 | 250 | 55 |
| Rare | 300 | 350 | 65 |
| Epic | 400 | 450 | 75 |
| Legendary | 500 | 550 | 85 |
| Higher Legendary, explicit individual exception | 600 | 650 | No separate attribute budget approved |

Uncommon uses the owner's final correction: start200, maximum250. These are base ranges; actual authorized modifications may exceed the base ceiling. They are not effective-resource hard caps or a shared spendable meter. The prior proposal being corrected concerned per-resource Health/Stamina/Resolve maxima; the separate Arousal decision remains open below.

The Countess is an explicit candidate for above-normal Legendary resources and may exceed650. No exact Countess maximum, new attribute allocation, universal new rarity or other exceptional NPC is invented. Record each actual exception separately.

The initial100/150/250/400/650curve and its fixed total/role redistribution are superseded. Spectra's earlier650/780/520proposal is not an approved normal Legendary base: values above550 would need actual approved modifiers or an individual exception.

## Approved within-band derivation — implemented locally

**Owner approved:** “That works very well ... a consistent system ... application to all characters.” Use the existing zero-to-ten base attributes to choose a value inside the 50-point band:

- Health maximum = tier minimum + 5 × Endurance.
- Stamina maximum = tier minimum + 2.5 × (Endurance + Fitness).
- Resolve maximum = tier minimum + 2.5 × (Willpower + Stability).
- Rounding: nearest five; exact halves upward. Base values remain inside their band; actual modifiers are applied afterward.

The shared formula is implemented in engine.js through resourceMaxima, resourceProfile and reconcileResourceProfile. Attribute budgets, recovery rates and actual modifier values remain separate.

For Spectra’s approved Endurance 10, Fitness 10, Willpower 7 and Stability 7: **550 Health, 550 Stamina, 535 Resolve before modifiers**. Her reference/registered attribute profile uses these values; her live actor and summon remain unfinished. Her 85 attributes and specialization order are unchanged.

## Applied local maxima

| Record | Rarity | Health | Stamina | Resolve | Scope |
| --- | --- | ---: | ---: | ---: | --- |
| Charity | Epic | 425 | 420 | 450 | Existing persistent household/scene actor |
| Lee | Rare | 335 | 335 | 345 | Existing Repository actor |
| Aniya | Epic | 425 | 425 | 435 | Existing Repository actor |
| Anya | Epic | 425 | 425 | 425 | Reference/profile only; no new live actor |
| Spectra | Legendary | 550 | 550 | 535 | Reference/profile only; live actor/summon unfinished |
| Kibbles | Common | 130 | 135 | 120 | Existing form and encounter |
| Erin | Common | 120 | 120 | 130 | Full-body maxima; existing resource ownership retained |
| Priya | Common | 120 | 120 | 125 | Existing civilian actor |
| Richard | Common | 115 | 115 | 130 | Existing civilian actor |
| Daniel | Common | 125 | 125 | 125 | Existing civilian actor |
| Nadia | Common | 115 | 115 | 125 | Existing civilian actor |
| Tits | Common | 130 | 130 | 110 | Existing shop actor |

HigherLegendary is an explicitly selectable resource band while the authored attribute rarity remains Legendary with 85 points. No Countess maximum was invented. Arousal retains existing runtime behavior pending its separate design review.

## Modifications and resource ownership

Owner approves the principle that modifications can exceed the base ceiling. Exact new effects, amounts, stacking and compatibility are not authored merely by that permission. Show base maximum, real named modifier sources and final effective maximum separately. Do not disguise an above-cap role multiplier as base.

Existing owned/compatible equipment keeps its actual approved values; removal or incompatibility removes that source. Do not automatically multiply old+10items, potions, food or quest rewards with rarity. Changing a maximum is not healing. Player, active/stored/submitted form, NPC and summoned ally remain distinct owners. Equipping, mastering, summoning and reloading must not silently refill pools or erase injuries and timed vitality locks.

Latest owner adoption explicitly includes Charity as Epic, Lee as Rare, Aniya/Anya as Epic, Kibbles/Erin as Common, future Michael as Common and the other authored ordinary NPCs as Common. Older Kibbles 80/120/70 and Tits 110/110/90 base maxima are superseded by this instruction; their current damage/spending is preserved. Base-human creation and player earned attributes are not rewritten. No Michael actor or unknown attributes are invented.

## Arousal model — formula approved; calculation implemented; consumers pending

Owner explicitly requires form Arousal capacity to scale as higher-tier forms inflict more arousal damage. The old100baseline applies to basic entry-level Common forms; most Common forms are based on reality. The earlier keep100/combat-only-resilience alternative is superseded as a direction. Do not create a second hidden bar.

Owner-approved: use the same Common100–150,Uncommon200–250,Rare300–350,Epic400–450,Legendary500–550base bands. Arousal maximum=tier minimum+2.5×(Endurance+Willpower), nearest5halves upward, clamped to the base band before actual modifiers. Endurance represents bodily tolerance and Willpower resistance. HigherLegendary600–650remains an individually authored exception. The werewolf's proposed Endurance8/Willpower4would give230. The exact formula is approved and implemented in engine.arousalCapacity with four focused cases. Werewolf230is conditional on its proposed attributes. Current actor profiles, gain/completion/disease thresholds, UI and encounter migration are not yet integrated with this new helper; do not claim the global Arousal system is finished.

Current runtime still contains fixed100defaults and thresholds in shared arousal gain, social encounter completion, disease milestones and current-body resolution. Implementation must audit combat maxima/defeat, UI percentage/raw values, saved active/stored form migration, modifiers and these consumers together. Existing current amounts, zero/full resolved outcomes, ownership and timed restrictions must survive; migration cannot refund an already resolved loss or silently clear arousal. Fixed combat damage and costs need coordinated tier tuning; the capacity proposal is not combat-balance acceptance.

Fixed authored effects are not automatically multiplied: feeding quantities, Anya's40-point check, aura, six-hour suppression, infection milestones, carrier doubling and zero-Resolve binding remain authoritative until explicitly reviewed. This draft does not heal Anya's24-hour vitality locks or change their expiries.

## Damage, costs, recovery and resistance — coordinated tuning pending

Owner leaves these for further review. Larger bars alone lengthen current fixed-damage combat. Stacking rarity on resource pools, damage, defense and gear can also double-count progression. Prepare concrete recommendations against the approved bands and actual encounters before implementation.

Retain Main/Minor/Reaction limits and natural-roll rules. Recovery postures remain Main actions with Reaction forfeited; their numerical scaling is not decided by the bands. Physical/Mental/Arousal eligibility, target defenses and real effects remain authoritative. Common versus Legendary is intentionally punishing; comparable-tier pacing is a different acceptance case.

The core's default Legendary difficulty27 gives an attribute-ten attacker20%success (natural17–20), including a specialized Legendary attacker. Playable adapters also use fixed difficulties, so a successful-hit calculation is not actual turn balance. Audit comparable-tier behavior and adapter consistency before proposing any defense adjustment; do not lower Legendary defenses merely to help Common attackers. The existing category-appropriate passive-defense principle is approved, but illustrative formulas in old notes are not.

Spectra's approved signatures remain Spectral Rend28damage/16Stamina and Violet Resonance24Arousal/8Stamina+8Resolve, including their effects and cooldowns. Earlier output/cost multipliers were proposals only and are superseded pending recalculation. Do not reinterpret the approved move numbers as multiplied bases without review.

## Pre-implementation source audit and remaining integration work

Checked both the authoring checkout and `/workspace/epicenter-dialogue-accuracy` carrying later public-baseline work:

- `rebuild/combat/engine.js`: defined45/55/65/75/85attribute budgets; resources default100unless an individual maximum is supplied. No full tier-resource table is implemented.
- `entity-rules.js` and `tits.js`: individual named pools, not a general formula. Repository/civilian actors also use defaults; no complete rarity derivation was located.
- Older Kibbles notes suggested an individual150cap, not a finalized universal standard. The latest explicit bands supersede that tentative interpretation.
- Some civilian world routines clamp recovery at100. Engine support for larger maxima alone does not make the wider game compatible.
- Equipment/enchanted maximums, current-body resolution, form storage, infection, feeding, internal mastery and UI must use the proper owner and maximum. Arousal and several noncombat effects have fixed thresholds.

The local implementation now uses a shared resource authority for named NPC/form profiles and updates active/stored forms, NPC state, encounter snapshots, active-body UI, equipment maxima and fixed-100 civilian recovery caps. Legacy current values remain unchanged except clamping against a decreased effective maximum. Original identity, mastery, custody, resources and existing restrictions are preserved. Wider damage/cost/resistance changes and publication remain outside this implemented slice.

Validate band boundaries, above-cap modifiers, removal, two players, body changes, reloads and zero-resource outcomes; then actual controller combat for comparable/mismatched tiers, all disciplines, allies, control/reaction/recovery loops, retreat and multi-encounter attrition. Perform public-baseline integration before release. Do not claim numerical battle acceptance from local arithmetic or a model opinion.

## Evidence

The superseded initial draft/arithmetic are preserved under work/combat-resource-tier-review/. They are historical unapproved figures. The updated arithmetic is only a design calculation; actual implementation evidence is docs/verification/combat-resource-tiers-summary.json, the eleven new resource cases, full local regression and six phone-width checks. No owner save or paid call was used.
