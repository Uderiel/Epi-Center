## Owner correction — Resistance hideout invitation, NOT a separate entrance quest

The hidden route leads to a Resistance HIDEOUT: NPCs and players opposed to the Countess, aware Epi-Center is not what it seems, seeking all the Hub Crystals to activate the Departure Spire. These are owner-level faction/location goals, not a functioning new destination, implemented quest, named membership roster, universal omniscience or guaranteed endgame escape. Use owner’s current Hub Crystals/Departure Spire wording; older Hub Cylinder progression terminology is not automatically rewritten or equated by this note.

There is NO separate quest specifically for the entrance. Charity may invite the player down once BOTH conditions are met: +100relationship (the same per-player meter previously called trust) AND successfully conquering the twentieth mask-wearing MASTERY CHALLENGE. Twenty ordinary shifts alone are insufficient while its trial is unfinished. This supersedes the prior five-shift hidden-access milestone; do not leave an alternate five-shift entrance unlock. Preserve all unrelated gold/discount/relationship rewards, including the existing third/tenth/fifteenth discount tiers. Do not invent an additional entrance quest or silently add extra crystal-count gates to this latest stated invitation condition.

The actual invitation/disclosure remains Charity’s action; eligibility does not teleport the player, open every private room or let generic inspection/search/AI reveal the route. The route/Hideout itself remains later location work. Owner’s primary current goal is an explorable functional shop with transactions, not designing Charity’s entire quest catalogue or the Resistance now.

Implementation correction: ordinary retail/fitting/checkout is a tested UNPUBLISHED foundations slice. Mystery Box and limited enchanted purchases/effects are still unimplemented even though their behavior/prices are agreed. Do not tell the owner that players can already buy boxes, that all store functionality is complete, or ask them to re-decide approved box/effect rules. Continue implementation on the SAME foundations branch; no branch-selection question is needed.

## Protected trap suits are not merchandise

Owner confirms exactly3Countess-supplied skinsuits, secured by Charity and never sold/offered for fitting: permanent base-form replacement/NPC-role assignment. Charity warns admitted visitors about effects but not source. Distinct from her temporary work mask; not part of retail/MysteryBox/weekly stock. Precise hallway threshold remains to confirm (owner suggests+70); explicit invitation still required. Full rule in CHARITY-LEGACY-AUDIT.md.

## Full-location review proposal

CHERISHED-TOUCH-COMPLETE-LOCATION-DRAFT.md now covers exterior, every room, counter working space/access, spare skinsuits, concealed route and Charity’s private wardrobe/food/care/pastimes. These new details are proposals for owner review; preserve all already approved retail/quest rules below.

## Ordinary sales-floor slice implemented on development

See CHERISHED-SALES-FLOOR-IMPLEMENTATION.md for actual implemented drawers, configurable bundle, fitting, basket, ordinary checkout and owned carried clothing. Earlier blanket statements that no shop code exists are historical. Limited enchantments, Mystery Box and Charity systems remain pending; public109unchanged.

## Owner-approved enchanted prices and weekly stock caps

Owner accepts the proposed seven-item pricing/availability set:

| Enchanted item | Base gold | Shelf stock cap |
| --- | --- | --- |
| Dryweave jacket | 350 | 2 |
| Scent-masking scarf | 600 | 1 |
| Lantern brooch | 250 | 2 |
| Quietstep shoes | 500 | 1 |
| Shirt, +10maximumHealth while worn | 500 | 1 |
| Pants, +10maximumStamina while worn | 500 | 1 |
| Hat, +10maximumResolve while worn | 500 | 1 |

Monday06:00deliveries replenish each of these items UP TO its cap, without accumulating unsold extras. This is not an additive shipment of another full cap every week. Apply approved shop discounts and the rolling24-hour per-player enchanted purchase restriction; at most one of these enchanted pieces in a transaction. Mystery Boxes remain separate/abundant with their lifetime3quantity cap and no enchanted cooldown; regular clothing replenishes immediately and does not sell out. Owner approval is captured in the follow-up voice transcript (“Yes, that works”).

