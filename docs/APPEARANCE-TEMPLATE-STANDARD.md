## v1.0.137 release disposition

Owner authorized publication. Implemented approved portions are included;pending proposals/deferred systems remain unimplemented. All three approved variant portraits are connected. Current publication/evidence:releases/v1.0.137-release-summary.json. Earlier local/unpublished status labels below are historical checkpoints.

# Appearance template and character-creation integration

Implemented locally on 2026-11-21. Publication remains held. Current18-profile NPC/form alignment is implemented locally; see NPC-FORM-APPEARANCE-ALIGNMENT.md.

The single schema is `rebuild/hub/appearance-template.js`; the renderer is `rebuild/character-creation/appearance-builder.js`; calculations remain in `rebuild/hub/appearance-measurements.js`. The existing 24 appearance keys and order are preserved, including the separate Tail field at the end. The earlier 23-field integration omitted Tail; this follow-up corrects that omission. Every field remains a description string in the confirmed save. Structured answers, input units, measurement baselines and review adjustments exist only under draft `creationAppearance`; confirmation deletes that draft data. No original-body restoration copy is retained by this integration.

## Required human creation

All applicable descriptive parts require an explicit selection, a valid custom description, or Not specified. Human structures/counts/materials are fixed and validated independently of disabled HTML options. New players have two human feet, five toes per foot, two human legs/arms/hands/eyes/ears, five digits per hand, no tail, human nails and skin or the appropriate human eye/hair/nail tissue. Nonhuman structures and materials remain in the universal catalogue but are disabled during creation. Skin colours are Pale, Light, Tanned and Dark. General skin colour fills/inherits regional colours until a deliberate regional choice overrides it.

Custom text stays descriptive; it grants no ability, body structure or extra limb. Delimiters in custom text are normalized so it cannot inject a second canonical body-property line. Salivation and other baseline descriptive traits do not create fluids or symptoms. Only the already-approved perspiration tendency changes sweat gain.

## Canonical order

The following are components inside existing fields, not additional saved appearance fields.

| Existing key | Field | Ordered parts |
| --- | --- | --- |
| age | Age (18–90) | Age |
| gender | Starting gender | Starting gender |
| footSize | Feet | Feet present → Number of feet → Foot type → Describe foot size using → Shoe size → Shoe sizing system → Foot length → Foot width → Arch height → Sole or pads → Toes per foot → Nails or claws → Covering → Material → Surface colour → Surface texture → Markings |
| legs | Legs | Number of legs → Leg type → Length → Build → Covering → Hair / grooming → Material → Surface colour → Exact inseam (optional) |
| hips | Hips | Width → Shape → Proportions relative to waist / torso → Material → Surface colour → Exact hip circumference (optional) |
| buttocks | Buttocks | Size → Shape → Material → Surface colour |
| waist | Waist & abdomen | Waist width → Abdomen shape → Muscle definition → Material → Surface colour → Exact waist circumference (optional) |
| back | Back & shoulders | Shoulder width → Shoulder shape → Back shape → Material → Surface colour → Usual posture → Wings present → Number of wings → Wing type → Wingspan → Wing shape and details → Wing material → Wing colour → Exact shoulder width (optional) |
| chest | Chest | Type → Cup size → Pectoral size → Shape → Material → Surface colour → Exact under-chest circumference (optional) → Exact chest circumference (optional) |
| arms | Arms | Number of arms → Arm type → Length → Muscle definition → Material → Surface colour → Hair / grooming → Exact shoulder-to-wrist length (optional) |
| hands | Hands | Number of hands → Hand type → Size → Width → Material → Surface colour |
| fingers | Fingers | Digits per hand → Length → Thickness → Nail type → Nail length → Nail shape → Nail colour → Nail material → Material → Surface colour |
| voice | Neck & voice | Neck shape → Voice pitch → Voice quality → Material → Surface colour |
| face | Face | Overall shape → Jaw → Chin → Cheeks → Nose size → Nose shape → Lip fullness → Lip shape → Salivation rate → Facial hair → Complexion and markings → Material → Surface colour |
| eyes | Eyes | Number of eyes → Size → Shape → Iris colour → Left iris colour → Right iris colour → Sclera → Material |
| ears | Ears | Number of ears → Size → Shape → Material → Surface colour |
| hair | Scalp hair | Length → Colour → Texture → Density → Style → Material |
| skin | Skin | Material → Surface colour → Texture → Body markings → Body hair |
| genitalAnatomy | Genital anatomy | Configuration → Length (maximum 10 inches) → Testes size → Tightness → Puffiness → Swelling → Fluid viscosity → Anatomical variation → Pubic hair / grooming → Material → Surface colour |
| scent | Scent & physiology | Natural body scent → Scent strength → Perspiration tendency → Usual skin temperature → Other physical tendencies |
| height | Height | Height |
| weight | Weight | Weight |
| build | Build | Generated Build |
| tail | Tail | Tail present → Tail description → Material → Surface colour |

