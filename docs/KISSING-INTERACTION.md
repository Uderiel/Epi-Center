# Kissing interaction — implemented locally, unpublished

## Approved terminology and text access

The canonical shared library is `rebuild/hub/explicit-action-types/lips/kissing.json`, indexed by body type and part in the parent `index.json`. Its generated browser module is `kissing-types.js`. Sixteen entries cover unspecified, peck, closed-mouth, open-mouth, French, lingering, repeated, cheek, forehead, temple, hand, nose, neck, shoulder, butterfly and air variants.

Examples: “I French kiss Tits with tongue”, “I open-mouth kiss Tits”, “I kiss Tits”, “I accept the kiss”, “I pull away”, “I break the kiss”. Requests use the actual nearby target, body restrictions and NPC decision. The optional stop button calls the same controller. Desires, quoted speech and purpose clauses do not establish contact.

Tits accepts at nonnegative relationship when willing and customer service is not disrupted; no +100 threshold was added. Her first disclosure is brief: infectious, personally fun to her, and the player could catch it. A first warning starts no contact until the player confirms or repeats the request. Work demand or either participant can end contact. Other NPC acceptance policies remain unbuilt.

## Rolling exposure

Only accepted French/open-mouth kissing infers fresh saliva. Other kiss labels alone do not infer it. Twenty actual game minutes of qualifying contact with a source within the preceding 120 game minutes triggers the existing hidden Endurance resistance check, not automatic infection. Breaks pause accumulation; each old minute expires individually at its two-hour age. Overlapping intervals are unioned. Example: ten minutes kissing, thirty apart, ten kissing reaches twenty; ten minutes starting at minute zero has nine minutes remaining at minute 121 and zero at minute 130.

The resistance difficulty escalation/reset remains separate from this rolling contact window. A renewed exposure after a successful resistance check uses the existing escalation. A continuous live fresh source remains fresh; this does not extend the lifetime of stored fluids. Generic non-kissing mucous exposure retains its existing continuous rule. The 72 real-hour incubation is unchanged.

## Feed and narrator

Resolved events preserve authored `tone: explicit_adult` with neutral technique, actor parts, target part, participant and actual contact status. No narrative output establishes agreement or mutates exposure. Contact/exposure records and checks persist through reloads. Detailed college lore, phone/Eve disease explanations and additional body-target vocabulary remain separate owner-led work.

## Verification

`kissing.test.js` covers exact threshold, rolling expiration, overlaps, reload, renewed resistance, work interruption, both participants stopping, body restrictions and technique parsing. `scripts/browser-kissing.cjs` exercises the actual composer, warning/confirmation, live clock, stop/resume, resolved feed metadata and reload in an isolated QA save without paid calls. See `docs/verification/kissing-browser.json` for recorded browser evidence.

## Drool reference addition

Drool is an alias for saliva. Direct consumption uses the existing ten-minute ingestion route within a rolling120-game-minute window; non-ingested mucous contact uses the existing twenty-minute continuous route, and intact-skin contact uses sixty continuous minutes. Naming drool does not establish a recipient, actual contact or a completed threshold. These conditions are recorded in the wording reference; natural-language drool interaction triggers are not yet implemented.