The ordinary and limited enchanted catalogue/price/availability rules are sufficiently defined to begin a staged retail implementation. Next build slice: reusable layered shop drawers, variant selection/configurable once-only bundle, fitting ownership, basket/atomic checkout/receipts, discounts/no returns, persistent bought items, capped Mystery Box random jewelry and worn modifiers, and weekly limited-stock/cooldown bookkeeping. Functional utility enchantments require actual weather/scent/light/noise adapters before being advertised/sold as working; do not fake them with descriptive text. Charity’s daily household/controller, dialogue/private disclosure, actual coverage quest and twentieth-mastery trial remain subsequent substantial implementation/design work, not completed by approving this table.

No gameplay code or publication changed by this approval record. Current live version remains1.0.109. Do not say the shop is built or keep implying background execution after ending the turn. Next exact action is to implement the approved first retail slice, resolving routine reversible details consistently with existing systems; genuinely missing major quest/trial parameters remain flagged rather than invented.

## Owner-confirmed resource maximum semantics

The enchanted shirt/pants/hat increase MAXIMUM Health/Stamina/Resolve respectively by10ONLY while actually worn. Owner explicitly approves normal recovery filling that extra capacity, no automatic current-resource grant/refill on equipping, and loss of the extra maximum when removed. Recompute from canonical body/form baseline plus valid worn modifiers; never add10again on each equip/render/reload, and never permanently mutate base pools.

On removal or incompatible equipment state, remove that item’s modifier and restore the appropriate current underlying maximum. Clamp current resource only if it exceeds the recomputed maximum. Preserve actual damage/spending/recovery history; do not restore a stale pre-equip current-resource snapshot or refill the baseline pool. Form changes must use the new actual body baseline and valid equipment state, without carrying an incompatible worn bonus. This confirms the previously proposed maximum-only/no-refill interpretation. Prices and Monday limited stock quantities remain to be reviewed. No runtime effect implementation by this design record.

## Owner-approved initial enchanted selection and resource clothing

Owner approves the proposed first four practical pieces/effect boundaries: Dryweave jacket, scent-masking scarf, Lantern brooch and Quietstep shoes. They are approved designs, not yet working runtime items; necessary weather/scent/light/sound hooks remain implementation dependencies. Keep their worn-state conditions, existing enchanted purchase limits and Monday deliveries.

Owner adds three enchanted clothing pieces:
- Shirt: +10Health.
- Pants: +10Stamina.
- Hat: +10Resolve.

These are resource-pool bonuses, not extra random attribute bonuses, and are separate from the Mystery Box’s random+1attribute. Exact product names, prices and weekly stock quantities remain to define. Clarification needed before implementation: whether+10raises the maximum/current resource pool while worn or provides some other effect. Recommended review interpretation: +10MAXIMUM of the named pool while actually worn, filled through normal recovery; no automatic refill from equipping. Removing it recomputes the maximum and clamps any excess current resource without mutating permanent base pools. Do not mark this recommended interpretation approved until the owner responds. No health/stamina/resolve item runtime change in this record.

## Owner direction — practical enchanted effects rather than more attribute bonuses

Owner wants the limited enchanted counter stock to emphasize practical effects, since Mystery Boxes already cover attribute bonuses. Confirmed example directions: an enchanted clothing item keeps worn clothing dry in rain/wet weather, and scent masking prevents detection of the wearer’s scent, useful against roaming dogs outside the outer loop. Effects should be helpful and bounded, not remove all danger. Do not reinterpret actual scent masking as an archetype/stat bonus or mere flavor text.

Code inspection: kibbles-behavior.js and existing animal routines track scent memories/marks and canine reactions. No general working weather/wetness controller or roaming-pack scent-detection resolver was found in the scoped hub/combat JavaScript search. The owner’s roaming-pack threat is a world-design requirement, not evidence that that complete mechanic is already live. These proposed effects need actual shared mechanics/adapters before functional sale; do not display an effect as implemented merely because its item has descriptive text.

First effect set for owner review (names/additional effects are proposals, not approved catalogue):

| Proposed item | Practical effect | Deliberate boundary |
| --- | --- | --- |
| Dryweave jacket/cloak | While validly worn, keeps wearer’s clothing dry from ordinary rain/splashes | No armor, cold/heat immunity, underwater protection or automatic drying of unrelated stored gear |
| Veiled-Scent scarf | Masks wearer’s body scent/fresh personal scent trail from scent-based detection while worn | Does not hide sight/sound, erase historical scent marks/trails or cancel an already visible confrontation; no automatic animal friendship/hostility |
| Lantern brooch | Modest local illumination in a dark space | Visible to others; no seeing through walls, map/secret reveals or universal night vision |
| Quietstep shoes | Dampens ordinary footstep/clattering-footwear noise | Does not mute speech, other actions or every movement sound; no invisibility or guaranteed stealth success |

