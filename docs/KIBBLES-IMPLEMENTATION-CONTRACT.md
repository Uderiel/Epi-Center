# v1.0.52 form-mind implementation contract

The owner answers in KIBBLES-BEHAVIOR-DESIGN and newest approved headings in COMBAT-FOUNDATIONS-GUIDE remain authoritative. This document distinguishes implemented behavior from explicit engineering defaults and future world content. Owner acceptance is pending.

## Architecture and actual gameplay

- `world-objects.js`: shared registry, visibility/availability checks, named actions and composer intent. Heels and Unit 3C use canonical handlers from controls and text; crate belongings respect ownership and allow a real owned snack to be stored. Examine never silently collects/equips. Existing apartment scenery remains authored scenery, not invented loot.
- `internal-mastery.js`: opposed d20, shared 30-game-minute internal eligibility, independent hourly d50 escape, action/exceptional-event budgets, completed imposed activity deduplication, rarity finals. Saved timestamps do not reset on reload or accrue a backlog. Double natural 1/20 contests retain the current-action defender; ordinary ties also defend the current action.
- `kibbles-behavior.js`: deterministic sensory priorities, transient context-derived emotions, one canine personality with archetype emphasis, meaningful event/bond history, short food/promise memory, long scent/place/route memory, known cues and new trick reinforcement. No permanent emotion bars and no new numerical relationship penalties. Ordinary hurt can soften through gentle care; serious forced-boundary history is retained for future authored repair.
- `form-minds.js`: original-character attributes and existing active resource pools; legal world routes and anatomy; post-defeat full encasement; internal/escape/mastery; autonomous completion and voluntary-action distinction. Routine journeys retain control between legal steps and award +5 only when actually completed, once. Normal player travel does not also fund an extra free canine journey.
- `form-minds-ui.js`: Form/Equip panels and main-composer commands for resistance, recovery, escape, insight, care, play, known cues, treat practice and marking. The live feed records rolls/effects. Crate stock is consumed for accessible canine practice; paws cannot manipulate inventory snacks. A selected cue is captured before its drawer closes.

## Approved mechanics implemented

Normal resistance costs 3 Resolve; desperate costs zero with −2; recovery restores 6 capped at the existing pool maximum. Original Willpower contests form Reasoning. Success reduces influence 10 and adds 10 permanent progress; failure adds 5 influence and retains progress. These actions do not advance time. Zero influence prohibits forced override/regain.

Influence 1–24 supplies urges; 25–49 permits up to one conflicting-action contest per interval; 50–74 adds one independent attempt; 75–100 permits two independent attempts and one additional unique actual exceptional event. Genuine event IDs survive reload; no repeated idle roll loop. Quiet/absorbed windows can suppress extra pressure. Handler focus removes that quiet suppression without inventing a numeric roll modifier. Shared control can be willingly offered during a quiet window and lost to a genuine new distraction; it is not mastery. A genuinely appealing play alternative may redirect a nonurgent routine without a contest.

Common/Uncommon mastery is automatic at progress 100/influence zero. Rare/Epic use original Willpower vs authored Reasoning with form +2/+4, restoring influence 40/50 on failure and retaining progress. Legendary trials remain authored, never auto-granted. Erin's existing meaningful home-topic trust accumulation can independently reach +100 cooperative mastery. No new generic Kibbles trust-mastery threshold exists. Mastery never heals, grants tier XP or reverses established physical changes.

Actual world-origin Kibbles internal mastery resolves Hangry Fangs; returning to Eve still requires release and a human-understandable current body. The existing snack/combat routes and one-time rewards remain intact. Dev encounters do not fabricate quest completion. Mastered Kibbles never contests actions or completes imposed activities: senses and impulses can be offered, and the player decides.

## Explicit defaults needing owner play acceptance

These are implementation choices, not claims of earlier numeric owner approval:

- Newly unmastered Kibbles initializes at 100 influence; any existing saved influence/internal record is preserved. Existing Erin influence is retained, otherwise its legacy starting zero is used.
- Full unmastered encasement provides the physical original-Fitness regurgitation method. A bored, unrestrained appealing-play release uses original Influence through the same hourly d50 escape rules. A closed kennel blocks unconfirmed safe release before a roll. Both outcomes are regurgitation, never zipper/seam removal, mastery or healing. A release promise can be fulfilled while the released dog remains nearby.
- Original-character alignment selects temperament emphasis, with Physical as deterministic tie fallback. Existing authored Kibbles combat attributes/resources are unchanged. Name/gender remain one-time instance choices after mastery; before choice no female anatomy or dimensions are asserted.
- Existing provisional hunger/bladder/fatigue rates remain unchanged. Hunger 70 without crate stock prioritizes seeking food; sunrise/midday/sunset slots use 07:00/12:00/19:00. Existing full bladder/fatigue caps, or a player outside request, supply urgent physical context. Stored snack consumption satisfies hunger; no food is conjured from sensory narration.
- Emotions follow current scene/activity and recent meaningful events. Food/promises expire within one game hour; forgetting alone is not deception. New trick learning needs real reinforcements spanning about 1,440 game minutes; scent-marked route familiarity needs real revisits/marks spanning about 2,880. Mere idle waiting does not produce learned cues/routes.

## World-provider boundaries and continuation

The implemented event reducer accepts actual actor IDs and trusted context for collar/leash/kennel, humans/children/authority, danger, medical fear, pack warnings, crate intrusion and storms. These events drive real perception/control selection when supplied. Existing squirrel and world-clock/needs events are connected directly. No fake multiplayer handlers, roaming dog packs, storms, equipment ownership or NPC scenes were created to simulate world content that is explicitly still planned. Future providers must establish real actors/items, consent/trust and unique event IDs; they must not turn scraps into instant ownership. No unapproved numerical handler modifiers, severe-relationship thresholds or outer-world exceptions were added.

Broader Erin household lifecycles, physical autonomy/work consequences, richer authored dialogue, future map expansion and location art remain in OPEN-TASKS-AND-DECISIONS. The clock remains action-driven; the proposed live real-time clock is not implemented. All testing evidence is in releases/v1.0.52-*. Owner/native-device acceptance is a separate gate.
