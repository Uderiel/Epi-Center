# Text-first gameplay audit and overhaul — local, unpublished

## Owner direction

The composer is a gameplay access point, not merely a transcript. Menus remain optional shortcuts to the same controllers. Support common wording and action narration, current-room/body/item/participant context, and explicit clarification when a target is ambiguous. Never require one exact command spelling. These requirements are now in AGENTS.md for future work.

## Comprehensive source inventory

`scripts/audit-text-actions.cjs` inventories every hub/combat/title/creation JS/HTML button site, form and text adapter. Current source inventory: **94 attribute families, 18 ID-only button sites, eight forms and 72 existing text adapters**. This includes parameter metadata, interface controls and historical files; these are not counts of distinct playable actions. The full file-by-file record is `verification/text-action-source-audit.json`.

| Area | Implemented access |
| --- | --- |
| Composer dispatch | New shared action routing runs before early cat/flats/canine catch-alls. Existing specific text adapters remain as fallback. |
| World/interior navigation | Existing route text plus current contextual location/path drawers. Actual navigation controllers retain routes, permissions, movement costs and interruptions. |
| Applewood doorstep | “I knock on the door” at 2F calls Priya’s actual visit controller. Naming a remote door cannot teleport or grant entry. |
| Priya conversation | Actual date requests to present Priya offer her existing optional cat arrangement to strangers. Recognized Erin receives a direct discussion with no cat condition. Asking does not accept an offer, transform the player or book a date. |
| NPC menus and relationships | Contextually offered dialogue, loans, gifts, invitations and responses call the existing bound controller action. Shared state/cost/ownership/relationship gates remain authoritative. |
| Household objects | Current-room object/drawer layers can be discovered on a cloned save; execution traverses actual offered view actions and then the actual action handler. Priya/Nadia/Richard/Erin residences and office fixture views are included. No discovery opens remote/private rooms. |
| Burke’s Sweets | Current-room nested fixtures/products, actual baskets, separate checkout, drinks, corrections, inventory use and Tits’s permissions. “Buy gum” selects goods; it does not silently pay. |
| Cherished Touch | Current fixture/shopping layers and existing route/body/access rules. Clothing selections remain explicit; no inferred free variant, hidden hatch or permission is introduced. |
| Items/equipment | Carried food, candy, cosmetics, forms, clothing and repository actions can run from Play without opening Items/Equip. Disabled buttons remain disabled. |
| Combat | Current encounter actions across offered tabs, tied-archetype choices, turn continuation and target/approach fields use the existing encounter UI/controller. Off-turn and disabled moves cannot bypass their gates. |
| Parameterized gameplay | “Set [field] to [value]” selects an actual contextually available field/option. Drafts persist until the explicit existing submit action; native validation and controller checks remain. Earned points, cured allocation and mastered-form identity reuse their actual forms. |
| Eve/help | Remote A.S.S. help and current-action guidance; holographic projection is unavailable outside the Spire ring. Help does not auto-accept/report quests. |
| Learned database | Durable, player-ID-scoped NPC statements, known apartments, visited places and owned forms; no private canon dossier is copied. |
| Presentation/developer/pre-game | AI credentials, developer fixtures, viewport/map controls, title/save management and pre-game character confirmation are explicitly outside gameplay-composer parity. |

## Matching and execution

`text-actions.js` matches explicit requests and starred action narration against the currently offered candidates. Wording includes ask/borrow, pick up/grab/take, wear/put on/equip, remove/take off, inspect/examine/look at, clean/wash, go/head/walk/approach, and appropriate item-specific use phrases. Exact controller names remain another fallback, not the only accepted wording.

`text-actions-ui.js` collects current actions and read-only inventory/equipment/reference projections. Selected deeper object/office/shop views are explored on a cloned save, bounded to five levels/64 views per request. An action plan rechecks each real button before clicking it; matching itself spends no time, learns no secret and modifies no real save. Synthetic Back actions are not offered merely to enter and immediately exit an unseen drawer.

Button/controller identity is deduplicated across presentations. A genuinely ambiguous object or action asks for clarification instead of choosing the first match. Requests outside the current room/context cannot select hidden objects. Private thoughts, hypothetical conditions, negation and multi-action requests do not silently perform actions. Form/private-player channels do not become outward NPC interaction.

## Verification and limits

The source audit covers the complete source tree described above. Functional browser checks cover actual composer submissions, nested shopping, payment, borrowing, inventory timers, doorstep discovery, stranger/Erin date behavior, parameter selection/point spending, remote help and database reloads. Nine contextual catalog fixtures cover the Hub, both Burke’s public areas, Charity’s floor, Priya/Nadia/Richard living rooms, Reception and combat. Read-only scans must leave saves unchanged and must never choose a different controller for an action’s own label. Ambiguous labels are recorded and deliberately require qualification.

This is deterministic contextual language support, not a promise to understand arbitrary sentences. Unknown wording remains unresolved; it must never be described as a completed action. Complex selections may take several text turns, just as their actual actions require several decisions. The catalog's bounded view search is not an exhaustive planner for every possible outfit combination. Source inventory is not a claim every dynamic action/permission combination has received an individual browser test.

Unbuilt natural NPC intimate invitations, kissing/exposure sources, Underworld lab acquisition and other previously deferred gameplay are not created by adding text access. The earlier non-graphic encounter adapter remains separately documented.

Published release remains v1.0.130. Frozen Bible/release evidence are preserved. Before the next publication, reconcile this pending record and `EVE-HELP-AND-PLAYER-DATABASE.md` into the new version’s canon snapshot; do not rewrite the frozen v1.0.130 Bible.

Final verification: **1,822 automated cases pass**, **12 composer/browser checks pass**, and **nine contextual catalog fixtures pass** (no missing own-label routes, wrong controller selections or matching-time save mutations). Ambiguous labels require clarification. Saved evidence: `verification/text-overhaul-summary.json`, `text-overhaul-tests.json`, `text-actions-browser.json`, `text-shopping-browser.json` and `text-context-browser.json`. The v1.0.130 directory/binding-warning browser regression and earlier private-encounter payload browser checks also pass.
