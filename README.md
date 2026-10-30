## v1.0.36 — encounter layout, turn boundaries and roll feed correction
Owner acceptance of v1.0.35 was **blocked**, not completed: buttons worked, but the encounter field obscured the feed, did not match the supplied sketch, and consecutive turns were indistinguishable. Last accepted gameplay baseline remains v1.0.34. This correction follows the attached 4207.jpg design.

- Play uses separate viewport rows for location/quick references, the always-visible scrollable live feed, the encounter dock, and text input. No fixed composer overlaps the feed or combat controls. Phone layout stacks opponent resources, expandable player condition/transformation, then four action tabs and two-column actions; desktop adapts the same sections. Small screens scroll the resource section independently while action controls stay visible. Location artwork remains available through a thumbnail/full-image viewer.
- Explicit persisted phases: **Your turn → Kibbles turn/reaction → Turn complete/review → Begin your next turn**. One Main action cannot be repeated by rapid clicks or reloads. Review is an acknowledgement gate, not an extra combat action. Minor use persists until the next player turn. Reactions auto-display only when targeted; Defensive Posture resolves its defense without a second reaction, as sketched. Submit remains one of six Main actions.
- Live-feed turn separators and individual roll cards show actor/action, natural d20, modifier, total, target number and success/failure. Both initiative rolls, enemy Grapple/Skin Wrap rolls, player attacks, saves and flee are included. Actions requiring no roll say so. Historical v1.0.35 entries are retained without fabricating missing dice.
- Kibbles does not feature arousal combat per the sketch: no enemy/player arousal meter or attack approach in this encounter; the general engine still supports it for other definitions. Undefined inventory/allied-player actions remain guarded. Resource costs, anatomy progression, unique mastery, underlying character data and existing three save keys are retained. Old active encounters without a phase resume as player turn without resetting resources.
- Automated verification: **18/18 deterministic adapter cases**, existing entity assertions, entrypoint/module syntax checks. **38/38 browser assertions** through real UI, including 390×780 and 360×640 phone frames and a 1100×780 desktop frame; measured feed/dock/input separation, all Main controls within dock, enemy/review reload gates, complete player/enemy/save/initiative roll cards, collapse/reopen, Minor, reaction, defend, Submit, flee, outcome feed visibility and character navigation. An observed small-phone clipping defect was fixed and the failed geometry assertion rerun successfully. No local site-origin console errors in the final browser run.

Publication is gated on these passing checks. Manual owner acceptance remains pending. Next acceptance: (1) resume existing slot; (2) verify feed stays visible with the dock expanded/collapsed; (3) use Strong Attack once and confirm another Main is unavailable; (4) read player roll, choose Reaction or continue, read enemy roll; (5) use Begin your next turn; (6) reload in each phase; (7) test condition expansion and text input on phone; (8) confirm original character/other slots and navigation. Play link after deployment: https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.36 .

