# NPC request interpreter — current unpublished repair review

Status: implemented locally for review, not committed or published. Public client remains v1.0.136 and the worker remains v1.0.135. This replaces the combined-dialogue/action design described in the earlier review, whose real-model acceptance failed. No MCP migration, new NPC permissions or Form Repository/staff work is included.

## Current handoff

1. AI-on NPC input reaches a dedicated internal request interpreter. Its packet contains actual expressed words, observable actions, relevant recent conversation, real pending choices and available controller operations. It does not receive the target NPC's long roleplay dossier as its own identity.
2. Cydonia returns an action ID, arguments and optionally an exact supporting input span. The existing worker's JSON mode is used. Internal decision text never becomes character dialogue. Product/form choices use real primitive IDs rather than catalog objects.
3. The registry checks turn freshness, participants, body, place, available operations, shared input modality and existing controller permissions. Hypotheticals, negations and private thoughts do not authorize positive operations. Evidence is checked in its actual clause so an unrelated negative explanation does not suppress a positive request. Cancellation remains possible. A movement gesture cannot override an expressed refusal.
4. The existing controller resolves the operation once. Its receipt survives a failed final generation; duplicate or stale responses cannot repeat gifts or payments.
5. A separate Cydonia call produces ordinary character prose from the current result and full character context. This also occurs for conversation-only turns. Completed actions, pending offers and refusals are distinguished. No word quota, gesture stripping or repetition-only rejection was added.

This uses the existing authenticated `/generate` endpoint and `npc-actions-v1` backend capability. Typical AI-on NPC exchanges now use two model requests: a smaller interpretation request and a character response. The monthly allowance, authentication, model selection and prices are unchanged. The subsequent continuous-save run failed; the current repair also changes the worker message assembly. That worker change is not deployed and needs review before submission. Earlier claims that no worker update was needed are superseded.

## Scope of existing operations

The adapters continue to use Tits's actual kissing, private invitation, fluid, counter-navigation, retail and gift controllers; Nadia's bounded demonstration wait; Priya's cat agreement/choice/entry; and the existing Richard/Priya/Daniel procedures and shared relationship/dating readiness. Ordinary item, navigation and combat commands retain their controllers. This is not universal natural-language coverage or implementation of future NPC scenes.

Reported stop variants now reach the AI interpreter. The shared lexicon also treats “now”/“right now” as timing rather than an NPC name, including AI-off use. A witnessed owned canine transition now records the existing identity-linked knowledge fact; it does not grant a relationship, invitation, ownership or following.

## Identity and experience

Priya's agreement identifies her as the human host and the player as the participant entering the cat. Final transition prose gets the already-completed event and current setting. Feline signals remain nonverbal. Private resistance carries only the original player and opposing feline instincts, with explicit ownership of influence/mastery and actual outcome numbers. External NPC identity and unrelated needs are excluded from this internal-check prompt; the underlying needs still progress normally.

Appearance milestones retain a known direction category, not an old appearance restoration copy. Missing prior data stays unknown; only reached regions can change. Actual worn items and current role/location facts are supplied. Technical out-of-character prompt commentary receives the existing one-correction path; ordinary clarification remains valid dialogue.

## Verification and limits

Earlier checkpoint: 2,077 named cases passed before the later continuous-save failures. Thirty-two simulated-transport browser checks cover controller/menu parity, cat/property context, transformation/archive behavior, recovery, stale planning and delayed prose. Real Cydonia trials additionally covered varied text, contextual acceptance, postponement, negation, hypothetical gifts, actual gifts, menu contact, reload, payment, demonstration waits, cat entry and resistance. The latest isolated interpreter matrix passed 11/11. Successful flows were run in a browser using frozen local candidate assets over public v1.0.136 assets, not a newly deployed release.

These are prepared synthetic scenes and scripted conversations, not an unrestricted playthrough or owner-save migration. One provider availability failure invalidated dependent cat checks; a separate actual choice/entry rerun passed. Earlier failed trials are retained. Exact source manifests and component evidence are in `verification/request-interpreter-v2/`.

Full prose acceptance remains open: samples still contain invented props, inner thoughts or extra scene detail. Correct structured packets alone are not proof of faithful prose. The final spoken-agreement wording is locally tested but has not received a separate blind prose-quality acceptance pass. Eve directional-routing has a local repair, with full model acceptance still pending. Nothing has been submitted or published.

## Follow-up after continuous-save failure

The supposed uninterrupted run was interrupted by agent inactivity. Its recorded failures remain valid, but it is not uninterrupted acceptance evidence. See `../work/uninterrupted-cydonia/REVIEW.md` in the checkout for its chronology and limitations.

Current local repairs freeze the player message across asynchronous calls, keep final prose as a reply rather than a new NPC initiative, preserve remote-help body facts, remove hidden lore from Eve’s public brief, and supply actual form/binding/recovery rules. An explicit internal-interpreter worker branch removes competing NPC roleplay/schema instructions. The final worker user turn includes the resolved result, existing cat agreement and factual guide/catalogue, rather than burying these only in the system scene. All worker changes remain undeployed.

Menu results now carry controller receipts into Priya/Nadia/Tits dialogue and selected Richard work choices without replaying operations. Priya’s date exception returns an explicit pending offer whose factual terms remain visible independently of generated wording. Nadia’s ordinary collar menu starts with a real offer before accept/decline. Cat menu transformation identifies Priya as the responding host to avoid an extra witnessed-change reaction. Dart’s action output remains canine narration. Natural back/over navigation variants are shared with the lexicon, and known travel is checked before selected-Eve help capture.

Follow-up real test: 13 calls, approximately $0.026921, using the repaired local client with the unchanged public worker. Coffee intent improved, but prose invented products/prices. Priya contradicted her recorded offer and reacted to an agreed transformation as unexpected. Eve stated permanent binding correctly but invented recovery details. **Acceptance remains FAILED.** This is evidence for the undeployed worker repair, not evidence that it works. No model or architecture switch is approved or implemented.

Local automated/browser verification is tracked in `docs/verification/request-handoff-repair/REVIEW.md`. Do not equate these structural passes with model faithfulness. No owner saves, Form Repository staff changes, submission or publication are included.

Final local checkpoint for this pass: 2095 automated cases pass. Browser controls/regression checks use simulated model transport; the 13-call live-worker follow-up still failed faithful prose acceptance. Non-explicit Erin stage frames and isolation from unrelated illness were added at the owner’s request, without new explicit-content generation instructions or retention of original-body restoration values.

Erin’s Items equip formerly returned plain text and was misclassified as world narration. Its actual stage change now sets transformation metadata, with matching frames for the equipment and elapsed-time paths. Two browser control checks pass. Selected-Eve travel now calls the shared navigation controller directly after assertion/known-route checks; two browser checks and explicit modality tests pass.