Weather/scent need mechanical support; lighting and sound/detection effects also require authored functional hooks, not invented existing checks. Keep all effects tied to actual worn state/body-compatible slots, removable when unequipped, with clear narration and no base attribute mutation. Preserve other sensory/encounter routes, world presence and hidden-location disclosure gates. Legacy umbrella remains owner-awarded only; do not repurpose it as public weather stock. Price, weekly quantities, exact product choices, effect scope and their interaction remain pending owner review. Existing enchanted one-per-transaction/rolling24-hour rule and Monday06:00deliveries apply to the eventual approved limited display; Mystery Box exemption unchanged.

## Owner-confirmed universal layered item navigation

The drawer overlay pattern is a UNIVERSAL interface requirement for any item interaction with multiple layers, not a Cherished Touch/Tops-only feature. Reuse the existing shared drawer/navigation mechanisms and adapters for categories, containers, variants, nested storage and other multi-step item interactions. Avoid unrelated feature-specific modal systems or many simultaneously exposed input fields. One active layer, clear parent/Back, preserved selections and explicit final action apply across the game.

This approves the Tops example as a reusable pattern; owner does not require another category sketch before continuing. Existing households/office/storage adapters must be assessed against the shared contract rather than assuming every legacy interaction already complies. Updating this design rule does not constitute a game-wide runtime migration. No new implementation/publication in this record.

## Owner-approved drawer flow and checkout-wide one-time discount

The one-time10%discount applies to ONE ENTIRE CHECKOUT, not just a selected line item. Show it and the final total before committing payment; consume it only when checkout succeeds. Browsing, changing variants, fitting, abandoned baskets or rejected checkout must not consume it. The proposed flow uses one applicable discount, not accumulated percentage stacking; exact unused voucher inventory and rounding still require final policy.

Use the EXISTING drawer overlay system. Example hierarchy: clothing racks -> Tops -> male/female style -> neckline/sleeve combination -> color -> selected-item preview -> basket or optional fitting. The neckline/sleeve layer preserves both independent attributes: V-neck or crew neck, long or short sleeve (e.g. four explicit combinations). A selection opens the next drawer layer, with one active layer, Back navigation and choices retained. Do not flatten every option onto the sales floor or create multiple independently overlapping modal systems. Basic color choices explicitly include red, black, white, green and blue; gray is already part of the approved broader clothing examples.

Gender/style selection belongs to the ITEM, not a forced change to the player’s body, gender or active form. Preserve selected style/neckline/sleeves/color through Back, previews, basket, fitting, purchase, owned item, appearance and reload. Equivalent hierarchy applies to other category-specific choices and to each of the five configurable starter-bundle slots; do not charge or grant ownership merely for navigating layers. Stock/caps and actual prices/discounts remain enforced in canonical checkout, not just hidden UI controls. This is a confirmed design contract; no new drawer/checkout code is implemented by this record.

## Owner-confirmed Mystery Box exception — bulk purchase, permanent cap

Mystery Boxes are EXEMPT from the ordinary enchanted-merchandise rolling24-hour cooldown and one-enchanted-item-per-transaction rule. Charity has plenty of boxes, and a player may buy all THREE in one transaction or split those purchases across visits. After three successful purchased boxes total, the player is permanently cut off from further Mystery Box purchases. This is a quantity cap, not a three-transaction cap. Validate cart quantity against3minus the player’s actual purchased quantity before atomic payment/issuance. Track the completing player’s identity across forms, mask impersonation, storage and reload; Monday deliveries do not refresh the cap.

Three boxes cost450gold before applicable approved shop discounts. Each box yields its own real wearable item with its own stored random+1attribute roll. Boxes neither start nor consume/reset the separate ordinary enchanted purchase cooldown. Do not impose scarce weekly enchanted shelf limits on these abundant boxes. Keep their maximum3purchase rule, persistence, equipped-only bonus and physical jewelry limits intact. Ordinary enchanted merchandise still follows its one-per-transaction and rolling24-hour rule. No runtime checkout/cap implementation in this design entry.

