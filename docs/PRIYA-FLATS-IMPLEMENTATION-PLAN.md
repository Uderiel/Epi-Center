## CP061 — reuse Erin recovery numbers; Priya-at-work release condition

Owner directs implementation of the existing Erin favorite-red-heels recovery system for the flats: retain the actual recovery/progression/cost/cadence rules, replacing influence with Item-binding. No additional Selfhood meter is needed. Use shared `internal-mastery` action/exposure/final-gate logic through an object-specific adapter: Common reference success−10binding/+20mastery, failure+5binding/+5mastery; at full Common progress a failed resistance instead reduces binding5and consolidation prevents routine/exposure setbacks; Resist costs3Resolve, desperate resistance retains−2modifier/no Resolve cost, Regain Composure restores6Resolve, and actions share30game minutes. Mastery requires100progress AND0Item-binding, preserving durable progress. Exact rule behavior comes from current shared source, not a duplicate approximate reducer. Binding Strength replaces the opposing Reasoning stat; current Erin reference value6is the compatible baseline for this parallel, not a new thinking shoe/NPC.

Owner clarifies final true-solitude condition: **Priya must actually be at work and not in her apartment**. Final release additionally checks that the flats are unworn and alone in their room; presence/observation cannot be bypassed by looking away or silence. Actual NPC location/work availability is required, not a weekday-time shortcut. The wearer/present Priya blocks human reversion. No camera/privacy simulation or invented remote witness is added.

CP052–CP060 activation, object-body awareness, weekend32-minute jog, retrieval, worn+5/hour, initial100%binding and2d20worn disadvantage/unworn-alone advantage remain. Runtime implementation is now underway as a complete bounded lifecycle, preserving original saved character/form/equipment records and all prior acceptances. Practical default event start06:00within the approved weekend frame supports the32-minute loop; changes/timings used to connect approved steps must be documented as implementation defaults. Cat/collar deferred. No new test/deployment claim at this checkpoint.

> CP060 universal advantage/disadvantage helper and Erin integration are implemented/tested/live in v1.0.100. Flats-specific progression/lifecycle and jogging remain design only. See CURRENT-STATUS.md for publication evidence and the exact next action.

## CP060 / v1.0.100 — universal two-d20 advantage implemented

Owner approved universal d20 advantage/disadvantage: advantage rolls2d20and keeps the higher natural die; disadvantage keeps the lower. It is not a flat modifier. Normal rolls still use1d20; original attributes and genuine numerical modifiers are added after selecting the die. Existing natural1/natural20and opposed tie rules inspect the selected die. Future explicitly advantaged/disadvantaged d20rolls use the same shared helper.

Implemented `EpiCombat.d20` and shared roll formatting, mode-aware combat saving throws/actions and internal opposed contests (each side independently supports a mode). Ordinary unflagged rolls preserve their one-die RNG consumption and existing rules. Erin's existing relaxed-home, actual-sleep and qualifying recent-work influence-resistance contexts now grant **advantage**, replacing their former contextual+4/+2. Those contexts now have the same two-die advantage semantics, not stacked+4/+2or different advantage strengths. Desperate Resistance's genuine−2modifier, original Willpower,3Resolvecost,30-minute interval, mastery/influence progression and worn exposure are retained. Current decision-resistance and other ordinary rolls gain no new context triggers by assumption. Existing separately authored numeric bonuses elsewhere are not automatically relabeled advantage.

Erin's dock labels advantage; action receipts show both player dice, kept result, unchanged modifier and opposing die. Saved old receipts and all character/form state remain intact. Flats' worn disadvantage/unworn-alone advantage will use this shared helper when their lifecycle is implemented; Item-binding+5/hour remains a meter change. This release does not implement flats, jogging, retrieval or escape merely because their designs are on this branch.

Verification:987 named automated cases plus entity assertions across53suites PASS, including14new dice/roll integration cases and exhaustive pair/contested comparisons; syntax/module paths/whitespace PASS.25local Chromium groups PASS, including real Erin button,2dice receipt, exact cost, cooldown/reload, loss of stale advantage and all three NPC/cubicle regressions. Full public source/browser verification follows deployment. Real-model quality/native Android and owner acceptance remain separate. No Worker deployment required. Exact next action: publish authorized v1.0.100to main/rebuild, verify Pages and actual deployed source/control behavior, update publication evidence and give the working owner test link.

## CP059 — initial100%Item-binding and contextual roll advantage/disadvantage

Owner confirms that newly transformed flats start at **100%Item-binding**, paralleling full influence when Erin takes over. This is the starting Item-binding percentage, not a Binding Strength+100dice modifier or an automatic mastery value. Worn exposure remains+5Item-binding points/game hour under CP058; canonical cap/clamping must report actual changes rather than display fictitious growth above a full meter.

