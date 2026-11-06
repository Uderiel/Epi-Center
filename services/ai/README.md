# Epi-Center AI backend — owner test

v1.0.71 adds one-body internal dialogue context for every form, regardless of mastery. New frontend packets carry this context even before the Worker redeploys. Backend source independently reinforces the same rule and drops pre-shared-body-v1 form history. The original player's consciousness is internal, never a separate physical person beside the form. Mastery/influence/decisions stay mechanical game facts. Old form history remains saved but is not sent again; NPC histories remain separate and unchanged. Neutral model verification is recorded in ../../docs/releases/v1.0.71-model-checks.json. Backend source deployment cannot be inferred from frontend Pages deployment alone.


The owner has deployed this backend at **https://epi-center-ai.jermil2008.workers.dev**. A neutral live Eve generation passed: 315 input tokens, 174 output tokens, cost $0.00042234. Runtime configuration, owner authentication, GitHub Pages CORS and persistent usage accounting were observed working. No actual provider key was received by the assistant; it remains in the owner's Cloudflare secret settings. The public game remains usable with AI off. In-game endpoint/access-code configuration and broader character-quality acceptance are next. Evidence: ../../docs/releases/v1.0.70-backend-live-check.json.

The owner has a pay-as-you-go Featherless account with a stated $55 balance. The separate game allowance is $50 per America/Chicago calendar month, shared across all saves/devices using this backend. This service does not purchase credits, enable auto-recharge, or assume a renewing provider subscription. Hosting is separate from Featherless credit.

## Deploy with Cloudflare Workers

A Cloudflare account with Workers/Durable Objects enabled is required. Use the existing GitHub repository; no provider key belongs in GitHub, chat, the game Settings, or a source file.

From the repository root, with Node and npm installed:

```sh
npx wrangler login
npx wrangler deploy --config services/ai/wrangler.toml
npx wrangler secret put FEATHERLESS_API_KEY --config services/ai/wrangler.toml
npx wrangler secret put GAME_ACCESS_TOKEN --config services/ai/wrangler.toml
```

The first secret is the existing Featherless API key. The second is a **different**, randomly generated owner access code of at least 32 characters. Enter each only into the secret prompt or Cloudflare's encrypted Variables and Secrets interface. The service refuses to use the provider key as its browser access code. The Durable Object binding and SQLite migration are declared in the manifest; do not omit them or substitute in-memory storage.

The model defaults to `TheDrummer/Cydonia-24B-v4.3`. Availability, plan eligibility, licensing and response quality require an actual account-backed test before this becomes the selected production model. Change `AI_MODEL` in the backend configuration to another eligible model if necessary. Requests fetch fresh model pricing; input above $2/million or output above $5/million is blocked by default. The allowance can be reduced but cannot be raised above $50 by this implementation.

After deployment, copy the real HTTPS Worker address. `/health` reports only whether configuration is present. In the game: **Settings → AI dialogue and narration → backend address + game access code → Save → Check connection and usage**. The provider API key is never entered into the game. Enable dialogue; optionally enable expanded narration. Test an ordinary NPC conversation, private Erin/Kibbles conversation, and a recorded transformation event.

If using Cloudflare's Git integration, set its root directory to `services/ai` and its deploy command to `npx wrangler deploy`. The manifest expects `worker.mjs`, `core.mjs`, and the SQLite Durable Object migration in that directory. Keep secrets in Cloudflare's secret settings. The owner must authorize the account connection and any hosting plan themselves.

## Accounting and failure behavior

`GET /usage` and `POST /generate` require the private game access code. Default CORS allows only `https://uderiel.github.io`. `/health` contains no credentials, dialogue or wallet details. The model endpoint and model choice are fixed server-side; clients cannot redirect the provider credential or select a more expensive model.

Each paid request reserves a conservative maximum cost at fresh uncached model rates, atomically in one persistent Durable Object. Requests stop before that reservation would exceed the $50 game allowance. Reported provider `usage.cost` settles the actual charge; token totals and a conservative rounded-up dollar ledger are recorded. Prompt/completion contents are not stored in the backend ledger. The client retains up to 200 recent messages per character locally and sends the most recent 12; it has no automatic long-term summary or universal NPC shared memory.

Requests use stable unique IDs; duplicate IDs are rejected without a second generation. Network/usage ambiguity holds its reservation and does not automatically retry. An unexpected charge above the live-price reservation blocks additional generations for operator review. Review held requests against provider usage before correcting accounting; there is deliberately no public budget-reset endpoint. This game ledger is not the Featherless wallet balance and does not track other applications using the same provider account.

For a provider denial, unavailable account/model, lost network, exhausted allowance or bad response, the original game response remains available. Live time pauses while a generation is pending. Replies from a changed scene, disconnected session or superseded save are discarded. No model output directly writes inventory, relationships, resources, dice, schedules, movement or transformation progress.

## Scope of this first integration

One service covers Eve, Charity, Richard, Erin, Kibbles, authored future forms, world narration and transformation descriptions. Each identity gets distinct context/history and communication rules. Public NPC context excludes private form influence/needs and full inventory/wallet/save data. Canine intended words are not supplied as intelligible NPC speech. Existing canonical outcome receipts are retained when dialogue is expanded.

This release adds the **generative expression layer** over resolved actions. Semantic action selection, model-directed autonomous schedules, long-term memory summarization, synthesized audio, public multi-user identity/accounts and model-quality acceptance remain separate follow-ups. Owner access code is for private testing, not a public player authentication system. Do not describe the AI as live until a real configured service responds.

## Validation

```sh
node services/ai/test.mjs
node rebuild/hub/ai-client.test.js
node scripts/verify-development.cjs
```

Backend tests use simulated model responses and the documented transactional storage contract. They do not claim a deployed Cloudflare runtime test or real-model writing quality.

Official references checked November 6, 2026:

- https://featherless.ai/docs/completions
- https://featherless.ai/docs/api-reference-models
- https://featherless.ai/docs/billing
- https://developers.cloudflare.com/workers/configuration/secrets/
- https://developers.cloudflare.com/durable-objects/api/sqlite-storage-api/
