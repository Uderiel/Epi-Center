## Phase 0 acceptance checkpoint — 2026-10-28
- **v1.0.34 USER ACCEPTED 5/5 PASS:** title lists existing saves; Continue enters Hub; new character confirmation routes to v1.0.34 Hub; reload persists; other slot remains unchanged. Prior acceptance-pending statement below is superseded. Phase 0 gate remains open for immutable builds, development-save isolation, automated release checks and rollback.

## Current execution checkpoint — Phase 0 started
- **Active issue:** https://github.com/Uderiel/Epi-Center/issues/1 . **Last accepted:** v1.0.33. **Current candidate:** v1.0.34, stale character-creation navigation fixed; user acceptance pending. Phase 0 not complete.
- **Detour policy:** any user-requested change must be classified as (A) prerequisite/blocker — address now, (B) worthwhile but not blocking — create follow-up issue with return marker, or (C) unnecessary — explain and record only if the user wants it. After detour return to the first unblocked phase gate. Maintain the roadmap, current status, handoff, changelog and README at each meaningful change.

# Epi-Center — Authoritative Dependency-Ordered Development Master Plan
**Status:** living engineering roadmap · **Baseline:** v1.0.33 accepted by user on 2026-10-28 · **Owner of next step:** Phase 0 audit, then Phase 1 state lifecycle.  
**Playable entry:** https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.33  
**Code:** `rebuild/1.0-foundations` is the development branch; `main` serves GitHub Pages. Never assume a branch commit is live.  
**Scope:** Complete the Epi-Center half, then the Overworld half, by independently testable vertical slices. This is the source of truth for *what to build next*. The handoff records *what actually happened*; the changelog records *what changed*.

## A. Verified facts, prototype boundaries, and architectural audit
### Accepted browser tests (do not regress)
- v1.0.31: **9/9 PASS** — universal title and three slots, Central Hub/Path, Dev tab, initial 0 physical needs without a form, independent need/time simulation, combat-resource adjustments, Eve locked neutral, reload persistence, cross-slot isolation.
- v1.0.32: **5/5 PASS** — activity capitalization, Form relationship auto-target and Dev target selector, player-owned physical needs, expandable Stats resource overlay display, character name/last-played in title screen.
- v1.0.33: **PASS** — Dev relationship −10/+10 controls, user verified after successful Pages Action deployment.
- These are *interface/manual simulation acceptance*, **not proof** of an integrated combat engine, canonical needs economy, form takeover, or full quests.

### Verified source-level facts / gaps
- Title screen, creation and Hub are separate static HTML entrypoints; three saves use `epicenter_v1_slot_<n>` in browser localStorage. These are device/browser-origin local saves, **not cloud/multiplayer**.
- Hub is a very large monolithic HTML/JS file. Combat prototypes `rebuild/combat/engine.js` and `rebuild/combat/outcomes.js` exist but are **not integrated into live Play**. Prototype outcome model uses a different shape from the live four-resource model; reconcile before integration.
- Character creation still displays **v1.0.28** and its completion link hardcodes `?v=1.0.28`; fix at the next navigation-hardening milestone, not by only changing a title label.
- Hub's Dev resource changes currently live as `devVitals.resources` overrides. Form resource overlay reads available form fields with fallbacks; it does not yet prove a canonical resource switch on equip, encase, release or transformation.
- Physical-need rates (+1 hunger/60 minutes, +1 bladder/30, +1 fatigue/90) are **provisional**, not recovered canonical values. No offline accumulation is assumed.
- `?v=...` is a cache-busting query string, **not a snapshot selector**. All older README links pointing to the same mutable HTML path may show the latest code. For immutable releases create versioned files/directories or GitHub tags and make the distinction explicit.
- README has historically stale acceptance statuses; correct without rewriting historical evidence. Prior handoff contains superseded failure notes. Maintain dated supersession, not silent deletion.
- Player/form attribute and resource models, current/original appearance, quest/location identifiers and NPC ownership need a documented schema. Ensure Focus/Willpower naming is one canonical internal key with a readable display alias.
- No claim of automatic browser/Pages validation unless it was actually run.

