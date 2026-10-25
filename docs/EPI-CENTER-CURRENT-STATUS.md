# EPI-CENTER — CURRENT DEVELOPMENT STATUS

Updated: 2026-10-25 · approved v0.8.65 release and publication preparation.

## Current main playable release

- Approved source: [v0.8.65 Red Heels Acquisition Fix](../epi-center-v0.8.65-red-heels-acquisition-fix.html).
- Root: [index.html](../index.html), byte-for-byte identical to v0.8.65. Both SHA-256: `F26C1B4CDCF44CDA0A9F8600A26F0C9D102519A198D44249EFF1320941B19A26`.
- Earlier accepted [v0.8.63 onboarding](../epi-center-v0.8.63-onboarding-repairs.html), [v0.8.64 alignment](../epi-center-v0.8.64-character-appearance-alignment.html), and [v0.8.64 cleanup](../epi-center-v0.8.64-character-creation-field-cleanup.html) remain unchanged and available as versioned builds.
- The owner authorized commit/push to `origin/main`. GitHub Pages configuration and live serving must be checked after push; local promotion does not prove deployment. No force push or deletion of historical builds.

## Manual acceptance — distinct from automated coverage

- Combined v0.8.63/v0.8.64 manual report: **15 passed, 0 failed, 2 not tested**.
- The two untested manual cases remain undiscovered-route blocking (fog hid those destinations) and residence restrictions (not exercised).
- Separate v0.8.64 appearance acceptance: **five passed**.
- v0.8.65 existing-save behavior: the player **manually observed previously debug-acquired heels as already collected at Old Transit Courtyard**.
- Fresh-player normal pickup has automated verification, but **no separate physical-device manual test yet**.
- **Physical Android Chrome testing remains pending.** Do not infer the device used for the existing-save observation.

## Automated browser evidence

| Suite | Result |
| --- | --- |
| v0.8.63 final, previously reported | 25/25 passed |
| v0.8.64 alignment, previously reported | 25/25 passed |
| v0.8.64 cleanup, previously reported | 29/29 passed |
| Historical v0.8.64 courtyard diagnostic | 3 passed / 4 failed out of 7; led to v0.8.65 correction |
| v0.8.65 red-heels suite | 19/19 passed; no uncaught errors; fresh/debug/legacy fixtures and real reloads |
| Pre-promotion root/local HTTP checkpoint | 11/11 passed; then-v0.8.64 root/versioned compatibility and representative legacy fallback |
| Promoted v0.8.65 publication preflight | 14/14 passed; inline JavaScript compilation, root startup/pickup and root/versioned/legacy save compatibility at 390×844 |

Suites overlap and must not be summed as unique acceptance cases. Route/residence automation does not convert skipped manual cases into manual passes. New publication preflight and post-push checks are reported with the release, separately from these historical counts.

## Red-heels implementation

Normal discovery reaches Old Transit Courtyard without DEV. The old v0.8.64 pickup UI was orphaned and catalog location contradicted debug ownership. Current v0.8.65 restores normal/typed pickup and links the unique signature `shoes-0` object with existing ownership/equipment. Acquired or debug-owned heels do not spawn a second courtyard copy. First-linkage history is preserved; catalog-only worn data does not activate a curse on load. See [verification report](EPI-CENTER-v0.8.65-RED-HEELS-VERIFICATION.md).

## Remaining unverified work and known limits

- Separate physical-device fresh-player pickup and broader Android Chrome behavior.
- Two skipped manual acceptance cases above and comprehensive historical-save/device combinations.
- Full autonomous Erin routines at 100% influence; announcements remain insufficient.
- Office/commute remain unavailable; no absence penalties while absent.
- General item/time unification, ordinary footwear slots, legacy laundry, notifications and comprehensive physiology remain separate scopes.
- Historical original descriptions already lost before these builds cannot be reconstructed automatically.

## Compatibility and workflow

Active storage remains `epicenter_foundation_v060`; prototype fallback keys are unchanged. Original appearance, current transformation and temporary grooming remain separate. Keep immutable versioned builds, history and test provenance. Current [handoff](EPI-CENTER-PROJECT-HANDOFF.md), [changelog](EPI-CENTER-CHANGELOG.md) and [checklist](EPI-CENTER-TEST-CHECKLIST.md) identify v0.8.65 as the main release.
