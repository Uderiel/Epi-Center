# Universal needs consequences — proposal, not approved or implemented

## Owner issue and observed implementation

Owner reports hunger, full bladder and fatigue currently have no meaningful consequences in ordinary play. The ordinary player needs meters advance in index.html through DEV_NEEDS_RATES. The shared combat engine and internal-mastery module do not directly apply a universal hunger/bladder/fatigue penalty. Existing Erin/Kibbles controllers can prioritize food, toileting, rest and form decisions; those character/form-specific behaviors are not proof of a complete universal consequence system.

This is a design gap to reconcile before declaring the living-NPC template complete. Do not tell the owner it is solved because needs are displayed or an NPC says they are tired. Existing approved rules and form behavior must be preserved.

## Proposed direction for owner review

- Escalating, clearly explained needs bands rather than hidden penalties. Exact thresholds, rates and warning cadence require approval.
- Hunger: reduced normal Stamina recovery at serious hunger; any action penalties, floor and recovery rule need review. No invented starvation damage or Resolve drain.
- Fatigue: bounded penalties to demanding actions or increased effort costs, relieved by actual rest or approved fatigue-restorative items. Exact affected rolls/costs and caps need review. Do not silently induce permanent binding by consuming Resolve.
- Bladder: escalating urgency/distraction. Whether maximum pressure causes an involuntary accident, and any hygiene/clothing/social consequences, must be proposed and approved explicitly. No graphic narration, automatic hostility or humiliation mechanic is assumed.
- Relief requires actual food/toilet/rest/item state and elapsed time where relevant; do not heal merely by describing a meal or entering a bathroom. Item names, portions, prices, effects and stacking remain separate authored data.

These are considerations, not newly authorized game rules. Draft a coherent numerical version for approval before changing runtime penalties.

## Required shared-system boundaries

One shared consequence resolver should use actual body/actor needs, physiology and action categories. Do not copy a bespoke penalty table into every NPC. Human, canine, robotic and inanimate forms need explicit applicability; do not give an inanimate object a human bladder or duplicate player/form needs. Needs belong to their actual actor/body and must not leak across players, forms or NPCs.

Save state, elapsed-time transitions, recovery and warnings must survive reload and bulk/live time without duplicate drains or repeated feed spam. Consequences passed to AI are resolved facts, not permission for generated prose to invent an accident, collapse or completed relief. Keep existing earned mastery, relationships and permanent original identity intact.

## Charity access is independent of need urgency

All areas behind Charity’s counter, including the dining room and bathroom, require relationship75+ and Charity’s real permission. Full bladder/hunger/fatigue does not bypass this rule or create a public-restroom exception. The public customer side of register C remains usable for ordinary checkout. Protected stock/secrets remain separately restricted.

Players below eligibility must seek an establishment offering public restrooms. Do not invent a functioning public toilet at an undeveloped location: Groceries Aplenty’s source includes public restroom designs, but its full interior is not implemented yet. Public-facility availability/accessibility is a prerequisite to fair consequences, not a reason to open Charity’s private bathroom by assumption.
