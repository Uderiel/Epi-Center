## Published in v1.0.109

This implementation is now live and publicly verified. [Playable link and checklist](V1.0.109-OWNER-ACCEPTANCE.md). Earlier development-only statements below are historical.

# Shared activities implementation

## Shared activities — first development integration verified

Source `b09ffe290d0042260a6d5e5747357d5271488063` on `rebuild/1.0-foundations`; public gameplay remains v1.0.108. Generic shared activity lifecycle plus a home adapter support viewing, reading and cooking in Priya’s or Erin’s actual home. Present Priya or equipped Erin can suggest an optional activity. Suggestions expire and require explicit acceptance. Saved progress, pause/resume, stopping, per-person departure and changing the activity lead are implemented. Voluntary delegation/reclaim changes the lead without resetting progress or mastery. No network multiplayer or additional NPC integration is claimed.

Cooking commits real ingredients at start, creates one real meal at completion, and records interrupted preparation without a refund or completion exploit. Priya’s completed meal is usable in Items; Erin’s goes into her existing prepared-food list. Reading uses Erin’s actual selected chapter or a public fictional harbor story at Priya’s; it does not expose private manuscripts. Read-aloud wording is used if the player cannot handle a book. TV fiction, periodic dialogue and comfortable intervals remain bounded by actual events. AI context carries only local participation and current progress; internal form participation/control is withheld from NPC packets. Activity changes invalidate late AI replies.

Validation:1,294automated cases across76suites pass.156local browser checks pass:78legacy,38cat/hosting,27Erin,8shared activity and5everyday UI. Final read-aloud wording was followed by adapter tests and syntax checks. Evidence: `docs/releases/shared-activities-development-verification.json` and `shared-activities-development-tests.json`. Earlier isolated UI test required its new art dependency; corrected the fixture. One legacy-browser attempt targeted obsolete local port8766; reran successfully at8767. Existing released108screenshots/evidence preserved.

Next exact action: review owner feedback on this first shared slice, then prepare a versioned release and perform publication verification when publishing. Not deployed. Outstanding: actual paid AI narrative quality, owner saves/mobile acceptance, broader NPC adapters, interactive ingredients/recipe alternatives, long-term restocking, and multiplayer. Shared overworld/private homes and workplaces/group quest instances remain a future multiplayer direction only. Discord bridge remains deferred.