## Wings within Back & shoulders

Wings are included inside the existing Back & shoulders field, ordered after Usual posture and before Exact shoulder width: presence, count, type, wingspan (tip to tip when spread, in/cm or Not specified), shape/details, material and colour. Human creation locks wings Absent; dependent parts are Not applicable. Universal NPC/form descriptions allow feathered, membranous, insect-like, mechanical, fin-like or custom wings with the shared material/colour approach. This adds no saved top-level appearance field and grants no flight capability. Current wing inspection reads the current Back field through the shared appearance resolver. Older creation drafts restore the absent default without losing their measurement review. Confirmed legacy characters are not rewritten.

## Conditional details

- Heterochromia requires distinct resolved left/right iris colours; a missing or unknown colour cannot establish heterochromia.
- Bald scalp makes the remaining hair components Not applicable without affecting facial/body hair.
- Each selected marking has a location and prominence, or an explicit Not specified value. None/clear complexion cannot be combined with contradictory markings.
- Genital anatomy uses neutral attributes. Inapplicable subparts are marked Not applicable. Established length is capped at10inches/25.4cm. These descriptions do not infer sexual activity, arousal, illness or game effects.
- Universal authoring can explicitly mark missing structures, age or mass unavailable. It preserves authored nonhuman Build descriptions. The human reference calculator rejects nonhuman bodies; it never supplies reference mass to an unknown NPC/form. The current18-profile catalogue uses this policy; it does not invent a body or numeric dimensions for an unbuilt actor.

## Approved measurement calibration

These are deterministic game-design values, not anatomical predictions or a real-world bra-sizing standard. Height reference66in, weight140lb, waist30in, hips38in, under-chest32in, shoulder width15in, shoulder-to-wrist22in, inseam30.5in. Length factor is height/66. Girth factor is sqrt((weight/140)/(height/66)). Short/Narrow0.95, Average/Medium1.00, Long/Wide/Broad1.05. Other descriptive categories do not silently acquire invented numerical definitions.

Owner confirmed half-inch increments between the listed cup labels while preserving C at a3-inch chest/under-chest difference:

| Cup | Inches above under-chest |
| --- | --- |
| A | 2 |
| B | 2.5 |
| C | 3 |
| D | 3.5 |
| DD | 4 |
| E | 4.5 |
| EE | 5 |
| F | 5.5 |

Generated inch values and review edits round to the nearest half inch: 34.2→34, 34.3→34.5, 34.8→35 (quarter-inch ties round upward). Review controls step by0.5inches. Exact player-entered measurements are preserved without rounding. The original rounded generated proposal is the immutable ±2-inch baseline. Valid older unrounded draft reviews migrate once without losing permitted adjustments; saved non-half generated values cannot bypass confirmation validation.

The existing chest field stores cup and circumference together. Flat/pectoral chest uses the no-cup reference; no breast cup is forced. Explicit regional measurements take precedence and retain their entered units. Generated measurements may be adjusted by at most2inches from the original deterministic proposal, independently for each applicable value. Reload, repeated edits and returning to appearance do not ratchet this limit. The calculation inputs genuinely changing creates a new proposal; source values are revalidated. Confirmation rechecks the deterministic baseline, source type, exact values and all bounds rather than trusting saved draft metadata.

Height/weight unit switches preserve canonical values. Review displays inches and centimetre equivalents. Build is generated from selected proportions and final reviewed values, has no custom creation input, and refreshes after a permitted review edit. Unknown/custom proportions without exact dimensions remain explicitly unspecified rather than being assigned guessed measurements.

