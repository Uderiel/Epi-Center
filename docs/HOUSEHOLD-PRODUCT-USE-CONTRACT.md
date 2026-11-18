## v1.0.103 — household interactions finished, published and verified

**[Play v1.0.103](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.103)**. Branch `rebuild/1.0-foundations`; tested gameplay commit **`76c4942569facb569160e8b2b003ff4157932cf1`** is pushed to rebuild and main. Pages build1379469596 and [Actions run44213172819](https://github.com/Uderiel/Epi-Center/actions/runs/44213172819) succeeded. All14checked public runtime files, including the unchanged approved portrait, match the tested local bytes. Evidence: `docs/releases/v1.0.103-live-verification.json`.

**1,090named automated cases plus entity assertions across60suites;65local and65public isolated Chromium groups PASS.** Syntax/module paths/whitespace PASS. Public checks exercise ordinary friend permission/entry/exit, actual private outfit change, stock decrement/preparation/consumption/meal/snack, saved ownership/stock/outfit, both apartments’ product/shower controls and reload, old drawers/NPCs/flats/Erin/jogging, and mocked AI/settings. Browser fixtures use consistent canonical scheduler clocks; no real save is reset. Paid-provider prose quality/native Android remain untested; cloud Chromium needed its certificate-trust workaround, while independent file verification used the validating HTTP client.

Implemented: Priya’s own17pieces/eight coordinated presets/three custom slots; timed private requested outfit changes with actual worn records; finite tea/snack/ingredient stock, additions, meals, consumption and dishes;23usable care products with saved body effects; functional Erin shower products and preserved bath preparation; normal identity-bound friend entry; whole-apartment neutral crystal styling and subdued hallway chakra/acupuncture charts. Ownership stays separate, original saves/appearance/resources and the unique flats lifecycle remain intact. [Full implementation](PRIYA-HOUSEHOLD-IMPLEMENTATION.md) · [Current owner checklist](V1.0.103-OWNER-ACCEPTANCE.md).

Limits: no new automatic restocking or complete autonomous household/social scheduler; outfit changes are requested actions and retain the existing footwear routine. Lena/Maya receive friend-identity policy without spawning their unimplemented full NPCs. No new cat/collar, disease or medical/combat system is introduced. Approved outfit and food actions are implemented, not merely reserved for a future draft. No runtime deployment blocker remains.

**Exact next action:** take the owner’s queued testing corrections, preserve their saves, reproduce each against this version, and fix them in the next candidate. All relevant handoff/status/plan/design/changelog/README documents are updated. This following evidence commit changes documentation/capture only; the gameplay commit above identifies the verified runtime. Earlier notes saying household interaction is still pending or publication is incomplete are historical and superseded.

## v1.0.103 — complete household candidate tested; publication in progress

Branch `rebuild/1.0-foundations`; parent `188590a`. Owner approves the concrete household selection and neutral holistic palette, and explicitly requires outfit/food interactability **before publishing**. This candidate implements it:17pieces/eight presets/three custom outfit slots, real private NPC outfit-change jobs, separate Priya ownership, finite food/tea/ingredients, preparation/additions/consumption/dishes,23usable care products and actual shower/grooming effects. No approved household selection is left as a description-only promise. [Implementation](PRIYA-HOUSEHOLD-IMPLEMENTATION.md).

Also includes normal identity-bound friend entry, Erin’s functional shampoo/conditioner and preserved bath preparation, whole-apartment soft neutrals/crystals and hallway chakra/acupuncture charts. Existing drawer/clock/resource/appearance systems are reused; original saves, unique flats and deferred cat rules are preserved. Player clothing is not forcibly changed or awarded. Footwear retains its established lifecycle.

Verification: **1,090named automated cases plus entity assertions across60suites;65local isolated browser groups PASS**, including real outfit/tea/snack/meal/care controls, saved ownership/stock/jobs, private changes, old drawers/NPCs/Erin/flats/AI and syntax/module paths/whitespace. [Owner checklist](V1.0.103-OWNER-ACCEPTANCE.md). Current reports: `docs/releases/v1.0.103-tests.json`, `docs/releases/v1.0.103-browser-checks.json`. Public verification follows; no completed live103claim yet.

Limits: finite stocks have no new automatic restocking; autonomous daily household scheduling is not added; Lena/Maya have friend-identity policy, not newly spawned full NPCs. Cat/collar, native Android and paid-model quality remain deferred/untested. Exact next action: commit/push, publish this tested candidate, verify public bytes/browser, record deployment evidence, then take the owner’s queued testing corrections. Earlier notes saying the approved catalogue is still unimplemented are superseded.

# Functional household care — next-build candidate v1.0.103

Owner requires supplies presented as usable to perform actual, saved actions and to be referenced in narration/dialogue. This applies to Erin’s existing apartment and any future approved Priya household catalogue. Descriptive drawers alone must not imply functional product use.

## Implemented candidate behavior

- Erin’s normal12-minute shower applies available shampoo and conditioner unless an explicit product selection was queued. Selecting either item through its actual drawer Use action costs1minute and saves it for the next shower/hair-washing bath. Selection is not premature application. Actual product application records names/timestamps and increments the bottle’s applications without deleting a reusable bottle or inventing its remaining volume.
- Washing/conditioning projects into current hair description for24game hours without rewriting original appearance. Styling, makeup removal and existing bathing care costs/caps remain intact.
- Bath additives are used by the25-minute bath, preserved across an intervening shower, then cleared after use. Actual names appear in the receipt and saved bath record. Floral bath-oil scent is reflected in current appearance; no new rose-specific brand/scent is invented.
- Bath-pillow preparation is saved and used by a real bath; showering does not consume it. Towels record drying. Toothpaste delegates to the existing toothbrushing action; toilet paper delegates to actual toilet/hygiene use. Other existing care supplies record use rather than a no-state generic success. No new combat healing, medication dosing, illness diagnosis or health system is introduced.
- Only physically available products can be selected/applied. Room, body capability and combat guards remain. The current catalogue’s reusable supplies are not a new quantity/depletion economy.
- Private Erin AI context includes actual hair-wash products, bath additives and care records. Public NPC packets do not receive private care history. Narration cannot invent application, stocks, medical outcomes, mastery or rewards.

## Future Priya mapping, after owner review

For every approved care product, define its real room/storage, eligibility, physical action, duration, saved effect/history and narration context. Reuse existing shower/bath/grooming systems. Wardrobe/care/snack selection is still [a proposal](PRIYA-HOUSEHOLD-SELECTION-DRAFT.md), not automatically approved stock.

## Verification and release state

Candidate passes1,074named automated cases plus entity assertions across59suites and59local isolated browser groups. Includes actual item buttons/shower action, private context, reload, bath/shower preparation, identity-bound guest entry and prior apartment/flats/NPC/AI regression. Reports: `releases/v1.0.103-tests.json`, `releases/v1.0.103-browser-checks.json`. No paid model or owner-save test. This is not yet deployed; public remains v1.0.102.
