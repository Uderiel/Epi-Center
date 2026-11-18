# Burke’s Sweets implementation checkpoints

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
