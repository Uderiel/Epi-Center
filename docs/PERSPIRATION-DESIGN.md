# Perspiration — approved design, runtime not yet implemented

## Owner-confirmed visibility

The numerical 0–100 perspiration score is hidden. Below50 is not readily noticeable to other characters. At50–74 the character is visibly sweaty; at75–99 noticeably/heavily sweaty; at100 visibly dripping sweat. Descriptions indicate sustained or strenuous activity without asserting exactly which activity occurred. Visibility requires actual co-presence, line of sight and observable body regions. Do not broadcast private conditions globally or add automatic NPC comments, rest advice or lie-down suggestions.

The owner also specified location-specific effects: contact and clothing effects belong to the actually affected body region and garment. A global sweat score alone does not wet every body region, soil every garment or establish fluid contact.

## Approved exertion framework

Walking including travel reaches10 after60 active game minutes; continued walking adds5 per15 minutes. Jogging reaches25 after30 active minutes, then adds10 per10 minutes. Consensual intimate activity reaches25 after20 active minutes during activity, then adds10 per10 minutes. Mixed activity retains normalized exertion progress (walking1/60, jogging1/30, intimate activity1/20 per active minute). After10 minutes inactive, perspiration declines5 per5 minutes. Drying does not clean clothes. Exact region distribution, clothing moisture increments and unfinished-exertion decay still need concrete rules before implementation; do not invent them from these descriptions.

## Clothing: separate moisture and soiling

Soiled is a shared condition with a separately recorded cause, including sweat, urine, semen, pre-ejaculate, vaginal secretions or cervical mucus when actually deposited. Only affected garments receive it. Preserve damage and other existing conditions; drying does not clear soiling. Resolved fluid deposits and actual bladder accidents differ from probabilistic sweat accumulation.

The proposed sweat-soiling checks were no roll below50,10% at50–74,25% at75–99 and50% at100 per10 sweaty game minutes. The latest owner approval specifically selects the visibility scale; do not treat this as independent confirmation of all clothing probabilities. Those remain proposed.

## Infection and implementation status

Fresh sweat must actually be present on the contacted region. Consumed infectious sweat uses the existing ten-minute ingestion threshold inside the rolling120-game-minute window. Neither an intimate encounter nor a perspiration description alone creates consumption, consent or infection.

This document records approved design and explicit remaining decisions. No perspiration meter, activity accumulation, public presentation or clothing integration is implemented by this documentation update. Existing kissing and ingestion controllers remain separate, as do unfinished typed ingestion triggers.
