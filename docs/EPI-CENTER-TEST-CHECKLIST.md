# EPI-CENTER — Test Checklist

### 2026-10-26 v0.8.81 Unified Play layout candidate — owner verification pending

Published immutable `epi-center-v0.8.81-unified-play-layout.html` commit `675562c47787d9130f4f21948f545e82d1a38a66` based on v0.8.80. Rather than styling legacy containers, final `render` wrapper now identifies the **actual `.v815` live-feed DOM**, retains that interactive subtree, and replaces the main Play root with a compact location header, five quick-reference controls (Location, Form, Stats, Path, Quests), and the original live feed/composer. Existing Erin status/routine/Explore Nearby cards and giant location art are excluded from Play composition; Equipment and other tabs remain unchanged. Overlay reference drawers are read-only and Path offers existing survey and map actions. The unchanged foundation save key and existing live-feed DOM are preserved. **Patch JavaScript syntax checked PASS; browser/Android visual and functional tests NOT performed; owner acceptance PENDING.** Check both portrait/landscape, feed visibility, controls, input, drawers, Map/Equip, Erin travel consequences, reload and Eve replay. Earlier v0.8.79 and v0.8.80 confirmed FAIL by owner. Accepted baseline still v0.8.74. Candidate: `https://uderiel.github.io/Epi-Center/epi-center-v0.8.81-unified-play-layout.html`.

### 2026-10-26 owner FAIL — v0.8.80 in portrait AND landscape

Owner supplied two screenshots showing v0.8.80 still has Erin Character & relationship, routine, Explore nearby card, Autonomy journal, old channel UI, and oversized landscape artwork/side navigation. Expected new Pathing and quick-reference drawers not visible. **Mark v0.8.80 FAIL, do not accept.** Earlier v0.8.79 also FAIL. Root issue requires deeper audit of the **actual composite Play screen renderer** and later `console816` / `play69` / `render` overrides, not just CSS class matching or appended DOM overlays. Next task: map the final renderer and Play DOM, then replace the Play composition in a single scoped refactor, retaining authoritative mechanics, history, input, actor autonomy, map travel, equip and save key. Do not publish another purported repair without checking actual rendered output in portrait and landscape. Owner-accepted baseline remains v0.8.74. v0.8.78 is Eve replay candidate, not accepted. Last failing URL `https://uderiel.github.io/Epi-Center/epi-center-v0.8.80-active-feed-layout-repair.html`.

### 2026-10-26 v0.8.79 owner FAIL and v0.8.80 active-renderer repair — pending test

Owner's Android screenshot showed v0.8.79 unchanged: Erin relationship/routine cards, **Explore nearby** and old channel buttons still occupy Play. Diagnosed incorrect target: v0.8.79 styled `.u814` and `.u814-history`, but current source renders `console816()` with `.v815`, `.v815-live`, `.v815-compose` and `explorationControls863()`. **v0.8.79 FAIL; do not accept.** New immutable `epi-center-v0.8.80-active-feed-layout-repair.html` commit `9b27e3e` adds active `.v815` styling, location-art placeholder, Character/Form/Location/Pathing/Quests overlay buttons, sticky composer, and removes `.onboarding863` Explore nearby from active Play. Pathing drawer reuses existing `survey06()`, `enter()`, and Map. This is a UI experiment; old Erin context cards may still require subsequent consolidation. No device or browser test has yet verified v0.8.80; preserve accepted v0.8.74 and unchanged save key. Candidate URL `https://uderiel.github.io/Epi-Center/epi-center-v0.8.80-active-feed-layout-repair.html`. Test visible new buttons, absence of Explore nearby, drawer close, typing, Map/Equip, Erin travel rules, and no regressions.

### 2026-10-26 v0.8.79 live-feed-first UI layout prototype — awaiting owner/device test

Created immutable `epi-center-v0.8.79-live-feed-layout-prototype.html` commit `483ed2a`, extending v0.8.78 without modifying accepted versions or save key. First **layout-only** mobile experiment based on owner's pencil sketch: compact current-location header, reserved location-artwork area (placeholder, not actual artwork), scrollable existing universal feed, sticky adjacent input composer, and same-screen overlay drawers for Location, Form influence snapshot, Character meters, and Quest Journal shortcut. Equipment and full character workflows stay full-screen. Drawers read authoritative game state and should not consume turns. **Not a complete event-pipeline migration**: map-selected travel, apartment navigation, all alerts and form needs still require subsequent scoped work; current Form/Quest drawers are incomplete quick references. The earlier v0.8.78 Eve standalone welcome panel is suppressed in this candidate in favor of its logged feed entry. **No automated browser tests or Android acceptance performed**; test layout, drawer toggles, draft preservation, Play/Map/Equip transitions, Eve replay and scroll behavior. Owner-accepted baseline still v0.8.74. URL: `https://uderiel.github.io/Epi-Center/epi-center-v0.8.79-live-feed-layout-prototype.html`.

