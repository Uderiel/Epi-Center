# Outstanding bugs and manual acceptance

These items remain unresolved manual checks. Existing automated passes do not close them.

- [ ] Apartment arrival and autonomy movement ordering: actual room, intended destination and narration agree during entry and subsequent scheduler ticks. Compare tired/refusing and rested/cooperative Erin at 100% influence. Successful negotiated pauses/resistance must remain effective; autonomy must continue where permitted.
- [ ] Go Home route narration and authority: test from multiple discovered origins, intermediate routes and at high influence; refusal or interruption must not narrate completed arrival.
- [ ] Erin failing to acknowledge "I don't want to read.": test exact wording both alone and after a reading suggestion, agreement, authorization and active routine. Distinguish acknowledgement, withdrawal, refusal and physical authority. Do not mark fixed based on broader negation tests.
- [ ] Duplicate or misleading live-feed messages: compare each attempted/completed/interrupted action with actual location, activity, pending state and timestamps. Include reload and rapid repeated requests.
- [ ] Physical Android Chrome: touch, keyboard, scrolling, apartment navigation and file import/export. Narrow desktop viewports are not physical-device verification.
- [ ] Owner manual acceptance of v0.8.68 after the above.

For each failure record candidate SHA, origin, influence/trust/stress/fatigue, current/pending intention, room, game time, exact input/clicks, expected versus actual state, and the exact feed text. Use disposable development saves. Never attach real player saves without owner consent.

- [ ] DEV transformation completion mismatch (reported 2026-10-25): setting Erin physical transformation to 23/23 advances the counter but does not populate current appearance fields. Trace the DEV setter against `anatomyInit65`, `STEPS65` region/history updates, and the current appearance projection; preserve original appearance, independent mental influence, ownership, and save data. Verify 23/23 appearance and reload with a disposable development profile. Not yet fixed.

- [ ] Equipment-tab stale state after Erin heels removal (reported 2026-10-25): at 100% influence, removing the heels generated a successful resistance roll visible in Play, but Equipment remained visually equipped until switching to Play and back. Trace `removeHeels63`, the roll/result narration, `equipment67` overrides and render timing. Immediately show success/failure and authoritative worn/carried state on Equipment without tab navigation; retain existing roll rules and save compatibility. Reproduce and verify both successful and failed removals using disposable saves. Not yet fixed.

- [ ] Cross-cutting UX acceptance requirement (owner direction, 2026-10-25): reduce the number of separate fields, panels, and menu hops. Players should see contextual equipment, resistance-roll, transformation and action state together in the live-feed workflow, without scrolling between multiple areas or interrupting/clearing draft text in the live-feed input. Prefer compact in-place status and progressive disclosure over new cards or tabs. Validate updates while text is partially typed, including failed/successful heel removal and transformation changes. Do not redesign completed mechanics or multiply duplicate readouts.
