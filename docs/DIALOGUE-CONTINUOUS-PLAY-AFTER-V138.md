# Dialogue reliability and continuous play after v1.0.138

Status: implemented repair batch published and publicly verified in v1.0.139. This record retains the earlier local/paid evidence; current deployment evidence is in releases/v1.0.139-release-summary.json. Base publication remains v1.0.138 (`f425ec1` runtime / `a43c0f7` metadata). Worker `request-handoff-v11`, Cydonia model/settings, gameplay prices, relationship weights, schedules, access/consent gates, approved appearance data and published frozen Bible are unchanged.

## Repairs and failure ownership

| Observed failure | Cause and implemented repair |
| --- | --- |
| Tits forgot a ticket story after four intervening exchanges. | Client retrieval omitted ordinary “I keep” statements. Include heard assertions and retractions, exclude questions/private/hypothetical/reported speech, retrieve relevant older statements within the retained owner/recipient/presentation scope. |
| Returning to a previous preference discarded the renewed statement. | Client deduplication kept the first occurrence. Retain the latest occurrence and restore chronological order. Preserve older specific reasons for past-tense questions. |
| Cydonia asked again which preference was current, or answered the superseded alternative. | Reviewed packets contained the right chronology; this was also a generation error. Add a query-selected verbatim heard record, prioritizing topic matches over a newer unrelated collection. Validate delivery of the selected current positive collection report; one correction maximum, then an attributed source quote. The claim remains self-report and grants no inventory or exclusive ownership. |
| A location question containing “shop” exceeded the scene limit during longer play. | Client included unrelated catalogue, duplicate opaque appearance key and redundant service data. Drop the irrelevant catalogue/duplicate identity data; retain current order/payment, actual outfit and operational information when relevant. The same saved failure now builds and the formerly blocked question worked live. |
| An authored former job allowed unrelated invented life history. | Client validation used the presence of any past statement as broad permission. Check the claim against its own source. Capture decoration/installing anecdotes, generic family denials and negative experiences; retain the real Bimbo 365 employment fact, present preferences and hypotheticals. |
| Outfit answer expanded “matching accessories” into a necklace and bracelet. | Client supplied no typed outfit evidence for this check. Supply the actual speaker outfit, reject unsupported named jewellery, preserve a complete source outfit fallback instead of asking the player to clarify a clear question. Existing gesture rules remain. |
| Charity invented clothing-tag handling. | Extend the existing recorded-prop check to tags. Actual recorded tags remain valid. This is bounded validation, not an exhaustive semantic fact checker. |
| Charity answered normally but sharing/interest gave no relationship change. | Charity was absent from the shared scene registry even at her actual public counter. Register her existing actor/location and public hearing boundary, respecting current staff/household absence, sleep and private rooms. Existing sharing/interest/dismissal rules now run. No new weight or permission. |
| Registration could redirect Charity around her authored conversation adapter. | Preserve her original talk route for heard accounts, familiarity and existing requests. Dynamic Cydonia writing still follows it. The intermediate shared-planner run is retained as experimental evidence, not the final route. |
| Two Charity recipient options appeared. | The new registry and the old manual recipient fallback overlapped. Deduplicate by entity ID. |

## Real continuous-play evidence

One new character was created through the real appearance/review UI with default100 gold. Baseline requests used the published client; subsequent candidate versions ran against the same real worker on the same save. Actual travel went Spire → Central Hub NE → Burke’s, later back to Spire,23 ordinary hour-wait controls into the next day, back to Burke’s, then Cherished Touch. No teleports, extra gold, granted forms, NPC schedule pauses or owner save. Wall-clock progression/ambient narration were disabled as explicit test preferences; normal game-clock actions and schedules remained active.

- Tits initially forgot the “I keep old tram tickets” story; the repair recalled the tickets and the player’s aunt. Corrected lighthouse-postcard information survived topic changes, reload, actual departure/day change/return and another reload.
- Tits’s directed scores changed0→2→4→2→3 for interest, kindness, dismissal and compliment. Reload did not award twice.
- A hypothetical travel question did not move the player. Coffee stayed unpaid until payment, charged6 gold once, preserved the receipt/preparation through reload, became ready through the real wait control, and was collected normally. A rejected payment rewrite used its recorded controller result; this is safe delivery, not a model pass.
- Charity denied hearing the tram-ticket story told to Tits, while recalling her own pressed-leaf/mother story after reload. Warm, conversational humour differed from Tits’s more fragmented/literal voice. This is sampled personality evidence, not general acceptance.
- After presence repair, Charity’s existing sharing and interest outcomes gave+2/+2; duplicate story/reload gave0. Later dismissal gave−2 and survived reload. The final route retains authored heard-account recording.
- The changed-back collection remained a raw-model failure in intermediate and final retries. **Final displayed/persisted answer is the accurate source fallback**: `You told me, “I keep blue buttons.”` A known wrong or ambiguous answer is rejected after at most one correction. Do not count this as successful model inference.
- Zero-cost browser replays inject the exact previously paid bad jewellery/recall responses, exercising the real validator, correction limit, source fallback, ownership and reload persistence. The final recall replay uses two simulated writer responses and forwards zero provider calls.

The full record contains91 UI events, including56 typed live turns. This samples Eve, Tits and Charity; it is not uninterrupted acceptance of every NPC, quest, form, transformation or arbitrary utterance. Memory remains bounded by retained conversations. More natural output is still needed where source fallback supplies the correct answer.

## Verification and accounting

- Final automated run: **2,443 named passing cases across all173 suites**, including worker checks; every suite exit code is0. Modified modules and inline scripts parse; published frozen Bible verifies unchanged. Earlier failed checks are not counted as passes.
- Read-only snapshots assert that their collection never mutates the actual save. All continuous events retain the same player ID.
- Reviewed real-provider admissions: **89**, with88 successful known-usage responses. Known cost **$0.19564230**. One additional provider response supplied no verifiable usage; **$0.148483** remains conservatively reserved. Its exact charge is unknown and the request was not replayed. Three earlier reservations totaling$0.387882 remain intact.
- One free model-availability failure occurred before paid admission. Harness setup/submenu-selector issues were caught in free rehearsal. When the long feed reached its ring limit, new-event collection changed from array length to event IDs; affected earlier turns are reconstructed explicitly from stored immutable snapshots.

Evidence: `verification/continuous-dialogue-after-v138/summary.json`, `continuous-turns.json`, `provider-traces.json`, `browser-replays.json`, `regression.json`, `pretest.md`, source hashes and before/after oversize reconstruction. Provider traces contain only test gameplay requests/results, never authorization headers or access credentials.

## Remaining acceptance work

Broader continuous sessions across the other NPCs, quests, form/body changes and overnight interactions remain open. Generated personality/factual reliability is not universally accepted. The one unverified provider charge needs actual billing evidence before settlement; no cost is guessed. The repairs in this record are now published in v1.0.139; the broader acceptance work above remains open.