### 2026-10-26 v0.8.78 Eve replay repair — candidate, awaiting Android test

Owner reported **FAIL** on v0.8.77: clicking Replay Eve introduction in Central Hub showed nothing. Root cause suspected: replay only cleared `s.eve875.introduced` and depended on `ready()` requiring `s.profileComplete`; also introduction was not shown prominently. New immutable `epi-center-v0.8.78-eve-replay-fix.html` commit `976c124` replaces replay button action with direct history entry and visible dismissible Eve welcome panel, independent of profile-complete state, while requiring active DEV toggle and hub location. Keeps prior save key and existing character state. **Not yet browser/owner tested; v0.8.74 remains last accepted gameplay baseline.** Test: activate DEV, replay at hub, visible panel, close, replay again, reload, deactivate and confirm prior introduction state restored. Candidate URL `https://uderiel.github.io/Epi-Center/epi-center-v0.8.78-eve-replay-fix.html`.

### 2026-10-26 v0.8.77 Eve arrival DEV toggle — candidate, not yet tested

Immutable `epi-center-v0.8.77-eve-dev-arrival-toggle.html` commit `993cd96`, based on v0.8.76. Adds expandable **DEV · Eve new-arrival test** panel to active player UI, with Activate/Deactivate and Replay welcome buttons. Activation saves prior `s.eve875.introduced` to `s.eveDev877.originalIntroduced`, marks a temporary new-arrival test state, and clears only Eve's introduced flag; deactivation restores the previous flag. Replay requires Central Hub and active toggle. Character, quests, inventory, discoveries and save key remain untouched by this patch. **Owner/device and automated browser tests not yet performed.** Test activation, hub replay, reload, deactivation restoration and no regression. Accepted baseline still v0.8.74. URL: `https://uderiel.github.io/Epi-Center/epi-center-v0.8.77-eve-dev-arrival-toggle.html`.

### v0.8.76 Eve candidate — owner acceptance PENDING (2026-10-26)

Candidate `epi-center-v0.8.76-eve-introduction.html`, commit `b45f8d9`. **None of these tests are marked PASS.**

- [ ] Create a disposable new profile, complete setup, enter Play in Central Hub; Eve's blue-hologram welcome appears automatically and explains the text input.
- [ ] Reload; welcome is not duplicated. Existing profile, inventory and save remain intact.
- [ ] In NPCs at hub, ask why a volunteer would have amnesia; verify cheerful evasion/red flicker text. Ask about Countess; verify stronger red glitch, no VR disclosure.
- [ ] From a non-hub location, type “Eve, help” into the action field; receive A.S.S. response without a remote hologram. Check Guide tab layout.
- [ ] Insult Eve; confirm polite nonretaliation, then verify normal world input, travel, equipment and mobile layout still work.

**Regression gate:** Existing accepted v0.8.74 compass and saves must remain unchanged; no new quests, eastern map nodes or full AI dialogue are claimed.

### 2026-10-26 Eve six-question owner decisions — design approval only

World Bible commit `e843d22`; Hub implementation plan commit `4743a28`. Owner confirms cheerful corporate/gullible Eve; brief automatic new-player introduction including text-input tutorial and permission to explore; flexible evasions and red glitch/stutter on consent contradiction or Countess, with increased cylinder-dependent but programming-restricted recognition; unique player-ID tracking and **current form/name identity only**, even if another form controls speech; remote help anywhere but **visible hologram confined to Spire outer ring**; no personal offense, damage, retaliation or traceable projection sources. She does not reveal VR/external reality or proactively warn about threats. **No gameplay code or tests changed; v0.8.74 remains accepted.** Next development gate: inspect actual onboarding/Guide/actor and save code before building focused versioned Eve patch. Add regression cases for transformed identity, remote help vs hologram, hostility and one-time spawn greeting.