## Owner approval — rolling24-hour enchanted purchase limit

Owner approves ONE enchanted purchase per individual player every rolling24IN-GAMEhours, with at most one enchanted item per transaction. This replaces the preceding proposed/pending cooldown status. Preserve the last successful enchanted purchase timestamp across visits, room changes, midnight, form changes and save/reload. Browsing, fitting or failed/cancelled checkout does not spend the allowance. Ordinary clothing purchases remain unrestricted by this enchanted cooldown. A transaction may include ordinary goods alongside its one eligible enchanted item; do not reinterpret the limit as one total cart item. Monday06:00restocking does not reset the player’s cooldown.

Still to confirm: whether Mystery Boxes count toward this shared enchanted purchase cooldown in addition to their maximum3purchases per player, and the finite enchanted catalogue/weekly counts. No runtime enforcement implemented yet.

## Owner-approved availability and Monday delivery schedule

Everyday clothing (regular tops, shorts, jeans and other ordinary clothing) never sells out. When a player purchases a normal item, another replaces it automatically. This explicitly supersedes prior proposed finite ordinary-stock/delivery assumptions. Do not invent a normal-clothing shortage, backorder or material-cost gate. Preserve individually owned purchased variants and their atomic payment/receipt even though shelf availability is replenishing. Bundle once-per-player and other transaction limits are not reset by automatic shelf replacement.

Enchanted merchandise is limited and CAN sell out. A player may purchase only ONE enchanted item per transaction, with a persistent restriction against immediately leaving and re-entering to start another purchase. Exact restriction duration is not approved yet. Review proposal: rolling24IN-GAME-hour cooldown per individual player between enchanted purchases, independent of current form, visits, save/reload or midnight. Do not implement a per-visit reset or call the proposed24hour period confirmed.

Deliveries arrive every MONDAY at06:00in-game. Schedule real weekly restock records once per delivery boundary and preserve them on reload; repeated entry/rendering must not duplicate a delivery or reroll stock. Exact enchanted restock amounts, item pool/roll policy, starting availability, missed-week handling, pricing and whether Mystery Box purchases share the enchanted cooldown remain to confirm. Ordinary clothing does not depend on these limited-delivery restocks. No shop stock/transaction/delivery implementation in this record.

## Owner-approved purchase policies and lasting wardrobe ownership

The45gold new-arrival bundle is available ONCE PER PLAYER, tracked against the actual player’s purchase history rather than form, current owned clothes or save reload. Each of its five chosen items still preserves its selected variant attributes. Existing Mystery Box three-purchase limit is separate.

Applicable discounts are applied/displayed BEFORE purchase/payment. There are NO RETURNS for products, including a buyer changing their mind or choosing the wrong color. Products are not sold with random defects. The player can review/change their selection before committing; after purchase wrong color is not a refund/exchange entitlement. Atomic failed/cancelled checkout and duplicate-charge prevention are transaction integrity, not an invented customer return policy. One-time discount transaction scope/consumption order and integer rounding remain to define; do not silently invent an exclusion or additive permanent tiers.

Purchased goods become individually owned, persistent player items, not temporary shop props or disposable outfits. Purchased clothing may be added to the player’s personal closet or dresser appropriate to its type, remains selectable for dressing/presets, and can be washed, re-worn or stored. Preserve color/cut/sleeves, ownership, condition and location through inventory, equipment, storage, laundry and reload. Wearing another form must not turn purchased player clothing into NPC-owned stock or remove unrelated NPC belongings.

The original player’s personal residence HAS NOT BEEN BUILT; owner confirms it as a future requirement. Do not invent an address, accessible room, automatic delivery/teleport to a nonexistent closet or completed household storage integration. Carry owned purchases in real inventory, then support actual permitted storage through existing/future residence adapters as those locations are implemented. Appropriate closet/dresser routing and wardrobe/laundry/preset access must be functional, not mere descriptive text. No purchase/storage/laundry runtime changes implemented by this design entry.

## Owner-approved jewelry stacking and physical limits

