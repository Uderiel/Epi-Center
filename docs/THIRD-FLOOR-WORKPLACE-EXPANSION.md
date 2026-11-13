## November 13, 2026 — Erin daily-life expansion design

Owner scope: one sales leader plus 13 sales employees; one marketing leader plus 12 marketing employees. These 27 staff exclude Richard, Erin and junior intern Michael (30 workplace identities total). This supersedes the earlier two-leaders/eleven-workers count. Also requested: Michael, playable Groceries Aplenty and Prim and Proper Dry Cleaners, Erin's friends, and a restaurant/hangout.

[Full design draft](ERIN-DAILY-LIFE-EXPANSION.md) proposes named leads and a complete roster, work hooks, three friends, shop interiors/transactions, Richard's expense-backed errands, and Lantern & Laurel on existing Entertainment Row frontage. New names, schedules, prices and Michael's tentative profile are proposals, not owner-approved canon or shipped gameplay. Existing v1.0.94 remains the playable build. Staff count/unique-ID/document checks passed; no new gameplay test or deployment is claimed.

Next: settle Michael's character/lifecycle direction while beginning the shared staff/presence/workstation foundation; then build complete shop/errand and friend/venue loops using the existing clock, inventory, navigation and Erin autonomy. Preserve Erin's secretary role, 350 daily pay and separate 50 extra-task ledger. Worker v3 is owner-confirmed.

## v1.0.87 correction candidate

Owner scoped room appearance/function PASS is recorded. The single-order design and required manual lunch setting below are superseded by the batch work/lunch correction in [OFFICE-BATCH-WORK.md](OFFICE-BATCH-WORK.md). Existing v1.0.86 evidence remains historical. The correction is tested but unpublished, awaiting explicit push approval.

## Publication verification — v1.0.86

Published gameplay `210dd1c`; Pages run 43294685258 succeeded. 24/24 changed runtime/artwork files match source. 775 automated cases plus entity assertions and 11 live desktop check groups PASS. Fax, original/copies and requested tea loops were completed in the live game. Conference privacy/reload, workstation hierarchy, stalls and equipment art viewer also passed. Full live conference-pack/lunch/refill and remaining fixture/exit loops, native Android and paid-model dialogue remain UNTESTED; owner checklist below remains pending. Minor raw fractional bladder receipt formatting remains open. See release JSON evidence.

## v1.0.86 implementation candidate — owner-authorized floor build

The prior design-only restriction below is superseded by the owner’s explicit instruction to implement the proposed rooms/assets and varied workplace tasks. Implemented in `office-floor.js`, `office-floor-ui.js` and existing technology-center adapters. Existing room IDs/doors are unchanged. 775 automated cases plus entity assertions PASS; deployed/browser verification and owner acceptance follow. This is the physical floor and equipment-task slice, not completed coworker/Michael character design.

Persistent additions live under `world.technologyCenter.floorServices`: independent conference blinds and stall locks, per-room consumables, finite central reserve, one current routine equipment job, identified original/copy records, carried cup/lunch/place-setting/refill kit and bounded equipment-check receipts. Each equipment work type can be issued once per game day during weekday office hours; accept at F/L, cancel without reward/penalty. Completed/cancelled order identities remain durable. Richard handovers require real presence and ability to respond. Existing report-summary assignments/payments remain separately authoritative. Work and room controls use the same rules, time and physical-authority pipeline.

Defaults: 8 paired workstation bays per sales/marketing block; 7 women’s and 4 men’s stalls, 3 urinal fixtures; 2 briefing copies or 3 conference packs; copy/coffee/tea 3 min, pack/place/refill/local tests 2 min, physical retrieval/delivery/water/toggle 1 min, toilet 4 min, lunch 10 min. One labeled Erin lunch starts in J; further lunches consume prepared home meals. Room stocks and central reserves are finite and serialized. They do not refill by reload or passage of time. No new gold reward, attendance punishment, fictitious calls or meetings. Three new public asset groups reuse a suite image for restroom subareas and one corridor background across circulation zones; art is a location backdrop and the corrected written graph remains authoritative. Generated scene details do not add doors/routes.

### Manual acceptance checklist

1. Resume an existing save; check v1.0.86 and other slots. Tour A, H/H_W, M, E, L, J/K, both restroom suites and I through Layout. Check full-size images; F/G and legal doors remain intact.
2. Open workstation → bay → phone/computer/storage. Back returns one level and private accounts stay locked; no coworkers spawn.
3. As Erin on a workday, open Work at F and accept fax collection. Go to L → Fax station → Incoming fax tray; collect, find Richard and hand it over through Equipment duties. Reload along the way; repeat completion cannot pay or duplicate.
4. Accept the copying order at F; collect its original; go to L → Printing station → copier → output. Collect copies, return original/copies to present Richard. Wrong step/presence fails without losing documents.
5. Accept conference packs; copy/collect at L, place at E’s table and return the original to F. Toggle E’s three blinds independently and test local presentation equipment; no meeting starts.
6. With Richard present, confirm coffee/tea/water using Equipment duties or his intercom. Prepare at J/K (water also L), carry and deliver the matching drink. Wrong cup, absence, repeat handover and decline behave correctly without gold.
7. Use a drink, then L’s supply cupboard → matching refill kit → destination supply shelves → put away. Supplies transfer and persist rather than regenerate.
8. Retrieve Erin’s labeled J lunch, store/retrieve in K if desired, heat it, take a place setting, eat at a table and clear it. Check hunger and no repeated meal. At home prepare an actual meal and pack it at the kitchen counter for a later workday.
9. Open restroom stalls → chosen stall → close/lock → use → unlock. Check bladder relief and saved lock. Use sinks/dryers; incapable bodies cannot use human fixtures.
10. Inspect cleaning trolley/secured cupboard and both exit routes. Check new equipment tasks do not alter accepted report writing, one-time 50-gold extra report pay, Richard permissions, influence or other slots.
11. On Android, test nested scroll, readable buttons, one-level Back, image viewer and text/cursor stability. Report PASS/FAIL/UNTESTED per item before acceptance.

