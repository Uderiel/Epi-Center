# Shared scene-context repairs — implementation candidate

The owner authorized repairs after the 23-fixture audit, with an explicit requirement to check our integration and reporting before judging Cydonia. This candidate applies the existing NPC/form design template, especially identity, capabilities, privacy, narration and evidence sections. It does not replace that authoring template or invent new character canon.

## Implemented

- Separate public venue facts from the canonical room description. Preserve the actual room name and full permitted description through the provider projection.
- Carry nearby NPC/player identities through the same context record. Include existing hub projections/discovered shop characters alongside the scene-presence engine; exclude remote players.
- Use current visible identity for NPC initiatives. Keep original player identity in the private-form channel only. Resolve Bella's saved-name alias through the canonical canine profile.
- Preserve public Richard guest details without private work context. Prevent the queue's history refresh from reattaching valid private office conversation history to a guest request.
- Preserve recorded travel mode, planned versus resolved event status, transformation appearance, living-profile consciousness and selected form routine/grooming/equipment/release facts. Unknown event status remains unknown; prose cannot resolve it.
- Read registered form metadata without initializing or changing the saved game state. Non-conscious forms cannot receive a separate-consciousness dialogue prompt; existing authored sensory mechanics remain available.
- Let a scene actor's optional authored AI profile be consumed from its existing registration. Missing profiles remain explicit configuration issues. Registered locations with room metadata can supply canonical room presentation/context without editing another hard-coded AI list.
- Reject overlong messages/scenes with an explanation before generation instead of silently dropping the final question or replacing required fields with a smaller partial context. Limits: 1,600 message characters; 10,000 combined scene characters; 2,400 description characters. Existing request-byte/model-context guards remain in force.
- Keep hidden footwear narration within its own location and sensory snapshot. The owner's header may display Priya's remote room; that label is not a perception available to an unworn pair of flats.

## Owner inspection and backend compatibility

`prepareGeneration` is now the shared provider-body builder for inference and inspection. Authenticated `POST /inspect` validates/assembles the body, checks live model metadata, and returns the body plus a SHA-256 digest. It does not call completions, reserve allowance, settle usage, or expose authorization headers/provider credentials. Origin/authentication/body-size limits still apply.

Settings offers **Inspect last request · no model call** and **Inspect diagnostic requests · no model calls**. The last request is held only in session memory and captured immediately before sending, after queue history refresh and any repair changes. The report contains conversation text: review it before sharing. This is request assembly inspection, not a claim of provider acceptance or a saved production packet capture.

The candidate verifies backend `scene-contract-v1` support before generation. An old Worker causes an explicit update message and no completion call. Protocol remains `grounded-turn-v1`; model, sampling settings, pricing ceilings, monthly cap, secrets and Durable Object bindings are unchanged.

Prepared deployment file: `services/ai/deploy-worker.mjs`, regenerated from current sources. Update the existing Worker; do not create another service or put a provider key in the browser. No deployment was performed from this environment, which has no authenticated Cloudflare session. A public health request from this environment returned HTTP 403, so deployed capability is not freshly verified.

## Evidence and limits

Local validation: **1,463 automated cases across 86 suites**, 24 isolated browser fixtures with 22 context assertions, and 22 browser integration/inspection controls passed. The final privacy refinement also passed all 44 client cases. Syntax and diff checks passed.

See `ai-context-repaired-capture.json` and `ai-context-repair-verification.json` for the final fixture matrix, provider-message assemblies, hashes and checks. Browser inference/metadata responses used for control tests are mocked. No paid calls or owner saves were used.

The invalid overlapping-home-flags fixture remains a diagnostic probe; this patch does not claim to repair every malformed save. Event-time snapshot drift during bulk scheduler advances remains an unproven source-review risk. New actors still need authored personalities, and new locations still need authored room metadata. Missing facts do not become invented defaults. Detailed routines/quests still need native controllers and their own focused tests.

Room pixels are not sent to the text model. Canonical text descriptions remain the source of room facts; this patch does not claim that Cydonia viewed the approved illustrations. Actual model response quality remains pending until the updated backend and candidate client are connected and the same real-model cases are rerun.

## Next executable steps

1. Deploy the prepared Worker through the owner's existing Cloudflare session; confirm `contextVersion: scene-contract-v1` and `inspectionVersion: provider-request-audit-v1`.
2. Connect the candidate client, inspect the isolated diagnostic requests, and compare returned body hashes/facts against the local assemblies.
3. Rerun the same Cydonia cases and the in-game personal follow-up, room perception and animal-signal interactions. Review exact replies against canonical facts before considering model or sampling changes.
4. Publish a versioned game release only with an honest statement of which local, deployed and real-model checks passed. Provide the direct play link and testing checklist in chat.

Local repairs are implemented. Deployment and real-model acceptance are not complete; this is not a public release.
