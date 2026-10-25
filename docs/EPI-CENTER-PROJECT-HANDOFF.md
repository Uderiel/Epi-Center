# EPI-CENTER — PROJECT HANDOFF

Updated: 2026-10-25 · v0.8.65 documentation checkpoint and repository preparation.

## Build authority and release state

- **Approved current main release:** [epi-center-v0.8.65-red-heels-acquisition-fix.html](../epi-center-v0.8.65-red-heels-acquisition-fix.html).
- **Root entry:** [index.html](../index.html), a byte-for-byte copy of approved v0.8.65, including the red-heels acquisition correction. SHA-256 for both: `F26C1B4CDCF44CDA0A9F8600A26F0C9D102519A198D44249EFF1320941B19A26`.
- The four immutable versioned v0.8.63/v0.8.64/v0.8.65 files remain available at the repository root; all earlier builds are retained. The old `app.js` remains historical and is not loaded by the current entry.
- The owner explicitly authorized committing and pushing the approved release and these documents to `origin/main`. Public Pages deployment must be verified independently after push; a repository commit alone is not evidence that the site is live.
- No force push, history rewrite, deletion of historical files, or reset of real player saves is authorized or required.

## Accepted scope

**v0.8.63 — Onboarding Repairs:** accepted for the tested scope. Restored onboarding, attributes, current Play/Map scouting, Residential Walkway discovery and timing, starter quest acceptance/tunnel action completion, exactly-once rewards, connected discovered-route travel, and save persistence. This is not acceptance of every older subsystem.

**v0.8.64 — Character Appearance Alignment and Field Cleanup:** accepted through manual testing. Creation follows all 19 Character Appearance regions; original archive authority, missing-detail editing, compatibility, transformation separation, and regional grooming overlays were verified. Cleanup supplies separate Hands/Fingers guidance, clearer Chest and Back & Shoulders descriptions, and exactly Height/Weight/Build inputs with individual hints. Current Appearance may combine the three measurements. Recorded text is not parsed, removed, or rewritten by that cleanup.

## Acceptance and verification evidence

Do not combine these overlapping suites or substitute automated checks for player acceptance.

| Evidence | Actual outcome |
| --- | --- |
| Player manual combined v0.8.63/v0.8.64 acceptance | **15 passed, 0 failed, 2 not tested** |
| Player manual cases not exercised | Undiscovered-route blocking (fog hid undiscovered destinations); residence restrictions |
| Separate player v0.8.64 appearance acceptance | **5 passed, 0 failed** |
| Previously reported Codex v0.8.63 final browser suite | **25/25 passed**, including disposable save/reload; initial 22-check run was superseded |
| Previously reported Codex v0.8.64 alignment suite | **25/25 passed**, including actual 390×844 emulation |
| Previously reported Codex v0.8.64 cleanup suite | **29/29 passed**, actual 390×844 emulation, no uncaught errors/overflow |
| New accepted-v0.8.64 courtyard diagnostic | **3/7 passed, 4 failed**, zero uncaught errors: pickup UI, typed pickup, and catalog-state agreement failed |
| v0.8.65 red-heels automated browser suite | **19/19 passed**, zero uncaught errors, actual reloads and fresh/debug/legacy fixtures at 390×844 |
| Historical pre-promotion root/local HTTP suite | **11/11 passed**, then-v0.8.64 root/versioned compatibility at 390×844 |
| v0.8.65 publication preflight | **14/14 passed**, actual HTTP root, normal pickup, inline-script compilation, same-origin root/versioned reload and legacy-save fallback at 390×844 |

Existing-save debug-owned heels were **manually observed as already collected** at Old Transit Courtyard. Fresh-player pickup passed automation; it has not received a separate physical-device manual test. This observation is separate from the historical aggregate counts below/above and does not turn the two skipped checks into passes.

**Physical Android Chrome testing remains pending.** Emulation is not hardware verification. The two player-skipped cases remain manually untested even though prior automated suites exercised those behaviors.

