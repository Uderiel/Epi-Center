# Erin wellbeing and bedtime — v1.0.77

## Audit findings

The legacy two-trust-per-game-day rule existed only in the fallback household-topic dialogue. Specific Erin-life answers skipped that branch. Rest, leisure and grooming did not actually lower Erin's stress. Autonomous bedtime only moved to the bedroom, removed ordinary shoes, set `readyForSleep`, then slept. It did not run existing grooming or wardrobe actions and never attempted the cursed heels. AI was an expression layer with no authority to repair those missing effects; its packet omitted Erin's stress and used an absent relationship field rather than trust.

## Trust and practical help

The existing `erinRestoration.topics` day/seen/rewarded ledger remains authoritative. Shared interests (book, plants, fox and vase), considerate check-ins/appreciation and completed manual or explicitly delegated practical help all share its maximum of **two +1 trust awards per game day**. Existing spent allowances and seen topics survive migration. Each source earns once per day; repeating it or reloading cannot bypass the limit. The day rolls at midnight. Trust stays at most 100 and the existing cooperative mastery threshold remains unchanged.

All private Erin dialogue paths call the same consideration hook, regardless of AI settings. Hostile and hypothetical keyword matches do not count as care. This remains bounded deterministic interpretation, not arbitrary AI sentiment scoring. Natural synonyms are supported for check-ins, appreciation and authored household interests; unsupported conversation can still receive AI prose without inventing a reward. Explicit physical help uses the actual action controls. Autonomous self-care reduces stress but awards no trust merely for Erin controlling herself.

Form/Character display earned allowance, an explanation of sources and the last actual wellbeing receipt. Conversation receipts are separate mechanics feed entries, making zero additional inference requests. Existing saves need no reset.

## Stress baseline tuning

These values are implementation tuning, not claimed historical owner-approved balance. Stress clamps at zero. Receipt history is bounded to 30 events and action cooldowns persist.

| Completed activity | Stress reduction | Cadence |
| --- | ---: | --- |
| Considerate conversation | 2 | Support topic; at least 60 game minutes apart |
| Quiet rest (15 min) | 6 | At least 30 game minutes apart |
| Reading (15 min autonomous) | 4 | At least 30 game minutes apart; source chapter limits retained |
| Quiet TV (10 min autonomous) | 4 | At least 30 game minutes apart |
| Already seated with quiet fireplace TV | 4 | Requires 15 accumulated actual minutes, shared TV cooldown |
| Autonomous evening face/oral care (6 min, or 10 with makeup) | 3 | On actual completed care, within the nightly chain |
| Autonomous sleepwear/excess-layer change (5 min) | 2 | Requires actual garment/item changes |
| Manual bath / shower | 6 / 4 | Existing 25 / 12 min action; 60 min relief cooldown |
| Manual cleanser, moisturizer, teeth or makeup removal | 2 | Existing timed action; 60 min relief cooldown |
| Carried heating-pad rest | 4 | Existing 15 min action and posture/location requirements |
| Washing actual used dishes | 2 | Existing real dish count/action; 60 min relief cooldown |
| Actual sleep | 2 per accumulated hour | Saved fractional-hour progress; never on repaint or replayed ticks |

Suggestions, render calls and model-generated descriptions do not fabricate physical completion. Existing manual actions retain their current mutation/time-dispatch contract. AI-disabled play uses exactly the same care state and receipts. Health/Stamina are not healed by wellbeing activities. Stress alone (30+) can make autonomous rest eligible; fatigue is no longer its only trigger.

## Night chain and inventory

At existing quiet hours, and only under the existing control/delegation rules:

1. Follow real apartment edges to the bathroom. Cleanse the face/remove makeup, brush teeth and moisturize using actual available supplies.
2. Return to the bedroom. Choose an existing clean pajama/sleepwear item. Move removed day clothes into the hamper, mark them worn, and keep jewelry in inventory. Keep underwear separate. Do not grant duplicate garments or return dirty clothes to clean storage.
3. Remove ordinary footwear and attempt the cursed heels with the **existing Reflexes vs 12** save. Success removes them without reversing the body; normal heels-off recovery follows. Failure is explicitly narrated, persists and does not retry automatically throughout sleep. No automatic curse bypass is added.
4. Finish the existing five-minute bedside preparation and five-minute fall-asleep actions.

Each completed phase persists in `life.bedtime`. Its key spans the 22:00-to-morning period across midnight. Mid-action guards preserve changes to the actual wardrobe and grooming; a cancelled transaction cannot partially strip/equip items. Reapplying makeup or putting day clothes back on invalidates the relevant completed preparation on the next awake context check. No supplies/clean sleepwear available means an explicit partial-care/excess-layer fallback, rather than fabricated items, makeup removal or relief for a flag alone.

Old autonomous sleeping/ready saves without these phases are repaired by the next live-time update, not by opening a drawer. Urgent bladder/meal behavior, interruption/resistance rules, zero influence, mastery, calendar wake times and the single existing imposed-routine completion remain intact. One multi-step bedtime does not collect an influence award for every sub-step.

A new **Start bedtime routine** button delegates the full chain, including at mastery/zero influence. **Quiet rest · 15 min** is also available in the routine panel. The existing explicitly selected full-eight-hour sleep remains the player's direct action, with clothing as worn; the new bedtime button is the preparation path. This update does not build automatic morning dressing, city commuting, work attendance penalties or a universal full-day occupation simulator.

## AI and validation

Private Erin packets now contain true trust, stress, today's earned allowance, current bedtime progress, grooming and worn-item names. Public NPC packets do not receive them. AI guidance requires recorded outcomes rather than invented dressing, sleep or curse removal. No new model-selected action loop, provider change or backend redeployment is required.

657 named automated cases plus entity assertions pass. New coverage includes the shared cap, reload/day boundary, stress, missing resources, real wardrobe changes, curse success/failure, midnight continuity, in-flight reload, guards, mastery/zero/delegated authority, old sleeping saves, actual sleep, quiet TV, idempotent time and private AI context. Managed-browser checks use a disposable origin and synthetic slots; simulated inference proves one request, authoritative metrics and no extra routine generation. Native-device acceptance and real-provider prose quality remain owner checks.

Manual acceptance: open Form and check earned trust; complete Quiet rest and inspect Stress; at home after 22:00 let high-influence Erin prepare for bed or select Start bedtime routine; inspect makeup/sleepwear/equipment and the removal result; reload and verify progress remains. Use the existing game origin to retain saves.
