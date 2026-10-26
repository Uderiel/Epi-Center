# Epi-Center accepted-patch checkpoint — 2026-10-26

## Workflow
Solo developer acceptance testing directly on GitHub Pages from main. Each new patch is a versioned HTML file, preserving previous playable versions. Update documentation every two accepted patches. Weekend review identifies persistent issues and regressions for supplemental Codex audit.

## Accepted changes
- v0.8.68 `epi-center-v0.8.68-equipment-feed-test.html`: player confirmed heels visible in Equipment, equip/remove state refresh, and persistence after reload. Unsent roleplay draft behavior was clarified and tested in the next patch. DEV anatomy-stage synchronization code is present but not yet accepted.
- v0.8.69 `epi-center-v0.8.69-feet-collapse-fix.html`: player confirmed 5/5: Feet starts collapsed, collapsed summary displays heels state, Feet expands/closes, equip/remove still works, and unfinished roleplay draft survives equipment actions.

## Next focus
Verify DEV physical transformation 23/23 populates current body appearance regions and survives reload. Distinguish current appearance from original identity baseline; original record must not be overwritten. If this fails, repair with a focused new patch.

## Other reported items awaiting verification
- Explicit reading refusal in Erin dialogue.
- Travel arrival narration ordering and stale journeys.
- Duplicate live-feed messages.

## Integrity rules
- Keep previous accepted HTML versions on main for rollback.
- Do not change save keys or require manual character export/import for normal patch tests.
- At most five player acceptance tests per patch.
- Only claim browser behavior as verified after testing, not merely after a source commit.
