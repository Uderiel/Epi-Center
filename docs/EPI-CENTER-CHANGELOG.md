# EPI-CENTER — DEVELOPMENT CHANGELOG

**Latest recorded build:** v0.8.51 (2026-10-24). These entries summarize available build history and user reports; they are not proof of successful end-to-end testing.

## v0.8.51 — Equipment, Bathroom & Cycle (experimental)
- Added eight appearance/equipment regions, with per-item controls intended to coexist with cursed red heels and Bella skinsuit.
- Added interactable bathroom areas including sink, cabinets, toilet, bath/shower, toiletries, hair tools, menstrual supplies and heating pad.
- Added private menstrual-cycle tracking based on in-game days (currently fixed 28-day cycle, five-day period; variable physiological simulation pending).
- Attempted to unify new physical garments with the hamper/washer lifecycle and retain condition when stored.
- **Unverified:** full cross-screen inventory consistency, older-save migration, browser interaction, and cycle/time-skip correctness.

## v0.8.50 — Layered Belongings
- Introduced selectable dresser top/drawers and individual lotion, perfume, underwear and clothing objects.
- Added item actions including Wear, Carry, Unequip, and Put Away; closet sections differentiated.
- **Confirmed by user:** floral perfume application, beige bra equip, unequip as worn, deposit in hamper, and persistence across navigation/save; bra no longer present in drawer after moving it.
- **Reported defect:** new hamper showed beige bra while legacy laundry panel showed empty; Equip tab omitted ordinary clothing.

## v0.8.49 — Private Rooms & Laundry Foundation
- Refined bedroom, closet and bathroom descriptions; added bath/makeup interactions and provisional laundry flow with two worn test garments.
- **Confirmed by user:** bath and makeup actions worked.
- **Reported gaps:** private-room objects were mainly descriptive; bathroom lacked accessible sink/medicine cabinets, toilet, toilet paper and hair tools. Contradictory laundry panels.

## v0.8.48 — Home Groceries & Live Activity
- Added grocery delivery/put-away workflow and live activity/feed improvements; provisional private rooms were introduced.
- Design correction: private rooms must reflect user-approved layout and individually retrievable objects.

## v0.8.47 and earlier — Iterative home and roleplay systems
- Hallway and companion context, living room, kitchen/dining, feed, movement, dialogue and household mechanics were developed iteratively. Earlier builds include v0.8.40–v0.8.47 and foundational prototype systems.
- Refer to the corresponding HTML source for precise implementation history; this is not a complete retroactive line-by-line changelog.

## Open issues and priorities
1. Test v0.8.51 on Android Chrome, including old saved-game compatibility, every bathroom object, equipment layering, item condition, washer/hamper and save/reload.
2. Consolidate item state into one authoritative record; eliminate legacy test inventory and contradictory panels.
3. Finish reusable overlay/layer navigation consistently across dresser, closet, bathroom, hamper, Equip tab.
4. Investigate mental resilience 'earlier gameplay routine' audit and unintended state changes.
5. Extend cycle with bounded variation, believable symptom/self-care effects, and time-skip testing.
6. Flesh out Erin's workplace, coworkers, boss, calendar, phone, daily schedule and independent preferences.
7. Test low/high influence, relationship/trust tiers, willing mastery, rejection/resistance, boundaries and time frames before Erin-T.
8. Build Erin-T only as a separate autonomous NPC after Erin's humanoid template is robust.
9. Prepare stable `index.html` and feedback/bug reporting for former Discord RP playtesters.

## Release note template

### vX.Y.Z — Title / date
**Added:** ...  
**Changed:** ...  
**Fixed:** ...  
**Tested:** ... (specific device/browser/scenario)  
**Known issues:** ...  
**Next:** ...
