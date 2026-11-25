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

For this and every future NPC template, the assistant owns the checklist and section order. Do not ask the owner “what next?”, which section to tackle, or whether to draft the next already-authorized section. Identify an actually incomplete section and present its concrete proposal in the same response; use plain examples so the owner can review it aloud while driving. Ask only about the substantive proposal or a real unresolved rule. Let the owner finish addenda before moving on, and retain approvals without reopening them. This is a standing workflow, not a per-character preference.

Realtime turn-taking: wait for the owner to say "done" or explicitly request an answer before replying to design addenda; silence alone is not completion. After the owner yields, announce any actual pending work and its next update point briefly, so they know a response is coming. End the spoken response with "I'm finished speaking." Give meaningful work updates while the owner is not speaking; do not interrupt an addendum with progress chatter or partial acknowledgments. These are response practices, not a claim to control the voice interface's queued audio or turn detection.

## Approval means implementation

After the owner approves an in-scope feature, implement and test it without waiting for a second general go-ahead. Explicitly deferred work stays deferred. If a concrete dependency prevents implementation, identify it and keep the feature visibly marked approved-but-blocked; never describe documented approval as completed runtime behavior. Report implemented, verified, published and deferred states separately.

## Every release includes canonical documentation

Before publishing any release, reconcile the World Bible/current canon backup, relevant NPC/form/entity/location records, applicable combat/attribute guide, changelog, status and handoff with actual runtime changes. Preserve earlier history with explicit supersession; distinguish design, implementation, verification, deployment and owner acceptance. Regenerate the source-backed Bible snapshot with `node scripts/build-world-bible.cjs`, run the release verification, and record deployment evidence. This is required for every release without a separate reminder from the owner. Freeze the final canonical World Bible into the versioned Markdown copy and integrity manifest before deployment. After freezing, record deployment status in status/handoff/release evidence; do not edit the Bible heading after verification. Verify the published canonical and frozen copies byte-for-byte against the manifest.

## Scene prose metadata contract

Use the authored feed event's `tone` when constructing the serialized scene JSON: `standard` by default, `suggestive` for explicitly authored flirtation, or the supported opaque `explicit_adult` classification where authored. Preserve the label through worker projection; reject unsupported labels before generation. Do not infer tone from player prompt instructions or resource values. Use concise neutral terms in `event` for actual resolved actions, positions and body facts; never invent an event, permission or consent, or use metadata to direct an external generator to reconstruct omitted compelled sexual acts. Prose cannot mutate game state. See docs/SCENE-GENERATION-METADATA.md.

## Text-first gameplay access

Every player gameplay action must have context-sensitive text access through the same controller as its menu shortcut. Provide common wording variants and action-narration support. Resolve against the actual current room, body, available items and participants; never guess between conflicting targets. Private thoughts, negation and hypothetical questions must not perform actions. Text must preserve the same costs, timing, permission, consent, ownership and acknowledgment gates as menus. Menus remain optional shortcuts. Include text/controller parity and ambiguity checks in verification. Keep the comprehensive source audit and player-facing Eve help/learned-information guide current; do not claim universal natural-language coverage from a routing scaffold or a source count alone.

## Shared language and intent modality

Keep the player reference, recognizer and Eve suggestions grounded in the same shared lexicon. Treat owner examples as a starting set and provide common wording variants. Separate asserted actions from desires/plans, quoted speech, private thoughts and purpose clauses. Never execute “I want to …” as a physical action, reparse quoted dialogue into commands, or queue a purpose as an extra action. Only controller results establish what happened; preserve body, pathing, ownership and NPC decision gates. Pass neutral interpretation metadata to the narrator separately from authoritative outcomes, without leaking private purposes to NPCs.

## Adult audience and fictional themes

The owner describes Epi-Center as a game intended for adults who knowingly choose to engage with mature fictional themes, including potentially disturbing themes. Treat this as audience/content context and avoid repeatedly asking the owner to restate that intent. This statement is not evidence of an implemented age gate, content notice, or individual player's consent record.

Player consent to experiencing fictional themes and consent between characters within a particular scene are separate facts. Participation does not reclassify depicted nonconsensual acts as consensual, authorize every interaction, or bypass controller-resolved NPC decisions and existing boundaries. Preserve actual scene facts and distinguish player content preferences from in-world agreement. This context does not authorize generating explicit sexual content.

## Deferred work and release summaries

Maintain docs/DEFERRED-SYSTEMS-TRACKER.md when a system/choice is deferred or resolved. Check its revisit triggers at each pertinent location/system build and before release; do not reopen settled choices or revive superseded combat changes. Before publication, update docs/NEXT-RELEASE-SYNOPSIS.md against the last publicly verified release plus committed and uncommitted runtime changes, with a brief item-by-item synopsis and actual verification limits.

## One NPC through completion

Owner requires one NPC at a time. Current staged order: Lee’s approved character slice is locally verified; owner now directs Aniya, then Anya, then Spectra, then Repository facility layout/service design, combined integration/acceptance testing and publication. Keep all twelve template sections visible and wire/test approved character behavior incrementally. Record facility-dependent services and final integrated/live acceptance separately; do not demand a finished facility before moving to the next approved character. Staff-wide confirmed physiology may be recorded without starting another full character build. Use ANIYA-SINGH-COMPLETION-REVIEW.md as the active checklist and retain Lee’s deferred integration record. Nothing is authorized for publication during these character stages.

