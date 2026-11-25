# Post-mastery form tiers — approved rules and local implementation

## Owner correction and universal limits

Tiers advance inside a form's existing rarity. They do not promote Common to Uncommon/Rare/Epic/Legendary, rewrite base rarity budgets or reprice the form. Initial mastery grants control and precedes tier advancement.

| Form rarity | Maximum post-mastery tier |
| --- | ---: |
| Common |0|
| Uncommon |1|
| Rare |2|
| Epic |3|
| Legendary |4|

The earlier assistant suggestion of absolute Tier 1=Uncommon/Tier 2=Rare/Tier 3=Epic/Tier 4=Legendary is withdrawn. An initially-Uncommon werewolf is unmastered with no tier upgrades earned. After initial mastery it remains Uncommon at tier 0 and can earn tier 1 only. HigherLegendary is a resource exception, not an automatically new tier or rarity cap.

## Approved rewards

Tier 1 awards two attribute bonus points, all to one selected stat or split. Tier 3 awards four additional points, likewise selected or split: six total attribute bonus points through tier 3. These are form-owned bonuses separate from its authored zero-to-ten base attributes, original player allocation and equipment. The existing effective-modifier pipeline permits bonuses beyond the base cap; the rarity's base budget remains unchanged.

Tiers 2 and 4 each grant a form-specific authored passive, a duration-limited continuous ability, or a single-use activation restricted by an authored cooldown. The form card must define the exact reward/effect, timing, conditions, costs, exclusions, interruption, reload state and actual activation/passive adapter. No universal damage/perk values or timing is supplied by this rule. An ability descriptor and a form-local grant adapter are supported by the shared controller; native effect/activation/timer controllers still need each actual ability's design and implementation. Registering an empty description is not a finished combat power.

## Local runtime

form-tiers.js supplies rarity limits, reward validation, ownership/mastery/out-of-combat gates, sequential advancement, exact stat distributions, stale-request prevention and atomic form-local grants. Native XP costs are approved and immutable: Tier 1 costs 500 XP, Tier 2 costs 1,000, Tier 3 costs 1,500, and Tier 4 costs 2,000. Each step is paid separately, for cumulative totals of 500 / 1,500 / 3,000 / 5,000. Eligible mastered forms may purchase attribute tiers. Ability tiers remain gated until the applicable actual form ability exists. Tests use the production XP costs and explicitly synthetic ability adapters, not invented authored powers.

Tier progression is saved on the actual owned form, with level and award receipts. Repeated requests cannot award/spend twice, invalid distributions/costs/ownership leave state unchanged, and grant adapters cannot rewrite protected base attributes/resources/rarity/identity/custody. Stat bonuses are derived from earned attribute-award receipts, not a raw legacy masteryTier number. Existing original-player stats, injuries/spending, rarity, mastery, inventory and money are preserved. Resource maxima/damage/cost tuning is not silently changed by these stat awards; the actual current effective-stat/roll pipeline is reused.

Equipment-region/current-stat/combat-snapshot consumers include earned form bonuses separately from base values. The Stats display identifies the tier modifier source. The Form panel shows current/max tier, current XP, next reward and the actual gating reason. XP assignment uses optional type-button controls without a nested form or unrelated required field, and shared text/menu actions call the same controller. Common forms cannot receive new tier XP assignments. Existing banked XP or legacy tier records are preserved for review; no silent refund, loss or reinterpretation is performed. XP can be banked on other owned unmastered forms, preserving the earlier allocation workflow; spending on an upgrade requires mastery.

Legacy nonzero tiers without the new award records require review, rather than receiving fabricated retrospective bonuses. Common legacy tier values never grant post-mastery upgrades. Conversion/resale must explicitly clear/reset the appropriate earned-tier state when those unbuilt services are authored; storage alone preserves it.

## Remaining design and integration

The owner rejected the earlier 150 / 300 / 600 / 1,200 proposal as too small for the game's scale. Approved and implemented: 500 / 1,000 / 1,500 / 2,000 XP per upgrade, with cumulative totals 500 / 1,500 / 3,000 / 5,000. No new XP income, automatic grant, retroactive spending or balance tuning is implied.

Owner defers individual tier 2/4 ability design until a Rare-or-higher form is being built. At that form’s review, consult this saved progression/cost record, the approved resource standards and the relevant saved appearance measurements. This is an explicit authoring trigger, not a blocker for completing the Uncommon werewolf, which only reaches Tier 1. Actual duration/cooldown activation, resource effects beyond the current modifier pipeline, conversion/reset and legacy XP refund/reallocation remain visible follow-up work. The werewolf only has tier 1 available, so its initial 55-point profile and its form-specific living/transform/mastery controllers still require review/build. No form stock or checkout is created here.

## Verification

Thirteen new controller cases cover caps, mastery/ownership/rarity/combat, split/cumulative attributes, invalid/stale/no-funds requests, atomic ability grants, effective bonuses beyond base cap, combat snapshots, reload, two players and legacy preservation. Five phone-width checks cover actual Common/Uncommon UI, typed attribute selection/advancement, optional non-nested XP controls, modifier sources and reload. That earlier checkpoint used synthetic costs/abilities. The subsequent cost update uses the owner-approved production ladder and synthetic ability adapters only; see verification/form-tier-costs-summary.json. The full regression and exact final manifest are in verification/form-tiers-summary.json. No owner save, paid model call, commit, deployment or publication.
