# EPI-CENTER v0.8.68 — Manual Acceptance Repairs

Date: 2026-10-25. Verification checkpoint: local review candidate before development handoff. At that checkpoint no commit, push, index promotion, or publication had occurred. Subsequently included in the development-only handoff; see [current development status](development/v0.8.68/CURRENT-STATUS.md). Production remains v0.8.67. Publication statements below refer to this original verification checkpoint.

## Files

- [epi-center-v0.8.68-manual-acceptance-repairs.html](../epi-center-v0.8.68-manual-acceptance-repairs.html)
- This report.
- [Reproducible test sources and results](releases/v0.8.68-manual-acceptance-verification.zip)

Published baseline: v0.8.67, commit 6c79b01acc65b41374fa0608bd3e923e01f14def. Both the versioned baseline and index.html remain byte-identical with SHA-256 EFAD3BFB70ACFE629C4E53AF71129C8867D4B8D4807717D61ECDE6D910BE7B0B. Historical documentation, v0.8.67 release records and the unrelated Phase 1 notes were not modified.

## Reproduction and root causes

### Movement conflict — confirmed in the published code

Original moveRoom835 (about line 3381) writes s.erin835.room to the manual destination, then calls actionMinute836(1). wrapClock867 invokes the scheduler during that clock advancement. The scheduler sees the newly assigned Entry Hall as its starting room, completes a one-minute move-to-bed, and writes Bedroom. The original manual handler then narrates entry into Entry Hall without checking the final physical room. The v0.8.38 UI wrapper projects the resulting Bedroom.

The source is one physical room record; the bug is interleaved mutation/authority ordering, not two valid independent room locations. Stale pending source rooms can also create misleading transitions if not checked. Adding a movement cooldown or hiding journal rows would not fix this.

A disposable baseline reproduction used Day 21, 04:27, 100 influence, trust 57, stress 0, complete Erin form, Bedroom. Nine manual Entry Hall attempts advanced to 04:36, produced nine completed hall-to-bed events, left the physical/UI room at Bedroom, and repeatedly claimed "You enter the Entry Hall."

### Missing autonomy visibility — confirmed

Autonomy867.record retained verified outcomes in the actor journal but had no live-feed delivery hook. Private intentions appeared, while completed physical actions and many interruptions remained diagnostic-only.

### Generic questions and stale clarification — confirmed in part

In a clean baseline fixture, both exact owner questions parsed as questions, not requests, but assess delegated to the older generic erinThought827 response and did not express a meaningful current activity/food preference. A prior pending clarification remained after a successful answer. The literal generic clarification reply was not reproduced from these questions alone; the generic fallback and stale-panel state were independently confirmed.

The repair therefore addresses contextual question handling and pending-state lifecycle, rather than asserting that every reported symptom had one parser cause.

## Movement repair

- movementAuthority868 (about line 5807) resolves contextual control before any physical room mutation.
- At the existing strong/maximum physical authority, actual sleep, fatigue, valid commitments, intentions, personality and existing trust/stress cooperation determine the response. Nighttime alone is not an unconditional lock. An agreed pause, mastery/player control, low influence, or the existing resistance outcome can permit movement. No new dice threshold or opposed roll was added.
- Refusal leaves the authoritative room unchanged, records a private blocked attempt in the main feed, and uses the existing one-minute navigation cost. Actual autonomy may then continue from the real room during that elapsed time.
- The final moveRoom835 wrapper (about line 5816) validates the connected route from the physical room, not stale UI state. Allowed movement is atomic relative to the scheduler's body-action step.
- Room navigation does not start/complete another autonomous movement during its own minute. A manually interrupted pending activity is recorded/narrated rather than silently overwritten.
- ui838.room is synchronized as a projection of roomState835().room after movement.
- Existing sleep interruption effects are used when an allowed movement wakes the body.
- A stale preparation flag alone cannot keep an awake character trapped during daytime.
- enter and move825 guards cover leaving the apartment through known discovered routes; the map cannot silently bypass a sleep refusal. Unknown/undiscovered route handling and allowed travel timing remain on the existing paths.
- Selecting the room already occupied does not fabricate another movement or advance time.

The existing resistance handler was tested with controlled successful outcomes: its original Wisdom DCs 17 then 16 and two 13-point reductions bring influence from 100 to 74. Movement then respects the resulting existing authority band. A single resistance success is not invented as a universal movement override.

## Main live-feed integration

