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
