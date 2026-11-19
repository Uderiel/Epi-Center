# Universal directed relationships — current owner rule

One signed **−100…+100 relationship value** belongs to one stable entity and one stable player. Applies to existing/future NPCs, conscious forms, other forms and encountered entities. A bar does not create consciousness in an inanimate object. Trust is an interpretation of relationship, not a second social meter. Influence, stress, mastery, ownership, permission and consent remain distinct.

## Owner-defined meanings

| Score reached | NPC interpretation | Conscious form interpretation |
| --- | --- | --- |
| +25 | Favorable familiarity/recognition | Familiarity and appreciation |
| −25 | Unfavorable familiarity/recognition | Negative familiarity; response is character-specific |
| +50 | Trusted; less inclined to watch closely | More trusting |
| −50 | Heavily distrusted; watched more carefully | Distrust; no automatic control penalty |
| +75 | Friend | Friend; more receptive to reasonable requests consistent with schedule/commitments |
| −75 | Enemy/adversarial; unwelcome where a particular establishment's policy applies | Adversarial; no automatic takeover |
| +100 | Close friend, almost family; warmly welcomed | Close confidant and mutual respect for shared lived experience |
| −100 | May become hostile | Deeply negative relationship; exact reaction remains authored |

Intermediate values retain the strongest reached band. These are attitudes, not automatic combat, access, stealth success, romance, disclosure or mastery grants. Forms' negative interpretations beyond the owner's explicit positive examples are conservative descriptive defaults. Legitimate resistance/release, ordinary refusals and setting boundaries do not receive an invented relationship penalty.

A known person can be neutrally familiar below 25; the threshold establishes favorable/unfavorable association. A relationship does not reveal a hidden player's original identity through an unfamiliar appearance. Keep actual recognition evidence, public identity and relationship separate.

## Shared implementation

`relationships.js` supplies typed IDs, per-player records, aliases/migration, signed clamping, event deduplication, encounter discovery, tier meanings and reaction-policy registration. Example keys are `npc:priya`, `form:kibbles`, `entity:<stable-instance-id>`. Explicit NPC/form/entity IDs with the same suffix are separate. A small whitelist maps genuine legacy aliases to their existing entity, including historical Erin labels; it does not merge arbitrary matching names or types.

Records live under `world.relationships.actors[entityId][playerId]`. JSON save/reload preserves values, event receipts and per-pair memory. New local characters receive a persisted unique local identity unless an explicit player ID already exists; existing legacy identities remain compatible. Stable player identity survives changing forms and moving the character save to another slot. A different player's record starts independently. Schema-1 records migrate without summing scores or resetting canon. Canonical records win ambiguous alias collisions; the other record is archived in `migrationConflicts`. Old actor and Dev scalar snapshots cannot copy another player's relationship into a fresh pair. Existing canonical scores also take precedence over stale unbound Dev snapshots.

Native NPC fields bind to this same store. Kibbles and arbitrary owned forms bind through the shared form path. Erin's historical `trust` property is a compatibility alias to her relationship; it is not independently stored/adjustable social progress. Historical divergent values are retained in legacy provenance while existing canonical relationship wins. Existing mastery flags/progress are not revoked. Her established cooperative route now reads relationship 100, with its existing controller conditions; no generic all-form mastery reward is added.

Care no longer awards both a social point and a separate trust point. Erin's daily considerate-care allowance and remembered topics are per player. Canine care/boundary/promise memories and social event receipts are scoped to the relevant pair; unrelated environmental events remain physical-world records. Conversation history is partitioned by player AND actor, with a current-player compatibility view for existing consumers. A new player never receives the other player's private AI conversation.

`relationship-ui.js` adds bars to the ordinary Stats drawer for encountered NPCs, owned/encountered forms and encountered entities. It reads canonical pair values, not the active form's score as a fallback for another target. Named entity identities remain stable; anonymous combat instances receive persisted distinct IDs so two same-named opponents do not share one meter. This remains a local-save game; no authenticated multiplayer transport is implemented by these changes.

## Reactions and future content

Every new entity definition must provide positive triggers, negative triggers, actual deltas, preconditions, event identity/cooldown, recipient and fallback/AI portrayal. Existing known characters have distinct policy descriptions. Actual controllers apply changes through `event`/`social`; generated prose never changes scores. Existing shared weights are retained for implemented NPC actions. Initial canine-specific care/respect/earned-praise +1, kept-promise +2, mistreatment/broken-promise −2 and scolding −1 are implementation tuning, not newly claimed owner-approved exact numbers.

A scene actor can supply `relationshipPolicy` alongside its existing registration. A living profile or saved form can supply the same metadata. Missing authored policies are reported as configuration gaps; conservative generic +1 praise/−1 criticism defaults do not mean the character's individualized design is complete. Unsupported physical interactions are not created merely because a bar exists. Normal body, audience, actual action and permission guards still apply.

Clear expressed praise/insults are handled by ordinary dialogue adapters with event-window deduplication. Private/hypothetical narration cannot be scored as speech to an external NPC. For canine forms, praise rewards require actual earned context; repeating private praise is not a free point source. The shared considerate-care limit remains five per day for Erin's established route. Existing separate job/quest rewards still require real completion, not dialogue claims.

## AI/backend handoff

Selected facts contain the **same entity's** relationship score, tier meaning, limits and positive/negative trigger descriptions. Dart's recorded/action narrator explicitly links to Dart's own relationship rather than borrowing Kibbles'. Current facts remain authoritative over old narrative claims. Friendship can soften an appropriate leisure request; it never erases hard commitments or grants permanent authority.

The prepared Worker now exposes `relationshipVersion: directed-pair-v2`; the candidate client checks that before generation/inspection. The previously pasted Worker predates this latest change. Use the latest `services/ai/deploy-worker.mjs` when deployment resumes. No provider/model/sampling/budget change or paid generation is part of this work.

## Boundaries still requiring authored controllers

The −75 band supports establishment-specific refusal and −100 permits possible hostility, but neither automatically bans every venue or starts combat. Each establishment/character still needs its explicit policy, recognition conditions and actual action/controller. High relationship never unlocks protected rooms/stock or secrets by itself. Future content supplies these character decisions through the shared interfaces rather than building another storage/bar system.

Verification distinguishes deterministic unit tests and isolated browser persistence/UI tests from actual provider prose quality. Current local evidence is recorded separately; production remains unchanged pending the owner's later Worker update and release testing.

## Verification closeout

The full regression passed 1,497 cases across 88 suites. Three subsequent focused cases verify same-name NPC/form routing and rejection of pending replies after the player identity changes; the focused AI client run passed 45/45. Twelve relationship browser checks, eight context inspection checks and ten Charity/business checks passed using isolated saves without paid model requests. Evidence and source hashes are recorded in `docs/audits/universal-relationship-verification.json`. Stable entity IDs select AI speakers; ambiguous names cannot borrow another actor’s profile or conversation. New local player IDs persist through reloads.
