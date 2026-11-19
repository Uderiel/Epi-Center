## Owner scope and approval rule

Retrieve approved decisions first. Propose new gameplay permissions, exact room-access scopes, costs/rewards and substantive design additions for approval before implementing them. Broad task authorization does not make an unreviewed character-specific policy owner-approved. Implement and verify already approved rules without repeatedly seeking the same permission. Keep drafts distinct from active controls; a relationship threshold is eligibility, not universal access.

## Current owner clarification — one universal relationship bar

Use [the current relationship contract](DIRECTED-RELATIONSHIP-SYSTEM.md). Every NPC, form and encountered entity has a persistent −100…+100 score toward each individual player. Trust is derived from that score, never a second social value. Apply the owner's ±25/±50/±75/±100 interpretations, with form-specific positive meanings and schedule/permission/mastery boundaries. Historical instructions below separating Erin social relationship from a cooperative trust meter are superseded for the social value; earned mastery and influence remain distinct. Each character definition must specify positive/negative triggers, actual controller events/deltas, exceptions and persistence evidence. The shared storage, bars, tiers, event deduplication and player/entity isolation are universal infrastructure, not work to repeat for every character.

# NPC and form design — current completion standard

This is the canonical authoring checklist. Its twelve core sections remain in force; the implementation contract below makes omissions and evidence visible. Character-specific history later in this file is supporting context, not a substitute for a current character sheet. It is not an instruction to load the entire document into a model request.

**Rule precedence:** latest explicit owner direction → current reconciled character sheet and runtime evidence → historical proposals. Apply superseding decisions by subject, not merely by file date. If two approved rules still conflict, record the conflict and keep the affected behavior unresolved; do not silently select one or turn a proposal into canon. Existing source code proves behavior, not owner approval. Old test counts are historical evidence, not proof of current completeness.

### Required relationship card for every entity

Record a stable entity/instance ID, stable player-ID source, initial-score provenance, and the shared signed bar. Supply positive and negative trigger descriptions plus actual event/delta, prerequisites, repeat/cooldown/daily limits, physical/channel perception, who performed the action, and exactly-once save receipt. Define recognition evidence separately from affinity. State how the common ±25/±50/±75/±100 tiers appear in this character's voice, attention and choices; identify any establishment-specific −75 refusal and possible −100 hostility controller. For forms, +75 friendliness can support schedule-compatible requests but cannot silently grant control, consent, ownership or mastery.

Use existing `relationshipPolicy` metadata/registration and shared APIs; do not author another bar, per-form global score or separate social trust meter. Missing authored trigger metadata remains a completion gap. Validate two players, two same-named entities, NPC/form IDs with the same suffix, positive/negative values, re-equipping, save/reload, legacy import, Dev controls and private conversation memory. No copied score/history/care quota or blanket reward from generated prose.

## Required completion record

Every character review must supply one row for each of the twelve sections, with: source/canon; confirmed facts; proposals; unresolved/deferred/not-applicable items; runtime module/controller; actual AI fields/projection; tests; owner acceptance. An unchecked or untraceable section is incomplete. “Designed,” “implemented,” “locally verified,” “published,” and “owner accepted” are separate states. A working shop is not proof that its owner has a working daily life, and a full biography is not proof that the AI receives it.

Before declaring completion, check the specific name/aliases, pronouns, appearance, approved image identity, handedness or gesture side, unit/room, item IDs, exact durations, thresholds, reward amounts and exceptions against the current source. Do not replace small details with a broad personality summary. Keep an explicit no-invention list for missing family history, destinations, routines and mechanics.

## Operational behavior contract: what, when and how

For each implemented activity or interaction record:

| Required field | What the author must settle |
| --- | --- |
| Trigger and eligibility | Actual event/need/request; identity, current body, progression and permission prerequisites |
| Place and presence | Reachable destination, room/space, actual actor/worker, real listeners and usable fixtures |
| Priority | Hard commitment or urgent need versus customer/guest engagement, discretionary chores, rest and leisure |
| Start and cost | Controller action, time, stock/funds/tools, reservation and confirmation required before commitment |
| Progress | Visible ongoing activity, posture/equipment, saved progress and cadence; discussion is not completion |
| Interruption | Player response, queue/customer handling, stop/departure acknowledgment, partial use/effects and resumption |
| Outcome and cleanup | Exactly-once resources/items/payment, dishes/containers/laundry, satisfaction and saved receipt |
| Memory and portrayal | What was actually witnessed/said, who knows it, elapsed time, matching voice/mood and contextual variety |
| Failure and absence | Closed/unstaffed, blocked room/body, missing supplies, refusal, interrupted travel, offline/stale AI and safe exit |

Availability and mood need their own facts. Being physically present does not imply being awake, working, willing to socialize, available for romance or authorized to disclose information. Waiting in a queue does not grant an appointment or permission. A schedule describes intent until the controller records reachable movement and work. Urgent needs and hard commitments can interrupt, but ordinary departure must be acknowledged naturally. Quiet or a short answer is valid; no mandatory chatter or model request every minute.

## Representation and memory checklist

- Give stable public identity and form aliases; keep original-player identity and undisclosed history private. Separate directed relationship from appearance recognition, mastery and consent; trust describes the relationship tier.
- Supply current clothing/appearance, actual location/time/light, ongoing activity, fatigue/needs when recorded, actual audience and the latest expressed message. Follow-up questions stay on the current topic; background work must not replace the answer.
- Distinguish player claims, witnessed facts, accepted commitments, proposals and resolved outcomes. Recognizing a name typed by the player is not knowledge of hidden events. Record confirmed nicknames/preferences only through an authored memory event; do not invent personal familiarity.
- Give a voice range: public/private, relaxed/busy/tired, welcome/complaint/refusal/apology/repair/parting, praise/criticism/flirting as relevant. Examples demonstrate meaning, not repeated keyword scripts. Mannerisms are optional and specific to that character.
- Keep secrets in author/controller data. Select only the particular authorized disclosure fragment for a recipient; never send a full secret dossier and rely solely on “do not reveal it.” Numeric eligibility does not force disclosure or grant room access.
- Use approved room text/layout and asset provenance. Text-only requests do not see image pixels. Narration respects body senses, room barriers and permitted viewpoint, even when the owner interface can display more information.

