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

- Owner specifies **85 allocation points at character creation**, **155 maximum points**, **70 additional points found/earned**, and **maximum 16 allocated points to an attribute during creation**. **Open question:** starting floor, whether points are raw scores or spendable increments, and whether 155 means total score sum, earned pool or total spend. Ten attributes at baseline 10 sum to 100, so do not assume baseline 10 is freely granted in addition to 85 points.
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
