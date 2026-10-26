# EPI-CENTER v0.8.67 — Completion and Verification Report

> Release update (2026-10-25): all thirteen required suites have now passed against the final unchanged build, including supplemental 38/38. The owner conditionally authorized publication; see [final release record](EPI-CENTER-RELEASE-v0.8.67.md). Publication-status and previously declined/partial-suite statements below describe earlier development checkpoints. Physical Android/manual acceptance are still pending.

Date: 2026-10-25. Status: local candidate, awaiting manual acceptance. Nothing committed, pushed, published, or promoted.

## Repository and work preserved

Published index.html and the accepted v0.8.66 versioned build remain unchanged, both SHA-256 D79D8FAA21DF7C9042C345C557AE8491EEB2759071BDB26A4C2194C8AEF5E889. The v0.8.63–v0.8.65 files and historical documentation are retained. Three pre-existing untracked v0.8.62 Phase 1 documents were left alone.

Continued the existing candidate rather than recreating it. The previously completed reusable engine, connected apartment movement, clothing-object identity, regional equipment fields, bed sleep/resume, transaction verification, journals, and save support remain.

Only these development files were added/updated:
- epi-center-v0.8.67-reusable-autonomy-foundation.html
- docs/EPI-CENTER-v0.8.67-AUTONOMY-FOUNDATION.md
- docs/EPI-CENTER-v0.8.67-COMPLETION-AND-VERIFICATION.md (this report)

Temporary browser drivers, fixture scripts, disposable profiles, and JSON results remain outside the repository.

## Requirements audit

| Requirement | State now |
| --- | --- |
| Reusable autonomy engine, profiles, action registry, priorities, injectable randomness | Implemented; retained and expanded |
| Prerequisites, location/time/capability gates, resources, cooldowns, commitments | Implemented and browser tested |
| Atomic verified effects; no narration-only success | Implemented and browser tested |
| Persistent clock scheduling, events, memory and journal | Implemented; no new timer or offline catch-up |
| Separate Erin reference adapter | Implemented; live body actions stay within supported apartment systems |
| Nonhuman second sample actor | Tested in a separate store/adapter; never spawned into live world |
| Full bed sleep cycle | Eight shared-clock hours, actual wake state, resume/interruption, existing exposure/recovery preserved |
| Conscious intentions and dialogue at all influence levels | Implemented; replaces initial 100%-only interpretation |
| Five influence bands and distinct execution authority | Implemented as configurable policy, not new dice difficulties |
| Trust/stress/cooperation separate from influence | Implemented via configurable response modifiers |
| Flexible request interpretation, clarification, negation, contextual reasoning | Implemented as bounded local interpretation; not unrestricted natural-language understanding |
| Agree/refuse/negotiate/delay/ignore/alternative responses | Implemented |
| Requests do not automatically become physical actions | Implemented; agreement, explicit authorization, and execution are separate |
| Convincing, pauses, resistance | Respectful explanations may change response; agreed pauses are persistent; existing resistance handler retained |
| Future AI compatibility | Validated structured proposal/provider seam; no network/model dependency or autonomous model execution |
| Existing saves, appearance, quests, equipment, transformation | Browser regressions passed; keys unchanged |
| Publication | Intentionally not done |

The session supplies the flexible-dialogue addendum's heading, and the influence/trust/stress addendum through its truncated step 5, plus the later request to include both topics. This implementation follows those available requirements. Unseen remainder text was not reconstructed or represented as implemented.

## Architecture and code locations

Candidate source:
- Autonomy867: around line 5289; createEngine, eligibility, decisions, commitments, transactions, bounded history/memory.
- autonomyAdapter867: actor-specific context, physical plans, authority, and thinking. Core engine does not hard-code Erin.
- wrapClock867: integrates advance818, actionMinute836, tick817, and final elapsed time from sayErin817.
- sleepAtBed867 / syncSleep867: around line 5508; explicit player sleep and safe resume/interruption.
- influenceBand867 / controlPolicy867: around line 5551; band labels and authority thresholds.
- cooperation867: distinct trust/stress/tone/repetition modifiers.
- Dialogue867: around line 5563; interpret, assess, validateProposal, setInterpreter and chooseResponse.
- authorizeDialogue867: around line 5658; rechecks agreement/context, grants scoped delegation or an agreed pause without executing an action.
- send816 follow-up wrapper: handles current Form conversation; other channels retain the existing dispatch chain.
- personalityResponse867: profile-configured response thresholds/templates, also tested with a second personality definition.

