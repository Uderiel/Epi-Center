# Central district map — November 1, 2026

Current v1.0.49 correction: [Hangry Fangs](HANGRY-FANGS-QUEST.md) assigns Kibbles to NE Alley Crate (#73) and implements the return-to-Eve quest. The route is implemented/tested; owner acceptance and post-defeat internal mastery remain pending. Map now uses exploration fog and examination-gated details, with optional owner-reference labels. Statements below about full visibility or unassigned Kibbles placement are historical v1.0.48 context, superseded by this note. Maintain [OPEN-TASKS-AND-DECISIONS](OPEN-TASKS-AND-DECISIONS.md) on every update.

Owner source: [4248.jpg](design-references/central-district-map-4248.jpg). SHA-256: a5c4ae8ef54a4a8be77c82370634bfce0eac413dfb764000b3a612a992e538e1. Preserved original sheet, including crossed-out entries and correction arrows. Its 90/92/93 arrows move the NW labels down into the overwritten row; final NW alley triangle matches the other quadrants. The struck-through building line is not a separate location; Daily Needs is #66 as corrected at the bottom.

## Implemented travel and map contract

- Map (bottom navigation) shows the full 96-location district, not a local compass slice. All locations remain visible and selectable from anywhere. Fit shows all eleven rows/columns without an inner scroll crop; larger zoom levels scroll. Full location details and travel status appear below the grid.
- Path is a local 3×3 compass with up to eight destinations. Every occupied adjacent square, including diagonals, is reachable except alley/building walls. Moving never crosses a blank cell or skips a square.
- Alley sections connect to adjacent sections in the same quadrant and adjacent street exits. Both directions of alley/building edges are forbidden, including diagonals.
- All 96 nodes are reachable through the graph from Spire. This does not author their interiors, NPCs, quests or encounter triggers.
- Existing saves keep canonical Hub/store IDs; the old Hub aliases still migrate to Spire. Cherished Touch moves to (1,-2), north of NE park. Existing completed journals are historical records and are not rewritten; new First Steps records use the new route.
- Map selection/zoom is free; successful adjacent travel still costs 8 minutes, returns to Play/feed, preserves resources and cannot run during combat or with unusable legs.

## Source position index (reference numbers are not player labels)

The exact 11×11 number matrix is in hub-world.js. Coordinates below use Spire (0,0); north is negative y.

| Reference | Player-visible location | x | y |
| --- | --- | --- | --- |
| 1 | Central Hub NW | -1 | -1 |
| 2 | Central Hub N | 0 | -1 |
| 3 | Central Hub NE | 1 | -1 |
| 4 | Central Hub W | -1 | 0 |
| 5 | Central Hub Spire | 0 | 0 |
| 6 | Central Hub E | 1 | 0 |
| 7 | Central Hub SW | -1 | 1 |
| 8 | Central Hub S | 0 | 1 |
| 9 | Central Hub SE | 1 | 1 |
| 10 | N. Main Street (1) | 0 | -2 |
| 11 | N. Main Street (2) | 0 | -3 |
| 12 | N. Main Street (3) | 0 | -4 |
| 13 | N. Main Street (4) | 0 | -5 |
| 14 | E. Docks Street (1) | 2 | 0 |
| 15 | E. Docks Street (2) | 3 | 0 |
| 16 | E. Docks Street (3) | 4 | 0 |
| 17 | E. Docks Street (4) | 5 | 0 |
| 18 | S. Farm Road (1) | 0 | 2 |
| 19 | S. Farm Road (2) | 0 | 3 |
| 20 | S. Farm Road (3) | 0 | 4 |
| 21 | S. Farm Road (4) | 0 | 5 |
| 22 | Entertainment Row (1) | -2 | 0 |
| 23 | Entertainment Row (2) | -3 | 0 |
| 24 | Entertainment Row (3) | -4 | 0 |
| 25 | Entertainment Row (4) | -5 | 0 |
| 26 | Outerloop Road (1) | 1 | -5 |
| 27 | Outerloop Road (2) | 2 | -5 |
| 28 | Outerloop Road (3) | 3 | -5 |
| 29 | Outerloop Road (4) | 4 | -5 |
| 30 | Outerloop Road (5) | 5 | -5 |
| 31 | Outerloop Road (6) | 5 | -4 |
| 32 | Outerloop Road (7) | 5 | -3 |
| 33 | Outerloop Road (8) | 5 | -2 |
| 34 | Outerloop Road (9) | 5 | -1 |
| 35 | Outerloop Road (10) | 5 | 1 |
| 36 | Outerloop Road (11) | 5 | 2 |
| 37 | Outerloop Road (12) | 5 | 3 |
| 38 | Outerloop Road (13) | 5 | 4 |
| 39 | Outerloop Road (14) | 5 | 5 |
| 40 | Outerloop Road (15) | 4 | 5 |
| 41 | Outerloop Road (16) | 3 | 5 |
| 42 | Outerloop Road (17) | 2 | 5 |
| 43 | Outerloop Road (18) | 1 | 5 |
| 44 | Outerloop Road (19) | -1 | 5 |
| 45 | Outerloop Road (20) | -2 | 5 |
| 46 | Outerloop Road (21) | -3 | 5 |
| 47 | Outerloop Road (22) | -4 | 5 |
| 48 | Outerloop Road (23) | -5 | 5 |
| 49 | Outerloop Road (24) | -5 | 4 |
| 50 | Outerloop Road (25) | -5 | 3 |
| 51 | Outerloop Road (26) | -5 | 2 |
| 52 | Outerloop Road (27) | -5 | 1 |
| 53 | Outerloop Road (28) | -5 | -1 |
| 54 | Outerloop Road (29) | -5 | -2 |
| 55 | Outerloop Road (30) | -5 | -3 |
| 56 | Outerloop Road (31) | -5 | -4 |
| 57 | Outerloop Road (32) | -5 | -5 |
| 58 | Outerloop Road (33) | -4 | -5 |
| 59 | Outerloop Road (34) | -3 | -5 |
| 60 | Outerloop Road (35) | -2 | -5 |
| 61 | Outerloop Road (36) | -1 | -5 |
| 62 | Cherished Touch | 1 | -2 |
| 63 | Burke's Sweets | 2 | -1 |
| 64 | Form Repository | 2 | 1 |
| 65 | Pet Boutique | 1 | 2 |
| 66 | Daily Needs | -1 | 2 |
| 67 | Neko Cafe | -2 | 1 |
| 68 | Zen Shop and Spa | -2 | -1 |
| 69 | Going Out of Business | -1 | -2 |
| 70 | NE Alley (1) | 1 | -3 |
| 71 | NE Alley (2) | 2 | -3 |
| 72 | NE Alley (3) | 3 | -3 |
| 73 | NE Alley (4) | 2 | -2 |
| 74 | NE Alley (5) | 3 | -2 |
| 75 | NE Alley (6) | 3 | -1 |
| 76 | SE Alley (1) | 3 | 1 |
| 77 | SE Alley (2) | 2 | 2 |
| 78 | SE Alley (3) | 3 | 2 |
| 79 | SE Alley (4) | 1 | 3 |
| 80 | SE Alley (5) | 2 | 3 |
| 81 | SE Alley (6) | 3 | 3 |
| 82 | SW Alley (1) | -3 | 1 |
| 83 | SW Alley (2) | -3 | 2 |
| 84 | SW Alley (3) | -2 | 2 |
| 85 | SW Alley (4) | -3 | 3 |
| 86 | SW Alley (5) | -2 | 3 |
| 87 | SW Alley (6) | -1 | 3 |
| 88 | NW Alley (1) | -3 | -1 |
| 89 | NW Alley (2) | -3 | -2 |
| 90 | NW Alley (3) | -3 | -3 |
| 91 | NW Alley (4) | -2 | -2 |
| 92 | NW Alley (5) | -2 | -3 |
| 93 | NW Alley (6) | -1 | -3 |
| 94 | The Doll House | -4 | -4 |
| 95 | The Cloistered Madame | 4 | 2 |
| 96 | Nip Tuck Cosmetics | -4 | 3 |

## Gated content

The sheet names no Kibbles encounter tile. None is assigned by inference from old proposed routes. The intervening authored location content/complete canonical Kibbles route still needs completion/acceptance before the Eve quest reminder can fire. Eve's Kibbles giver assignment, quest details and tasks then precede Kibbles influence/relationship/communication design. Mastered Kibbles does not override the player's intentions.

