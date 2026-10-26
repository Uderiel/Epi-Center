# EPI-CENTER — Current Development Status

### 2026-10-26 owner canon refinement: Eve and Neko Café

World Bible revised in commit `607a362`. Neko Café is first western approach location **southwest of the Spire, on the southwest corner of the western road**, not due west. Eve is a fixed Central Hub spawn greeter and A.S.S. Guide-tab hologram: friendly factual explanations synchronized with evolving Guide; no unsolicited Countess/risk/danger discussion; blue generic female projection with shifting, unidentifiable features; brief red glitch when challenged about disturbing implications, stronger red glitch when Countess is raised; morally neutral, values order, dislikes Countess-induced chaos; can project to multiple players but never beyond the Spire outer ring. **Owner-approved canon, not yet gameplay implemented/tested.** Next scoped development: inspect Guide and spawn implementation, add Eve dialogue and bounded hologram behavior in a new immutable versioned build, then request up to five owner acceptance tests. Two Central Hub quests remain undescribed and must not be fabricated.

### 2026-10-26 owner-approved canon checkpoint — Central Hub NPC and western route planning

Created [living world bible](EPI-CENTER-WORLD-BIBLE.md), commit `58fd76a`. Owner confirms Eve is a **fixed, always-present Central Hub NPC** (extended portrayal rough draft); Dominatrix Elizabeth **roams the Central Hub with her collared, leashed, gimp-suited companion**; Neko Café is the **first location west of the Hub outer ring**, corresponding to Cherished Touch north; and **two Central Hub quests** exist but names, mechanics and rewards are not yet specified. Do not invent missing quest/NPC details. The provisional West Market Walk should not be mistaken for established Neko Café canon. Next step: obtain the two quest descriptions and flesh out Eve/Elizabeth before implementing a new versioned gameplay patch. No gameplay change or test acceptance is implied by this documentation-only checkpoint. On each future owner-approved update, synchronize Bible, changelog, handoff, status and checklist.

### 2026-10-26 acceptance and next-section checkpoint

Owner confirms **v0.8.74 spatial compass correction PASS** on Android. The prior v0.8.73 map acceptance was 4 PASS / 1 FAIL; the targeted compass failure is now accepted as fixed in `epi-center-v0.8.74-spatial-compass-fix.html` (source commit `0235ee49d23bb1685d03ed1c1f6b0a522c5dab90`). The four previously passing route tests remain historically recorded; no separate new automated suite is claimed. Mark surface-map section owner accepted, with broader regression still available as needed.

**Next active section:** Central Hub NPC inventory and interactions, then northward location expansion. Preserve Eve and existing Central Hub systems; use canonical named NPCs where supported by source/lore, and distinguish ambient scenes from interactable NPCs. Known ambient cues: a dominatrix with a leashed companion passing the northern hub and dishes breaking at the neko café to the west. Exact additional named NPC roster remains unconfirmed; do not invent canonical names or biographies. Audit source before a gameplay patch. Keep `epicenter_foundation_v060` save compatibility and immutable accepted builds.

**Conversation continuity:** user requests advance warning at least ten replies before conversation capacity is reached, if measurable. Chat remaining-message capacity is not exposed to the assistant; do not claim a precise countdown. Maintain GitHub handoff/checklist continuously and proactively suggest starting a fresh chat when the conversation becomes unwieldy.

## Current continuity status — 2026-10-26 (supersedes the historical v0.8.67 header below)

**Latest observed source:** `epi-center-v0.8.73-cardinal-routing.html` on `main`, commit `37eedb0be62b4687a8c016d3e0c60a05f3c53a43`. Playable candidate: https://uderiel.github.io/Epi-Center/epi-center-v0.8.73-cardinal-routing.html . The root https://uderiel.github.io/Epi-Center/ is a separate entry and its live byte equivalence to the versioned candidate has not been established at this checkpoint. Source presence does not prove successful deployment or player acceptance.