## Consciousness versus physical authority

Form presence is independent of execution permission. A worn or embodied animate Erin form retains intentions even when incomplete, low-influence, mastered, away from home, paused, or unable to carry out a routine.

Intentions and recent private initiatives are bounded and persisted. They can describe wanting home, rest, sleep, or reading; an intention does not move, equip, consume, or complete anything.

Default reference policy:
- 0–24: spontaneous thoughts/preferences; no automatic physical routines. The player can explicitly delegate an agreed, physically eligible action.
- 25–49: limited minor behavior (currently the reading lamp) when cooperation/context permit. Significant behavior remains a suggestion unless explicitly delegated.
- 50–74: shared/contested intentions and negotiation; minor behavior may execute, significant activity needs scoped delegation.
- 75–99: permitted ordinary routines may execute independently; recently refused requests can lead to another eligible activity.
- 100: maximum ordinary authority within the implemented routine set; private communication, negotiation, agreed pauses, and existing resistance remain available.
- Mastery preserves existing player control unless the player explicitly delegates.
- Execution still requires the supported physical form, apartment access, valid room/time, capabilities/resources and no conflicting commitment. Low-influence consciousness is not suppressed by those physical restrictions.

No new contest dice, DCs, automatic resistance wins, forced cursed-equipment changes, or off-map movement were added. Strong and maximum authority have the same permitted action set in this small foundation; future profile data may distinguish additional activities.

Default pause/delegation expiry is 30 game minutes. These are reference policy settings for review, not a universal rule for every future form.

## Trust, stress and interpretation

Cooperation is a response score, not a replacement for any saved stat. Defaults use trust minus stress, a polite bonus, hostile penalty, recent-repeat penalty, and an explanation bonus. Thresholds/templates are profile configuration. Conversations do not farm trust, alter influence, or reduce stress merely by being repeated.

Interpretation supports activity synonyms, questions versus requests, compound-request clarification, explicit negation, polite suggestion idioms, pending-request explanations, and unbound confirmations. Negated requests cannot authorize an action. Withdrawal revokes prior player delegation so a stale low-influence action cannot execute.

Agreement is not consent to execute. The journal exposes Authorize agreed action. Authorization rechecks the response and current prerequisites; the scheduler rechecks again before physical effects. A private conversation consumes its existing short game-time cost without itself executing or deleting an existing physical commitment.

The provider hook accepts only validated semantic proposals with permitted intents/action IDs and the correct actor. Raw negation takes precedence. Invalid/throwing/async providers yield safe fallback or clarification; callbacks are never serialized into saves. AI output is not code and cannot name arbitrary state effects.

The live parser/physical adapter is Erin's reference integration. Generic profile response selection and the core engine are reusable; future actors still need their own supported vocabulary, context and physical adapters. No external AI has been connected, and async model integration remains future work.

## Saves and baseline preservation

Keys remain epicenter_foundation_v060 and the existing prototype fallbacks.

Additive namespaces:
- s.autonomy867: persistent actor needs, intentions, commitments, consent/pause markers, events, memory.
- s.dialogue867: bounded recent request context, pending assessment and latest outcome.
- s.sleep867: explicit bed cycle timing and bounded history.

No original appearance descriptions, inventory ownership, equipped item identities, trust, influence, attributes, rewards, or transformation history are reset. Delegation/request state survives real reload; a completed physical action is not replayed. A fresh load causes neither offline progression nor a fulfilled request.

The retained v0.8.66 source prefix remains byte-identical except for the candidate build value; all foundation changes are in the appended candidate implementation. No staging or repository history change occurred.

## Autonomy-completion verification before footwear follow-up

Disposable headless Chrome over loopback HTTP. Main suites use 390x844; supplemental cases use 360x640 with focus and overflow checks. These are automated browser checks, not owner manual acceptance or physical Android tests.

