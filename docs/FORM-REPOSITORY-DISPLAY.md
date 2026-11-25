# Form Repository — approved Room B displays

## Owner decisions

The room contains exactly eleven stands: two most-used, two least-used, three most-popular, and four sale stands. All four sale stands use shop stock initially. As player-sale listings become available, the latter two progressively carry player offerings; browsing and search work identically for both sources. Physical stock remains uncreated until its forms and prices are approved. The current opening plan is one male and one female store-produced Uncommon form, both usable in the existing map/interface, with two sale slots left open for later expansion. Markus is entirely deferred until the forest and its supporting systems are built and testable. See FORM-REPOSITORY-OPENING-FORMS.md and trackerD21–D23.

Sale stands support left/right cycling without rotating by themselves. When a different form is chosen, the outgoing form retracts into the base and a rush of air lifts its replacement from the chute. Search filters sale offerings by the existing combat archetype and explicitly published gender, together or independently. A search can replace displayed offerings; it never equips, handles or buys them. Filtering does not change the seven ranked stands.

Physical, cylindrical, illuminated futuristic podiums hold the actual solid forms, with a hollow-looking appearance. These are not holograms. The latest explicit spoken clarification supersedes the earlier asynchronous holographic-preview selection. Forms stay stationary by default; selecting a stand enables manual rotation, as often as the player wishes. There is no automatic spinning or idle rotation.

Before purchase, a player may visually inspect the form and operate its podium controls. They cannot handle, take, equip, wear or use the actual form. Published inspection facts are appearance, rarity, all ten attributes, Health/Stamina/Resolve/Arousal capacities and an actual authored listed base price. Hidden lore and private seller information are excluded. Purchases use the locally implemented standard Reception C checkout once actual stock is authored.

Every form offered for sale is unmastered, including player-submitted listings. The display rejects mastered listings; it does not silently erase mastery, relabel a mastered form or convert privately stored forms to stock. The future sale-submission controller must enforce actual eligibility and custody before creating an available listing. Free private storage continues preserving mastery and ownership.

## Universal form base prices — approved and locally implemented

Common3500gold; Uncommon7000; Rare14000; Epic28000; Legendary56000. Each step doubles. These are form-listing base prices before existing actual-attendant discounts and an eligible additive arcade voucher. Shop and player listings use the same ladder; mismatched/stale catalog base prices are rejected instead of silently displayed. The shared pricing helper and read-only form quote adapter are implemented. No asking-price exception, resale payout, commission, restock rule or actual checkout is inferred. Non-form services/items and free private storage keep their existing rules. An unsupported resource exception is not automatically a new price tier.

Opening inventory now targets the two authored Uncommon forms above; exact identities, profiles and stock quantities are not yet designed. Two sale slots remain open. Markus’s7000gold Uncommon price and approved design are preserved in his deferred record. Most Common forms should reflect reality; Uncommon forms may also be based in reality and must be usable/testable with the current interface. The approved rarity-scaled Arousal formula remains in COMBAT-RESOURCE-TIER-PROPOSAL.md.

## Approved gender composition

Each most-used and least-used pair contains its highest-ranked eligible male and female form. The popular trio retains authoritative ranking order when it already contains both; otherwise its lowest eligible slot is replaced by the highest-ranked available missing male/female. This is a showroom selection constraint, not a rewrite of usage/popularity data. Distinct listings of one form cannot crowd out another distinct form.

Eligibility includes actual published gender, available stock/copies and current authoritative ranking membership. Genders are never guessed from a portrait or name. Missing eligible supply leaves a required paired slot empty; the popular set keeps actual available offerings rather than fabricating the missing gender. Sale-search filters never change these ranked composition rules. Gender and shared-engine combat archetype are visible in inspection.

The underlying ranking formula remains unapproved: the earlier total-time-worn/distinct-buyer suggestion was a proposal, and the owner redirected into the four starting form designs. Do not treat this composition approval as approval of that formula or invent historical/global activity. Live catalog/ranking providers remain empty pending authored stock and data. First-form concepts remain proposals until reviewed.

## Local implementation and boundaries