- Autonomy867.record now calls the actor adapter's optional onEvent after recording the actual result. The reusable engine still has no Erin-specific narration.
- autonomyAdapter867.onEvent (about line 5785) narrates verified movement, reading, television, rest, lamp, ordinary-footwear removal, preparation, sleep and waking. Failed/cancelled/interrupted actions describe the actual noncompletion.
- Private blocked attempts and negotiations remain labeled as private Erin interactions. Observable physical outcomes use World labels. All use the existing say816/live815 chronology.
- Each newly delivered event has a persistent liveDelivered868 marker, preventing duplicate delivery/reload replay. Existing history is not swept and renarrated.
- Agreed pauses and withdrawn delegation that previously appended history directly also produce truthful interruption messages.
- Existing live-feed history and its existing retention policy are preserved. There is no reset or replacement of the live feed.
- The old secondary activity preview no longer repeats a second transcript; its indicators remain. Detailed journal data remains optional diagnostics, not the only visible consequence.
- Conversation itself does not duplicate the immediately answered preference as an unsolicited initiative; internal intentions continue to be recorded.

## Natural dialogue and synchronization

- Dialogue867.interpret follow-up (about line 5843) distinguishes explicit preference questions, polar preference questions, direct requests, indirect suggestions, statements, hypotheticals, and negation/withdrawal.
- "What would you like to do?" considers actual time, room/world location, current pending activity, fatigue, stress, available scheduled activities, preferences, trust and control context.
- "What would you like for lunch?" gives a character-consistent aspirational food preference with time/stress/trust context. It does not initialize/consume food, prepare a meal or add meal automation.
- "Would you like to read?" and "Do you prefer reading or television?" remain questions, including when multiple activities are mentioned.
- Supported suggestions such as "A little reading might be nice" retain their own mode and still use existing agreement/authorization rules. Hypothetical discussion cannot execute a routine.
- preferenceReply868 (about line 5860) uses deterministic rotating, persisted phrase choices to avoid identical adjacent responses. No new randomness changes the activity decision stream.
- A genuinely unresolved actionable question retains its exact raw wording. Ordinary conversation does not create a generic clarification merely because an activity word appears.
- Successfully answered questions clear stale clarification state and old form-dialogue clarification indicators without deleting original messages. Existing valid agreements are not automatically authorized.
- pendingDialogue868 (about line 5921) shows only a real unresolved question or an agreed action awaiting authorization beside the live conversation. The diagnostic journal does not duplicate those controls.
- Authorization, withdrawal, physical capability, slot rules, resources, cooldowns and control are still checked through the established implementation.

## Verification on the final candidate

All browser runs used disposable Chrome profiles and loopback HTTP, never personal saves.

### New acceptance repair checks

81/81 passed at 390x844 and 81/81 at 360x640. These are the same assertion set repeated at two viewports, not 162 unique gameplay scenarios.

Coverage:
- Exact Day 21 04:27–04:36 sequence using actual room buttons and explicit fatigue 80 for the tired fixture. A rested comparison is tested separately.
- Nine real blocked attempts, no false Hall entry and no hall-to-bed oscillation.
- One verified preparation, truthful feed delivery and chronological game timestamps.
- Low-influence allowed movement and atomic daytime navigation.
- Stale physical source/UI state, stale bedtime readiness and failed-event narration.
- High versus low trust, high stress, negotiated pause and original resistance outcomes.
- Known-route map exit cannot bypass refusal.
- Pending versus completed reading, once-only event delivery, public/private labels.
- Both exact owner preference questions, repeated answers, indirect suggestions, hypotheticals, statements and genuine ambiguity.
- Negated requests, stale clarification cleanup, one authorization control and unchanged food state.
- Actual reloads preserve pending actions, original identity, conversation, live feed, room/time and once-only completion.
- No uncaught game errors or horizontal overflow in the exercised cases.

The initial dedicated test harness had a variable collision with the game's start function and a reading fixture placed in Bedroom instead of Living Room. Those were test-fixture errors, corrected without weakening the assertions or changing unrelated game rules.

### Complete existing v0.8.67 suite, retargeted to v0.8.68

| Suite | Result |
| --- | --- |
| Dialogue/influence | 60/60 |
| Dialogue reloads | 9/9 |
| Autonomy engine | 61/61 |
| Appearance/equipment | 249/249 |
| v0.8.65 save imports | 52/52 |
| v0.8.66 save imports | 52/52 |
| Autonomy persistence | 12/12 |
| Full bed sleep | 17/17 |
| Onboarding/red heels | 14/14 |
| Supplemental | 38/38 |
| Cursed footwear | 22/22 |
| Conflict/storage/reload | 21/21 |
| Legacy reconciliation | 9/9 |

All 13 suites passed with expected counts and all pass flags checked by the existing runner: 616 overlapping assertions. Only candidate path, readiness/title and build-label expectations were retargeted; gameplay assertions were retained. Browser startup/inline JavaScript compilation are included. Existing suite totals must not be added to owner manual acceptance.

## Compatibility and limits

