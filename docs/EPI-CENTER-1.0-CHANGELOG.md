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

## v1.0.11 — 2026-10-27
Implemented diagram-driven Play screen: current-location header and image placeholder, five quick-reference drawers, independently scrolling timestamped live feed, fixed four-channel Location/NPC/Player/Form composer and directed-recipient field. Form drawer includes 0-neutral relationship scale (−100..+100) and stage progress. Stats drawer selects player until stage 23/23, then completed form, with expandable ten attributes and recorded modifiers. Quest and nine-cell compass drawers display saved data when available; disconnected game actions are marked pending. Existing slot keys preserved. Owner review pending.

## v1.0.12 — 2026-10-28
Corrects saved hub identifier `hub` to display `Central Hub` in Play, Location and Path; adds owner-provided Central Hub description and Eve as discovered NPC. Initializes missing player baseline Health 100, Stamina 100, Arousal 0 without overwriting existing values. Fixes lowercase character-creation attribute lookup, adds attribute descriptions and capitalizes Form and Stats labels. Displays original v0.8.84 First Steps quest details and rewards; acceptance and completion mechanics remain unconnected. Owner review pending.

## v1.0.13 — 2026-10-28
Fixed Stats drawer canonical key mismatch: creation saves `Empathy / Insight` and `Influence / Intimidation`, not `Insight` and `Influence`. All ten expandable attribute descriptions now match character creation's approved definitions. Existing saves preserved; no migration or value overwrite. Owner review pending.

## v1.0.14 — 2026-10-28
Renamed canonical attributes Empathy / Insight → Insight and Influence / Intimidation → Influence across character creation and Stats drawer. On opening existing saves, hub and character creation migrate legacy keys without losing values; if canonical key already exists, it takes precedence. Other eight attributes and descriptions unchanged. Both branches mirrored. Owner review pending.

## v1.0.15 — 2026-10-28
Android/browser Back closes open quick-reference drawers, otherwise returns non-Play tabs to Play, and guards Play against accidental browser back navigation. Drawer Back to Live Feed and backdrop taps close overlays. Settings includes explicit Log Out to title screen without deleting slot data. Syntax checked; owner Android verification pending.

## v1.0.16 — 2026-10-28
Cherished Touch northeast of Central Hub discoverable by Path survey, travel NE/SW through Path, location description from owner-provided details, Charity discovered only upon direct interaction (Path button or NPC-channel addressing Charity). Cherished Touch discovered quests remain empty; Access Tunnel A excluded from this overworld route. Starter quest full acceptance/completion not yet implemented. Owner Android acceptance pending.

## v1.0.17 — 2026-10-28
Fix title-screen Continue for ready saves to navigate directly to versioned hub URL, bypassing character-creation intermediary; draft saves still open creation. Addresses reported old placeholder Survey handler likely from stale hub cache. Survey handler was present in v1.0.16; root cause not independently confirmed. Owner Android retest pending.

## v1.0.18 — 2026-10-28
Clickable compass markers for Cherished Touch NE and Central Hub SW; original Central Hub JPEG transferred from legacy v0.8.84; Eve dialogue accepts and completes First Steps with once-only 100 gold/50 EXP reward after Cherished Touch visit and return; quest status shown; entity-ID dropdown for NPC and local Player targets. Network player messaging not implemented. Android verification pending.

## v1.0.19 — 2026-10-28
Replaced special-case Path marker routing with shared OVERWORLD_ROUTES adjacency model. All discovered directly connected destinations display as clickable compass buttons, including Cherished Touch NE and Central Hub SW. Map tab unchanged per owner request. Original embedded Central Hub image can only display while player is at Hub; needs Android verification after return. Charity NPC interaction and recipient ID targeting preserved. Syntax checked; device testing pending.

## v1.0.20 — 2026-10-28
Owner confirmed Cherished Touch to Central Hub return, embedded Central Hub artwork display, and Eve's initial quest interaction on Android. Changed location image from fixed 105px cover/crop to natural aspect ratio with contain behavior, no maximum image height. Full image rendering pending owner verification. Advanced conversational NPC capability remains deferred.

## v1.0.21 — 2026-10-28
Owner reports v1.0.20 Central Hub artwork still not fully displayed. Force responsive full-aspect image without height constraints; add tap-to-open full-screen overlay with Close control. Preserve original embedded JPEG, navigation and saves. Syntax passed, Android verification pending.

## v1.0.22 — 2026-10-28
Screenshot from owner showed Central Hub artwork still shallow/cropped and no v1.0.21 full-image caption. Original embedded JPEG dimensions verified at 1100x733 (3:2). Explicitly enforced intrinsic 1100/733 aspect ratio on artwork button and image, removed height limits and overflow clipping, added visible v1.0.22 image caption to identify loaded build. Android retest pending.

## v1.0.23 — 2026-10-28
Owner confirmed First Steps quest completion and completion dialogue. Updated quest drawer to clearly instruct player to return to Central Hub and speak to Eve again. Added Active Quests and Journal Completed tabs inside Quests drawer; completed quests archived by title with expandable description, route, rewards, and completion time. Newly completed quests capture ISO timestamp; existing completed saves migrate without fabricated historical timestamp. No reward regrant. Syntax checked, Android journal verification pending.

## v1.0.24 — 2026-10-28
Replaced bottom Builder navigation with Journal. Completed quest archive now renders in dedicated Journal tab, expandable by title with details, rewards and timestamp. Quests drawer only shows current quest and a Completed Journal navigation button. Existing saved quest journal records remain intact. JS syntax passed; Android verification pending.

## v1.0.25 — 2026-10-28
Priority Resolve foundation: four resources Health/Stamina/Resolve/Arousal. Resolve replaces legacy Mental Resilience, with save migration preserving any legacy value, otherwise 100 baseline. Stats drawer shows Resolve. Existing 23-stage form stat replacement preserved, with Resolve fallback if completed form lacks field. Combat mastery and submission mechanics remain design-only; no combat engine implemented. Syntax passed; Android testing pending.

## Combat foundation (post-v1.0.25, engine-only)
Added rebuild/combat/engine.js on main and rebuild/1.0-foundations. No Play UI or save-schema change. Isolated combatant data model, ten attributes, four custom resource pools, rarity baseline table, seeded d20 rolls, initiative, saving throws, conditions, physical/mental/arousal/encasement victory, equipment removal and seeded simulation fixtures for Kibbles, Erin's heels and ordinary NPC. Fixture attributes and power values are provisional, not canon. Mastery, post-defeat internal resistance, multi-encounter persistence, complete combat action economy, and PvP authorization remain future work.

## Combat foundation — canonical records and Guide
Added identity/relationship fields, isolated encounterSnapshot, outcomeRecord (explicitly unapplied to persistent state). Added docs/COMBAT-FOUNDATIONS-GUIDE.md as shared Guide/Eve dialogue reference. No Play UI changes.

## v1.0.26 — Automatic combat alignment
Character screen and Stats drawer now show a three-segment Physical/Mental/Arousal allocation bar and exact percentages. Derived from ten attributes with full primary and half supporting weights. Standalone combat engine exposes specialization(attributes). No combat modifiers or saves changed. JS syntax passed; Android verification pending.
