# v1.0.97 — Intro, composer, appearance and narration

Scope: resume after v1.0.96; prioritize the owner's AI narration and current interaction reports before further staff/content expansion. Preserve all existing saves and canonical outcomes.

- The composer now initializes its saved channel on every render. Previously the rebuilt recipient row stayed hidden, inviting another NPC click that cleared the selected recipient. Re-clicking the active channel now preserves selection. A valid selected entity survives a stale search filter; absent recipients are cleared rather than remotely addressed.
- First Steps has a persistent Next step panel with actual Eve/Path actions. It follows acceptance, shop visitation and return, and disappears after completion. Eve interaction is guarded by physical Spire presence.
- Current appearance is visible beside the occurrence feed, updating from Erin stage one and partial canine encasement onward. Modified regions replace original field values; untouched regions remain original. New canine encasement overlays earlier Erin changes and records both affected sides independently. Original Appearance remains immutable and separately available in Appearance. The compact live record scrolls and preserves expansion across redraws. Stage changes carry a bounded physical snapshot into narration. No AI changes appearance state.
- Erin's will-release control is in Equip under the equipped form, alongside Kibbles's equivalent control. Form is for influence/mastery/routines. Unmastered heel removal retains its attempt/save wording; mastered heels show Remove heels and no longer say the curse is active. Re-entry remains through the physical mastered heels in Items, retaining existing lifecycle rules.
- Transformation narration can run on clock-driven physical changes, without requiring a transient click/text flag. Multiple Erin stages from one wait produce one narrative request. Worn-time influence receipts remain mechanical. Canine coverage changes emit a recorded transformation event. Narration gets the actual current appearance, not an instruction placeholder. Unrelated NPC commuting cannot invalidate a narrator response. Unhandled Location text now has an eligible attempt/context narration entry without claiming a mechanical result.
- New connections default the narration checkbox on; older saves with an absent narration preference follow AI enabled. An explicit saved false remains an opt-out: Settings → Expand world and transformation narration must be enabled to use it. Existing private backend and budget accounting remain; no Worker redeployment is needed.

## Owner retest

1. Resume your current slot. Select NPC and a present person, type a draft, and let several clock minutes pass. The same channel, recipient and draft should remain. Repeat with Form and after reloading.
2. In a fresh unused slot, follow Eve's Next step panel through First Steps and the return reward. Existing slots are not reset by this release.
3. Equip the heels at stage zero; check Current appearance beside the feed immediately. Advance through partial stages: changed regions update, unchanged regions remain original. Appearance retains the separate original record. Repeat with partial Kibbles coverage.
4. With mastered Erin, inspect Equip: Remove heels, then Unequip Erin → original form. Items → mastered heels → Equip restores Erin. Form should not duplicate release controls.
5. With your existing AI connection and narration enabled, trigger a recorded transformation through Wait or live time. Expect one generated expansion plus a collapsed canonical Game result; appearance follows the canonical change regardless of response success. Unrecognized Location text should receive contextual attempt narration. Check real model quality and usage on your device.

Automated coverage uses simulated provider responses and UI adapters. Paid model quality and native Android acceptance remain separate owner tests. Local Chromium launch was blocked by the environment's socket permissions; no local browser success is claimed.

## Verification and publication state

944 named automated cases plus entity assertions PASS; JavaScript syntax, module paths and git whitespace checks PASS. Provider calls are simulated. Existing live title v1.0.96 was observed in the cloud browser; the candidate has not been browser verified or deployed. Both main/rebuild publication and a separate candidate branch push were rejected by automatic approval review for missing explicit publication authorization. No remote branch changed. Owner approval to push and publish is the next action.

## Publication verified

Owner approved publication. Gameplay commit bc5b8042ef9fcfdc6a7413279f09e18e0ee1b164 is deployed on Pages run43636016544 (success). All eight changed deployed runtime files match tested source, and a fresh944-case run passes. Scoped live checks passed fresh Eve guidance, NPC/Form targeting and draft persistence, stage1 and3 appearance, original/current separation and title version. Evidence: releases/v1.0.97-live-verification.json. Earlier blocked/pending notes describe the pre-approval checkpoint and are superseded.
