# Temporary world time — v1.0.47

One persisted, action-driven clock controls every Hub location image. No real-time tick or offline catch-up. It starts at **Day 1, 09:00** for a new save, matching the original shared-clock default. It is independent of the device timezone.

## Legacy source and action measures

Audited `epi-center-v0.8.84-attribute-foundation-corrections.html`: `erin817` defaults around line 2156; `clock818` / `advance818` around 2213–2216; ordinary connected-route travel `advance818(8)` around 2644–2652; short explicit inspections `actionMinute836(1)` around 3370–3382; world observation/survey five-minute measures around 2199/2877; final private dialogue `advance818(2)` around 5690; one-hour wait around 2203/2452. Menus explicitly spend no time (comment around 3503). Reused the time measures, not Erin-specific authority, routines, regeneration or relationship rules.

| Action | Minutes |
| --- | ---: |
| Successful route step, including each Hub edge | 8 |
| Explicit surroundings inspection / short ordinary Location text action | 1 |
| Conversation / NPC, Player or private Form message | 2 |
| Survey nearby routes | 5 |
| Wait one hour | 60 |
| Open/close Map, Path, artwork, tabs or drawers; reload | 0 |
| Rejected travel / missing recipient / empty message | 0 |

Combat rounds retain the existing engine; no round duration was authored, so they do not acquire an invented world-minute cost. Wider-area waiting/survey/inspection is blocked during combat. Explicit developer time simulation remains available as QA.

## Clock, migration and needs

`worldClock.minutes` is elapsed minutes since Day 1 midnight; `elapsed` counts recorded progression. The header shows Day/HH:MM and Daytime/Nighttime. New feed messages carry the game timestamp; older wall-clock messages are preserved as recorded. Midnight increments the day.

Migration priority: existing valid world clock; legacy `erin817.day/clock/minute`; a recorded Day/HH:MM label; otherwise 09:00 plus prior `devVitals.minutes`. Migration runs once and does not apply past needs accrual again. Subsequent progression updates the existing Hunger +1/60 min, Bladder +1/30 min, Fatigue +1/90 min rates, once per actual clock advance. Health/Stamina/Resolve/Arousal are not refilled by advancing time.

## Artwork window and supplied panels

- Daytime: **07:00 inclusive to 19:00 exclusive**.
- Nighttime/evening: **19:00 inclusive to 07:00 exclusive**.
- The day/night collages both map rows NW/N/NE, W/Spire/E, SW/S/SE.
- Panel gutters are excluded, then each supplied panel is cropped proportionally and exported at **1100×733**; no stretched or regenerated imagery. The collage has unequal panel sizes, so the aspect-preserving crops retain the main subject/store signage.
- `hub-art.js` selects by the canonical location and game-clock phase. Play and full-image view share that selection. All eighteen asset paths, crop boxes and hashes are in `releases/v1.0.47-art-assets.json`.