See [red-heels verification](EPI-CENTER-v0.8.65-RED-HEELS-VERIFICATION.md), [current status](EPI-CENTER-CURRENT-STATUS.md), and [live checklist](EPI-CENTER-TEST-CHECKLIST.md).

## Persistence and appearance architecture

The final active save destination remains `epicenter_foundation_v060`. Initial prototype loading still uses `epicenter_proto_v0523` and legacy fallbacks; neither key path was changed. Saves are browser/origin-local, not cloud accounts. Actual HTTP root/versioned navigation reused the same foundation save without loss of tested identity, attributes, inventory, discoveries, location, rewards, or anatomy.

`ANATOMY65` defines the 19 appearance regions; `APPEARANCE_FIELDS864` preserves keys, aliases (`footSize`, `voice`, `genitalAnatomy`), labels, hints, and order. Original descriptions are authoritative in `s.original06.profile`; `s.profile` is a compatibility representation. `reconcileOriginal864()` fills missing archived values from compatible legacy data and retains conflicting alternatives in `s.originalAppearance864.conflicts`; explicit choices and invalid-required-value corrections retain history. Optional omissions do not revoke `profileComplete`. Never infer genital anatomy from gender or use Erin artwork as original-player data.

Transformation (`s.heels063.anatomy65`, `s.dev68.bellaRegions/history/tail`, active form) and temporary grooming/makeup/fragrance/equipment remain separate from original appearance. Transformation mechanics and outcomes were not redesigned by v0.8.63/v0.8.64.

## Red heels: approved correction and verification

In the historical v0.8.64 build, normal scouting reaches Old Transit Courtyard, but the old `showLocation()` pickup UI was orphaned by Play. Current World text also lacked pickup resolution. Debug restoration correctly set legacy ownership and quantity, but `items850().objects['shoes-0']` still showed the closet, independently of the cursed pair.

The approved v0.8.65 release reconnects Play pickup and typed pickup to `takeHeels63()`, links only signature `shoes-0` to existing ownership/equipment, hides the courtyard pair once owned, clamps the unique legacy marker to one, and persists physical location. Catalog wear/removal now use the existing cursed handlers. This is not the larger inventory/equipment refactor.

Legacy linkage is conservative: legacy-owned/worn state controls the first linkage; a legacy-owned pair is carried unless worn. A catalog-only carried/equipped pair retains ownership but is carried without activating the curse on load. Previous representation is retained in `s.redHeels865.previous`; source is tracked as courtyard/debug/legacy. This can move an ambiguous old closet/equipped representation into carried inventory, without granting transformation, influence, or mastery. After linkage, legitimate put-away storage persists. The owner approved publication of this correction. Existing-save debug-owned heels were manually observed as already collected at Old Transit Courtyard. Fresh-player normal pickup is automated-verification coverage, not yet a separate physical-device manual pass.

## Repository and hosting preparation

`index.html` is the sole root playable entry, byte-identical to approved v0.8.65. Both use inline game code/styles and bundled default artwork, so root startup no longer depends on the legacy `app.js`. Optional user-supplied artwork URLs remain optional and were not verified remotely.

No repository `.github` Pages workflow or `_config.yml` was found. The local remote points to `Uderiel/Epi-Center`, branch configuration names `main`; neither proves the external GitHub Pages source settings. Hosting settings were not changed during the documentation checkpoint. Check deployment source and live release after the authorized push, without assuming success from local files. A temporary loopback HTTP server tested the project-style `/Epi-Center/` root and versioned paths, then was stopped.

## Next work and preserved limits

