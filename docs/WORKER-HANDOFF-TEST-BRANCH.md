# Request handoff worker test branch

This branch contains only AI worker assembly repairs, its generated editor bundle and worker tests. It does not include the local game-client repairs, Form Repository/staff work, or an accepted production release. Main is unchanged.

The internal request interpreter receives its own classifier role rather than conflicting character-dialogue instructions. Final prose receives the actual resolved controller result and recorded agreement; supplied catalogue and Eve guide are retained in the current turn. Neutral reached Erin transition facts are preserved. No new runtime tone assignments, model, keys, accounting settings, permissions or CORS changes.

Health identifies the candidate as requestAssemblyVersion request-handoff-v3. It retains the existing release label until the full release process. Tests use simulated transport. Real model acceptance remains open.

Purpose: determine whether the existing Cloudflare Git connection creates a preview version for a non-main branch. Do not merge or publish production from this draft. Existing secrets and durable budget binding are required for real tests; none are stored here.

## Preview deployment configuration fix

The first Cloudflare build failed because its command is `npx wrangler preview` and the manifest lacked a `previews` block. The manifest now declares Preview-safe variables and `previews.durable_objects.bindings` for the same exported AIBudget class. Top-level production variables, namespace binding, compatibility date and migration are unchanged. There is no script_name cross-worker binding; Cloudflare isolates each Preview namespace.

The Preview allowance starts at zero. A fresh Preview ledger must not silently reset or extend the existing game allowance. No paid preview call is authorized by this configuration. Before paid testing, configure existing credentials securely in Cloudflare Settings → Previews Base (FEATHERLESS_API_KEY and GAME_ACCESS_TOKEN), and account explicitly for the separate preview ledger against the existing overall test allowance. Do not paste provider credentials into chat or commit them. Previews do not inherit production secrets.

Sources: https://developers.cloudflare.com/workers/previews/configuration/ and https://developers.cloudflare.com/workers/previews/resources/#durable-objects
