# AI integration audit — 19 November 2026

## Scope and evidence

23 isolated synthetic browser fixtures exercise the actual feed/enrichment/context-building path. Requests are intercepted before networking, normalized with the current server source, and assembled into provider messages. All fixtures completed without harness errors. No owner saves, credentials, paid generations, or deployment changes were used.

This is a source-level request assembly audit, not an authenticated capture of the deployed Worker's outgoing requests. Model response quality and production bundle equivalence are not established by these results. Reproduce with `node scripts/audit-ai-context.mjs` against the local game server. Full staged records are in `ai-context-path-capture.json`.

## Confirmed integration defects

1. **Nearby actors disappear.** The office fixture has Nadia and Priya at the scene source. Their names reach the frontend packet but are absent from the server's NPC facts projection. A co-present test player is absent even from that packet; the remote player is correctly excluded.
2. **Room identity is incomplete.** Canonical bedroom/kitchen/shop room IDs are not consistently forwarded by the generic scene options builder. The office path supplies a room, while several apartments and shops do not.
3. **Our venue-context change truncates room detail.** Priya's 232-character bedroom description is available at source. Prepending public venue facts consumes most of the shared 600-character description budget, leaving only the beginning of the bedroom description. This is an integration regression, not evidence that the model ignored a complete room description.
4. **Richard's public guest context is incompatible with the server projection.** His safe public override contains room/activity/music/attire/watch/scent fields, but the projected description is empty and several public fields are discarded. The private-ledger test marker remains excluded.
5. **Public identity can fall back to the original player.** An NPC initiative while Bella is the visible canine body supplies Layla Hamza as player identity. Private-form packets separately preserve Bella's saved name and the single-body relationship.
6. **Travel and transformation facts are incomplete.** Structured travel mode and body capabilities do not survive the narrative projection; transformation appearance is also discarded there. Route plans and completed travel are not distinguished by the final-event flag. Event text can partly compensate but is not a complete structured contract.
7. **New registrations do not connect the entire AI path.** A newly registered scene actor has no AI target profile. A newly registered home does not automatically populate canonical header/AI room context. Current registration systems require additional wiring.
8. **A non-conscious registered form can receive a conscious-form prompt.** The generic private-form path does not preserve the registered consciousness distinction in its projected embodiment.
9. **Long input silently loses the final question.** The long-message fixture retains the beginning/background but clips the actual trailing question at the 1,600-character message boundary.
10. **Other form state is selectively lost.** For Erin, the frontend includes transformation status, grooming, worn items and routine information that does not all reach the form projection. Not every omitted numeric mechanic belongs in prose; required physical and release facts need explicit selection rather than incidental survival.

## Assets and safeguards

Room artwork is rendered in the UI, but these provider requests contain no image content or room-art reference. Displaying an image does not give a text request visual knowledge. Asset-derived facts therefore need a reviewed text description or a separately supported vision path. This audit does not claim a visual review of every asset.

The capture preserves useful safeguards: private Richard ledger data is excluded, remote players are excluded, Bella's private identity is retained, and private-form embodiment describes one shared physical body. Unworn footwear's limited perception is intentional; the wearer's remote kitchen detail must not be added merely because the UI can display it.

The deliberately inconsistent home-flags fixture is an invalid-state validation probe, not proof that normal play creates that state. Saved-name aliases produce differing dossier paths; behavioral impact requires focused testing. Event-time snapshot drift and oversized-context fallback remain source-review risks, not reproduced production failures.

## Repair and validation order

Establish one shared, versioned context contract before expanding content further: stable IDs and aliases; separate public/original identities; exact canonical room and permitted description; present actors/players; viewpoint and access limits; body, consciousness and available actions; time and planned/resolved event status; relevant conversation history; explicit budgets and reported omissions. Preserve those fields through one server projection. Validate new content registrations against this contract.

First repair and test the demonstrated losses above. Then add an authenticated read-only inspection path using the same request builder as generation, with secrets excluded and no inference or budget reservation. Capture the deployed provider payload through the owner's existing connection. Only after payload equivalence and required-field coverage pass should the same model be retested or compared with another model. These captures do not establish that Cydonia is the primary cause.

No runtime repair, model change, or publication is claimed by this audit.
