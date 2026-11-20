# Perspiration — implemented locally, unpublished

## Activity and clock

`rebuild/hub/perspiration.js` owns persisted actor/body-specific perspiration. Player travel and room movement use the canonical game clock. Walking including travel reaches10 after60 active game minutes; continued walking adds5 per15 minutes. Jogging reaches25 after30 minutes, then adds10 per10 minutes. An active controller-resolved, mutually agreed private encounter reaches25 after20 active minutes, then adds10 per10 minutes. Encounter prose alone never establishes activity. Mixed activities preserve normalized exertion progress. No offline catch-up is added; duplicate timestamps and reloads cannot advance twice.

After10 inactive minutes, body perspiration drops5 every5 game minutes. Incomplete exertion progress drops1/12 per five-minute drying step, reaching zero after60 drying minutes. Clothing moisture declines separately and soiling persists. Per-minute NPC schedulers feed Priya, Richard, Daniel, Nadia, Charity and Tits; unrecorded activities are not inferred from generated prose. The existing private-encounter adapter supplies activity only while its actual agreement, body, partner and space remain valid. No new encounter permissions or natural-language ingestion triggers are introduced.

## Body regions

The hidden global score is exertion state, not literal percentage skin coverage. Regional surfaces are armpits, under-chest fold, inner thighs, feet, hands, forehead, neck and spine. Default multipliers are1.2 for armpits,1.1 for under-chest folds/inner thighs/spine,1 for forehead/neck/feet,0.6 for hands. Without an authored under-chest fold, that region uses0.5; authored thigh friction increases its local factor by20%. These are gameplay approximations, not universal sex-based physiological claims. Player features use recorded appearance; NPC adapters support explicit anatomy flags, with Tits’s authored full chest/thigh build represented. Missing anatomy does not invent a sex or body shape.

Known enclosed footwear starts local foot moisture after30 actual worn minutes, adding0.5 per active minute or0.25 while stationary, capped100. Footwear removal reduces that retained surface moisture1 per minute. Recorded nervousness can raise hand moisture independently, capped40; no dialogue guesses at nervousness. Production timestamps remain separate from drying timestamps for future contact-source validation.

## Visibility and narrator

Numerical scores remain hidden. Below50 is not readily noticeable to others;50–74 is visibly sweaty;75–99 heavily sweaty;100 dripping sweat. Observation requires actual same-space presence. Public context projects only exposed forehead/neck/hand descriptions, never covered under-chest/thigh/foot facts, full hidden meters or remote NPC state. Inanimate flats do not gain a human visual survey or produce sweat themselves. Their private sensory records use Priya’s actual regional foot moisture, wear time and pressure. Observation/rendering does not simulate activity.

The player's status shows a qualitative body description. Typed examination of a nearby NPC includes visible sweat when applicable. Shared AI physical context carries only locally observable qualitative sweat facts. No automatic NPC comments, advice, rest requests or global broadcasts were added.

## Clothing and footwear

Actually recorded worn garments gain moisture only on their covered regions. Direct garments gain up to1 moisture unit per sweaty minute scaled by regional moisture; outerwear uses a0.25 factor. Inactive clothing dries0.5 per minute. Every10 minutes at global perspiration50+, contacting regions at50+ can soil the affected garment:10% at50–74,25% at75–99,50% at100. The owner authorized implementing the previously proposed sweat rules; these probabilities are now runtime rules. Saved deterministic actor RNG and timestamps prevent rerolls on reload.

Sweat-soiled garments record a separate cause/affected-region entry. Existing urine-soiling, damage and other conditions are preserved; drying does not clear soiling. Player-owned and registered borrowed clothing, Priya’s actual worn household garments and Charity/Tits actual registered garments use existing item/condition records. This does not invent additional inventory for NPC outfits that lack individual item records.

**Shoes never receive sweat dirty/soiled tags or hamper eligibility.** Feet and footwear interiors may retain moisture for senses. Socks remain washable garments; shoes do not. Owned-shoe hamper validation also rejects already-worn shoes. Existing shared urine/other-fluid deposit rules are not reclassified as sweat.

## Infection boundary

Sweating alone creates neither contact nor ingestion nor infection. Regional state is available through a surface accessor, including last actual production time. Existing exposure thresholds remain unchanged. Typed saliva/sweat consumption triggers are still separate unfinished work.

## Verification

Fourteen focused cases cover thresholds, mixed activity, discrete drying, batch/minute parity, reload, region specificity, garment soiling, retained damage/urine cause, shoe exemption/hamper rejection, public visibility/privacy, body isolation, sample timestamps and actual private flats moisture. Eight browser checks exercise mapped jogging, canonical-clock drying, qualitative display, shoe moisture/exemption, reload and serialized local narrator observations. Existing kissing and language browser checks pass. Full regression:1,861 named automated cases. No owner saves or paid model calls used. Published v1.0.130 and frozen Bible unchanged.

## Participant-only regional observations

While worn, the flats' direct-contact sensory path records qualitative foot moisture even below the public threshold. This is a private contact sense, not a claim the shoes can see everything. For active accepted private encounters, `IntimateEncounter.observe` accepts controller-resolved exposed/direct-contact region facts. It validates participant presence, body, encounter and region names, and records only requested actual regions. Private completion and serialized narrator metadata retain those observations with owner/participant audience. Generic nearby-NPC context remains limited to public observations; merely starting an intimate encounter does not uncover every region. This is a shared controller hook for actual scene outcomes, not a new automatic typed encounter or ingestion trigger.
