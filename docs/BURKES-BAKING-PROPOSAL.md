# Burke’s bakery production — approved local implementation

Current status: owner approved the target quantities, portion-based ingredient model and one full preparation day’s initial supply. Production is activated locally; publishing remains on hold. Earlier draft/awaiting-approval text below is historical and superseded by the implementation checkpoint at the end.

Approved: weekday prep07–08 working default; weekend prep10–11; one hour includes baking and dirty-dish cleanup. Tits personally messy with flour/frosting and finger-licking; kitchen tools kept clean. Industrial mixer, multiple ovens, multiple cake/cupcake pans and industrial freezer exist in restricted preparation/storage D. Exact equipment capacity is unspecified.

## Recommended production model

Use the owner-specified industrial mixer, multiple ovens, cake/cupcake pans and industrial freezer in the production plan. The freezer is established chilling/freezing equipment; cooling is not a missing-equipment issue. Record actual mixing, baking, freezer/chilling, finishing and cleanup stages. Exact capacity and recipe durations remain unapproved, so a finite batch cannot be called finished from room inspection alone. Prepared components are an optional proposal, not a requirement or a substitute for the equipment the owner supplied. Any additional equipment from the interrupted description remains unknown; do not infer its absence or invent it.

Proposed hour:10minutes setup/mixing,30minutes oven work (oven jobs may run concurrently only within authored capacity),10minutes finishing/display,10minutes dish/tool washing. This allocation is owner-approved; exact recipe times/capacities remain a production-model draft. Use the established freezer for chilling stages; any recipe/capacity adjustment must be reviewed rather than declaring missing equipment or assuming instant cooling.

## Draft output targets using existing display tuning

These are proposals using existing starting-stock values, NOT new approved daily caps.

| Product | Existing display target proposed for replenishment | Accounting |
| --- | --- | --- |
| Strawberry shortcake cupcakes |12 | One planned batch; record actual inputs before output |
| Strawberry heart cake pops |12 | Prepared cake base plus actual finishing materials |
| Cherry heart cake pops |12 | Separate flavor/input reservation |
| Strawberry cheesecake truffles |8 | Actual chilled filling/base; no immediate cheesecake cooling |
| Pink confetti cake |2whole cakes plus1cake cut into8slices | Each cake allocated whole OR sliced, never both |

Only make missing quantities; count carried unpaid reservations and still-valid display stock so baskets do not generate duplicate replenishment. No automatic finished-goods refill. Candidate ingredient catalog: flour, sugar, eggs, dairy/butter, flavorings, frosting/decorations, prepared cake bases and chilled cheesecake filling. Exact quantities, prices, supplier ordering and food storage/spoilage must be reviewed; none are implemented by this proposal. Ice-cream cakes are a freezer use case, not a newly approved menu/recipe.

## Next implementation after the model is approved

Persist scheduled stages, exact ingredient reservations, actual output quantities, tools/pans in use, used-dish state, interruption/late start, missing supplies, and once-only batch completion. Final cleanup restores tool cleanliness without magically cleaning Tits herself. Keep public entry closed during actual preopening work; respect established hours and late-opening policy. No test or implementation should claim a batch completed from the current inspectable-equipment placeholders.

## Approved targets and local controller checkpoint

Owner has now approved the display targets listed above. `burkes-baking.js` implements missing-stock planning, counts reserved unpaid baskets, prevents one cake being both whole and sliced, and stores leftover cut slices for later use. The configured controller reserves actual inputs, tracks the approved10/30/10/10phases, publishes output once and ends with clean tools. Four focused cases pass using explicitly configured synthetic supply records.

The ingredient model below is STILL A DRAFT, not approved by target approval. Normal play leaves `recipePlanApproved:false`; absent approval or supplies cannot create output. There is no production-activation/debug button for players. Daily supplier pricing and starting ingredient quantities are not inferred.

| Output | Draft ingredient-unit model |
| --- | --- |
|1cupcake |1cupcake-batter portion +1cupcake-frosting portion |
|1strawberry cake pop |1strawberry-pop base portion +1coating portion |
|1cherry cake pop |1cherry-pop base portion +1coating portion |
|1cheesecake truffle |1chilled cheesecake-filling portion +1truffle-coating portion |
|1whole cake OR8cake slices |1whole-cake batter portion +1whole-cake frosting portion |

Suggested initial stock for approval: one full target-restocking run of these ingredient units, with later daily courier replenishment separately accounted. No ingredient price, free recurring delivery or food-spoilage rule is approved here. Ingredient portions are game inventory units, not grams or a real culinary recipe. Existing mixer/oven/freezer fixtures provide the authored production equipment; no missing appliance is asserted.

## Activated production checkpoint

The approved opening supply is one finite full-target run:12cupcake batter/frosting portions,12strawberry-pop bases,12cherry-pop bases,24pop-coating portions,8cheesecake-filling/truffle-coating portions,3whole-cake batter/frosting portions. Initialized once and persisted, never refilled by reload. No delivery price or recurring free ingredients is inferred.

Actual clock starts preopening production; the approved stages reserve finite inputs, use the authored mixer/ovens/freezer/decorating fixtures, publish only missing stock and finish with dish/tool washing within60minutes. Existing customers/paid jobs prevent starting a replacement batch. Additional daytime production triggers when a bakery display is empty and actual supplies/work availability permit; no supplies means no invented batch.

Opening stock is the neatest. Later daytime batches retain increasing presentation messiness in saved display lots, baskets and paid serving items, including return-to-display and reload. No price/stat/medical/transmission effect is attached. Tits herself may retain flour/frosting while tools finish clean. Eight fixed prep fixtures now include the central decorating table, rotating stands and pipettes/tubing/frosting bags. Custom name-writing prices/actions are not invented from the existence of those tools.

Six production cases and four actual-clock browser checks pass, covering finite one-time supply, once-only output, cake-slice remainders, progressive daytime presentation, ingredient use, dish cleanup, actual display UI and reload. Daily supply fulfillment/pricing, complete customer queues and closing remain unfinished.
