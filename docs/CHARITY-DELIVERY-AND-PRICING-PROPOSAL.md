# Charity supplier split and enchanted-stock deliveries — implemented locally

## Approved merchandise accounting

Owner selects **65percent supplier /35percent Charity**, confirming the bulk-purchasing arrangement. Use the amount actually paid after authorized discounts and bundle pricing, following the previously explained sale-based split. This supersedes the proposed90/10split. It does not change customer prices or add a second upfront wholesale debit.

On a100gold actual sale,65gold is supplier payable and35gold is Charity’s share before other operating expenses. Both shares are recorded in integer hundredths of gold so small sales preserve the exact ratio without a new rounding policy or invented physical currency. The customer’s existing whole-gold quote is unchanged. The actual sale receipt links the split, owner profit and supplier payable; replay/reload cannot settle it twice. Unrecorded/fabricated receipts are rejected.

Cash is not counted twice: the register receives the customer payment, Charity’s35percent moves to her personal account, and the remaining65percent stays in the till backing supplier payable. A separate recorded-sales counter preserves gross revenue. Old till balances are preserved without inventing old profits. Monday merchandise receipt now settles the outstanding supplier payable from its retained till cash, records the amount once, and leaves any unfunded remainder payable. This is a game ledger settlement, not an external payment integration. Her700daily base income remains a distinct ledger entry, as do player shift wages.

Approved discounts10/25/35percent and the45gold starter bundle remain intact. Its separate pieces total118, but a45gold bundle sale splits29.25supplier/15.75Charity, not a percentage of118. No new minimum price or compensation/subsidy is inferred.

## Existing Monday decisions

Only on Time handles Monday household replenishment: replace missing quantities, pay from real Charity’s personal account, keep real stock/community gifts. Enchanted merchandise already restocks Monday06:00. Household groceries and care supplies require their source catalogs; Charity does not sell those supplies to her customers, so the merchandise65/35split does not automatically set their prices.

## Proposed physical fulfillment — not yet implemented

Align the household drop with Monday06:00merchandise delivery, with separate lines/accounts. Snapshot actual missing stock, place a genuine supplier order, deliver available quantities, have the on-duty authorized worker receive/check it, then put household goods in pantry/fridge/freezer/care storage and merchandise on shop shelves. Use one order/receipt/payment identity; reconcile intervening gifts/consumption to avoid duplicate/refilled stock. A busy counter may retain the actual package for later unpacking. No invented named courier, vehicle, new fee or emergency run is approved here.

Existing immediate weekly enchanted refill must be integrated with that receipt flow, not duplicated beside it. Regular clothing currently has no finite supplier inventory; new finite quantities/caps and migration require their own approved plan. Supplier consignment/bulk ownership, remittance cadence and damaged/missing deliveries are still separate unresolved fulfillment policies.

## New owner direction — paid trusted-player errands

Charity will offer favors/quests to players she actually trusts: explain she cannot leave, ask for specified groceries or personal-care supplies from **Groceries Aplenty** or another actually authored supplier, and pay the player for the errand. Keep the canonical store name despite speech transcription variations. These quests supplement household fulfillment; do not silently cancel the approved Monday route or require every restock to be a player quest.

No exact relationship threshold, purchase list, reward amount, advance versus reimbursement, receipts/proof, repeat frequency, time limit or failure penalty is approved yet. “Trusts” does not automatically grant private-room access or mean all players already accepted a quest. The existing bounded Daily Needs fatigue-item request remains its own approved behavior. Grocery/quest frameworks and source catalogs remain dependencies. Do not turn a conversation into money, purchased items, completed travel or an automatically accepted quest.

## Current evidence and limits

Sales splitting is local runtime in `cherished-shop.js` and `charity-household.js`; focused tests cover exact shares, discounted receipts, bundles, cash conservation, replay, fabricated receipts and legacy balances. No paid errand controller, actual source-shop grocery prices, new finite merchandise cap or physical courier fulfillment is claimed. Not published.


## Approved Friday laptop flow — current implementation

Charity has a laptop at her existing dining-room table (E). On Friday, at an available quiet opportunity, her shared routine walks through real room connections to the table, spends five game minutes placing the week’s replacement order, and returns to the counter. It waits while a customer is present at the front; urgent bathroom needs and actual sleep still take priority. Each week has a single saved order ID. This uses the existing active game clock; it does not claim offline multiplayer execution.

Orders snapshot the missing quantities of the authored, finite enchanted display items. Monday at 06:00, or once actual staff is available afterward, Only on Time’s order is received, stock added up to its existing cap, and supplier settlement recorded once. Reloads do not duplicate an order, receipt, supplier payment, or Charity’s profit. Sales after Friday’s snapshot wait for the next order; simply opening stock or skipping weeks does not invent historical orders. Initial stock and existing depleted save quantities are preserved.

**Normal clothing continues its approved automatic replenishment/availability**, without finite caps or a new procurement debit. Mystery-box limits and actual rolling enchanted purchase cooldowns are unchanged. The 65/35 split remains based on actual paid sales; receiving merchandise does not charge the wholesale share again or credit Charity a second time.

Household top-ups still use the existing missing-stock and personally funded, actually priced receipt adapter. Automatic household fulfillment requires authored source prices; no new grocery prices, free supplies, delivery fees, or paid-errand rewards were invented by this change. The mask quest and authoritative offline multiplayer service remain deferred.
