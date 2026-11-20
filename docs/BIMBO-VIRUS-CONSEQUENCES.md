# Carrier daily compulsion and missed-activity consequences — current authority

Implemented locally for completed/base-replaced carrier records. Base conversion and natural infection creation remain separate unfinished adapters. No publication.

## Daily requirement and trigger

- One30-game-minute archetype activity per game day, using the approved archetype options.
- One random cue is selected and saved for each eligible day. The ordinary full-day range is00:00–23:30, leaving at least30minutes. On initial conversion/first observation, only the remaining eligible start window is used; a partial day with fewer than30minutes is waived rather than creating an impossible deadline.
- Completing the activity before its cue satisfies that day; no second session is demanded.
- Ignoring means explicitly choosing Ignore after the cue, or reaching the end of an eligible game day without completing the activity. Each day can produce only one consequence, including after reload.
- Only time actually spent performing the selected activity counts. Waiting, unrelated clock advancement, moving away or losing an activity's required capabilities does not count. Actual minutes crossing midnight belong to their respective days.

## Consequence ladder

| Ignored day within cycle | Consequence for the next24game hours |
| --- | --- |
|1|Minimum arousal25/100.|
|2|Minimum arousal50/100; player travel takes50%longer.|
|3|Minimum arousal75/100; longer travel continues and spoken words become unintelligible.|
|4|Minimum remains75rather than100. Lose one point from the highest eligible player-base attribute, and apply soiled condition to actually worn underwear/lower-body clothing. Restart the cycle.|

The next ignored day restarts at25. Each completed daily activity lowers the missed-day escalation by exactly one rung, minimum0. At0, completing it keeps the player at0; it never creates a negative counter. Completion does not cancel already active24hour penalties or refund an attribute point/clean clothing. If penalty windows overlap, the highest still-active floor applies until its own expiry. Expiry removes the floor and associated travel/speech constraint; it does not forcibly erase arousal accumulated from other sources.

These are floors, not caps: opponents can increase arousal toward defeat. Encounter defeat rules remain intact. Combat and current-body arousal reductions cannot go below an active floor. The effect follows the stable playerID across available forms; it is not an NPC penalty.

## Attribute and garment scope

Choose the highest actual player-base attribute above1, with fixed engine attribute order breaking ties. Do not take points from equipment bonuses, NPC profiles or owned form templates. No attribute is reduced below1, and existing0values are not raised for free. An active original-base-body encounter updates its corresponding base score/effective score without removing gear bonuses. If no attribute is eligible, no point is removed. Soiling accompanies an actual point loss and affects only currently worn lower-body layers; no absent clothing is created, no unworn spare/top is soiled, and no bladder relief or particular fluid is invented. The shared condition adapter handles owned and borrowed garments.

## Travel and speech

Outdoor walking8→12game minutes and jogging4→6; existing stamina costs remain. Indoor route planning includes the1.5multiplier. Since the world clock accepts whole minutes, fractional indoor cost is carried between moves (two one-minute moves cost3total), rather than silently charging double on every move. Pure activity/work/meal time is not travel. NPC journeys do not inherit a player's penalty.

At75the shared speech capability reports unintelligible speech. NPC/player-directed utterances are converted before feed serialization and intent handling; meaningful intended words are not sent to the NPC or provider. Ordinary world speech is filtered at the shared hearing boundary. Private/internal form dialogue and NPC-to-NPC/initiative dialogue are not replaced. Physical nonverbal actions such as handing a gift or returning an item remain available; a gift does not remove this separate virus penalty. Clear verbal requests/identity explanations remain unavailable while speech is unintelligible.

## Evidence

Eleven focused penalty cases pass, covering saved random timing/deadline/Ignore deduplication, ladder/restart, point minimum, actual worn soiling, floor-versus-cap/combat defeat,24hour expiry, one-rung daily recovery and replay safety, outdoor/indoor time, speech isolation, current encounter base damage and physical gifts. Actual browser Ignore/deadline, travel, gibberish/provider isolation, point/garment/reload and restart checks pass.1741regression cases pass. QA uses explicit converted-carrier fixtures; no owner saves or paid requests. Nothing published.

## Owner correction — gradual recovery supersedes instant reset

Completion recovers3→2→1→0over three completed daily tasks, not3→0in one task. An additional completion at0keeps it0. The actual completed-day flag and persisted activity counter ensure that replaying a completed activity or reloading cannot recover extra rungs. Existing24game-hour penalty windows still expire normally; no attribute refund or cleaning is added. The fourth-miss ladder restart is unchanged. The activity-completion feedback shows the actual rung reduction.
