# v0.8.65 — Red Heels Verification and Root Preparation

Date: 2026-10-25. Release update: the owner approved v0.8.65 promotion and commit/push to main; the root now matches the unchanged v0.8.65 file. No real player saves were opened or changed by automated tests. Browser fixtures used isolated temporary Chrome profiles. Test scripts/results/screenshots stayed outside the repository. The original checkpoint did not publish anything; the subsequent release is explicitly authorized for commit/push, with live status checked separately.

## Build identities

| File | State | SHA-256 |
| --- | --- | --- |
| `epi-center-v0.8.63-onboarding-repairs.html` | Accepted for tested scope; unchanged | `5D1945DC160E50014CEFB0DFDC39B096BFABB26F94517666ABCB86C590C30F62` |
| `epi-center-v0.8.64-character-appearance-alignment.html` | Accepted alignment source; unchanged | `0E09925E691290E650B5E4AB6643E38B03EFD3545685AE63EC166B6A09F53A0F` |
| `epi-center-v0.8.64-character-creation-field-cleanup.html` | Accepted playable source; unchanged | `048D3C11F87AEDFA14DCA6EBCBAF92FF997CC6B824F35886CF1AEBE6E9893F85` |
| `index.html` | Current approved root, exact v0.8.65 copy | `F26C1B4CDCF44CDA0A9F8600A26F0C9D102519A198D44249EFF1320941B19A26` |
| `epi-center-v0.8.65-red-heels-acquisition-fix.html` | Approved correction; promoted to root for authorized publication | `F26C1B4CDCF44CDA0A9F8600A26F0C9D102519A198D44249EFF1320941B19A26` |

## Source investigation: accepted v0.8.64

- Courtyard definition: `places.courtyard` at line 425 places heels beneath the transit bench. `OVERWORLD_LINKS` at 433 connects Hub → West Market Walk (`plaza`) → Old Transit Courtyard (`courtyard`). Existing Survey reveals one hidden neighbor at a time; no DEV, mastery or transformation is required to discover this path.
- Normal fresh sequence tested: Survey at Hub three times (tunnel, farms, market); travel to market; Survey twice (service alley, courtyard); travel to courtyard. Discovery and access requirements are achievable.
- `takeHeels63()` at 501 checks location, guards `h.owned`, sets the existing legacy marker to one and does not wear or transform the player. But its UI belongs to `showLocation()` at 512 and `heels062()` at 520, which are superseded by the current Play flow. The current courtyard Play page exposes no reachable pickup button.
- World submission has no matching acquisition dispatch in this accepted build: “take the red heels” does not set ownership. Descriptive item placement is not acquisition.
- `recoverErinHeels76()` at 1078 sets `h.owned` and `s.inventory['Erin’s Red Heels']=1`, preventing repeated legacy quantity. The catalog still independently initializes signature `shoes-0` in `closet-shoes`; this is a contradictory physical representation, not a verified single-location item.
- Browser diagnostic: **3 passed, 4 failed out of 7**, zero uncaught errors. Passed: normal courtyard reachability, repeated DEV/pickup legacy quantity guard, legacy debug ownership across reload. Failed: visible normal pickup, typed pickup, catalog agreement before reload, catalog agreement after reload.

Historical conclusion for v0.8.64 (before root promotion): **the courtyard is normally discoverable, but the heels are not normally obtainable through the current tested interface**. Debug spawning masked a genuine acquisition defect.

## Approved v0.8.65 correction

Source: [v0.8.65 red-heels acquisition fix](../epi-center-v0.8.65-red-heels-acquisition-fix.html).

- `syncRedHeels865()` (5142) and the `items850()` wrapper (5162) link only signature catalog ID `shoes-0` with existing cursed ownership/worn flags and the legacy ownership marker. The marker is an alias for one unique pair, not an additional physical stack. Other object stores are not generally unified.
- `takeHeels63()` wrapper (5166) retains the existing location/owned checks, transfers that existing object to inventory, records courtyard acquisition, and narrates the committed result.
- `recoverErinHeels76()` wrapper (5176) synchronizes actual DEV restoration. Debug possession before the first visit does not create another pair beneath the bench.
- `wearHeels63()`/`removeHeels63()` wrappers (5178/5187) and `itemAction850()` (5189) keep catalog and cursed controls aligned. Existing cursed checks, first-contact event, anatomy/history, influence and mastery rules remain on their original handlers. Wearing the signature pair returns any other equipped catalog footwear to inventory; unrelated shoe handlers are not redesigned.
- `equipment67()` wrapper (5202) reports the physical carried/stored/worn location in the existing equipment card. Owned-but-stored does not misleadingly claim carried.
- `console816()` (5210) exposes one courtyard pickup control when unowned, removes it once acquired, and describes an empty bench for owned saves. `send816()` (5220) supports targeted World pickup commands at that location.

### First-linkage policy and limitations

` s.redHeels865.previous ` retains the prior legacy ownership/worn/quantity and catalog location. Existing legacy-owned heels become carried unless the legacy worn flag is already true. A catalog-only carried/equipped pair retains ownership but is moved to carried state without automatically enabling curse exposure. A never-owned default closet listing becomes the courtyard placement. This resolves ambiguous old representations conservatively; it does not infer or grant mastery, reset anatomy, or try to reconstruct a lost acquisition timestamp.

