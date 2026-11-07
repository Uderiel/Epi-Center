## v1.0.74

F is now Erin’s Reception. The existing southern connection and west door to G serve the [approved reception layout](ERIN-RECEPTION-F.md).

# Navigation and path-layout contract — v1.0.66

Owner approved the simplified path-first drawing supplied in this session (01-image-1793916264168.jpg). For future locations, first approve the navigable graph, doors and mini-map; only then design detailed room fixtures/content. This drawing supersedes the provisional cubicle placement, not the established door restrictions.

## Layout

| Band | West | Center | East |
| --- | --- | --- | --- |
| North rooms | Marketing break K | Printers/cooler L | Sales break J |
| North circulation | North Hallway | North Hallway | North Hallway |
| Service block | Women’s restroom D/B | Stairs I / Elevators A | Men’s restroom D_E/B_E/C |
| South circulation | South Hallway | South Hallway | South Hallway |
| Work rooms | Marketing cubicles H_W | Conference E | Sales cubicles H |
| Southern rooms | Richard’s office G | Erin’s office F | Michael’s cubicle M |

West/East Hallways serve the conference side doors; West/East Outer Hallways provide perimeter circulation. South Connection links the lower circulation routes. Walls are not doors: G only via F, F via its south doorway, M only via H, break rooms via North Hallway, exits only A/I. Stable room IDs remain compatible with saves. Existing room functions use the same graph as route planning; the mini-map is a simplified orientation aid, not new adjacency.

## Destination travel

World Map: a single tap on a known destination starts Dijkstra’s minimum game-time route through known nodes only. Outdoor edge cost remains eight minutes. Unknown intermediate locations cannot be used as shortcuts. Office/apartment Path: tap a room, automatically traverse legal intermediate rooms at one minute per move. Building exits cost one minute. Selection/Back and same-room viewing are free. World targets selected indoors first traverse a legal exit; destination buildings are reached outside, requiring explicit entry.

A saved data-only queue records destination, ordered edges, progress, expected position and pause reason. One leg is driven every 650ms in focused visible Play/Map, including an open Path reference. Each leg invokes canonical movement and time, so needs, worn exposure, Richard schedules and form decisions continue. Denied canine travel retains its existing eight-minute contested-action time. Authority and anatomy are rechecked per step. A form displacement interrupts the queue instead of teleporting back.

Stop, focus loss, hidden state, leaving Play/Map, reload, combat, manual physical actions, or save conflicts pause. Resume replans from the current actual position; no elapsed offline catch-up. Per-slot session leases avoid double drivers. Newer saved state is adopted before pausing; a deleted/replaced slot is never resurrected. Live ambient time does not double-charge active route steps.

## Play controls

Accessible Rooms is a collapsible bar above Internal Resistance, directly above Location/NPC/Player/Form channels and text input. It contains only current-room contents (brief description and fixtures), with existing single-field furniture → drawer/section → item layers. Back removes one layer. Choose room opens the Path mini-map. Nearby object selection/Back costs no time; actions use existing costs. Office fixture inspection costs one minute, toilet use four minutes with authority/anatomy checks and bladder relief only.

Both panels expand upward over the live feed, independently, with the latest selected panel in front; the composer does not move. Collapsed arrow ▲ expands; expanded arrow ▼ collapses. Internal Resistance is gray with no available action, illuminated when a decision/resistance/escape/continuation is available. Existing cooldowns, rolls and player/form control rules remain intact.

Clock/feed display Mon–Sun (numeric Day 1 maps to Mon). Saved numeric day/minutes and schedule calculations remain unchanged. Historical Day n · HH:MM labels/text convert at display time without rewriting past dice or history.

## Verification

490 named deterministic cases plus additional entity assertions pass, including shortest weighted routes, fog, legal exits, G/F, apartment layers, interruption, resource isolation, canonical timing, original needs/resistance regressions, weekday wrap and runtime reload/hidden/focus/stale-save handling. Actual browser results are recorded separately in releases/v1.0.66-browser-checks.json. Native-device background behavior remains a manual acceptance check because the cloud environment may keep surfaces focused.