1. Retain the 19/19 automated heels result and the manually observed debug-owned existing-save result; separately test fresh-player acquisition on a physical device.
2. Publish the authorized v0.8.65 release to main using only the intended files, then independently verify GitHub Pages and all playable URLs.
3. Physically test Android Chrome; retain the two manually skipped cases as pending.
4. Keep larger inventory unification/time refactoring separate. Broader footwear, legacy laundry, notification, and physiology gaps are not closed by this signature-item correction.
5. At 100% influence Erin must actually execute routines, with persuasion and boundaries; current announcements are not full autonomy. Office/commute remain absent and no missed-work penalties apply.
6. Historical descriptors already destroyed before these builds cannot be reconstructed automatically. Preserve raw legacy data/conflicts rather than inventing originals.
7. Maintain checkpoint snapshots and truthful test provenance. This checkpoint is v0.8.65; no unrelated checklist section was implemented.

## Preserved design agreements

The following design/reference material is retained from the earlier handoff. It is design intent, not proof that all described features exist. Illustrative Jeremiah play state is historical, not a current save or Patrick's state. The eight equipment regions below are distinct from the 19 anatomical Appearance regions.

## World and overarching game

A.S.S. = Automated Service Systems, the interface. Players awaken amnesiac via immersion pods in the Epi-Center hub, introduced by AI Eve. The sealed Spire requires recovered **Hub Cylinders** to unlock logout. The Countess opposes that effort. Locations include Central Hub, Access Tunnels, Underworld Hub and Lilith's marketplace, Friendly Farms Approach, subterranean R&D labs, and Infinitum Warehouse PVP. Factions include Resistance, Countess-aligned guild and Thieves Guild. The second world layer is the ruined Squirrel City Overworld, involving NU Corp and the Collector. Power production depends on active players in Epi-Center; pod upkeep costs gold. Revival uses saved neural scans and resources, with physical gear remaining where abandoned. Infected players can be rescued or remain corrupted. Forms can attempt mental takeover; health, mental resilience, arousal and proposed stamina interact with survival and turn-based mission combat. Forms have rarity, XP, mastery, and location-specific risks. AI NPCs initially support the world, later supplemented by human operators; major story choices remain human-directed.

## Immediate development strategy

**Fully flesh out Erin as a reusable humanoid form and life simulation template before creating independent Erin-T.** Remaining priorities include: robust Equip tab; private rooms, household and item persistence; workplace, boss, coworkers and schedule; phone; daily routines; relationship/trust dialogue tiers; testing under low and high influence; willing mastery, resistance, rejection of an annoying player, and realistic time frames. Mastery is not affection or obedience. Erin-T will be a separate autonomous NPC with her own state, not a form or shared consciousness, and will later test animal, inanimate, flying and aquatic forms. Inanimate transformation must unfold through stages and preserve physical object identity.

## Erin / Jeremiah body and relationship

Player Jeremiah Miller has undergone 23 transformation stages to physically become Erin, a 23-year-old executive secretary. Erin is a **separate conscious person sharing one body**; Jeremiah presently controls it. Both sense the body's physical experience. Current illustrative playtest state around Day 2 afternoon: influence ~38/100, trust ~57/100, low stress, mental resilience fluctuates. Influence 100 can allow autonomous Erin control; cooperation and boundaries must still matter. Trust tiers: guarded 0–24, warm 25–49, gently playful 50–74, spontaneous 75–89, deeply familiar 90–100. Erin is thoughtful, tidy, professional, subtly funny, conflict-averse, bookish; likes lakes and cabins but not tents, foxes, handmade keepsakes, floral scents, cozy neutral socks, favorite red heels; misses her deceased golden retriever. She prefers coffee mornings, tea evenings, dry full-bodied red wine, cream puffs and mint chocolate chip ice cream. Cooks for health rather than as a hobby.

Apartment: Applewood Apartments, North Quadrant, Unit 3C. Living room with sofa, reading chair, 80–120 novels, keepsakes, plants, TV. Kitchen with food stock, groceries, preparation, eating and dishes. Hallway with plants, art, entry nook and utility closet with washer/dryer. Home routines, feed notifications and local persistence exist in varying stages of completeness; test them.

## Private rooms — agreed design

