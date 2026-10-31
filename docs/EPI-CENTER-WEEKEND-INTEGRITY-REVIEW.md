# Epi-Center — Weekend Integrity Review
**Review date:** 2026-10-31 (America/Chicago)  
**Review branch:** `rebuild/1.0-foundations` at `f9513fe89be01fbe97cb0e7107090a80fbc61429` (before this documentation-only commit)  
**Published main:** `ad4008b9e21261b764e20b478b6ecf3d0bb76bcf`, v1.0.42  
**Scope:** Source and repository evidence review; **no Codex execution, new browser run, local Node run, or owner-device acceptance** in this review.

## Baseline and comparison integrity
There is **no prior document specifically named “Weekend Integrity Review”** in the current rebuild branch's docs tree. The closest available historical weekend baseline is `docs/development/v0.8.68/WEEKEND-HANDOFF.md` and `OUTSTANDING-BUGS.md` on `development/v0.8.68`; the controlled-rebuild baseline is `docs/EPI-CENTER-1.0-REBUILD-AUDIT.md` (2026-10-27). Treat the older v0.8.68 defects as **historical reports**, not as automatically reproducible in v1.0.42. The rebuild audit's pre-implementation findings (multiple legacy render owners, six-stat creation gates, incompatible save keys) remain architecture rationale, not evidence that those defects exist in the rebuilt screens.

Repository compare from `d3831ab0641cecb6662e7968dafbc2bf578087db` (2026-10-26) to rebuild head shows **273 commits ahead** and changes to title/creation/hub, combat modules/tests, documentation and release validation. The branch `epicenter-dev` is stale at `da4e3763d3` (2026-10-25); `development/v0.8.68` is a historical legacy-preview branch. **This review is written only to the actively developed `rebuild/1.0-foundations` branch**. Relative to published main, rebuild head has one later documentation/verification commit and is behind the main release-commit series; do not merge branches merely to synchronize this review.

