# Epi-Center 1.0 — Handoff

Last updated: 2026-10-27 · v1.0.4

## Current published candidate
- Title: `rebuild/title-screen/` on GitHub Pages. Approved illustrated banner and slogan included.
- Creation: `rebuild/character-creation/` with editable name/appearance, 10 expandable attributes, 40 points, review, final confirmation and limited Eve hub preview.
- Independent v1 slots use `epicenter_v1_slot_1` through `_3`. Legacy saves untouched.

## Current test status
- Three-slot original title milestone: owner accepted before creation integration.
- **OPEN / FAILED:** Android: New Character → Back shows stale New Character button; second tap reports occupied slot until manual reload. v1.0.4 published with an inline title controller that immediately re-renders after slot creation and on page restore. **Owner retest pending; not fixed/accepted yet.**
- v1.0.2 and v1.0.3 navigation/cache attempts did not resolve reported Android behavior.
- Full gameplay hub is not migrated; Eve introduction is foundation preview.

## Release discipline
Every change must include a visible version, update changelog/handoff/test status, publish, then await owner validation before marking accepted. Do not assert browser validation without running it.
