# Development v0.8.68 changelog

2026-10-25 — one-time development handoff setup.

- Retained the existing manual-acceptance repair candidate unchanged (SHA-256 `AA8A8C08A8C63460AFBFE6225A7B5865ACA38A2C49DEF85B1DC6A2E7C17D713C`). Its prior movement, live-feed and dialogue changes are described in the verification report, not new fixes in this setup.
- Added an isolated generated preview with development-only storage keys and explicit file export/import into an empty development slot. No production save migration, synchronization or overwrite.
- Added development status, outstanding bugs and weekend review handoff. Prior automated results remain evidence, not manual acceptance.
- Preserved all historical builds, production index.html, main and published v0.8.67.
- Scoped Git attributes preserve candidate/generated-game bytes without changing attributes for historical builds. Whitespace review found the inherited line-73 trailing space; it is intentionally retained to preserve source.

No further gameplay changes were made in this setup task.

## Patch 01 — Dialogue refusal recognition (2026-10-25)

- Development-only regression repair planned for explicit player refusal to read (e.g. `i dont want to read`).
- Preserve Erin's ability to disagree or keep independent intentions while acknowledging the player's preference; refusal alone does not automatically cancel her independent physical actions.
- Pending verification: browser behavior, negation variants, consent withdrawal, and save/reload. No production promotion.

Patch 01 source committed: `a27cc77440bc109a92f5d0d167c5e30d1c6372c6`. Adds an explicit reading-refusal recognition and response wrapper. Source inspection only: no browser regression or hosted preview deployment has been performed for this patch. Existing owner-private Sites deployment is still the prior snapshot.