## Verified changes since baseline (repository/source evidence)
1. **Modular rebuild established:** three save slots, creation flow, Central Hub/Play interface, ten attributes, updated resources, Dev tab, compact tabs, journal and discovery. The current hub entrypoint is `rebuild/hub/index.html`; the title-screen store uses `epicenter_v1_slot_{1,2,3}`, distinct from legacy save keys.
2. **Combat iterations v1.0.35–v1.0.42:** connected encounter UI, action/initiative/resolution modules, Kibbles-specific AI and tests, turn locks, player-form equipment and mastery, consumable dog treats, and a three-tile **Dev-only** help-seeking fixture. See `rebuild/combat/{play-encounter,kibbles-ai,kibbles-form}.js` and `docs/releases/v1.0.42-validation.md`.
3. **Regression fixes documented:** v1.0.40 viewport-pinned composer; v1.0.41 Kibbles Counterbite/pounce and reaction gates; v1.0.42 stale anatomy projection after mastered release and false human speech at help arrival. These are **fixed in source/release evidence**, not newly rerun by this review.
4. **Published verification:** GitHub Pages run [41150442693](https://github.com/Uderiel/Epi-Center/actions/runs/41150442693) for main `ad4008b9e2` completed **success**. The v1.0.42 release record reports **93/93 deterministic cases** and **36 browser assertions** passing. Those are **prior release-team claims supported by committed reports**, not tests independently executed here. The report also documents some harness expectation corrections and a later live narration fix.
5. **Known intentional incompleteness:** Cherished Touch treat purchases, Kibbles real-world location/quest/repeat trigger, physical peeling/rescue, unmastered internal mastery/escape, form routines/preferences, multiplayer identity broadcasting and full world geography remain unimplemented or undesigned. Do not classify these as regressions without an accepted specification.

## Prioritized reproducible issue list for ONE supplementary Codex review

### P1 — R01: travel shortcuts bypass the Path anatomy gate (**SOURCE-VERIFIED inconsistent guard; runtime reproduction pending**)
**Evidence:** `rebuild/hub/index.html`: `travelPath(destination)` checks `EpiKibblesForm.capabilities(save).walking` and rejects affected legs; `travelCherished()` and `travelHub()` instead check only active encounter and location/discovery, then directly assign `save.hub.location`. The location drawer wires both shortcuts via `data-info="travel-cherished"` / `data-info="travel-hub"`.
**Repro:** In an isolated slot, discover Cherished Touch; establish a non-active partial Kibbles anatomy state where `eligibleActions(...).walking === false` (use a deterministic fixture, not the owner's save). Confirm Path travel is denied; then use the location drawer's direct Cherished Touch/Hub travel shortcut. Compare location, feed and saved state. Expected: identical physical eligibility enforcement across all entrypoints. **Do not infer a live reproduction from the static guard mismatch.**
**Codex ask:** consolidate all route entrypoints behind one eligibility/adjacency/discovery/encounter check, preserving permitted mastered quadrupedal movement and existing saves; add a regression test for each UI route.

### P1 — R02: Cherished Touch's direction conflicts with approved north-first geography (**SOURCE-VERIFIED content/canon mismatch**)
**Evidence:** `rebuild/hub/index.html` `surveyRoutes()` narrates Cherished Touch **northeast**, `OVERWORLD_ROUTES` has `direction:'NE'` and `returnDirection:'SW'`, and `travelHub()` says southwest. Approved geography places the Spire at center, Cherished Touch **north** as the first discoverable storefront; Residential Walkway branches **northeast** toward Applewood Apartments.
**Repro:** Fresh isolated slot -> Central Hub -> Survey Nearby Routes -> Path -> travel to Cherished Touch -> return; observe NE/SW labels. Expected N/S. Also check that the route list currently contains only the one public edge and does not yet convey the four cardinal roads.
**Codex ask:** align route labels, narration, discovery order and map orientation with the approved topology. Treat the larger district expansion as a separate feature, not an incidental bug fix; preserve previously discovered destinations.

### P2 — R03: multi-effect outcome application can partially mutate state before throwing (**SOURCE-VERIFIED code path; experimental module, not live Play**)
**Evidence:** `rebuild/combat/outcomes.js` `apply(s,ability,...)` loops through `ability.effects`, mutating HP/conditions/teams as it goes; it throws on an invalid later effect or missing `context.eligible` without rollback. This module explicitly says it is standalone/not connected to live Play.
**Repro:** `create({units:[{id:'a'},{id:'b'}]})`, then call `apply(s,{effects:[{type:'damage',amount:10},{type:'objective',amount:1}]},'a','b',{})`. It throws on objective eligibility but target HP has already decreased by 10. Expected: either upfront validation or an atomic commit; no partial state on failed action.
**Codex ask:** write an isolated unit test and implement validation/transaction semantics before connecting this module to live encounters. Do not present as a current live-combat failure.

### P2 — R04: historical autonomy/appearance/feed bugs require explicit carry-forward checks (**HISTORICAL REPORTS, NOT VERIFIED IN REBUILD**)
**Prior record:** `docs/development/v0.8.68/OUTSTANDING-BUGS.md` lists apartment arrival vs movement authority, Go Home narration after refusal, exact “I don't want to read.” acknowledgement, duplicate/misleading live-feed messages, Dev 23/23 Erin appearance not updating, and stale Equipment state after heel removal.
**Repro protocol:** use disposable saves with known form influence, needs, location and game time; compare action attempt, authoritative state, feed and reload. For Erin, test stage 22→23 and immediate/reloaded appearance; for heel removal, test both successful/failed rolls without switching tabs. **First determine whether each legacy flow is implemented in v1.0.42.** If absent, mark deferred/port gap; if present, test and classify. No blanket claim of persistent failure.

### P2 — R05: Android physical-device composer/keyboard acceptance remains open (**DOCUMENTED MANUAL TEST GAP**)
**Evidence:** `docs/releases/v1.0.40-validation.md` explicitly says physical-phone keyboard acceptance is pending, although 22 browser checks passed across narrow and desktop viewports. v1.0.42 reports pinned composer regression coverage, not physical Android validation.
**Repro:** on Android Chrome, Play with and without Kibbles encounter, scroll full artwork/feed, focus composer, open keyboard, expand recipient selector, type partial draft, switch focus, send, reload. Expected composer remains visible above keyboard/navigation, draft survives, no overlay or horizontal clipping. Record OS/browser/viewport; no simulated viewport may be reported as physical acceptance.

### P2 — R06: Kibbles world/quest/repeat lifecycle remains a defined handoff gap (**VERIFIED ABSENCE FROM RELEASE SCOPE; NOT A REGRESSION**)
**Evidence:** `docs/releases/v1.0.42-validation.md` says Dev help is a fixture and world location, quest trigger, connection and repeat-trigger rules are next work. `rebuild/hub/index.html` exposes the Kibbles encounter via Dev, not a completed authored world trigger.
**Repro/checklist for future feature:** define and test discoverable location, quest eligibility and journal, first acquisition, no duplicate item on repeats, after-win/loss/submission/escape re-entry, save/reload, per-player instance isolation. Do not invent trigger rules or enable purchases before owner approval.

## Integrity and regression gates
- **Save custody:** never use owner's occupied slots for tests; test all three independent slots, corrupt slot preservation, old-save upgrade, active Kibbles encounter reload, equipped form overlay, resource depletion, release restoring original profile, no accidental heal/duplicate reward. Preserve `epicenter_v1_slot_` keys and legacy keys.
- **Combat:** initiative; one Main/Minor/Reaction per round; Kibbles pounce/opening, paid Counterbite, attachment-aware Wrap, Wriggle, 32/60 stamina reserve, combat treat exactly once, canine speech vs private thoughts, movement while restrained/leg-covered, help arrival not auto-rescue.
- **UI:** fixed composer after long scroll, artwork size, feed readability, Dev encounter entry only, compact navigation, drawer return and draft retention on 360px phone and desktop; real Android acceptance separate.
- **World:** first survey, north/south/east/west directional clarity, Cherished Touch travel and return, restricted Underworld access, residential northeast branch, quest reward once only, Eve/Charity targeting.
- **Evidence standard:** record exact SHA, test fixture and state, steps, expected/actual, screenshots/logs, and whether result is source inspection, automated run, live browser run or owner report. Do not silently promote historical failures to current verified defects.

## One supplementary Codex review — ready-to-run scope (NOT EXECUTED)
Review `rebuild/1.0-foundations` at the recorded SHA, with emphasis on **R01/R02 first**, then R03, and classify R04–R06 without inventing behavior. Inspect all navigation and discovery entrypoints, save mutations, combat adapter form-overlay lifecycle and existing test fixtures. Produce **one** consolidated issue list ranked by severity with file/function anchors, minimal deterministic repros, affected saves, expected vs actual behavior and proposed minimal regression tests. Do not edit `main`, alter save keys, add speculative lore or mark owner acceptance complete. Prefer one narrowly scoped fix per accepted patch; preserve the release evidence trail.

## Review outcome / actions
**This review changed documentation only on `rebuild/1.0-foundations`.** No gameplay patch, backup rotation, routine changelog/handoff updates, release or Codex run was performed. Prior v1.0.42 automated/live results remain historical release evidence. Highest immediate risk is inconsistent route gating (R01), followed by the north/northeast mismatch (R02). Next action: one supplementary Codex audit, then focused patches and independent test/owner acceptance.

**Playable release:** https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.42