repository-display.js registers the Room B stand fixture and projects only valid available sale-catalog records. The standard shop-stock source is registered but empty. The real sales floor remains empty until actual opening forms and stock are authored. Tests register explicitly synthetic providers and remove them afterward; these are not merchandise.

Inspection costs the established one minute. Manual rotation changes only saved orientation and takes no game time. Selection, filters and stand choices survive reload and are scoped to the actual player/body and actual listing facts. Rotation is independent for each physical stand even when a listing supplies multiple copies. Cycling preserves neighboring stands. The same physical stock copy cannot occupy two podiums; quantity is not decremented or multiplied by rendering. Room/body/player changes, withdrawal, a changed price or mastery invalidate stale controls. Clock passage cannot rotate a stand. Sleep, combat, body manipulation and access gates apply. Views and controls do not change currency, ownership, equipped body, mastery, stock or combat resources.

The browser UI uses the same controllers as typed inspection, rotation, cycling and search. Typed examples include “slide sale stand 1 right”, “inspect sale stand 3”, “search sale forms by archetype physical and gender female”, “search sale forms by gender male”, and “clear sale form search”. Menu selectors contain actual published genders and the shared combat archetypes. Common examples: “inspect the display stands”, “inspect [listed form name]”, “rotate the stand left”, “rotate the stand 45 degrees”, “show the front of the displayed form”. Duplicate names require clarification. Private thoughts, wishes, negation and hypothetical descriptions do not rotate a podium. Pre-purchase handling commands return a restriction, not a completed contact event. Public Eve help describes the same rules. No nested form or unrelated required input blocks the main composer.

Physical podium styling, eleven stand cards, search controls and independent orientation indicators are implemented. The retract/air-lift transition runs after the composer’s final redraw, so typed actions retain the animation. Reduced-motion preferences suppress animation while the action and result remain unchanged. Actual form visuals require future authored artwork: the adapter uses supplied local view images only, never fabricates a rear view from a front portrait or claims a flat image is a full 3D asset. No form artwork has been authored in this block. Actual sale submission, checkout, stock/prices, usage metrics and complete visual form rotation remain dependencies. Ranked sections accept an explicit authoritative ordered ranking provider; none is registered in live runtime. No usage/popularity formula or historical figures have been invented. The proposed next design decision is how most/least-used and most-popular are measured; this is not approved by merely wiring the provider.

## Historical first display checkpoint

The following totals belong to the preceding inspection/rotation block, before the eleven-stand expansion. Current evidence is verification/repository-display-bank-summary.json.

## Verification and publication

Ten controller cases, seven actual390×844browser checks,2,239combat/hub checks across176suites,58backend cases and syntax235modules/5inline scripts pass. Text-action inventory refreshed; this is not universal natural-language proof. Final public-stats text change was retested in the focused and browser checks. Full evidence and source hashes: verification/repository-display-summary.json; raw local evidence: work/repository-display/.

No owner save, paid model call, commit, push, worker deployment or publication. This is an unpublished authoring checkout; later integration must preserve the newer public baseline.

## Eleven-stand expansion verification

Current controls are verified by twelve new display-bank cases plus the previous ten display cases, seven new phone-width checks and a retest of the earlier seven browser checks. Broad suite, backend, syntax and exact source hashes are recorded in verification/repository-display-bank-summary.json. Test catalogs and rankings are explicit synthetic fixtures; the live catalog and ranking provider remain empty. The UI fixes both neighbor reshuffling and typed-action animation being removed by the composer redraw. Existing world clock, custody, mastery, ownership, resource and pre-purchase boundaries remain in force. No paid calls or publication.

## Gender-composition verification

Eight new gender cases plus the existing22display/display-bank controller cases pass. Three new phone-width checks confirm the paired sections, female-dominated and male-dominated popularity, inspection labels, sale-filter independence and opening four-shop-source layout using synthetic records. Full regression:2,259cases/178suites, no failures. Both modified display modules pass syntax, and whitespace validation passes. Current evidence:verification/repository-display-gender-summary.json. No paid calls, owner saves or publication.
