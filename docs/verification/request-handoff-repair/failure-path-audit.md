# Post-run interconnected-path audit

Initial v8 status (historical): live fixture run finished, 34 real calls, $0.06854232, no unsettled reservations from that run. This is a failed acceptance result. Paid retries are stopped. The older production reservation is not cleared. New source/profile work is outside the frozen tested candidate.

## Payment and drink lifecycle

Inspected: npc-actions-ui.aiNpcConversation, roleplay-input.parse, text-actions.modality/evidenceModality, npc-actions.plannerPacket/parsePlan/resolve, shop.pay adapter, burkes-retail.addDrink/quote/checkout/tick, ai-ui second call, worker messagesFor/sceneFacts, response validation and remembered dialogue.

Confirmed trace: the model selected shop.pay with the correct request. resolve then classified “I would like to pay for the order now” as desire and blocked it before checkout. Menu checkout bypasses that language classification and reaches the same real register guard. Gold, quote revision, presence and stock must remain guarded; removing all desire/negation protection would be an incorrect fix.

Separate lifecycle defect: addDrink resolves an unpaid selection, not drink preparation. Its receipt has text explaining this but no typed fulfillment state. The narration can treat generic status=resolved as permission to begin preparation. Audit/fix must carry selection/payment/preparation/possession separately, and must not charge gold, prepare or deliver through prose.

Required counterexamples: polite current payment; bare wish; later plan; hypothetical; negation; private thought; mixed clauses; stale quote; insufficient gold; absent cashier; double submission/reload. Verify menu/text payment reaches the same checkout and that no unpaid selection becomes a prepared or owned drink.

## NPC menu intent, speaker and history

Inspected: department-ui.departmentAction, marketing-ui.marketingAction, cherished-touch-ui.cherishedAction, richard-home-ui.richardSuiteAction, npc-actions-ui.npcMenuMetadata/npcMenuReply, ai-ui.aiSceneOptions/aiEnrichEntry, ai-context.build/remember, worker sceneFacts/resolvedReplyMessages/replyPurpose.

Confirmed: the menu result contains an NPC-authored answer or permission receipt, but the menu player input is represented only by an internal action name. The worker asks for a reply to that result. This leaves “who asked what” unresolved; examples treated Daniel's schedule answer as the player's overview, ignored the Dart topic, and restarted a visit introduction. Richard's work-information scope is now explicit, but that fact alone did not repair the missing communicative act.

Output validation checks speaker/schema leakage, not whether the reply answers the menu topic. Accepted wrong replies enter history and can contaminate later turns/reloads. Source menu labels, request intent, NPC decision, factual answer content and fallback prose must be distinct. Preserve original spoken words for typed requests and do not fabricate quoted words for a menu selection.

Required coverage: all four failing menu types; matching text paths; informational answer versus actual permission; current guest versus employee; hallway access versus storage; existing conversation versus new greeting; save/reload; late scene change. Check both the exact outgoing request and accepted feed/history.

## Transformation dispatch and factual checks

Inspected: item equip/Erin transition frame, current reached-region facts, ai-context target/build, ai-ui kind-specific task and guarded branch, narration-grounding, cleanReply/feed/history handling.

Confirmed: ai-ui.guarded includes NPC/narration/Kibbles but excludes kind=transformation. Therefore generated transformation prose does not enter factual correction. The reached target is supplied, but unsupported prior arch shape and an invented Unit3C hallway can be accepted. priorKnown is not a retained description of the prior anatomy; it cannot justify a specific unprovided former arch shape. Do not store old body copies to solve this.

Required coverage: actual transformation-kind dispatch, known versus unknown direction, reached regions only, no invented prior anatomy, actual inside/outside location, worn items only, bounded correction, failure fallback preserving the already-resolved stage, no repeated equip/time/resource action. Targeted semantic checks are not proof of universal factual understanding.

## Relevant-context selection across these paths

Inspected actual provider requests and source projection. The earlier duplicate reduction retained substantial unrelated dossier/work/world material. Menus lack a clear player request while unrelated professional background remains prominent. This is relevance/role competition; it is not evidence that the provider's context limit overflowed.

The next packet design must separate: concise speaker/voice, actual player request/menu intent, relevant typed facts, binding controller result/conditions, and relevant recent exchange. Full NPC/form profiles remain canonical game data, not mandatory content in every request. Do not silently truncate required facts or remove knowledge/privacy/permission gates. Topic selection and required fields must be tested offline before paid retries; no extra paid summarizer is needed.

## Not yet implemented / remaining audit work

- Implement and verify polite-request classification without weakening negative/private/future guards.
- Add typed drink fulfillment state from the real order controller.
- Add explicit player communicative intent and NPC answer/permission roles for every affected menu.
- Build deterministic relevant-field projection and packet diagnostics; preserve necessary conditions/history.
- Include transformations in factual validation and test the actual UI correction path with captured bad responses.
- Review omitted acceptance branches (Priya chose conversation, so cat entry was not exercised in this real run).
- Navigation and uninterrupted normal-play acceptance remain unrun; do not claim a comprehensive pass.

## v9 implementation and verification checkpoint

Payment: context-specific polite service classification implemented without weakening self-action desire/private/future guards. Focused source/controller tests pass. Typed shop lifecycle reaches backend facts; 18 retail tests pass.

Menu intent: actual player request and NPC-owned answer/decision are separated at source, UI metadata and backend. Compact menu packets for four affected NPCs preserve result/permissions/identity/body/property while removing unrelated biography/history. Worker commit 0de9247 deployed as request-handoff-v9. 79 worker tests, four real browser handoff checks and controller regressions pass.

Actual Cydonia four-menu retest FINISHED all four scenarios: six calls (including two schedule departures), $0.00335672, combined run 40 calls/$0.07189904. All four primary replies answer the topic. Factual accuracy still fails: invented vending machine; unrecorded dog training/work restriction; Charity's eye colour changed; Richard invented papers/desk. Separate scheduled departures invent deadlines/office facts. These follow-ups are independent messages, not failed menu answers. No claim of semantic acceptance.

Transformation: kind=transformation now enters validation. Captured former-arch claims, high-arch direction reversal, unsupported region/direction and exterior/interior contradictions are checked. Actual inventory/browser flow demonstrates one correction and preservation of authored stage/clock/equipment after two bad replies. This is bounded rule coverage, not universal semantic validation. Held local client only.

Owner requests completion of independent live scenarios even after semantic failures; the remaining broad v9 suites run sequentially within the shared 80-call/$0.50 guard. Stop for technical/unknown-cost/limit blockers. Preserve skipped branches and incomplete normal-play acceptance explicitly.
