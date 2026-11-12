## v1.0.85 — layered object navigation

Owner accepts the v1.0.84 work correction (“Works fine now”). G’s room-level fixtures are desk, display shelving, chairs, plants, windows/blinds, filing cabinets and east door. Desk exposes only Desktop and Desk drawers. Desktop exposes computer, scheduler, pens/nameplate and intercom; Desk drawers exposes the four existing drawers. Windows exposes the three independent blinds. Back follows one saved parent at a time. Older saved leaf views normalize into the new hierarchy; object IDs and all permissions/use effects remain unchanged. Viewing and Back are free. The room-level Work summary is omitted in G while the Work shortcut remains.

Acceptance: (1) Room list contains no drawers or desktop items. (2) Desk → Desktop → scheduler → Back returns to Desktop, then Desk, then Office. (3) Desk → Desk drawers → drawer → Back returns to drawers, then Desk, then Office. (4) Reload inside a leaf and repeat Back; confirm existing blinds, reports and locked access still work. New hierarchy owner acceptance pending; automated/publication/browser evidence is separate.

# Richard Carter’s Office G — v1.0.80

Owner-approved source: RICHARD_OFFICE_G_IMPLEMENTATION_HANDOFF.md and richard_office_G_1100x733.jpg. The JPG is copied byte-for-byte at 1100 × 733; SHA-256 `71200976189d371f2c9945fb267b966b79e5854ff18db6dad09d92773c2fead3`. Written architecture controls over image perspective. The rejected overhead image is not used.

## Scope and dependency gate

Phase 10/11 bounded Technology Center slice on existing navigation, secretary work, NPC schedule, form authority, clock and save systems. G only connects to F; conference E remains north of F. West Hallway remains outside the offices with no new doors; marketing’s east edge leaves the original corridor clear and its southern edge leaves a walkway north of G. Graph/IDs remain unchanged; mini-map remains schematic. Reception F art and accepted report/reward behavior are preserved.

Furniture: western north–south mahogany executive desk; wheeled executive leather chair and two guest armchairs; three status-conscious mahogany display units, degrees, executive photos, quarterly trophies; guest whiskey/glasses; restrained ferns; filing cabinets. Desktop computer, scheduler, signing pens, Carter nameplate and intercom are inspectable. Three independent roll-down blinds persist and change room descriptions. Existing art viewer fills the 1100 × 733 location frame.

## Access defaults

These bounded implementation defaults await owner acceptance: supplies/report handling require embodied Erin with usable human hands; private reserve requires Richard’s in-person permission. Computer access requires his biometric scan and contracts drawer his physical key. Richard must be present, able to respond and non-hostile; supervised grants last five game minutes and end if he leaves. No key, card, alcohol or documents are transferred into player inventory. A locked screen/drawer conceals current fixture results after expiration. Ordinary feed retains historical witnessed receipts. No real contact information or confidential records are invented.

All fixture actions use the existing authority, live-feed and clock pipeline (one game minute). Viewing/back remains free; existing movement costs remain. Typed inspect/use and independent open/close blind commands use the same dispatcher and avoid generic text double-charge.

## Records

Only completed, already-paid report assignments from Richard’s canonical history can be filed. Copies retain stable task ID, completion time and written sections; imported IDs prevent duplication. Current drawer capacity is four reports, an initial deterministic implementation default. Overflow moves older records to cabinets. Archive/read views group product → year → quarter (fictional calendar Year 1 starts on game day 1). Organize, archive oldest and retrieve latest archived are available. Retrieving into a full drawer moves another record back to archive; no records or gold are lost/created. Existing payment ledger is unchanged.

## Intercom boundary

Richard must be present to make/confirm a request to embodied Erin. Presence, coffee, water and legitimate assistance requests persist, permit acknowledgement/decline, and cannot duplicate a pending request. Erin is the current body, so a second Erin never appears; there is no teleport or authority bypass. Requests create no routine bonus or relationship penalty. Office beverage preparation/delivery is not implemented: UI explicitly leaves coffee/water fulfillment pending a real beverage system. Scheduler inspection uses existing schedule facts. Computer provides only an authored, bounded department summary, not a new email/calendar application or company-wide records subsystem.

## Acceptance

Implemented and automated tested; publication and managed-browser evidence are recorded separately. Owner/native-device acceptance UNTESTED. Do not label this milestone accepted until actual PASS/FAIL/UNTESTED results are recorded.

1. Enter Technology Center, follow Layout to F then G. Check approved full image and only return door east to F.
2. Inspect desk, displays, chairs, ferns and all four drawers. Ordinary body cannot access staff records; Erin can handle meeting supplies.
3. Toggle north/west/south blinds independently, reload, inspect each view. Try typed “I lower the west blind”.
4. Try locked computer/contracts drawer, then ask present Richard for authorization. Wait five game minutes or let him leave: current access must lock again.
5. Finish and deliver an existing report in F/G; receive its existing one-time 50 gold/+2 relationship. File/read it in G; filing and repeat delivery must not pay again. Later reports overflow into cabinets, retaining written sections.
6. Request water/coffee/assistance, acknowledge or decline; no extra Erin, travel, drink, payout or automatic punishment. Confirm second/third saves remain unchanged.

Next: record owner office acceptance; then implement an agreed office beverage/service slice or return to the next dependency-approved content task. Broader commuting, full-day office work, other NPC invitations, future-form adapters and existing deferred work remain open.