## Business/location extension — mandatory for shopkeepers

A business uses the same character standard plus a room/fixture/service matrix. Record exterior/entry, exact public route to checkout, staff work area, private residence/storage, ownership, security, delivery and emergency access separately. Every advertised usable fixture needs an actual action or an honest decorative label.

**Owner-confirmed public-entry rule:** closed businesses or businesses without a present working employee must refuse new public entry and explain that the shop is not open at this time. Posted hours alone do not prove staffing. Bind the established sole employee to the business automatically in its canonical adapter; this is implementation work, not a decision to ask the owner to repeat. Verify the actual counter recipient and dialogue, not merely the existence of a name in a design note. Staff/key/delivery authorization is separate from public admission. Public inspection, typed movement, Layout/Path and direct controller entry must use the same guard. Closing must not trap existing customers or erase their inventory/baskets/paid orders. Define finishing an existing queue, cancellation/refund of an unfulfillable paid order, safe exit and reopening explicitly; do not invent a shop-specific refund policy from this integrity requirement.

List regular hours and time zone/clock, weekends/holidays if authored, exceptional closure, actual staff identity/location/shift, break coverage, queue priorities, stock/receipts/prices/discounts, service errors/corrections, delivery inventory/key access, personal versus till funds and closing cleanup. Undefined operating hours are a design gap; do not describe them as owner-approved closures or create imaginary cover staff. New business adapters must declare both hours and actual staff availability before being called playable.

## AI handoff and acceptance gate

For each relevant field identify its author source, runtime source, permitted audience, frontend packet path and backend provider-fact path. Test the assembled provider messages, not just the authoring notes. Required physical/identity facts must survive budgets, queue refresh and server projection. Missing information remains explicitly unknown. NPCs can express intentions; only validated controllers execute actions or alter resources.

Use the existing scene/living-profile/relationship/inventory/time systems. Required checks include first meeting and repeat/follow-up, alternate form/public identity, another player, busy/absent/asleep/closed, interruption, time jump, no supplies/funds, exact ownership and payment, secret/privacy barriers, offline/failed/stale AI, reload and body-specific actions. Add a newly registered actor and location to shared integration tests. Separate automated/mocked controls from deployed request inspection and real-model prose acceptance. No completion or publishing claim without the corresponding evidence.

The remaining sections preserve the twelve-category checklist and historical amendments. Reconcile each character into a current completion record before implementation or AI prompt compilation.

---

## Twelve-category authoring checklist

Authoring standard established from Priya’s first completion package and Erin’s refinement review. This is a design checklist, not a second runtime schema. Keep the validated living profile in [FORM-LIVING-TEMPLATE.md](FORM-LIVING-TEMPLATE.md); reuse existing clocks, inventory, navigation, encounters, relationships and mastery adapters.

## Start from a broad brief

Owner supplies a general vibe, role and any fixed constraints. Author a coherent complete first pass using the sections below; offer recommendations for missing details together, rather than asking the owner to choose every object or minute. Group review around character identity, daily life, relationships and special routes. Bring back only consequential unresolved choices. Do not manufacture past owner approval.

For every section distinguish **established canon**, **proposed default**, **implemented evidence**, **owner acceptance**, and **deferred/not applicable**. A proposal may be detailed without being implemented. Record sources, stable IDs and superseding decisions. Do not turn a historical document’s old test count into current evidence.

## 1. Identity and lifecycle

Name/aliases; adult age where relevant; species/body; pronouns; appearance and approved art/provenance; occupation; stable IDs; residence/floor/unit and discovery rules; public versus private identity. Explain whether this is an independent NPC, a conscious form, an object form, or a linked NPC/form. Define what exists while unequipped, acquired, active, released and mastered. Never duplicate a person offscreen to service a schedule.

## 2. Character and voice

Three defining traits, a contrasting trait, strengths, flaws, values, ordinary worries, ambitions and boundaries. Specify speech rhythm, humor, work/private differences, changing mood and representative short dialogue. Include interests with usable conversational substance and remembered actual events. Avoid stock keyword monologues and repeated gestures. Original-player thoughts and undisclosed form history stay private.

## 3. Capabilities and physical profile

Anatomy, senses, locomotion, speech, manipulation, clothing and equipment compatibility; actual attributes, rarity and resource ownership; ordinary civilian combat or appropriate existing animal/object limitations. Explicitly state unavailable actions. Derive gameplay numbers from the current engine and label new tuning. No copied human hands/speech, resource refills or invented powers.

## 4. Daily rhythm and interruption rules

Provide a readable weekday/weekend rhythm, work/lunch/commute, sleep, personal care, meals, exercise, hobbies, errands and social availability. Use windows and priorities rather than a compulsory minute-by-minute script. Specify actual destinations, route costs, doors/floors, preparation time and legal movement.

Resolve urgent needs, work commitments, agreed appointments, ongoing player engagement, optional routines and rest in an explicit order appropriate to the character. Describe greetings, departures, delays, cancellations and resuming interrupted work. Bulk time, live time and reload must not invent completed actions. Sleep/absence blocks unavailable interactions.

## 5. Home and personal belongings

