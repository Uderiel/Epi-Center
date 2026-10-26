# EPI-CENTER — Project Handoff

### 2026-10-26 v0.8.79 live-feed-first UI layout prototype — awaiting owner/device test

Created immutable `epi-center-v0.8.79-live-feed-layout-prototype.html` commit `483ed2a`, extending v0.8.78 without modifying accepted versions or save key. First **layout-only** mobile experiment based on owner's pencil sketch: compact current-location header, reserved location-artwork area (placeholder, not actual artwork), scrollable existing universal feed, sticky adjacent input composer, and same-screen overlay drawers for Location, Form influence snapshot, Character meters, and Quest Journal shortcut. Equipment and full character workflows stay full-screen. Drawers read authoritative game state and should not consume turns. **Not a complete event-pipeline migration**: map-selected travel, apartment navigation, all alerts and form needs still require subsequent scoped work; current Form/Quest drawers are incomplete quick references. The earlier v0.8.78 Eve standalone welcome panel is suppressed in this candidate in favor of its logged feed entry. **No automated browser tests or Android acceptance performed**; test layout, drawer toggles, draft preservation, Play/Map/Equip transitions, Eve replay and scroll behavior. Owner-accepted baseline still v0.8.74. URL: `https://uderiel.github.io/Epi-Center/epi-center-v0.8.79-live-feed-layout-prototype.html`.

### 2026-10-26 v0.8.78 Eve replay repair — candidate, awaiting Android test

Owner reported **FAIL** on v0.8.77: clicking Replay Eve introduction in Central Hub showed nothing. Root cause suspected: replay only cleared `s.eve875.introduced` and depended on `ready()` requiring `s.profileComplete`; also introduction was not shown prominently. New immutable `epi-center-v0.8.78-eve-replay-fix.html` commit `976c124` replaces replay button action with direct history entry and visible dismissible Eve welcome panel, independent of profile-complete state, while requiring active DEV toggle and hub location. Keeps prior save key and existing character state. **Not yet browser/owner tested; v0.8.74 remains last accepted gameplay baseline.** Test: activate DEV, replay at hub, visible panel, close, replay again, reload, deactivate and confirm prior introduction state restored. Candidate URL `https://uderiel.github.io/Epi-Center/epi-center-v0.8.78-eve-replay-fix.html`.

### 2026-10-26 v0.8.77 Eve arrival DEV toggle — candidate, not yet tested

Immutable `epi-center-v0.8.77-eve-dev-arrival-toggle.html` commit `993cd96`, based on v0.8.76. Adds expandable **DEV · Eve new-arrival test** panel to active player UI, with Activate/Deactivate and Replay welcome buttons. Activation saves prior `s.eve875.introduced` to `s.eveDev877.originalIntroduced`, marks a temporary new-arrival test state, and clears only Eve's introduced flag; deactivation restores the previous flag. Replay requires Central Hub and active toggle. Character, quests, inventory, discoveries and save key remain untouched by this patch. **Owner/device and automated browser tests not yet performed.** Test activation, hub replay, reload, deactivation restoration and no regression. Accepted baseline still v0.8.74. URL: `https://uderiel.github.io/Epi-Center/epi-center-v0.8.77-eve-dev-arrival-toggle.html`.

### v0.8.76 candidate handoff — 2026-10-26

Candidate file `epi-center-v0.8.76-eve-introduction.html` at `https://uderiel.github.io/Epi-Center/epi-center-v0.8.76-eve-introduction.html`, commit `b45f8d9`. It appends a narrowly scoped Eve module to v0.8.74, wrapping `submitPlay69`, `guide812`, and `render`, persisting `s.eve875.introduced` in the unchanged foundation save. Prior candidate v0.8.75 commit `b4ec764` is superseded due to a Guide insertion fix. **No automated/browser/device verification performed; owner acceptance pending.** Test new character greeting, Guide, NPC conversation, remote Eve help, Countess glitch, reload and existing systems. Potential issue: introduction is triggered only when `s.name && s.profileComplete && s.location==='hub'`; audit onboarding flow if new-player timing differs. Continue from this source only if tests pass; otherwise fix proactively in a new immutable version. Preserve v0.8.74 accepted baseline.

### 2026-10-26 Eve six-question owner decisions — design approval only

World Bible commit `e843d22`; Hub implementation plan commit `4743a28`. Owner confirms cheerful corporate/gullible Eve; brief automatic new-player introduction including text-input tutorial and permission to explore; flexible evasions and red glitch/stutter on consent contradiction or Countess, with increased cylinder-dependent but programming-restricted recognition; unique player-ID tracking and **current form/name identity only**, even if another form controls speech; remote help anywhere but **visible hologram confined to Spire outer ring**; no personal offense, damage, retaliation or traceable projection sources. She does not reveal VR/external reality or proactively warn about threats. **No gameplay code or tests changed; v0.8.74 remains accepted.** Next development gate: inspect actual onboarding/Guide/actor and save code before building focused versioned Eve patch. Add regression cases for transformed identity, remote help vs hologram, hostility and one-time spawn greeting.

