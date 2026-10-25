# Epi-Center — Changelog
Updated 2026-10-24 · latest build v0.8.61

## v0.8.61 — Scent & Grooming Records
- Removed duplicated makeup controls from the existing Sink & Mirror view.
- Connected dresser-applied perfume and body lotion to the existing Scent & Physiology record; body lotion no longer belongs to the Face skincare list.
- Added 24-in-game-hour expiry for dresser body lotion and bath cleanup.
- Verification: JavaScript syntax passed. Android/browser behavior pending user confirmation.

## v0.8.60 — Dresser Grooming & Oral Hygiene
- Added dresser item Apply flow and consolidated toothbrush/toothpaste into Brush Teeth.
- User confirmed Brush Teeth works and dresser products can be applied, but found incorrect placement of lotion and missing perfume appearance status.

## v0.8.59 — Grooming State
- Temporary hair/skincare/scent expiration and bath cleanup; makeup-to-Face updates.
- User confirmed styling and facial prep expire after 24 hours; bath clears makeup, styling and facial care; makeup appears in Face; toothbrush alone brushes teeth.
- Dresser application remained incomplete.

## v0.8.58 — Bathroom Grooming & Appearance
- Displayed curling and facial skincare in existing anatomical appearance fields.
- User confirmed these persisted across reload and time advancement.

## v0.8.57 — Bathroom Navigation & Hair
- Adjusted fixture navigation and Back behavior.
- User confirmed bathroom navigation, but hair styling did not initially appear in Character.

## v0.8.56 — Bathroom Single Panel
- Began replacing duplicated fixture menus with contextual views and stateful item actions.

## v0.8.55 — Integrated Object Fixes
- First attempt at bathroom item actions, hamper bulk actions, accessory handling and routine events.
- User identified persistent failures, especially item loss, duplicate overlays, and routine announcements without actions.

## Known unresolved work
1. **Bathroom:** Verify v0.8.61 scent/body-lotion placement and duplicate-control removal; remaining shampoo, menstrual hygiene, heating pad, product actions, state and contextual navigation checks.
2. **Autonomy:** At 100% influence Erin must actually execute her own schedule and decisions, not merely announce intentions. Current evening/morning routine announcements repeat at incorrect times and execute no travel, grooming or sleep.
3. **Inventory:** Equipped accessories can disappear from visible equipment; footwear incorrectly carries laundry conditions and is hamper-depositable; legacy garments are stranded; laundry interface duplicates remain.
4. **Transformation:** Stage overrides do not reliably synchronize all appearance fields or portrait.
5. **Notifications:** Dismiss-all and unread-control behavior not implemented.
6. **Needs and physiology:** Comprehensive persistent needs, hygiene, menstrual protection and related consequences remain incomplete.
7. **Audit:** Some mental resilience changes still lack reliable source attribution.

## Release protocol
- One checklist section at a time. Fix user-reported failures in the next response with a new patch where possible.
- Only close checks after user confirms in browser.
- Do not create new panels when an existing section can contain the interaction.
- Documentation refresh every five versions: next checkpoint v0.8.65.
