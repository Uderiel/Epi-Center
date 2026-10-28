# Epi-Center 1.0 — Test Status

Version: **v1.0.4** (save-slot navigation owner accepted; character creation pending)

| Case | Status | Evidence |
|---|---|---|
| Initial 3 independent slots | Accepted on earlier title milestone | Owner confirmed six title tests |
| New Character → Back immediately shows Continue/Delete | **OWNER PASSED v1.0.4** | Owner confirmed all three save slots working properly |
| Draft survives refresh | Observed | Owner saw Continue/Delete after reload |
| Creation form and final confirmation | Pending | No owner test results yet |
| Eve introduction and hub | Pending | Foundation preview only |

Retest: open published title screen, create a new slot, use in-game Back, inspect that same slot without refreshing. If still stale, capture whether Back is the in-game button or Android system/browser back, plus displayed version number.

## v1.0.5 pending acceptance
- Appearance: 19 canonical regions restored, age/gender required, other regions optional — published, owner retest pending.
- All three title save slots: owner passed in v1.0.4.
- Character creation and Eve hub flow: owner testing not yet complete.

## v1.0.6 — 2026-10-27
Owner reported full appearance spectrum not appearing in v1.0.5. Published explicit optional labels, descriptive anatomical hints, multiline input fields, and cache-busted title-to-creation navigation. Canonical 19 regions and saved keys retained. **Owner retest pending; not accepted.**

## v1.0.6 — Owner acceptance
2026-10-27: Owner reports **PASS on all six character-creation tests** following the v1.0.6 appearance-field correction. Character creation milestone accepted based on owner testing. Earlier three-slot save tests also passed. Further hub/gameplay development remains pending.

## v1.0.7 — UI baseline acceptance pending
- Source: legacy v0.8.84 shell CSS and six tabs copied into standalone hub scaffold.
- Published on main and mirrored to rebuild branch.
- Ready-slot navigation and character confirmation redirected to hub scaffold; **not yet owner-tested**.
- Full legacy gameplay logic intentionally absent; redesign and systems migration to follow owner approval.

## v1.0.8 pending owner test
- Live feed, persistent action draft, sticky composer, five reference drawers and UI layout published.
- User confirmed apparent empty slots arose from testing on a different device, not verified deletion.
- v1.0.7 UI baseline rejected; v1.0.8 corrected baseline **not yet accepted**.
- Action resolver, world persistence and full v0.8.84 gameplay not yet connected.

## v1.0.9 — Owner retest required
- v1.0.8 interface explicitly rejected.
- v1.0.9 updated bottom tabs, removed Encounter, default Play view, top drawers, channel selector and persistent draft/live feed.
- Source published on main and mirrored to rebuild branch; visual and functional owner acceptance **pending**.

## v1.0.10 — pending owner acceptance
- Fixed composer placement, scrollable live feed, Location/NPC/Player/Form controls.
- Published to main and rebuild branch. Android screen appearance not verified; no accepted UI baseline yet.

## v1.0.11 — awaiting Android owner review
- Diagram-driven Play structure, fixed composer, recipient input, drawers and attribute ownership code committed on main and mirrored to rebuild branch.
- No owner acceptance or runtime Android verification yet.
- Remaining unconnected: game-time engine, location art, quest journal, directional travel and world/NPC action resolution.

## v1.0.12
GitHub hub JavaScript syntax check passed. main and rebuild branch mirrored. Android visual and gameplay verification pending; no claims of quest completion logic or live modifier recalculation.

## v1.0.13
JavaScript syntax PASS; code-level check confirms exact creation keys and ten description strings. Mirrored to main and rebuild branches. Android visual/value check pending.

## v1.0.14
Hub and character creation JavaScript syntax checks passed. Both branches updated. Browser Android and existing-save migration still require owner verification.

## v1.0.15
Hub JavaScript syntax PASS. Back handling, drawer dismissal and Settings logout code committed and mirrored. Android device behavioral verification pending.

## v1.0.16
Hub JavaScript syntax PASS. Survey/NE travel/SW return and Charity-on-interaction handlers present. No headless gameplay or Android tests run; owner verification pending. First Steps quest engine remains incomplete.

## v1.0.17
JS syntax checks PASS for title, creation and hub. Code inspection confirmed survey dispatch exists. Android browser cache/navigation issue suspected but not confirmed; ready-save direct navigation implemented. Retest pending.
