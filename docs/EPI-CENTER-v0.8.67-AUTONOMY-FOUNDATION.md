# EPI-CENTER v0.8.67 — Reusable Autonomy Foundation

> Release update (2026-10-25): all thirteen required suites have now passed against the final unchanged build, including supplemental 38/38. The owner conditionally authorized publication; see [final release record](EPI-CENTER-RELEASE-v0.8.67.md). Publication-status and previously declined/partial-suite statements below describe earlier development checkpoints. Physical Android/manual acceptance are still pending.

Date: 2026-10-25. Status: local review candidate; not published or manually accepted.


> Current status: the resumed dialogue/influence addendums supersede this document's initial 100%-only execution interpretation. Conscious intentions operate at every band. See [completion and verification](EPI-CENTER-v0.8.67-COMPLETION-AND-VERIFICATION.md) for the final control policy, test evidence, known footwear failure, and candidate hash. The sections below retain the earlier foundation checkpoint history.
## Source authority

- Candidate: [epi-center-v0.8.67-reusable-autonomy-foundation.html](../epi-center-v0.8.67-reusable-autonomy-foundation.html).
- Source: accepted v0.8.66 jewelry/storage/equipment-field correction, SHA-256 D79D8FAA21DF7C9042C345C557AE8491EEB2759071BDB26A4C2194C8AEF5E889.
- Published index.html currently matches that v0.8.66 source. Neither was modified.
- The supplied v0.8.66 request is completed historical context. Its later equipment-region repair is included.
- Read the current handoff, changelog, status, and checklist. Those v0.8.65 documents predate publication of v0.8.66; historical documents and checkpoints remain unchanged.
- Compared the v0.8.65/v0.8.66 clock, autonomy announcements, physical-object, equipment, and save paths before implementation.

## Implemented architecture

The original v0.8.66 source is retained, except its authoritative candidate build value is 0.8.67. The foundation is appended.

- Autonomy867.createEngine accepts separate profiles, action definitions, a persistent store, an actor adapter, and injectable randomness. It has no references to Erin, the apartment, h63, or the game's player state.
- Profiles configure identity/type/binding, personality, capabilities, home/activity locations, weekday/weekend schedules, preferences and weights, needs/rates, restrictions, dialogue metadata, history and memory limits.
- Capabilities and needs are explicit, not inferred from humanoid anatomy. Independent actors can use separate adapters and physical state.
- ACTIONS867 supplies stable IDs, durations, priorities, weights, allowed locations/rooms/windows, capabilities, predicates, cooldowns, disabled dependencies, and optional follow-ups.
- Generic eligibility additionally supports required carried/equipped objects, resource quantities, trust restrictions, external commitments, and unsafe-condition gates.
- Priority is resolved before weighted selection. Tests inject random values without replacing global Math.random.
- Pending commitments retain start/due timestamps, source location/room, sequence IDs, and relevant physical-state guards. Render and reload do not advance an action.
- Effects are planned as explicit patches against authoritative objects. transaction verifies writes and rolls back prior patches if verification fails. Empty/no-op effects cannot report success.
- Completion rechecks control, location, windows, cooldowns, resources, and action-specific guards. Failed/cancelled actions record reasons and do not record successful memory.
- A persistent lastSeen marker and claimed pending record prevent duplicate execution. Failures have a five-minute retry cooldown. Successful actions use their explicit cooldown, otherwise zero.
- The journal records actor, start/completion time, starting world/room location, action, outcome, state changes, and failure reason. History is bounded to 60 entries, memory to 20; the interface shows the latest 12.

## Clock integration and override changes

The game clock remains erin817 day/clock/minute; no new real-time timer or offline simulation exists.

- wrapClock867 observes final elapsed time from advance818, actionMinute836, and tick817, with a nesting guard.
- sayErin817 is also wrapped because its older implementation temporarily calls tick817 and then rewinds the clock before applying the final one-minute cost. Autonomy sees only the final elapsed interval.
- The announcement-only v0.8.55 tick layer is bypassed using its existing tickBefore855 reference, preserving the underlying clock, resilience behavior, and mental audit.
- erinHomeBeat827 and bedtime828 no longer claim unexecuted reading, clothing, grooming, or sleep effects.
- stepEvening828 retains the bedtime intention and five-minute cost, but execution uses the new scheduler.
- Existing dialogue, transformation timing, passive recovery, travel, and physical-item handlers remain in the retained baseline.
- Scheduling completes at most one action per actor per clock advance. A large time skip never replays a full day of activities or appends repeated catch-up events. Completion is timestamped when the engine observes it, not backdated.
- Background here means game-time advancement while another panel is open. Closing the browser does not simulate activity.

## Erin reference profile and actual effects

Erin is a form consciousness sharing the player's body, not an independent NPC. ERIN_AUTONOMY867 uses existing ERIN817 personality, interests, and communication metadata.