### Non-negotiable architecture rules
1. **One authoritative save schema**, versioned, validated and migrated; player base, persistent needs, current body/form, form inventory, NPC relationships, location discovery, quests, encounters, world time and event history must have explicit owners. Avoid UI-only shadow state.
2. **One pure rules layer** for deterministic calculations (dice RNG injection, modifiers, needs, travel, resource maxima, relationship deltas, transformation, mastery, combat). UI calls rules; UI never independently invents game logic.
3. **One event/action dispatcher**: command -> validate prerequisites -> calculate deterministic outcome -> update state atomically -> emit live-feed/journal event -> persist. Failed actions must not partially mutate state.
4. **Stable IDs** for locations, routes, NPCs, items, forms, encounters and quests. Display names may change; IDs and migrations remain stable.
5. **Separation of base vs active overlays**: original appearance and player base resources never overwritten by a form. Current appearance, effective attributes and combat pool resolve from active body/form/encasement state, with an explicit release/reversion path. Full transformation (Erin 23/23) is distinct from temporary influence or encounter-only progress.
6. **Dev QA uses the same state/rules APIs** as gameplay, with explicitly marked overrides; Dev controls must not be the only way gameplay works.
7. **Every feature ships with deterministic tests + manual Android/desktop acceptance + regression + save migration + publication proof**. Save slots must remain independent. No hidden destructive resets.
8. **No broad speculative content expansion before one full vertical slice is accepted.** Add content one location, NPC/form, and interaction chain at a time after the shared systems are stable.

## B. Critical path: phases, gates, deliverables, acceptance
Each phase lists prerequisite, implementation order, concrete test, and release gate. A gate is blocked until all its tests pass; failed work stays in the current phase.

### Phase 0 — Repository, release, and evidence hygiene [NEXT, prerequisite to new mechanics]
**Depends:** accepted v1.0.33.  
**Build:** inventory actual entrypoints, scripts, legacy/rebuild overlap, assets and docs; record which HTML GitHub Pages serves and which branch; add a single `CURRENT-STATUS.md`; adopt semver-like build IDs and immutable release snapshots/tags; fix character-creation route and title/version labels together; establish a single source for current build version; preserve old links and distinguish historical snapshot vs mutable preview. Separate production `main` from candidate branch with isolated save namespace/origin if possible (same-origin query alone does NOT isolate localStorage). Add smoke checks for script syntax, navigation, version marker, missing IDs, all three slot routes, save preservation, Pages workflow result.  
**Test:** new slot -> creation -> Hub; all three Continue routes; reload; prior saves intact; new build marker visible; verify actual deployed URL/commit.  
**Gate:** reproducible release procedure with verified URL, commit, Action deployment, rollback and clean handoff. No change to gameplay rules.

### Phase 1 — Canonical save/state, resources, physical needs, time [IMMEDIATE GAMEPLAY NEXT]
**Depends:** Phase 0.  
**Build in order:** (1) inventory all resource and need fields, existing saves and migrations; (2) canonical player baseline Health/Stamina/Resolve/Arousal and maxima; (3) active-form/encasement overlay resolver without overwriting base; (4) player-owned Hunger/Bladder/Fatigue and bounded 0–100 behavior; (5) canonical time units, deterministic accrual and provisional-rate approval; (6) damage/expenditure/heal/rest/recovery rules and needs thresholds; (7) Dev buttons routed through same actions; (8) UI meters in Form/Stats/Play; (9) save/reload/migration tests. Do not silently create a real-world/offline ticking clock. Decide whether unmet needs impair checks, and define thresholds before wiring them. Mechanical-form exceptions are **future design decisions**, not assumptions.  
**Test:** fresh 0 needs; independently set each need; advance 0/30/60/90 minutes and compare exact increments; resource costs and healing clamp correctly; active form resource pool overlays without altering base; remove form restores base; reload during overlay; time advance while in form; all three slots isolated; older saves migrate; no double accrual on refresh.  
**Gate:** resources and needs are real canonical gameplay state, not merely Dev display overrides.

