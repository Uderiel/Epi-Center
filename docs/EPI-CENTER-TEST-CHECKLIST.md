# EPI-CENTER — TEST CHECKLIST

Updated: 2026-10-25 · v0.8.65 documentation checkpoint.
Approved current/root build: [v0.8.65 red-heels acquisition fix](../epi-center-v0.8.65-red-heels-acquisition-fix.html) / [index.html](../index.html).
Earlier v0.8.63/v0.8.64 versioned builds remain available and unchanged. Publication to origin/main is explicitly authorized.

## Recorded player acceptance

The aggregate report is **15 passed, 0 failed, 2 not tested** for combined v0.8.63/v0.8.64. Individual pass IDs were not supplied; do not manufacture a 15-row mapping or add automated results to this count.

| Player-reported scope | Status |
| --- | --- |
| v0.8.63 tested onboarding, attributes, scouting, walkway, starter quest/rewards, persistence | Accepted for tested scope |
| v0.8.64 alignment and field cleanup | Accepted |
| Separate v0.8.64 appearance acceptance | 5/5 passed |
| Undiscovered-route blocking | **NOT TESTED manually**; fog correctly hid undiscovered locations |
| Residence restrictions | **NOT TESTED manually**; not exercised |
| Physical Android Chrome coverage | **PENDING**; not independently confirmed by these reports |

Existing-save debug-owned heels were manually observed as already collected at Old Transit Courtyard. This observation is additional to the historical aggregate counts. Fresh-player pickup is automated-verified but awaits a separate physical-device manual test. Physical Android Chrome remains pending.

## Codex automated browser suites — separate evidence

- v0.8.63 final: 25/25 passed (reported previously).
- v0.8.64 alignment: 25/25 passed (reported previously).
- v0.8.64 cleanup: 29/29 passed (reported previously).
- New accepted-v0.8.64 heels diagnostic: **3/7 passed, 4 failed**, no uncaught errors. Reached the courtyard, but acquisition UI/text and catalog synchronization failed.
- New separate heels candidate: **19/19 passed**, no uncaught errors, fresh/debug/legacy fixtures and real reloads at 390×844.
- Historical pre-promotion root/local HTTP checks: **11/11 passed**, using the then-v0.8.64 root.
- Promoted v0.8.65 publication preflight: **14/14 passed**, including JavaScript compilation, normal pickup, actual root loading, save/reload, versioned-path compatibility and representative legacy fallback at 390×844.

These suites overlap. Source checks and syntax compilation are not player or device passes.

## Red heels — approved release verification

| Case | Automated candidate outcome | Player outcome |
| --- | --- | --- |
| Fresh character scouts Hub → West Market Walk → Old Transit Courtyard without DEV | Passed | Pending new heels-specific test |
| One normal courtyard pickup button and typed World pickup | Passed | Pending |
| Same `shoes-0` object transferred; legacy ownership marker exactly one | Passed | Pending |
| Pickup does not wear heels, grant rewards, or advance transformation | Passed | Pending |
| Repeated pickup/revisit/reload does not create a second pair | Passed | Pending |
| Actual DEV restore before first courtyard visit; no later duplicate | Passed | Existing-save debug-owned heels manually observed as already collected; full fresh DEV sequence not separately claimed |
| Existing cursed Equipment and catalog Wear/Remove agree | Passed | Pending |
| Put-away ownership and physical location survive reload | Passed | Pending |
| Legacy-owned and catalog-only representations reconcile without automatic curse activation | Passed | Review migration policy and manually verify |

Full test names and source references: [red-heels verification](EPI-CENTER-v0.8.65-RED-HEELS-VERIFICATION.md).

## Focused manual review still required

Use a disposable browser profile/save; do not overwrite the player's only save.

- [ ] In approved v0.8.65, separately test fresh-player normal pickup on a physical device: scout to the courtyard without DEV, collect and reload. Automation passed; this manual test remains pending.
- [ ] Leave/revisit and attempt repeated pickup; confirm one pair and correct location.
- [ ] In a different disposable save, restore heels through DEV before visiting; verify no second pair at the courtyard.
- [ ] Wear/remove using Equipment and catalog controls; verify the existing removal roll and unchanged anatomy after removal.
- [ ] Put away and reload; confirm stored ownership/location and no courtyard respawn.
- [ ] Review the explicit first-linkage policy for ambiguous older catalog/legacy states.
- [ ] Exercise undiscovered-intermediate route blocking manually using a disposable fixture that makes a known destination's intervening route undiscovered; do not count simply-hidden buttons as this test.
- [ ] Exercise original/transformed residence restrictions manually.
- [ ] Test on physical Android Chrome, including keyboard, scrolling, region expansion and navigation.
- [ ] Publication preflight/post-push record: verify v0.8.65 root startup/save/reload, commit visibility, main-based Pages deployment and live URLs. The owner has explicitly authorized commit/push; do not claim live deployment before verification.

## Existing design gaps remain open

- [ ] Full autonomy: Erin actually moves/grooms/sleeps at high influence; announcements alone do not pass.
- [ ] Workplace/commute and attendance simulation; no penalties while absent.
- [ ] General shared item-state and unified time refactoring (not part of this checkpoint).
- [ ] Broader ordinary footwear slot/laundry behavior and legacy laundry reconciliation.
- [ ] Realistic hygiene consumption/leakage, comprehensive physiology/needs, and notification controls.
- [ ] Comprehensive historical-save/device matrix beyond the explicitly tested fixtures.

Earlier v0.8.61 bathroom-specific confirmations remain historical evidence in the versioned handoff/changelog, not new blanket passes for all listed design gaps.
