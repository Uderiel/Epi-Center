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

## v1.0.8 corrected final UI baseline
Owner rejected v1.0.7 as earlier shell, not final v0.8.84 live feed. v1.0.8 reconstructs final v0.8.84 live feed, sticky action text entry, five quick-reference drawers, header and activity history in modular hub. Save slots remain device-local; no cross-device synchronization. New action submission records text only, without world resolution; do not claim legacy gameplay migrated. Owner acceptance pending.

## v1.0.9 UI correction
v1.0.8 rejected by owner: incorrect bottom tabs, no proper top drawers or persistent text-feed experience. v1.0.9 restores later v0.8.84 tab list, Play as default, top five reference drawers, and World/NPCs/Players/Form composer channels. Preserve slot storage; action submission currently logs only. Do not describe as complete legacy UI migration until owner accepts. Browser/device-local saves do not sync across devices.

## v1.0.10 Play composer baseline
Owner rejected v1.0.9's screen structure. v1.0.10 fixes the composer to the bottom viewport above mobile nav, makes feed independently scrollable, and displays Location/NPC/Player/Form selection directly above text input. Existing save slot keys and draft storage unchanged. **Do not claim exact 8.84 parity until owner verifies.**

## v1.0.11 diagram implementation
Based on owner-supplied paper layout and clarification: player attributes and health/stamina/arousal remain authoritative through transformation stage 22/23; form becomes authoritative at 23/23, without overwriting original player data. Each form's relationship is independent, starts at 0 when no value exists, bounded −100..+100. Play view contains location imagery placeholder, quick drawers, feed and fixed composer; NPC/Player channels request target names. No NPC responses, world action resolver, quest switching, route survey, time simulation or actual location art migrated yet. Do not mark these complete. Both main and rebuild branch updated.

## v1.0.12 owner feedback
Android screenshot confirmed v1.0.11 fields load but exposed missing base meters and incorrect attributes. v1.0.12 reads lowercase attribute keys, seeds absent player baselines 100/100/0, normalizes `hub` to Central Hub, displays specified description and Eve. First Steps objective and 100 gold/50 EXP are informational only until quest logic is migrated. Existing slot keys unchanged; don't overwrite player values.
