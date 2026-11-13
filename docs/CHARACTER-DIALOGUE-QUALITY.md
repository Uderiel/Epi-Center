# Character dialogue correction v1.0.88

## Diagnosis from owner transcript and source

- Erin was explicitly instructed to sound apologetic when uneasy, without enough contrasting personal voice. The live packet lacked an explicit current authority mode and actual room name, so old bathroom/mirror scenes could persist even after movement.
- Form event text contained the repetitive canonical fallback and was sent as input to the language model. Historical assistant messages were sliced at900 characters, sometimes cutting a word or sentence and reinforcing the same style. New voice-version filtering preserves but stops reusing those examples.
- The server allowed up to600 generated tokens, did not inspect provider finish_reason and returned the raw ending. A long role-play answer could hit the ceiling. This is a supported explanation for the observed cutoff, not a verified finish_reason from that past request.
- Richard’s schedule moved him but did not generate ordinary unsolicited conversation. The existing afternoon extra-work offer was conditional, not a general social initiative system.

## Character and scene contract

Erin gets her current control mode, active action, interior room, clothing, trust, stress, mastery progress and actual recent experiences. Form-led and player-led states are explicit; temporary agreed/resisted pauses are represented separately. She speaks internally in one shared body and responds with her own view. Practical warmth, pride in her work, mild stubbornness and dry humor replace habitual apologies; she can be shy about personal subjects without defaulting to a therapeutic script. Model prose cannot move her hand, change clothing or grant mastery.

Richard initiates genuine local conversation events for greeting, completed paperwork, a ready report or an actual break. The new default is at most3 ordinary initiations per weekday,60 minutes apart, with30-minute suppression after a player exchange. Events use actual availability and saved task state. Topics and cooldowns persist across reload. Generic lines remain the AI-off/error fallback; with AI enabled, his supplied goal/current state drive a generated line.

## Worker update for the existing Cloudflare service

Browser publication alone does not prove the Worker updated. Existing backend remains compatible with the frontend context and cleanup changes. For full server changes, deploy the existing `epi-center-ai` service using one path:

1. With repository-based Cloudflare deployment, deploy the latest services/ai source using the existing configuration.
2. In Cloudflare’s existing Worker editor, replace its entry-module code with **services/ai/deploy-worker.mjs** and Deploy. This single ES module exports the same AIBudget durable object and default fetch handler. Preserve the current secrets, bindings and environment settings. No secret value needs to be copied into source or chat.
3. CLI alternative from the repository: `npx wrangler deploy --config services/ai/wrangler.toml`.

The build command for the dashboard module is `node scripts/bundle-ai-worker.cjs`. Its exact source correspondence and exports are tested. No schema migration is required. Check connection and usage in game Settings: new service returns **Backend character-voice-v2**. An older revision label means server deployment remains outstanding. `/health` exposes the protocol version without a paid generation; access may depend on your network.

Server defaults: temperature0.8, top_p0.9, repetition_penalty1.05, frequency_penalty0.15. These are modest provisional tuning choices, not guaranteed quality improvements for every hosted model. The model’s supported output limit and existing600-token budget ceiling remain. The source-selected model remains TheDrummer/Cydonia-24B-v4.3; the live account’s override/availability was not verified. Do not change models before testing the corrected context. Official API reference: https://featherless.ai/docs/completions.

## Acceptance

1. Resume existing unmastered Erin at high influence. Ask who is deciding the current routine. She must acknowledge the recorded form-led control without claiming the player always decides. Repeat with mastery/zero influence and an agreed pause.
2. Continue the owner’s week/identity discussion. Expect a short, specific response, no heading/mirror/hair reset, no claim she is programmed, and no invented history of unbuilt coworkers. Real trust/mastery facts remain accurate.
3. Move rooms and change an actual outfit; the next reply must use current facts rather than an old bathroom scene. No new gesture/body action should appear as a model-created game event.
4. With AI enabled, co-locate with Richard during work hours and advance a game minute. Expect an unsolicited brief greeting, then state-aware acknowledgement/break dialogue when eligible. No per-tick spam, remote speech, task auto-acceptance or reward changes.
5. Ask several ordinary/personal/work questions. Replies target25–70 words, usually2–4 short sentences, rather than scripted reassurance. Quality requires real-model owner testing; deterministic tests only validate prompts/routing/state.
6. Check any cutoff: new Worker reports output limit in status and displays only complete thoughts. No automatic paid continuation/retry is made. Cost/accounting and the existing50-dollar monthly limit stay enforced.

809 named automated cases plus entity assertions passed. Mock provider tests validate completion handling and accounting; no paid model or native Android result is claimed. The separate daily-outfit availability error in the owner log remains open and is not diagnosed as an AI personality problem.
