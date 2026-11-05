## v1.0.66 layout revision

The owner’s later simplified path sketch supersedes provisional display names and Michael’s marketing-side placement: M is now Michael’s Cubicle, connected only to sales H. G remains only through F, exits only A/I. Destination maps replace manual corridor selection; the canonical door graph still governs all travel. See NAVIGATION-AND-PATH-LAYOUT-CONTRACT.md. Future location detail follows approved paths first. Historical baseline follows.

# Technology Center baseline contract — v1.0.63

Source: owner-uploaded 4289.jpg, Technology Center 3rd Floor, and explicit correction that only A/I exit and only F connects G. Drawing labels A–M describe 13 kinds of space; repeated B/D/H labels are separate physical instances. The implementation has 23 navigation zones including circulation spaces. Corridors model travel around walls rather than treating adjacent labels as connected rooms.

| Zone | Room | Direct connections |
| --- | --- | --- |
| A | Elevator Bank | CENTRAL_HALL |
| B | Women’s Restroom · Stalls | D |
| B_E | Men’s Restroom · Stalls | D_E |
| C | Men’s Restroom · Urinals | D_E |
| D | Women’s Restroom · Sinks and Mirrors | CENTRAL_HALL, B |
| D_E | Men’s Restroom · Sinks and Mirrors | CENTRAL_HALL, B_E, C |
| E | Conference Room | WEST_AISLE, EAST_AISLE |
| F | Erin’s Office | SOUTH_HALL, G |
| G | Richard’s Office | F |
| H | Sales Cubicles | CENTRAL_HALL, SOUTH_HALL |
| H_W | Marketing Cubicles | CENTRAL_HALL, SOUTH_HALL, M |
| I | Emergency Stairwell and Cleaning | CENTRAL_HALL |
| J | Sales Break Room | NORTH_HALL |
| K | Marketing Break Room | NORTH_HALL |
| L | Office Equipment | NORTH_HALL |
| M | Intern Workspace | H_W |
| NORTH_HALL | North Corridor | J, K, L, WEST_PASSAGE, EAST_PASSAGE |
| CENTRAL_HALL | Central Corridor | A, I, D, D_E, H, H_W, WEST_PASSAGE, EAST_PASSAGE, WEST_AISLE, EAST_AISLE |
| WEST_PASSAGE | West Perimeter Passage | NORTH_HALL, CENTRAL_HALL, SOUTH_HALL |
| EAST_PASSAGE | East Perimeter Passage | NORTH_HALL, CENTRAL_HALL, SOUTH_HALL |
| WEST_AISLE | Conference West Passage | CENTRAL_HALL, SOUTH_HALL, E |
| EAST_AISLE | Conference East Passage | CENTRAL_HALL, SOUTH_HALL, E |
| SOUTH_HALL | South Corridor | F, H, H_W, WEST_PASSAGE, EAST_PASSAGE, WEST_AISLE, EAST_AISLE |

Every listed connection is reciprocal. G has no exterior exit, conference door or corridor door. F has no direct break-room or conference connection. J and K each return to North Corridor; they do not directly connect to each other. Only A and I expose building exit. World routes are blocked while inside, including direct module calls and stale Map controls.

Entry is from the real #98 exterior and arrives at A. Entry/move/exit/examine cost one canonical game minute; room view/back cost zero. Typed text and UI share authority and timing. Combat and nonwalking bodies cannot move through the office; high-influence form decisions retain their resistance guard. Examination records the current room without creating rewards, people, ownership, inventory or work progress.

Persistent state is world.technologyCenter: floor, room, inside, visited, examined, view and result. Invalid room/view repair is bounded; moving to another world location clears the inside flag. Existing saves need no reset.

Baseline scope: room descriptions and navigation, not office employment simulation. Richard's office may be visited but Richard NPC is not spawned. Boss/coworkers, schedules/work tasks, pay, penalties, biometric interaction, office furniture actions and shop inventories/transactions remain for subsequent approved designs. Preserve RICHARD-NPC-DESIGN-NOTES.md for that next task. Owner is refining office details in the chat directory.