Recovery rolls occur at **disadvantage while the flats are being worn**. They receive **advantage when unworn and alone**, illustrated by the owner as being left in Priya's closet in a different room from her. Do not grant the alone bonus merely for removal while still sharing space with her, or infer that all unworn circumstances automatically count as alone. Actual worn state and actor/room presence must govern context when implemented.

The exact mechanical meaning of advantage/disadvantage is still unselected: existing Erin resistance uses contextual flat modifiers, whereas a two-d20 keep-high/keep-low mechanic would be a distinct dice-resolution choice. Ask the owner before implementing one or silently stacking them. Magnitudes/stacking and intermediate contexts remain open. The closet example establishes a recovery-roll advantage situation; it does not by itself resolve every spatial edge case of CP056's separate genuinely-alone human-reversion gate.

Roll gains/losses, exact zero-binding escape threshold, initial mastery, Binding Strength numeric profile and retry/resource policies remain to be reconciled. Do not claim the whole Erin system has been approved verbatim merely because the initial percentage and contextual direction are parallel. Design only: no runtime change, new tests, deployment or owner gameplay acceptance. Cat/collar deferred.

## CP058 — Item-binding is the influence-parallel meter

Owner explicitly names the inanimate influence-parallel track **Item-binding**. The player already knows they are an item; this measures the curse's binding of the person to that object state, not a mistaken belief about physical appearance or the influence of a separate personality.

**While worn, add5Item-binding meter points per game hour**, parallel to Erin's cursed-heel influence exposure. These are **meter points, not a+5dice modifier**. Keep **Binding Strength** as the separate opposed-roll rating used by the curse. No starting rating or relationship between meter level and dice bonus is approved by this naming/mapping decision.

Reconcile prior CP056 self-restoration concept through this influence-parallel Item-binding track rather than silently introducing both Item-binding and a third mandatory Selfhood meter. “Selfhood” was an assistant-suggested name, not approved. High binding represents greater curse hold; the owner's intended recovery is reclaiming mental will/reality. Initial meter level, numeric range, exact escape threshold, resistance reductions, failure increases and unworn/alone bonuses still require decisions. Do not yet claim that Item-binding0is formally selected simply because Erin uses influence0.

Existing decisions remain:100%mastery plus complete restoration required for escape; final human reversion only when truly alone;30-minute recovery opportunities after first wearing; greatest progress unworn/left alone; single DC15 activation save and uninterrupted rapid three-stage transformation. This clarification approves no runtime code, new tests or deployment. Cat/collar remains deferred.

## CP057 — Binding Strength terminology and worn versus unworn progression

Owner accepts **Binding Strength** as the opposing curse concept for an inanimate item, distinguishing it from a living form's Reasoning/personality. The proposed recovery contest uses original player Willpower plusd20 against the curse's Binding Strength plusd20, separately from the initial DC15 activation save. Existing natural-roll/tie semantics are the compatibility proposal; do not add an NPC consciousness to the pair. A numerical starting Binding Strength of5 was proposed earlier but has not been separately distinguished from the owner's worn+5 request.

Owner says that while the player is **being worn**, they continue gaining **+5 at the same rate as Erin wearing her favorite cursed heels**. The current referenced Erin exposure is+5per game hour. The player can make the most recovery progress when **not worn and left alone**. Do not interpret this as prohibiting all worn recovery attempts, discarding earned mastery or granting automatic release. CP056's genuine-solitude gate for human reversion remains separate and mandatory.

**Critical numerical distinction still open:** whether the worn+5 increases the Binding Strength **roll modifier itself**, or adds5points per hour to a separate binding/itemization-pressure progression meter. Erin's analogous increase is an influence-meter change, not+5to the opponent's Reasoning modifier. Do not silently convert meter points into dice bonuses or invent a new numeric scale. Ask the owner before implementing that mapping. Exact unworn/alone bonuses, success/failure progress, limits, decay and mastered-state exposure remain undecided.

Design checkpoint only; no runtime code, new test results or deployment. Preserve separate concepts: initial activation resistance;30-minute later recovery; durable mastery; regained personal identity; curse hold/exposure; and truly-alone reversion. Cat/collar remains deferred.

## CP056 — inanimate mastery, reclaimed self and truly-alone reversion

Owner establishes a distinct supplementary progression system for inanimate object forms, initially Priya's flats. After the player has been worn as the flats, eligible recovery/resistance opportunities occur every30game minutes, analogous in cadence to Erin's internal resistance. These opportunities accrue mastery and support reclaiming the player's own mental identity/will/reality. There is no separate living form consciousness whose influence must be reduced; do not relabel this as Priya's influence or copy Erin's numerical influence system without design.

