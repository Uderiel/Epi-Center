## v1.0.51 — owner-directed Wait pacing and Erin Mental attributes

Owner decisions on 2026-11-01 supersede REST-14's open question: preserve the dedicated legacy Wait acceleration and establish Erin toward a Mental archetype. Wait one hour now alternates +2/+3 changes, replacing that hour's ordinary exposure rather than double-counting it. Ordinary travel/conversation exposure remains +1/60 min. Contact, 23-stage cap, saved residual minutes/count and dormant/canine exclusions persist.

At 23/23, Erin's effective attributes become Endurance 2, Fitness 2, Intuition 3, Reflexes 2, Willpower 4, Reasoning 6, Stability 4, Presence 2, Insight 4, Influence 1 (existing Common reference budget 30; Mental alignment score 16 versus 7.5 Physical / 8.5 Arousal). Original saved attributes remain intact; current resource balances/maxima remain player-owned, with no invented Erin pool or refill. Character/Stats/encounter setup/removal use the effective attributes, while Kibbles retains its own profile. See [ERIN-MENTAL-PROFILE.md](ERIN-MENTAL-PROFILE.md) for the exact rationale and ownership boundary.

Implementation complete: 201/201 named deterministic cases plus entity assertions, module/entrypoint syntax checks and 32/32 isolated browser checks PASS. Publication verification follows. Owner acceptance remains pending. v1.0.50's audited heels/apartment/dialogue content is retained. REST-14 is implemented, not owner-accepted; REST-13 attribute direction is implemented, while resource-pool/mastery/control decisions remain unfinished. REST-15..17 and all prior ENC/KB/XP/REP/SHOP deferred work persist. Continue the source-backed apartment activity/belongings and broader dialogue adapters in separate manageable slices; do not claim full legacy parity.

[Play v1.0.51](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.51) · [Verification](releases/v1.0.51-validation.md) · [Active log](OPEN-TASKS-AND-DECISIONS.md).