Attribute modifiers from multiple validly worn pieces MAY stack, including pieces rolled for the same attribute. Physical jewelry capacity limits prevent placing unlimited pieces on the same location: ONE bracelet per arm and ONE ring per hand. Owner’s final wording corrects the earlier spoken “two rings per hand” phrase; use one ring per hand. That permits two bracelets/two rings total on a normal two-armed/two-handed body, not one bracelet or ring globally. Do not combine bracelet/ring categories into a single slot or permit unlimited item-ID accessory slots to bypass these limits.

Each CURRENT Mystery Box jewelry piece still gives exactly+1to its single stored random attribute while worn. Better jewelry with larger bonuses is future content, not a higher-roll possibility or upgrade automatically added to this box. Wearing several valid+1pieces can yield a combined larger modifier; that is not a larger per-item roll. Necklace/anklet capacities, handedness selection/compatibility and the complete randomized item-type pool remain to be authored; rings here establish a general equipment rule, not automatic approval of a particular box drop distribution.

Implementation integration lead: current equipment-regions.js groups bracelets under arms, rings under hands and anklets under feet; its slot() maps ring/accessory slots to item IDs, which by itself is NOT the approved capacity enforcement. Add actual per-side/per-type jewelry slot validation in the shared equipment/attribute pipeline while preserving existing coverage/clothing behavior; do not claim it already prevents unlimited rings. No new runtime cap or bonus pipeline implemented by this design entry.

## Owner-approved Mystery Box — wearable random attribute reward

Price remains150gold. Each box contains wearable jewelry, with examples necklace, bracelet or anklet. Each awarded piece carries+1to ONE randomly rolled canonical attribute, independent of the player’s archetype/build. Owner’s spoken correction resolves the target to an attribute, not an archetype bonus. No tailored loot, guaranteed useful stat or archetype weighting. Do not invent additional curses, transformations or permanent stat points from the old mystery-item disclaimer.

Each player may purchase at most THREE Mystery Boxes. Track that cap against the actual player’s saved purchase history, not current form or a resettable owned-item count. Selling/unequipping, switching forms or reloading must not create additional purchase allowance. Each actual purchased item stores its rolled attribute and identity; viewing, trying on, equipping and reloading must not reroll it. Random selection must come from the implemented attribute registry; exact item-type distribution/selection and duplicate policy remain to be defined.

The+1is an equipped-item modifier active only while that actual jewelry is validly worn. Remove/suppress it on unequip or incompatible equipment state; do not permanently modify original/base/form attributes. The modifier must feed the actual effective attribute/roll calculation and matching UI, not just an item description. Respect canonical equipment regions/body compatibility. Do not silently decide same-attribute stacking across pieces, number of pieces wearable per region, or jewelry-type selection. Discount/voucher applicability to the150base price, integer rounding and final checkout need the common shop policy. Existing global discount promises remain; no new exclusion approved. Mystery Box transaction/equipment implementation remains pending.

## Owner-approved clothing customization and configurable starter bundle

All clothing supports player-selected colors and male/female options as appropriate; do not force a form/gender change or automatically choose an unwanted style. Exact fit/size policy and full color palettes remain to be defined. Preserve actual selected variant attributes in the item record so the rack/cart/receipt, inventory/equipment, appearance and narration agree. Do not replace chosen variants with a generic item after checkout or reload.

| Category | Confirmed choices | Approved base gold |
| --- | --- | --- |
| Tops | Color; V-neck or crew neck; long or short sleeves | 16 |
| Male underwear | Briefs or boxers; color | 10 |
| Female underwear | Hipsters or regular briefs; color | 10 |
| Socks | Ankle, crew-length (spoken as “crew neck socks”), or thigh-high; color | 6 |
| Shorts | Cargo, booty/short-cut, or high-waisted; options include faded denim, black, gray, blue and other appropriate colors/finishes | 24 |
| Jeans/trousers or skirt | Color/appropriate male-female selections confirmed generally; detailed cuts not yet specified | 36 |
| Everyday dress | Color; detailed cuts not yet specified | 60 |
| Basic everyday shoes | Color/appropriate selections; detailed styles not yet specified | 50 |
| Male light jacket | Simple hoodie-like style, rain-resistant material; color | 50 |
| Female light jacket | Rain-resistant material, fur trim around hood edges; color | 50 |

Rain resistance/fur trim are approved product descriptions, not new weather-stat mechanics or an unapproved material sourcing claim. No variant surcharge was specified; keep approved category prices pending any further differentiated pricing decision.

