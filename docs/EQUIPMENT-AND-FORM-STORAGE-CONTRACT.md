# Equipment and form storage — v1.0.67

## Regional equipment

The Equip tab projects unique worn item IDs into nine ordered body regions. Coverage is independent of clothing-layer slots; the same garment is not duplicated in inventory. Unequipping from any region removes its one canonical item from all projections.

| Region | Supported item coverage |
| --- | --- |
| Head | Earrings and face piercings |
| Neck | Necklaces and collars |
| Torso | Necklaces, bras, tops, blouses, dresses |
| Back | Backpacks and weapons |
| Arms | Covered sleeves, bracelets, arm shackles, purses |
| Hands | Rings |
| Hips | Underwear, skirts, belts, dresses, pants |
| Legs | Pants/jeans, hosiery, dresses |
| Feet | Socks, shoes, anklets and ankle shackles |

A dress defaults torso/hips/legs, adding arms when sleeve coverage is authored. Explicit `coverage` arrays on definitions take precedence and list only covered body regions. A full skinsuit defaults to all nine. This is coverage support, not an invented latex item, weapons catalog, bondage mechanic or new stat modifier. Existing household catalog and action adapters remain authoritative. Necklace/earrings/belt now have distinct accessory slots. Existing item and layering state is preserved.

Worn cursed heels appear only in Feet; carried heels appear under Items/Objects. Their removal and storage never reduce the physical transformation stage. The existing curse removal roll remains required when unmastered. Worn Kibbles appears below the body-region fields; unequipped Kibbles appears within the Items Forms disclosure, collapsed by default with its state remembered. Mastery-based voluntary equipping and unmastered release/escape rules are unchanged.

## Carry and repository

`EpiFormStorage` owns carry locations, not form mechanics. Generic/living forms remain in `save.forms`; Erin continues using her unique `erinRestoration.heels` object, avoiding a second ownership record. Generic forms use storage inventory/repository/transport. All inventory/equipped forms share a limit of three; heels count as Erin once. Unrelated clothes, snacks, currency and XP do not consume form capacity. Old records without storage migrate to carried inventory, never silently to repository.

At capacity, a newly acquired form is owned but held in transport, outside carried inventory. The persistent Repository transportation systems prompt lists deposit choices; no item is discarded or automatically chosen. Choosing an old carried form deposits it and admits the pending new one. Choosing the new form deposits it instead. If a forced encounter has already put the pending form on the body, physical state remains intact; that worn acquisition cannot itself be deposited until normally released, and the player can choose another carried form. Pending transport blocks voluntary form equipping until resolved. Multiple pending acquisitions and legacy over-capacity records remain safe, persisted and individually resolved.

Ordinary deposits/retrievals require the actual Form Repository world location. Only an acquisition-overflow prompt permits remote deposit via repository transportation systems. Retrieval checks available capacity and never remotely equips. Worn or retained hostile attachments cannot be deposited; combat blocks all transfers. Transport itself is immediate and adds no invented fee, roll, healing, influence change or game-time cost. Physical equip/removal/item actions keep their canonical timing.

Storage changes only location/inventory binding. Identity, rarity, mastery, internal cadence/progress, relationships, resources, body/transformation, original attributes, gold and clock are preserved. Repeated ownership lookups/grants cannot retrieve deposited Kibbles. Direct equip/typed equip and feeding checks honor storage. Tier XP remains on its existing allocation system. Legacy heels stored in the apartment closet remain retrievable there; this compatibility path does not create another form.

Future form additions must use `acquire(save,id,record)` or notify sync with the new acquisition ID. Existing Kibbles grants, encounter mastery persistence and heels pickup are connected. No third/fourth shipped form has been invented just to exercise the limit.

## Furniture overlay

Only Accessible Rooms’ content maximum shrinks: desktop min(44dvh,350px), phone42dvh versus previous56dvh/440px and52dvh. Padding8px. Back layers, scroll, upward positioning and pinned composer remain. Internal Resistance is unchanged.

## Verification

514 named deterministic cases plus entity assertions; 24 equipment/storage cases include region mappings, one-item multi-region removal, independent accessory/clothing layers, capacity, both deposit choices, reload serialization, stored equip denial, no escape bypass, cursed body persistence and full state isolation. Actual browser checks are in releases/v1.0.67-browser-checks.json. No save reset required.
