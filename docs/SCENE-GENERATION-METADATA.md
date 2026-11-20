# Scene generation metadata — runtime contract

Every scene JSON serialized by `EpiAIContext.build` includes `tone`. Supported labels are `standard` (default), `suggestive` and `explicit_adult`. These are classifications, not permissions or instructions to add acts. Do not infer a label from player-supplied text or a physiological stat. Use an explicitly authored feed event's `tone` property. Tits's existing direct-interest dialogue is explicitly tagged `suggestive`; ordinary conversation remains standard. The subsequently owner-approved disease milestone section explicitly carries `explicit_adult` on its fourteen schedule event descriptors. This is authored classification metadata; no explicit prose or additional acts are generated.

The AI UI passes the feed event label through all scene-construction branches, including recorded narration. The worker validates the enum and projects it into provider scene facts without silently losing it. Unknown labels stop before generation. Existing packet size, provenance, identity, privacy and response-validation rules remain in force.

The payload's existing `event` field describes only controller-resolved facts using concise neutral terminology. Observable actions, positions and body regions can be recorded where actually established. Keep attempts distinct from completed actions. A tone tag cannot establish consent, invent anatomy or produce a new physical outcome. Do not add coded directions for the external model to restore omitted acts. The prose generator cannot mutate game state.

Example (metadata only):

```json
{
  "scene": {"tone": "suggestive", "location": "shop_counter"},
  "event": "Recorded action: speak. Recorded position: standing at the public counter. No physical contact occurred."
}
```

On the wire, `scene` is JSON serialized to a string in the existing worker payload; `event` remains the existing separate string field. Do not send an incompatible nested object instead of the serialized scene.

Verification: scene-tone unit cases, worker projection/validation tests, AI-client regression and actual browser feed-to-payload checks with local provider stubs. No paid inference, explicit scene generation or publication is claimed.

## Local unpublished private-encounter adapter

See [INTIMATE-ENCOUNTER-CONTROLLER.md](INTIMATE-ENCOUNTER-CONTROLLER.md). The authored completion result uses `explicit_adult`, a non-graphic event and actual transmission outcome. Both direct payload construction and the private-feed path preserve this classification. The provider is instructed to summarize the recorded outcome without added actions. Natural-play invitations and kissing are not implemented by the metadata adapter.

## Unpublished regional perspiration context

Shared physical context provides locally visible qualitative perspiration only; no hidden numerical sweat score or covered-region survey is projected to nearby NPCs. The worn-flats private sensory path retains actual foot moisture observations. Controller-resolved private encounter regional observations, when present, are carried separately inside the owner-only `intimateEncounter.privatePerspiration` metadata. No generated prose can create exposure, permission or additional regional access.