**Publication verified:** gameplay commit `758dbc9cec8c1648681d87fae5c41a7397e6a1c2` is on main and rebuild/1.0-foundations. [Pages run 41375079927](https://github.com/Uderiel/Epi-Center/actions/runs/41375079927) succeeded. Nine deployed entrypoints/modules match the tested source after line-ending normalization; title and Hub report v1.0.50. See [live hashes](releases/v1.0.50-live-verification.json). Owner acceptance remains pending.

# Active unfinished-work log

## Active restoration checkpoint — v1.0.50

Audit completed before implementation; see [restoration matrix](LEGACY-0884-RESTORATION-MATRIX.md) and [release evidence](releases/v1.0.50-validation.md). Local implementation/verification complete: 196 deterministic cases plus entity assertions, 28 browser checks. Publication verified in the note above; owner acceptance pending. Parent checkout remains development/v0.8.68; implementation worktree .restoration-worktree branch restoration/legacy-0884, based on 9b9f7c0. Final publication evidence must name the exact SHA and Pages build.

**Owner decision, 2026-11-01:** cursed heels now belong in **Central Hub NW**. **Old Transit Courtyard does not/should not exist** in the current version. This supersedes the source's courtyard acquisition, the matrix's initial placement question, and any old WORLD-03 proposal to place that courtyard. Stable item identity shoes-0 remains. Applewood temporary placement east of #12 is approved; new owner reference #97, without renumbering 1–96. Preserve final legacy transformed-form apartment access; original-body access is refused.

| ID | Status / unfinished work | Dependencies and exact next action |
| --- | --- | --- |
| REST-01..05 | PARTIAL IMPLEMENTATION; NOT OWNER ACCEPTED | Entrance, six room shells/examination, nested desk, novel, private dialogue, 23-stage current-body adapter, NW heels/removal/storage implemented/tested. Matrix records unported parts; do not mark complete parity. |
| REST-12 | Owner acceptance | Run release's five manual checks; record PASS/FAIL/UNTESTED for native mobile, apartment/access, heels effects and existing quests. |
| REST-13 | Erin form attributes/resources and mastery/resistance/control | Source's final 10-attribute system supplies no canonical Erin form allocation. Keep player values unchanged until defined. Map legacy authority/influence/resistance/recovery mechanics into current resolution and saved-pool architecture; never copy Kibbles policies. No mental resource damage, recovery or mastery is inferred. |
| REST-14 | Conflicting legacy wait pacing | Ordinary advance818 is 1 step/60 min; dedicated wait833 adds alternating 2/3 steps. Current shared clock uses ordinary exposure only. Reconcile explicit wait acceleration with owner before adding any faster progression, avoiding double application. |
| REST-15 | Apartment activity/belongings lifecycles | Examination/reading restored; adapt DESK837/LIVING840/KITCHEN844/home848/CATALOG850/laundry851/grooming861 data and atomic effects with capability/time checks. Do not auto-grant room belongings or seed another shoes-0. Restore meals, recipes, stock, delivery, ordinary clothing, layered storage, laundry, bathroom/grooming and sleep in manageable slices. Keep needs player-owned and omit obsolete auto-healing. |
| REST-16 | Erin routine/autonomy integration | Calendar preference labels/profile/limited dialogue persist, but no autonomous physical activity/attendance/travel/equip is implemented. Port authorization, commitments and effect plans from 867 only after REST-13 plus capability/current-time adapters. Restore trust/stress/preferences responsibly; current home-topic +1 cap twice/day is source-backed. |
| REST-17 | Further authored dialogue/quests and migration coverage | Four Eve lore answers and Erin books/plants/keepsakes/job/heels memory restored. Continue final source context/recipient/conversation routing and Charity content; five listed Charity quests remain informational designs until dependencies defined. Test older 1.0 save variants and form transitions; no automatic import of 0.8 local save namespaces. |

All prior deferred IDs below remain open, including ENC-01/02,KB-01/02,XP-01,REP-01,SHOP-01 and remaining world/art/coupon work. WORLD-03's courtyard mention is superseded by the decision above. Exact continuation: fetch heads; read latest docs/matrix/evidence; confirm published source; preserve saves; resume first independent compatible REST-15/17 work while asking only for concrete REST-13/14/16 decisions as needed. Do not treat a successful deployment as owner acceptance.


Maintain this file with EVERY build/handoff update. Read CURRENT-STATUS, this log, BUILD-PROGRESS-AND-TEST-HANDOFF and DEVELOPMENT-MASTER-PLAN before continuing. Move items to the completed checkpoint only with implementation/test evidence; owner acceptance is a separate gate. Preserve stable task IDs, decisions and deferred work across chats.

## Current work checkpoint — v1.0.49 published; owner acceptance pending

Hangry Fangs implementation, focused verification and publication are complete. Gameplay commit `8cd08beb252981956f6ee6531999b26ed9ed9556` is on main and rebuild/1.0-foundations. [Pages run 41371237282](https://github.com/Uderiel/Epi-Center/actions/runs/41371237282) succeeded; the [live entry](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.49) visibly reports v1.0.49. 171/171 deterministic cases plus entity assertions and browser checks passed. Evidence: [tests](releases/v1.0.49-tests.json), [validation](releases/v1.0.49-validation.md), [quest contract](HANGRY-FANGS-QUEST.md). Owner acceptance remains pending; do not mark the deferred post-defeat route complete. Previous build: v1.0.48, gameplay 0f9b63e / publication record 3f97336.

Completed gate HF-01: Eve offer/acceptance, crate placement/triggers, snack purchase/mastery, combat outcome hook, independent discovery, release/report guard, one-time rewards, inventory XP allocation, fog/detail gates, developer references, new-character gold and hidden-cylinder disclosure removal. Next immediate gate: HF-02 owner testing, then the deferred design items below. Implementation completion does not mark owner acceptance or internal mastery complete.

## Authoritative decisions from latest conversation

- Hangry Fangs: Risky; Eve offers it immediately with the First Steps reward. Player may accept later or discover Kibbles independently. Independent discovery initially shows only title/report contact, without Eve's description, hunger hint, difficulty/rewards. Eve fills out the completed entry when acknowledging success.
- Target: NE Alley Crate, canonical ID `NE Alley (4)`, owner reference #73. Route: Spire → Central Hub N → N. Main Street (1) → NE Alley (1) → NE Alley Crate. Adjacent diagonal travel and alley wall restrictions remain authoritative.
- Inspect area finds a large crate. Examine crate reveals it tipped sideways, rattling, lid against one side with a dog-sized opening. A snack can draw Kibbles out for peaceful mastery; approaching further, whistling or calling the dog starts combat. Once mastered it never respawns for that save.
- Wins: combat mastery; dog snack mastery; eventual post-defeat internal resistance mastery. The third path is DEFERRED until designed, not implied by the existing combat Resist Mental button.
- Quest rewards on reporting once: 300 gold, 75 Tier Mastery XP in inventory, one single-use 50%-off ONE ITEM Neko Cafe coupon.
- Pet Boutique sells dog snacks at 5 gold each. Snacks later deter a roaming dog pack; pack behavior is not authored. New characters start with 100 gold; do not refill/overwrite existing balances.
- Tier Mastery XP may be allocated outside combat to any owned form in Equip. Rarity/tier prices and upgrades need general design. Form Repository host will allow allocations to registered stored forms once that system exists. Assigned XP must persist without invented upgrade thresholds.
- Eve sees/treats the player as their visible appearance. No completion while trapped/encased. Canine speech is already unavailable; mastered Kibbles can be released before reporting. Mastered Kibbles NEVER overrides player intentions. No zipper/seam.
- Map: fog hides unexplored layout; explored locations and neighboring names are known. No location details before examination. Path is centered on current tile and shows legal adjacent names including diagonals. Developer references default OFF; player names omit numeric suffixes. Owner references stay stable, currently 1–96; future sheets should add unused references.
- Hub inspection must not reveal hidden cylinder/receptacle status. Covers/arrows can be observed. Actual return/activation/red-to-blue changes wait for cylinder-system design.

## Required completion / acceptance gates

| ID | Unfinished work | Next action / dependency |
| --- | --- | --- |
| HF-02 | Owner acceptance of Hangry Fangs | Test First Steps offer, independent discovery, snacks, combat, release/report, exactly-once rewards, reload. |
| KB-01 | Kibbles routines, schedules, habits/preferences and influence | Design what it can influence, communication/responses, relationship gains/damage; preserve mastered player intent. Follow location/quest acceptance gates. |
| KB-02 | Alternate Kibbles mastery paths | Design with KB-01; no automatic chat/time mastery. |
| ENC-01 | General trapped/encased-player guide supplement | [Design checkpoint](ENCASED-PLAYER-SUPPLEMENT-DESIGN.md): define internal actions, attributes/DCs, costs, failure, retries, recovery and external-combatant action budget. Then implement/test post-defeat Kibbles path. |
| ENC-02 | Real helper rescue intervention | Define helper abilities, reduction amounts, eligibility and sealed-form outcome. Current help-seeking tools are a simulation only. |
| XP-01 | General tier mastery progression | Define rarity-specific tier costs, levels, effects, caps and allocation/upgrade behavior. Allocation balances are not a tier-up system. |
| REP-01 | Form Repository | Host NPC, registration, stored-form ownership/access, capacity/retrieval and XP allocation dialogue. |
| SHOP-01 | Neko Cafe | Interior, NPCs, inventory/prices/purchasing; implement one-item coupon consumption atomically with purchase. Coupon can be awarded before redemption exists. |
| WORLD-01 | Remaining district content | Author the mapped streets/buildings/interiors, encounters and location art. Mapped connectivity alone does not finish content. |
| WORLD-02 | Roaming dog pack | Author placement/schedules, encounter triggers, snack deterrence and repeat rules. |
| WORLD-03 | Later world expansion | Residential Walkway/Applewood Apartments, Old Transit Courtyard, western venues, latex dungeon, underground access and all new map sheets need canonical routing/content before integration. Do not put underground-only tunnels on the surface map. |
| META-01 | Epi-Center / Overworld progression | Spire logout/cylinders, pods/energy loop, outages, resource-powered tools/crafting/rebirth, backup regeneration and equipment retrieval remain later systems. Preserve the separation between the digital first half and real-world Squirrel City. |
| FACTION-01 | Factions and escalation | Countess/Resistance/agents/thieves, cylinder mission failure escalation, relocated objectives, barricades/traps, PvP/Infinitum, slime/mecha and corruption outcomes need entity/quest definitions before building. |
| ART-01 | Alley images | Owner generated a collage in a separate conversation; placement/individual assets/day-night mapping have not been supplied for this implementation. Do not infer which crate/goo image belongs to which quest. All game images 1100×733, filled landscape frames. |
| HUB-01 | Hub Cylinder system | Define hidden-slot reveal, matching return, consumption/persistence, insertion/cover state, Spire directional red-to-blue state and mission consequences. Confirm sketch dimensions before mechanics depend on them. |
| HUB-02 | Elizabeth and pet | Roaming schedule, interaction/discovery triggers, Fetch quest and latex-dungeon connection remain unbuilt. |
| HUB-03 | Hidden Easter Egg quest | Define repeatability, award moment, XP recipient, chicken persistence, consumable/trophy relationship. Preserve original owner rewards/conditions in CENTRAL-HUB-EXPANSION-DESIGN. |
| HUB-04 | Other supplied starter quest | Preserve title “If it's not yours, don't touch”; relationship to earlier “If the Panties Fit” is unresolved. Avoid duplicates/renaming by inference. |
| NPC-01 | Eve/Charity extended dialogue | Retain existing intros; broader lore/glitch responses, Charity shop/dialogue and other NPC systems require authored definitions. |
| FORM-01 | Other form integrations | Erin 23 stages/red heels, temporary panties, other rarities/forms and autonomy remain separate later work; never copy Erin's personality into Kibbles. |
| COMBAT-01 | Broader combat validation/balance | Existing accepted Kibbles engine is preserved; multiple foes/allies, inventory/allied moves, arousal applicable entities, recovery economy and broader entity definitions still need phased work. Provisional tuning remains marked in combat docs. |
| QA-01 | Native-device acceptance | Android keyboard/composer, map touch/zoom, encounters, saves and reload; isolated browser checks do not claim physical-device acceptance. |
| WATCH-01 | Conditional reminder checks | Keep one-time reminder conditions evidence-based. Quest/route design is now supplied; do not notify/disable either watcher merely because code or a proposal exists. Verify accepted completion in current docs/conversation. |

## Handoff protocol

1. Check worktree/remote heads and current docs. Preserve user changes and existing save keys.
2. Resume the current unfinished gate; do not implement undefined mechanics from this log without design decisions.
3. Use isolated saves for tests. Record actual passed/failed/untested checks, publication SHA/run and owner acceptance separately.
4. Update this log, CURRENT-STATUS, handoff, master plan, changelog, README index and acceptance checklist together. Give the owner a normal playable link after verified publication.