### Central Hub canon-to-code acceptance backlog — 2026-10-26

**Status: NOT RUN / NOT IMPLEMENTED.** Documentation specification: [Central Hub Canon and Implementation Plan](EPI-CENTER-HUB-CANON-AND-IMPLEMENTATION-PLAN.md), commit `de503eb`. Do not mark PASS until tested in a specific new version. Preserve v0.8.74 owner-accepted compass baseline.

- [ ] **Map:** North Cherished Touch, northeast Residential Walkway/Applewood, southwest Neko Café at SW corner of West Road, east road -> Burke's Sweets (south) -> rear alley, no overworld Access Tunnel A South shortcut; no undiscovered intermediate travel.
- [ ] **Eve spawn/Guide:** Auto-greet once for a new character, not on every reload; normalizes amnesia and voluntary entry; accurately reflects implemented Guide features, not drafts.
- [ ] **Eve restrictions:** “Where am I?” -> Epi-Center Overworld; geographic/voluntary-amnesia contradictions -> red glitch; Countess -> stronger glitch; no VR, external real world, danger warnings or unsolicited Countess exposition; hologram bound to Spire outer ring.
- [ ] **Hub interactions:** Natural-language search variations reveal one-time panties object; inspect, pickup, inventory, optional equip; persist claim state, prevent farming, retain unsent RP draft.
- [ ] **Form:** Each different player receives a new roll, same player's state survives reload; hips-first simultaneous upward/downward spread; original appearance retained; simple mastery and private-residence tutorial only after owner defines exact rules.
- [ ] **Elizabeth/FETCH:** Roaming Elizabeth with silent Pet, missing-toy clue; FETCH remains unavailable until eastern alley/dungeon mechanics exist. Alley search variants reveal garbage, black shimmer, panels, hidden entrance only when route discovered.
- [ ] **Regression:** Existing v0.8.74 map, save key, onboarding, inventory, equipment, forms, quest rewards, residence restrictions and mobile layout remain intact.

### 2026-10-26 If the Panties Fit design clarification — no gameplay change

