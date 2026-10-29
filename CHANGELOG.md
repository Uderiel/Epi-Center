## Publication verified — v1.0.35 (2026-10-29)
**Published and ready for owner manual acceptance.** Gameplay source: development commit `1040efc142a40b0890422a0aae9f862acf1de1e2`; release commit `830c94fe8539e99250a1b62ad2e0f81fd481069f`. GitHub Pages [run 535](https://github.com/Uderiel/Epi-Center/actions/runs/40975427952) completed **success**. Live title displays v1.0.35; live new-character creation routes to Hub v1.0.35; Kibbles starts, Basic Attack resolves through the engine, stamina changes to 96, enemy Health to 68, round advances to 2, and refresh preserves that state. No site-origin console errors observed. Local Chrome: 31/31 checks. Pure adapter: 12/12 cases, entity assertions and script syntax pass. Phone-sized local and desktop-sized live layouts inspected. Physical-device/manual owner acceptance remains pending. This publication evidence supersedes all publication-pending statements below.

[Play v1.0.35](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.35). Open Play → **Encounter Kibbles**. See the numbered manual checklist below and release validation document. Gameplay files are unchanged by this evidence-only update.

## v1.0.35 — integrated Kibbles encounter (2026-10-29)
This checkpoint supersedes the earlier guarded UI candidate and stale next-work instructions below. Last user-accepted baseline: **v1.0.34, 5/5**. Current build: **v1.0.35**, automated validation complete; manual owner acceptance pending. Development branch: `rebuild/1.0-foundations`; GitHub Pages serves `main`.

- Play now starts a real solo Kibbles encounter with **Encounter Kibbles**. This is an explicit integration entry, not a new canonical world location or invented crate route. No query preview, alternate save namespace, new permanent encounter tab, or automatic encounter on loading a save.
- Approved compact Main/Minor/Reaction/Inventory field: six Main actions including Submit / Surrender; Physical/Mental/Arousal attack approach; initiative, targeting, resource pools, conditions, connected anatomical coverage, action costs and live feed. Solo ally and undefined inventory actions remain disabled with reasons.
- `play-encounter.js` adapts the actual `engine.js` and authored `entity-rules.js`. Copy-before-dispatch prevents invalid-action partial mutation. Serialized RNG seed, round, turn, anatomy, minor usage and reaction persist inside the selected existing slot. No save keys changed.
- Physical or mental defeat of Kibbles grants its unique mastery, completes transformation, equips authored attributes and remaining enemy resource values, emits the private local feed notice once, and retains underlying player data/resources. Arousal incapacitation grants no Kibbles mastery. Full anatomical coverage loses without mastery. Flee and terminal results restore normal navigation. Release Kibbles restores the prior player/form selection; mastered form stays in the collection.
- Stamina values are **provisional integration tuning**, not a claim of previously approved final balance: Basic 4, Strong 8, Grapple 5, Escape/Resist/Dodge 3, Counter 5, Analyze/Defend/Flee/Submit 0; enemy grapple/wrap 5. One Minor and prepared Reaction per player turn, Main advances combat. Submit passes the turn without a bonus or free wrap. World-time/needs combat rates and universal post-capture consequences remain future work.
- Existing title/creation/Hub routes agree on v1.0.35. Slot schema, character creation, original appearance, discovery, quests/journal and v1.0.34 navigation are retained. Dev resource adjustments bridge into the real current pool after combat.

**Validation:** 12/12 deterministic adapter tests; existing entity-rules assertions pass; inline scripts and combat modules compile. **31/31 automated Chrome browser assertions** on local preview: real creation→Hub, active encounter, Main/Minor/Reaction/Inventory, stamina, mental damage, Submit, connected coverage narration, reload, character navigation, mastery, no duplicate outcome, form release, three slots, cross-slot isolation, accepted travel, Dev pool/reset, travel blocking, flee persistence. Browser automation selector/whitespace test failures were corrected and affected assertions rerun. One existing creation-review display defect (`undefined` for optional blank appearance) was observed; it does not alter saved fields and is deferred.

**Publication:** publish only after this validation; verify main Pages deployment and live version before handoff. Physical Android/PC manual acceptance is pending. Broader multiplayer, final combat balancing, general inventory actions, and canonical exploration encounter placement are outside this slice.

**Manual checklist:** open https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.35 ; (1) Continue existing slot; verify name/appearance. (2) Play→Encounter Kibbles; inspect six Main actions and all four tabs. (3) Choose attack approach; verify rolls, stamina and enemy turn. (4) Use Minor/Reaction; verify per-turn guards. (5) Submit consumes Main turn; no separate surrender section. (6) Reload mid-fight; verify pools, turn and coverage. (7) Navigate Character/Stats and return; encounter persists; travel is blocked. (8) Win via Health/Resolve; verify private mastery and Kibbles stats, reload without duplicate reward; release restores underlying player. (9) Flee; verify normal travel returns. (10) Logout and inspect other slots; unchanged. Report PASS/FAIL/UNTESTED per item.


## 2026-10-29 — v1.0.35 encounter field integration candidate
- User-approved sketch implemented as responsive guarded encounter field, mounted in Play after live feed; existing command input remains. Main/Minor/Reaction/Inventory tabs, target selector, resources, conditions and transformation display. Submit/Surrender is a Main action. No encounter is spawned, and buttons are disabled until canonical action engine, cost validation and persistence are wired. Source commits c6f7f96, 60d8d7f, ead08fe on rebuild/1.0-foundations. No automated browser tests, Pages deployment or user acceptance claimed. Last accepted gameplay v1.0.34. Next: validate actual HTML mounting and connect deterministic Kibbles action dispatcher, then test and publish.

## Encounter outcome contract — Chunk 1 (2026-10-28)
- Added `rebuild/combat/encounter-contract.js` on main and rebuild branches. Pure, standalone outcome record: separate tactical result, objective result, per-participant freedom, consequences and available actions, events, and `appliedToPersistentState:false`. Validates enumerated states and unique participant IDs. No gameplay UI, save mutation, mastery, transformation-stage or faction behavior changed. **Source committed; automated execution/browser validation and user acceptance not claimed.** Next chunk: map both combat prototype outcome shapes into this contract without changing rules, then decide the first post-encounter continuation rules with owner.

## Reversion — v1.0.35 unapproved development mode removed (2026-10-28)
- Reverted the separate `dev=1` save namespace and labels on title, creation and Hub, both branches. Restored single accepted v1.0.34 entry/version and existing save keys. Earlier v1.0.35 candidate entry is historical and no longer active. No new release version claimed; browser redeployment verification pending.

## v1.0.35 — Development save isolation (candidate; acceptance pending)
- Added explicit `dev=1` mode across title screen, character creation and Hub; separate `epicenter_v1_dev_slot_*` storage namespace, prominent development labels and mode-preserving navigation/logout. Normal save keys untouched. Source committed on main and rebuild. No user acceptance yet.

## v1.0.34 — USER ACCEPTED (5/5 PASS, 2026-10-28)
- Title-screen existing saves, Continue→Hub, fresh creation→Hub v1.0.34, reload persistence, and cross-slot isolation all confirmed PASS by user. Phase 0 remains open for release-hardening tasks.

## v1.0.34 — Phase 0 candidate (user acceptance pending)
- Repaired character creation's stale v1.0.28 header and post-confirmation Hub route; aligned title/Hub v1.0.34 references on both branches. No save schema or gameplay mechanics changed. GitHub issue #1 tracks remaining Phase 0 release integrity.

# Epi-Center — Development Changelog
This is a concise change ledger. For user acceptance and decisions see `docs/BUILD-PROGRESS-AND-TEST-HANDOFF.md`; for planned work see `docs/DEVELOPMENT-MASTER-PLAN.md`.
## 2026-10-28 — Documentation and engineering planning
- Added dependency-gated master plan (Phases 0–14), state audit, implementation/test/release protocol, decision register and new-chat continuity instructions.
- Added current-status checkpoint. **Documentation only; no gameplay changes, no new live acceptance test.**
## v1.0.33 — Accepted
- Dev relationship −10 and +10 buttons, clamped −100..100, Eve locked 0. User confirmed PASS after Pages deployment.
## v1.0.32 — Accepted (5/5 PASS)
- Form activity capitalization, automatic equipped-form relationship, persistent physical needs, Stats resource overlay panel, title-screen name/last played. Corrected universal version routing.
## v1.0.31 — Accepted (9/9 PASS)
- Universal save-slot title-screen routing; Dev and needs/resource simulation, persistence and cross-slot isolation accepted.
## Earlier history
See `docs/BUILD-PROGRESS-AND-TEST-HANDOFF.md` and README index for v1.0.28–v1.0.30 and legacy v0.8.x. Prior failure notes superseded by later user acceptance must not be interpreted as open defects.
