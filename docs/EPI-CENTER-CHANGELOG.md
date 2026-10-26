# EPI-CENTER — Development Changelog

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

### 2026-10-26 v0.8.76 Eve introductory candidate — NOT OWNER ACCEPTED

Created immutable `epi-center-v0.8.75-eve-introduction.html` (commit `b4ec764`), then corrected a Guide HTML insertion in new immutable `epi-center-v0.8.76-eve-introduction.html` (commit `b45f8d9`). **Test candidate v0.8.76**: automatically writes Eve's introduction to Play history once a named/profile-complete character is at hub, provides Guide-aligned help and canned responses to memory/consent/geographic/Countess/hostility prompts, and routes direct “Eve” calls through A.S.S. outside the hub without projecting a hologram. Reuses existing Play history, foundation save key, Guide and UI. **No automated browser test or Android owner acceptance has been performed.** This is a limited rule-based first pass, not autonomous AI or full cylinder progression. v0.8.74 remains last owner-accepted build. Candidate URL: `https://uderiel.github.io/Epi-Center/epi-center-v0.8.76-eve-introduction.html`.

### 2026-10-26 Eve six-question owner decisions — design approval only

World Bible commit `e843d22`; Hub implementation plan commit `4743a28`. Owner confirms cheerful corporate/gullible Eve; brief automatic new-player introduction including text-input tutorial and permission to explore; flexible evasions and red glitch/stutter on consent contradiction or Countess, with increased cylinder-dependent but programming-restricted recognition; unique player-ID tracking and **current form/name identity only**, even if another form controls speech; remote help anywhere but **visible hologram confined to Spire outer ring**; no personal offense, damage, retaliation or traceable projection sources. She does not reveal VR/external reality or proactively warn about threats. **No gameplay code or tests changed; v0.8.74 remains accepted.** Next development gate: inspect actual onboarding/Guide/actor and save code before building focused versioned Eve patch. Add regression cases for transformed identity, remote help vs hologram, hostility and one-time spawn greeting.

### 2026-10-26 documentation-only consolidated Hub checkpoint

**No gameplay code or playable-map changes.** Added [Central Hub Canon and Implementation Plan](EPI-CENTER-HUB-CANON-AND-IMPLEMENTATION-PLAN.md), commit `de503eb`; cross-linked from [World Bible](EPI-CENTER-WORLD-BIBLE.md), commit `e7568fe`. Captures Eve's automatic volunteer/amnesia greeting, neutral Guide-based and restricted reality dialogue, blue/red shifting hologram and cylinder suppression arc; Elizabeth/Pet's appearance and roaming behavior; FETCH original Discord text/rewards and unavailable status; If the Panties Fit's original text, one-time item discovery, per-player reroll, hip-to-hair/toes transformation and residence tutorial; natural-language investigation architecture; cardinal geography including southwest Neko Café, north Cherished Touch, northeast Residential Walkway, eastern Burke's Sweets and alley, and Underworld-only Access Tunnel A South. All new quest/map/NPC behavior remains **unimplemented and untested**. Preserve accepted v0.8.74.

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

## 2026-10-26 continuity checkpoint — v0.8.68 through v0.8.73 (post-v0.8.67)

This entry records repository commit history and the owner's Saturday Review decisions. Earlier release entries below remain historical evidence; do not retroactively mark later patches as accepted.

- **v0.8.68** `epi-center-v0.8.68-equipment-feed-test.html`: owner accepted heels visible in Equipment, equip/remove refresh, and reload persistence. DEV anatomy synchronization is present but **not accepted**.
- **v0.8.69** `epi-center-v0.8.69-feet-collapse-fix.html`: owner confirmed 5/5 manual tests: Feet initially collapsed, summary shows heel status, expand/collapse works, equip/remove works, unfinished roleplay draft survives equipment actions. Recorded in `EPI-CENTER-ACCEPTED-PATCH-CHECKPOINT-v0.8.69.md`.
- **v0.8.70** `epi-center-v0.8.70-erin-dialogue-routing.html`: commit `62fd4b6` repairs Erin reading questions, refusal acknowledgments, and job discussion routing. Commit is not equivalent to player acceptance.
- **v0.8.71** `epi-center-v0.8.71-cherished-touch-foundation.html`: commit `425bd03` adds Cherished Touch public storefront and canonical quest registry.
- **v0.8.72** `epi-center-v0.8.72-cherished-touch-discovery.html`: commit `7bb977c` connects Cherished Touch to Central Hub survey and travel graph.
- **v0.8.73** `epi-center-v0.8.73-cardinal-routing.html`: commit `37eedb0` adds cardinal directions, Spire-centered surface routes, and northern-first discovery. This is the latest observed main commit at this checkpoint, not a claim of browser or physical-device acceptance.