- Save keys and legacy fallbacks are unchanged. Existing actor/response records gain additive phrase counters and delivery markers; no identity, transformation, trust/stress, item or reward reset occurs.
- Published index.html and the v0.8.67 file are untouched; v0.8.68 is not published or manually accepted.
- No workplace, meal consumption, grooming automation, external AI service, new resistance rules or global movement refactor was introduced.
- Language interpretation remains a bounded local parser; unrestricted natural language and async AI integration are not claimed.
- Authority handling here covers current apartment-room and connected exit entry points, not new world/NPC travel systems.
- Game time remains action driven; blocked movement attempts consume one existing navigation minute and can allow a real routine to progress. No wall-clock or offline timer was added.
- Physical Android Chrome, software keyboard/touch behavior and owner acceptance remain pending.
- Earlier journal/live history is retained under existing bounded-history policies; old diagnostic events are not backfilled into the feed.

## Owner acceptance checklist

1. Load a disposable complete Erin-form save at Day 21 04:27, influence 100, trust 57, stress 0, fatigue 80, Bedroom.
2. Repeatedly select Entry Hall through 04:36. Confirm actual Bedroom, explicit private refusal, and no false entry/return loop.
3. Watch preparation/sleep progress in the main feed and compare optional diagnostics to actual room/state.
4. Negotiate and authorize a pause, then leave. Separately test the existing resistance path and its resulting authority band.
5. Ask both exact preference questions repeatedly, then try a suggestion, hypothetical, genuine ambiguity and negation. Check truthful varied answers and no stale clarification.
6. Reload during a pending routine; verify it completes once with one live consequence.
7. Review daytime movement and a stale preparation flag; do not accept a permanent daytime trap.
8. Retest footwear, storage, original appearance and full sleep on a disposable physical Android save.
9. Approve this candidate before any commit/push/promotion.

## Final contextual-autonomy verification

The earlier local C20EA2 checkpoint over-enforced bedtime merely because it was night. The final candidate corrects this. `movementAuthority868` evaluates actual sleep, fatigue (existing threshold 60), valid pending commitments, recent intention, personality consideration and existing trust/stress cooperation thresholds. Influence governs physical authority rather than willingness or consciousness. No new dice difficulty was added.

`accommodateMovement868` records additive `actor.movementAgreement868` after verified movement. The final `autonomyAdapter867.authority` wrapper protects that choice from counter-movement for the existing 30-minute delegation duration, without globally pausing autonomy. Other eligible actions still execute; explicitly delegated actions remain possible. After expiry Erin may resume her routine. Existing negotiated pauses and the tested resistance outcome (100 to 87 to 74 through existing rolls) remain effective on subsequent scheduler ticks and reload.

52/52 additional disposable Chrome checks passed: the exact tired Day 21 04:27–04:36 nine-attempt sequence; same-time rested accommodation; trust, stress and personality differences; real sleeping/reading commitments; next-tick preservation; autonomous rest during accommodation; expiry; negotiated pause; resistance; ordinary daytime autonomy; and actual reload. The two 81-check viewport suites and all 13 legacy suites were rerun on this final candidate and passed. Counts overlap and are not manual acceptance passes. Static checks confirmed unchanged storage-operation calls and absence of origin-test markers in product code.

Actual captured live-feed/dialogue examples:

- “Erin accommodates the move to Entry Hall for now. She still has her own plans, but will let this choice stand for a while.”
- “Erin takes a quiet rest and eases her fatigue.”
- “I would like to finish settling down to sleep before choosing something else.”
- “For lunch later, I would like something light, perhaps a salad. Cooking is not really my hobby. Right now, I would rather finish resting.”
- “Yes, that sounds reasonable. We can arrange that, if you want to authorize it.”

Local Live Server and GitHub Pages remain separate localStorage origins. Tests used the same disposable Chrome profile to create independent saves on loopback HTTP and actual HTTPS GitHub Pages, then revisited each to verify isolation. No saves were transferred. No personal browser profile was accessed. The repair implements no synchronization, backend, import/export or silent overwrite; the existing save key is unchanged.

See the separate [design-only safe save-transfer proposal](EPI-CENTER-SAFE-SAVE-TRANSFER-PROPOSAL.md). It requires separate approval before implementation.

No failures remain in the completed automated checks. Physical Android Chrome/touch/keyboard checks and owner acceptance remain pending. Language interpretation remains bounded. Owner acceptance should repeat both the fatigue-80 refusal and fatigue-0 accommodation cases rather than assume time alone forces refusal. Published v0.8.67 and index.html remain unchanged; no commit, push or publication occurred.

## Final artifact hashes

Candidate:
AA8A8C08A8C63460AFBFE6225A7B5865ACA38A2C49DEF85B1DC6A2E7C17D713C

Verification archive:
E9DD557DA8BADCF45CF3AFF62FCECB929212F13D92B34560D765367DBC3E5EED
