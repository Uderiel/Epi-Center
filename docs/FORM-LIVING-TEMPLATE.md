## Current owner clarification — one universal relationship bar

Use [the current relationship contract](DIRECTED-RELATIONSHIP-SYSTEM.md). Every NPC, form and encountered entity has a persistent −100…+100 score toward each individual player. Trust is derived from that score, never a second social value. Apply the owner's ±25/±50/±75/±100 interpretations, with form-specific positive meanings and schedule/permission/mastery boundaries. Historical instructions below separating Erin social relationship from a cooperative trust meter are superseded for the social value; earned mastery and influence remain distinct. Each character definition must specify positive/negative triggers, actual controller events/deltas, exceptions and persistence evidence. The shared storage, bars, tiers, event deduplication and player/entity isolation are universal infrastructure, not work to repeat for every character.

> Owner rule update, v1.0.115: reaching zero Resolve while occupying an unmastered form permanently binds that form. This supersedes older zero-Resolve desperate-resistance/recovery/escape guidance below. Spending the last 3 Resolve also triggers binding before mastery is awarded. Base humans and already-mastered forms are exempt; later Resolve recovery does not undo binding. See [current rule and corrections](RESOLVE-BINDING-AND-FOOTWEAR-CORRECTIONS.md).

## v1.0.106 implementation checkpoint

See [implemented Erin/shared refinements and limits](ERIN-REFINEMENT-IMPLEMENTATION.md) and [acceptance checklist](V1.0.106-OWNER-ACCEPTANCE.md). Sustained activities, satisfaction, voluntary mastered delegation, correspondence/Scheduler and shared conversation continuity now have runtime implementations. Broader draft proposals outside that implementation list remain proposals. Exact release/test evidence is in CURRENT-STATUS.md; historical notes below do not override it.

## Universal authoring companion

Use [NPC and form design template](NPC-AND-FORM-DESIGN-TEMPLATE.md) for complete character proposals, evidence/status tracking and completion reviews. The runtime schema below remains unchanged. [Erin refinement draft](ERIN-CHARACTER-REFINEMENT-DRAFT.md) is the first application; it is not new gameplay.

# Form presence, body awareness and living profiles — v1.0.79

Canonical names: **Erin Lillard** and **Richard Carter**. Stable IDs (`erin`, `richard`, `npc:richard`, `shoes-0`), saves, assignment state and reward ledgers are unchanged. Short names remain valid dialogue aliases.

## Identity and feed contract

`EpiFormLiving.current(save)` resolves equipped Kibbles (including personalization), another active form, or persistent Erin transformation even after heel removal/storage. Mastery changes authority, never apparent identity. New player input is echoed once verbatim, including recognized/rejected actions, with an immutable actor snapshot and original player alias. Owner display: `Erin Lillard (player name)`. Typed text is never replaced with an AI paraphrase. Successful household/office/equipment button receipts also snapshot visible identity.

Actor `publicName` contains only the apparent identity; `ownerAlias` is a separate owner-only field. `EpiPlayerFeed.publicActor` whitelists public actor fields; `publicEntry` omits owner/private feed entries. This is a local single-player game: no multiplayer transport or server authorization layer is introduced. A future transport must enforce ownership server-side and must never serialize the local save/feed wholesale. Legacy entries without actor snapshots cannot have their historical form inferred safely and retain their previous attribution.

## Shared runtime profile

Copy `rebuild/hub/form-living-template.json`, set a stable ID and validate with `EpiFormLiving.validate(profile)`. Register native profiles with `register`, or attach `livingProfile` to the saved form record. Invalid profiles use conservative, non-speaking defaults with configuration errors. Fields:

| Field | Contract |
| --- | --- |
| `bodyType`, `body` | Authored anatomy/region facts, never invented full transformation |
| `conscious`, `communication` | Explicit speaking consciousness or sensory impressions only |
| `senses`, `interests`, `responses` | Bounded AI context and rotating deterministic body reactions |
| `schedule` | Weekday/weekend wake hour, sleep hour, named activity blocks |
| `clothingComfort` | Human default clothed; natural coat for animals; explicit contextual exceptions |
| `adapterId` | Native physical routine adapter; declarative schedule data cannot execute code |

`chooseRoutine` selects intent from commitments, urgent needs, clothing comfort, meals, rest and schedule. `physical:false` is intentional: native adapters must perform reachable movement, resource/item changes and exactly-once completion through existing authority and time systems. Erin uses `erin-life`/`erin-daily`; Kibbles uses existing canine behavior. Future forms receive identity, profile validation, body feedback and AI context immediately, but require their own native physical adapter for detailed autonomous schedules. Do not grant a future form Erin's routine, wardrobe, speech, perks or capabilities.

## Authority and equipment

At 75–100 influence the established unmastered forms use the existing automatic-decision cadence, with original-player resistance/persuasion still available. At **100% influence, removed cursed footwear does not disable autonomy**. Passive heels-off Resolve recovery remains separate from authority. Mastered forms and zero-influence states preserve player control. A completed different active form suppresses latent Erin routines.

`EpiFormBody` handles bounded own-body observation, neutral touch/movement and questions. It checks active encounters, actual anatomy, encased hands, current authority and worn equipment. A direct **foot massage is blocked while shoes/heels remain worn**, consumes no action time, and never unequips anything. The existing real curse removal save must succeed (or Erin must remove the heels through her existing routine); ordinary footwear also needs removal. Sensation through other clothing does not imply undressing. Canine paws do not acquire human fingers. No arousal, reward, trust or mastery farm is introduced.

Human clothing comfort defaults to coverage of torso and hips. Explicit known undercoverage prompts Erin to select real clean clothes at home under existing authority. Missing clothes produce a bounded 30-minute retry. Legacy empty equipment is unknown rather than retroactively declared nudity. Bathroom/private bedtime and confirmed consensual private intimacy permit contextual comfort; an occupational exception must be authored in the profile and match the confirmed current venue. No automatic stripping, fabricated consent, profession or item is permitted. NPC AI dossiers use the same ordinary clothing default; no unrelated NPC wardrobe simulator is added.

## AI and persistence

Each body reaction is one private response entry eligible for one existing AI request. Player echoes, blocked actions and mechanical results do not invoke generation. AI receives the bounded shared living context and recorded equipment/control facts. Off/failure uses the deterministic response. Authoritative control, anatomy and item changes remain outside generated prose.

`formExperience[formId]` stores response counters and the last attended region; `formComfort[formId]` stores explicit coverage knowledge; the existing Erin daily progress stores comfort dressing and retry time. Optional additive state is backward compatible. Historical feed entries are not guessed or rewritten.

Acceptance: `form-presence.test.js` covers heels-off 100% movement/grooming, mastered identity/control, canine and future forms, footwear/removal, body constraints, private attribution, reload, clothing contexts and bounded retries. Retain all existing report/reward, AI deduplication, nighttime, daily-office and navigation suites.