**Accepted since v0.8.67:** v0.8.68 equipment/heel refresh and reload; v0.8.69 Feet-collapse and draft preservation (owner 5/5). **Implemented in commits but not yet owner-accepted:** v0.8.70 Erin dialogue routing, v0.8.71 Cherished Touch storefront/quest registry, v0.8.72 hub discovery linkage, v0.8.73 cardinal/Spire routing. No new automated test count is claimed for these builds.

**Immediate section:** test v0.8.73 Central Hub survey, Cherished Touch north discovery/travel, clear compass labels, northeast Residential Walkway/Applewood route, and separation of Underworld Access Tunnel A South from surface routing. Fix failures in a new immutable version, preserving passing systems. Keep West Market Walk provisional rather than claiming established server canon.

**Following sections (not accepted):** DEV 23/23 transformation populating current appearance while preserving original identity; Erin explicit reading refusal; travel arrival narration and stale journey cancellation; duplicate live-feed messages; Android physical-device testing; broader v0.8.67 autonomy/footwear owner acceptance. Charity quest, mask safeguards, cylinder-triggered Countess events, and curtain invitation gating are design agreements, not completed mechanics.

**Custody policy:** versioned builds immutable, preserve existing browser saves (`epicenter_foundation_v060`), no force-push, no unapproved redesign, maximum five player tests per patch, documentation every two accepted patches, and distinguish commit/test/owner acceptance/live deployment. Existing v0.8.67 verification applies only to v0.8.67. See current checklist and handoff for precise gates.

Date: 2026-10-25. Release: **v0.8.67**. Source: [versioned build](../epi-center-v0.8.67-reusable-autonomy-foundation.html); default entry: [index.html](../index.html). Both are byte-identical, SHA-256 `EFAD3BFB70ACFE629C4E53AF71129C8867D4B8D4807717D61ECDE6D910BE7B0B`.

Publication is authorized conditional on the required automated checks. This release record covers local verification and promotion; verify the GitHub commit and live Pages deployment independently after push. No force push, historical deletion, or real browser-save reset is authorized.

## Implemented release

- Reusable clock-driven actor engine and separate Erin adapter; plans, verified atomic effects, prerequisites, capability/safety gates, weights/priorities, cooldowns, persistent commitments, bounded history and memory.
- Form intentions and private dialogue at every influence band. Physical authority is separate; limited/shared activity and explicit scoped delegation preserve player control. Trust, stress, tone and reasoning affect cooperation through profile settings; no new resistance DCs.
- Requests can agree/refuse/negotiate/delay/clarify/propose alternatives without automatically executing. Safe provider seam exists; no external AI service is connected.
- Full eight-hour bed sleep, wake, reload/resume; existing time-based effects remain.
- One exclusive footwear slot across ordinary and cursed footwear. Unique shoes-0 remains cursed, a transformation source, visible under Feet and storable after valid removal. Existing invalid overlaps return ordinary pairs to inventory with an explicit record.
- v0.8.66 jewelry/Equipment field repairs, appearance, transformation, inventory, quests, travel and historical builds retained.

## Verification and limitations

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

Physical Android Chrome and owner manual acceptance of v0.8.67 remain pending. Emulation is not hardware testing. Workplace/commute, automatic meals and multi-step grooming, external autonomous travel, independent Erin-T, unrestricted language understanding, external/async AI, and offline/wall-clock simulation remain unavailable. No attendance penalties or fake resource consumption are implemented.

Historical manual evidence is unchanged: v0.8.63/v0.8.64 combined 15 passes, 0 failures, 2 untested; five separate appearance passes; debug-owned heels manually observed collected. v0.8.66 was manually accepted and published at commit 12af73d96cb7bb508dbf4f30f60d4cdbfc19cd64. Automation does not convert prior manual skips into passes.

## Saves and rollback

The key remains epicenter_foundation_v060 with unchanged prototype fallbacks. Additive state is in autonomy867, dialogue867, sleep867 and footwear867. Original identity and transformed appearance remain separate. [Pre-release index backup](../backups/index-v0.8.66-before-v0.8.67.html) and the immutable v0.8.66 build both retain SHA-256 D79D8FAA21DF7C9042C345C557AE8491EEB2759071BDB26A4C2194C8AEF5E889. This is a code rollback backup, not a backup of personal browser saves.