Describe the shell separately from the character’s furniture and atmosphere. Cover living area, kitchen, bedroom, bathroom, clothing storage, entrance/hall storage and special spaces. Give a consistent palette, materials, lighting and personal keepsakes. Preserve real navigation and nested drawers/Back; do not clone another character’s decor.

For each usable object define action, duration, prerequisites, owner, stock/custody, saved effect, feedback and failure state. Decorative items may be decorative, but must not advertise a nonexistent use. Include laundry/dishes/used containers and product use where applicable. Receiving food must create a usable inventory serving when intended, rather than merely describing one.

## 6. Wardrobe, care and dietary preferences

A curated individual wardrobe plus presets for the character’s actual roles: work, casual, hosting, exercise and bedtime as appropriate. Define worn/clean/dirty/stored ownership, footwear constraints, private changing and missing-stock behavior. Care includes relevant hair, skin, bathing, grooming and scent with actual effects; no medical claims from ambience.

Meals, snacks and drinks need distinct preferences, real recipes/items, finite quantities, preparation, serving, consumption and cleanup. Purchases need funds, hours, travel and custody. No automatic pantry or wardrobe replacement unless expressly designed.

## 7. Relationships, visits and social agency

Map specific people, history sources, mutual attitudes, known identity, trust and unresolved tensions. Use the one directed relationship value; keep recognition, mastery and consent separate. Define introductions, invitation/acceptance, entry permission, actual travel, hosting, room access, follow/escort, departure and follow-up. Proposed friends are not spawned actors.

Friendship, respectful dating and special transformation routes need independent eligibility. Neither high trust nor a purr is blanket consent. Define optional participation, refusal, ending contact and proportionate consequences for real actions. Do not punish ordinary declined attention as misconduct.

## 8. Work and public life

Actual workstation, tools, colleagues, products, meaningful work outputs and approachable task checklist. Track acceptance, progress, retrieved materials, meetings, submission and one-time rewards. Give meetings real turn-taking among present people, with interruption/room-directed speech. Employer property, expense allowances and wages stay separate from player inventory/funds.

## 9. Special form or quest route

Trigger versus safe examination/pickup; explicit agreement where relevant; authored transformation stages; preserved original state; physical capabilities and viewpoint; internal voice/instinct; opposition stat and meter; shared mastery/cost/cooldown/dice; gear/collar behavior; repeat acquisition; permanent completion; exact reversion conditions and reverse stages; safe placement and retained objects. Specify first-time and mastered-repeat flows separately. Mark this section not applicable when no special route is authored.

## 10. Narration and AI contract

For each important event supply an AI-off result and sensory description based on actual body/activity/presence. Emit timely movement, arrival, pressure/contact change and interruption feedback instead of long unexplained silence. Separate fictional media from world events.

AI expands recorded facts and responds to the actual conversation; it cannot move actors, spend stock, grant progress, invent dialogue as completed history, disclose private thoughts or decide consent. Give it speaker, directed/local audience, real listeners, activity, relationships and bounded recent memory. Cover disabled/failing/stale AI and duplicate prevention. Clearly distinguish mock tests from real-provider prose acceptance.

## 11. Persistence and implementation plan

List canonical modules/adapters, additive fields/migration, old-save interpretation, unique item IDs, finite budgets, exactly-once effects, interrupted jobs, reload boundaries and three-slot isolation. Do not migrate unknown history into invented attendance or relationships. Identify dependencies on unimplemented venues/NPCs. Deliver coherent playable slices with explicit limits.

## 12. Completion and verification matrix

For each promised feature record design status, runtime location, automated evidence, actual browser flow and owner acceptance. Include a normal complete day, work→home, an interrupted visit, sleep/absence, time jumps, stocked/empty inventory, ownership, reloads, alternate body, mastery/repeat route and phone navigation. Add route-specific failure/reversion tests. Use meaningful tests, not assertions that merely repeat descriptions.

Release handoff must state branch, exact runtime commit, tests, public link, blockers/limits and exact next action. Update this template whenever a character exposes a reusable missing category; keep character-specific taste and tuning in that character’s dossier. “First playable package complete” does not mean all future content or personal acceptance is finished.


# Supporting requirements and historical checkpoints

Confirmed requirements below remain binding within their stated scope. Old implementation checkpoints are historical; current per-character completion records resolve superseded values and establish actual implementation. Do not use an old status paragraph as a fresh test result.


## Current portrait standard — approved visual references and individuality

Use actual approved images as visual references when requested, after viewing them. Owner’s successful examples are Erin, the available portrait filed as Priya, and Nadia. Match natural photographic light, realistic skin/hair/fabric and believable relaxed presence, not generic polished renders. Different characters must have distinct expressions, posture and useful actions grounded in personality/vocation: Charity mature/helpful; Tits playful/distracted/goofy. Do not repeat an identical model pose across characters. Relevant interiors are allowed; keep room functions and background fixtures consistent with the actual plan, using bounded blur rather than inventing a floorplan. Plain studio is not mandatory: the owner explicitly clarified this after rejecting inaccurate store backgrounds. Preserve full-body visibility when requested. Never claim missing reference assets were inspected. Display actual images directly, not only link labels. Latest user directions supersede historical portrait attempts below.

## Standalone body-shot override

When the owner requests a plain character/body portrait, use full head-to-shoes framing and a simple studio background. Do not add a store, counter, register, cup or other scenery to a standalone body shot. Preserve established character identity and clothing. This instruction supersedes earlier contextual-backdrop attempts for Charity and Tits; those store-background revisions were rejected. Display actual images directly in chat, rather than only naming files or reading link labels aloud.

## Character portraits grounded in actual location layouts