## Publication verified — v1.0.35 (2026-10-29)
**Published and ready for owner manual acceptance.** Gameplay source: development commit `1040efc142a40b0890422a0aae9f862acf1de1e2`; release commit `830c94fe8539e99250a1b62ad2e0f81fd481069f`. GitHub Pages [run 535](https://github.com/Uderiel/Epi-Center/actions/runs/40975427952) completed **success**. Live title displays v1.0.35; live new-character creation routes to Hub v1.0.35; Kibbles starts, Basic Attack resolves through the engine, stamina changes to 96, enemy Health to 68, round advances to 2, and refresh preserves that state. No site-origin console errors observed. Local Chrome: 31/31 checks. Pure adapter: 12/12 cases, entity assertions and script syntax pass. Phone-sized local and desktop-sized live layouts inspected. Physical-device/manual owner acceptance remains pending. This publication evidence supersedes all publication-pending statements below.

[Play v1.0.35](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.35). Open Play → **Encounter Kibbles**. See the numbered manual checklist below and release validation document. Gameplay files are unchanged by this evidence-only update.

## v1.0.35 — integrated Kibbles encounter
[Play v1.0.35](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.35). Automated local validation: **31/31 Chrome browser checks**, **12/12 deterministic adapter tests**, existing entity rules pass. Publication verification recorded in release handoff after deployment; owner acceptance pending. Existing save slots unchanged. Start with **Encounter Kibbles** in Play. Last accepted baseline: v1.0.34. See [current release evidence](docs/releases/v1.0.35-validation.md).


## v1.0.35 encounter UI development candidate
- Development branch only: Play mounts a guarded encounter field when an active encounter exists. **Not published or user accepted**; v1.0.34 remains the playable baseline. Actions intentionally disabled pending combat dispatcher integration. Earlier build links retained.

# Epi-Center

Epi-Center multiplayer RPG prototype.

## PLAYABLE BUILD INDEX — KEEP THIS LINK VISIBLE

| Version | Play / preview | Repository source | Status |
|---|---|---|---|
| **v1.0.34 — Phase 0 creation-route repair** | **[Open v1.0.34](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.34)** | [Creation source](https://github.com/Uderiel/Epi-Center/blob/main/rebuild/character-creation/index.html) | **USER ACCEPTED — 5/5 PASS** |
| **v1.0.33 — Relationship ±10 controls** | **[Open v1.0.33](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.33)** | [Hub source](https://github.com/Uderiel/Epi-Center/blob/main/rebuild/hub/index.html) | **USER ACCEPTED — PASS** |
| **v1.0.32 — Form & save refinements** | **[Open v1.0.32](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.32)** | [Hub source](https://github.com/Uderiel/Epi-Center/blob/main/rebuild/hub/index.html) | **USER ACCEPTED — 5/5 PASS** |
| **v1.0.31 — Universal save-slot entry** | **[Open Epi-Center v1.0.31](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.31)** | [Title screen](https://github.com/Uderiel/Epi-Center/blob/main/rebuild/title-screen/index.html) · [Hub](https://github.com/Uderiel/Epi-Center/blob/main/rebuild/hub/index.html) | **USER ACCEPTED — 9/9 PASS** |
| **v1.0.30 — Dev tab & meter repair** | **[Open v1.0.30 preview](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.30)** | [Hub source](https://github.com/Uderiel/Epi-Center/blob/rebuild/1.0-foundations/rebuild/hub/index.html) | Fix committed; browser acceptance pending |
| **v1.0.29 — Dev simulation QA** | **[Open v1.0.29 preview](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.29)** | [Hub source](https://github.com/Uderiel/Epi-Center/blob/rebuild/1.0-foundations/rebuild/hub/index.html) | Source committed; live preview and acceptance testing pending |
| **v1.0.28 — Title Screen** | **[Open v1.0.28 preview](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.28)** | [Title screen HTML](rebuild/title-screen/index.html) | Preview path recorded; live deployment/version still needs browser acceptance verification |
| Legacy v0.8.x | [Main published site](https://uderiel.github.io/Epi-Center/) | [Legacy build files](https://github.com/Uderiel/Epi-Center/tree/main) | Separate legacy site; do not confuse with v1.0 |

**Current active development branch:** `rebuild/1.0-foundations`.

**Rule for all subsequent releases:** update this index with a stable direct playable link, version, source path, and verification status. Never replace a previous version's entry without preserving its historical link. Include the same link in every test checklist.

## Encounter outcome contract — Chunk 1 (2026-10-28)
- Added `rebuild/combat/encounter-contract.js` on main and rebuild branches. Pure, standalone outcome record: separate tactical result, objective result, per-participant freedom, consequences and available actions, events, and `appliedToPersistentState:false`. Validates enumerated states and unique participant IDs. No gameplay UI, save mutation, mastery, transformation-stage or faction behavior changed. **Source committed; automated execution/browser validation and user acceptance not claimed.** Next chunk: map both combat prototype outcome shapes into this contract without changing rules, then decide the first post-encounter continuation rules with owner.

## Development continuity — READ IN THIS ORDER

1. **[Development Master Plan](docs/DEVELOPMENT-MASTER-PLAN.md)** — authoritative phase-by-phase dependency gates, tests, decisions, end-to-end roadmap and new-chat instructions.
2. **[Current Status](docs/CURRENT-STATUS.md)** — accepted baseline, immediate next work and blockers.
3. [Development changelog](CHANGELOG.md) — changes and acceptance by version.
4. [Build progress and acceptance handoff](docs/BUILD-PROGRESS-AND-TEST-HANDOFF.md) — historical decisions, incidents and evidence.

**Important:** version query parameters on the mutable preview HTML do not guarantee immutable historical code. Treat prior build links as historical navigation records until versioned snapshots are established in Phase 0.
