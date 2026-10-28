# Epi-Center 1.0 — Controlled Rebuild Audit and Gates

Status: **Audit in progress; no gameplay implementation or owner acceptance yet.**
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
- [ ] Obtain full source bytes and verify size/hash for v0.8.84, v0.8.82 and accepted v0.8.74.
- [ ] Map active entrypoint, initialization, screen renderers, event handlers, character creation, persistence and legacy save shape.
- [ ] Inventory reusable pure logic versus intertwined UI/state logic.
- [ ] Identify all test harnesses, known failures and migration hazards.
- [ ] Present owner a focused Title Screen + Save Slots specification before coding that stage.
- [ ] Implement and test only the first approved foundation stage; do not rush into gameplay content.