The45gold new-arrival bundle contains the previously listed top, trousers, underwear, socks and basic shoes. The player chooses the available type/style/color attributes for EACH included item instead of receiving a fixed generic outfit. Do not silently add jackets/dresses/shorts as extra or substitute slots without a later decision. Bundle per-player purchase limit was asked but not answered; remains unresolved. Mystery Box remains150gold and owner wants to design it next. Legacy umbrella remains owner-awarded only. No catalogue/variant/checkout runtime implemented by this record.

## Owner-approved ordinary catalogue prices and restricted legacy umbrella

Owner doubles the proposed individual clothing prices because players can earn substantial money early. Exceptions: the new-arrival bundle stays45gold and Mystery Box stays150gold. The legacy umbrella is now OWNER-AWARDED ONLY to specifically selected players; it is not a retail product. Its old50gold reference is historical, not an active checkout price. Do not put it in ordinary shop stock, Mystery Box outcomes, NPC gifts, random loot or automatic quest rewards, or give an AI authority to grant it. Owner-grant tooling/authorization and item effects remain separate implementation work.

| Item | Approved base gold |
| --- | --- |
| Basic top | 16 |
| Underwear | 10 |
| Socks | 6 |
| Shorts | 24 |
| Jeans/trousers | 36 |
| Skirt | 36 |
| Everyday dress | 60 |
| Basic everyday shoes | 50 |
| Light jacket/cardigan | 50 |
| New-arrival outfit bundle (top, trousers, underwear, socks, shoes) | 45 |
| Mystery Box | 150 (outcomes/effects still require design before functional sale) |

These are approved BASE prices; player-specific discounts and posted final checkout price apply under the already approved schedule, with rounding/one-time-discount behavior still to define. Do not silently assume bundle repeat limits or resale policy. A one-bundle-per-player limit is a recommended next review question, not an approved rule. Actual variant catalogue, stock, checkout and owner umbrella grants are not implemented by this design record. Earlier proposed prices and shop-umbrella descriptions below are superseded.

## First catalogue and service proposal — NOT APPROVED

Preserve existing price anchors: umbrella50gold, Mystery Box150gold. Mystery Box contents/effects must be designed before selling it as functional merchandise. Regular clothing prices below are proposed economy values, not recovered canon:

| Everyday item | Proposed gold |
| --- | --- |
| Basic T-shirt/top | 8 |
| Underwear, chosen appropriate style/fit | 5 |
| Socks | 3 |
| Shorts | 12 |
| Jeans/trousers | 18 |
| Skirt | 18 |
| Simple everyday dress | 30 |
| Basic everyday shoes | 25 |
| Light jacket/cardigan | 25 |
| New-arrival basics bundle: top, trousers, underwear, socks, basic shoes | 45 |

The45gold bundle compares with59gold individual proposed pieces. It is an optional visible starter deal against the existing100gold starting budget; First Steps remains visit/report only, with no purchase required. Fit/style choices should not force a gender, form change or unwanted equipment. Broader casual/workwear and enhanced stock can be designed next; do not invent enhanced effects from display descriptions.

Service proposal: browse actual racks and posted stock/prices; select size/style; optional try-on in an available real stall with stored belongings/ownership intact; return to counter for atomic payment/stock transfer and receipt; items become owned inventory/equipment only on purchase. Trying on does not acquire ownership. Customer payments enter shop funds; coverage rewards are separate. Checkout shows the applicable approved player-specific discount and final price before payment. Cart flow, one-time voucher transaction scope/stacking/expiry, return/buyback terms, stock funding/replenishment and fair rounding remain to review. No catalogue checkout implemented yet.

## Routine pressure clarified

Charity pushes until she must close, with roughly6hours maximum recovery. Hidden Countess threat makes rest and replacement risky; discovery of substitution may bring the Countess physically to the shop. Treat as conditional lore/encounter design, not an automatic event. Ordinary visitors see strain without learning its cause. Details in CHARITY-LEGACY-AUDIT.md.

## Twentieth mission milestone

Owner confirms temporary mask entrapment after20successful completions, released by standard mastery without retaining Charity’s form. During the challenge, live alongside Charity under her restrictions. Completion awards2,000gold and a usable150-point mastery item for a chosen form. Special exception to ordinary shift-end removal; details and reward interaction remain pending. See CHARITY-LEGACY-AUDIT.md.