## Full-template status accuracy

Do not say that only final verification remains unless every NPC-template section is actually designed/approved and implemented or explicitly not applicable. Passing component tests is not NPC completion. Keep the current twelve-section matrix reconciled with source; archive superseded status instead of appending contradictory current claims. Lee’s character/voice, family/social block and latest wardrobe/physiology/discount rules are approved and locally implemented. His approved appearance/portrait are locally connected; final integrated acceptance and any explicitly proposed character wording remain visible in the active matrix; paid facility services remain a later build dependency.

## NPC draft quality and progress communication — owner standard

Every NPC review must explicitly present both positive and negative relationship triggers for owner discussion: actual behavior, point changes, warning and repetition rules, recovery, exceptions and evidence. Check for omissions and contradictions proactively and bring a concrete proposal; do not rely on the owner to discover missing dislike triggers. Never silently turn proposed penalties into approved mechanics. Respectful questions, ordinary compliments and disagreement must be distinguished from actual boundary pressure or disrespect.

For each NPC section, present the actual concise but expansive draft, not merely a claim that a draft exists. Match Lee’s approved character-and-voice format: strengths, meaningful flaw, values, ambition, ordinary worry, humor/contrasting trait, public versus trusted-company manner, praise/questions/rudeness/apology/flirting responses, sparing mannerisms and representative dialogue. For other sections provide the equivalent complete coherent block: actual places/items/actions, conditions, interruption, outcomes and unresolved choices. Label established facts, proposals and approved implementation distinctly. Do not invent biography or submit scattered one-field suggestions in place of a complete first pass.

The owner explicitly prefers proactive success/bug/blocker updates without having to ask; never promise silence unless they request it. During implementation give brief meaningful progress updates, generally every30–60seconds: current goal, completed result and remaining check/blocker. Explain a newly found issue when it affects timing. Never substitute repeated “checking” acknowledgments or code-detail dumps for an understandable status. When ready for an owner decision, give the concrete draft/question immediately. Continue only the authorized current NPC’s work.

## Wire each approved NPC section as it is authored

Implement and verify approved behavior in the current section before moving on. Do not accumulate a separate backlog of documented-but-unwired approved NPC features. If an actual dependency blocks wiring, identify it specifically in the active completion matrix. The owner explicitly requested this incremental implementation standard while authoring Lee’s defensive ability.

## Physical rooms, counters and awareness — owner rule2026-11-24

For all building work going forward, a sales/reception floor and the register/desk positions within that same open physical room share hearing, sight where unobstructed, recognition eligibility and same-room ambient effects. A movement tile, counter approach or staff-only fixture position is not automatically a separate perception room. Do not merge walled private rooms, floors, changing stalls or outside spaces. Staff can recognize a person on the public floor subject to actual learned identity; this never gives them unseen disguise knowledge. A customer can observe the counter/staff and hear speech without obtaining behind-counter entry, item reach, stock access, contact or a completed transaction. Preserve actual movement permissions and separately authorized private access. Shared perception and physical reach must have separate predicates; do not broaden old contact/service checks merely to fix hearing.

Aniya and Anya’s inhibited passive aura is2arousal per5game minutes in the shared physical room, and does not stack when both are present. Their worn runic collar and shackles suppress much of their power; no unrestrained rate/removal effect is authored. Focused defensive flare causes immediate sleep of an actual disruptive player. Aniya’s latest owner-confirmed chain is: first rude exchange warning at102°F; second103°F with caution; third104°F and final warning; fourth focused sleep, actual staff escort/wake outside and12game-hour exclusion. Five game minutes of deliberate calming reset heat/incident, never relationship losses or the active exclusion. This supersedes the earlier thirty-exchange proposal. Do not copy Aniya’s individual escalation into unfinished Anya by inference. Staff wake after actual escort outside or after deciding sufficient calming time has passed; no fixed automatic waking duration is authored. Preserve stored forms/ownership and eventual service access. Do not assign this sleep ability or passive aura to Lee by inference. Aniya’s shared-room aura and authored privacy/fidelity-boundary conduct are locally wired and tested; independent custody review, personal-compliment bonus and feeding UI/text routes are now wired and browser-tested. Whole-character/open-ended factual acceptance and later public-baseline/facility integration remain incomplete. Peer conversations use model selection of controller-authored deliveries; do not call those unconstrained generated dialogue. Keep narrower controller evidence distinct from whole-NPC completion.


## Universal form resistance drawer — owner rule 2026-11-25

Every worn form uses the same collapsible Internal resistance drawer and readiness indication: blue while no actual roll is available, green whenever the actual controller offers an eligible resistance roll, including a current form-origin urge/decision. Apply to Erin, Kibbles, Preeti/Pri, object forms and future forms. Keep cooldown, combat, mastery, permanent-binding, prerequisite and resource eligibility authoritative. The highlight advertises an opportunity; it never rolls, spends resources, starts an action, changes mastery or opens the drawer automatically. The player explicitly initiates resistance by button or equivalent typed action. Voluntarily choosing to approach a pack or pursue prey is a player choice, not a resistance request: never force a roll simply because of that choice or silently count it as a refused/missed check. Future instinct adapters must expose actual opportunities through the common readiness contract rather than bespoke colors or alerts.
