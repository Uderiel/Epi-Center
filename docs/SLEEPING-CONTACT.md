# Sleeping contact and regional drying — implemented locally, unpublished

## Detection and contact

`sleeping-contact.js` combines actual player/NPC sleep state, existing accepted direct-skin-contact sessions, unchanged body and co-location, and clothing barriers. Merely sharing a room, bed or sleep state never creates skin contact, permission or exposure. The existing household sleep/wake controller records real transitions; Erin’s actual form sleep and authored NPC sleep flags/activity are read directly. Unknown NPCs cannot inherit another actor’s sleep state.

Only the named pressed region dries at half speed; an explicitly known recipient region is also tracked. Hand-holding identifies both hand surfaces. “I keep my hand against Tits’s neck” identifies source neck and recipient hands. Source/recipient clothing prevents qualifying contact or breaks an existing contact. No new bed-sharing permission, private room, teleport or NPC acceptance policy is added.

Waking removes the half-speed factor. Separating, withdrawing, changing body, or inserting clothing ends the actual continuous exposure. Remaining moisture decays at the normal rate instead of disappearing instantly. All clocks persist and rendering/reload adds no elapsed time. Sleep pauses active kissing/consumption and accepted encounter exertion; a sleeping participant cannot answer a new request. An already accepted passive skin contact can continue.

## Math, in game minutes

For starting regional body-equivalent perspiration S>0, exposed drying duration is D=10+5×ceil(S/5). Pressed sleeping regions run their effective drying clock at0.5 minutes per actual game minute, so duration is2D, including the initial grace interval. Initially dry skin stays dry. Fresh-fluid lifetime remains120 game minutes; trapping moisture does not refresh its production timestamp or prolong infectiousness.

| Activity before rest | Score at stop | Exposed region dries after | Pressed sleeping region dries after | Intact-skin check after continued pressed contact |
|---|---:|---:|---:|---:|
|10 min|0|0|0|None|
|20 min|25|35 min|70 min|60 min after activity|
|30 min|35|45 min|90 min|60 min after activity|
|40 min|45|55 min|110 min|60 min after activity|
|50 min|55|65 min|130 min|60 min after activity|

These are initially dry neck-region calculations with no renewed exertion, nervousness or footwear enclosure. The50-minute case can remain damp beyond the fluid’s120-minute infectious lifetime. Actual qualifying thresholds remain60 continuous minutes for intact skin and30 for resolved broken skin at the recipient region. They trigger hidden resistance, not guaranteed infection. Separate-point rolls and stopping after infection are unchanged.

Reproduce the implemented calculation with `node scripts/calculate-sweat-drying.cjs`; evidence is `verification/sweat-transmission-math.json`.

## Routine continuity

See ENCOUNTER-ROUTINE-CONTINUITY.md. Nighttime dressing and ordinary routines cannot interrupt an accepted private encounter or preserved overnight rest. Native morning routines resume afterward; urgent-need handling remains in its existing controller. None of this creates or narrates a new intimate act.

## Verification and scope

Sixteen focused cases cover exact drying/contact thresholds, region and body specificity, barriers, wake/separation, legacy native sleep detection, reload/timestamp idempotence, no invented sweat, private observations, no unrelated-save mutation and no new permission from sleep. Seven browser checks use a registered QA private space, accepted-contact fixtures, actual NPC/night routine and the canonical clock. No owner saves, new production bed permission or paid calls are used. Existing ingestion and kissing browser checks also pass. Full counts are in verification/sleeping-contact-summary.json. Published v1.0.130 remains unchanged.
