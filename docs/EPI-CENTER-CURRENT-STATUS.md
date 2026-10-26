# EPI-CENTER — Current Development Status

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

### New candidate — v0.8.76 Eve introduction (2026-10-26)

**Owner acceptance PENDING; automated browser tests NOT RUN.** Candidate: `epi-center-v0.8.76-eve-introduction.html` commit `b45f8d9` (v0.8.75 was superseded for a Guide insertion correction). Adds one-time named/profile-complete hub greeting, text-field tutorial, bounded Eve topic responses, remote A.S.S. text help. Current scope is scripted response matching, not dynamic AI. **Last owner-accepted build remains v0.8.74.** Pending verification: new spawn vs migrated saves, UI visibility of intro, actual Guide layout, NPC/World input routing, remote calls, draft preservation, reload, transformations, no regression. World geography and both quests remain documentation drafts, not implemented.

### 2026-10-26 Eve six-question owner decisions — design approval only

World Bible commit `e843d22`; Hub implementation plan commit `4743a28`. Owner confirms cheerful corporate/gullible Eve; brief automatic new-player introduction including text-input tutorial and permission to explore; flexible evasions and red glitch/stutter on consent contradiction or Countess, with increased cylinder-dependent but programming-restricted recognition; unique player-ID tracking and **current form/name identity only**, even if another form controls speech; remote help anywhere but **visible hologram confined to Spire outer ring**; no personal offense, damage, retaliation or traceable projection sources. She does not reveal VR/external reality or proactively warn about threats. **No gameplay code or tests changed; v0.8.74 remains accepted.** Next development gate: inspect actual onboarding/Guide/actor and save code before building focused versioned Eve patch. Add regression cases for transformed identity, remote help vs hologram, hostility and one-time spawn greeting.

### Current checkpoint — 2026-10-26 (documentation only)

**Latest owner-accepted playable HTML:** `epi-center-v0.8.74-spatial-compass-fix.html` (no new gameplay build). **Latest documentation:** [Central Hub Canon and Implementation Plan](EPI-CENTER-HUB-CANON-AND-IMPLEMENTATION-PLAN.md), commit `de503eb`, and [World Bible](EPI-CENTER-WORLD-BIBLE.md) updated in `e7568fe`. **Canon confirmed, gameplay pending:** Eve's automatic onboarding, volunteer/amnesia/VR non-disclosure, Guide sync, glitches, projection radius and cylinder-suppression arc; Elizabeth and Pet's hub patrol and FETCH lead; southwest Neko Café; eastern Burke's Sweets/alley/dungeon; one-time panties search/item/form/residence tutorial. FETCH is **Unavailable**, If the Panties Fit is **draft**. Cardinal plan is a **target**, not evidence that all new map nodes exist. Continue one checklist section at a time, no unverified pass claims. Next implementation candidate: Eve onboarding and Guide dialogue, subject to code audit.

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
