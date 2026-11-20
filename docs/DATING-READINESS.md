# Dating readiness: current owner-approved baseline

Mental NPCs begin considering dating at +75 relationship, physical at +65, and arousal at +55. The NPC’s authored archetype applies; the player’s archetype is not substituted. Existing attribute specialization supplies a unique archetype where authored; future/hybrid characters must explicitly declare `relationshipPolicy.datingArchetype`. An explicit `datingThreshold` overrides the default. These are consideration thresholds, not automatic bookings, consent, entry, transformation, control or intimacy permissions.

| Character / route | Threshold | Required facts |
| --- | ---: | --- |
| Charity | +90 | Explicit character exception |
| Erin | +75 | Mental baseline; no special exception |
| Richard | +75 | Mental baseline; no special exception |
| Priya ordinary consideration | +75 | Mental baseline |
| Priya earlier cat-route date | Existing route | Completed agreement, correct identity, existing nonnegative relationship/presence/schedule rules |
| Nadia conventional | +75 | Mental baseline |
| Nadia conventional, player owns canine companion | +65 | Actual owned dog companion; a canine form does not qualify as a companion |
| Nadia master–pet | +55 | Nadia has recorded knowledge linking this player to an actually owned canine form |
| Tits ordinary dating consideration | +55 | Arousal baseline; her existing affection rules remain separate |

Nadia’s two adjustments belong to different relationship routes and do not stack to +45. The master–pet route must be identified when proposed; asking about it creates no arrangement, trapping, form change, collar, kennel or control. Her underlying motive is private author information stored separately from public NPC definitions/context. It is not copied into the live feed, codex or serialized narrator scene. Earlier assistant proposals about Charity accepting kisses at +75 are not approved rules and are superseded by the owner’s dating clarification; no generic Charity kiss permission was implemented.

## Runtime and player access

`dating-readiness.js` centralizes readiness, truthful disclosures, actual companion-ownership evidence and consideration requests. The NPC template requires dating archetype, threshold, exceptions/relationship type, knowledge requirements, and specific/favorite gifts with real sources and transfer rules.

“I ask Nadia on a date”, “I invite Richard out”, use this controller for consideration only. Generic dating shortcut buttons are withheld while full dating scenes remain deferred; existing Priya route controls remain. Existing personal circumstances remain part of the response: Daniel’s marriage is not removed by reaching a threshold. Erin remains the existing internal form person, not a newly spawned external NPC. Priya’s existing request/controller route continues to offer her cat arrangement earlier; ordinary readiness can be discussed without forcing that arrangement.

“I tell Nadia I own Kibbles canine form” or directed spoken disclosure such as “I own Kibbles form” requires the actual owned form, an available listener and speech. Mere inventory possession does not notify Nadia. Actual identity-linked witnessed events can use the same knowledge adapter. The adapter is controller-only; generated prose cannot create knowledge. Seeing an ordinary dog is not proof of a human player owning a canine form.

Companion ownership uses a resolved adoption/ownership receipt matching an actual registered canine entity’s owner. This does not create a pet, adopt Dart, implement the Pet Boutique/Form Repository, or infer ownership from a nearby dog. Those services remain deferred as the owner instructed. The ownership hook is ready for their actual controllers.

## Verification scope

Focused tests cover all three defaults, Charity/Erin/Richard, Priya’s exception, real companion versus form ownership, unknown/known form distinction, separate Nadia routes, threshold edges, reload, player isolation, actual speech/presence and private-context filtering. Browser verification uses isolated QA actors/ownership receipts where pet acquisition is not yet built, plus actual composer/controller/clock routing. No owner saves or paid model calls. Nothing published.
