# Private encounter outcome adapter — local, unpublished

Owner request: provide a non-graphic controller-resolved private encounter record, classified `explicit_adult`, including the infected NPC's active archetype, actual transmission outcome and a current-body Arousal reset when climax is recorded. This does not specify kissing behavior or new NPC invitation/acceptance policies.

## Implemented

- `rebuild/hub/intimate-encounter.js` is loaded by the hub. Authored scene controllers call `begin` only after resolving mutual agreement, prior infection disclosure, privacy, the carrier's archetype and an actual fluid-contact route. These flags are mechanical results, not fields to accept from a model or raw player JSON. Existing carrier permission/presence gates still apply.
- The controller records a fresh source/contact in `bimbo-virus-exposure.js`. It uses the real game clock and existing route thresholds, sample lifetime, hidden Endurance checks and incubation controller. Caller-supplied timestamps cannot fabricate elapsed game time. No infection percentage or numeric acute reaction is invented.
- `complete` closes the contact and records only checks attributed to that contact. Failed resistance can begin incubation; successful resistance or sub-threshold contact cannot. Private die/DC details stay in the saved mechanical record; narrative metadata contains only the outcome. Another contact's infection is not attributed to this encounter.
- A controller-recorded climax sets only the active body's Arousal to zero. Without that recorded outcome there is no reset. Independent existing resource-floor effects remain separate. Stable player identity, unrelated body resources and previous incubation are preserved.
- Cancellation, lost co-presence, changed body and missing agreement prevent completion. Completed event IDs are idempotent through reload: no repeated reset, feed entry or roll.
- `completeIntimateEncounter` connects the result to the private feed and existing serialized worker payload with `tone: explicit_adult`. `EpiIntimateEncounter.payload` also builds the serialized scene directly. The event remains a concise fade-to-black record; the generator is instructed to summarize only recorded non-graphic facts and cannot decide consent, contact or infection.
- Archetype labels are `gym_bunny`, `sorority`, and `club_bimbo`.

## Example shape

```json
{
  "tone": "explicit_adult",
  "archetype": "club_bimbo",
  "transmission": {"status": "resisted", "checks": 1},
  "event": "The player and Tits share a private, consensual intimate encounter. NPC archetype: club_bimbo. The transmission check was resisted; no infection began. Climax occurred; Arousal resets to 0."
}
```

The worker wire format remains compatible: `scene` is JSON serialized to a string, containing `tone` and the outcome context; `event` is the separate string. This example's outcome must never be substituted for an actual roll.

## Explicit remaining connection

This is the shared controller-to-exposure/feed/payload adapter, not a newly authored natural-play NPC invitation scene. No menu was added, and no text keyword grants agreement or silently starts an encounter. A resolved NPC scene must call this adapter. Tits's ordinary invitation/location/acceptance rules and the separate text-driven kissing flow have not been invented here. Do not claim that typing an encounter already triggers natural-play transmission.

## Verification and publication

Eight focused encounter cases cover transmission, failure/success/short exposure, payload tone, replay/reload, guards, cancellation, current-body isolation, co-presence and clock integrity. Existing exposure and scene-tone suites also pass. Browser checks use an isolated author-resolved QA scene and locally stubbed provider: actual feed-to-worker serialization preserves tone/outcome, infection/reset occur, and reload cannot repeat the result. No owner save or paid provider call was used.

Local implementation only. v1.0.130's published/frozen Bible and release evidence remain unchanged. Reconcile this pending record into the next version's canon/snapshot before any next publication.

Final local verification: **1,812 automated cases pass**, plus three browser assertions with a local provider stub. Saved reports: `verification/intimate-encounter-tests.json` and `verification/intimate-encounter-browser.json`.
