# Cherished Touch interior contract — v1.0.73

Source: owner drawing 4372.jpg, upper-left pathing and lower-left fixtures. World tile62 remains unchanged. State is world.cherishedTouch; old saves default to the exterior, with no reset or gifts. The sales-floor front door enters/exits for1 minute. Every physical doorway step costs1 minute through the existing navigation runtime. Viewing a room/fixture/map is free; examination1 minute; asking permission2; hallway search2; toilet4; curtain operation1. Existing body capabilities, combat restrictions and unmastered control contests apply. UI actions, typed navigation, map routing and direct module calls share the same rules.

| Code | Room | Direct connections |
| --- | --- | --- |
| A | Charity’s Bedroom | G, B, J |
| B | Charity’s Bathroom | A |
| C | Front Counter / Register | H, G |
| D | Kitchen | G, E |
| E | Dining Room | G, D |
| F | Storage Closet | G |
| G | Central Hallway | H, C, A, D, E, F |
| H | Sales Floor / Entrance | C, G, I1–I4, front exit |
| I1–I4 | Four separate Changing Rooms | H individually |
| J | Closet / Laundry | A |

The lower sketch’s sales-floor/hall doorway is preserved alongside the counter/hall doorway. Bathroom and laundry have no shortcut into the hall. Kitchen and dining share their drawn connecting entry. Changing stalls do not connect through each other.

Fixtures: bedroom queen bed/dresser/vanity/closet/nightstand; bathroom bath/toilet/sink/towels/toiletries/hamper/candles/soap; counter register/valuable display/new arrival offer; kitchen stove/oven/fridge/sink/dishwasher/pantry; dining oak table/four chairs/TV; storage clothes/skirts/fabric; hall photographs of prior city layouts; sales racks/windows/awnings; each stall curtain/mirror/hooks/bench; laundry linens/storage. These establish inspectable geography, not new inventories, prices, purchases, meals, rest cycles or item ownership. The arrival offer has no posted price. No existing shop prices or rewards were invented.

## Access and concealed features

Public H/C/I rooms require no private permission. The baseline explicit Charity permission button in the public shop authorizes the remaining rooms without changing relationship or inventing a quest. Charity remains the existing counter NPC, visible in H/C; remote private-room dialogue is blocked. Her full household/schedule and restrictions on leaving the shop remain future work.

The concealed north emergency exit starts absent from maps, descriptions and routes. A deliberate Search hallway action in G reveals it, then the canonical exit goes only to the actual north tile NE Alley(1). It is an outward emergency exit, not an unapproved ordinary alley entrance into the store. World-route planning includes it only after discovery; standard district travel cannot bypass indoor exits.

The separate entrance under heavy fabric is never revealed by inspection, searching, enhanced senses, permission to visit, or AI inference. Only revealGuildEntrance(save,'charity') from an authored Charity event can set its disclosure flag while she is present. There is no player reveal button, new quest trigger or traversable underground destination in this baseline. Later Charity quest/dialogue must own its discovery conditions. Unrevealed state never enters the AI packet; her dossier prohibits improvising concealed entrances or access grants. Private form context/stale replies also distinguish shop room transitions.

## Validation / acceptance

617 named deterministic cases plus entity assertions PASS, including19 shop cases: reciprocal graph, entry/persistence/resources, public/private gating, route topology, world exit guards, fixture locality, non-disclosure, Charity-only hook, rear exit, independent curtains, toilet, combat/body/control restrictions, NPC locality, typed intents, UI context and stale-AI room guard. Eight browser checks use a disposable local slot3 and no provider connection. Layout screenshot was visually inspected; no physical Android acceptance claimed.

Manual: travel to Cherished Touch → Accessible Rooms → Enter. Open Layout and compare A–J to the sketch. Ask Charity for permission, route to laundry through bedroom, then visit a changing stall, close its curtain and reload. Inspect storage without discovering the concealed entrance. Return to H and Exit store; Path returns. Existing First Steps reporting remains available at Eve.