Historical initial policy (superseded by the completion report): automatic body actions required a named, completed profile, Erin's full physical form, apartment access, physical presence at home, 100% influence, and an unmastered form. Mastery retains the baseline's promise of player control. A pending travel decision blocks scheduling.

| Action | Verified physical effects / restriction |
| --- | --- |
| move-to-bed / move-to-living | Changes erin835.room through one existing connected room edge; synchronizes room UI. No world travel or discovery bypass. |
| remove-footwear | Moves existing equipped ordinary shoe objects to inventory. Signature shoes-0 is excluded; no cursed removal bypass. |
| prepare-sleep | Sets persistent readiness and bedside posture. Does not claim teeth, skincare, alarms, or outfit changes. |
| sleep | Records sleeping and lying-in-bed state in the bedroom; synchronizes the old bedtime UI's stage. |
| wake | Clears sleeping/readiness, restores standing posture, resets legacy bedtime stage/intention. |
| rest | Reduces the actor's new coarse fatigue need and records resting posture; does not grant inventory, trust, mastery, or extra game time. |
| read | Advances existing living840 book progress/read count; sets actual chair and lamp state. |
| quiet-tv | Changes the existing television mode to fireplace and the seat to sofa. |

Physical movement away from the bed interrupts tracked sleep and records the interruption; it never teleports the player back.

Weekdays reserve 09:00–17:00 for wake/needed rest only. No office attendance or absence penalties are simulated. Weekend leisure starts later; wake targets are 07:00 weekdays and 08:00 weekends.

Coarse fatigue is new scheduling state only: initial 20, +2/hour while awake, -12/hour asleep; rest additionally reduces it by 15. It does not replace/rebalance health, resilience, transformation, trust, or existing attributes.

## Second sample actor

SAMPLE_AUTONOMY867 is an independent aquatic test actor with swim/rest capabilities and its own base, needs, and schedule. It is a definition only, never registered in live actors or spawned into the world.

Browser tests instantiate a separate engine/store/adapter, execute the same rest action without hands or human routines, and verify the live game state is unchanged. Separate test fixtures also exercise location, resource, relationship, safety, and capability restrictions.

## Save compatibility

The active key remains epicenter_foundation_v060; prototype fallback keys are unchanged.

Only additive s.autonomy867 data is introduced: schema, actors, pending commitments, sequence/cooldowns, fatigue/posture/sleep/readiness, bounded history and memory. Existing physical-item records remain authoritative; no equipment copies or new jewelry entries are created.

Loading adds no autonomous effects or elapsed time. Pending and completed actions survive reload; completed actions are not replayed. Original archives and transformed appearance remain separate.

Compatibility evidence includes real v0.8.65 save fixtures imported into the candidate and real v0.8.67 reloads. It is not a blanket guarantee for every historical or future save variant. Older builds ignore the new namespace and do not understand its scheduling commitments; avoid alternating versions during an in-progress autonomy test.

## Browser verification

Disposable headless Chrome profiles, loopback HTTP, 390x844 viewport. No personal browser profile or real player save was used.

| Suite | Result | Coverage |
| --- | --- | --- |
| Autonomy engine/integration | 59/59 passed | Fresh/low/high/mastered/incomplete forms; weekdays/weekends; times and locations; deterministic weights and priorities; safety/capabilities; missing/stored resources; unavailable actions; cooldowns/follow-ups; transaction rollback; stale/failed effects; all clock paths; dialogue rewind; large skips; room routing; ordinary footwear; prepare/sleep/wake/interruption; second aquatic sample; journal/layout/errors. |
| Final appearance/jewelry regressions | 249/249 passed | All five jewelry items plus belt; region summaries and region Unequip controls; original appearance; complete lifecycle; reloads; panel/location switching; layout. |
| Final existing-save imports | 52/52 passed | v0.8.65 equipped, carried, mixed, and missing accessory records; unrelated objects, condition/metadata; layered clothing/makeup; identity, attributes, quests, trust/influence and anatomy preservation. |
| Final onboarding/red-heels regressions | 14/14 passed | Candidate startup and inline-script compilation, character setup, discovery/travel, normal non-DEV courtyard pickup, one carried pair, repeated candidate navigation/reload, original prototype fallback. Harness output calls these root checks, but this run targeted the versioned candidate; index.html was not promoted. |
| Final autonomy persistence | 12/12 passed | Actual reloads with pending/completed actions and sleep; no duplicate completion; cooldowns, original archives, inventory, quest/reward/attribute progress, trust/influence/anatomy; waking and journal. |

The final broader run was initially declined, then explicitly reauthorized by the owner and completed successfully. These suites overlap; do not sum them as unique gameplay acceptance cases. No browser errors or horizontal overflow were observed in the exercised cases. Emulation is not physical Android verification.

