## v1.0.74

Richard’s report work now holds for three written sections within its existing 20 minutes. See [Erin’s Reception F](ERIN-RECEPTION-F.md) for the v1.0.74 workflow.

# Richard NPC implementation — v1.0.64

The owner approved Richard after the Technology Center baseline. Sources: RICHARD-NPC-DESIGN-NOTES.md and owner instructions in Repository audit and status. Richard remains a civilian manager, values Erin's competence, and adapts to refusal. Erin is his secretary; Michael is the future intern. No Richard form or unique power is introduced.

## Implemented profile and state

Identity, civilian classification, role, professional appearance/personality, residence (Applewood floor 7 Suite D), signed relationship, stress/fatigue, current location/room/activity, commute progress, task/offer/refusal memory, payment ledger, work progress, combat pools and last conflict persist under world.richard. Initial migration places a new NPC according to the current game time; subsequent movement follows graphs. It does not reset player resources, forms, inventory or relationships. Dev's Richard relationship override and normal updates share the signed record.

Earlier proposed attributes were not finalized and yielded Arousal under the actual alignment formula. The implementation chooses a Mental-primary allocation, without hard-coding alignment:

| Endurance | Fitness | Intuition | Reflexes | Willpower | Reasoning | Stability | Presence | Insight | Influence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4 | 4 | 5 | 4 | 7 | 7 | 6 | 5 | 5 | 4 |

Max combat pools are 100 each, initial arousal 0. Pools are copied into encounters and back; no fight-start refill. Resting at home/lunch gradually restores Health/Stamina/Resolve by 0.1 per game minute. Ordinary civilian classification is separate from combat technique access.

## Schedule and navigation

Game day 1 is Monday. Monday–Friday: commute begins 08:30 for 09:00 work; normal finish 17:00. Accepted/working/ready extra work keeps an administration window until 18:00. G is the default work room; 10:30–10:45 F check-in, 11:00–11:10 L printer, 12:00–12:30 J lunch, 15:00–15:15 H sales rounds, 15:15–15:30 H_W marketing rounds. These are baseline implementation windows, not new owner-authored events. Each room edge takes one minute, including G→F; district edges take eight minutes with saved remaining travel. Elevator entry/exit takes one minute. Unimplemented home interiors and weekend entertainment are not exposed as destinations. No work-attendance penalty is applied to the player.

Canonical game-time advances drive this schedule. Foreground live time retains its 1 game minute per 10 active real seconds ratio. Suspend/background/closed sessions do not catch up. Richard freezes during his own encounter. Co-location controls NPC recipient availability; stale text/buttons cannot talk or pay remotely. Walking away closes his profile layer.

## Additional report summary

Only fully transformed Erin with human speech can receive/accept the secretary assignment. At desk F, usable hands and the existing form-control guards are required to begin. Explicit start permits elapsed work while the player remains in F; departure, combat or form change pauses it. Twenty worked minutes produce a ready document, not a payment. Deliver in person to Richard, then award 50 gold exactly once using a permanent task-ID ledger. Richard's spoken lines never include a numerical bonus; system receipts and Journal may show it. The latest 30 completed task records are displayed in Journal; the payment ledger remains persistent.

Stress at least 35 and co-location with Erin during weekday 14:00–17:00 can trigger an autonomous offer. Player can also ask in office hours. One active task at a time, at most two completions per day, minimum 60 minutes between offers. A first refusal acknowledges reliance; a second extends cooldown to 180 minutes; a third stops requests for that day. Boundaries can cancel uncompleted accepted work. Refusal does not reduce relationship or pay, create punishment, or imply consent. Completion adds two relationship points. Prioritizing the workload may postpone an offered task. Grocery/dry-cleaning tasks, purchases, regular wages and special weekend events remain pending.

Text examples (NPC Richard): “Do you have an extra task for me?”, “Yes”, “No thanks”, “Stop asking”, “What are your office hours?”, “Let's prioritize the workload”, “I deliver the report summary”. Location text: “I prepare the report summary”, “I talk to Richard”, “I attack Richard”. Supported authored intents are bounded; arbitrary generated conversation is not claimed.

## Civilian combat boundary

Civilian encounter adapter uses EpiCombat and shares baseMoves with the existing Kibbles Play adapter. Normal main/minor/reaction budgets, archetype selection, costs, d20 checks, initiative, Confuse/Distract, recovery, resistance, fleeing, surrender and engine defeat thresholds apply. Richard favors analysis, mental resistance, Confuse/Mind Strike, recovery and low-Health retreat; he can Dodge or Counter Attack physical attacks. Player aggression changes Richard relationship by −20 and stress by +20. Encounter state and both depleted resource pools survive reload.

Civilian surrender/defeat/retreat stop combat without form acquisition, transformation, item transfer or money rewards. Kibbles-specific treats, mastery/encasement outcomes and Dev help lane do not appear in Richard fights. A mastered canine can physically attack but cannot use human dialogue/tools; no unauthored Richard-transformation outcome is added. Existing Kibbles encounter regressions remain passing. Ordinary dialogue and work are blocked during combat.