**Bedroom:** warm, peaceful; oatmeal/beige upholstered headboard, a few pillows, light blanket at foot for reading. Six-drawer dresser, top to bottom: (1) hair ties/clips/brush/hand mirror; (2) lotions and night creams; (3) bras in matching order, cups nested front-to-back; (4) panties in same matching order; (5) socks, pantyhose and tights; (6) sleepwear. Dresser top has mirror, **two individually selectable lotions**, **three individually selectable perfumes**, lace runner. Ironing board and bedroom hamper. Sleepwear: two lightweight pajama sets, two heavy sets, oversized sleep shirt, understated nightgown. Every asset should be selectable, with nested interactions; e.g. select lotion → Use → Apply standing / Apply on bed. Dresser top displayed first, drawers below.

**Closet:** one physical closet with professional, casual, footwear and accessories **sections**, not separate wardrobes. No duplicated hosiery/sleepwear listings; those are in dresser drawers. Workwear includes modest tailored blouses, knee-length skirts, jackets/cardigans and occasional formal dresses. Casual includes sweaters, leggings, fitted tops, jeans, T-shirts and brown leather jacket. Exactly eight distinct shoe pairs: signature red work heels; matte black closed-toe heels; gloss cream closed-toe heels; red suede closed-toe heels; black flats; sneakers; brown leather winter boots; brown ankle boots with two-inch wedge heels. No peep toes. She prefers black sheer or semi-sheer pantyhose with skirts, nude-toned hosiery when matching demands, professional tights in cold weather; professional appearance outweighs slight discomfort from cold.

**Bathroom:** working sink and mirror with natural polished makeup routine (moisturizer, primer, foundation, blush, eyeshadow, lash curling, mascara, lipstick, setting spray); sink cabinet with skincare, hair tools, toiletries; medicine cabinet with medicine, menstrual supplies and heating pad; functional toilet and toilet paper; shower/bathtub combo, bath pillow, floral bath oil/salts, bubble bath, candle, towels. Prefers baths when relaxed, showers when rushed. Items should be actual selectable objects, not merely descriptions. Keep previously working bath and makeup actions.

## Item, equipment, and laundry contract

Each physical garment is a unique persistent object with **identity, condition, and exactly one location** (dresser drawer, closet section, equipped slot, carried inventory, hamper, washer/dryer, etc.). Multiple equipped objects can share a body region and must have **independent** Wear/Unequip actions. Eight appearance regions: Head (hat, jewelry, makeup); Neck (necklace/collar); Torso (bra, blouse, jacket/corset); Arms (bracelets); Hands (gloves/rings); Hips (panties); Legs (skirt, stockings/tights); Feet (socks, shoes, anklets). Existing red heels form and Bella German Shepherd skinsuit must remain usable. Unequipping outerwear must not remove underlayers.

Clothing conditions **clean / worn / dirty** are independent of location. Brief try-on → worn, not necessarily dirty. Unequip → carried inventory; re-equip from inventory, put away preserving worn/dirty marker, or deposit at bedroom hamper when present. Hamper → washer → completed wash/dry → remains in machine until collected → inventory → put away. Nothing teleports or duplicates. Individual garments must appear in matching bra/panty order. Distinguish **new physical-object inventory** from older prototype/legacy inventory; avoid dual contradictory laundry panels. Erin-T will eventually use the exact same system.

## Menstrual cycle contract

Persistent approximately 28-day cycle, slight natural variation desired, periods typically 4–5 days. Mild manageable symptoms; bloating most noticeable, occasional cramps and fatigue; no stereotyped mood or punitive autonomy. Pads/tampons, heating pad, modest OTC pain relief, bath, clothing choices and hygiene interactions. Cycle advances with in-game time/time skips, independent of room visits. Jeremiah senses bodily symptoms when sharing Erin's body, but not automatically when transformed into a worn inanimate object. Private status preferred over constant feed interruptions.
