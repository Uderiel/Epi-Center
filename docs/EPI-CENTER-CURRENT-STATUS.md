# EPI-CENTER — CURRENT DEVELOPMENT STATUS
Updated: 2026-10-25 · v0.8.61 user results received
**v0.8.62 corrective HTML candidate created locally; NOT committed/deployed to GitHub Pages, NOT browser-verified.** Download and test candidate separately. Keep v0.8.61 as known deployed build.
Results: 16 pass, 8 fail, 1 not tested (A1–A7, B1–B6, C3/C5/C6 pass; C1/C2/C4/D1/D2/D5/D6 fail; D4 not tested). D3 button passed but behavior is conceptually incorrect.
Candidate v0.8.62 targets: reapplication timestamps; shoe laundry tags; carried bathroom inventory; accessory equipment including rings/bracelet; separate menstrual protection state; removal of standalone routine-hygiene actions; resting heating pad interaction.
**Unverified or incomplete in candidate:** actual browser paths, item state unification, menstrual saturation/leak/stain consequences, shampoo/conditioner as part of real shower, heating pad contextual room IDs, accessory presentation and full regression. Do not merge without user tests.

# EPI-CENTER — CURRENT DEVELOPMENT STATUS
Updated: 2026-10-24
Repository: https://github.com/Uderiel/Epi-Center
Latest user-uploaded build: v0.8.61
Play: https://uderiel.github.io/Epi-Center/epi-center-v0.8.61-scent-grooming-records.html

## Active section: Bathroom and grooming
Work on one section at a time. Do not mark an item complete until the user verifies it.

### User-confirmed passes
- Sink/curling iron navigation works on the tested path.
- Curling and facial skincare appear in existing Character fields and persist across reload.
- Curling and facial-care effects expire after 24 in-game hours.
- Bathing removes curls, facial care and makeup.
- Bubble bath is reflected in subsequent bath text.
- Apply/remove makeup updates Face.
- One Brush Teeth control replaces separate toothpaste action.

### Awaiting v0.8.61 user tests
- Exactly one Apply Makeup and one Remove Makeup control in Sink & Mirror.
- Dresser lotion applies and updates Scent & Physiology, not Face.
- Dresser perfume applies and updates Scent & Physiology.
- Lotion/perfume expire within 24 in-game hours and clear appropriately on bathing.

### Critical separate bug
At 100% influence Erin must execute real autonomous routines, including moving, grooming and sleeping, with persuasion possible. Current announcements repeat at inappropriate hours and cause no actual actions. NOT FIXED. Office not yet implemented; no absence penalties.

### Other outstanding sections
2. Clothing/accessories/laundry: missing equipped accessories, footwear laundry tags, stranded legacy items, washer UX.
3. Transformation/appearance: stale DEV stage appearance, portrait, face/neck/voice descriptions.
4. Erin autonomy/trust and physical-action interpretation.
5. Physiology/menstrual hygiene/notifications/resilience source.
6. General navigation, persistence and UI regression.

## Rules for continuation
- On failed test reports, implement and deliver a corrective patch without making the user ask again.
- One checklist section at a time; remove verified passes from active checklist.
- No duplicate panels or new fields when an existing contextual section can be used.
- Preserve saves and single-source inventory identity.
- Distinguish syntax checks from actual browser verification.
- Include latest deployed play link in every response.
- Read latest HTML and project docs before changing code.
- Update handoff, changelog, and current status at documentation checkpoints.
- Android Chrome is the main test platform.
- The repository handoff and changelog still showed v0.8.51 when last inspected, despite HTML builds uploaded through v0.8.61.
