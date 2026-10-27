# Epi-Center — Player Attribute System (Owner Proposal, 2026-10-26)

**Status:** Owner-proposed foundational mechanics; **not implemented or accepted as gameplay**. Priority moved ahead of UI reference drawers after v0.8.82 visibly displayed new toolbar. Do not modify accepted save key, original profile, or active form mechanics until migration and tests are designed.

## Five domains; ten attributes

| Domain | Internal (Defensive) | External (Offensive) |
|---|---|---|
| Body | Endurance | Fitness |
| Senses | Intuition | Reflexes |
| Mind | Focus / Willpower | Reasoning |
| Spirit | Stability | Presence |
| Social | Empathy / Insight | Influence / Intimidation |

**Internal** governs endurance, recovery, processing and resisting pressure. **External** governs speed, impact, expression and influencing outcomes. Labels are functional emphases, not absolute prohibitions on use in other checks.

## Allocation and modifier proposal

- Owner specifies **85 allocation points at character creation**, **155 maximum points**, **70 additional points found/earned**, and **maximum 16 allocated points to an attribute during creation**. **OWNER CONFIRMED 2026-10-26:** All ten attributes begin at **0** during character creation. Exactly **85 points** are distributed directly as attribute scores across all ten. The 155 total maximum is 85 creation points plus 70 additional points earned or discovered in gameplay. Creation cap is 16 per attribute. Do not grant any automatic baseline points. **Still open:** whether final 0 is allowed, and what 0 means mechanically; score 1 is listed as failure.
- Score/modifier landmarks: **1 = fail**, **2 = −4**, **4 = −3**, **6 = −2**, **8 = −1**, **10 = baseline +0**, **12 = +1**, **14 = +2**, **16 = +3**, **18 = +4**, **20 = succeed**. **Open question:** how odd scores are treated; provisional interpretation is each even threshold covers following odd score (2–3, 4–5, etc), except 1 and 20; also clarify whether 1/20 are automatic results or modifiers.
- Owner specifies **Stability 20 raises normal form influence thresholds for speech/actions by 10** (wording: “Normal percentiles for form influence over speech and actions are raised 20 in this stat raises by ten”). Clarify exact scaling and threshold behavior before implementing.

## Per-attribute mechanics

- **Endurance (Body / Internal):** reduces combat fatigue accumulation; increases out-of-combat health recovery. Example: prolonged fights and injury recovery.
- **Fitness (Body / External):** strength checks, grappling, forcing doors; physical transformation resistance rolls.
- **Intuition (Senses / Internal):** surprise-attack detection, hidden items, subtle environmental cues, lies.
- **Reflexes (Senses / External):** dodge checks, turn priority (higher first unless surprised).
- **Focus / Willpower (Mind / Internal):** reduces form influence gain; reduces roll penalties from hunger/bladder and other pressures.
- **Reasoning (Mind / External):** buying/selling/barter prices; logical arguments to bypass high-influence restrictions.
- **Stability (Spirit / Internal):** autonomy persistence and resistance to form control; influence threshold adjustments as above.
- **Presence (Spirit / External):** performance, charisma-like aura, physical grace, attracting attention.
- **Empathy / Insight (Social / Internal):** relationship accrual; additional knowledge from surroundings / reference Guide completion; NPC motives and emotional pressure.
- **Influence / Intimidation (Social / External):** persuasion, intimidation, negotiation, verbal dialogue bonuses.

## Resource and survival meters

**Health:** base character 100, adjusted by form and rarity. **Stamina:** base character 100, adjusted by form and rarity; limits combat actions and is affected by Hunger/Fatigue.

**Hunger:** 0–100; +4/hour since last meal; eating resets to 0. Hourly degradation based on hunger band:

| Hunger | Stamina degradation/hour | Health degradation/hour |
|---|---:|---:|
| 0–25 | 0 | 0 |
| 26–50 | +1 | 0 |
| 51–75 | +2 | 0 |
| 76–99 | +3 | 0 |
| 100 | +3 | +1 |

**Bladder:** 0–100; +4/hour since restroom; restroom resets to 0. Focus/Willpower roll penalty: 0–25 = 0; 26–50 = −1; 51–75 = −2; 76–100 = −3. No stamina loss was specified for bladder.