When a character portrait includes a known home/business background, use the supplied floor plan and confirmed fixtures as constraints. Do not substitute a generic interior, merge separate retail/preparation rooms, invent doors/windows or imply a different public/private layout. Use a bounded counter/fixture view when a full spatial reconstruction is not supported. Preserve full-body framing where requested. Standing on the customer side is acceptable for showing a character’s whole outfit; do not infer the owner requires behind-counter placement. Distinguish geometry/fixtures confirmed by sources from proposed finishes/decor. On revisions replace rejected review files in place when keeping the same intended asset, preserve generated originals, and keep portraits out of public gameplay until integration is authorized.

## Individual directed relationship meters — owner amendment

All NPCs, including animal companions, use individual directed relationships toward each individual player on the signed−100…+100scale. A shared event/migration system is not a shared meter. Original-player identity persists across forms; appearance recognition, introductions and remembered body-specific contact remain separate. Preserve legacy saved scores and record provenance rather than resetting or summing unrelated NPCs. Erin cooperative trust uses the same signed relationship value; mastery remains separate. Resolve positive/negative effects from actual workflow reliability, favors, praise, criticism, care, play, rejection and conflict using character-specific rules; AI prose alone never changes scores. Deduplicate resolved events across reloads and limit repeat farming. Richard's personal rejection is−3once per actual offer; existing extra-work refusals remain separate. Display and Dev tools must read the same canonical pair record. Multiplayer identity transport remains outside the current local-save build; do not claim networking implemented.

## Conditional report reviews and future schedule correspondence

NPC review should react to actual updated report versions, not replay unchanged inbox tasks every evening. Separate observing a report, sending a proposed schedule change, recipient response and actual Scheduler booking. Weekend correspondence does not imply immediate work, consent or availability. Preserve authorship and real department sources; keep private report content out of unrelated guest/assistant dialogue. Richard's pre-bed update checks and weekend Monday-addendum messages are the confirmed reference.

## Household assistant initiative and confidential observations

Author social initiative, guest-offer authority, financial authority, private-area access and information disclosure separately. Richard's confirmed bot does not initiate socializing or guest offers; he requests social engagement, explicitly authorizes offers/access and approves spending. His prior host offer authorizes matching service without duplicate approval. Overheard conversation and witnessed work are confidential; filter recipient-specific prompts and descriptions before AI generation, not merely with a prose instruction afterward. Requested conversation or hospitality never automatically grants private information or room access. Retain each character's explicit policy rather than generalizing these strict preferences to all bots.

## Delegated hospitality without duplicate approval

An actual host offer authorizes a household assistant to fulfill the recipient's in-scope selection. Record host, guest, offered choices, visit/context, selection and fulfillment; do not ask the host to approve the same service again. Preserve real stock, funds, preparation and exactly-once item handover. Approval for refreshments does not grant unrelated private-room or computer access. Distinguish autonomous housekeeping/supply management from authorization to spend money. Richard's bot is the confirmed reference; apply this shared contract where a character actually delegates service.

## Residence classification and spatial specificity

Record whether a residence is a regular unit or an explicitly confirmed suite. Follow [Applewood suite architecture](APPLEWOOD-SUITE-DESIGN.md) when applicable: expanded rooms/storage/floor space, guest bedroom and bathroom, private master bathroom and balcony. Distinguish positional relationships from doors and transit routes; a bedroom between two areas is not automatically a walkthrough. Do not infer suite status from wealth or give every resident the same extra rooms.

## Suite and household automation authoring

A shared residence adapter does not require every character to have six rooms. Explicitly author extra guest rooms and workout areas when confirmed. For owned household bots, record identity/appliance status, location, supported duties, finite supplies, job time/progress and access boundaries. Cleaning must alter actual dishes/laundry state only after resolved work. Connected screens display recorded information and do not grant guests access to private computers. Do not assume bot sentience, combat, surveillance or player-control powers from domestic assistance alone.

## Reusable implementation requirements from Nadia/Dart

Use the shared character-home adapter for distinct authored rooms and nested drawers; per-character stock, clothing ownership, private changing, care permissions, ongoing guest activities and actual timed supplies. Keep the common physical presence/hearing/navigation boundary. Animal companions have independent location, needs and learned familiarity. Canine input exposes only resolved body signals; player thoughts stay private. Attention, play, visits, collaring and confinement are separate choices; cleanup on body release must preserve existing mastery. Validate bounded AI proposals against the current scene before applying effects and retain authored fallback. Test room/floor barriers, reloads, interrupted activities, inventory transfer, finite stock/payment, ordinary gear release and mobile controls. Keep venue services universal and explicitly deferred until implemented. Character personality and decor are authored separately; do not copy Nadia’s wealth or Priya’s preferences into every household.

## v1.0.106 implementation checkpoint

See [implemented Erin/shared refinements and limits](ERIN-REFINEMENT-IMPLEMENTATION.md) and [acceptance checklist](V1.0.106-OWNER-ACCEPTANCE.md). Sustained activities, satisfaction, voluntary mastered delegation, correspondence/Scheduler and shared conversation continuity now have runtime implementations. Broader draft proposals outside that implementation list remain proposals. Exact release/test evidence is in CURRENT-STATUS.md; historical notes below do not override it.

## Owner-confirmed conversation and departure rule

When a player is actively engaging an NPC or conscious form, a scheduled routine must not silently remove them or abruptly cut off the exchange. The character acknowledges the next activity, explains any need to leave and gives a natural conversational close before actual movement or action. Optional routines can wait; interaction may cause a real, recorded delay. Hard commitments and urgent needs still matter and should be communicated, not erased. No indefinite conversation lock, invented attendance, teleport or offscreen duplicate is implied. For an internal form, communicate the intended activity within existing authority/mastery rules rather than pretending the consciousness walks away. Exact grace periods and interruption mechanics remain implementation work, not an owner-approved fixed timer. Applies universally to future NPC/form designs.

