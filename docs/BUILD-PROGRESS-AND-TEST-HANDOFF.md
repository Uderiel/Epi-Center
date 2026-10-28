## 2026-10-28 — Master-plan handoff / v1.0.33 accepted
- User confirmed v1.0.33 relationship ±10 buttons PASS, after checking GitHub Actions deployment. Accepted baseline: v1.0.31 9/9 PASS, v1.0.32 5/5 PASS, v1.0.33 PASS. All older FAIL/UNTESTED annotations about those checks are superseded.
- Established `docs/DEVELOPMENT-MASTER-PLAN.md` as authoritative dependency-ordered Phases 0–14, `docs/CURRENT-STATUS.md` as new-chat first-read checkpoint, and `CHANGELOG.md` as version ledger. README links them in reading order.
- Next: Phase 0 release/state audit and Phase 1 canonical resource/needs lifecycle, then action/world/NPC/form vertical slice. Do not start combat UI or broad quest content before prerequisites. Planning/documentation change only; no new gameplay build claimed.

## v1.0.33 — Dev relationship quick adjustments (2026-10-28)
- Added separate −10 and +10 buttons in Dev → Relationship QA, beside existing absolute Set and Reset controls. Values clamp to −100..+100, persist per save, and Eve remains immutable at 0.
- Universal title-screen destination updated to v1.0.33 for all three save slots (not just visible version label); main hub commit 2411818, main title route commit 2e6f7ed. README indexes on main and rebuild updated. Live acceptance pending.
- Retest: select editable NPC/form, click +10 twice and −10 once (expected +10), check −100/+100 limits and persistence; select Eve, confirm both buttons cannot change 0; enter via title screen in any slot.

## v1.0.32 — USER ACCEPTED (2026-10-28)
- User explicitly confirmed PASS for all five v1.0.32 refinements: (1) Form activity label capitalization; (2) Form relationship selector removed and equipped-form relationship automatic, Dev selector retained; (3) player-persistent Hunger/Bladder/Fatigue; (4) expandable Stats combat resource overlays and removal from Form; (5) save-slot character name and last-played date/time.
- v1.0.31 baseline previously confirmed 9/9 PASS, including save-slot isolation. Both acceptance records are final; do not carry earlier failures forward.
- v1.0.32 universal title-screen routing fix verified by user as part of successful acceptance. Future iterations should retain normal title-screen entry and record versioned preview in README on main and rebuild.
- Deferred design/engineering: canonical historical need-accrual rates (current provisional), mechanical form exemptions, full encounter/encasement resource overlay integration, relationship interactions and recovery economy.

## v1.0.32 routing hotfix and corrected acceptance record (2026-10-28)
- User confirmed ALL NINE prior v1.0.31 acceptance checks PASS (9/9, no failures, no untested). Earlier handoff incorrectly carried a Form FAIL and slot-isolation UNTESTED; those statements are superseded by this record.
- Root cause of missing v1.0.32 refinements: title-screen display was changed to v1.0.32 but its shared destination() function still hardcoded v=1.0.31 for all three save slots. Fixed destination() on main commit 248369b and rebuild commit 969d34b. This was a universal navigation/version bug, not per-slot source code. Existing saves unchanged.
- Retest from universal title link: https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.32 and confirm Hub navigation URL ends in v=1.0.32 for any chosen slot; inspect Form labels, no relationship target picker, expandable Stats resources, save-slot name/time. Browser confirmation still pending.

## v1.0.32 — Form drawer, stats overlays, save labels (2026-10-28)
- User accepted universal v1.0.31 link and reported QA: #1 PASS, #2 PASS, #3 PASS, #4 FAIL (physical needs should initialize at zero without a form), #5 PASS, #6 PASS, #7 PASS, #8 PASS, #9 UNTESTED (save-slot isolation).
- v1.0.32 changes: Form drawer activity label capitalization; no NPC/form relationship target selector in Form; equipped form relationship shown automatically; persistent player-owned physical needs independent of equipped form; removed combat-resource duplication from Form; Stats drawer has expandable resource section with original player and form standard pools; title screen displays character name and last-played timestamp, Hub entry updates it. Both main and rebuild branches updated.
- Known limitation: Form overlay resources currently use available form fields with fallback; full encounter/encasement state and recovery economy not implemented. Historical needs accrual rates still provisional. No mechanical-form special exemptions yet. The player-need initialization failure requires re-verification in a live save; slot isolation still untested.
- Retest universal link https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.32 : verify character name/time, open Form without form and confirm 0/100 needs, activity labels, no target selector, expandable Stats resources, Dev selector retained, reload and cross-slot isolation. Preserve earlier version links in README.

## v1.0.31 — Universal entry routing (2026-10-28)
- User verified the direct Hub link with slot=1 works, including Dev; normal title-screen entry did not. Root cause: title-screen HTML still hardcoded ?v=1.0.28 for New Character/Continue even after newer hub publication.
- Corrected title-screen routes for all 3 save slots to ?slot=<selected>&v=1.0.31; main and rebuild branches updated. Hub display version aligned. Existing local save keys and saves untouched. No slot hardcoded in public entry URL.
- Universal entry: https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.31 ; source commits main title 13ac22b, main hub 727d57b; rebuild title 665ca28, rebuild hub d25138f. README build indexes updated. Live title-to-hub acceptance still pending.
- Retest: open universal link, choose actual saved slot, verify Dev tab and numerical Form meters, then log out and test other slots. No manual ?slot parameter should be necessary.

# Epi-Center 1.0 — build progress, decisions and acceptance handoff