**Fatigue:** 0–100; +4/hour since full sleep; full rest resets to 0. Hourly degradation:

| Fatigue | Stamina degradation/hour | Health degradation/hour |
|---|---:|---:|
| 0–25 | 0 | 0 |
| 26–50 | +1 | 0 |
| 51–75 | +2 | 0 |
| 76–99 | +3 | 0 |
| 100 | +3 | +1 |

**Interpretation requiring confirmation:** “+1/+2/+3 stamina degradation/hour” means stamina **lost** per elapsed hour, not a positive regeneration. Clarify stacking between Hunger and Fatigue, offline elapsed-time accrual, full-rest/meal durations, current forms' modifications, and whether Focus reduces the listed bladder penalties or their effects.

## Implementation plan and migration gates

1. Resolve creation score floors, 85/155/70 accounting, odd score modifier treatment and 1/20 automatic outcomes.
2. Audit existing character creation, attributes, form influence, Erin autonomy, stamina/health, and time system. Design migration preserving all existing profiles and saved data; no blind reset.
3. Introduce a central attribute schema and roll resolver with unit tests; preserve existing mechanics until explicit replacement.
4. Introduce Hunger, Bladder and Fatigue clocks with bounded catch-up and deterministic test fixtures; ensure save/reload and no double-degradation.
5. Update full-screen creation and Character, Form, Stats drawers to display authoritative state; Equip remains full-screen.
6. Integrate travel, exploration, combat, NPC, forms and relationships incrementally; publish immutable candidate builds with owner Android tests and update handoff/changelog/checklist.

**Latest visible UI result:** owner confirms v0.8.82 quick-reference items appeared at top; no acceptance of attribute implementation yet. Last formally accepted gameplay baseline v0.8.74.

## Recommended creation-floor decision (awaiting owner approval)

Recommendation: allow each of the ten attributes to begin at **0 while editing**, but require **at least 1** in each to finalize. Creation still requires **exactly 85 points** distributed, with **maximum 16** per attribute; at least 10 points are spent on minimums, leaving 75 freely distributable. A final score of 1 uses the owner's existing automatic-failure rule; score 0 remains an incomplete allocation, not a gameplay stat. Provide an optional warning for attributes below 6. **This is a recommendation, not yet owner-confirmed or implemented.**

## Owner clarification: standard 1d20 resolution (2026-10-26)

**OWNER CONFIRMED:** Allocated attribute scores determine modifiers to a **standard 1d20 roll**. The base check without external modifiers is `1d20 + applicable attribute modifier`. Equipment, weapons, abilities, and forms can later add separate modifiers, e.g. `1d20 + attribute modifier + equipment modifier + form modifier + ability modifier + situational modifier`, when relevant. Do not treat the attribute score itself as the rolled result or as a standalone pass/fail threshold.

**OPEN, do not implement without clarification:** The original score endpoints `1 (fail)` and `20 (succeed)` might represent special attribute behavior or merely score landmarks; ask owner before assigning them numeric modifiers or automatic outcomes. The assistant suggested score 1 = −5 and natural d20 1/20 critical outcomes, but **these are suggestions, not owner-confirmed rules**. Do not overwrite the owner's listed endpoint semantics. The final minimum-one recommendation remains awaiting approval.

## Owner-confirmed natural d20 extremes (2026-10-26)

**CONFIRMED:** The original entries `1 (fail)` and `20 (succeed)` refer to the **natural result of a standard 1d20 roll**, NOT allocated attribute scores. Natural d20 **1 always fails**, and natural d20 **20 always succeeds**, irrespective of attribute/equipment/form/ability modifiers. For natural rolls 2–19, resolve `d20 + attribute modifier + applicable external modifiers` against the check difficulty. The attribute modifier ladder remains score 2–3: −4, 4–5: −3, 6–7: −2, 8–9: −1, 10–11: 0, 12–13: +1, 14–15: +2, 16–17: +3, 18–19: +4. **Still unresolved:** how attribute scores 1 and 20 themselves map to numerical modifiers, and whether to mandate final minimum score 1 (recommended but not yet approved). Prior speculative interpretation of 1/20 as automatic attribute outcomes is superseded.

