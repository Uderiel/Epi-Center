# Charity attribute-transfer selection — proposal awaiting approval

Checked against approved Charity75profile, player zero-allowed base scale, cap10and conserved-player-total mask exception. This document proposes selection details only; no controller, save edits or new cost is implemented.

## Proposed rule for each already-approved transfer tick

1. Recipient pool: Willpower, Reasoning, Stability and Insight, Charity’s four core mental strengths (all10). Choose the player’s lowest current base score in that pool that is below10. On a tie use fixed order Willpower, Reasoning, Stability, Insight.
2. Donor pool: the other six base attributes—Endurance, Fitness, Intuition, Reflexes, Presence and Influence. Choose the highest current score above0. On a tie use fixed order Endurance, Fitness, Intuition, Reflexes, Presence, Influence. This makes the existing strong non-core attributes progressively feed her mental specialty; it does not drain one core mental strength into another or treat equipment as a donor.
3. Move exactly one point: donor minus1, recipient plus1 in the same saved operation. Minimum0, maximum10, total unchanged. The floor0uses the existing approved legal player floor, but permitting this specific drain down to0is part of this proposal.
4. If no legal donor or recipient exists, skip that tick without banking a future transfer, creating points or altering the interval.
5. Persist the selected pair and resolved tick. Reload/repeated UI does not reselect/reroll or transfer twice. Use existing approved intervals: third shift every120minutes, fourth every60minutes. No extra transfers are inferred during the72-hour locked period.

Example: Fitness7and Reasoning3can become Fitness6and Reasoning4 when those are the selected donor/recipient. The same original total remains after unmasking; deliberate reallocation is still required for recovery. Actual selection depends on all ten current base values, not this example alone.

Potential consequence for review: Presence and Influence are eligible donors even though Charity has strong social attributes, because this proposed bleed prioritizes her core mental specialty rather than reproducing her whole75-point distribution. Do not imply this donor-pool choice is already approved.