## Owner-reported reading satisfaction gap

Owner reports completing all four short chapters from Erin’s tall living-room bookshelf and then immediately receiving another generic desire-to-read prompt. Source review: both manual EpiErin.read (erin-restoration.js) and autonomous read completion (erin-life.js) save lastReadAt; erin-life.js think() still defaults to read for ordinary leisure, and preference() defaults to novel suggestions without consulting that completion timestamp. The existing two-hour intention cadence is not activity satisfaction. This is a verified source mismatch, not evidence of an implemented fix.

Required refinement: actual manual and autonomous reading must satisfy the corresponding desire, persist across reload and make recent-reading dialogue acknowledge what was read. Failed/blocked actions, merely opening the shelf and discussing a book must not count as reading. Separate ongoing book/chapter progress from desire satisfaction and prevent immediate generic re-requests. Continued reading remains a voluntary option. Choose reasonable renewal timing in implementation, label it tuning and test manual completion, autonomous completion, reload, failed actions and later recurrence; do not invent a new grind meter or award trust per repeated prompt. Generalize this completion-to-desire link to other authored hobbies/routines.

## Owner-confirmed sustained activities and fine interactions

Player-initiated leisure/care must be a recognized current activity, not only a furniture toggle or a clock jump. Examples: watch television (distinct from turning it on/selecting a channel), read the chosen book, take a bath, lie awake on the bed, and take a chosen-duration nap (including about two hours) rather than mandatory full-night sleep. Form/NPC dialogue and bounded narration should reflect the actual ongoing activity, remaining duration and recent completion. Existing autonomous and manual versions must share activity completion/satisfaction facts.

Provide meaningful start/continue/stop or finish behavior, appropriate physical posture/location, real elapsed time and ability to interrupt; retain progress/state on reload. Watching fiction should produce authored evolving content and contextual conversation, not merely a channel label. Reading should expose current title/chapter/activity without requiring the player to navigate the shelf again for every continuation. Preserve manual chapter choice. Bath products, coverage, water/preparation and elapsed effects remain real; lying down is not sleeping, and a nap must not silently become an eight-hour sleep. Urgent needs, commitments and existing form authority govern interruptions without silently erasing the activity. Exact duration options and update cadence remain implementation tuning, not fixed by this design note. Do not award a full session’s benefits at start or after cancellation, duplicate effects on reload, or invent actions skipped by time jumps.

Erin-specific restoration request: the long couch should have its intended throw blanket, with an actual pull-over/use interaction while reading/resting and removal/put-back behavior. Track the real blanket’s owner, location and in-use state; no duplicate inventory item, automatic sleep or fabricated warmth/buff mechanics. Bedroom reading-blanket description is not evidence that the requested couch interaction exists. Verify legacy definition before choosing an ID or migrating old saves.

Source checkpoint: Erin currently has timed autonomous read/quiet-TV jobs and manual reading records, but not the unified manual ongoing-activity experience requested here. Priya has a 30-minute watch action with saved story beats and autonomous TV jobs; this is not evidence that all characters already satisfy the new shared requirement. No runtime implementation is claimed by recording it. Acceptance: visible current activity, contextual dialogue, pause/stop, partial benefits, reload, manual/autonomous satisfaction, awake rest versus chosen nap, and real blanket use with correct body/location.

## Owner-approved refinement: a living presence during ordinary activities

Owner approves Erin’s broader refinement direction and asks for dynamic everyday engagement across all NPCs/forms. Reading is an interest, not a perpetual default request. Mastered active Erin may initiate occasional relevant private commentary without regaining physical authority or requiring player engagement. Inactive/released Erin remains absent. Rate-limit and vary commentary using actual activity, recent interaction, completion/satisfaction and remembered events; leave quiet stretches and permit muting/less chatter. Proposed controls and exact cadence are implementation choices, not yet runtime. Do not charge one AI call every minute or manufacture constant dialogue.

Priya may occasionally think aloud about her actual writing while a flats player hears her, or address a present cat with gentle speech/play sounds. These must be outward audible actions, not disclosure of unspoken private thoughts. Thinking aloud never implies she knows an undisclosed player is in her shoes. Actual location, wakefulness, hearing/body viewpoint and available attention gate it; no invented guest, touch, affection response or automatic purr. AI may propose bounded speech for validation, but only recorded committed speech enters shared conversation memory.

Extend ongoing-activity feedback beyond reading/TV to cooking, eating, dishes, care and chores: describe real preparation stages, relevant sensory details and occasional character remarks; offer a small number of useful choices appropriate to the recipe/activity and actual supplies. Avoid turning each meal into mandatory micro-clicks; permit ordinary completion or optional richer engagement. Preparation, portions, eating, dishes, resources and time remain canonical exactly-once effects. Narration cannot add ingredients, improve quality, grant benefits, invent consent or complete an interrupted job. Provide varied authored AI-off feedback and bounded actual AI context.

Examples for Erin’s next draft slice: contextual reactions after real work, invitations with remembered follow-up, small voluntary cooking choices, activity-aware personal conversation, and honest alternatives when tired or supplies are missing. Specific lines, schedules and new controls remain proposals until implemented/tested. Acceptance must cover mastered commentary without takeover, less repetitive leisure requests, safe silence/rate limits, audience/privacy, offline AI fallback, player decline/stop, cooking stock/partial completion and reload deduplication.

## Owner-confirmed voluntary delegation after mastery

