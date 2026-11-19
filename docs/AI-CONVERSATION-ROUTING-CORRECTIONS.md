# Named turns and narration context

v1.0.119 separates NPC-to-player and NPC-to-NPC histories by conversation scope, preserving old saved text as an archive. Legacy unscoped Priya/Nadia turns are excluded from new generation to avoid reinforcing the reported contaminated exchanges. New personal turns survive reload and remain separate from ambient work dialogue. Other legacy NPC histories remain compatible. No relationships or saves are reset.

NPC packets explicitly identify the speaker, addressee and latest expressed words. Non-mechanical fallback greetings are not used as a script for direct speech. Scene serialization retains valid JSON and the latest turn when background is large. Same-actor requests are serialized; queued NPC replies refresh history after the previous reply finishes. No generated promise creates an appointment or physical outcome.

Known wrong-speaker openings and highly similar long replies get one bounded correction before fallback. All narrator routes require the validator; hidden-footwear events lacking metadata receive a restricted sensory snapshot. Ordinary room-event packets receive recorded room text, and known unsupported fixtures are rejected. Guards cover observed failures and are not an exhaustive semantic hallucination detector. Unknown model failures can still require owner reports.

Unchanged unworn shelf state is not emitted whenever the wearer’s remote activity changes. Actual wear/removal transitions and periodic senses remain unchanged. v1.0.118 exact recovery receipts and prior Resolve/room fixes remain.

Regression evidence: actual browser socialSpeak and feedEntry paths with date invitation, personal follow-up, intervening ambient exchange, wrong actor, repeated answer, reload and missing footwear metadata. The test fixture uses a fully initialized synthetic footwear binding state; no owner save or paid provider is used.
