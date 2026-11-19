# Player needs consequences — owner-approved implementation

## Approved rules

Owner approves **1 point every five in-game minutes while a need is at100**:

| Need at100 | Damaged resource |
| --- | --- |
| Hunger | Health |
| Bladder | Resolve |
| Fatigue | Stamina |

After **ten consecutive minutes at full bladder**, and every further ten minutes while it remains full, resolve a **25% accident check**. Owner explicitly chooses **accident first** when that check and Resolve damage share a timestamp. A successful check empties bladder to0 and stops that moment’s pressure damage; it does not restore previously lost Resolve. A failed check leaves the scheduled Resolve damage in place.

The existing **zero Resolve in an unmastered form → permanent binding** consequence is retained. There is no1Resolve safety floor. Already mastered forms and original humans continue to follow existing binding applicability. Health/Stamina clamp atzero; this does not add a new collapse, death, hostility or combat-trigger rule.

## Timing and persistence

`needs-consequences.js` owns scoped player/body full-need episodes, five-minute damage deadlines, ten-minute checks, saved random stream and bounded outcome history. A newly loaded older save does not incur invented past damage: the first observed full episode begins its clock at the current action interval. Relief below100 ends that episode; reaching100 again starts a new one. Inactive-body time does not accrue retroactive damage.

`advanceGameTime` processes real elapsed minutes through the existing clock/actor pipeline, so relief during an action can stop later damage and waiting/travel/live time share the same timing. Original action duration and receipt are preserved. The special hourly Wait transformation remains exactly one alternating+2/+3stage application, distinct from ordinary exposure; it is not repeated once per minute or mixed with an extra exposure stage.

Applicable known biological player bodies use the shared resolver. Inanimate footwear and unsupported mechanical physiology do not receive assumed human hunger/bladder/fatigue effects. An authored form can declare its need applicability. Existing needs amounts remain in the actual body/controller’s current needs record; this is not a new reset-on-transform policy. NPC accident behavior is not silently created.

## Soiling, changing and washing

An actual accident marks the recorded **worn garments covering hips/legs** as urine-soiled, preserving their item identity, owner, custody and inventory. Tops and jewelry are not indiscriminately dirtied. No fabricated clothing or free item is granted when no suitable worn garment is recorded.

Continuing to wear a soiled garment increases its saved continued-wear duration and emitted urine-scent evidence. Removing/changing it stops that worn source; it does not clean or delete the carried dirty garment. Rewearing soiled clothes restores the source. The effect tracks actual worn items, not an unequipped form’s imaginary outfit.

Purchased garments can now use the **existing Unit3C bedroom hamper and household washer**: remove/carry → deposit → load → existing40minute wash/dry → collect the same clean item. Washing clears its soiling metadata. This does not invent a public laundromat, a new residence or access to Charity’s private laundry.

## Scent/danger boundary

Existing worn-effect signals, scent detection and outdoor trail records carry actual urine-scent source/items/continued-wear evidence. Scent masking hides the current/new trail scent under its established rule; old trails are retained. Ordinary changing does not erase trails already left.

**Roaming danger-area creature encounters and numerical smell-sensitive detection escalation are not implemented in the existing world.** This work provides their real scent evidence, not invented creatures, new attack chances or fabricated encounters. Exact creature sensitivity/range/probability tuning still requires the owner-reviewed danger-system design. Do not claim the player is already being attacked because of this feature.

## AI and privacy

Private active-form/player-experience packets include only recorded current needs/outcomes and worn scent; backend projection preserves them. Nearby visible NPCs may receive the observable urine odor, not private need numbers or accident history. Remote NPC-event narrators do not receive the player’s private needs/clothing state. AI cannot decide a roll, create an accident, restore resources or assume an emotional reaction. Numerical results and the binding warning remain canonical mechanics receipts.

## Status

Development only, not published. See audits/PLAYER-NEEDS-CONSEQUENCES-VERIFICATION.json for final verification. No paid model request or production Worker update is implied by source tests. Prepared Worker bundle includes the new allowed fact projection; GitHub/Cloudflare automatic production deployment is available when publication is authorized.

Verification: **1,533 automated cases across90suites**, plus **47 isolated browser checks** (16needs/laundry/binding/Wait,13Cherished retail,18Burke retail) passed. No owner saves or paid provider requests were used.