After linkage, normal put-away storage persists across reloads. Source is recorded as courtyard/debug/legacy/legacy-catalog. The owner approved publication of this first-linkage correction; prior representations remain recorded for review. This fix does not resolve the broader ordinary-footwear, laundry or unified-time plan.

## Candidate browser verification — 19/19 passed

Actual headless Chrome, disposable profile, 390×844 device emulation; **zero uncaught errors** across test phases. Multiple real document reloads were used.

1. All inline candidate scripts compile.
2. Fresh character starts with the single signature pair at the courtyard, unowned.
3. Remote pickup/catalog Wear cannot acquire an unowned pair elsewhere.
4. Normal scouting reaches the courtyard and exposes exactly one pickup control.
5. Pickup transfers the same object reference, quantity one, carried rather than worn, without progress rewards or transformation.
6. Repeat pickup calls/revisits do not duplicate or respawn the pair.
7. Normal acquisition/source/location persist after reload.
8. Legacy Equipment sees carried ownership; catalog Wear invokes the existing first-contact curse behavior.
9. Existing removal checks keep location aligned and retain anatomy. Random removal attempts were retried until success; no guaranteed-success rule was added.
10. Put-away retains ownership and reports actual storage.
11. Stored location survives reload with no courtyard copy.
12. Actual DEV restore before first courtyard visit produces one carried pair without changing progression.
13. Subsequent courtyard visit and pickup attempt do not duplicate a debug-owned pair.
14. Debug acquisition/location persist after reload.
15. Eight catalog shoe IDs remain; other seven locations are unchanged in the fixture.
16. Legacy debug-owned save links without transformation/progress changes and retains prior representation.
17. Legacy catalog-only equipped representation preserves ownership without activating a curse on load.
18. Typed pickup works through the current World channel at the courtyard.
19. Existing foundation key serializes catalog location and legacy ownership together.

The owner approved publication and manually observed existing-save debug-owned heels as already collected. Fresh-player normal pickup remains automated-verified without a separate physical-device manual test. Physical Android Chrome, comprehensive historical-save combinations and broader equipment states remain pending beyond the explicit fixtures.

## Historical pre-promotion root and same-origin HTTP verification — 11/11 passed

Inspected original root: v0.4 HTML bootstrapped `app.js?v=4`; that script used `epicenter_proto_v1`. At that checkpoint the root served an exact copy of v0.8.64; the later authorized promotion replaces it with an exact v0.8.65 copy. The 11-case result below describes the earlier checkpoint, not a new post-promotion run. `app.js` and previous builds are preserved.

A temporary, read-only, loopback-only HTTP server served actual repository files under a project-style `/Epi-Center/` prefix. It and the disposable browser were stopped after testing. No public server or deployment was created.

Checks passed:

1. Root HTTP page loads accepted v0.8.64 cleanup.
2. No old companion `app.js` script is loaded.
3. All 19 regions and unchanged foundation key are available.
4. Root creation saves the authored baseline.
5. Root scouting/connected travel work.
6. Same-origin accepted versioned page resumes the root save without tested progress loss.
7. Versioned HTTP startup records no uncaught errors.
8. Returning to root `index.html` resumes the same save.
9. Root HTTP reload records no uncaught errors.
10. Representative old v0.4 `epicenter_proto_v1` fixture preserves name, currency/EXP, quest flags, location, discoveries/visits and inventory through the existing fallback loader.
11. That old-root fixture persists to the unchanged `epicenter_foundation_v060` destination.

Default assets are bundled; root no longer depends on `app.js`. Optional custom remote artwork was not tested. No repository Pages workflow or `_config.yml` was found; external GitHub Pages settings/source selection and live deployment were not verified.

## Manual acceptance provenance and release decision

Player combined v0.8.63/v0.8.64 results: **15 passed, 0 failed, 2 not tested**. Untested: undiscovered-route blocking (hidden by fog) and residence restrictions (not exercised). Separately, all **five** v0.8.64 appearance acceptance tests passed. Prior Codex final suites were v0.8.63 25/25, v0.8.64 alignment 25/25 and cleanup 29/29. These overlapping sets are distinct evidence, not a new aggregate total.

The owner subsequently approved v0.8.65 as the current main release and authorized commit/push. Previously debug-acquired heels were manually observed as already collected. Fresh-player normal pickup remains automated-only, and physical Android Chrome remains pending. Post-promotion preflight and live deployment are checked separately; historical results do not prove a future Pages deployment.

## Static checks

Candidate inline-script compilation passed in the browser. Its inherited source is unchanged apart from the title; the correction is appended as scoped signature-item wrappers. Current root and v0.8.65 hashes match exactly; all four versioned build hashes remain unchanged. Documentation links and checkpoint snapshots were checked. Git whitespace checking is clean for the modified documentation; the copied root retains the accepted source's pre-existing trailing whitespace at line 71 to preserve byte identity. This is not a new game-code difference.

## v0.8.65 publication preflight — 14/14 passed

The promoted root and versioned v0.8.65 files are byte-identical. A fresh disposable Chrome profile at 390×844 loaded the actual root over loopback HTTP. All inline scripts compiled; normal courtyard pickup produced one carried pair without auto-wearing; root/versioned navigation preserved the save; root reload and the unchanged old-v1 fallback passed. This extends the historical 11-case root suite with compilation and current pickup checks. A temporary harness initially misdecoded the curly-apostrophe inventory key under Windows PowerShell; correcting harness UTF-8 encoding resolved the assertion without changing game files. No game verification failure remains from that run. Physical-device fresh pickup is still not a manual pass.
