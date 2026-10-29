
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
