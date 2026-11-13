# Erin identity and mastered release · v1.0.92

## Owner-defined identity

Erin is an adult human woman. Her active body and voice are hers; the player remains their own consciousness inside her. This is not co-ownership of a “shared body.” She has physical, emotional and intimate needs and preferences. Her consciousness has no independent offscreen existence when unequipped. While her unmastered form is active, the player cannot physically return to their original self.

Frontend and Worker instructions now state those facts. Trust, privacy, mood and the actual topic shape openness and personal interest; a blanket denial of humanity/needs or automatic disinterest is inappropriate. High trust does not force agreement to every request. AI prose cannot perform intimacy, change arousal, move, grant mastery or release the form. There is no new physical intimacy mechanic in this release.

Private packets identify Erin as body/voice owner and describe actual release availability. Public NPCs do not receive private identity facts. Older character-voice-v3 history is preserved in the save but excluded from subsequent requests; current history uses character-voice-v4. Wire context `shared-body-v1` remains a legacy compatibility identifier, not a description sent to players or a co-ownership rule. Replies target one or two short sentences; direct questions may need a few words.

## Mastered return and re-equip

- Mastered Erin: remove her cursed heels, then choose **Return to base form · Will release** under Form or Equip. Removal alone still leaves Erin active.
- Release restores the original appearance and effective attributes without resetting resources, inventory, gold, mastery, trust or recorded history. Historical stage23 remains saved; a separate released flag makes her physically inactive. Existing mastered saves remain active until explicit release.
- Her pending routine, sleep and forced decision stop as interrupted, not completed. Released Erin cannot initiate thoughts/routines or receive private dialogue; a late AI response from the old state is invalidated.
- Equip the carried mastered heels with feet available to instantly become Erin again. Ordinary first wear without mastery still starts gradual transformation at stage1. Worn cursed heels, combat, footwear and repository/carry restrictions cannot be bypassed.
- No changes to existing permanent mastery awards. The v1.0.91 ordinary route still needs both100 progress and0 influence; cooperative Erin mastery still needs100 trust.

## Worker deployment

Frontend publication does not update Cloudflare. Replace the existing `epi-center-ai` Worker entry module with `services/ai/deploy-worker.mjs`, keeping existing secrets and bindings, then Deploy. Or use the existing repository/Wrangler deployment. The prepared Worker reports **character-embodiment-v3** in health/usage. The prior owner-confirmed deployment was character-voice-v2; this release does not claim the new Worker is deployed. No secret or paid model request is needed to verify the version.

## Verification and owner retest

870 named automated cases plus entity assertions pass, including11 new release/identity cases and the new Worker contract case. Rules cover persistence, original state preservation, blocked release, gradual unmastered wear, interrupted routines, inactive dialogue/time, stale-response invalidation, private-only ownership and old-history exclusion. Worker bundle correspondence, syntax and module paths pass. Browser/deployment evidence is recorded separately when observed.

Owner: test an existing mastered Erin save, remove heels, release, reload and re-equip. Test an unmastered save remains trapped after removing heels. After deploying the Worker, test short direct questions, ownership language, full-trust private personal interest, contextual postponement at work, and absence of repetitive gestures. Paid Featherless voice quality and native Android are not inferred from automated checks.

v1.0.91 runtime was already published at cc77c6bafc9307374e0eec2c710853d407424ff6; Pages run43352291411 succeeded and all12 changed runtime files matched deployed bytes. Its incomplete live canine UI walkthrough is carried forward here. Future canine encounters with roaming NPCs still depend on the real roaming-NPC scheduler and authored NPCs; they are not implemented by these releases.
