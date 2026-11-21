## Release disposition

Owner approved publication in v1.0.134, excluding Repository/staff changes. The review and pre-release status statements below are historical; deployment evidence is in docs/releases.

# Dialogue-only repair candidate — unpublished

Owner supplied provider inspection hash c4dc41301c7744c055773da53f65b740c05856dd5f00d6de37253d3fcbeafd89. It confirms the last user message was correctly delivered as id catch anything you have..; the defect is not lost input. The same packet includes the current generic fallback in recentRecordedEvents, two repeated generic replies in accepted history, no warning turn in that history after its AI failure, a reply-to-latest-player-thought label for spoken NPC dialogue, and generic player as addressee despite actual public identity Layla Hamza. The inspection contains no provider or client generation error; it cannot prove the cause of the earlier AI-unavailable response.

Local repairs:
- Preserve actual NPC fallback turns even with AI off or a failed model response. Accepted AI prose replaces its matching turn; do not duplicate or reorder it. NPC history contains expressed words only, not private narration.
- Requests include only preceding turns, never the current placeholder or later queued replies. Current placeholder recent-events records are also excluded.
- Label NPC speech directed-local and name the actual player; preserve explicit ambient/form scopes.
- Project actual warning/choice/voice state into final provider messages, without inventing contact or removing controller gates.
- Fix short exact-reply repetition validation, Tits direct-interest/follow-up handling and unrelated-state invalidation.
- Inspection reports now include the client generation outcome/error as well as the assembled request.

Candidate isolated at /workspace/epicenter-dialogue-fix from published UI-only v1.0.133. Seven runtime files only; no Repository/staff authoring or controllers. Full isolated regression checkpoint1993 named cases passed, followed by the final8-case focused set (including queued-turn chronology), AI-context suite and both browser suites. AI-enabled replay uses simulated transport including a forced warning-generation failure. Real Cydonia output remains untested: no authenticated AI binding/session exists in the task. No paid calls were made.

Prior publication permission was UI-only. This separate client/backend dialogue repair is prepared for review and remains unpublished. Do not include unrelated Repository or staff work if publication is authorized.
