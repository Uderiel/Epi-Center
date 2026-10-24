# Epi-Center — Changelog

## v0.8.55 — Integrated Object Fixes (candidate)
- Bathroom storage items now use bathroom selection handler rather than dresser/closet handler.
- Redundant bathroom fixture navigation removed when a fixture is open.
- Accessory equip/remove/put-away actions added in the existing selection view.
- Hamper gains Deposit All Worn/Dirty and Retrieve All controls.
- Non-clothing items in revised inventory list no longer show clean/worn/dirty condition labels.
- Completed-transformation neck/voice/face text corrected where matched.
- At 100% influence, time progression can produce Erin-led morning, work, or bedtime routine intention events; **not yet autonomous action execution**.
- Time progression now records an explicit mental resilience change reason for its own changes.
- JS syntax check passed; browser smoke test and saved-game regression remain outstanding.

## v0.8.54 — Context Panel Consolidation
- Consolidated laundry controls and removed redundant Play screen status panels; browser testing reported further nested UI issues.

## v0.8.53 — Laundry Retrieval and Schedule
- Individual garment retrieval from hamper and washer.
- Schedule versus physical location status; no missed-work penalties while office is unimplemented.

## v0.8.52 — Equipment and DEV
- Eight body equipment regions displayed; DEV sliders for Erin influence, trust, stress, transformation stage.

## Known follow-up work
See project handoff for outstanding issues, especially full autonomous NPC decisions, appearance stage sync, physical action parsing, needs/hygiene, and legacy laundry migration.