Saturday Review world agreements: Spire at Central Hub center; Cherished Touch immediately north as first northern discovery; Residential Walkway northeast toward Applewood Apartments; Access Tunnel A South belongs to the Underworld rather than the surface map; make north/south/east/west discernible. West Market Walk was not established server canon and remains provisional. Preserve existing geography and progression; expand locations section by section.

Cherished Touch / Charity design (planned unless separately tested): Charity is a mid-thirties woman with orangish-red wavy hair, hazel eyes, a warm smile, approximately 5'6\" and 122 lb, often in casual jeans and T-shirts. Assist Charity is a relationship-gated, 100%-trust quest: the player temporarily wears a Charity-face mask and operates the store for six in-game hours; weekday coverage lets Charity rest, weekend coverage lets her explore/socialize. The mask must be returned/unequipped and Charity prevents permanent entrapment. Quest outcomes should remain dynamic, not rigidly linear. The first restored Hub Cylinder brings the Countess physically into play; further cylinders escalate her appearances/danger. Trusted curtain invitations require at least one, preferably two, cylinders. These are design constraints, not verified implemented features.

**Custody:** no save-key migration, deletion of versioned builds, force-push, or rewriting of earlier test results. The historical v0.8.67 616 overlapping automated assertions remain valid for that exact build only; do not attribute them to v0.8.73. Next gate: focused v0.8.73 navigation and route acceptance (maximum five owner tests), followed by DEV transformation 23/23, Erin dialogue, arrival narration/stale journeys, and duplicate live-feed verification as separate sections. Record failures, exact reproduction, source SHA/commit, fix, retest, and owner acceptance before closing a checklist item.

Updated: 2026-10-25. Current release: [v0.8.67](../epi-center-v0.8.67-reusable-autonomy-foundation.html), promoted byte-for-byte to [index.html](../index.html). Historical versioned files and snapshots remain preserved. Publication is authorized after final verification; live deployment is checked separately.

## v0.8.67 — Reusable autonomy, dialogue, sleep and cursed footwear

- Reusable actor engine, capability/location/time prerequisites, schedules, priorities/weights, verified state effects, cooldowns, persistent commitments and bounded memory/journal.
- Intentions at every influence band; configurable physical authority and separate trust/stress/cooperation. Requests and agreement do not automatically execute; explicit authorization and withdrawal are rechecked. Existing resistance mechanics retained.
- Flexible bounded local interpretation and safe future-AI semantic proposal interface. No external model connected.
- Real eight-hour bed sleep, waking, incomplete-cycle resume, and existing clock effects.
- shoes-0 remains the unique cursed transformation source, visible under Feet. Shared slot checks prevent all normal/cursed double equip. Legacy overlaps preserve the worn cursed pair and return conflicting ordinary items to inventory with an audit entry.
- All thirteen requested final suites passed (616 overlapping assertions), including supplemental 38/38; root entry preflight additionally 14/14. Earlier partial runs and the repaired historical footwear failure are not current unresolved failures. Physical Android/manual acceptance remain pending.
- Unchanged save keys and baseline gameplay; additive save namespaces only. Preserved v0.8.66 as immutable source and an exact pre-promotion index backup.
- Added reproducible source/results archive, release record, implementation reports and v0.8.67 snapshots. No v0.8.68 work.

## v0.8.66 — Jewelry storage, equipment fields and build display — accepted and published