Mastery preserves permanent achievement and player authority; it must not permanently silence the form or prohibit consensual autonomous activity. A player can discuss and explicitly delegate control to an active conscious form for a particular routine, a chosen interval, or the remainder of the day through an agreed bedtime endpoint. Examples: “Take charge for your night routine,” “Take over for an hour,” or “You can lead today until bedtime.” The form can express willingness, practical constraints and alternatives. Discussion alone is not authorization; resolve a clear affirmative agreement using canonical action handling.

Delegation is a separately saved, revocable agreement, not loss of mastery, renewed influence, a new resistance contest or mandatory trust cost. The player can reclaim control at any time without a saving throw or penalty. Stop further autonomous decisions immediately; represent safe interruption of a physical action honestly rather than instantly completing it or undoing already consumed supplies. Show who is currently leading, agreed scope/end and a readily available Take charge again action. Clarify ambiguous endpoints; a bedtime routine should complete only within the agreed scope, and delegation must not silently extend through overnight sleep or into the next day.

Use the form’s authored capabilities, existing schedule and available real resources. Existing single-routine delegation may be reused, but broader duration/day agreements are not assumed already implemented. Agreement survives reload with the same canonical game-time endpoint and no offline simulation. Expiry, explicit revocation, release, body change, death/incapacitation or invalid state ends/suspends delegation safely as appropriate; it cannot transfer authority to a different form or create a duplicate offscreen person. No invented travel, unlimited spending, social/intimate consent or circumvention of curse/combat/capability gates follows from routine delegation. Additional commitments or exceptional decisions remain explicit choices under their own rules.

Universal applicability: conscious forms with an authored decision/schedule adapter can support this contract. Inanimate flats do not acquire an independent shoe personality or movement, and delegating to a cat form does not control Priya. Owner-approved rule; exact interval presets, willingness presentation and implementation state remain to be designed/tested. Acceptance: mastered routine delegation, interval/day expiry, mid-task reclaim, reload, real supply/time accounting, no mastery/influence changes, form switches/release and clear frontend/AI control context.

## Owner-confirmed correspondence and scheduler refinement

Work email should reflect real day-specific priorities, actual accepted work, appointments and resolved/outstanding follow-up rather than reissue identical generic messages with new unread IDs every morning. Standing guidance should remain reference/read history, not repeated mandatory correspondence. A separate personal email app at Erin’s home computer supports actual integrated contacts (Priya first); Maya Bennett/Lena Ortiz become usable when their actors are integrated. No phone is added yet. Do not infer a second person from the brief spoken Layla/self-correction, impersonate the original player, or invent deliveries/replies from unimplemented contacts. Persist drafts, sent/received threads, read state and exactly-once delivery; generated prose cannot book a meeting or move a recipient.

Appointment booking and scheduling belong in the Scheduler, separate from the computer’s email/work program. Reuse existing commitments, presence/approval checks and time/collision authority; navigation changes must not create a duplicate calendar. Existing computer tasks and report work remain accessible. Exact personal-message timing and UI details are implementation choices. Verify variety grounded in actual state, stable read IDs, no repeated task rewards, real contact identity/availability, reload/send deduplication and scheduler booking/cancellation.

## Companion animals and service custody — Nadia/Dart review lesson

When a character owns an animal, design its independent identity/location, daily needs, actual exercise/care coverage during the owner’s work/travel, social signals and ability to decline. A shared portrait is not presence. Distinguish ownership, handling, boarding custody and a player’s conscious form. Service staff references and room diagrams do not implement care. Boarding needs availability, funds, check-in/out, assigned space, actual staff coverage, barrier-aware interaction, interruptions and idempotent transactions. Pet interactions never disclose the original player or grant automatic control/mastery. Reconcile service hours and existing prototypes before scheduling a routine.

## AI-directed companion behavior and asynchronous requests

An AI-directed animal can propose appropriate physical intentions, but canonical capability/reach/barrier/stock/consent rules validate and resolve them before narration records outcomes. The player’s actions/private thoughts remain their own. Shared play is possible when actual access permits; closed custody is not a permanent substitute for designing real interaction. Author AI-off fallback and bound call cadence. For home-work messaging, separate the sender’s expectation, recipient’s voluntary acceptance, actual work performed and credited/replied result. Background wealth or faction sympathy does not fabricate funds, allegiance mechanics or secret knowledge.

## Household refinement lesson — presets and companion invitations

A broad style brief should produce coordinated functional makeup/outfit presets plus individual item browsing, with ordinary versus cursed footwear explicit. Differentiate a pet’s usual resting/sleeping place, guest-context kennel use, daycare custody and a canine player’s separately resolved invitation/collar/visit permissions. Affection or protectiveness does not bypass actual physical reach, resources, travel, existing form authority or participation choices. Care may include fresh-food serving/stock and meaningful toy variety rather than generic bowl/Play text.

## Shared service boundary

Author a universal service contract at its venue (boarding, daycare, grooming, payment/custody/care/play), then attach character-specific preferences and schedules as clients. A character draft may record requirements without implementing a private copy. Deferred service dependencies must stay visible: requests are not accepted bookings, and unimplemented staff cannot complete care offscreen. Independent household work can proceed without falsely claiming dependent full-day services are finished.

## Personalized animal identity and environmental memory

Generic form labels do not establish sex/gender or a player’s chosen name. Read saved personalization and use neutral language before selection; do not copy the owner’s personal playthrough into global canon. Animal scent/territory recognition must derive from actual located/time-stamped marks and learned associations. An unknown scent can become familiar through real meetings, without automatic hostility, friendship, exclusive ownership or private-identity disclosure.

## Owner-confirmed shared canine input translation

