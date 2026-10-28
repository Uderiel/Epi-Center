# Epi-Center 1.0 — Changelog

## v1.0.4 — 2026-10-27
- Replaced title screen external module entry with a self-contained inline slot controller to avoid stale cached JavaScript on Android.
- Refreshes slot cards immediately after reservation and when page is restored, focused, or becomes visible.
- Added visible version label to title screen.
- **Published; Android owner retest pending.** This is not a verified fix.

## v1.0.3 — 2026-10-27
- Attempted return navigation cache busting, immediate slot render and bfcache handling. Owner reported same failure.

## v1.0.2 — 2026-10-27
- Attempted pageshow/focus refresh. Owner reported same failure.

## v1.0.1 — 2026-10-27
- Published character creation, ten attributes, review, confirmation and introductory Eve hub preview. Connected title Continue and New Character to creation.

## v1.0.0 — prior milestone
- Three save slots and approved illustrated title screen; initial three-slot behavior owner accepted before creation integration.

## v1.0.5 — 2026-10-27
- Replaced simplified appearance inputs with the canonical v0.8.84 identity fields and 19 anatomical regions (23 inputs including measurements).
- Age and starting gender required; remaining anatomical details optional. Drafts and prior values preserved.
- Published to main and rebuild branch; Android owner verification pending.

## v1.0.6 — 2026-10-27
Owner reported full appearance spectrum not appearing in v1.0.5. Published explicit optional labels, descriptive anatomical hints, multiline input fields, and cache-busted title-to-creation navigation. Canonical 19 regions and saved keys retained. **Owner retest pending; not accepted.**

## v1.0.6 acceptance — 2026-10-27
Owner reports all six character-creation tests passed. Marked v1.0.6 character-creation milestone accepted. Documentation-only acceptance update; no gameplay changes.

## v1.0.7 — 2026-10-27
- Imported the v0.8.84 UI CSS and shell layout into modular `rebuild/hub/index.html`: top header, desktop sidebar, Android bottom navigation, six original tabs, hub hero/cards and status styling.
- Connected finalized characters and resumed ready slots to the new hub baseline, preserving v1 save slots and original character data.
- Legacy world logic not migrated; Map, Items, Power and Encounter are clearly labeled placeholders. Owner UI baseline review pending.
- Published to GitHub Pages via main; mirrored to rebuild/1.0-foundations.

## v1.0.8 — 2026-10-27
Corrected incomplete v1.0.7 UI baseline. Recreated final v0.8.84 live-play layout with location header, five quick-reference drawers, scrollable live feed, sticky persistent action composer and activity history. Action draft and submitted messages persist within the v1 slot. These are UI and local-log behaviors, **not** the migrated game action resolver. Owner validation pending. Local saves are device/browser specific; opening another device does not transfer them.

## v1.0.9 — 2026-10-27
Corrected final UI baseline navigation to Play, Map, Character, Equip, Items, Power, Settings and Builder; removed erroneous Encounter and Hub tabs. Added four Play composition channels World/NPCs/Players/Form, persistent draft, live feed and quick-reference drawers. Still a UI scaffold: messages are locally logged, not game-resolved. Owner acceptance pending.

## v1.0.10 — 2026-10-27
Corrected Play layout to keep text composer visible above mobile bottom navigation; scrollable feed occupies remaining space. Four composer selectors relabeled Location, NPC, Player, Form. Input and Send share a row. Owner UI review pending; no gameplay resolver added.
