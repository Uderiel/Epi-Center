> Implementation checkpoint: the initial NPC candidate v1.0.98 is implemented/tested on rebuild only. See [scope and remaining limitations](PRIYA-NPC-IMPLEMENTATION.md). The approved portrait still requires asset transfer. Broader future design below, including flats/cat and a universal connection resolver, is not claimed shipped.

# Character connections and world life
Design contract · CP051 · November 16, 2026. Not implemented or deployed.

## Purpose and scope
Build Erin's life as a connected world: colleagues, friendships, households, forms, possessions, duties and places share one reference system. Priya is the first complete authoring example. Preserve existing NPC, form, location and calendar IDs; map references to verified IDs during implementation rather than renaming shipped entities. Future venues trigger a review of existing interests, not automatic invented attendance.

## Comprehensive connections field
Each character/form dossier contains a connections collection. A connection is a directed, typed record; reciprocal perspectives may differ.

| Field | Meaning |
| --- | --- |
| id; subjectRef; targetRef; kind | Stable connection identity, typed entity references and relation such as friend, reportsTo, residesAt, enjoys, owns, sourceOf or knownAs |
| status; source | Confirmed, tuning default, candidate or observed; checkpoint/source and revision |
| perspective; strength; boundaries | Subject's view, existing relationship value if available, trust and contextual limits; no extra numeric scale required |
| knowledge; disclosureGate | Who actually knows this connection and when it can be discussed |
| scheduleRef; availability; priority | Existing shared calendar/routine reference, eligibility and conflict priority |
| placeRequirements; routeRequirements | Implemented/open/discovered/access conditions and legal travel |
| motives; activityOptions | Why the person might go or interact; options, not completed events |
| historyRefs; lastEvent; cooldown | Relevant real encounters, agreements, declines and duplicate prevention |
| lifecycle; dependencies | Active/planned/inactive, unavailable actors/services and implementation blockers |

Separate durable relationships and interests from current presence, plans and receipts. A form's owner, visible identity, consciousness and physical body are separate references. Erin's form has no independent offscreen duplicate; original-player identity is not public recognition. An object-form player is one conscious entity despite two flats. Ownership or acquaintance never implies presence or access to private thoughts.

## Priya connections
| Target | Connection and viewpoint | Eligibility/knowledge |
| --- | --- | --- |
| Erin Lillard | Established close friend; warmth, private teasing, shared openness; makes work worthwhile | Recognized appearance/voice and actual presence; private discussion requires context |
| Nadia Voss | Team lead; friendly professionalism, private irritation at credit-taking/favoritism | Workday duties; motive for selective minor-briefing lateness is not automatically Nadia's knowledge |
| Richard Carter | Department manager through Nadia | Formal organization relation; no invented personal friendship |
| Lena Ortiz; Maya Bennett | Outgoing friends; Priya signals interest in plans | Confirmed names/friendship direction only; fuller biographies and playable presence need their own records |
| Applewood 2F | Lives alone; welcomes close friends unannounced | Presence and actual door/access state govern visits |
| Technology Center, Marketing | Workplace; copy, audiences, claims, Nadia edits | Shared third-floor calendar and actual workstation/task state |
| NE Central Hub park | Lost flats after changing into jogging shoes | Future flats encounter; not a daily jogging route by inference |
| Library; restaurants | Enjoys library visits and trying restaurants | Select only eligible built venues; a mapped name is not a service implementation |
| Lantern & Laurel; The Cloistered Madame | Established venue preferences | Preference does not grant prior visits, service knowledge or access |
| Casino/strip-club outings | Open to these outing categories | Match existing venue capabilities later; no automatic booking |
| Cursed flats; cat arrangement | Linked future content | NPC first; flats next; cat deferred; no early quest rewards or cat availability |

## Scheduling and encounter resolution
1. Gather authored connections, commitments, current needs, mood, available time and eligible activities.
2. Resolve priority: active combat/physical restrictions, accepted time-bound commitments/work, accepted hosting/visits, then discretionary plans. Priya may explicitly revise plans to host a friend; record affected commitments rather than erase or silently complete them.
3. Check open hours, access, duration and round-trip route feasibility. Save a single selected plan and RNG outcome.
4. Send invitations through implemented channels only. Phones are unavailable; use actual in-person contact or another implemented channel. An interest remark is not acceptance.
5. Walk legal routes with elapsed travel. Two people meet only through real co-presence and availability. A shared interest raises opportunity; it does not teleport actors together.
6. Emit one idempotent encounter opportunity; familiarity, mood and recent history guide whether either speaks. No mandatory greeting every minute.
7. Record actual attendance, changed commitments and witnessed outcomes. No reward for merely proposing or scheduling.
8. Reevaluate on meaningful events: new venue, opening/closure, end of work, accepted invitation, changed needs or route blockage. Repeated redraws/reloads do not reroll plans.

Work/weekend calendars and actual weekend correction assignments override ordinary weekday assumptions. Personal preference and social flexibility remain motives. Save active plan, travel, invitation outcome, per-occasion declines, relationship events and deterministic selection state per save slot; existing saves migrate idempotently. Unimplemented actors may be pending plan references, never fabricated attendees.

## AI context and character growth
Provide only the actor's current concise persona, known connection slice, actual scene, obligations, relevant memories and permitted actions. Keep hidden history out of the outbound model prompt until a gate actually authorizes it; wording alone is not a privacy barrier. Separate heard speech, witnessed acts, private thoughts, rumors and author truth.

Allow new phrasing, humor, preferences within established interests, initiative and context-supported emotional growth. Record durable new facts only through validated events; label improvised detail before promoting it into persistent canon. Do not hard-code every line or lock mood forever. A change in trust needs an experienced cause; a single prompt cannot rewrite identity, invent a marriage or reveal another person's secrets.

AI returns dialogue/narration and optional intent, never authoritative movement, attendance, payment, transformation or access. Validator checks actor capabilities, scene, knowledge gate, authority, targets and current revision. Reject late responses after travel/control changes. Unsupported intents receive a consistent local fallback rather than imaginary completion. Preserve the existing separation of dialogue and narration.

Eve regression: a report of being trapped as Kibbles can receive her established cheerful denial/normalization. Repetition alone does not create security dispatch or covert awareness. A real authored security event would need its own legal trigger and receipt.

## Integration sequence and acceptance
First implement Priya using existing staff/presence, legal travel, civilian combat, calendar and AI context adapters. Then add the shared connection registry/resolver in small compatible steps; do not replace working systems wholesale. Add venue-interest matching when a location becomes playable. Then apply the dossier/connection review to Erin, Richard, Daniel, Nadia, Kibbles, Eve and Charity, recovering current records first.

Required checks: no offscreen duplicate Erin; one location per actor; conflict and opening-hour resolution; actual shared presence; no invented phone/service; planned actors absent until implemented; person-specific knowledge; same-slot reload stable plans; separate-slot isolation; no duplicated meeting rewards; one further invitation appeal then stop; repeated declines tracked across occasions; new venue eligibility review; blocked route fallback; no hidden-lore prompt leakage; distinct in-character replies across normal/strained interactions; Eve denial without fabricated escalation. Automated invariants and live Featherless portrayal tests are separate evidence. Nothing here claims either has run.
