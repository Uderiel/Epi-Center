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
