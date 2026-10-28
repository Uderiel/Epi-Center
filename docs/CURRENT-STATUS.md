## NEXT WORK — evidence reconciliation (2026-10-28)
- Accepted: v1.0.31 9/9 resource/needs simulation, time, persistence and slot isolation; v1.0.32 5/5 player-owned needs and form UI overlays; v1.0.33 relationship ±10; v1.0.34 5/5 entry/creation/persistence. **Do not re-test these as if unbuilt.**
- Source inspection confirms Dev QA stores needs/resources under `save.devVitals`; Dev resource changes are not established as canonical gameplay actions. This is an integration gap, NOT an accepted-test failure. Before any new implementation inspect existing game action dispatcher, save shape and form effective-state logic. Build only the missing bridge to a real action with exact resource/time effect, then move to Phase 2/3. No extra entry paths or test harnesses.
- This checkpoint supersedes stale Phase 0 and v1.0.35 pending instructions lower in this file. Last accepted playable build remains v1.0.34.

## CORRECTION — 2026-10-28: single entry restored
- User rejected unapproved v1.0.35 development-save mode. Its code has been reverted on BOTH branches (title, creation, Hub). **Accepted baseline remains v1.0.34, 5/5 PASS**; normal storage keys unchanged. No additional login, save namespace or dev URL is part of the intended design. Previous v1.0.35 candidate sections below are historical and SUPERSEDED, not instructions to test.
- Return to main plan: Phase 1 canonical state/resources/needs. Do not gate gameplay on speculative release tooling. Any optional engineering work requires explicit relevance and approval.

## Phase 0 v1.0.35 candidate — isolated development saves
- Last user-accepted v1.0.34 (5/5 PASS). New v1.0.35 source committed to main and rebuild: optional `dev=1` title, creation, Hub and logout route; development keys `epicenter_v1_dev_slot_1..3` instead of normal `epicenter_v1_slot_1..3`. No migration, copy, deletion or overwrite of normal saves. Clear development labels on title and Hub. **Browser acceptance pending**.
- Next test: inspect normal slots, enter `?v=1.0.35&dev=1` and verify three empty independent dev slots, create dev character, reload and logout, verify dev persists; return to normal URL and confirm original characters unchanged. Note dev mode is same origin/code, isolated storage only.
- Phase 0 still open: immutable snapshots, automated release tests, rollback proof.

## v1.0.34 acceptance update — 2026-10-28
- **Last user-accepted build is now v1.0.34: 5/5 PASS.** User verified title lists existing saves, Continue enters Hub, fresh character creation routes to Hub v=1.0.34, reload retains character, and another slot remains unchanged. Supersedes earlier v1.0.34 acceptance-pending notes below.
- Phase 0 remains IN PROGRESS. Next: immutable release artifacts/snapshots, development save isolation, reproducible automated route checks and rollback proof. No new gameplay release in this documentation update.

## Active Phase 0 checkpoint — v1.0.34 candidate
- v1.0.33 remains last user-accepted build. v1.0.34 source committed on both branches: fixed character-creation header and completion route from v1.0.28 to v1.0.34, aligned title and Hub version/entry routes. No save key changes. Pages deployment and browser acceptance PENDING.
- Phase 0 issue: https://github.com/Uderiel/Epi-Center/issues/1 . Remaining Phase 0 work: immutable releases, save isolation, release/route tests, rollback proof.
- Branching policy: log user-requested detours as active blocking corrections if prerequisite; otherwise create follow-up issue with return-to-main-path note, then resume first unblocked gate.
- Next user test after Pages Action: open universal v1.0.34, continue existing slot, then in an EMPTY slot complete character creation and confirm Hub URL uses v=1.0.34; reload and verify other slots unchanged.

# Epi-Center — Current Status (read first in a new chat)
**Updated:** 2026-10-28. **Accepted live baseline:** v1.0.33. **Next work:** Master Plan Phase 0, then Phase 1; do not jump to combat UI or new quests.  
**Playable:** https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.33  
**Branches:** `rebuild/1.0-foundations` development; `main` GitHub Pages. **Current acceptance:** v1.0.31 9/9 PASS; v1.0.32 5/5 PASS; v1.0.33 relationship ±10 PASS. User verified Actions published before testing v1.0.33.  
**Authoritative next-step document:** [DEVELOPMENT-MASTER-PLAN.md](DEVELOPMENT-MASTER-PLAN.md). Follow its phase gates. Handoff is a historical record, not a replacement for this status.
## Working and accepted
Three local save slots with name/last-played; character creation and Central Hub entry; Path navigation; Dev QA for simulated time, needs, resources, relationship selection, ±10 buttons with Eve neutral; Form physical-needs bars and activity labels; equipped-form relationship display; expandable Stats combat resource panel; reload persistence and slot isolation.
## Not yet accepted as gameplay
Dev resource values are overrides, not integrated combat resources; needs accrual rates provisional; healing/recovery and real action time costs not established; form/encasement overlay transitions untested; combat engine/outcome prototypes not wired to Play; canonical quests and encounter vertical slices incomplete; multiplayer not implemented.
## Confirmed technical risks
Hub monolithic HTML; source `rebuild/character-creation/index.html` still hardcodes old version link on completion; historical `?v=` links are not immutable snapshots; README acceptance statuses stale until corrected; no separate confirmed dev-save origin; rules/state schemas need reconciliation.
## Next exact scoped work
Phase 0: inventory current source/Pages/links; repair all entry routes and labels; establish immutable release strategy and test harness; verify no save loss. Then Phase 1: consolidate canonical player resources, needs and time, eliminate Dev-only overrides, test full state lifecycle and form overlay without requiring a finished encounter. Do not add locations/quests/combat UI until gates pass.
## Release checklist
Update master plan gate, this file, CHANGELOG, handoff and README; commit branch and main; verify Actions deployment and live route; give user version, link, commit, numbered expected-result checks; record user PASS/FAIL/UNTESTED verbatim.
## New-chat command
"Continue Epi-Center. Read docs/DEVELOPMENT-MASTER-PLAN.md and docs/CURRENT-STATUS.md first, then handoff, changelog, README and code. Start with next unblocked dependency gate, protect saves and accepted v1.0.33 behavior, verify Pages/slot routing, and update all documents with real test evidence."

## Standing conversation and handoff protocol (confirmed 2026-10-28)
- Every substantive development reply must identify the accepted baseline, current dependency phase, exact change or analysis, verification status, known gaps, and next unblocked action. Always include the current playable link.
- Every repository change must update the Master Plan gate, Current Status, Changelog, historical Handoff, and README build index as applicable; avoid gratuitous commits for conversational acknowledgments. If an update is not performed, explicitly state that fact.
- Maintain four separate evidence statuses: implemented, committed/published, automated checks actually run, and user browser acceptance. Never infer a PASS from a source commit or a green Pages Action.
- Before conversation limits, ensure pending commits and status/handoff are recorded. New chats must read the source-of-truth documents from GitHub, inspect actual code and branch, then continue the first unblocked gate rather than guessing from chat memory.
- Preferred response shape: **Baseline → Current phase/dependency → Work performed → Verification (PASS/FAIL/UNTESTED) → Exact playable URL and commit → Documentation changes → Next step**. For planning-only answers, state no gameplay release.
