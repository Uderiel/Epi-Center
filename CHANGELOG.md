
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
