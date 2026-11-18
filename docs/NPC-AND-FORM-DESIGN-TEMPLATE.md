# Universal NPC and form design template

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

Map specific people, history sources, mutual attitudes, known identity, trust and unresolved tensions. Separate NPC relationship, internal-form trust, mastery and consent. Define introductions, invitation/acceptance, entry permission, actual travel, hosting, room access, follow/escort, departure and follow-up. Proposed friends are not spawned actors.

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
