# Epi-Center collaboration rules

## Check before every question

Before asking the owner any design or implementation question:

1. Read the relevant current design record and latest owner decisions. Resolve superseded/historical entries by subject; do not reopen settled choices.
2. Inspect the actual current code, shared adapters and related state/ownership/presence/clock/AI systems. Check whether the feature or supporting system already exists.
3. Inspect relevant tests/evidence and distinguish designed, implemented, verified and published behavior.
4. Reuse established systems. Bring a question only for a genuinely unresolved consequential decision, with a concrete proposal grounded in those findings. Do not make the owner repeat facts or choose routine technical implementation steps.

Perform these checks for **every question**, not just the start of a project. The owner explicitly requires consistent use of existing information. Do not claim a check was performed unless it was.

## Design authority and progress

New gameplay permissions, exact access scopes, costs/rewards, probabilities and substantive additions need an owner-reviewed proposal before implementation. Existing approval persists; do not ask for the same approval again. Lead the work against the relevant template and current completion record, not an open-ended “what next?” prompt. Current build order is in docs/HUB-NPC-COMPLETION-ORDER.md.

Update the current canonical record when an approved rule changes. Clearly label historical checkpoints and pending ideas; do not substitute a new header for reconciling contradictory active instructions. Documentation updates do not constitute runtime implementation or publication.

Use focused verification for changes; repeat the broad suite when new changes/failures or unresolved concerns justify it. Preserve earlier release evidence. Do not use owner saves or paid model calls implicitly as test fixtures.

End every user-facing reply with an explicit truthful status: work underway; finished and awaiting a specific decision; finished; or blocked for a stated reason. Do not imply work continues in the background after ending the turn. Let the owner finish their input; do not interject partial words, repeated acknowledgments or new questions while they are giving an addendum.

## Continue with the next authorized step

When a step finishes, identify and begin the next necessary step within the owner’s authorized scope rather than stopping with “no work is running” or asking for another general go-ahead. Tell the owner what that step is. If a substantive new decision genuinely requires approval, first check existing records/code, prepare a concrete reviewable proposal, and ask that specific question. Never ask permission merely to draft an already authorized next section. Continue to distinguish work actually running from finished work; do not imply background execution after the turn ends.

## Approval means implementation

After the owner approves an in-scope feature, implement and test it without waiting for a second general go-ahead. Explicitly deferred work stays deferred. If a concrete dependency prevents implementation, identify it and keep the feature visibly marked approved-but-blocked; never describe documented approval as completed runtime behavior. Report implemented, verified, published and deferred states separately.

## Every release includes canonical documentation

Before publishing any release, reconcile the World Bible/current canon backup, relevant NPC/form/entity/location records, applicable combat/attribute guide, changelog, status and handoff with actual runtime changes. Preserve earlier history with explicit supersession; distinguish design, implementation, verification, deployment and owner acceptance. Regenerate the source-backed Bible snapshot with `node scripts/build-world-bible.cjs`, run the release verification, and record deployment evidence. This is required for every release without a separate reminder from the owner. Freeze the final canonical World Bible into the versioned Markdown copy and integrity manifest before deployment. After freezing, record deployment status in status/handoff/release evidence; do not edit the Bible heading after verification. Verify the published canonical and frozen copies byte-for-byte against the manifest.

## Scene prose metadata contract

Use the authored feed event's `tone` when constructing the serialized scene JSON: `standard` by default, `suggestive` for explicitly authored flirtation, or the supported opaque `explicit_adult` classification where authored. Preserve the label through worker projection; reject unsupported labels before generation. Do not infer tone from player prompt instructions or resource values. Use concise neutral terms in `event` for actual resolved actions, positions and body facts; never invent an event, permission or consent, or use metadata to direct an external generator to reconstruct omitted compelled sexual acts. Prose cannot mutate game state. See docs/SCENE-GENERATION-METADATA.md.