Escape requires **100% mastery AND fully restored personal identity/self/reality**. The second track's final name, scale, starting value, exact increments, roll rules, costs, failure effects, and whether the two tracks change on the same action remain unselected. “Selfhood” is a possible concise label, not an owner-approved field name or100-point numerical contract. Do not infer a new stat allocation, independent NPC personality or additional consciousness in the shoes.

Even after both progression conditions are met, voluntary human reversion is permitted only when the object-form player is **truly alone: no one else is around**. It is not enough that present people look away, cannot see/hear the player, are unaware of consciousness, or have their eyes closed. A present wearer therefore prevents human reversion regardless of awareness. Do not perform automatic mid-wear escape or substitute an observer-perception roll. This is an explicit spatial/presence gate, separate from earned mastery and self-restoration. Exact nearby-area/distance boundary, adjacent-room handling, nonhuman beings and remote observation still require definition; no global-world emptiness rule or invented detector is implied.

Open bookkeeping: when the first30-minute opportunity starts relative to first wearing; whether later off-foot time remains eligible; explicit action/automatic opportunity UI; earned progress persistence and duplicate/reload protections; final reversion placement, belongings and paired-object lifecycle. CP052's single activation save and no mid-transformation resistance remain unchanged: these later recovery attempts occur after the object transformation, not during its three stages. No new runtime, tests, deployment or owner gameplay acceptance is claimed. Cat/collar remains deferred.

## CP055 — approved outdoor jogging pace and Stamina cost

Owner approved a distinct jogging travel mode: **4game minutes and2Stamina per adjacent outdoor tile traversed**. Walking remains8game minutes per move; no new walking cost, sprinting pace/cost or recovery rate was chosen. Apply jogging through the existing canonical body-resource/action/time systems when implemented; do not use a display-only deduction or grant a new pool.

Priya's full eight-park outer circuit around the Spire now resolves to **32game minutes and16Stamina**, returning to the starting park. This is the concrete “about30minutes” jog/discovery duration under CP054; it does not extend the item window to the entire06:00–07:00 frame. She returns to walking speed for the homeward trip after jogging, including the roughly8-minute first northward edge before noticing the loss, and follows an actual legal return route. Her default behavior after retrieval remains changing into the flats (CP053). The precise jog start within the weekend morning frame is still unselected.

Remaining implementation decisions: jogging eligibility for different current bodies, insufficient-Stamina handling, explicit player controls, no partial/double charge on blocked routes or reload, schedule conflicts and event recurrence. Costs/time are per completed legal tile; transaction validation and duplicate protection must use shared systems. This approval does not introduce combat sprinting, universal movement powers, new physical-needs rates or automatic stamina healing. Cat/collar remains deferred. Design approved and recorded; jogging runtime integration/tests/deployment not claimed.

## CP054 — weekend morning jog, discovery window and return trigger

Owner's final selection supersedes the tentative evening times: **Saturday and Sunday mornings, within06:00–07:00**, not17:30–18:30 or18:30–19:00. Priya visibly jogs around the Central Hub loop surrounding the Spire for about30 game minutes. Her flats have dropped from her bag by the NE park bench and are discoverable/available for the player during that30-minute jogging period. The entire06:00–07:00 frame does not imply a60-minute item window. Safe pickup/examination and attempted-inventory curse activation remain unchanged.

After the jog, Priya starts heading home. The owner describes one northward travel step, approximately the existing8game minutes, after which she recognizes that her flats are missing. She turns back and follows the legal route to retrieve them, then normally changes out of her jogging tennis shoes into the recovered flats (CP053). Retrieval is linked to her actual jogging/departure/realization sequence; it is not an arbitrary immediate NPC teleport after transformation. The transformed player's disappearance still causes no NPC/player alarm or security event.

The precise30-minute jog start inside06:00–07:00 remains unselected; do not silently claim06:00–06:30 as approved. Recover the existing graph for the homebound north edge and bench return. A complete eight-edge peripheral walk at the current8minutes/edge exceeds30minutes; exact jogging route/pace therefore needs reconciliation rather than changing global travel rates or claiming a full loop already fits. Preserve actual visible presence and route progress. This is an authored weekend event, not proof of an already completed run or an everyday jogging habit.

Further open lifecycle cases: holding the flats when the discovery window ends; successful-resistance retries; Priya's handling of a safely held/untransformed pair; footwear storage and worn perception; recurrence without duplicate shoes or a second conscious pair; escape/release/mastery. No new resolution to these cases is implied. Cat/collar remains deferred. Design checkpoint only: no runtime integration, tests or deployment.

## CP053 — Priya normally wears the recovered flats

Owner confirms Priya would likely pick up the recovered flats and put them back on: after jogging around the park/Central Hub she does not want to keep her feet in the tennis shoes worn for the run. Normal retrieval therefore leads to changing from jogging shoes into the flats, rather than defaulting to carrying the flats in her bag. Preserve “likely” as her ordinary preference, not an unconditional action bypassing availability, access or physical restrictions.

