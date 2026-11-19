# Charity covered-rest morning care — owner-approved sequence

## What is already settled

Owner authorizes drafting this sequence now. The coverage quest itself remains deferred; this is household design, not implementation of a mask quest. Current source: CHARITY-COVERAGE-DESIGN.md and CHERISHED-TOUCH-COMPLETE-LOCATION-DRAFT.md.

- Coverage offer at75relationship, explicit acceptance,10minute25stage disguise and actual worn-outfit loan before counter readiness.
- Counter coverage begins after the player is ready. Charity sleeps promptly, roughly5to5.5hours; the exact variance is not sampled or silently finalized here.
- **Eight-minute shower** with the bathtub’s shower-head attachment, followed by drying, dressing, quick breakfast and return.
- Six-hour minimum and seven-hour cap on actual counter coverage. Early readiness does not end coverage before360minutes.
- Approved quick breakfasts: toast/eggs or oatmeal with tea. Community members often bring meals; actual available prepared food can help but is not fabricated on demand.
- Household care preferences, normal clothes and practical sleepwear already approved broadly; exact live supplies/quantities remain to implement.

## Existing systems checked before this draft

`cherished-touch.js` has the actual reciprocal room graph: counterC↔hallG↔bedroomA↔bathroomB, and hallG↔kitchenD. Each doorway step costs1minute. The full trip below uses8doorway minutes without adding shortcuts. BathroomB and laundryJ open only from bedroomA.

The existing `erin-household.js` outfit preset uses8minutes to collect/change an outfit, with actual garment custody. That is a reusable timing/ownership reference, not permission to clone Erin’s wardrobe or move the player when Charity moves. Actual NPC movement needs Charity’s own actor state and resident permissions, distinct from the visitor’s location/permission.

## Proposed concrete sequence

| Action | Actual place / route | Time |
| --- | --- | --- |
| Leave the counter for bed | C→G→A | 2min, existing doorway cost |
| Sleep | Her own bed inA | About300–330min; approximate owner range, exact distribution unresolved |
| Go to the shower | A→B | 1min, existing doorway cost |
| Shower | B, tub/shower attachment | **8min, confirmed** |
| Dry and quick grooming | B | **5–10min, approved** for towel-drying, teeth, deodorant, a quick hair brush and simple already-approved care |
| Return to clothes | B→A | 1min |
| Change for work | A/dresser; clothes prepared in advance | **8min, approved**, using existing outfit-preset timing as the reference |
| Go for breakfast | A→G→D | 2min |
| Prepare/heat and eat breakfast/tea | D; use actual stock or an actual suitable brought portion | **10–15min total, approved**; no full stew preparation |
| Return for counter handover | D→G→C | 2min |

The illustrated preparation sequence totals **5h39m to6h19m** including the approximate sleep range and actual routes. This is readiness timing, not approval of early release: actual handover remains **at or after6h and by7h**. The gap up to7h is a limit/buffer for real bounded variation, not an extra random delay automatically added. Do not insert a forced minute360handover while Charity is elsewhere.

Owner accepts five-to-ten-minute grooming,8minute dressing,10–15minute breakfast and the separate clean spare-outfit arrangement (“That fits. Thank you”). Exact variance distribution is not thereby specified. The approved8minute shower must not silently become10or25minutes.

## Clothing continuity that must be addressed

The player is still wearing the actual outfit Charity lent them. Charity cannot dress in that same item instance while they are covering her. **Approved:** Charity dresses in a different clean, real spare work outfit from her already-planned wardrobe after showering. The loaned outfit remains on the player until the authorized end-of-shift change/return. No duplicate garments, teleporting clothes or forced early undressing is allowed. Exact loan-return and disguise reversion belong to the deferred quest framework.

The fresh spare can use her approved ordinary jeans/plain tee/cardigan/comfortable-footwear style. No new magical outfit, free public stock, new color preference or exact garment count is made canon by this proposal. Matching the original clothes is important for the initial unnoticed swap; after her rest, a genuinely fresh outfit need not be a duplicate of the loan.

## Supplies and real outcomes

Use Charity-owned towels, mild soap, shampoo/conditioner as actually selected/available, toothbrush/toothpaste, deodorant, hairbrush, simple skin-care products and clean underwear/socks/work clothes. Avoid extra elaborate beauty procedures in this short window. No product use or clean clothing is granted just by rendering a room. Sleepwear, towels, used dishes and dirty clothing retain actual ownership/condition/cleanup state.

Only on Time’s Monday groceries/toiletries and community prepared-meal visits are established sources; starting amounts, order quantities, spending amounts, delivered portions and exact missing-stock behavior are separate unresolved inventory design. Do not erase inventory constraints, invent food, charge the player or take shop money to guarantee this proposal’s timing. Household implementation must support a feasible reviewed fallback rather than breaking the420minute coverage cap.

## Approved checkpoint and next step

The timing and distinct clean spare outfit are settled. Owner next accepts discussing the handover interaction. Keep this as quest design only, since its playable framework was explicitly deferred; do not re-ask these morning timings. After the handover/removal decision, resume concrete household stock rather than inventing a completed quest.