| Suite | Result |
| --- | --- |
| Dialogue, influence bands, authority, response modifiers, negation/withdrawal, AI seam | 60/60 passed |
| Dialogue agreements/delegation and original identity through actual reloads | 9/9 passed |
| Core autonomy, clock paths, priorities/weights, safety/resources, cooldowns, verified failure, nonhuman sample, bounded memory/history | 61/61 passed |
| Appearance and all jewelry/belt lifecycles, body-region equipment fields, reload/layout | 249/249 passed |
| Existing v0.8.65 save fixtures | 52/52 passed |
| Existing v0.8.66 save fixtures | 52/52 passed |
| Autonomy pending/completed/sleep persistence | 12/12 passed |
| Full eight-hour bed sleep and resume | 17/17 passed |
| Onboarding, discovery/travel, normal non-DEV heels pickup, fallback saves | 14/14 passed |
| Supplemental pending scenarios | 37/38 passed; footwear limitation below |
| Same footwear diagnostic against untouched v0.8.66 | Also equips shoes-4 and shoes-5 simultaneously |

Do not sum overlapping assertion suites as unique acceptance cases.

Supplemental successful checks include known destinations behind undiscovered intermediate routes, restored travel decisions, original-form residence refusal and transformed entry, actual quest UI submission and exactly-once rewards, Add Missing Original Details, physical garment hamper/machine/storage lifecycle, cursed sleep with preserved original archives, DEV ownership/duplicate prevention, disabled-dependency guards, and small-screen input focus.

The interrupted supplemental harness was blocked by DEV confirmation handling, not counted as a game pass. It was rerun with confirmation explicitly accepted in the disposable test context. Initial supplemental failures also exposed invalid test fixtures (depositing away from the hamper, entering a private bed with an incomplete form without guest permission, and mixing ordinary exploration rewards with quest rewards); these fixtures were corrected. No game fix was made to hide those fixture errors.

No uncaught game errors or horizontal overflow were observed in the exercised successful scenarios. Inline JavaScript compilation is part of the browser regression suite. Static checks confirmed save-key definitions and unchanged published baseline hashes.

## Known failure and unresolved limits

1. **Historical pre-footwear diagnostic; now repaired in the candidate (see footwear report):** itemAction850's footwear override assigns location=equipped without unequipping another ordinary shoe pair. shoes-4 and shoes-5 can both remain equipped. Reproduced in published v0.8.66 and the candidate. This was outside the original autonomy scope; the subsequent owner-authorized footwear repair resolves it.
2. Workplace and commute, automatic meals, multi-step grooming, cursed-footwear automation, external-world autonomous travel and independent Erin-T are disabled/unimplemented dependencies. Existing manual controls remain; there is no fake attendance or consumption.
3. No full natural-language understanding, live AI service, async model conversation, wall-clock/offline simulation, physiology overhaul, universal sleep input lock, or multiplayer actor system.
4. The 25/50/75 authority policy, 30-minute delegation/pause, cooperation coefficients, and coarse fatigue rates need owner review. Shared-band significant actions deliberately require negotiated delegation rather than invented opposed outcomes.
5. Physical Android Chrome, its software keyboard/touch behavior, real-save backups beyond the tested fixtures, and owner manual acceptance remain pending. Desktop emulation/focus checks cannot close them.
6. Full texts of the two referenced addendums were not available in the session; requirements beyond the supplied content remain unverified.
7. v0.8.67 is not published; live-site deployment is neither requested nor claimed.

## Focused owner acceptance

- At 0, 25, 50, 75 and 100 influence, pass time and inspect private intentions separately from physical actions.
- Ask a question, negate an activity, request two activities, and offer an explanation after negotiation. Confirm no request itself moves/equips/consumes.
- Compare high-trust/low-stress and low-trust/high-stress responses to the same request.
- At low influence, agree to reading, authorize it, reload mid-action, then advance the remainder. Check one physical chapter and preserved original identity.
- Withdraw the delegation before completion and verify no stale execution.
- At strong influence, refuse/negotiation can leave Erin's own eligible routine intact; attempt the existing resistance only through its original rules.
- Agree to a pause; verify thoughts continue without physical routines until expiry.
- Run bed sleep, footwear storage, residence and discovery checks on a disposable physical Android save.
- Review the known footwear defect separately before deciding release scope.

## Candidate SHA-256

EFAD3BFB70ACFE629C4E53AF71129C8867D4B8D4807717D61ECDE6D910BE7B0B

Current footwear follow-up: [cursed footwear repair, root cause and latest focused verification](EPI-CENTER-v0.8.67-CURSED-FOOTWEAR-REPAIR.md). The older double-equip failure above describes the pre-repair checkpoint. The cursed item remains in Equipment under Feet; its unique ID, transformation handlers and save ownership are preserved.
