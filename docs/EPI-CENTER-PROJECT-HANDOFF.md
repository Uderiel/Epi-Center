# EPI-CENTER — Project Handoff

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