Human wording entered while in a canine body needs a coherent reusable translation into actual canine expression. Protest can become a warning growl; startled withdrawal can draw ears back/tail inward; allowing an inspection permits a sniff; explicitly chosen reciprocal sniffing or play uses canine actions. Starred roleplay and ordinary text both work. Private thoughts/form dialogue, hypotheticals, negation, third-person narration and remembered events must not become public physical actions. NPCs receive only resolved observable/audible signals, not original human words or secret intent. A response authorizes only its own scope: allowing a sniff is not blanket consent to touch, play, collaring or a home visit. Existing form instincts/control rules remain authoritative.

Implemented first pure shared parser in canine-expression.js:13targeted cases pass, including privacy, negation, third-person/hypothetical rejection and common roleplay inflections. It emits validated signal candidates/public packets without resolving reach/contact, moving bodies or granting relationships. This is not yet wired to the composer/Dart actor; those integration/AI/persistence/actual browser cases remain required. Unknown input stays private rather than guessing an aggressive or compliant reaction.

## Observable ongoing-activity feedback

For each actual timed activity, specify partial-progress detail and contextual audible speech, with saved per-job markers and a saved speech cooldown. Hearing follows physical presence and body senses. Differentiate private thoughts/manuscripts from audible self-talk. Pet-directed comments offer company without resolving contact or player feelings. Inanimate players never become known merely because narration is delivered. Empty stock must not produce cooking details. UI progress is local; accepted service preparation may retain its own wait/status control across rooms. Mid-activity narration does not itself establish a universal player-driven activity controller. Priya first implementation: see PRIYA-EVERYDAY-REFINEMENT.md.

## Shared activity adapter contract

Use the shared-activities registry/lifecycle for invitations, identity/location validation, acceptance, saved participants, progress, pause/resume, stop, contextual beats, completion and per-participant departures. An offer is not attendance. Keep physical hosting/ownership separate from who currently leads the body. Equipped conscious forms are private participants; voluntary control transfers change the lead without resetting progress or mastery. NPC packets must not expose internal participation or control. Real food is reserved before preparation; interruption records unfinished materials without granting a meal or duplicating stock. Complete reading must satisfy the actual selected book state. Bodies without hands need a present reader and audible reading; never grant human capability through narration. Schedule conflicts prompt a goodbye and bounded response grace, then genuine departure while other participants may continue. Adapters supply character voice, available locations/supplies and narrative content. Current reference integration: SHARED-ACTIVITIES-IMPLEMENTATION.md. Other NPCs and network players require their own presence and authority adapters; they are not automatically implemented.

## Knowledge, resistance and enforced limitations

Keep actual awareness/resistance, the system’s recognition of it, freedom of action and permissible disclosure as separate design fields. Charity is the confirmed example: greater resistance than the game detects, yet still captive and restricted. Do not infer omniscience, immunity or a new numerical mechanic. Define enforcement and observable responses before implementing restricted dialogue.

Charity disclosure example: relationship75+is eligibility for selective sensitive conversation, not automatic full disclosure. Consequence reminders differ from direct speech censorship. Record reminder audience, trigger, cooldown and actual authored consequence separately. Preserve distinct quest-trust and world-progression gates.

For sensitive NPC disclosures, separately author relationship/world-progression eligibility, NPC willingness, safe location/audience, private pressure versus visible hesitation, and the particular fragment disclosed. Reaching a threshold is not automatic exposition. Private reminders must not become player knowledge through narration. Missing legacy source recovery is distinct from inventing new lore.

## Authored role-constrained quest forms

For a disguise/coverage form, specify outward appearance/voice AND expression/behavior requirements, private thought versus emitted speech, customer/NPC-initiated response handling, knowledge limits, accepted commitment duration and exact release conditions. Do not assume voluntary routine delegation’s immediate reclaim rules apply to a separately accepted committed quest. Charity coverage is owner-confirmed six-hour commitment with enforced Charity-consistent outward expression, no early handover and safe end-of-shift mask return/removal. Do not grant another character’s secrets or memories merely from outward impersonation.

## Temporary mastery trials without retained form ownership

Separate actual challenge progress/completion from permanent form acquisition. An authored temporary quest form may require normal mastery before release while granting no retained form. Save the milestone trigger, current trial, actual release conditions, restrictions, completed trial history and one-time reward receipt independently. Preserve unrelated forms/resources. Transferable mastery rewards must be real selectable/consumable items with defined progression semantics, not prose, automatic target spending or ownership grants. Charity’s twentieth-completion event is a design example pending rarity/reward-integration details; it is an explicit exception to her ordinary shift-end mask release.

## Hidden motives versus observable routines

Separate the author-level reason for an NPC’s work/rest pattern from what the player can observe or has learned. Distinguish a feared conditional threat from a resolved event, automatic spawn or numerical risk. Record maximum recovery windows and actual coverage/location before implementing schedules. Charity’s overwork and roughly six-hour recovery limit are motivated by a hidden Countess threat; ordinary narration must not explain that cause before authored disclosure.

For guarded dialogue, author the meaning/goal and several contextual ways to deflect rather than one fixed keyword-triggered line. Distinguish player-established knowledge from names typed metagame or knowledge in the author dossier. Observable fatigue does not authorize hidden-cause exposition. A conditionally risky disclosure is not an automatic encounter trigger until its rules are actually designed. Charity’s consistent-service explanation is the confirmed example.

## Shop variant and bundle consistency

For customizable clothing, persist chosen category/style/fit/color and relevant construction attributes on real owned items, preserving them through cart, checkout, receipt, equipment, appearance/narration and reload. Treat bundles as explicit selectable slots, not a fixed generic outfit or automatic extra items. Variant price differences, form compatibility, bundle limits and visual descriptions require authored policy; do not invent stats from descriptive rain resistance or trim. Cherished Touch’s configurable starter bundle is the current approved design example, not an implemented system yet.

## Random shop rewards with equipped attribute modifiers