### Phase 2 — Character, attribute and body/form contracts
**Depends:** Phase 1.  
**Build:** reconcile 10 attributes (Endurance, Fitness, Intuition, Reflexes, Willpower/Focus display alias, Reasoning, Stability, Presence, Insight, Influence), 0–10 resolution, creation 40-point budget/cap 7, earned points/cap 10; `1d20 + attribute`, natural 1/20, Easy 12–14/Moderate 15–17/Hard 18–20/Very Hard 21–23; attribute ownership and specialization recalculation; original/current field-specific appearance; effective body state; equipped/encased vs mastered/fully transformed distinctions; one reusable form schema (rarity, stats, skills, takeover, relationship, mastery, stage count, gear source).  
**Test:** new creation + old-save migration; 40-point bounds; live specialization in creation and Stats; same attribute results in rules and UI; stage 0 vs stage 23 effective attributes; base appearance/resources recover correctly; no mutation of original appearance.  
**Gate:** one authoritative form and character contract usable by inventory, NPCs and combat.

### Phase 3 — Core action, dice, targeting, feed and world-time pipeline
**Depends:** Phases 1–2.  
**Build:** action types, validation, target IDs, explicit button actions and constrained natural-language intent parser; RNG injection, roll logs, time/action costs, failure consequences, conditions, idempotency, persistence and live-feed narration. Define which actions are free, which advance time, and what a turn means. Keep free-roam vs encounter state separate.  
**Test:** same seed yields same result; invalid/unknown targets don't mutate; natural 1/20 overrides; failed check emits feedback; no duplicate rewards or actions on reload; time advances exactly once.  
**Gate:** a single simple world action is end-to-end reproducible and persisted.

### Phase 4 — Minimal traversable world graph and exploration
**Depends:** Phase 3.  
**Build:** stable location registry and cardinal route graph; Central Hub/Spire center, Cherished Touch north/northeast, Residential Walkway toward Applewood Apartments northeast, safe east-road chain, Neko Cafe west, Burke's Sweets/Latex Dungeon south of east route, and Underworld separate from surface. Treat draft placements as provisional until user confirms. Survey, fog-of-war, discovery, travel timing, restrictions, returns to Play and event narration; no teleport through undiscovered intermediates. Start with **Hub -> Cherished Touch -> Hub** as the smallest complete traversal.  
**Test:** directions unambiguous, discovered routes clickable, unknown routes blocked, route discovery persists, save/reload during travel, no unreachable nodes, no accidental Underworld surface exit, Android Path/Map consistent.  
**Gate:** a small stable graph supports NPC encounters and quest objective locations.

### Phase 5 — NPC/entity framework and first social slice
**Depends:** Phases 2–4.  
**Build:** NPC schema (ID, location/schedule, appearance, dialogue state, relationships −100..100, factions, inventory, available actions, quest hooks, combatant/form references). Integrate Eve first at Hub: cheerful corporate custodian, amnesia normalization, no awareness of coercion/VR, blue/red glitches on contradictions/Countess, neutral relationship locked 0. Then Charity at Cherished Touch with discoverable interaction; ensure target selector reflects actual discovered entities. Define routine/movement system before adding roaming Elizabeth.  
**Test:** Eve present after creation and reload; no duplicate introductions; dialogue options and locked neutrality; Charity appears only where/when valid; target resolution by stable ID; NPC state persists and does not leak between saves.  
**Gate:** one real location and NPC interaction loop; Dev relationship controls become a test harness for canonical relationships.