No paid-model dialogue or native Android test is claimed. Future lead meetings, unique coworker details, Michael’s character/form and role-specific duties remain explicit design dependencies.

# Third-floor workplace expansion — design requirements

Recorded 2026-11-12. Documentation only; playable baseline remains v1.0.85. Current phase: bounded Phase 10/11 Technology Center expansion. Existing office hierarchy owner retest remains pending; this request does not supply a new gameplay PASS.

## Owner direction

Design the remaining third floor from the owner’s 4289.jpg drawing and the current corrected room graph, retaining approved Reception F and Richard’s Office G. Other spaces should blend more technical corporate furniture and equipment with the established offices. Include sales/marketing cubicles, conference room, separate sales/marketing break rooms, women’s/men’s facilities, elevator bank, emergency stairs/cleaning area and shared office equipment. Computers, phones, printers, fax machines, refrigerators, microwaves, plastic utensils and paper plates should become useful interactibles. Preserve existing doors, corridors and room IDs; G is accessible only through F and building exits are A/I. Michael’s cubicle M remains connected to sales H.

The owner additionally requests diverse workplace tasks for Erin and Michael, with individual personal details added to coworkers’ and Michael’s cubicles when those characters are designed. Do not invent their identities, personal belongings, permissions or full employment profiles ahead of that design.

## Required task families and dependencies

| Task family | Playable sequence | Foundation required |
| --- | --- | --- |
| Fax/report collection | Receive a recorded request or notice; visit L; identify the correct incoming report; retrieve and deliver/file it for the intended recipient. | Persistent document identity, recipient/access rules, incoming/output tray state and one-time collection/delivery. |
| Copies and printing | Take an authorized existing document to the equipment station; make the requested copies; collect output and return/deliver it. | Shared printer/copier service, original/copy identity, requested quantity, supplies and duplicate completion guards. |
| Boss refreshments | Confirm Richard’s coffee, tea or water request; collect/prepare the correct drink using real break-room equipment and supplies; carry and hand it over in person. | Beverage preparation, ingredient/container ownership, carried drink state, actual NPC presence, existing intercom request ledger. |
| Team-lead coordination | Meet the designed sales/marketing lead to collect a briefing, clarify a discrepancy or pass along authorized materials; report back. | Authored lead NPCs, schedules, availability, roles, dialogue/task state and permissions. Deferred until those NPCs are designed. |
| Role-specific support | Give Erin secretary-appropriate coordination and briefing duties; give Michael appropriate intern support assignments after his role is authored. | Character-specific work eligibility; do not treat Michael’s form/NPC, shoes or employment progression as implemented. |

Mix these with existing reception duties and report summaries rather than repeating the same writing task throughout the workday. Equipment and NPC state should make the task steps meaningful. Further task variants are proposals, not automatically approved new rewards or penalties.

## Cubicle personalization

Use a shared functional workstation structure with character-specific details added during each coworker/Michael design: possible desk decoration, reference material, mug, stationery, photographs or work organization. These are examples only; exact belongings and personality implications await character design. Personal items remain owned property, not free loot. A workstation’s computer, phone and drawers sit under that workstation; personal details do not flood the room’s top-level options.

## Integration and interface rules

- Room → equipment/furniture group → individual object → action; Back returns one level and viewing/back is free. Reuse v1.0.85’s desk hierarchy.
- Use real elapsed game time, legal movement, embodied capability/form authority and existing player-owned needs. Dialogue cannot silently complete physical work.
- Retain existing document contents and stable identities across retrieval, copying, delivery, filing and reload. Prevent repeated task completion or payment through repeated clicks, text commands or reload.
- Staff food and personal refrigerators’ contents require ownership and access rules. Microwaves heat existing suitable food; drink/food supplies are explicit state rather than unlimited rewards.
- Connect refreshments to Richard’s pending intercom requests without spawning another Erin or teleporting deliveries.
- Existing qualifying additional-task reward remains 50 gold once, with Richard referring only to extra pay. New task eligibility for that bonus must be explicitly defined before implementation; routine copying/drinks are not automatically paid extras.
- No arbitrary deadlines, new attendance punishments, coworker schedules or forced meetings before their authored rules exist.
- Room artwork follows the established 1100 × 733 presentation. The prior assistant’s graphite/steel/cyan palette and detailed furniture arrangements remain design proposals, not owner-approved final images.

## Sequence and verification

1. Preserve existing F/G acceptance evidence and request actual results for the pending v1.0.85 hierarchy; do not infer PASS from this future-work direction.
2. Design shared document equipment L and beverage/break-room services J/K, then implement the smallest complete collection/copy or requested-drink loop with its room and save integration.
3. Continue room by room; design coworkers, leads and Michael before adding their meetings and personal cubicle details.
4. For each slice test rules, wrong recipient/item, missing supplies, access refusal, occupied/unavailable NPC, cancellation, persistence at intermediate steps, repeated completion, slot isolation and existing office regressions. Test the actual published build separately from source tests and owner acceptance.

No new gameplay version, image, NPC or equipment behavior is implemented by this document. Next implementation scope is a shared-equipment or beverage vertical slice, with explicit acceptance criteria before code.
