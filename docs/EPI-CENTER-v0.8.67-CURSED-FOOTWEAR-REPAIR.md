# v0.8.67 — Cursed Footwear and Exclusive Feet Slot Repair

> Release update (2026-10-25): all thirteen required suites have now passed against the final unchanged build, including supplemental 38/38. The owner conditionally authorized publication; see [final release record](EPI-CENTER-RELEASE-v0.8.67.md). Publication-status and previously declined/partial-suite statements below describe earlier development checkpoints. Physical Android/manual acceptance are still pending.

Status: local candidate, not committed or published. Published v0.8.66/index.html are unchanged.

## Actual root cause

The problem was not two real red-heel objects, nor a need to make the cursed pair ordinary shoes.

- itemAction850's v0.8.62 footwear override (around line 4912) sets an ordinary shoe's location to equipped directly. It bypasses the older same-slot replacement loop and checks no other shoe.
- The cursed handlers use h63().worn; syncRedHeels865 links that state to the same existing physical object, items850.objects['shoes-0'].
- wearHeels63's v0.8.65 wrapper (around line 5181) cleared ordinary shoes when the cursed pair was equipped, but the reverse operation had no guard. Ordinary-versus-ordinary had the same missing occupancy check.
- The catalog originally classified shoes-0 as clothing while a separate cursed-heels card also displayed it. Those were duplicate presentations of one linked item, not justification for another physical copy.

The footwear-specific override's missing shared occupancy enforcement is the operative defect. Relabeling alone would not repair it.

## Narrow repair

- Retain unique ID shoes-0, slot shoes, existing object record, legacy ownership marker Erin’s Red Heels, h63 cursed state, and existing save keys.
- Catalog classification: kind cursed, cursed tag, sourceOfTransformation true; display name Erin’s Favorite Red Heels (Cursed). The physical slot remains footwear/Feet.
- occupiedFootwear867 reads the synchronized physical catalog. Both ordinary and cursed equip paths reject a different equipped pair. The player must unequip first; a new pair does not silently replace the cursed pair.
- All existing cursed wear/removal handlers remain authoritative. Equipping still triggers the original transformation; existing removal rolls/mastery behavior remain. Failed removal leaves the pair worn. Removing or storing does not reverse transformation.
- Put away is blocked while the cursed pair remains worn. The old accessory entry point is also routed through the cursed handlers, preventing a bypass.
- Equipment retains one tagged cursed entry under Feet, including current physical status and the appropriate Equip/Unequip/Put away/Take controls. Only the redundant standalone legacy card was removed. The equipped cursed item remains visible.
- Closet/detail rendering uses the same cursed controls and physical record. No second catalog row, item ID, equipment copy, or renamed save marker was introduced.
- Normal footwear no longer bypasses the occupied feet slot.

Functions: occupiedFootwear867, final wearHeels63 and itemAction850 wrappers, accessory855 compatibility wrapper, cursedFootwearControls867, final detail850/equipment67 wrappers, reconcileFootwear867 and final items850 wrapper. Repair begins around line 5708 of the candidate.

## Existing contradictory saves

reconcileFootwear867 acts only when multiple shoe objects are marked equipped.

- If the cursed pair is worn, it stays worn. Conflicting ordinary pairs are returned to inventory.
- If multiple ordinary pairs are marked equipped, all are returned to inventory so the player selects a pair; no preferred or most-recent pair is invented.
- Items and custom metadata are preserved. No cursed removal roll is bypassed and no transformation/ownership is changed.
- Each correction records moved IDs/locations in additive s.footwear867.reconciliations and announces what moved in the existing activity feed.
- A clean subsequent reload does not repeat the correction. Already-valid single-pair saves remain unchanged.

## Browser verification after this repair

Disposable Chrome profiles only:

| Suite | Result |
| --- | --- |
| Cursed identity/tag, trigger, failed/successful original removal, slot conflicts, canonical Equipment display, storage and reload | 22/22 passed |
| Ordinary/ordinary, cursed/ordinary, ordinary/cursed, carried/stored/equipped transitions with real reload after each phase | 21/21 passed |
| Invalid legacy ordinary/cursed overlaps, retained metadata, original transformation/ownership, idempotent reload | 9/9 passed |
| Existing autonomy engine/integration | 61/61 passed |
| Existing influence/dialogue | 60/60 passed |
| Full bed sleep | 17/17 passed |

These suites overlap. Focused runs include 390x844 layout and runtime-error checks; do not call them physical Android or owner manual acceptance.

The earlier broad ten-suite regression request was declined. The owner subsequently authorized this specifically requested footwear matrix and autonomy-preservation scope, which completed. Appearance/import/onboarding suites from the pre-footwear checkpoint are historical evidence; the entire broad suite was not rerun after this repair.

The previously reported 37/38 supplemental result and reproduced v0.8.66 double-equip failure are historical diagnostics preceding this fix. Do not report that old failure as an unresolved defect in the repaired candidate without retesting.

## Manual checks

1. Collect the single cursed pair normally and equip it; confirm transformation begins and only one Feet entry appears with Cursed item tagging.
2. Try ordinary shoes while the cursed pair is worn, and the cursed pair while ordinary shoes are worn: both second-equip attempts must be refused.
3. Try two ordinary pairs; explicitly remove the first before equipping the second.
4. Attempt cursed removal through its existing rules; failure must leave it worn, success must return it carried without reversing anatomy.
5. Put away, reload, retrieve and re-equip the same cursed pair. Confirm no duplicate courtyard pickup or ownership marker.
6. Review the explicit inventory-return policy for old overlapping saves.
7. Physical Android Chrome and owner acceptance remain pending.

## Candidate SHA-256

EFAD3BFB70ACFE629C4E53AF71129C8867D4B8D4807717D61ECDE6D910BE7B0B
