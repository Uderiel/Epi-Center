# Epi-Center — Project Handoff
Updated 2026-10-24 · current build v0.8.61

## Project and delivery
Epi-Center is a browser-based RPG prototype adapted from a long-running Discord human-to-human roleplay world. The current implementation is a large single-file HTML/JavaScript build with browser-local persistent saves. User tests on Android Chrome and manually uploads builds to GitHub Pages.

Repository: https://github.com/uderiel/Epi-Center
Latest play URL after upload: https://uderiel.github.io/Epi-Center/epi-center-v0.8.61-scent-grooming-records.html
Latest HTML: epi-center-v0.8.61-scent-grooming-records.html

## Standing instructions from user
- **After each test report, implement and send a patch; don't wait for a separate request to fix it.**
- **Work on exactly one master checklist section at a time.** Remove items only after user verifies they pass. Current active section: Bathroom.
- Keep object interactions within their existing contextual views. No duplicate cards, stacked fixture menus or extra panels between activity and input.
- Include latest play link in every assistant response.
- Refresh changelog and handoff every five versions; v0.8.60 checkpoint was due, now refreshed at v0.8.61; next at v0.8.65.
- Do not claim JavaScript syntax checks prove interactive browser functionality.

## Current bathroom progress
Confirmed by user:
- Bathroom navigation via sink/curling iron and return to room.
- Curling and facial care displayed in existing Character appearance records and persisted through reload.
- Curling/facial care expire after 24 in-game hours.
- Bathing clears makeup, styling and facial care.
- Bubble bath is mentioned in the subsequent bath action.
- Makeup can be applied and removed and appears in Face.
- Toothbrush alone completes Brush Teeth; only one Brush Teeth control remains.

v0.8.61 changes awaiting verification:
- Remove duplicate Apply Everyday Makeup/Remove Makeup controls.
- Dresser floral lotion shown in existing Scent & Physiology rather than Face.
- Perfume shown in existing Scent & Physiology.
- Body lotion expires after 24 in-game hours and clears on bath.

Other bathroom checks not closed:
- Contextual shampoo/shower use, pads/tampons and menstrual protection, heating pad in sensible location, toilet-paper action semantics, perfume and lotion persistence, broader object interaction regression, and meaningful hygiene state.

## Erin's autonomy — non-negotiable rule
At 100% influence, Erin is in control and must **actually execute her own routine and choices as an NPC would**. The player can attempt to persuade her to act otherwise; trust is not blanket consent. Current code only announces morning/evening routine intentions, sometimes at inappropriate hours (e.g. midday), and does not move, sleep, groom or prepare food. This is a known bug and must not be represented as functional autonomy. Office remains unimplemented; no missed-work penalties.

## Remaining master sections
1. Bathroom — ACTIVE, incomplete.
2. Clothing/accessories/laundry — pending: item loss, shoes treated as washable, legacy items, bulk deposit, duplicate UI, washer handling.
3. Transformation/appearance — pending: stage-to-portrait/appearance synchronization.
4. Erin influence/autonomy — pending: actual scheduled actions, player persuasion, NPC agency, realistic trust/influence.
5. Physiology/hygiene/notifications — pending: needs, menstrual consequences, scent/sweat, activity dismissal, audit source.
6. General regression — pending.

## Core game context
Epi-Center world includes AI guide Eve, Countess antagonist, sealed Spire unlocked by Hub Cylinders, factions, and later Squirrel City / NU Corp Overworld. Current playtest focuses on Erin, a 23-year-old executive secretary sharing a body with the player after a 23-stage transformation. Erin has her own preferences, relationships, routines and agency. Erin's apartment at Applewood Apartments Unit 3C contains bedroom, dresser, bathroom, hallway, utility closet, kitchen, living room, closet and persistent household items. The game must maintain a single authoritative record for every object, distinguish equipment layers and item types, and preserve save state.

## Technical caution
The single HTML file has many historical function overrides appended across versions. Avoid adding patches that only change displayed text while leaving underlying behavior disconnected. Inspect existing functions and use actual browser or interaction tests where feasible. Never reset user saves to fix bugs without explicit consent.