### Phase 6 — Inventory, equipment, cursed source and first form fixture
**Depends:** Phases 2,3,5.  
**Build:** items, unique IDs, inventory vs closet, slots, acquisition/removal, duplicate prevention, cursed items and first-wear takeover checks; form library and equipped/encased states; temporary form vs persistent mastery; source item restrictions. Start with **Kibbles as a controlled test form** (retrieve canonical details from prior v0.8 source before final content). Use Erin's red heels as a later multi-stage integration fixture, not the first form implementation.  
**Test:** discover/pickup/equip/unequip/reload; no duplicate item; source restrictions; failed/resisted takeover; original appearance and resource overlay; form relationship auto-target; persistence across travel and reload.  
**Gate:** one real form is obtainable and its state changes are coherent without an encounter.

### Phase 7 — Combat engine foundation: physical, mental, arousal, transformation
**Depends:** Phases 1–3 and 5–6.  
**Build:** reconcile `rebuild/combat/engine.js` and `outcomes.js` into canonical model; initiative `1d20+Reflexes`; rounds, active player action + passive reactions, target selection, action costs, defense saves, attack rolls, damage/pressure, enemy AI, conditions, end conditions, retreat, capture and recovery. Four victory routes: Health 0, Resolve incapacitation/turn, Arousal threshold, encounter transformation 100%. Maintain separate free-roam 23-stage tracker. Define influence control (failed Resolve/Arousal save lets foe control offensive action for turn; successful resist reduces influence); conditions captured/encased/fatigued/confused/charmed/staggered; multi-foe and passive threat resolution. No combat UI until these pure rules pass tests.  
**Test:** deterministic seeded fights: generalist vs physical/mental/arousal specialists; cross-specialization vulnerabilities, hybrids, low-attribute weak points, two enemies, control/resist, natural 1/20, action economy, stamina exhaustion, all four win conditions, retreat/capture, simultaneous outcomes, no softlocks; reload mid-encounter.  
**Gate:** engine is deterministic and balanced enough to connect to interface; no specialization dominates every scenario.

### Phase 8 — Combat UI and first integrated encounter vertical slice
**Depends:** Phase 7.  
**Build:** Play-based encounter panel integrated into existing live feed (not an unwanted permanent Encounter tab); initiative order, round/action/reaction controls, readable logs, target, resources and conditions, transformation progress, resist, flee, save/resume. Connect **Kibbles** to an actual reachable exploration event. Proposed fixture route: Hub -> East Main Road A -> East Main Road B -> Narrow Alley A -> Narrow Alley B -> investigate rattling crate; verify legacy map and user's confirmation before publishing this as canon.  
**Test:** full start-to-end fight on phone and PC; physical/mental/arousal/transform routes; form acquisition and release; no free-roam/encounter bar confusion; refresh and slot isolation; no double outcome/reward.  
**Gate:** one complete repeatable encounter works without Dev controls.

### Phase 9 — Quest, reward, journal and consequence engine
**Depends:** Phases 3–8 (simple noncombat quest may be tested as soon as Phases 3–5 are done).  
**Build:** stable quest schema (giver, location, prerequisites, objectives, progress triggers, branches, failure, rewards, history, timestamp); accept/decline, report-back, one-time rewards, journal completed records, faction consequences. Implement **First Steps** with Eve and Cherished Touch first as a safe quest immediately after Phases 3–5; do not wait for combat. Then a simple fetch using a real existing item/location. Add dangerous multi-stage cylinder quests only after encounter and faction systems are integrated.  
**Test:** cannot progress quest before discovery or accept; travel + NPC talk + report back; one-time reward; reload at every stage; failure branch; journal timestamp; duplicate trigger guard; consequence after quest failure.  
**Gate:** a quest can be finished entirely through actual world actions and real entities.

### Phase 10 — Form progression, autonomy and social systems
**Depends:** Phases 5–9.  
**Build:** mastery XP/tier by rarity, first-wear takeover and later safe resisted form, relationship trust/stress baseline 0 and −100..100, preferred routine/current/desired activity, negotiation/refusal, independent form influence, daily schedules, needs interactions, Erin's 23 stages and heels source, underwear temporary form, pet/latex/slime control mechanics. Implement **Erin** after Kibbles mechanics are accepted. Do not overwrite player attributes/resources before the established full-transformation condition.  
**Test:** each of Erin's 23 stage boundaries, first-wear takeover pass/fail, mastery tiers and modifiers, relationship +/− changes and Eve exception, form autonomy by relationship band, routine scheduling with world time, encasement/release, load at intermediate stage, no duplicate curse.  
**Gate:** at least one multi-stage form and one NPC schedule function end-to-end.

