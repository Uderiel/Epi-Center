# Epi-Center 1.0 — build progress, decisions and acceptance handoff

Updated: 2026-10-28. This is a living development handoff. Keep separate from the combat guide and do not claim an unverified deployment.

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