Wings follow-up verification:24 template,10 current-appearance and28 form-presence focused cases pass; the refreshed creation suite passes17/17 and current-body browser suite9/9. Evidence:`verification/appearance-wings/results.json`. No paid calls or publication.

## Earlier creation-only verification checkpoint

Before NPC alignment, verification passed2,234 named automated cases,16 actual-UI creation checks and8 current-appearance browser checks. That checkpoint’s evidence is in `verification/appearance-current-followup/results.json`; the earlier23-field report remains historical evidence. Tests use fresh synthetic browser storage and simulated responses, with no paid provider calls. Creation covers all24 fields, human-only restrictions, rounded generated values, exact-value precedence, original review bounds, units, markings, heterochromia, confirmation/reload and preservation of other slots/legacy characters. Current-body checks exercise partial/full Erin, partial/full canine state including Tail, actual cursed cosmetic milestones, reload, ordinary NPC packet refresh, stale returned replies and cancellation before forwarding outdated queued inspections.

NPC/form alignment is implemented through appearance-alignment.js and appearance-catalog.js. All18 canonical profile states use the24-field order; original NPC overviews and stage-controller source strings remain, while public panels/current-body views and topic-scoped NPC appearance facts use the aligned data. No bulk player-save or stat/resource rewrite occurred. The per-profile before/after and image report is NPC-FORM-APPEARANCE-ALIGNMENT.md.

## Current body and information exchange

`rebuild/hub/current-appearance.js` supplies a single read-only live view to the Appearance display, body-awareness controller and ordinary NPC/form exchanges. It recomputes from saved current physical state on each read; it does not cache an old snapshot or overwrite the base with a temporary form. Reached partial stages replace their affected regions and retain unchanged regions. Full forms use their own appearance without filling missing anatomy from the human record. Existing illness milestones permanently update their actual base fields. Equipment, cosmetics, coverings and their actual changes pass through the same adapters as the displayed body. Structured Face lip fullness reflects current cosmetic alterations rather than its superseded value.

Body-awareness requests refresh their selected regions after the action's clock advance. They submit the current inspection once, exclude old body-description history, prior milestone comparisons and future targets, and keep recorded current symptoms and worn access limits. The completed24-field creation inspection is5,885characters in the tested fixture, within the existing10,000-character scene limit. Private form awareness reaches the existing worker through its projected physical context. Successful awareness actions route before non-speaking dog/cat dialogue fallbacks, preserving their controller capability/access guards. Separate form consciousness and ordinary speech limitations remain authoritative.

Request freshness includes the actual current-body signature. A physical change invalidates a queued old-body request before submission or discards a reply that arrives after the body changed. Actual saved cursed-item changes survive reload and override stale appearance supplied on an ordinary conversation event. These tests verify packet/state behavior, not real-model prose accuracy. No worker change or publication occurred.

## Current NPC/form alignment verification and measurement decision

Owner confirmed that the leading numbers in38DD/36E/42F are under-chest circumferences. Using the approved DD+4/E+4.5/F+5.5 scale, chest is42/40.5/47.5in. Exact waists22/24/20in and hips38/36/42in remain authored canon; discrepancies against the human reference are flagged in the report, not clamped. The±2in rule applies to generated player-creation review, not an absolute NPC body cap. Supported human-reference estimates include Charity under-chest30in, Erin waist26in/under-chest29.5in, and Richard under-chest34.5in after approval of his32years/6ft0/175lb baseline. Other unknowns stay explicit.

Final regression passes2,247 named cases across160 suites; creation17/17, NPC alignment14/14 and current-body browser9/9 checks pass. Full awareness excludes unrelated venues/property/routines without dropping requested fields. All7 currently connected portrait assets decode. No paid calls, worker changes, portrait creation/connection or publication. Evidence:verification/npc-appearance-alignment/.

Richard full appearance follow-up: owner approved all24 fields and authored chest40in. Implemented via richard-appearance.js/shared catalogue with generated Build; global calculator unchanged. Runtime-only regression2,248 cases and18 browser checks pass; publishing/canon check awaits next release version preparation. Richard’s generated image is displayed and staged for separate image approval, not connected. See verification/richard-approved/.