### Immediate handoff — 2026-10-26 (documentation checkpoint)

**Do not restart, redesign accepted systems or overwrite existing versioned HTML.** Playable baseline: `https://uderiel.github.io/Epi-Center/epi-center-v0.8.74-spatial-compass-fix.html`; accepted cardinal fix remains intact. Read [Central Hub Canon and Implementation Plan](EPI-CENTER-HUB-CANON-AND-IMPLEMENTATION-PLAN.md) (commit `de503eb`) and [World Bible](EPI-CENTER-WORLD-BIBLE.md) (commit `e7568fe`) **before coding**. Both are owner-grounded canon and pending implementation boundaries. Key geography: Spire center, Cherished Touch north, Neko Café southwest at southwest corner of western road, Residential Walkway northeast toward Applewood Apartments, Burke's Sweets south of first East Road node, hidden alley behind it reached after unlocking eastern route; Access Tunnel A South Underworld only. Key NPCs: Eve fixed spawn greeter with constrained reality/Countess dialogue and Guide integration; Elizabeth roaming with silent leashed Pet. Quests: FETCH Safe/Unavailable, 500 gold + form + buffs/debuffs; If the Panties Fit Safe/draft, one-time search/pickup/equip, per-player random female form, hips-outward transformation, residence tasks. **No new gameplay commit or tests in this checkpoint.** Audit actual source before patching; preserve `epicenter_foundation_v060` saves and original appearance. Implement a single scoped feature in a new immutable HTML file; verify, solicit owner acceptance, then update all five core docs plus this plan.

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

## Active handoff — 2026-10-26 (read before historical v0.8.67 handoff below)

Repository: https://github.com/Uderiel/Epi-Center ; latest observed `main` commit `37eedb0be62b4687a8c016d3e0c60a05f3c53a43`. Latest versioned playable candidate: https://uderiel.github.io/Epi-Center/epi-center-v0.8.73-cardinal-routing.html . Root entry: https://uderiel.github.io/Epi-Center/ (root/versioned byte equivalence and live deployment still require independent verification). The older v0.8.67 handoff below is retained verbatim as historical baseline, not the current version declaration.

### Chain of custody / accepted evidence
- v0.8.67: 13 required automated suites, 616 overlapping assertions; no claim these suites passed later versions. Android and owner manual acceptance pending.
- v0.8.68: owner accepted Equipment heel visibility, equip/remove refresh, persistence. DEV 23/23 appearance synchronization not accepted.
- v0.8.69: owner confirmed 5/5 Feet-collapse/status/equip/draft tests. See `EPI-CENTER-ACCEPTED-PATCH-CHECKPOINT-v0.8.69.md`.
- v0.8.70 commit `62fd4b6`: Erin reading/refusal/job dialogue routing repair; manual verification pending.
- v0.8.71 commit `425bd03`: Cherished Touch storefront and quest registry; acceptance pending.
- v0.8.72 commit `7bb977c`: Central Hub survey/travel linkage; acceptance pending.
- v0.8.73 commit `37eedb0`: cardinal routing and northern-first discovery; acceptance pending.

### Saturday Review world and quest decisions
Central Hub Spire is the center. Cherished Touch is immediately north and first northern discovery. Residential Walkway branches northeast toward Applewood Apartments; Access Tunnel A South is Underworld, not surface. Cardinal N/S/E/W orientation must be readable. West Market Walk is provisional, not confirmed original server lore. Preserve existing routes and systems rather than redesigning them. Expand location-by-location after route acceptance.

Charity: woman in her mid-thirties, orangish-red wavy hair, hazel eyes, charming smile/smile lines, approximately 5'6\", 122 lb, nurturing/matronly, usually jeans/T-shirts. Proposed Assist Charity quest requires positive relationship and 100% trust; a temporary Charity-face mask gives matching appearance/voice while the player runs Cherished Touch for six in-game hours. Weekday coverage permits rest, weekend coverage social exploration; mask must be unequipped/returned and cannot become a permanent trap. Preserve dynamic player-driven quests. First Hub Cylinder physically introduces the Countess; later cylinders raise threat. Trusted curtain invitations require at least one, preferably two, recovered cylinders. Do not claim these proposals are implemented until verified in source and gameplay.

### Next developer instructions
1. Work **one checklist section at a time**, beginning with v0.8.73 surface map and travel acceptance (up to five owner tests).
2. On failure, reproduce against the precise version and save fixture, isolate root cause, issue a new versioned patch, test regression/save/reload, request owner acceptance, and document the result. Never overwrite prior accepted builds or reset real saves.
3. After map section, separately verify DEV 23/23 current appearance vs original baseline, Erin refusal, travel arrival/stale journeys, duplicate feed, and device checks.
4. For each release, record source filename, commit SHA, relevant file blob SHA, test evidence, owner result, and deployment evidence. Update primary handoff/status/changelog/checklist every two accepted patches and at major handoffs. Keep historical evidence intact.