- Corrected closet/carried/equipped accessory presentation and lifecycle without deleting ambiguous old ownership.
- Jewelry populates Head/Neck/Hands/Arms fields; belt remains under Hips. All five jewelry items and belt were tested.
- Current build/session display uses the authoritative build value. Retained unique physical-object records, archives, save keys and transformation.
- Owner reported testing passed and authorized publication. Published commit: 12af73d96cb7bb508dbf4f30f60d4cdbfc19cd64. Live main/versioned bytes were verified and Pages succeeded; this historical release is the rollback baseline.

## Historical v0.8.65 and earlier checkpoint records

The following entries retain their original dates, source/status descriptions, and test provenance. They do not identify the current main release.
## v0.8.65 — Documentation checkpoint, red-heels verification, root preparation

- Updated handoff, changelog, current status, and checklist; created versioned v0.8.65 snapshots and a dedicated heels evidence report. Preserved earlier versioned builds and historical documentation.
- Inspected root `index.html`: it was a v0.4 page loading `app.js?v=4`. Initially prepared that root from v0.8.64; the subsequent authorized release promotion replaces it with the full byte-identical v0.8.65 file. Retained `app.js`; it is not loaded by the prepared root.
- No local GitHub Pages workflow/configuration was found. External hosting settings and live deployment were not verified or changed. Bundled default artwork and inline game code load without the old companion script. Optional custom URLs were not remotely verified.
- **Historical defect in v0.8.64 (before root promotion):** scouting reaches Old Transit Courtyard, but legacy pickup controls are orphaned by Play; typed pickup does not acquire the item. Debug-owned heels retain a contradictory catalog closet location.
- **Separate gameplay correction candidate:** restores normal/typed courtyard acquisition and links the signature `shoes-0` object to legacy ownership and cursed-equipment handlers. Duplicate pickup is prevented; stored location persists. First-linkage reconciliation records prior representation and does not activate a curse from catalog-only worn data. No general inventory/time refactor was performed.
- **New browser evidence:** accepted diagnostic 3/7 passed, 4 failed; separate candidate 19/19 passed; actual root/local HTTP 11/11 passed, including root/versioned same-origin saves and a representative old `epicenter_proto_v1` save loading into the unchanged foundation key. Chrome emulation 390×844; no uncaught errors in completed suites.
- **Approved promotion:** after the checkpoint, the owner authorized the v0.8.65 correction for publication. Root index.html now exactly copies the unchanged v0.8.65 versioned file; real saves are not reset. Previous v0.8.63/v0.8.64 files are preserved.
- **Additional manual evidence:** previously debug-acquired heels were observed as already collected at the courtyard in an existing save. Fresh-player normal pickup remains automated-only, without a separate physical-device manual test. Physical Android Chrome testing remains pending.
- See [verification and hashes](EPI-CENTER-v0.8.65-RED-HEELS-VERIFICATION.md).

## v0.8.64 — Character Appearance Alignment and Field Cleanup — accepted

- Creation follows all 19 Character Appearance regions, their existing labels/order/profile aliases and descriptive model. Name, age, starting gender and unchanged attribute allocation remain basic setup.
- Original archive is authoritative; compatible missing legacy fields are retained, conflicts/corrections preserved for explicit review, optional descriptions do not force established players through onboarding, and Add Missing Original Details is available.
- Current transformation and temporary grooming are separate from original appearance. Hair/care/makeup/fragrance/lotion presentation uses region markers rather than literal Erin wording.
- Follow-up field cleanup preserves Hands and Fingers independently, improves Hands/Fingers/Chest/Back & Shoulders hints, and guarantees exactly Height/Weight/Build inputs with individual labels/hints and no combined input. Repeated combined guidance was removed without rewriting recorded text. Current Appearance continues combining measurements.
- **Player manual appearance acceptance:** all five tests passed. Overall v0.8.63/v0.8.64 combined manual results are separately 15 passed, 0 failed, 2 untested; do not merge or sum these sets.
- **Previously reported automated browser suites:** alignment 25/25; cleanup 29/29; actual 390×844 emulation, disposable saves/reloads, no uncaught errors/overflow. Physical Android Chrome remains pending.

## v0.8.63 — Onboarding Repairs — accepted for tested scope