## Proposed compression-bed recovery and NPC schedules (2026-10-26; awaiting owner approval)

Owner suggests Epi-Center lore: **time-compression beds grant the restorative equivalent of six hours of rest during 30 seconds of real-world use**, enabling players to continue social RP without one-hour lockouts. At the existing conversion of 10 real minutes per game hour, 30 real seconds equals **3 shared-world minutes**. Proposed implementation: **one synchronized world clock**; do not advance the server or player timeline by six hours. Successful uninterrupted compression resets Fatigue to 0; Hunger/Bladder accrue only for the 3 actual in-game minutes; no extra time for crafting, travel, passive earnings, or NPC routines. This is restorative equivalence, not literal time travel. Consider powered beds, safe access, occupancy, interruptions and recovery exploits. **No game code changed; final mechanics not yet confirmed.**

NPC routine design: separate required sleep/recovery from preferred evening routines, social availability, privacy, occupations and autonomy. Erin may continue choosing private evenings and returning home, while social NPCs can visit venues, player residences and communal rest hubs. Do not forcibly make Erin more social or erase existing autonomous preferences. Player-run guesthouses/safehouses and public recovery hubs could encourage multiplayer interaction. Implement only after owner approves rules and migration/test plan.

## Owner-approved housing availability and alternative attribute proposal (2026-10-26)

**Owner decision:** Time-compression beds are **standard equipment included in every player personal residence**, not an optional premium upgrade. Proposed recovery equivalence remains six hours of rest in 30 real-world seconds with a shared synchronized clock; gameplay implementation remains pending.

**Former-player alternative under evaluation — NOT adopted yet:** ten attributes rated 0–10, direct `1d20 + attribute` (no modifier conversion, no negative attribute modifiers), 35–40 creation points, creation per-attribute cap 6–7, 30–40 earnable points, lifetime individual cap 10, and DCs raised approximately 4–5. Preserve owner-confirmed natural d20 1 automatic fail / 20 automatic success. Example suggested DCs: Easy 12–14, Moderate 15–17, Hard 18–20, Very Hard 21–23. Comparison against original: DC 15 old vs DC 20 new, weak −4 vs 0 => 10% vs 5%, average 0 vs 5 => 30% vs 30%, strong +4 vs 10 => 50% vs 55%; DC translation only approximately preserves probabilities. **Assistant recommendations, not owner decisions:** fixed 40 starting points, creation cap 7, allow zero as a valid score, 35 earnable points (75 total), and test stacked form/equipment bonuses. Do not implement or overwrite 85/155 original framework until owner explicitly selects the alternative.

## Owner-confirmed independent Form/NPC attributes and Form mastery (2026-10-26)

**Confirmed:** Player characters, Forms, and NPCs have their **own attribute profiles**. Equipping a Form selects that Form's attributes for relevant Form-based capabilities rather than simply adding its entire attribute profile to the player's natural scores. Form selection is a tactical and roleplay decision. Each Form has its own tiered mastery progression, structured by rarity; mastery tier upgrades can grant **skills, benefits, modifiers to that Form's base attributes, or combinations** depending on that Form's rarity and number of tiers. Preserve the player's natural attributes independently; Form mastery must not silently alter them. NPCs also use their own attribute profiles.

**Not yet decided:** Exact number of tiers per rarity, individual mastery requirements, which checks use natural vs equipped-Form attributes, how NPC transformation interacts with NPC attribute profiles, and whether 0–10 direct-add alternative supersedes original 0–20/modifier system. Example Form scores and tier counts are illustrative only. Do not implement guessed numbers.

## Owner-confirmed full ten-attribute Form replacement and persistent risk (2026-10-26)

**Definitive rule:** When a player equips a Form, **all ten active attributes are replaced by that Form's own ten attributes**. Preserve the player's underlying natural attribute profile separately; do not add natural and Form attribute scores together or retain any natural attribute as active by default. Apply that Form's unlocked mastery-tier bonuses (skills, benefits, base-attribute modifiers or combinations) and applicable external/situational effects to its active profile. When no Form is equipped, the player's natural profile becomes active again. **Equipping a Form is both a tactical benefit and an ongoing risk, including after mastery.** Mastery does not automatically remove influence, takeover risk, behavioral effects, vulnerabilities or other Form-specific consequences. Exact interaction of Form influence, resistance, mastery and un-equipping remains to be specified; do not invent immunity or override established consequences. Form and NPC attribute profiles are independent. The original 0–20/modifier versus proposed 0–10/direct-add scale remains an unconfirmed choice.

