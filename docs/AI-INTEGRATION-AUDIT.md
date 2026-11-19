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
