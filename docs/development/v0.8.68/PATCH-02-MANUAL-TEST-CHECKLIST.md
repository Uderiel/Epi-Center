# v0.8.68 Patch 02 — owner acceptance checklist

Source: `epi-center-v0.8.68-manual-acceptance-repairs.html` on `development/v0.8.68`.
Source commit: `a366401479ce6266e8c3ced52ca4d22049e15e67`.
Status: **Source committed; browser verification and preview redeployment pending.** Do not mark accepted based on code review alone.

## Protect your character first
- [ ] Export the existing **development** character save before testing. Verify the exported file is present and keep it outside browser storage.
- [ ] Record the current development preview URL and browser/profile. Do not clear site data, change origins, reset the character, or import over an occupied save.
- [ ] Test with a disposable copy/profile if possible. Existing save key and preview-key rewriting are unchanged; preserving a key does **not** guarantee storage persistence across origins or browsers.
- [ ] After any updated preview deployment, confirm your existing character, location, inventory, heels state, appearance, and draft behavior before proceeding.

## Heels pickup and visibility
- [ ] On a disposable character, collect the unique red heels once at Old Transit Courtyard.
- [ ] Verify exactly one `shoes-0` is owned and the courtyard no longer offers a second pair.
- [ ] Open Equipment. The **Feet** heading should show the cursed heels' name and **Carried** without expanding multiple sections.
- [ ] Equip the heels; the same heading should show **Equipped**. Confirm no duplicate footwear is equipped.
- [ ] Reload and confirm the same owned/equipped state.

## Removing heels and live-feed continuity
- [ ] With heels equipped, try removing at high/100% influence using a disposable profile.
- [ ] On a successful removal, Equipment should immediately show **Carried** and a visible removal-success message; Play/live feed should record the result.
- [ ] On a failed removal, Equipment should immediately show **Equipped** and a visible failure message; the roll and existing resistance rules must be unchanged.
- [ ] Type an unfinished message into the live-feed input before using the Equipment action. Confirm the draft survives and can still be submitted.
- [ ] Verify that neither result changes mental influence, ownership, or curse progress beyond existing gameplay effects.

## DEV transformation 23/23
- [ ] Record original appearance and current physical progress on a disposable profile.
- [ ] In DEV controls set physical transformation to **23/23**.
- [ ] Confirm the current anatomy display includes changed regions and the corresponding 23 history details, not just a 23/23 counter.
- [ ] Confirm the **current appearance fields** visibly reflect Erin's transformed features (not just the anatomy history). **This requires explicit acceptance and may remain unresolved.**
- [ ] Confirm original appearance stays separate and unchanged; mental influence, trust, stress, ownership, and mastery are not silently modified.
- [ ] Reload and verify both current transformed appearance and original appearance.
- [ ] Test changing the DEV stage down and up again; details should match the selected step without duplicates.

## Wider UI acceptance and regressions
- [ ] Relevant status should be visible without searching multiple tabs/cards or repeatedly scrolling.
- [ ] Live-feed draft text, caret, and active typing should not be interrupted by passive updates or equipment actions.
- [ ] Check Erin's reading refusal, apartment arrival ordering, travel-route narration, and duplicate feed entries from the outstanding-bugs checklist; these are **not closed by Patch 02**.
- [ ] Verify on desktop Chrome and Android Chrome.

## Reporting a failure
Record source commit, deployed URL/origin, browser, existing/disposable save, influence/trust/stress, 23-step progress, worn/carried state, exact clicks/input, feed narration, expected/actual result, and whether reload changed it.

## Deployment boundary
The owner-private Sites preview at https://epi-center-development-v0868.icysun15.chatgpt.site/ is **not automatically rebuilt from GitHub**. Until an explicit new deployment is confirmed, it remains an older snapshot and **cannot validate Patch 02**. Production `main` and the public v0.8.67 build remain untouched.
