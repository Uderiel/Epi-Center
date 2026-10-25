# EPI-CENTER — LIVE TEST CHECKLIST
Build: v0.8.61 | Results received 2026-10-25 | 16 Pass / 8 Fail / 1 Not tested
User-confirmed PASS: A1–A7, B1–B6, C3, C5, C6.
User-confirmed FAIL: C1, C2, C4, D1, D2, D5, D6.
NOT TESTED: D4.
Note: D3 PASS for the *existing use/replace button*, but tester reports that the behavior is conceptually wrong; real equipped protection with persistent saturation is NOT IMPLEMENTED.
REGRESSION: after timed 24-hour expiry, curling/skincare feed reports reapplication but Character appearance does not update.
Defects: conditioner carried but missing in inventory/equip; standalone shampoo/conditioner/bath pillow/toilet paper interactions lack context; necklace and earrings still missing; add ring(s) and bracelet for slot tests; flats still get worn/dirty laundry condition; heating pad should be carried, used on couch/armchair/bed and put away.
Design decisions: ordinary wiping is implicit in toilet action; shampoo/conditioner only during actual washing; period products are equipped and progress through dry/used/soaked/overflowing states; physical items persist in one inventory.
Do not advance to Erin workplace/autonomy until apartment systems verified.

# EPI-CENTER — LIVE TEST CHECKLIST
Build: v0.8.61 | Active section: Bathroom
[x] user-confirmed; [ ] outstanding.

## 1. Bathroom and grooming — ACTIVE
[x] Tested sink/curling iron navigation returns without losing controls.
[x] Curling and skincare appear in Character and survive reload.
[x] Curling and facial care expire after 24 in-game hours.
[x] Bath clears curls, skincare and makeup.
[x] Bubble bath is acknowledged in the bath.
[x] Makeup apply/remove updates Face.
[x] Toothbrush works and Brush Teeth is one combined control.
[ ] Verify only one Apply Makeup and Remove Makeup control in Sink & Mirror.
[ ] Dresser lotion applies and updates Scent & Physiology, not Face.
[ ] Dresser perfume applies and updates Scent & Physiology.
[ ] Lotion/perfume expire within 24 hours and clear appropriately when bathing.
[ ] All fixtures and item views use one contextual panel, no duplicated menus.
[ ] Shampoo used while washing hair; toilet paper contextual to toilet.
[ ] Pads/tampons usable and replaceable during menstruation.
[ ] Neglecting period protection can cause realistic leakage and clothing stains.
[ ] Heating pad requires sensible resting context.
[ ] Products change actual persistent state, not just activity feed.
[ ] Bathroom navigation and save/reload regression across multiple fixtures.

## 2. Clothing, accessories and laundry — PENDING
[ ] Necklace/earrings show when equipped and remain retrievable.
[ ] Shoes have no laundry condition and cannot enter hamper.
[ ] Deposit All / Retrieve All work.
[ ] Washer interaction does not force bedroom detour.
[ ] Legacy blouse and pantyhose reconciled without duplication.
[ ] Single item identity across inventory, equipment, hamper, washer, closet and dresser.

## 3. Transformation and appearance — PENDING
[ ] DEV stages 2/20/21/22/23 synchronize appearance, portraits and physical traits.
[ ] Stage 23 has no lingering 'shifting' descriptions.

## 4. Erin influence and autonomy — PENDING
[ ] At 100% influence Erin actually performs NPC routines, not just announces them.
[ ] Morning/evening routine triggers at correct times and does not repeat erroneously.
[ ] Erin removes makeup before sleeping when she has control.
[ ] Player can attempt persuasion; trust does not equal automatic agreement.
[ ] Office unavailable means no work-absence penalty.
[ ] Physical actions interpreted as actions, not unrelated dialogue.

## 5. Physiology, menstrual cycle, notifications — PENDING
[ ] Needs and hygiene state support future Sims-like display.
[ ] Menstrual cycle and protection tested during period.
[ ] Dismiss All notifications; no forced scroll; Mark Read only for unread.
[ ] Mental resilience recovery has accurate source.

## 6. General regression — PENDING
[ ] No duplicate cards between live feed and text input.
[ ] Android Chrome navigation, all tabs, Back controls, saves and inventory.
