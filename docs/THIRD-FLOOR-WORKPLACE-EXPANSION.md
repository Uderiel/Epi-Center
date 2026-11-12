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
