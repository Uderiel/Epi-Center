# AI-first narration and pressure-based footwear resistance

Owner refinement after115: active AI handles form/footwear impressions and narrative feed updates. Premade narrative is fallback only when generation is off/inactive/unavailable. Yoga and resting home leisure remove the flats. Resistance depends on actual pressure, rather than merely being worn.

Narrative entries use the existing AI client, pending state, timeout/queue handling and stale-save protections. Pending UI hides premade text. Completed AI narration and transformations show generated prose without concatenating the script or exposing a duplicate narrative Game result. Authored facts remain saved for fallback; exact numeric/roll receipts and player input stay authoritative. Existing generated-history prefixes are stripped in display. Narration opt-outs remain respected. World/surroundings/household/body impressions and marked narrative events can generate without a player click. Future narrative emitters should use origin:narration or narrativeEvent metadata; mechanical errors and receipts remain deterministic.

Hidden-footwear routine speech is routed to a restricted recorded-event narrator, not a social NPC reply. Its packet excludes private NPC dialogue history, uses the event time, and uses recorded event sensory snapshots rather than sampling an unrelated later activity. It cannot grant new knowledge, invent a greeting or decide outcomes. Incompatible generated light/wear context keeps the fallback.

Removed flats: advantage, regardless of other people. Worn relaxed/unloaded contact: normal. Walking footfalls or standing/resting weight: disadvantage. Explicit recorded resting-weight pressure overrides a seated/relaxed label. This changes resistance dice only: solitude is still required for reversion, and permanent binding remains permanent.

Yoga, reading/writing, rom-com viewing, quiet rest and similar home leisure now remove footwear, alongside washing and sleep. Re-equipping still follows an actual daytime closet dressing step. Room art, wearable moisture/scent tracking and zero-Resolve rules remain from115.

No live paid model result is claimed. Tests mock backend completion, pending and failure states while exercising actual browser feed rendering.
