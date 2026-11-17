# Priya initial NPC candidate · v1.0.98

CP051 implementation on `rebuild/1.0-foundations`, based on `114e4223b95fd79f068f57ddc3eee68e44e79b24`. This candidate is for review before promotion to main. Published gameplay remains v1.0.97 (`bc5b8042ef9fcfdc6a7413279f09e18e0ee1b164`); latest complete entry-flow owner acceptance remains v1.0.34 with subsequent scoped acceptances preserved. No new owner acceptance or production deployment is claimed.

## Saved checkpoint

Implementation candidate `3d05b7bd1c8ff5ce55c7418dc1cc58f56b536d85` is pushed to rebuild. The owner reconfirmed the approved Library link and supplied the inline portrait; its bytes are still unavailable to workspace tools. See the newest `CURRENT-STATUS.md` checkpoint for the exact asset-import next action and mandatory pre-thread handoff rule. No additional gameplay change or test execution is claimed by this documentation update.

## Implemented

- Priya Shah, adult content strategist (`priya` / `npc:priya`, marketing-01), appears in Marketing H_W, the room interaction dock and NPC composer only through actual presence. Her approved relative age/range is preserved without inventing an absolute age.
- Additive `world.priya` state with independent resources, relationships by perceived appearance/voice, daily deterministic choices, legal district/office travel, invitations, attendance and bounded event history. Original character, currency, inventory, form progress, slots and existing NPC records remain intact. Introduction does not confer Erin's existing close friendship to an unfamiliar body. Erin has no independent offscreen duplicate.
- Early yoga/tea intentions; the shared weekday/correction-shift calendar, saved occasional 09:05–09:15 arrival targets, real commute, lunch 12–13, 17:00 return and home leisure intentions. Explicit booked meetings whose participant list includes Priya override lateness. Her ticker runs within the existing minute-by-minute department pipeline, before meeting attendance; an unavailable/missing Priya blocks meetings that require her. Existing sales-only safety briefings and leadership reviews do not acquire an invented attendee.
- Real stationary work minutes for copy, audience messaging, product-claim checks and Nadia edits against the available product catalog. Work-time records do not fabricate completed copy, orders, campaign results, money or bonuses.
- Small event-based relationship changes, daily anti-farming, remembered disagreements and apologies without instant repair. One invitation per visible identity/day: first refusal allows one appeal, second ends it; a reload/repeated click cannot reopen it. Separate declined occasions can prompt a gentle friendship check-in without declaring hostility. Accepted visits check overlapping commitments and use actual entrance co-presence/time before completion.
- Known friends can ask to visit without advance notice while Priya is home. She can meet them at the Applewood entrance. Unknown appearances receive no private access. Unit 2F has no playable interior in this slice.
- The existing civilian adapter computes healthy pools: Health/Stamina/Resolve 100, Arousal 0. The tunable 44-point allocation calculates Mental primary. Actual damage persists; home recovery uses the existing civilian rate. Ordinary withdrawal is preferred; restrained/cornered responses use shared legal techniques, costs, dice, reactions and surrender. No new combat subsystem or victory rewards.
- One concise Featherless persona, authored fallbacks, isolated history, actual scene/work/relationship context and stale-response invalidation. Vague concerns require recognized friendship and a non-office scene. Suppressed history/author truth never enters the persona or supplied character context. No flats, cat/collar or transformation action offers.

## Defaults and remaining limitations

Exact schedule times, 40% ordinary late-day selection, +1 daily listening / -3 humiliation / -20 aggression, +2 completed shared visit, acquaintance threshold +10, one invitation per identity/day, an 18:00–19:00 entrance visit with five actual shared minutes, and a check-in after multiple declined occasions are reviewable tuning defaults. They do not establish new owner-approved biography. No fixed decline count proves anger. A private introduction is familiarity, not established close friendship.

**Portrait pending:** the approved image is referenced only at `https://chatgpt.com/library?file_id=libfile_5d22233c95288191bb52413270b3b132&account_id=personal`. It is absent from the repository/mounted assets, and no available connector can download that Library resource. The owner was asked to attach the exact approved image and offered to submit it. No substitute has been generated or claimed approved. The candidate displays a pending-portrait message. Transfer/import and visual verification are still required before treating the requested update as complete.

