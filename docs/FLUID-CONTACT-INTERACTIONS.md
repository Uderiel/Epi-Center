# Typed fluid ingestion and skin contact — implemented locally, unpublished

## Input and acceptance

The shared `fluid-contact-lexicon.js` recognizes consumption/skin-contact requests, named participants and body-region aliases. `fluid-contact.js` resolves actual body, co-presence, warning, player confirmation, source, region access and NPC decision before exposure. The optional stop shortcut calls the same controller. Desires, negation, quoted speech and purpose clauses preserve existing language protections.

Supported examples include “I consume saliva from Tits”, “I consume Tits’s drool”, “I ask Tits to drool into my mouth”, “I lick Tits’s hand”, “I suck on Tits’s neck”, “I lick sweat from Tits at the forehead”, “I hold Tits’s hand”, “I keep my hand against Tits’s hand”, “I keep skin contact with Tits at the neck”, “I accept the fluid contact”, “I stop contact” and “I pull away”. “I ask to consume …” is also recognized. Unknown regions require clarification; body words never manufacture wounds, exposed skin or fluid.

The owner approved Tits permitting requested saliva/sweat exchange publicly in a quiet shop after warning and player choice. Existing negative-relationship/service-refusal and work/customer constraints still apply. No +100 gate. Her warning is brief, infectiousness-focused and personally upbeat, not a mechanics lecture; her literal thinking remains part of her dossier. Genital-fluid requests ask for privacy without teleporting, opening staff areas or starting contact. They can proceed only within an already controller-accepted private encounter, with an actually recorded fresh source. No other NPC acceptance policy is inferred.

## Sources, regions and actual time

Accepted direct saliva consumption creates an actual live oral-source record. Accepted licking or skin-sucking infers ingestion only if actual fresh sweat is on that named accessible region; the player need not separately type “I ingest”. Dry contact contributes no exposure. If sweat later becomes available during an ongoing accepted action, only subsequent actual qualifying time counts. Sweat drying/expiration pauses exposure; newly produced sweat can start another real contact record without losing the session’s stable stop identity.

Hands, forehead and neck are the exposed-region request baseline. Covered under-chest, thigh, armpit or foot regions require an actual controller-recorded exposed/direct-contact observation in an active accepted private encounter. Merely requesting them does not uncover them. Genital-fluid requests never create semen, pre-ejaculate or secretions; the source must already exist as a resolved, fresh fluid record with matching source/type. Product fluids remain noninfectious.

The live game clock advances ingestion toward10 cumulative minutes per contamination point within rolling120 minutes; individual old minutes expire. Continuous skin contact takes60 minutes, or30 for a recorded actual broken-skin injury at that region. The injury adapter accepts only controller-resolved regional records; there is no new player-typed injury creator. Ongoing direct oral contact remains fresh, while detached samples retain their original120-minute lifetime. Sweat freshness follows actual regional production time. Source clocks are never refreshed merely by inspection.

Passed ingestion at one source-region point cannot prematurely complete a different point’s timer. Legacy saved global intervals reconstruct per-point progress from existing contacts. Shared difficulty escalation, separate simultaneous resistance rolls and immediate suppression after infection remain unchanged. Kissing retains its separate20-minute rolling rule.

## Stops, serialization and limits

Either participant can stop; work demand, loss of region access, movement or a changed body/partner ends contact. Speech and other time-consuming actions interrupt ongoing contact rather than silently accruing consumption during them. “I pull away” stops actual paired contact; pending warning requests can also be withdrawn. Reload cannot reroll checks or grant offline activity.

The feed records neutral controller outcomes with authored `tone: explicit_adult` and separate `recordedFluidContact` metadata: action, source, fluid, region, route, actual qualifying-fluid availability and contact status. Hidden dice/results remain in the exposure controller. Prose cannot grant consent, source availability or infection.

This implements typed requests for the authored Tits policy and shared controller hooks. It does not implement other NPC policies, automatic private transport, arbitrary new genital-fluid production, or a full injury-generation system. Sweat observation is not transmission by itself.

## Verification

Seventeen focused contact cases cover warning/confirmation, exact timing, dry/fresh/expired sweat, implicit consumption, simultaneous sessions, separate point timers, legacy migration, privacy/source requirements, accessible regions, work/absence/participant stops, body restrictions, wording/modalities and reload. Eight browser cases exercise the real composer, canonical clock, perspiration scheduler, live feed, stop shortcut and serialized narrator options in an isolated QA slot. No owner saves or paid calls. Full current regression and browser counts are recorded in `verification/fluid-contact-summary.json`. Published v1.0.130 and its frozen Bible remain unchanged.