Updated: 2026-10-28. This is a living development handoff. Keep separate from the combat guide and do not claim an unverified deployment.

## v1.0.30 — Acceptance failure repair (2026-10-28)
- User results for v1.0.29: #1 PASS title/slots, #2 PASS hub/path, #3 UNTESTED (Dev not present), #4 FAIL (Form needs displayed Not recorded/no bars), #5–#9 UNTESTED.
- Root cause found: later render() else-chain overwrote Dev content with generic placeholder. Corrected explicit Dev branch in final screen dispatch.
- Form drawer now displays initialized physical-body needs even with no form, plus numerical 0–100 progress meters for hunger, bladder, fatigue and health/stamina/resolve/arousal; Stats drawer resource bars also added. No destructive save migration.
- v1.0.30 hub commit 8aa3e73; title-screen 5e48fa7; README rebuild 2c0a867; main e2a9b38. Browser acceptance pending; historical accrual rates remain provisional.
- Regression checklist: existing slot/title, Hub/Path, visible Dev tab and controls, Form needs all 0/100 with bars, numeric combat resources, time advancement, manual deltas, Eve relationship 0, reload persistence, slot isolation.

## v1.0.29 — Dev QA implementation (2026-10-28)
- Hub source updated to add a Dev tab, persistent save-scoped physical needs (hunger/bladder/fatigue initialized at 0), deterministic manual simulated minutes, resource deltas, and relationship selector. Eve is fixed neutral 0. Form drawer now displays needs and relationship controls; player physical needs persist without an equipped form.
- Simulated time rates currently PROVISIONAL: hunger +1/60 min, bladder +1/30 min, fatigue +1/90 min. Historical canonical rates are not yet recovered. No wall-clock offline accumulation; no in-world bathroom or recovery action assumed.
- Dev resource deltas are stored as overrides in devVitals.resources, not yet wired to the canonical combat engine/action economy. Do not call this integrated combat testing. The relationship target list uses currently discovered NPCs and available forms.
- Source commits: hub 5a34a15, title screen ceea643, README index 1f4c0b9 (main mirror a421471).
- Live Pages deployment and browser/mobile acceptance checks remain UNVERIFIED. Existing v1.0.28 link retained in README; v1.0.29 preview is listed with verification warning.
- QA when live: 1) open title and continue slot; 2) Dev tab visible; 3) Form drawer shows 0 needs without form; 4) set hunger/bladder/fatigue independently; 5) advance 60 minutes and verify accrual; 6) simulate health/stamina/resolve loss and arousal gain; 7) select Eve, verify fixed 0; 8) reload and verify persisted values; 9) test a different slot remains independent; 10) verify older drawers/Path still work. Report Pass/Fail/Skip.

## Status
- Active branch: rebuild/1.0-foundations. The main branch retains older legacy builds; do not merge wholesale.
- Current phase: UI foundations, beginning with Player / original and current appearance. Kibbles encounter is the first planned integrated exploration/combat vertical slice, AFTER the tabs and state foundations work.
- The repository has combat prototypes in rebuild/combat/engine.js and rebuild/combat/outcomes.js, but they are not unified or wired into live Play. Quest balancing is deferred.
- Existing root app.js appears to be older prototype code. index.html fetch on rebuild returned empty content, so no playable v1.0 link has been verified. DO NOT advertise a GitHub source URL as playable.

## Dependency-ordered development
0. Verify a functioning preview deployment and isolated saves; audit current app entrypoint and authoritative shared state before UI edits.
1. Player / Appearance: immutable original appearance, separate current appearance, persistent identity, creation data.
2. Stats: ten attributes, Health/Stamina/Resolve/Arousal, live collapsible specialization.
3. Form: active form, stage changes, mastery and original/current appearance relationship.
4. Inventory / Closet: equipment, curse sources, form storage, restrictions.
5. Play: live feed, natural language intent parsing, targeting, encounter actions and outcomes.
6. Map / Path: unique IDs, cardinal exits, survey/discovery, travel, returns to Play.
7. NPC interactions: Eve first, one NPC at a time, relationship/dialogue state.
8. Quests / Journal: prerequisites, objectives, branching consequences, rewards and history, only after relevant entities exist.
9. Settings visual polish; save/load integrity is a prerequisite from step 0 and checked at every step.

## Planned Kibbles acceptance route
Central Hub -> east: East Main Road ID A -> east: East Main Road ID B -> north: Narrow Alley ID A -> north: Narrow Alley ID B. Search surroundings/location via equivalent natural-language input; discover shaking rattling crate. Support investigation by established attributes, varied approaches, Kibbles combat/control/escape/transform outcomes, form storage, appearance state and save persistence. Retrieve original v0.8.84 source data before treating any fixture as canonical.

## Mandatory handoff for EVERY test build
1. Exact version, branch and commit.
2. VERIFIED playable browser URL for that exact build, with isolated dev saves when appropriate. If deployment not verified, mark blocked and do not issue acceptance testing.
3. Numbered manual test checklist with expected result and Pass/Fail/Skip reporting.
4. Changes, regressions, known issues, automated checks actually executed, and next dependency.
5. Update this file, changelog/current status and chain-of-custody notes for each implementation.

## Immediate blocker and next action
Audit which file is the v1.0 playable entrypoint, establish a verified deployed preview URL and save isolation, then inspect and implement the Player/Appearance tab. No user acceptance test can be claimed until the URL loads the intended v1.0 build. Existing conceptual documentation updates do not equal deployed gameplay code.
