# Burke’s Sweets implementation checkpoints

## v1.0.112 — checkout and preset drink preparation

The public floor now supports actual goods selection into a physical shop-owned basket, register-only payment, exact owned goods, receipts, saved stock and serialized drink jobs. The existing shared drawer system handles product, cup and serving-preference selection. Successful payment empties the basket contents but leaves the borrowed basket to return. Failed payment grants nothing and preserves selections. Customers reaching C before closing may finish checkout; leaving invalidates that arrival and completed checkout cannot reopen the after-hours ticket indefinitely.

Drinks use four-step quick-reference cards and pre-programmed presets: collect the requested cup, check supplies, select the preset, check/serve the finished drink. Payment reserves ingredients and cup once. Preparation and its result survive reload. Collection requires returning to C and grants one actual serving; it can be held, stored in inventory or consumed. Takeaway consumption leaves an actual empty cup for disposal. A wrong drink can be remade free; an already collected wrong serving must be returned unconsumed. Correction consumes actual supplies and never duplicates a serving or charge.

Initial tuning, not additional owner-approved canon: opening stock quantities, 1–3-minute machine times and a 10% preparation-mistake roll. These are explicit working defaults. Stock is finite; this release does not pretend to implement the courier’s scheduled deliveries or Tits’ morning baking.

Still deferred: full Tits NPC social/routine integration, live customer queues, daily courier stocktaking/restock, apartment/nightlife, quests, pink flavoring, cosmetics purchase prices and functional BFBFF linked bracelets. The latter remain previews and cannot be purchased as inert substitutes. Existing Cherished Touch retail remains independent.

Published and publicly verified v1.0.112: 1,376 automated cases across 82 suites, 277 local browser checks and 277 live browser checks passed. All 176 public files match gameplay commit 34fbaf95792325cbb3e67c24dfaea84dc0350204. Pages deployment 44415816678 succeeded. Existing owner saves and paid AI were not used in automated/browser testing. See V1.0.112-OWNER-ACCEPTANCE.md for the direct play link and owner checklist. The older checkpoints below are historical.

## Public fixtures, navigation and real baskets — development verified

Implemented on foundations, unpublished. Tile63 uses the owner’s A candy/B bakery/C public register/D staff preparation model. C is a customer-facing service position reached from A, not a new door or unrestricted staff-room entry. Public B→C route passes B→A→C. D is blocked. Generic business registration extends the existing navigation/scene systems; exterior travel physically exits through A. No surface edges changed.

| Fixture/position | Actions | Time | Ownership/permission |
| --- | --- | --- | --- |
| Entrance A | Enter/leave, public movement |1minute/leg|Weekdays08–20new entry; existing occupants can leave after close |
| Basket rack A |Pick up/return same tracked basket|1minute|Human hands; shop ownership; one assigned basket/player; return empty |
| Candy/cosmetics/bracelet fixtures A |Nested view/Back|0minutes|Preview only; unknown cosmetics prices not invented |
| Bakery/decorating B |Nested view/Back|0minutes|Preview only; no ingredient/food generation |
| Register/drinks/machine C |Nested view/Back|0minutes|Customer frontage; no staff-machine operation |
| Area inspection |Examine|1minute|Actual room only |
| Preparation/storage D |No public entry|Rejected without time|Courier access is design only, no player key granted |

Carried basket is visible in Items with stable identity and shop ownership. Leaving/reload/body changes do not silently return it or erase unpaid contents; existing inventory IDs are protected. Basket reuse retains same object. Fixture drawers use shared navigation frames. Map/reference descriptions now distinguish working public navigation from unimplemented retail; directory Tits is metadata, not a spawned NPC.

Validation:1,361named automated cases/81suites and27local browser checks(14Burke,13Cherished regression) pass. Reports: `burkes-foundation-tests.json` and `burkes-foundation-browser.json`. Synthetic saves, no owner data or paid AI. Public remainsv1.0.111.

Next authorized task: actual basket item selection, register payment, owned goods/servings and saved drink preparation. Do not claim these completed from the foundation. Full Tits actor/routine, distribution stock/courier, NPC queue simulation and quests are separate work.
