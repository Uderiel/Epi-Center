Canonical name update (v1.0.79): **Richard Carter**, manager of **Erin Lillard**. Save/NPC IDs, assignment and reward ledgers are unchanged.

# Richard NPC design notes

Implemented baseline in v1.0.64; see [current implementation contract](RICHARD-NPC-IMPLEMENTATION.md). Historical proposals and pending extensions below are retained.

Richard is the male Sales and Marketing Manager. Erin is his secretary, not a sales team leader. Michael is the junior intern. Richard is younger, charming, career-driven, controlling, and genuinely values Erin's competence. He is self-aware about relying on her. When stressed or fatigued he requests additional errands or after-hours summaries as a coping mechanism, not out of cruelty. He considers thanks and additional pay adequate compensation. His home is Applewood Apartments, floor 7, Suite A. He occasionally visits Sin-Thetic Pleasure on weekends; that location is not implemented.

**Dialogue rule:** Richard NEVER states the numerical extra-pay amount. He uses phrases such as 'I'll make sure there's a little extra in your pay for going above and beyond.' The underlying mechanic is 50 gold for each completed qualifying additional task, separate from regular wages. Reward once per task; no duplicate payout after reload. Grocery and dry-cleaning errands and evening report/talking-point summaries are examples. Do not treat payment as automatic consent or a substitute for boundaries.

Erin works Monday-Friday, normally 9 AM to 5 PM, subject to Richard's discretion, sometimes Saturday for events, rarely Sunday for crunch. She favors light breakfasts before work, fuller meals on days off, and a packed desk lunch on workdays.

Technology Center third floor is north of city tile 26 (building location 98). Room plan: elevator A, restrooms B-D, conference E, Erin office F, Richard office G, cubicles H, stairwell/cleaning I, sales break J, marketing break K, water cooler/printer/fax L, intern office/cubicle M; verify exact paths against owner's drawing. Preserve map geometry.

Unbuilt Central Hub quest 'If It's Not Yours, Don't Touch': Erin red heels transform player into Erin; alternate men's dress shoes transform player into intern Michael. Unchosen shoes remain visible and inspectable. No automatic second-item acquisition or assumed simultaneous form stacking.

NPC template additions: appearance, mannerisms, background, residence, preferences, schedule, needs, stress, relationship boundaries, task memory, compensation rules, dialogue variants, persistent location and navigation. Stats and implementation remain pending.

## Combat clarification — 2026-11-04
Richard remains an ordinary civilian NPC, not a trained fighter, but has access to the **same standard base Mental-specialist combat actions** as any Mental-primary participant, alongside ordinary basic Physical actions and other standard actions permitted by the combat engine. If a player initiates combat, resolve using the shared encounter engine: 1d20 + Reflexes initiative, normal attribute checks, resource costs, defensive reactions, and applicable victory conditions. Richard's AI favors defensive, tactical, de-escalating and mental approaches but can physically defend himself. No bespoke powers, combat training, transformation attacks or automatic victory. Archetype is derived from the final ten-attribute allocation, not hard-coded; proposed values are not finalized. NPC template must separate civilian role/classification from accessible base combat action sets.


## 2026-11-04 — Owner-approved location numbering correction
Canonical district assignments: **#97 Applewood Apartments** (unchanged); **#98 Technology Center**, directly north of #26; **#99 Groceries Aplenty**, one tile east of #97; **#100 Prim and Proper Dry Cleaners**, one tile east of #99. The Technology Center's third-floor data and map reference use #98. #99/#100 are mapped exterior placeholders only; store services and Richard's errands are not yet implemented. Because #26 sits at the north edge of the 11x11 map, #98 is represented as an additional north-edge node rather than shifting legacy coordinates. Tests were updated but not executed in this session. No publication claim.
