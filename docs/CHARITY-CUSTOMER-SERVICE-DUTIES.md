# Charity coverage — customer-service duties

## Owner-approved purpose

The register handles correct prices, authorized discounts and payment. Coverage is primarily **being the Gifted Gabber**: chatty, friendly, eager to smile, trying to stay cheerful even when tired, and wanting everyone who comes into the shop to have a better day. This is her effort and manner, not a guarantee that every customer becomes happy, reveals personal information or changes relationship. Serve actual players and NPCs without taking over their dialogue/actions.

## Approved duty menu — controller implemented locally

- Welcome a customer warmly and offer help.
- Ask how their day is going and listen/respond to what they actually say; do not restart greetings or force personal conversation.
- Ask what they are looking for and help them inspect actual available stock/options.
- Examine selected items and check that each intended item is scanned/accounted for, while the register retains authoritative pricing/payment. Do not add a random scanner failure, new arithmetic minigame, duplicate charge or unapproved undercharge penalty.
- Offer to check which fitting stall is available. Verify actual occupancy/privacy rather than declaring any curtained stall free; no entering/opening an occupied stall to check. Current room/curtain data is not a complete multiplayer occupancy controller.
- Help the customer find a genuinely available stall or return to the counter; respect decline/need for quiet.
- Complete the actual checkout through the existing purchase controller, thank them and offer a friendly farewell. No dialogue-only transaction, unapproved discount or transfer of another player’s basket.
- When no customers nearby need service, check genuinely unoccupied changing rooms, wipe them down, sweep the stalls/sales floor, and fold/stack clothing neatly on shelves. Preserve privacy, ownership and actual stock counts.
- Keep track of real received meals and thank community meal-givers.

These are useful choices rather than mandatory identical lines or a fixed sequence that blocks a quick purchase. Follow actual customer presence, order and availability. A simple friendly interaction counts as role portrayal, not an invented guaranteed reward, stat bonus or relationship change. The locked player’s speech/compulsion rules remain their own approved system, not permission to invent customer consent or reword rude intentions into polite behavior automatically.

## Offline and multiplayer boundaries

Offline authored coverage uses the same courteous service duties with authoritative customer/stock/work records. No imaginary player reply, privacy inspection, purchase, gift or payroll completion is created merely because the actor is offline. The real Charity remains responsible for financial ordering. Optional role duties must not break the approved six-hour work/rest rotation or duplicate counter staffing.

Local implementation now exists in `charity-service.js` and `charity-service-ui.js`: recorded-customer FIFO, clerk duties, saved basket scan checks, stall occupancy checks, voluntary quiet/finished requests and recorded cleaning. Actual room hooks and retail checkout enforce the same queue/privacy rules. The clerk UI requires an existing valid coverage record; this does not activate the deferred mask quest. NPCs must enter through real presence/request events; the controller does not invent customer arrivals. Authoritative network occupancy and offline service still require the multiplayer backend.

Owner approves the interaction/interruption rules in `CHARITY-CUSTOMER-INTERRUPTIONS-DRAFT.md` and adds the quiet-period upkeep above. See `CHARITY-SERVICE-IMPLEMENTATION.md` for the verified local controller and remaining network/quest boundaries.
