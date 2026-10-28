# Epi-Center Combat Foundations — Guide and Eve Dialogue Reference

Status: foundation prototype; no live combat interface yet. This document is the source for future Guide entries and Eve's explanations. Exact balance values are provisional.

## What is a combatant?
Players, NPCs, forms and cursed objects use the same basic record: identity, type, rarity, ten attributes, Health, Stamina, Resolve, Arousal, abilities, conditions, equipment, relationships and form state. Each individual may have different resource maximums and special actions. Rarity sets a baseline difficulty, not an automatic win.

## What do the four bars mean?
- Health: physical survival. Zero can mean physical defeat.
- Stamina: effort and exertion. Exhaustion does not automatically mean defeat.
- Resolve: mental resilience and capacity to resist influence. Zero can mean mental defeat.
- Arousal: an internal pressure meter. Reaching its encounter-defined maximum can be a loss condition.
Willpower and Stability are attributes for checks; Resolve is a resource, not an eleventh attribute.

## What happens when I am captured or encased?
Capture is not necessarily the end of play. Look for ways to recover Resolve and attempt mental saving throws, while also seeking opportunities to escape physically. The prototype has a Resist action that restores a small amount of Resolve on success and an Escape action that reduces restraint/encasement. The exact action economy and capture-specific difficulty modifiers are not finalized. Recovering Resolve improves the ability to withstand sustained mental pressure; it does not directly add a bonus to a d20 saving throw.

## What does a saving throw do?
A saving throw is a d20 roll plus a relevant attribute and modifiers against a difficulty target. It can resist hypnosis, influence, restraint or other effects. The prototype uses natural 20 as success and natural 1 as failure.

## What if a form wins?
The current encounter records defeat, but defeat is not permanent loss of agency or mastery potential. A form may gain influence over routines or actions as defined by future consequence rules. The player can resist internally, escape and try again. A form's victory does not automatically complete all 23 transformation stages or replace original attributes.

## What is mastery?
Mastery can eventually follow overcoming a form, including from within its influence. Mastery tiers and exact progress rules are not yet designed. Do not award mastery automatically from a single prototype combat result.

## What does the engine save?
Combat runs on an isolated snapshot. Its outcome record states who won, how combatants ended, and what occurred. The engine does not automatically alter persistent player or form data. A later consequence system will interpret approved outcomes.

## What can Eve explain?
Suggested future dialogue intents: `combat.basics`, `combat.resources`, `combat.saving_throws`, `combat.capture`, `combat.form_influence`, `combat.mastery`. Eve should use the same explanations as this Guide, with short examples and no new mechanics.

## Developer references
`rebuild/combat/engine.js`: `combatant`, `encounterSnapshot`, `savingThrow`, `act`, `victory`, `outcomeRecord`, `simulate`. Prototype fixtures: Kibbles, Erin's heels, ordinary NPC. Current combat actions and numbers remain provisional and should not be treated as final balancing.
