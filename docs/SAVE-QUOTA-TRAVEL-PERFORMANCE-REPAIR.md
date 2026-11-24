# Save quota and tile-travel repair — 2026-11-24

Release reconciliation: implemented work in this record is included in the owner-authorized v1.0.140 release. Earlier local/unpublished labels below describe the diagnostic checkpoint. Current deployment evidence: releases/v1.0.140-release-summary.json. Ordinary collar timing is superseded by PRIYA-CAT-COLLAR-TIMING.md; advanced obedience/kennel work remains deferred.

Implemented and verified locally after published v1.0.139. Not published. No worker changes, owner-save access or paid calls for this repair. Earlier unpublished Priya/cat and travel/stage fixes remain included.

## Cause and repair

The learned-information observer recorded each visited location using two alternating descriptions/sources. Repeated observation treated these equivalent facts as revisions, retaining up to fifty false historical snapshots per location. Map exploration therefore inflated the saved character and the cost of copying/serializing it.

Both paths now record one canonical visit fact. A player-scoped migration collapses only repeated snapshots of the two known equivalent visit facts, retaining evidence sources, occurrence counts and timestamps. Distinct location history, NPC facts/corrections, visited tiles, appearance, forms, inventory and progress remain. Migration runs once per loaded guide object and can clean an older tab's repeated snapshots on a subsequent reload.

`rebuild/save-storage.js` provides the shared synchronous reader/writer for all three slots across Hub, both Title pages, Character Creation and the exported Title slot API. Existing JSON remains readable. Large saves, previously packed saves and smaller saves that hit quota use lossless UTF-16 packing when it reduces size. The envelope includes original length and a checksum. Corrupt packed data fails visibly rather than becoming an empty character. Reads return separate parsed objects; cached decode text never aliases mutable game state. Slot/status validation prevents wrong-slot writes without adding a new schema requirement to previously Hub-readable saves.

Atomic storage failures retain the last durable copy and the newest in-memory character. The Hub pauses automatic travel/live time and shows a blocking recovery dialog with Download current save and Retry saving. Timers cannot reload an older persisted copy over the dirty character. Download is available even under the sleep input guard. Character Creation uses the same recovery and does not navigate away after a failed confirmation write. No other slot, origin data or legacy key is deleted to make space. Backups are plain JSON, independent of the packed storage representation. A download preserves data; a new import workflow is outside this repair.

Packed slots require the updated client everywhere that reads them. The `EPI1LZ|` prefix deliberately fails legacy JSON parsing. A future release must ship the shared asset and every wired reader together. Older already-open pages should be closed after successful save/reload into the updated release; do not use an older build against a packed slot. An unpublished repair does not recover the current live tab: keep a tab with unsaved progress open and do not clear site storage.

## Travel responsiveness

Automatic travel no longer waits for descriptive AI prose. Pending action selection, NPC decisions and animal plans still block movement. Existing stale-result checks, focus/visibility pauses, cross-session ownership checks, 650ms step cadence and 8/12 game-minute travel costs remain. Intermediate planned-route steps keep their exact authored receipts without starting descriptions that would immediately become stale. Optional arrival prose may run when the narrator is free. Manual travel also avoids accumulating redundant narrator requests while that narrator is busy.

## Measured evidence

The same synthetic 120-action, AI-off map exploration in test Chromium produced:

| Metric | Before | After |
| --- | ---: | ---: |
| Final save JSON characters | 927,379 | 252,217 |
| Learned-information characters | 695,174 | 25,730 |
| Average action processing time | 53.18ms | 32.81ms |
| Total serialization time | 2,189.1ms | 826.6ms |

This is about 38% less measured processing time in this run, not a guarantee of phone frame rate or network latency. An existing inflated synthetic save compacted from927,379 to306,729 characters with all101 visited keys retained. Independently, lossless packing reduced the original927,379-character fixture to59,720 stored characters with exact round-trip equality. Character counts are not a universal browser byte quota. Storage remains finite; compression and recovery do not promise unlimited play history.

## Verification

- Full combined local regression: **2,483 cases /176 suites, zero failures**. Earlier published-release evidence remains unchanged.
- **16 actual-browser quota/travel checks** at390×844: near-full origin, legacy migration, quota-triggered packing, preservation of both other slots, packed Hub/Title Continue/reload, forced failure and newest-state backup under sleep guard, retry, delayed descriptive AI, controller blocking/resume, packed creation draft, no page errors or provider attempts.
- **18 appearance-creation browser checks**: actual builder/review/confirmation/reload and existing measurements/restrictions remain compatible.
- **6 continuous-play browser checks**: actual creation/travel, relationship rules, reload/next-day continuation and captured bad-reply correction/fallback remain compatible. AI replies are simulated/replayed; these are not new raw-model accuracy claims.
- Nine focused storage/visit-growth cases are included in the full suite. An additional exported Title API smoke check covers create, packed read, occupied-slot protection and selected-slot removal.
- Four initial regression failures came from isolated VM fixtures not loading the new shared reader and using synthetic non-slot keys. They now load the real module with valid slot keys and retain their original behavioral assertions. Intermediate failure evidence is preserved.
- Shared/inline/module syntax and whitespace checks pass. A reader/writer audit leaves only occupancy/signature checks and unrelated config/lease keys accessing storage directly.

Evidence: `work/save-quota-repair/` contains final/intermediate regressions, browser reports, synthetic backups, baseline/after profiles and scripts. None contains an owner-save fixture. The source audit may update as part of the regression; published139 release manifests are not rewritten.

## Third-party notice

Bundled lz-string npm1.5.0 from the pinned jsDelivr package supplies packing only. Its package MIT license is included in `docs/third-party/lz-string-1.5.0-LICENSE.txt` and in the shipped shared asset. The historical source header's WTFPL notice and algorithm version text are also retained. No CDN dependency is required at runtime.

## Remaining limits

Publication and public phone verification are pending. This fixes the reproduced storage growth, safe quota handling and AI wait in travel; it does not certify every source of device lag or make previously unreliable raw Cydonia narration universally accurate. Earlier obedience-collar/kennel design dependencies and UI-review boundaries remain unchanged.
