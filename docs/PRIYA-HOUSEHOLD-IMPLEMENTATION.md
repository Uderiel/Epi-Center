Published and verified: v1.0.103, runtime `76c4942`;1,090automated cases and65local/65public browser groups pass. Public source bytes match. See [current status](CURRENT-STATUS.md) and [owner checklist](V1.0.103-OWNER-ACCEPTANCE.md).

# Priya household actions — v1.0.103

This release implements the owner-approved selection, distinct from Erin’s furniture, wardrobe and supplies. Shared room geometry, drawer frames, clock, body guards and grooming conventions are reused. Care records describe the same player body; Priya’s product ownership/application counters and food/wardrobe records remain separate from Erin’s inventory.

## Wardrobe

17 individual pieces form eight coordinated presets: teal/cream work, ivory/stone work, taupe/oatmeal work, casual hosting, home, yoga, jogging and bedtime. Guests can inspect pieces, assemble suggestions and save three custom combinations. Only coherent dress-or-top/bottom combinations are accepted. Clothes remain owned by Priya, never acquired by the player.

When an invited friend speaks to Priya in the same room, suggesting a preset starts a real saved job: connected1-minute room steps to the closet,8minutes changing privately, and the return route. From the living room this totals14minutes. Actual worn piece locations and her recorded attire change; her old pieces return to their storage. Entering the closet pauses the private change; combat, incapacity or departure interrupts it. Reloads preserve progress, and no offscreen clothing-change narration is sent to a remote player. Outfit suggestions retain the established footwear/unique-flats lifecycle rather than duplicating or replacing that pair. Full autonomous daily wardrobe scheduling is not added.

## Kitchen

Priya has finite, saved stock of ginger-cardamom black tea, mint tea, milk, sweetener, crackers, almonds, dark chocolate, fruit, yogurt, granola, grains and vegetables. Preparing a serving deducts actual stock once. Tea takes5minutes to brew, snacks1minute to serve, and a grain/vegetable bowl15minutes to prepare. Milk/sweetener or yogurt/granola additions use actual extra stock. One unfinished serving per recognized guest prevents duplicate preparation.

Enjoying a prepared serving takes5minutes, clears it and leaves a dish. Snacks/meals use existing hunger-relief values; tea grants no invented healing. Washing dishes costs5minutes. Food stock does not refill on reload; no new automatic shopping/restocking system is claimed. Human food/utensil actions require the appropriate body and permission; the deferred cat feature receives no assumed dietary behavior.

## Care

23 distinct care products/tools are browsable and usable: shampoo, conditioner, leave-in cream, comb/brush/ties/clip, cleanser/moisturizer/sunscreen/hand cream/lip balm, light makeup products, herbal perfume, body wash/deodorant/towel/washcloth and ordinary shoe-care tools. Shampoo/conditioner selections apply during an actual12-minute shower. Product applications and actual body grooming records are saved; private dialogue receives actual product names. Separate bottles remain Priya-owned and do not decrement or move Erin’s supplies. Reusable products track applications rather than invented remaining volume.

Erin’s existing shower now uses available shampoo/conditioner, supports saved product selections, and retains bath-only preparations through intervening showers. Bath additives/pillow apply to actual baths. Original care durations and trust/resource caps are preserved. No new disease, medication dosing or health system is introduced.

## Access, interaction and narration

Actual home/awake presence and a recognized friend’s permission grant normal entry into Unit2F, independent of flats, cat or romance. Permission is identity-bound; mere form ownership or changing a display name cannot borrow it. Named future Lena/Maya identities honor the policy without spawning those unimplemented NPCs. All connected rooms/drawers are accessible to the invited guest; personal belongings remain privately owned.

World text can route explicit household verbs, and buttons perform the same backend actions. Questions/negations stay read-only. Outfit/food/care receipts give the actual completed state to narration and private dialogue. AI cannot invent stock, dress anyone, feed a guest, create attendance or award relationships. Cat/collar and broader NPC social scheduling remain deferred.

## Verification

1,090named automated cases plus entity assertions across60suites and65local Chromium groups pass. Tests include ownership separation, finite stock and ingredient conservation, failed/duplicate actions, saved custom outfits and jobs, privacy and interruptions, every care item, old-save preservation, actual UI preparation/consumption/outfit/shower controls, all three NPCs, drawers, Erin, flats and mocked AI behavior. No real owner-save, native Android or paid-model quality test is claimed. Public verification is recorded separately after deployment.
