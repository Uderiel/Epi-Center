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

## v1.0.5 appearance restoration
Published `rebuild/character-creation/index.html` with canonical v0.8.84 19 appearance regions, 23 inputs total, and age/gender required. Existing v1 slot keys remain unchanged. Android owner validation pending; no changes to legacy save keys. Version v1.0.5 is visible on creation screen.

## v1.0.6 — 2026-10-27
Owner reported full appearance spectrum not appearing in v1.0.5. Published explicit optional labels, descriptive anatomical hints, multiline input fields, and cache-busted title-to-creation navigation. Canonical 19 regions and saved keys retained. **Owner retest pending; not accepted.**

## Owner-approved checkpoint — v1.0.6
2026-10-27: Owner reports all six character-creation tests **PASS**. Preserve accepted save-slot behavior, canonical 19 appearance regions, optional anatomical inputs, 10 attributes/40 starting points, draft/review/finalization flow, and existing save keys. The hub remains a foundation preview; do not mistake character creation acceptance for full gameplay acceptance.

## v1.0.7 — UI transfer checkpoint
Published `rebuild/hub/index.html` as an isolated v0.8.84 shell/layout baseline, retaining six navigation tabs and mobile bottom bar. Character confirmation and ready-slot continuation now navigate to `/rebuild/hub/?slot=N&v=1.0.7`. The new hub reads `epicenter_v1_slot_N`, not legacy `epicenter_proto_v0523`. No legacy gameplay systems, travel, inventory actions or combat were ported. Preserve approved v1.0.6 creation and three-slot functionality. **Owner review of UI baseline pending.**
