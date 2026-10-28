# Epi-Center 1.0 — Controlled Rebuild Audit and Gates

Status: **First source-level audit complete; implementation and owner acceptance not yet begun.**
Branch: `rebuild/1.0-foundations` (separate from main).
Reference candidate: `epi-center-v0.8.84-attribute-foundation-corrections.html`; last owner-accepted gameplay: v0.8.74. Do not modify or delete either.

## Owner-approved development order
0. Audit current implementation, docs, test evidence, save formats, and code reuse candidates. Preserve world canon and historical decisions; latest confirmed attribute rules supersede earlier 85-point proposals.
1. Core app lifecycle, navigation state, three independent save slots, schema versions, migrations, backups, safe deletion.
2. Separate title screen: game title, current version, three slots with New/Continue/Delete as appropriate; confirmation before delete; reserved future Patreon/Discord placement (no fake links).
3. New-character flow: name, existing appearance fields, ten-attribute allocation, review and explicit final confirmation. Draft state survives navigation/reload; name editable until confirmation; Android keyboard/autocorrect works. Attribute labels are clickable/tappable explanations.
4. Central roll resolver and DCs; unit tests including natural 1/20 and modifier stacking.
5. Time, needs, health, stamina; deterministic tests.
6. World topology, discovery and travel; preserve approved canon.
7. NPC and Form state, transformations, autonomy, independent attribute profiles, Erin stage-23 activation gate.
8. Combat core; equipment, inventory and economy; quests and progression, in dependency order.
9. Owner-guided tab redesign and final UI integration (test UI throughout).

## Current evidence (not yet a complete code audit)
- v0.8.84 checkpoint documents an incomplete attribute integration; old six-stat gates, combat and Form/NPC activation remain outstanding.
- Owner's Section A tests: A1 fail (old attributes displayed in creation; no ten-attribute allocation prompt); A7 pass (appearance fields editable). Other tests untested.
- Android name input: autocorrect selection can prevent immediate keyboard reopening; avoid rerender/focus loss.
- Earlier UI candidates v0.8.79–81 failed owner visual tests; v0.8.82 toolbar visibly appeared but was not fully accepted.
- Existing saves use `epicenter_foundation_v060`; preserve them. **Do not automatically reinterpret an old save as a new three-slot save.** Define explicit import/migration with rollback before implementation.
- Exact v0.8.84 HTML file exists in GitHub, but connector's full-file content retrieval returned empty; therefore implementation-level code audit and patching are BLOCKED until a complete source read is obtained and validated.

## Non-negotiable architecture and acceptance gates
- One authoritative state model, clear module boundaries, and a single render owner per screen; no piling new late-stage render overrides onto legacy code.
- Separate title / creation / game routes; screen navigation must not itself advance world time.
- Three slots must not share player data. Delete must ask confirmation and target only selected slot.
- Creation draft editable until explicit confirmation; exactly 40 starting attribute points, creation max 7, attribute scores 0–10, earned budget 35 and lifetime total 75, max 10 per attribute.
- Ten attributes in five domains; direct-add d20 checks, natural 1 always fail / natural 20 always succeed; DC Easy 12–14, Moderate 15–17, Hard 18–20, Very Hard 21–23.
- Player/Form/NPC profiles remain independent. Erin's Form attributes only activate after successful stage 23.
- No feature declared done until syntax/unit tests, browser interaction, save/reload and owner Android acceptance pass.
- No change to main, accepted builds or historical documentation without explicit scope and verification.

## Next audit tasks
- [x] Retrieve v0.8.84 full source via GitHub blob SHA (1,221,326 characters, 6,466 lines); fetch_file content was empty because of file size. [ ] Compare v0.8.82 and accepted v0.8.74 source and hashes.
- [x] Initial map of startup, creation gates, roll entrypoints and storage (details below). [ ] Exhaustive render/event call graph.
- [ ] Inventory reusable pure logic versus intertwined UI/state logic.
- [x] Identify known owner test failures and initial migration hazards. [ ] Inventory automated harnesses and run them.
- [ ] Present owner a focused Title Screen + Save Slots specification before coding that stage.
- [ ] Implement and test only the first approved foundation stage; do not rush into gameplay content.

## Source-level findings (2026-10-27)

Full HTML retrieved successfully by `fetch_blob` using GitHub blob SHA `672af75932ebbc0dda645b18fe058a5e39ac2465` (the generic file-content endpoint returned empty due to size). Source is approximately **1.22 MB / 6,466 lines with eight script tags**. It is an accreted single-file game, not a clean modular engine. The HTML document title still references v0.8.82, illustrating version metadata drift.

**Startup/state:** early prototype uses `KEY='epicenter_proto_v0523'`, with a `storage` wrapper and `s` mutable state. A later foundation layer reads `FOUNDATION_KEY='epicenter_foundation_v060'` and merges saved values into `s`. Both keys must be inventoried before migration. Existing UI startup uses `if(!s.name) welcome()`, while subsequent onboarding depends on `s.profileComplete` and legacy `pointsLeft()===0`. These are independent, inconsistent completion gates.

**Legacy creation:** `pointsLeft()` counts a 12-point allocation over six `s.stats` values; `saveProfile()` saves original appearance and sets `s.profileComplete=true`. This explains why the new ten-attribute panel alone did not replace old creation. Old gates still reference `pointsLeft()===0`.

**Rolls:** original `roll(stat,dc,bonus)` computes a six-stat modifier from `s.stats`; `check78` independently computes similar legacy math. The newer `attributes926` foundation introduces a separate natural attribute state and archive of legacy stats. These overlapping implementations create migration risk; a new engine needs one resolver, not another override.

**Rendering:** multiple `render`/renderer layers and `console816` feed composition are present. Owner-confirmed failures in 0.8.79–81 correspond to changes targeting inactive DOM paths. New architecture must have a single explicit screen router and no implicit global renderer overrides.

**Preservation:** `epicenter_foundation_v060` is the accepted foundation save key. Do not change its contents during audit or automatically migrate without a tested, explicit import path. The three-slot rebuild must use a distinct versioned namespace, with schema validation and deletion confirmation.

**Audit conclusion:** a controlled modular rebuild is justified by the observed overlapping state, creation gates, roll entrypoints and render ownership. This is a source-backed architecture recommendation, not a claim that every legacy system is defective. Next implementation is independent slot storage and title screen only, followed by browser and owner Android tests.
