## v1.0.105 implementation update

The approved first cat/daily-life package is implemented; see [current implementation and limits](PRIYA-CAT-IMPLEMENTATION.md) and [acceptance checklist](V1.0.105-OWNER-ACCEPTANCE.md). Earlier draft/deferred statements below describe previous checkpoints. Publication evidence belongs in CURRENT-STATUS.md.

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

## Whole-apartment palette correction — owner confirmed

Owner directs a consistent holistic/crystal-energy atmosphere throughout the living room, bedroom, walk-in closet, bathroom and hallway storage. Use warm cream/ivory, oatmeal, pale stone, pale natural wood and soft sage; avoid sharp or saturated red/blue contrasts. This supersedes earlier rust cushion, teal backsplash/towel and stronger accent-color descriptions. The approved portrait remains unchanged.

Hallway displays are softly printed **chakra and acupuncture charts**, not Erin-style portraits. Keep their linework/tones subdued rather than defaulting to bright rainbow chakra colors. A browsable hallway-closet fixture follows the same neutral palette; no new room geometry or household possessions are granted. These express personal spiritual/decor interests, not clinical effects or a treatment mechanic.

Carry the neutral/soft palette into the approved household catalogue and coordinated wardrobe presets: replace proposed stronger rust/navy accents with taupe/stone/oatmeal alternatives where appropriate, retaining the existing approved teal/cream portrait outfit as its established reference. Exact bright contrast pieces are not to be introduced by default. This follow-up is on rebuild only, not published.

## Owner review — selection approved; distinct catalogue and wardrobe presets required

Owner reviewed the selection favorably and confirms using it for the next build. Priya must have her own furniture, item placement, care products, food and wardrobe rather than copying Erin’s household. Only the general apartment connections and reusable drawer/action infrastructure are shared. Current runtime already has distinct furniture/decor; the newly approved household catalogue is not yet implemented or published.

Wardrobe must be as developed and browsable as Erin’s, including coordinated presets and individual pieces. Initial approved-draft combinations to implement:

| Preset | Coordinated pieces |
| --- | --- |
| Teal work | Approved teal draped blouse + cream wide-leg trousers |
| Ivory work | Ivory draped blouse + navy wide-leg trousers |
| Rust work | Muted rust wrap-style top + charcoal trousers |
| Casual hosting / evening | Sage midi dress + oatmeal cardigan; sandals where appropriate |
| At home | Cotton lounge trousers + loose top |
| Yoga | Yoga leggings + breathable exercise top |
| Jogging | Jogging clothes + light zip jacket + existing jogging sneakers |
| Bedtime | Soft cotton lounge basics, with ordinary private underlayers |

Existing flats/alternate-work-shoe rotation remains authoritative; outfit presets must not duplicate the original cursed pair or silently replace a currently worn object body. Exact daytime outfit selection should use recorded dressing actions rather than changing clothing remotely. These are Priya’s own wardrobe records, not player inventory rewards. Guest access and private possessions stay distinct.

Functional care remains mandatory: each approved usable product needs an actual action, saved effect/history and narrative context, following the tested Erin shower correction. Foods require actual saved stock, not dialogue-generated servings. This approval authorizes implementation; it does not mean those household actions have already shipped.

## Functional-use requirement confirmed

Owner requires every usable care product to have an actual saved action and narrative/dialogue reference, including Erin’s existing shampoo/conditioner. The care/entry candidate is tested separately; proposed Priya product contents below remain for review, not approved stock. See [care-use contract](HOUSEHOLD-PRODUCT-USE-CONTRACT.md).

# Priya’s household — selection for owner review

Historical draft status: proposed selection. The owner approval above supersedes the review-pending status; implementation is still outstanding. Base public version: v1.0.102. Owner requested a concrete draft that can be revised, with routine detail useful to ordinary guests and eventual pet/footwear viewpoints. Cat gameplay remains deferred.

## Confirmed access contract

Recognized friends may visit with ordinary permission when Priya is actually home and explore the apartment without completing the flats curse or a cat arrangement. Named friends are **Erin Lillard, Lena Ortiz and Maya Bennett**. Appearance/voice recognition still applies; a hidden player alias or ownership of their forms is not recognition. Named friends’ fuller NPC lives/forms must not be invented merely to fill a visit.

Friendship access is independent of romance. A mutually chosen relationship dynamic with a friend does not require the future cat arrangement. The cat proposal belongs only to the already-designed optional response to an excessively forward/vulgar romantic approach; it is not an automatic consequence, punishment, mandatory prerequisite or response to every flirt. This records a future boundary; it does not implement the cat feature. Apartment exploration does not automatically grant ownership of possessions, notebook contents or intimacy.