World Bible commit `3ced553` records: generated form **rerolls for each different player** who equips the garment (retain individual player's result across save/reload); transformation **starts at hips and spreads upward and downward simultaneously toward hair and toes**, unlike Erin's red heels' feet-upward sequence; panties are **retrievable only once** per player/quest instance (no repeated search farming). Exact transfer and repeat-equip semantics are unresolved. **Rough draft only, not implemented or tested**. Continue preserving accepted v0.8.74 and existing save key.

### 2026-10-26 owner Discord quest canon — Central Hub

World Bible commit `5c2baaf` establishes both Central Hub quests. **FETCH** (Safe; explicitly **Unavailable**) is Elizabeth's forgotten latex-dungeon item, original reward **500 gold + new form + buffs/debuffs**, tags BDSM/submissive/dominant. **If the Panties Fit** (Safe; **design draft**, not playable) rewards a temporary form; tags race change/twinning. Free-text hub searching reveals an inspectable bikini-cut garment, then optional pickup/inventory/equip; first wear may trigger an easy-to-master, randomly varied female race/appearance contrasting with the original character; residence tasks extend tutorial. Use existing equipment/form and original-appearance preservation patterns, semantic search intents, and branching state; no forced equip or rigid linear scripting. Exact transformations, checks, residence tasks and full quest execution remain unspecified and untested. Do not mark these as implemented. Next scoped development should audit existing hub free-text, item and form interfaces before any gameplay patch; preserve Eve onboarding scope and save compatibility.

### 2026-10-26 owner rough-draft checkpoint — Elizabeth/Pet/eastern alley

World Bible commit `7ea99c7` captures Elizabeth's appearance, abrasive roaming behavior, east residence, silent leashed adult Pet in canine-masked latex suit, casual missing-toy clue, Burke's Sweets east-then-south geography, garbage alley and shimmering black slime behind wooden panels, investigation-driven latex dungeon discovery, and dominance/submission-themed goth latex form possibilities (male/female/futanari). **Design rough draft only; no gameplay implementation or player test pass.** Do not force a linear quest or invent mechanics; later design must accommodate natural-language investigation, player choices and human/AI NPC facilitation. Preserve accepted v0.8.74, saves, and cardinal routing. Await owner's other quest details before expanding quest registry.

### 2026-10-26 approved Eve onboarding canon — pending implementation

Owner-approved World Bible addition in commit `dcac568`: Eve automatically greets each new Central Hub spawn; treats amnesia as normal and believes all entrants volunteered; she does not recognize VR or any external real world even after Spire unlock. She insists Epi-Center experiences are real. Answers general location as “Epi-Center Overworld,” but glitches on requests for geographic coordinates and on the voluntary-amnesia contradiction. Restored Hub Cylinders gradually allow her to recognize Countess suppression of her support systems, while programming restrictions prevent explicit disclosure. Preserve moral neutrality and nonintentional deception. **This is canon approval, not gameplay implementation or a test pass.** Next gate: source audit, focused versioned Eve spawn/Guide/dialogue patch, save/reload regression, owner acceptance (maximum five tests). World Bible: `docs/EPI-CENTER-WORLD-BIBLE.md`.

### 2026-10-26 owner canon refinement: Eve and Neko Café

World Bible revised in commit `607a362`. Neko Café is first western approach location **southwest of the Spire, on the southwest corner of the western road**, not due west. Eve is a fixed Central Hub spawn greeter and A.S.S. Guide-tab hologram: friendly factual explanations synchronized with evolving Guide; no unsolicited Countess/risk/danger discussion; blue generic female projection with shifting, unidentifiable features; brief red glitch when challenged about disturbing implications, stronger red glitch when Countess is raised; morally neutral, values order, dislikes Countess-induced chaos; can project to multiple players but never beyond the Spire outer ring. **Owner-approved canon, not yet gameplay implemented/tested.** Next scoped development: inspect Guide and spawn implementation, add Eve dialogue and bounded hologram behavior in a new immutable versioned build, then request up to five owner acceptance tests. Two Central Hub quests remain undescribed and must not be fabricated.

### 2026-10-26 owner-approved canon checkpoint — Central Hub NPC and western route planning

Created [living world bible](EPI-CENTER-WORLD-BIBLE.md), commit `58fd76a`. Owner confirms Eve is a **fixed, always-present Central Hub NPC** (extended portrayal rough draft); Dominatrix Elizabeth **roams the Central Hub with her collared, leashed, gimp-suited companion**; Neko Café is the **first location west of the Hub outer ring**, corresponding to Cherished Touch north; and **two Central Hub quests** exist but names, mechanics and rewards are not yet specified. Do not invent missing quest/NPC details. The provisional West Market Walk should not be mistaken for established Neko Café canon. Next step: obtain the two quest descriptions and flesh out Eve/Elizabeth before implementing a new versioned gameplay patch. No gameplay change or test acceptance is implied by this documentation-only checkpoint. On each future owner-approved update, synchronize Bible, changelog, handoff, status and checklist.

### 2026-10-26 acceptance and next-section checkpoint

Owner confirms **v0.8.74 spatial compass correction PASS** on Android. The prior v0.8.73 map acceptance was 4 PASS / 1 FAIL; the targeted compass failure is now accepted as fixed in `epi-center-v0.8.74-spatial-compass-fix.html` (source commit `0235ee49d23bb1685d03ed1c1f6b0a522c5dab90`). The four previously passing route tests remain historically recorded; no separate new automated suite is claimed. Mark surface-map section owner accepted, with broader regression still available as needed.

**Next active section:** Central Hub NPC inventory and interactions, then northward location expansion. Preserve Eve and existing Central Hub systems; use canonical named NPCs where supported by source/lore, and distinguish ambient scenes from interactable NPCs. Known ambient cues: a dominatrix with a leashed companion passing the northern hub and dishes breaking at the neko café to the west. Exact additional named NPC roster remains unconfirmed; do not invent canonical names or biographies. Audit source before a gameplay patch. Keep `epicenter_foundation_v060` save compatibility and immutable accepted builds.

**Conversation continuity:** user requests advance warning at least ten replies before conversation capacity is reached, if measurable. Chat remaining-message capacity is not exposed to the assistant; do not claim a precise countdown. Maintain GitHub handoff/checklist continuously and proactively suggest starting a fresh chat when the conversation becomes unwieldy.

### 2026-10-26 owner test report and focused repair (latest)

Owner-tested **v0.8.73 on Android**, with screenshot evidence: 1 PASS north survey/Cherished Touch discovery; 2 FAIL compass spatial readability (north/south/east/west displayed in misleading cells); 3 PASS Cherished Touch travel without undiscovered-node skips; 4 PASS northeast Residential Walkway toward Applewood; 5 PASS Access Tunnel A South excluded from surface. **Result: 4 PASS, 1 FAIL.** The five original v0.8.73 test results are preserved, not overwritten.

**Fix candidate v0.8.74** `epi-center-v0.8.74-spatial-compass-fix.html`, commit `0235ee49d23bb1685d03ed1c1f6b0a522c5dab90`: adjust only compass markup to a real 3×3 spatial grid (north above center, south below, west left, east right, northeast upper-right), add mobile text wrapping, and retain original discovery/travel logic and save key. Code-level patch anchors validated before commit; no browser/Android regression suite has been executed or claimed.

**Focused retest (pending owner acceptance):** [ ] Open v0.8.74 Map on Android; confirm the Spire is centered, N above, S below, W left, E right, NE upper-right, with labels legible and no sideways clipping. [ ] Confirm the four previously passing v0.8.73 route/discovery behaviors remain intact (can report together if unchanged). If failures occur, record screenshot and version; do not mark v0.8.74 accepted until owner confirms.

## Active progression checklist — 2026-10-26 (later than the historical v0.8.67 checklist below)

Latest candidate: `epi-center-v0.8.73-cardinal-routing.html` (`main` commit `37eedb0`). A committed candidate is not an accepted test pass. Maximum five owner acceptance tests per patch.

### Accepted checkpoints
- [x] v0.8.67 13 automated suites, 616 overlapping assertions, **for v0.8.67 only**; owner/device tests remain pending.
- [x] v0.8.68 owner accepted heels visibility, Equipment refresh and reload persistence; DEV appearance test excluded.
- [x] v0.8.69 owner accepted 5/5 Feet collapsed summary, expand/collapse, equip/remove, and unsent draft preservation.

### Section 1 — Surface routing / v0.8.73 (ACTIVE; not yet accepted)
- [ ] From Central Hub, Survey north reveals Cherished Touch as the first northern destination.
- [ ] Map clearly distinguishes north, south, east, west relative to central Spire.
- [ ] Travel to Cherished Touch succeeds without skipping undiscovered intermediate nodes; test return route.
- [ ] Residential Walkway branches northeast toward Applewood Apartments while retaining apartment/residence restrictions.
- [ ] Access Tunnel A South is Underworld, not mislabeled as a surface destination; no unintended surface shortcut.

### Section 2 — DEV transformation and identity (PENDING)
- [ ] DEV physical transformation 23/23 populates current body appearance fields, persists through reload, and does not overwrite original identity archive. DEV synchronization code is not accepted merely because present.

### Section 3 — Erin dialogue and travel/feed regression (PENDING)
- [ ] Explicit reading refusal receives appropriate acknowledgment, not unintended action.
- [ ] Reading questions and job discussion route correctly without implicit authorization.
- [ ] Arrival narration ordering and stale pending journeys are correct.
- [ ] Duplicate live-feed messages do not occur on normal actions/reloads.

### Section 4 — Cherished Touch/Charity quest (DESIGN / IMPLEMENTATION REVIEW PENDING)
- [ ] Inspect storefront and canonical quest registry; verify actual source behaviors before marking implemented.
- [ ] Relationship and 100% trust gating; six in-game hours of temporary mask work; weekday/weekend differences.
- [ ] Mask must be returned/unequipped, cannot permanently entrap; dynamic non-linear quest outcomes.
- [ ] First restored Hub Cylinder triggers physical Countess appearance; subsequent cylinders escalate danger; trusted curtain invitations require at least one, preferably two.

### Section 5 — Deferred manual/compatibility verification
- [ ] Physical Android Chrome layout, keyboard, touch, scrolling, 19 appearance regions, Equipment and Journal.
- [ ] v0.8.67 influence-band/delegation/withdrawal, bed sleep, cursed footwear and older-save owner acceptance.
- [ ] Historical undiscovered-route and residence owner-skipped cases, broader real-save backups.
- [ ] Independently verify main commit, GitHub Pages deployment, root/versioned bytes, and documentation availability.

### Custody and defect protocol
Keep versioned source files and earlier evidence immutable; do not reset `epicenter_foundation_v060`. For each failed test record: build filename, commit SHA, device/browser, save fixture (without private player data), steps, expected vs actual, fix commit, automated regression, owner retest, and deployment status. Close only after owner-confirmed acceptance where required. Update all four primary docs every two accepted patches; record interim checkpoints as necessary. Do not count source presence, emulation, or a commit as a live/physical-device pass.

Date: 2026-10-25. Release: **v0.8.67**. Source: [versioned build](../epi-center-v0.8.67-reusable-autonomy-foundation.html); default entry: [index.html](../index.html). Both are byte-identical, SHA-256 `EFAD3BFB70ACFE629C4E53AF71129C8867D4B8D4807717D61ECDE6D910BE7B0B`.

Publication is authorized conditional on the required automated checks. This release record covers local verification and promotion; verify the GitHub commit and live Pages deployment independently after push. No force push, historical deletion, or real browser-save reset is authorized.

## Final automated evidence

All thirteen required suites ran against the final unchanged build. Each expected count and every pass flag is checked by the reproducible runner.

| Suite | Final result |
| --- | --- |
| dialogue-driver.ps1 | 60/60 |
| dialogue-persistence-driver.ps1 | 9/9 |
| autonomy-driver.ps1 | 61/61 |
| test-driver.ps1 | 249/249 |
| legacy-driver.ps1 | 52/52 |
| legacy866-driver.ps1 | 52/52 |
| persistence-driver.ps1 | 12/12 |
| bed-sleep-driver.ps1 | 17/17 |
| regression-driver.ps1 | 14/14 |
| pending-driver.ps1 | 38/38 |
| cursed-footwear-driver.ps1 | 22/22 |
| footwear-matrix-driver.ps1 | 21/21 |
| footwear-migration-driver.ps1 | 9/9 |

616 passing assertions across overlapping suites; not 616 independent gameplay scenarios. No required suite was skipped. Supplemental footwear now passes 38/38, superseding the historical 37/38 diagnostic.

Disposable Chrome profiles; 390×844 main suites and 360×640 supplemental coverage. Startup, inline JavaScript compilation, the 19 appearance regions, original archives, all jewelry/belt lifecycles, inventory identity, discovery/residence restrictions, exactly-once quests, all influence bands, trust/stress, intent interpretation, authorization/withdrawal, deterministic actions, sleep, reloads and v0.8.65/v0.8.66 imports are covered. Tests also verify original cursed removal failure/success and legacy overlap repair.

The wrapper initially mishandled array-format legacy JSON. The underlying 52 checks passed; the wrapper was corrected and the entire packaged runner rerun before publication. No game-source change was needed.

[Test sources/results archive](releases/v0.8.67-verification.zip) includes a run-all.ps1 runner, source scripts and named JSON reports. Extract outside the repository and run `powershell.exe -NoProfile -ExecutionPolicy Bypass -File ./run-all.ps1 -RepoRoot <checkout>`. Requires Windows PowerShell and Chrome at its normal Program Files path. Profiles/results are written only to a new temporary output directory. DEV confirmations are accepted only inside the disposable supplemental fixture. Fixtures and forced-roll tests do not alter actual saves or production rules.

## Manual/device checks still pending

- [ ] Physical Android Chrome: touch controls, software keyboard, scrolling, 19-region form and equipment/journal layout.
- [ ] Owner v0.8.67 acceptance: thoughts versus authority at 0/25/50/75/100, polite and hostile requests, negation, explanation, delegation and withdrawal.
- [ ] Bed sleep and resume on a disposable physical-device save.
- [ ] Cursed/ordinary footwear conflicts, removal-roll outcomes, storage/reload, and legacy inventory-return policy on owner-reviewed fixtures.
- [ ] Broader historical/real-save backups beyond tested v0.8.65/v0.8.66 fixtures.
- [ ] Retain the historically skipped route/residence manual checks as manual-pending despite current successful automation.

Physical Android Chrome and owner manual acceptance of v0.8.67 remain pending. Emulation is not hardware testing. Workplace/commute, automatic meals and multi-step grooming, external autonomous travel, independent Erin-T, unrestricted language understanding, external/async AI, and offline/wall-clock simulation remain unavailable. No attendance penalties or fake resource consumption are implemented.

Post-push release verification must independently establish commit visibility, successful main-based Pages deployment, live root/versioned bytes, and documentation availability. A local pass or commit alone is not a live deployment pass.

Historical v0.8.65 and earlier provenance remains in the versioned snapshots; previous automated failures are diagnostic history, not current failures.