- Restored new/incomplete appearance setup and retained expanded Attributes controls/drafts while allocating/refunding points; no attribute rebalance.
- Restored accessible Play/Map Survey controls using existing consequences; integrated Residential Walkway discovery while preserving connected travel timing and apartment restrictions.
- Reconnected starter quest acceptance, tunnel-entry/action requirements and exactly-once rewards; preserved browser-save persistence.
- Blocked player travel through undiscovered intermediate locations, including restored pending decisions.
- **Player combined manual acceptance with v0.8.64:** 15 passed, 0 failed, 2 not tested. Untested: undiscovered-route blocking (fog hid those targets) and residence restrictions (not exercised).
- **Previously reported final automated suite:** 25/25 passed, including reload, route/residence cases and preserved data. This does not convert the player-skipped cases into manual passes.

## v0.8.62 — Apartment Corrections and read-only Phase 1 baseline

- Earlier apartment correction candidate preceded onboarding repairs. The read-only investigation documented separate item stores, override chains, differing time paths, and narration/state inconsistencies.
- Local Phase 1 baseline, override-map and regression-specification notes are investigation artifacts, not implemented refactoring or passing tests. These earlier untracked notes are outside this release manifest.
- The larger authoritative-object/equipment/time plan remains separate from these scoped corrections.

## v0.8.55–v0.8.61 historical record

See [v0.8.61 changelog snapshot](EPI-CENTER-CHANGELOG-v0.8.61.md) for bathroom/grooming iterations, earlier confirmations, and then-open issues. Its version/status claims are historical, not the current accepted-build designation.

## Earlier recorded development history

The following historical entries retain their original test provenance; they are not current release acceptance claims.

## v0.8.51 — Equipment, Bathroom & Cycle (experimental)
- Added eight appearance/equipment regions, with per-item controls intended to coexist with cursed red heels and Bella skinsuit.
- Added interactable bathroom areas including sink, cabinets, toilet, bath/shower, toiletries, hair tools, menstrual supplies and heating pad.
- Added private menstrual-cycle tracking based on in-game days (currently fixed 28-day cycle, five-day period; variable physiological simulation pending).
- Attempted to unify new physical garments with the hamper/washer lifecycle and retain condition when stored.
- **Unverified:** full cross-screen inventory consistency, older-save migration, browser interaction, and cycle/time-skip correctness.

## v0.8.50 — Layered Belongings
- Introduced selectable dresser top/drawers and individual lotion, perfume, underwear and clothing objects.
- Added item actions including Wear, Carry, Unequip, and Put Away; closet sections differentiated.
- **Confirmed by user:** floral perfume application, beige bra equip, unequip as worn, deposit in hamper, and persistence across navigation/save; bra no longer present in drawer after moving it.
- **Reported defect:** new hamper showed beige bra while legacy laundry panel showed empty; Equip tab omitted ordinary clothing.

## v0.8.49 — Private Rooms & Laundry Foundation
- Refined bedroom, closet and bathroom descriptions; added bath/makeup interactions and provisional laundry flow with two worn test garments.
- **Confirmed by user:** bath and makeup actions worked.
- **Reported gaps:** private-room objects were mainly descriptive; bathroom lacked accessible sink/medicine cabinets, toilet, toilet paper and hair tools. Contradictory laundry panels.

## v0.8.48 — Home Groceries & Live Activity
- Added grocery delivery/put-away workflow and live activity/feed improvements; provisional private rooms were introduced.
- Design correction: private rooms must reflect user-approved layout and individually retrievable objects.

## v0.8.47 and earlier — Iterative home and roleplay systems
- Hallway and companion context, living room, kitchen/dining, feed, movement, dialogue and household mechanics were developed iteratively. Earlier builds include v0.8.40–v0.8.47 and foundational prototype systems.
- Refer to the corresponding HTML source for precise implementation history; this is not a complete retroactive line-by-line changelog.


## Remaining work

The correction is approved and promoted to the root for the authorized release. Verify the pushed commit and actual Pages deployment. Separately test fresh pickup on a physical device, Android Chrome and the two skipped manual cases. Full autonomy, workplace/commute, general object/time unification, broader laundry/footwear and physiology/notification work remain separate. Current priorities and truthful status live in [CURRENT-STATUS](EPI-CENTER-CURRENT-STATUS.md) and [TEST-CHECKLIST](EPI-CENTER-TEST-CHECKLIST.md).
