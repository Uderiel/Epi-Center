# Canine routines and mastery gate correction · v1.0.91

## Owner report and cause

Owner clarified that asterisks depict player actions, thoughts and inner dialogue, not words spoken aloud in general. Owner requests Kibbles context advantages comparable to Erin, familiar toilet/territory stops, travel routines, squirrel distractions and later periodic roaming-NPC interactions. Owner also reports mastery immediately after a +4 sleeping resistance roll from55% Erin influence.

The +4 did not grant mastery by itself. v1.0.89 changed Common finalization to grant mastery whenever progress reached100, clearing remaining influence. A legacy save already at100 progress therefore could finalize on its next resistance attempt from55 influence. This was an implementation error relative to the intended two gates. No unseen owner save was inspected; the exact pre-roll progress is not claimed. A deterministic100-progress/55-influence regression now verifies a successful sleeping +4 roll leaves45 influence and does not grant mastery.

## Corrected gates and finite Common route

All ordinary internal mastery requires100 progress AND0 influence. Common/Uncommon need no separate final roll once both gates are met. Rare/Epic final contests and Legendary authored trial remain unchanged. Permanent mastery already saved is not revoked; no resources, body, trust or physical inventory are reset.

Common retains20 progress per success and5 per failure, success −10 influence, and the shared30-minute interval. At100 progress, Common consolidation prevents completed-routine and worn-curse influence increases; failed resistance now reduces remaining influence by5 instead of adding5. Recovery alone does not consolidate influence or progress. Thus an active player using every opportunity finishes from worst-case100 influence/0 progress within40 failed attempts/20 game hours, including initial wait, rather than needing a week of unlucky rolls. This bound applies to the authored internal/routine/curse paths, not future bespoke external attacks. Existing100-progress saves retain their earned progress and must reduce real remaining influence. The cooperative Erin trust100 route stays separate. These consolidation values are implementation defaults under the requested easier Common pacing, pending owner balance review.

## Kibbles resistance and actual rest

- +4 original Willpower during a recorded nap/deep-sleep episode at the actual current location; simply wanting sleep or walking toward the crate is not being asleep.
- +4 when calm in a familiar marked place, at the crate, at home, or during the30-minute settled period after real rest, with no active routine, urgent pressure, fear or handler-focused restraint.
- +2 for a genuinely visible local squirrel distraction, when other urgent/fear/restraint exclusions do not apply.
- Otherwise+0. Combat and incomplete canine encasement receive no internal bonus. Bonus appears in Play and the actual resistance receipt; original attributes, natural dice, Resolve cost and cooldown remain.

Rest uses real timed routine progress. Reaching the crate does not complete a sleep. Threat/contact and urgent needs interrupt real sleep; moving invalidates its location-bound state. Completed rest can relieve fatigue but never heals combat health or grants inventory. Mastered/zero influence never imposes patrol or squirrel movement.

## Familiar places, paths and distractions

Additive saved preferences initially use Central Hub NE as toilet stop, NE/N/E territory checks and the eight-spoke park loop as patrol preference. These are authored defaults for this known dog and remain reviewable; they are not invented completed visits. Routine details are visible in Form, including mastered canine awareness without automatic movement.

Three actual marks at least60 minutes apart can establish a new favorite toilet location. Marks/last stop persist; questions and repeated same-minute actions cannot establish another visit. A planned toilet stop becomes due at bladder60 with120 minutes since the previous stop; urgent100 pressure uses immediate available open ground first. Interior routines use the apartment exit or wait for actual building doors; they cannot jump out of Richard's office or a shop. Every outdoor step uses the existing map graph.

Patrol walks follow ordered preferred destinations, remember actual route visits and preserve the existing two-game-day familiarity requirement. Reaching a toilet/food/rest destination is distinct from carrying out the activity. Saved elapsed routine time is consumed per real step. Territory checks become eligible every180 minutes and record an actual scent inspection without inventing a new mark. Threats, needs, food, sleep and play retain priorities.

A new local squirrel can interrupt an already running discretionary routine, not just influence the next initial decision. The existing influence/control rolls and unique-event budgets still apply. The same observed event is not repeatedly reclassified as new; urgent toilet/safety actions take priority and sleeping Kibbles cannot visually notice it. Mastered Kibbles offers a sensory notice and leaves action to the player. No squirrel teleport or capture is generated.

## Narration and future roaming encounters

Every parsed asterisk segment carries spoken:false and a category for action, unspoken/inner thought, imagined experience or dream. Forms may understand the player's inner dialogue; external NPCs cannot hear private narration. Only actual observed actions can inform external characters, and the engine still determines physical outcomes. Pure inner thought gets a neutral internal acknowledgement rather than being mislabeled a dream. Existing Worker character-voice-v2 remains compatible; no backend deployment or paid model call is required. Model compliance remains owner testing.

**Pending, dependent on roaming NPCs:** periodic chance-based canine encounters using actual co-location, individual schedules, personality and availability. Use saved cooldown/event receipts rather than checking for a paid dialogue every tick; avoid repeats/duplicates after reload. NPCs may notice, approach, keep distance or offer context-appropriate interaction only through implemented physical/ownership rules. No encounters, new residents, treats, collars, rewards or acceptance are fabricated now. Add this when the general roaming-NPC scheduler and character designs exist.

## Verification and owner retest

858 named automated cases plus entity assertions PASS. Fifteen new cases cover the55%-influence regression, both mastery gates, Common consolidation/cursed exposure, asterisk categories, actual canine roll bonuses, truthful sleep/interruptions, remembered marking/paths, real interior/outdoor navigation, saved squirrel interruption and permanent/zero-control safety. Syntax/module paths and whitespace PASS. Live publication/browser evidence follows. Native Android, paid Featherless voice and future NPC roaming interactions remain UNTESTED/unbuilt.

Retest existing unmastered Erin progress/influence without resetting; a sleeping +4 roll must reduce influence normally, not clear55 to0. As unmastered Kibbles, inspect Play's contextual bonus, allow a partial nap, compare an alert/squirrel scene, follow preferred toilet/patrol routes and reload midway. Check Form's familiar-place details. Existing permanent mastery must remain permanent.