Date: 2026-10-25. Release: **v0.8.67**. Source: [versioned build](../epi-center-v0.8.67-reusable-autonomy-foundation.html); default entry: [index.html](../index.html). Both are byte-identical, SHA-256 `EFAD3BFB70ACFE629C4E53AF71129C8867D4B8D4807717D61ECDE6D910BE7B0B`.

Publication is authorized conditional on the required automated checks. This release record covers local verification and promotion; verify the GitHub commit and live Pages deployment independently after push. No force push, historical deletion, or real browser-save reset is authorized.

## Current architecture

The v0.8.67 build extends accepted v0.8.66. Autonomy867 separates actor definitions, eligibility/priority/weighted decisions, physical adapters, atomic verified effects, persistent commitments, cooldowns, history and memory. Erin is the first live form-consciousness adapter; the independent aquatic sample exists only in tests.

Private form intentions and dialogue exist at all five influence bands. Physical capability and authority are separate. The 25/50/75 reference thresholds, cooperation modifiers, and 30-minute delegation/pause settings are configurable. Shared-band significant actions require explicit delegation; strong/maximum authority may carry out eligible ordinary routines. Mastery retains player control without silencing thoughts. No new resistance dice/DCs were added.

Dialogue distinguishes supported questions, requests, negations, suggestions and explanations. Acknowledgment/agreement does not execute an action. Authorization is explicit and revalidated; withdrawal prevents stale delegation. The future provider seam accepts validated semantic proposals, not arbitrary state effects or code. There is no external AI/network dependency.

All existing clocks retain their gameplay behavior; the scheduler observes final game-time advancement through advance818, actionMinute836, tick817 and dialogue's corrected final clock. It does not add a timer or offline catch-up. Bed sleep advances eight shared-clock hours with wake/resume state and existing exposure/recovery.

Cursed shoes-0 retain their unique identity, transformation trigger, existing removal behavior and ownership key. Cursed and ordinary footwear share the exclusive physical slot. Conflicts reject new equipment; impossible legacy overlaps return ordinary pairs to inventory with a recorded correction and retain worn cursed heels. Equipment shows the cursed pair once under Feet.

## Persistence and compatibility

Active save key: epicenter_foundation_v060; existing prototype fallbacks are unchanged. Additive namespaces: autonomy867, dialogue867, sleep867, footwear867. Original s.original06.profile archives remain distinct from current transformation/grooming. Existing item objects are reused; no inventory duplicate is introduced. v0.8.65/v0.8.66 fixture imports and real reloads passed.

[Release record](EPI-CENTER-RELEASE-v0.8.67.md), [current status](EPI-CENTER-CURRENT-STATUS.md), [test checklist](EPI-CENTER-TEST-CHECKLIST.md), [implementation](EPI-CENTER-v0.8.67-COMPLETION-AND-VERIFICATION.md), [footwear cause/repair](EPI-CENTER-v0.8.67-CURSED-FOOTWEAR-REPAIR.md).

## Evidence and acceptance

All thirteen requested final automated suites passed, 616 overlapping assertions; no unavailable suite counted as passed. Root-entry/save preflight additionally passed 14/14. See the release archive for validated machine-readable evidence. Physical Android and owner manual acceptance remain pending; publication is conditionally authorized by the owner on successful automated checks. Prior v0.8.66 manual acceptance and publication are preserved in the changelog. Prior v0.8.63/v0.8.64 manual results remain 15 passes, 0 failures, 2 untested, plus five separate appearance passes.

## Rollback and boundaries

[Exact v0.8.66 entry backup](../backups/index-v0.8.66-before-v0.8.67.html) retains SHA-256 D79D8FAA21DF7C9042C345C557AE8491EEB2759071BDB26A4C2194C8AEF5E889. Keep the immutable versioned builds. A code rollback does not restore a player's browser save; do not reset or downgrade their only save.

Known boundaries: workplace/commute, automatic meals/grooming, independent Erin-T, external autonomous travel, full natural-language/async AI, offline simulation and broader physiology remain unavailable. Reference policy coefficients and physical-device behavior await review. No v0.8.68 work is included.

## Historical design and lore

The complete existing world, Erin identity/personality, apartment, physical-item, laundry, and menstrual-cycle design agreements are retained in the immutable [v0.8.65 handoff snapshot](EPI-CENTER-PROJECT-HANDOFF-v0.8.65.md#preserved-design-agreements). Its illustrative player state and then-current implementation limitations are historical. Do not invent replacement lore or treat proposed systems as completed features.
