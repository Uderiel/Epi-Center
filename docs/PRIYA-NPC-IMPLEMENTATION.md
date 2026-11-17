> Owner-confirmed cubicle correction in v1.0.99: fourteen individual cubicles per department; east Sales 1 top left = Daniel; west Marketing 1 top left = Priya, 2 top right = Nadia. Numbering proceeds left-to-right from the top. Existing room/bay IDs remain stable for saves. See [current numbered-cubicle checklist](V1.0.99-OWNER-ACCEPTANCE.md). Earlier generic-bay and H/H_W testing instructions are superseded.

> v1.0.98 publication: gameplay `47b3de06cd4c82c768c52a002970ee03f542f425` is on main/rebuild; Pages and15 changed runtime/portrait byte checks PASS; 969 automated cases plus entity assertions and18 isolated public-browser groups PASS. [Play current version](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.98) · [Daniel/Nadia/Priya owner checklist](V1.0.98-OWNER-ACCEPTANCE.md). Owner/model/native-device acceptance remains pending; no reset or Worker redeployment. Earlier candidate/deferred-publication statements below are historical.

# Priya initial NPC candidate · v1.0.98

CP051 implementation on `rebuild/1.0-foundations`, based on `114e4223b95fd79f068f57ddc3eee68e44e79b24`. Historical candidate scope below; v1.0.98 is now publicly verified as recorded above. Prior published baseline was v1.0.97 (`bc5b8042ef9fcfdc6a7413279f09e18e0ee1b164`); latest complete entry-flow owner acceptance remains v1.0.34 with subsequent scoped acceptances preserved. No new owner acceptance or production deployment is claimed.

## Saved checkpoint

Implementation candidate `3d05b7bd1c8ff5ce55c7418dc1cc58f56b536d85` is pushed to rebuild. The owner subsequently uploaded the approved image to GitHub; exact image bytes have now been imported and verified in the rebuild candidate. See the newest `CURRENT-STATUS.md` checkpoint for the exact asset-import next action and mandatory pre-thread handoff rule. No additional gameplay change or test execution is claimed by this documentation update.

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

**Approved portrait imported:** `rebuild/hub/assets/priya-shah-approved.png` is the exact 1024 × 1536 PNG recovered from owner upload commit `3456f5f`. A later rename on main produced a blank text file; the original image was recovered from Git history without changing main. Source/import blob `877965c4f9e41a1b4083f63a06785858667d7e0e` matches byte-for-byte. See `releases/v1.0.98-priya-portrait.json` for SHA-256 and provenance. The image displays proportionally without cropping or stretching. The Library reference remains historical source approval; downloadable image access is no longer a blocker.

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

`EPI_PREVIEW_ORIGIN` overrides the localhost URL. Runner creates a fresh isolated browser context with synthetic saves, AI off, live time paused; it never reads or writes the owner's browser slots. Evidence: `releases/v1.0.98-browser-checks.json`; mobile image: `releases/images/v1.0.98-priya-mobile.png`. **14 browser check groups PASS:** boot/resources, office dock, exact conversation timing, composer routing, two refusals, reload/other slot, 360px width, encounter entry, no acquisition on conclusion, home welcome, canonical Dev relationship control, no uncaught exceptions, desktop image decode/aspect ratio and 360px portrait display. Fixtures explicitly position actors for isolated interaction checks; deterministic suites verify the full legal commute and calendar. Native-device geometry and paid-model behavior are separate acceptance items.

During development, old UI test contexts needed the new NPC/markup dependency and a hard-coded historical script version was corrected to validate versioned loading. A new calendar test caught absent attendance-counter initialization for added participants; fixed and rerun. Initial browser fixtures left Accessible Rooms closed and attempted a friendly home visit immediately after aggression; fixtures were corrected to open the real dock and isolate the friendly scenario. These failures are not claimed passed until the final reruns.

## Candidate review before main

1. Inspect the imported approved portrait at desktop and mobile widths; automated local rendering checks pass, owner acceptance remains separate.
2. Preview the rebuild source locally. Meet Priya in Marketing H_W; open her dock and send NPC text. Confirm appearance-based recognition and concise, contextual replies.
3. Observe a real commute, saved arrival choice, lunch, work-time records and reload. Existing resources, forms, original appearance and other slots must remain unchanged.
4. As recognized Erin, decline one invitation twice. Confirm one further appeal and then stop; reload and retry without reopening. On a different occasion, accept and attend physically at Applewood's entrance. No fake interior/meal/date reward.
5. Visit unannounced while she is home; contrast an unfamiliar appearance or absence. Verify ordinary shared civilian confrontation, retained damage and no form/mastery/reward acquisition.
6. Separately test paid Featherless portrayal, hidden-information requests, refusals and strained conversations; record PASS/FAIL/UNTESTED. Do not infer model compliance from simulated tests.
7. Report remaining limits and obtain promotion direction before main. No main promotion or Pages verification is part of this candidate push.

Current published link (historical baseline, **not this candidate**): https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.97 . Changing a query parameter on that mutable URL does not publish or select the rebuild candidate.
