# Approved action terminology — local, unpublished

`index.json` groups entries by actor body type and body part. `lips/kissing.json` is the canonical kissing vocabulary; butterfly and air variants are indexed separately without duplicating entries. Run `node scripts/build-kissing-types.cjs` to regenerate the browser/CommonJS projection.

Entries contain neutral technique labels, actor parts, target part, accepted-contact saliva rules and event templates. `explicit_adult` is an authored classification, not an instruction to add acts or override decisions. The controller, not player wording or generated prose, establishes acceptance, contact, elapsed exposure and resistance outcomes. No other body-target action vocabulary is approved by this file.

## Neutral scene wording

`neutral-scene-wording.json` records the approved non-graphic verbs, chest/contact terminology, general postures, modifiers, statuses and short scene summaries. It preserves the authored `standard`, `suggestive` and `explicit_adult` classifications. These are reference terms, not newly executable commands. Labels never establish consent, a specific act, fluid exchange or infection. The existing kissing controller remains the only executable interaction defined by this folder.

The wording reference also lists clinical fluid names and defines source, fluid type, freshness, route, duration, barrier and end-time fields. These definitions describe existing controller facts; they do not create a new runtime payload contract or infer fluid contact from an encounter summary.
