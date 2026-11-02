# Erin's Mental profile and dedicated Wait progression

Documentation review: this describes implemented v1.0.51 behavior, not internal mastery. [Internal mastery proposal](INTERNAL-MASTERY-DESIGN-PROPOSAL.md) separately discusses using the player's original resistance attribute against form-authored opposition, so the imposed attribute overlay does not decide both sides. That proposal and all mastery costs/rates remain unapproved; no profile/resource changes are authorized by this review.

Owner decisions, 2026-11-01: preserve the faster legacy dedicated Wait progression; establish Erin's current attributes toward a Mental archetype. These authorize implementation choices below, not a claim of owner acceptance of the resulting numbers.

## Attribute implementation

Use the existing engine's Common reference budget of 30 points, without assigning new rarity/tier prices or changing Kibbles. The distribution emphasizes Reasoning, mental steadiness and insight, consistent with Erin's professional reliability and socially deferential authored personality:

| Attribute | Value |
| --- | ---: |
| Endurance | 2 |
| Fitness | 2 |
| Intuition | 3 |
| Reflexes | 2 |
| Willpower | 4 |
| Reasoning | 6 |
| Stability | 4 |
| Presence | 2 |
| Insight | 4 |
| Influence | 1 |

Existing alignment formula yields Physical 7.5, Mental 16, Arousal 8.5; Mental is unambiguous. This is a concrete first allocation for owner acceptance, not newly invented alignment rules. Source of the budget/formula: `rebuild/combat/engine.js`, `RARITY.Common.budget` and `specialization`.

The profile applies only at the established **23/23** physical completion boundary. Until then original attributes apply. Original saved attributes/appearance are never overwritten. Character, Stats, saving throws and encounter setup read the same effective attribute view. Kibbles retains its own complete profile and saved pools, with Erin's appearance/attribute view returning after Kibbles release.

**Resources:** the owner requested establishing attributes but supplied no new Erin resource numbers. This increment retains the player's current resources/maxima and does not create/refill an Erin pool. A separate saved Erin pool and mastery/release identity require REST-13 decisions; do not copy Kibbles maxima or invent a Resolve refill. Mental combat uses the existing discipline/action-cost/outcome rules.

## Time implementation

Only the actual **Wait one hour** action uses the faster source `wait833` pattern: first eligible wait +2 changes, second +3, then alternate. Its 60 minutes replace that hour's ordinary exposure calculation; it must never give +3/+4 by applying both. The initial contact event remains separate. Existing partial ordinary exposure is retained, and the stage cap stays 23. Waiting dormant or as Kibbles does not increment the eligible wait count. Count persists across save/reload, as does ordinary exposure. No wall-clock/offline progression, per-message event or new progression threshold is added.

All other clock advances retain the source's ordinary +1 per 60 accumulated worn minutes. Removal stops progression and clears the ordinary exposure accumulator without reversing established stages. No world-clock action cost, day/night boundary, needs ownership or resource-recovery rule changes.
