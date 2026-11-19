> Release status: implemented controllers in this record shipped in **v1.0.126**. Explicitly deferred mask/payroll/offline features remain deferred. Current publication evidence: [release summary](releases/v1.0.126-release-summary.json). Earlier verification counts describe their original checkpoints.

# Charity personal household pricing — approved temporary catalog, implemented locally

This concerns her own food and toiletries only. Enchanted merchandise pricing, Friday laptop ordering, Monday receipt and65/35sales settlement are already approved and implemented; this proposal does not reopen them.

## Existing evidence and genuine missing decision

`erin-household.js groceries()` already charges one gold for each missing food-stock unit in its normal delivery path. Its instant-delivery surcharge and eight-minute delivery are not Charity policies and must not be copied. Charity's approved Monday receipt adapter already requires actual prices, missing quantities and her own personal funds. Groceries Aplenty and Daily Needs are mapped but have no completed supplier catalog covering her pantry and toiletries. The grocery schematic establishes categories, not numeric source prices.

## Approved temporary catalog

Reuse the existing one-gold-per-stock-unit grocery baseline for bread slices, eggs, oatmeal portions, sandwich filling portions, fruit, soup portions, tea portions and milk portions. Propose eight gold for her actual half-gallon mint chocolate chip tub. Propose one gold per tracked use of soap, shampoo, conditioner, toothpaste, deodorant and moisturizer. Owner approves these temporary prototype prices, with all future Groceries Aplenty updates required to flow through household pricing. They are per tracked use/portion, not full-package counts. This does not buy a new bottle for each use.

At zero stock, Charity's approved target quantities would cost183gold: bread40+eggs6+oatmeal7+filling10+fruit10+soup10+tea20+milk2+iceCream8+soap10+shampoo10+conditioner10+toothpaste20+deodorant10+moisturizer10. Actual Monday orders buy only the missing quantities, not this full amount automatically. No added delivery fee, new credit line, player charge or65/35split on personal shopping is proposed. Existing personal funds must cover the actual invoice; no free stock or invented balance.

Owner approval is recorded; automatic Monday household fulfillment now debits the actual missing-stock invoice from Charity’s funds. Source-shop public retail catalogs remain a later shop-building task; this prototype supplier list does not claim those businesses are now visitable/fully built.


## Shared price authority and future Groceries Aplenty integration

`household-prices.js` now supplies the shared runtime lookup. Charity uses the approved temporary defaults, while Erin, Nadia and Richard preserve their established fallback prices until a source catalog provides an override. Installing the future grocery catalog revision updates new household quotes/orders in all existing purchasing adapters without editing each NPC. Priya has no separate priced purchasing controller to convert. Use explicit food, care-use, care-package and maintenance units; a bottle price must not silently become the cost per application. Future package-to-use conversions must use the actual authored package capacity.

Monday06:00creates a saved missing-stock household order. Actual available staff receives it; intervening stock is reconciled to target and Charity’s own funds pay only what is received. Insufficient funds/absent staff keep it pending. Empty quantities settle without creating goods or a charge. Exact quoted prices/catalog revision remain with the order/receipt, including across reloads; future price changes do not rewrite past receipts or reprice an already placed order. No merchandise65/35accounting, normal-clothing auto-refill, owner salary, player pay or existing other-household delivery timings/fees are altered.