Unit 2F room graph, food inventory/cooking/eating, full hosting interiors, named friends' physical NPCs and new venue services are not implemented. Home activity descriptions are schedule intentions, not consumed meals or completed services. The limited doorstep/entrance visit is explicitly described in UI. Minor-briefing pushback requires a real authored briefing and witnessed irritation history; no automatic daily sabotage is added. Paid Featherless writing quality, native Android and owner acceptance remain untested. Eve's previously reported security escalation is unchanged by this Priya-only slice.

Cursed flats, cat/collar, new transformation and combat systems are deferred by the current user scope. Future object/cat decisions remain design records, not playable mechanics.

## Verification and reproduction

From repository root:

```sh
node rebuild/hub/priya.test.js
node rebuild/hub/marketing.test.js
node rebuild/hub/department.test.js
node rebuild/hub/ai-context.test.js
node rebuild/combat/civilian-encounter.test.js
node services/ai/test.mjs
node scripts/verify-development.cjs
git diff --check
```

The full verifier runs every Hub/combat test file, simulated AI backend cases, JS/inline-script syntax and module paths. It writes `docs/releases/v1.0.98-tests.json`. Final evidence reports **969 named cases plus entity assertions across 51 suites**, syntax and module paths PASS. Priya has **25 named cases** covering migration, route adjacency, persisted RNG, actual work, recognition, invitation/relationship history, encounter resources and outcomes, knowledge gates, slot isolation and real department-calendar integration.

Browser reproduction (requires Playwright and Chromium):

```sh
python -m http.server 8766 --bind 127.0.0.1
# In another terminal:
node scripts/browser-priya.cjs
```

`EPI_PREVIEW_ORIGIN` overrides the localhost URL. Runner creates a fresh isolated browser context with synthetic saves, AI off, live time paused; it never reads or writes the owner's browser slots. Evidence: `releases/v1.0.98-browser-checks.json`; mobile image: `releases/images/v1.0.98-priya-mobile.png`. **12 browser check groups PASS:** boot/resources, office dock, exact conversation timing, composer routing, two refusals, reload/other slot, 360px width, encounter entry, no acquisition on conclusion, home welcome, canonical Dev relationship control, no uncaught exceptions. Fixtures explicitly position actors for isolated interaction checks; deterministic suites verify the full legal commute and calendar. Native-device geometry and paid-model behavior are separate acceptance items.

During development, old UI test contexts needed the new NPC/markup dependency and a hard-coded historical script version was corrected to validate versioned loading. A new calendar test caught absent attendance-counter initialization for added participants; fixed and rerun. Initial browser fixtures left Accessible Rooms closed and attempted a friendly home visit immediately after aggression; fixtures were corrected to open the real dock and isolate the friendly scenario. These failures are not claimed passed until the final reruns.

## Candidate review before main

1. Import the owner's exact approved portrait and verify it at desktop and mobile widths.
2. Preview the rebuild source locally. Meet Priya in Marketing H_W; open her dock and send NPC text. Confirm appearance-based recognition and concise, contextual replies.
3. Observe a real commute, saved arrival choice, lunch, work-time records and reload. Existing resources, forms, original appearance and other slots must remain unchanged.
4. As recognized Erin, decline one invitation twice. Confirm one further appeal and then stop; reload and retry without reopening. On a different occasion, accept and attend physically at Applewood's entrance. No fake interior/meal/date reward.
5. Visit unannounced while she is home; contrast an unfamiliar appearance or absence. Verify ordinary shared civilian confrontation, retained damage and no form/mastery/reward acquisition.
6. Separately test paid Featherless portrayal, hidden-information requests, refusals and strained conversations; record PASS/FAIL/UNTESTED. Do not infer model compliance from simulated tests.
7. Report remaining limits and obtain promotion direction before main. No main promotion or Pages verification is part of this candidate push.

Current published link (historical baseline, **not this candidate**): https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.97 . Changing a query parameter on that mutable URL does not publish or select the rebuild candidate.
