## v1.0.139 implemented release scope

Charity’s actual public scene presence now agrees with the existing shop dialogue gate, enabling existing sharing/interest/dismissal checks without changing weights, sleep, access or absence. Her authored talk path and heard-account/request recording remain. Shared personal retrieval preserves corrections and renewals; source-selected recall and outfit evidence retain accurate fallbacks after bounded correction. Duplicate recipient IDs are removed. Detailed evidence and limits:DIALOGUE-CONTINUOUS-PLAY-AFTER-V138.md. Publication record:releases/v1.0.139-release-summary.json. Earlier checkpoints below are historical.

## v1.0.138 implemented release scope

The owner approved publication of the tested dialogue/lore repair. Canonical numeric disclosures refresh per player without revealing unheard private fields; old detected false lore is archived. The actual planner path records Tits’s heard wish and explicit clarification for reload-safe recall. Current partial foot records preserve unchanged features. Approved profile/portrait data remains; Dart’s already approved cropped ears are reflected. Generated prose still sometimes requires source-based fallback. Full evidence and limits:LORE-LEARNED-INFO-ACCEPTANCE.md;publication record:releases/v1.0.138-release-summary.json. Earlier local checkpoints are historical.

## Deployment update

The owner deployed the prepared worker in Cloudflare. Its public /health now reports grounded-turn-v1 with configured:true. The matching v1.0.122 client is live and browser-verified. Actual authenticated Cydonia acceptance has not been performed; the local checks below remain mocked-provider evidence. Earlier blocked-state notes are retained below as audit history.

# AI integration audit and replacement turn contract

Status: v1.0.122 candidate; not published. Public game remains v1.0.121. The public AI health endpoint reports character-embodiment-v3, not the prepared grounded-turn-v1 contract. That endpoint proves the revision label/configuration only; the deployed prompt text and actual model quality have not been authenticated or inspected.

## Findings

- Frontend Pages publication and Cloudflare AI deployment are separate. Earlier game releases were verified against mocked completions; those results establish client behavior, not Cydonia’s adherence to context. Calling those releases fully verified AI repairs was too broad.
- The backend source sent a save-shaped JSON object as the final user message. Personality, control machinery, generic event/fallback and latest words competed inside it. This encourages context recaps and mechanical exposition rather than an actual turn response.
- Common private-form backend guidance included Erin’s human-body lifecycle even for canine requests. Saved canine identity was later added on the client, but role-specific server framing was still mixed.
- Correction instructions were appended to the player’s message. That changes the message being answered and mixes internal repair instructions with roleplay input.
- A raw truncated scene could become unstructured lore instead of being rejected. Keyword guards only cover known hallucinations; they are not general grounding or semantic quality validation.
- Existing action controllers remain responsible for physical outcomes. AI prose is not an arbitrary action executor. A future semantic planner needs validated controller actions; describing an action must never quietly grant it.

## Prepared replacement

The server now renders a single explicit speaker/role brief, selected recorded facts and a plain latest message, with filtered conversation history between them. Only relevant facts are selected, not the whole save/task schema. Generic fallback dialogue is not the latest prompt. Erin-specific instructions apply only to Erin. Canine requests carry the saved identity, qualitative needs and actual authority; unknown needs remain unknown. Narration gets canonical location/viewpoint, recorded event and qualitative outcome directions rather than raw resource arithmetic.

Repair issues are a bounded separate field, outside player wording. Incomplete structured scenes fail before provider requests or billing. Health, usage and generation report grounded-turn-v1 consistently. Existing model, provider secret, owner access token, Durable Object bindings, accounting and monthly cap are unchanged.

Settings includes an explicit “Run live AI checks · 4 model requests” control. It first checks revision and allowance; stale backend means zero model requests. Four isolated turns cover Bella identity, Priya follow-up, actual park/on-foot geometry and Dart’s Doberman identity. Results show exact provider wording and expectations, without an automatic quality-pass claim. Reports exclude credentials/owner saves and can be copied from Settings.

## Rollout gate and access blocker

No authenticated Cloudflare deployment connection is available in this session. The GitHub integration also cannot inspect deployment-secret metadata (403). No credentials were requested, read or exposed. No paid provider call was attempted.

1. Update the existing epi-center-ai Worker with services/ai/deploy-worker.mjs, preserving its existing bindings and secrets. No new provider key or database migration is needed.
2. Confirm /health reports grounded-turn-v1; then publish the prepared client as a candidate with explicit acceptance status.
3. Using the existing owner game connection, run the four real-model checks and review the replies against expectations. Record model/revision/cost and actual text. If adherence fails, fix the server/model contract before declaring the integration repaired.

Automated prompt/transport/ledger tests and mocked browser tests are completed separately from real-provider acceptance. See v1.0.122 reports. Current production is intentionally unchanged while backend deployment and real-model acceptance remain outstanding.

Candidate validation: 1,441 automated cases across 86 suites and 369 local browser checks passed. Provider replies were mocked. Backend deployment, live candidate checks and actual Cydonia quality acceptance remain blocked/unverified.

v1.0.122 published: 1,441 automated cases across 86 suites, 369 local and 369 live browser checks passed; all 180 published files match runtime commit 2ac2f8c8ccf1ac81cef93e2bcf497e1b4f1efe93. Pages deployment 44500767952 succeeded. Owner-deployed worker health confirms grounded-turn-v1 and configured:true. Browser completions are mocked; authenticated real-model acceptance remains pending. No owner save or paid provider calls used by automated verification.
