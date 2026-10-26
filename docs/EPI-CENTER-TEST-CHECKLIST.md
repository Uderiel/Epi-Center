# EPI-CENTER — Test Checklist

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