### Phase 11 — Content expansion by complete location/entity/form/quest slice
**Depends:** Phases 4–10.  
**Build in repeatable slices:** (a) confirm graph/location description; (b) add NPC(s) and schedules; (c) add objects/items/forms; (d) add interactions/checks; (e) add encounter(s) if needed; (f) add quest hooks/objectives/rewards; (g) integrate factions/consequences; (h) test travel/return/persistence/regressions; (i) publish and accept **before next location**. Proposed expansion order after Hub/Cherished Touch/Kibbles: Residential Walkway -> Applewood Apartments/Erin; western market/Neko Cafe; eastern residence/Elizabeth and Burke's Sweets; Latex Dungeon; nightclub/casino/docks; thieves guild/Infinitum warehouse; deeper Underworld; cylinder sites. Placeholders must not be mistaken for finished content.  
**Test:** each slice has a location graph, entity IDs, interactions, one meaningful reward or consequence, no dead ends, no inaccessible quest objectives, no regressions in prior slices.  
**Gate:** content is playable rather than merely visible on map.

### Phase 12 — Factions, escalation, economy and cylinder campaign
**Depends:** Phases 7–11.  
**Build:** factions (Resistance, Countess agents, thieves guild), reputation/hostility, escalation after failed missions, barriers/relocated cylinders, economy/gold/loot/crafting, multi-encounter mission prerequisites, Hub Cylinders and Spire unlock. Define fail-forward recovery so quests cannot permanently softlock without intentional consequences.  
**Test:** mission success/failure alters subsequent world state, defenses escalate, cylinder locations can move without breaking pathfinding, rewards exactly once, factions react, Spire only unlocks with correct requirements.  
**Gate:** Epi-Center campaign has coherent progression and ending.

### Phase 13 — Overworld / Real World second half
**Depends:** Phase 12 and canonical save/transition rules.  
**Build:** logout from unlocked Spire -> Squirrel City / New Glow/NU facility / Collector; real-world teams, power economy from Epi-Center pod activity, outages, gear gathering, neural backup regeneration costs, equipment retrieval, corrupted player XP/mutation/guard/convert, separate real-world map and mission loop. Preserve Epi-Center character and form history across transition.  
**Test:** transition requirements, resource and power accounting, outage/recovery, team encounters, death/regeneration with equipment persistence, corrupted-state choices, return/re-entry constraints.  
**Gate:** second half is independently playable and interconnected with Epi-Center.

### Phase 14 — Production hardening, accessibility, content and release
**Depends:** vertical slices and campaign.  
**Build:** balance sweeps, save migration/backups/export-import, performance and modularization, automated regression, accessibility/keyboard/Android, touch targets, visual consistency, assets, error handling, privacy, multiplayer/network architecture **only if intentionally approved** (current game is local-save single player), security and content controls, documentation and release packaging.  
**Test:** long-run simulated saves, all quest branches, all victory modes, clean install, old-save migration, offline/refresh handling, stress and accessibility, rollback.  
**Gate:** release candidate accepted against end-to-end completion checklist.