## Shift role and commitment — owner correction

Once accepted, six-hour coverage cannot end early or be handed over. The player must pass as Charity through outward speech and behavior, with context-sensitive translation into her mannerisms. Customer initiation requires a Charity-consistent response even when the player does not initiate interactions. Safe return/removal remains at the actual end. Earlier early-handover suggestion is withdrawn. See CHARITY-LEGACY-AUDIT.md.

## Long-term discount rewards

Permanent store discount:10%after3completed shifts,25%after10,35%after15. Each tier replaces the earlier rate. Initial two shifts retain one-time10%discounts. Gold schedule, +90relationship gate, +5clamped relationship reward and five-shift hidden-access milestone remain.

## Eligibility clarification

Assist Charity requires+90relationship with the individual player on the existing−100to+100meter. No separate trust meter. Each successful shift adds+5up to+100, so two shifts from+90saturate it. Other completion rewards and milestones continue. Earlier separate trust interpretations are superseded.

## Repeat completion rewards

Owner sets500gold after the fifth completion (sixth and later), plus+5individual Charity relationship on every successful completion, capped by the shared relationship scale. Permanent10%discount remains noncompounding. No form-mastery reward.

## Confirmed Assist Charity rewards

Per-player completed shifts1–5pay250,300,350,400,450gold. One-time10%discount on shifts1and2; permanent10%fromshift3. Five completed shifts for hidden-location service eligibility, alongside other authored gates. See CHARITY-LEGACY-AUDIT.md; older proposed reward values below are superseded.

## Updated coverage gate

Owner changes Assist Charity mask coverage from legacy100%trust to90trust and permits inconvenient temporary rest closures. Relationship75+for selective sensitive disclosure remains separate. See CHARITY-LEGACY-AUDIT.md for the current rule.

## Legacy recovery supersedes blank-slate questions

See CHARITY-LEGACY-AUDIT.md. Charity’s kind/patient/mischievous/guarded personality, appearance, five quest concepts and two prices already exist. Expand those records rather than asking the owner to redesign her basic archetype. Earlier suggestions below are proposals only.

# Cherished Touch expansion — review draft

Owner redirects the next design from a sales employee to locations/economy, starting with Cherished Touch because of its early First Steps role. Existing v1.0.109 acceptance continues separately.

Confirmed current baseline: owner-authored thirteen-space A–J interior including four separate changing stalls; public sales floor/counter/stalls; Charity’s private household; fixture browsing, curtains, exits and established concealed-feature restrictions. Charity is the counter NPC/gifted gabber. Catalogue browsing, finite shop stock, posted pricing, checkout, fitting ownership, buyback, restocking and Charity’s full daily/home routine are not implemented by this baseline. Current private-room permission is a simple explicit button. Ordinary dialogue currently returns CHERISHED_INTRO rather than a full activity-aware store character integration.

Economy anchors verified: a newly confirmed character defaults to100gold; existing First Steps completion gives100gold/50EXP once. Do not silently increase those grants or require a purchase to finish the introductory visit.

Proposed connected slice for review, not yet approved or implemented:

1. Preserve shop map/intro quest and make Charity’s greeting explain actual services and the player’s available budget.
2. Everyday clothing racks, clearly separate enhanced/enchanted counter goods, and a visible starter-outfit offer. Post price, effects/curses where actually known, available stock and suitability before purchasing; do not invent enchantment mechanics.
3. Browse -> choose item/variant -> optional fitting in an available real changing stall -> checkout at the counter -> owned inventory/equipment. Trying on is not buying or granting ownership. Restore removed player clothes and preserve feet-slot/form constraints.
4. Shared transaction layer: atomic payment/stock transfer, saved receipts, no duplicate charge/item on reload or repeated click. Shop gold/supply and player gold stay separate. Price scales, starter offer, buyback/returns/restocking terms are pending design.
5. Charity’s social/store routine and bounded access to her household, adapting the universal NPC/form template. Existing concealed lore/entrances must remain disclosed only by authored conditions.

Next conversation: agree on practical entry-level pricing versus premium stock and Charity’s service/operating style, then draft a finite initial catalogue and service policies together. No new gameplay or price changes made. No permission request is needed to continue design; do not publish unapproved design defaults as established canon.
