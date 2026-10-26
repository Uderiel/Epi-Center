# EPI-CENTER — Development Changelog

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