## C. The exact next tests after v1.0.33
**Do not begin by adding more Dev widgets.** Build Phase 0 proof and Phase 1 canonical-state audit, then:
1. Start a **fresh** save with no form: verify player base max/current resources and Hunger/Bladder/Fatigue 0; compare Form/Stats/Dev numbers.
2. Modify needs individually; advance 0, 30, 60, 90 minutes; assert exact provisional increments and clamping. Confirm time does not advance on reload or navigation.
3. Apply damage, stamina expenditure, Resolve pressure and arousal gain; verify the same canonical values in Stats, Play and save; apply recovery and check max bounds.
4. Equip a controlled test form fixture; verify base vs active overlay and that needs remain player-owned; release and confirm base restores; refresh mid-overlay.
5. Test migration of pre-v1.0.29 save; create second/third slot; ensure no cross-slot mutation; confirm Eve locked 0, editable relationships ±10 and boundaries.
6. Only then wire time/needs to a **real world action** (survey/travel/rest) and verify action cost/time and recovery, rather than Dev-only simulation.
7. After that, build Hub/Cherished Touch/Eve/Charity as a social and safe-quest slice. Build Kibbles form and encounter after entity and action foundations, not before.

## D. Build → test → publish → accept protocol (mandatory for every slice)
**Before code:** identify phase and prerequisite gates; read master plan, current status, handoff, changelog and relevant source; define stable IDs/schema changes; write expected outcomes and negative cases; create an issue or short scoped work item.  
**Implement:** smallest vertical slice, shared state/rules first, UI second; migration and rollback; deterministic tests; do not modify legacy v0.8 files or unrelated systems.  
**Local checks:** JS syntax, unit/state/seeded simulations, integration and three-slot migration; inspect actual browser route; record exact executed tests (never claim unrun checks).  
**Publish:** commit on rebuild branch, verify diff; promote approved files to `main`; verify GitHub Actions Pages deployment for the specific commit; open title-screen universal URL and check actual Hub build marker and every slot route. **A successful Action alone is not evidence that the user's device loaded the new page.**  
**Acceptance:** give numbered reproducible steps with expected results, stable link, commit/branch, Pass/Fail/Skip. Do not mark PASS before user/browser evidence. Failed tests remain open and block dependent phases.  
**Document:** update master plan gate state, `docs/CURRENT-STATUS.md`, `CHANGELOG.md`, handoff, README playable index and test evidence. Preserve previous releases. Include known limitations, pending decisions, next exact action.  
**Handoff to new chat:** request reading master plan + current status first; then handoff/changelog and relevant code. Never substitute memory for source evidence.

## E. Decision register — resolve when dependency is reached
- **Now:** canonical source-of-truth for resources and Dev overrides; need accrual rates, thresholds and recovery; whether forms overlay resources on equip vs only encasement; maxima and resource initialization; action time costs.
- **Before forms:** how a form's resource pool is initialized/restored, ownership of relationship and stage, how temporary takeover and full transformation differ, rarity/mastery scaling.
- **Before combat:** exact offensive/defensive attribute mapping, action costs, initiative ties, condition durations, control limits, defeat/victory recovery, encounter transformation vs free-roam tracker, balance acceptance targets.
- **Before quests:** canonical location/NPC/item IDs, rewards, failure/faction rules, repeatability.
- **Before world expansion:** final cardinal map, routes, schedules, lore consistency, content rating and consent boundaries.
- **Before Overworld:** power, logout/re-entry, team and regeneration rules.
Record each approved decision in the handoff and rules docs with date and affected tests.

## F. New-chat continuity contract
Start the new chat with:  
> Continue Epi-Center from the repository's `docs/DEVELOPMENT-MASTER-PLAN.md` and `docs/CURRENT-STATUS.md`. Read them first, then `docs/BUILD-PROGRESS-AND-TEST-HANDOFF.md`, `CHANGELOG.md`, README build index and relevant source. The last user-accepted build is v1.0.33 (v1.0.31 9/9 PASS, v1.0.32 5/5 PASS, v1.0.33 relationship ±10 PASS). Follow the next unblocked phase and its test gate, not a speculative feature. Preserve all saves, publish on the actual Pages source, verify navigation for all three slots, update documentation, and provide a playable link plus acceptance checklist. Do not claim tests or deployments that weren't verified.

**Plan maintenance rule:** When a dependency changes, revise the affected downstream phases, record why and preserve the acceptance baseline. Phase numbers are logical dependency gates, **not promised calendar dates**.