Static verification: the retained v0.8.66 prefix matches exactly except the candidate build value; original save-key definitions are identical; index.html and the v0.8.66 versioned source hashes remain unchanged.

## Disabled dependencies and limits

- Workplace/commute: unavailable; no attendance simulation or penalties.
- Meals: reusable resource-consumption adapter not connected.
- Grooming: multi-step adapter not connected; existing manual grooming remains available.
- Cursed footwear: automatic changes disabled; existing player-facing resistance/removal rules preserved.
- No autonomous external/world travel, NPC spawning, or independent Erin-T.
- New fatigue rates and mastery/control policy are provisional foundation choices for owner review.
- No comprehensive sleep physiology, automatic input lock, or consent/persuasion redesign. Player actions can interrupt routines; this foundation does not prevent every unrelated legacy input while asleep.
- No wall-clock/offline progression, full-day catch-up, global clock refactor, or comprehensive legacy-save/device matrix.
- Only the Erin adapter is connected to live gameplay. Future actors need adapters for their actual physical capabilities, resources, safety, relationships, and effects; data definitions alone do not create those systems.

## Focused manual acceptance checklist

Use a disposable save, retain a backup, and keep this candidate separate from the published entry.

- At low influence, inspect the journal and pass time: no automatic body actions.
- With complete Erin form, 100% influence, unmastered, at home: pass game time and inspect actual room, reading/TV, seat and lamp changes. On weekdays during work hours, confirm no fake office attendance.
- At 22:00 in the living room, advance one minute per step: living room -> hall -> bedroom. No teleport or undiscovered-world travel.
- Wear ordinary shoes: confirm they return to carried inventory before bed, without changing signature red-heels ownership or bypassing cursed removal.
- Advance five minutes for preparation and five for sleep. Reload, advance game time through morning, then another minute for waking; verify sleep/posture and bedtime controls.
- Move elsewhere during a pending routine; inspect failure/cancellation/interruption and confirm no stale effects.
- Change the book or footwear manually during a pending action; confirm it fails rather than claiming a second success.
- Reload during a pending action and after completion; confirm the remaining duration and exactly-once history.
- Inspect journal in Play/DEV, including failures, small-screen scrolling and long state-change descriptions.
- Recheck mastery's player-control promise and approve/revise the 100%-influence/full-form/home-only policy and provisional fatigue rates.
- Retest current v0.8.66 save backups and physical Android Chrome. Automated fixtures do not replace this manual acceptance.
- Do not promote index.html, commit, push, or publish until the owner approves this candidate.

## Candidate SHA-256

EFAD3BFB70ACFE629C4E53AF71129C8867D4B8D4807717D61ECDE6D910BE7B0B

## Bed full-sleep follow-up

The bed now has Sleep a full cycle (8 hours), alongside the existing short rests. sleepAtBed867 advances the authoritative clock with advance818, then records waking in the bedroom. This is an explicit player-selected action, available at low influence as well as high influence; it is not an automatic agreement to a dialogue request.

Additive s.sleep867 stores start/due/completion timestamps and bounded history. An incomplete saved cycle shows Resume with only the remaining minutes. No game time advances merely from reloading. Moving away interrupts the cycle; pending travel blocks it. A selected full sleep cancels a conflicting pending autonomy action and suspends automatic body actions during that cycle.

Existing time-based resilience/transformation effects continue through advance818. No clothing is removed, no cursed-removal check is bypassed, and no extra healing or rewards are granted. The existing coarse autonomy fatigue is reduced using its configured sleep rate. Completed cycles are visible in the bed and the activity journal.

Follow-up browser tests: 17/17 focused bed-sleep checks passed, including a real reload/resume, midnight rollover, low influence, invalid context, and 390x844 layout. Existing autonomy (59), persistence (12), jewelry/appearance (249), legacy-save (52), and onboarding/heels (14) suites were rerun after this change. Physical Android and manual acceptance remain pending.

The influence/trust/stress/dialogue addendum was cut off at request step 5. The subsequent resume request authorized the visible requirements; see the completion report. The existing automatic-body gating described above has not been redesigned by this bed interaction; do not interpret it as the final intended model for consciousness or low-influence intentions.

Manual follow-up: open Bedroom -> Bed, select full sleep, verify exactly eight game hours and unchanged equipment, reload, and check the completion time/journal. Review the eight-hour duration as the candidate default. Do not publish until accepted.

Current footwear follow-up: [cursed footwear repair, root cause and latest focused verification](EPI-CENTER-v0.8.67-CURSED-FOOTWEAR-REPAIR.md). The older double-equip failure above describes the pre-repair checkpoint. The cursed item remains in Equipment under Feet; its unique ID, transformation handlers and save ownership are preserved.