Picking up the flats, removing jogging shoes and putting on the flats are distinct physical steps when implemented. Do not equip two footwear pairs, teleport Priya, duplicate the conscious pair or invent a completed jog as part of her ordinary daily schedule. This owner decision supplies the footwear-change preference; exact return delay, legal route, location/duration of changing, jogging-shoe storage, wearing/carrying perception, and subsequent destination remain undesigned. It does not approve new senses, outward communication, escape/mastery effects or new intimacy. CP052 initial resistance/no-mid-transformation-save rule and the unnoticed disappearance remain unchanged.

Design only: no runtime integration, test execution, publication or new owner gameplay acceptance. Cat/collar remains deferred.

## CP052 — approved flats activation resistance; no mid-transformation saves

Owner approved one initial `1d20 + original player Willpower` against DC15 when attempting to put Priya's flats into inventory. Safe temporary pickup/examination remain unchanged. Use the existing natural1/natural20 rules and original-player attribute ownership, not equipped-form attributes. Success resists the pull and aborts acquisition: the flats remain outside inventory, with no completed transformation or acquired item. Failure commits the rapid three-stage transformation; **no resistance saves, interruptions or rerolls between stages**. No NPC/player awareness of the disappearance. This does not grant a later escape/mastery result or change the object-specific embodiment contract.

Persist a resolved activation outcome so reloads/duplicate dispatch cannot reroll it or duplicate either item/player state. The policy for a later deliberate new attempt after successful resistance remains unselected; one initial roll does not invent a lifetime immunity, safe acquisition or cooldown. Action-time/resource costs are also not newly chosen. This is an approved design decision, not a runtime implementation or passed test. Cat/collar remains deferred; published gameplay remains v1.0.99.

# Priya's cursed flats — resumed design checkpoint

The owner clarified that “flats” means Priya Shah's cursed shoes, not apartment interiors or another character's footwear. Work on their design may proceed while the owner tests v1.0.99. This is design continuation, not blanket approval of unresolved mechanics. Priya/Nadia/Daniel owner acceptance remains pending; existing published gameplay is unchanged by this checkpoint. Cat/collar stays deferred.

## Settled source facts (CP037–CP041)

- A well-worn, size-seven pair lost under a bench in Northeast Central Hub park after Priya changed into jogging shoes.
- Temporary pickup/examination is safe. Attempting to put them into inventory to take them triggers the curse immediately; wearing is not the activation condition.
- The player becomes the flats themselves, with one consciousness across both shoes. Dim ground-up sight and nearby hearing; no independent movement, speech or outward indication of awareness. These are flats-specific rules, not universal object-form senses.
- Transformation is nearly instantaneous in game time. The approved three-stage prose is recorded only by its opening and summary in accessible repository records; the complete exact passage must be recovered before any verbatim-restoration claim.
- Priya returns shortly afterward to retrieve them. No witness alarm, missing-person concern or invented security dispatch.
- The object appearance overlay represents the flats; the original player record remains preserved.

## Unresolved mechanics; resolve before their runtime implementation

1. Initial resistance is approved in CP052 above. Still settle any later deliberate retry after successful resistance and exact action-time/resource costs; duplicate dispatch/reload cannot reroll a resolved attempt.
2. CP054 fixes the weekend06:00–07:00 frame,30-minute jog/discovery period and homebound first-north-edge realization/return. CP055 now sets jogging4minutes/2Stamina per tile: the full eight-park circuit is32minutes/16Stamina. Still choose the exact start and resolve scheduler interruptions and unavailable/blocked return cases.
3. Handling, carrying, wearing/storage and sensory occlusion; location/ownership references for a single conscious pair.
4. Object-form time/needs/capabilities, retained possessions and saves; protect against inventory duplication and player-state overwrite.
5. CP056 establishes30-minute post-wearing recovery opportunities,100% mastery plus fully restored self, and truly-alone human reversion. Define the supplementary track, numerical resolution and presence boundary before implementing; no living-form influence analogy.
6. Relevant shared inanimate/escape guide amendments and deterministic/browser acceptance gates.

## Next exact action

Initial resistance, footwear-change preference and weekend event sequence are settled (CP052–CP054). Jogging pace/cost and the32-minute full loop are now settled by CP055. Next settle the exact jog start, insufficient-Stamina/capability handling and real retrieval route, then held-item/window expiry, physical changing/storage and worn perception. CP056 now establishes the escape gates; settle the supplementary self-restoration track and actual solitude boundary next. Continue in dependency order using current clock, actions, world-object and NPC travel adapters. Implement only settled behavior in a bounded, testable slice; never publish a trapping encounter before its continuation/recovery contract is defined. This checkpoint executes no gameplay test or deployment.