## Clarification pending: Form encounter versus equipped Form (2026-10-26)

**Correction to preceding full-replacement entry:** Owner clarified that **at initial encounter, the player and the Form are separate entities with their own ten-attribute profiles**. A Form attempting to encase/take over a player is an opposed encounter: the player uses their own stats and the Form uses its own stats. **Do not replace the player's attributes merely because a Form attacks, attempts encasement, or is in contact.** The prior 'all ten active attributes replaced on equip' entry was based on an ambiguous question and **must not be treated as final authorization** for implementation. Whether and how attributes change *after successful encasement/equipping* remains open and requires explicit owner clarification. Preserve both original profiles and existing Form influence rules until resolved.

## OWNER DECISION — 0–10 direct-add attributes and transformation completion gating (2026-10-26)

**Adopted:** The ten established attribute names remain; their numeric scores now use **0–10** and rolls use `1d20 + relevant attribute + applicable Form/mastery/equipment/situational modifiers` against a DC, without converting scores through the previous 0–20 modifier ladder. Preserve natural d20 **1 = automatic failure** and **20 = automatic success**. The original 0–20 score/modifier scheme is superseded. The former player's proposed creation point budget (35–40), creation cap (6–7), earnable points (30–40), DC bands and any assistant-suggested exact values are **not individually owner-confirmed yet**; finalize them before implementing character allocation or rebalance. Existing saves require a careful migration, not blind replacement.

**Critical distinction:** Player and encountered Form/NPC have separate attribute profiles during an encasement/transformation encounter. **Do not replace the player's active attributes merely because transformation begins or progresses.** Owner specifically confirmed **Erin's 23-stage transformation:** the player retains their own attributes throughout stages **1–22**; **only after successful completion of all 23 stages** may Erin's ten attributes replace the player's active ten attributes. Track the transformation completion gate explicitly. Do not conflate transformation stage progression with Form mastery tiers; influence, autonomy, behavioral changes and appearance may evolve independently of attribute replacement. Whether other Forms use their own full-completion thresholds is to be specified, not assumed to be 23 stages. Player's underlying profile must remain preserved separately.

**Implementation status:** Design decision recorded; gameplay and character creation not yet migrated. Do not silently implement speculative point budgets, transformation thresholds for other Forms, or attribute migration formulas.

## OWNER-APPROVED numeric allocation and difficulty bands (2026-10-26)

**Confirmed, superseding the previously open budgets and DC bands:** Ten attributes each rated 0–10; **exactly 40 creation allocation points**, **creation cap 7 per attribute**, **35 additional points earnable through gameplay**, for **75 total lifetime allocation points** and **10 per-attribute lifetime cap**. Attribute score **0 is allowed** (the former-player direct-add model), unless owner later specifies a different final-creation minimum. Standard resolution: **natural d20 + relevant active attribute + applicable bonuses/penalties >= DC**; natural die **1 automatically fails**, natural die **20 automatically succeeds**. No conversion to the old score-to-modifier ladder.

**Confirmed DC categories:** Easy **12–14**; Moderate **15–17**; Hard **18–20**; Very Hard **21–23**. Conversion guideline for legacy checks: raise old DCs by approximately **4–5**, then playtest and tune individual encounters. Do **not** indiscriminately add five to every check: player, Form and NPC profiles, opposed rolls, stacked mastery/equipment bonuses, and natural 1/20 limits must be considered. Example: Reflexes 6 + natural 12 = 18, fails DC 19. The exact DC chosen within a band depends on circumstance. Distinguish natural die results from attribute values.

**Implementation caution:** Existing saved characters using old allocations or modifier math need a migration strategy that preserves progress; do not reset existing saves. The 23-stage Erin transformation gate remains separate from Form mastery.
