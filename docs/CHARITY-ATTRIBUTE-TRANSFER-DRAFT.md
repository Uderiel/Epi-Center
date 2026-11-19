# Charity attribute-transfer selection — approved design, implementation deferred

Checked against approved Charity75profile, player zero-allowed base scale, cap10and conserved-player-total mask exception. The owner approves the selection details below. No controller, save edits or new cost is implemented.

## Approved rule for each transfer tick

1. Recipient pool: Willpower, Reasoning, Stability and Insight, Charity’s four core mental strengths (all10). Choose the player’s lowest current base score in that pool that is below10. On a tie use fixed order Willpower, Reasoning, Stability, Insight.
2. Donor pool: the other six base attributes—Endurance, Fitness, Intuition, Reflexes, Presence and Influence. Choose the highest current score above0. On a tie use fixed order Endurance, Fitness, Intuition, Reflexes, Presence, Influence. This makes the existing strong non-core attributes progressively feed her mental specialty; it does not drain one core mental strength into another or treat equipment as a donor.
3. Move exactly one point: donor minus1, recipient plus1 in the same saved operation. Minimum0, maximum10, total unchanged. The floor0uses the existing approved legal player floor, and the owner approves this donor floor.
4. If no legal donor or recipient exists, skip that tick without banking a future transfer, creating points or altering the interval.
5. Persist the selected pair and resolved tick. Reload/repeated UI does not reselect/reroll or transfer twice. Use existing approved intervals: third shift every120minutes, fourth every60minutes. No extra transfers are inferred during the72-hour locked period.

Example: Fitness7and Reasoning3can become Fitness6and Reasoning4 when those are the selected donor/recipient. The same original total remains after unmasking; deliberate reallocation is still required for recovery. Actual selection depends on all ten current base values, not this example alone.

Approved consequence: Presence and Influence are eligible donors even though Charity has strong social attributes, because this approved bleed prioritizes her core mental specialty rather than reproducing her whole75-point distribution. The owner explicitly approves the donor-pool choice.

## Owner requirement — make changes clear to the player

Each actual transfer must produce a visible mechanics entry naming the donor and recipient, their before/after base scores and the unchanged total. Example: “Mask attribute shift: Fitness7→6; Reasoning3→4. Total base points unchanged.” Display the current allocation in Stats and preserve the event in that player’s history. Do not conceal an actual mechanical loss behind vague mood prose or count equipment effects as base changes.

Pair the mechanical entry with brief Charity-like mental familiarity appropriate to current observations, without replaying the initial transformation. Keep narrative voice distinct from factual stat feedback. Explain that redistributed points remain after mask release and need deliberate reallocation, consistent with the approved recovery rule; this does not promise that further wear is safe or disclose the hidden hatch exception or recovery timer as advance reassurance.

No-legal-transfer ticks must not falsely narrate a successful transfer. Repeated display/reload may show the recorded result but may not execute another transfer or duplicate its reward. Actual implementation and interface placement remain deferred with the quest framework.
