# NPC conversation/action bridge — unpublished code review

Status: implemented locally; not committed, submitted, versioned or published. The real Cydonia model has not been exercised. Form Repository and staff authoring remain excluded.

## The architectural change

Before this change, phrase handlers could intercept player speech and optional AI generation could only rewrite a result already chosen by scripts. Character prose could agree to an interaction without creating a corresponding game state.

AI-on NPC speech now has an action decision stage. It receives the actual spoken words and observable actions, relevant conversation history, pending offers and a catalog of existing controller operations. It returns natural dialogue plus either no action or one proposed action. The provider request uses JSON mode for this internal decision only. Plain prose remains usable as dialogue and never executes an action.

The local registry checks the saved turn, player, participants, body, space, pending contacts, quoted order and current controller eligibility before executing a proposal. It caches the result so a duplicate response cannot repeat a gift or payment. Unknown or unavailable proposals become blocked results, which the model can explain in character. They do not turn into generic phrase-recognition errors.

After an action resolves, the controller result goes back to the model for ordinary prose. The first draft is not displayed as if the action already happened. Failed post-action generation retains the actual result. Controller-supplied durations take precedence over ordinary conversation time. NPC conversation does not preemptively end contact before a stop/continue choice is interpreted.

## Registered existing operations

- Tits: kiss offer/accept/decline/stop, actual pending hug acceptance, route to the public counter, private invitation/escort/end/leave, fluid request/accept/stop, product selection, drink ordering and payment.
- Nadia: an agreed form-demonstration wait, bounded by the existing conversation grace. A witnessed change triggers the established observation/reaction path; successful reaction or separation releases the hold. It grants no invitation, ownership or automatic following.
- Priya: existing cat offer, acceptance, decline and actual entry, with her agreement knowledge carried to the final provider. See CAT-IDENTITY-AND-OWNERSHIP-REPAIR.md.
- Shared: end conversation, actual owned gift transfer, existing dating-readiness requests.
- Richard/Priya/Daniel: adapters to their already implemented work/visit procedures, including real pending work acceptance and refusal. No assignment, visit or reward is fabricated by prose.

Explicit player item/navigation/combat commands retain their existing controller routes. This is not a claim that every possible sentence or every future NPC feature is implemented. The model can converse outside the action catalog; only implemented mechanics can be executed.

## Supporting continuity and learned information

Physical range remains separate from hearing. The action registry preserves those checks. Conversation state is player-scoped and survives the actual witnessed form change. Learned records and boundary tracking observe accepted character speech rather than a pending AI placeholder; the once-only illness advisory remains a recorded delivered warning.

## Files to review

New core: rebuild/hub/npc-actions.js. Browser adapter: rebuild/hub/npc-actions-ui.js. Integration: ai-ui.js, ai-context.js, social-ui.js, index.html, conversation-continuity.js. Provider: services/ai/core.mjs and worker.mjs, with regenerated deploy-worker.mjs. Fluid contact gains an explicit deferContact option without changing the existing direct-request path. Learned information uses player-guide.js and relationship-interactions-ui.js.

## Verification limits

The local suite, controller tests and browser scripts validate request construction, proposals, outcomes, stale-state rejection, state persistence and text/menu paths. Browser transport is simulated; it does not prove Cydonia understands every utterance or follows JSON mode correctly in production.

The selected environment has no configured secret bindings, AI credential environment variables or saved authenticated test session. Cloud desktop is reported enabled, but no desktop interaction/viewer tool is exposed in this turn. Live Cydonia validation remains blocked. The client and worker must be released together after code review and live-model acceptance; no production deployment was attempted.

Later owner evidence adds the cat identity/ownership repair and exclusive pending-choice synchronization described in CAT-IDENTITY-AND-OWNERSHIP-REPAIR.md. Candidate backend capability is checked before spending on action decisions; deploy the compatible worker before the client.