Bind randomized outcomes to real transaction/item identity and preserve them through inspection, equipment and reload. Keep per-player purchase caps independent of current form/owned count. Use the canonical attribute registry and actual effective-stat pipeline; equipped-only modifiers must not mutate base stats. Archetype-independent loot must not be tailored by narrative AI. Define duplicate/stacking/region/body compatibility and discount behavior separately. Cherished Touch Mystery Box is the approved design example:150base, max3purchases, one+1random attribute per wearable piece only while worn.

Jewelry modifier stacking and physical equipment capacity are separate rules. Cherished Touch permits additive bonuses from valid worn pieces, with one bracelet per arm and one ring per hand. Validate per-side/type capacity rather than relying on a unique slot per item ID. Preserve base stats and remove modifiers when unequipped; stronger future loot must not alter the approved current box’s+1per-item range.

## Persistent retail ownership and residence storage

A purchased clothing variant is a real owned item across inventory, equipment, appearance, closet/dresser storage, laundry and presets. Ownership belongs to the player/actual owner and must not change merely because a form is equipped. Per-player introductory purchase limits survive form changes and storage/sale/reload. Apply and show discounts before atomic payment; keep no-return shop policy separate from failed-transaction rollback. Future residences are dependencies, not implicit destinations or already-functional storage. Route items to real permitted storage only when implemented.

## Layered shop customization drawers

Reuse the established drawer navigation hierarchy for category -> style/fit -> construction options -> color -> preview/cart/fitting. One active layer with Back restores selections; do not render an unmanageable full catalogue of controls at the room root. Item style selection does not transform or redefine the player. Keep the chosen variant consistent across bundle selectors, fitting, checkout, owned items and narrative appearance. Checkout-wide one-use discounts are consumed only by a successful atomic payment, not by browsing or failed attempts.

## Owner-confirmed universal layered item navigation

The drawer overlay pattern is a UNIVERSAL interface requirement for any item interaction with multiple layers, not a Cherished Touch/Tops-only feature. Reuse the existing shared drawer/navigation mechanisms and adapters for categories, containers, variants, nested storage and other multi-step item interactions. Avoid unrelated feature-specific modal systems or many simultaneously exposed input fields. One active layer, clear parent/Back, preserved selections and explicit final action apply across the game.

This approves the Tops example as a reusable pattern; owner does not require another category sketch before continuing. Existing households/office/storage adapters must be assessed against the shared contract rather than assuming every legacy interaction already complies. Updating this design rule does not constitute a game-wide runtime migration. No new implementation/publication in this record.


Resource-capacity equipment modifies the effective maximum while worn, derived once from canonical body/form baseline and actual equipment. Normal recovery fills additional capacity; equip/render/reload must not refill or accumulate bonuses. Removing an item recomputes the max and clamps only excess current resource, preserving damage/spending/recovery rather than restoring a historical snapshot. Cherished Touch’s+10Health shirt,+10Stamina pants,+10Resolve hat are confirmed maximum-only examples.

## Implemented retail drawer reference

Cherished Touch’s first ordinary retail adapter now reuses EpiApartmentNav.frames for category/style/cut/color/preview/basket and carried owned-item selection. See CHERISHED-SALES-FLOOR-IMPLEMENTATION.md. It demonstrates strict variant validation, once-per-player bundle, private temporary fitting ownership, versioned cart checkout, whole-checkout discount consumption, unique owned items/receipts, and equipment-layer conflict protection. Universal residence storage/laundry, Mystery Box modifiers and additional retailers remain future adapters; do not claim they follow merely from these frames.

## Complete location scope checklist

An NPC/location refinement must track frontage/approach, room-by-room appearance, fixture function, usable working clearance, public versus staff/private access, personal wardrobe/food/care/laundry, hidden stock/entrance disclosure and actual dependencies. Existing navigation geometry or completed shop rules do not imply those physical/personal details are designed. Review owner floor plans visually when available. Keep confirmed item existence (e.g. spare skinsuits) separate from unspecified individual identity/effect/ownership/use rules. Coherent proposals should cover the entire requested location and mark new preferences/finishes as proposed, with a clear step-by-step review order.

## Protected dangerous stock and warning knowledge

Separate existence, provenance, functional hazard knowledge, access, handling authority and actual use. An NPC may secure an item and warn a visitor about its danger while concealing its supplier/motive. Private-room permission must not automatically add equip/take/purchase actions. Charity’s three Countess-supplied permanent NPC-assignment suits are explicitly not retail/loot or her temporary quest mask. Model ordinary form ownership, temporary mastery trials and authored permanent role-assignment consequences separately; inspect/entry alone cannot trigger them.

## Shared AI context implementation checklist

Apply section 10 through the existing scene/living-profile registrations; do not create a second character design template. See [context repair handoff](audits/AI-CONTEXT-REPAIRS.md).

- Keep stable actor/form IDs and saved aliases distinct from the owner's original name. External NPC context uses apparent identity; private internal dialogue can identify both minds within one body.
- Register an authored AI dossier/communication style with a new scene actor (`ai: {dossier, communication}`), or flag the missing profile before treating it as AI-ready. Registration alone does not invent personality.
- Supply location `rooms` and a room selector with the existing scene adapter. Verify the actual room name/description reaches provider facts, separately from venue summaries.
- Declare form consciousness in the existing validated living profile. A non-conscious object gets authored sensations, never an invented second mind.
- Check co-present actors/players, private-room and remote-viewpoint filtering, actual body/travel/action facts, queue history privacy, reload and stale-response behavior. A rendered image is not automatically visible to the model.
- Capture provider facts, not only frontend intent. Exercise both a newly registered actor and location. Separate local assembly/mocked controls, deployed assembly inspection, and actual model prose acceptance in every status update.