## Proposed wardrobe

| Location | Selection | Everyday use |
| --- | --- | --- |
| Hanging rail | The approved teal draped blouse; ivory draped blouse; muted rust wrap-style top | A small work capsule with Priya’s flowing, individual silhouette |
| Hanging rail | Cream wide-leg trousers from the portrait; navy wide-leg trousers; charcoal ankle-length trousers | Reusable combinations rather than a different outfit every day |
| Hanging rail | One soft sage midi dress and a light oatmeal cardigan | Casual hosting or an uncomplicated evening out |
| Dresser | Soft cotton lounge trousers, two loose tops, ordinary underwear and socks | Comfortable home basics; private clothing remains private |
| Dresser | Yoga leggings and a breathable exercise top; jogging clothes and a light zip jacket | Existing morning practice and weekend jogging |
| Shoe shelf | The unique original size-seven flats; existing jogging sneakers; plain low block-heel work shoes; simple flat sandals | Keeps the established physical pair unique; proposed alternatives support the saved weekday rotation |
| Closet bench | A folded throw and a small reusable tote | An ordinary place to sit and change shoes; no item reward |

Work colors center on teal, cream, navy and muted rust. Fabrics look soft and draped rather than sharply tailored. Exact outfit combinations can vary; this draft does not change her approved body or portrait. No blanket uniform, invented dress code or automatic clothing transformation.

## Proposed personal care

- **Hair:** gentle shampoo, conditioner, a leave-in cream, a wide-tooth comb and a hairbrush for her existing flowing waves. Hair ties and a plain clip stay in the bathroom drawer.
- **Skin:** a gentle cleanser, moisturizer, sunscreen, hand cream and lip balm. These are ordinary care items, not health or stat effects.
- **Makeup:** light tinted base, brow pencil, mascara and a muted rose lip color; a small makeup bag rather than a salon-sized collection.
- **Signature scent:** retain the confirmed herbal perfume; proposed notes are soft rosemary and citrus. Exact notes remain a review choice.
- **Bathing:** mild soap/body wash, ordinary deodorant, teal towels and cotton washcloths. No infection, medical treatment or exaggerated bodily deterioration.
- **Shoe care:** a small brush and cloth beside the low shelf; a regular place for jogging sneakers to air after use. Ordinary wear, warmth and faint residual scent can ground narration without escalating into gross-out material.

Existing washing/dressing routines should use the existing clock and care systems. The draft adds no fixed new durations, clinical claims, new needs meters or guaranteed daily product use. Private care is not automatically performed in front of guests, and a pet/object viewpoint does not remove privacy boundaries.

## Proposed food, tea and snacks

| Preference | Proposed selection |
| --- | --- |
| Morning tea | Ginger-cardamom black tea, with milk/sweetener available by preference |
| Quieter evening drink | Mint herbal tea |
| Savory snack | Lightly salted crackers and roasted almonds |
| Sweet snack | A few squares of dark chocolate |
| Fresh snack | Apples or grapes; plain yogurt with a little granola |
| Workday food | Ordinary leftovers or a grain/vegetable lunch prepared the previous evening |
| Guest offering | Ask what the guest wants; offer a drink and whichever snack is actually stocked |

These are individual draft preferences, not dietary assumptions based on ethnicity. No vegetarian status, allergy, intolerance, religion-based restriction, calorie target or medical diet is assigned. Stock must be finite and saved before any serving/consumption system is implemented; dialogue cannot create groceries or a completed meal.

## How these details support scenes

- Getting ready can draw on an actual selected outfit, the cardigan on a chair or the sound of a brush being put away; narration cannot invent a completed grooming action.
- Footwear impressions can distinguish the actual walking/sitting/removal and shoe-storage states, with the existing herbal scent. They cannot see through furniture or hear remote/private events.
- An eventual pet viewpoint may notice permitted nearby routines and ordinary scents. It does not imply that human snacks are suitable pet treats or automatically edible by every form.
- A real friend visit can offer a stocked drink/snack and a recorded rom-com session without any curse requirement. No guest participation or reaction is fabricated.

## Implementation order after review

1. Add permission-based friend entry and identity-bound visit persistence, separate from curses and romance.
2. Map the selected wardrobe/care objects into the existing room/object/storage drawers without granting possessions to the player.
3. Add actual saved stock and serving/consumption only through existing systems, with form-appropriate eligibility.
4. Feed recorded actions and visible/local details into narration; test saved progress, privacy, inventory conservation and no curse gating.

Review choices: change any proposed item, scent note, tea or snack; no additional choice is required to keep the confirmed access contract. Do not publish this draft as approved household content before owner review.
