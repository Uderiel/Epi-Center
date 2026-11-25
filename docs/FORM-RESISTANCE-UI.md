# Universal form resistance drawer — owner-approved UI rule

All worn forms use the same collapsible Internal resistance drawer. It stays blue while no actual roll is eligible and turns green when the actual native controller offers resistance. This is one rule across living, animal, humanoid and inanimate forms. It does not add a new source of rolls or grant an action to a display-only/unbuilt form.

The highlight is optional-action information. It never rolls, spends resources, changes influence/mastery, starts movement, forces a decision, opens the drawer or creates a new popup. The player chooses a button or equivalent typed action. Voluntarily approaching a pack or pursuing prey is the player's choice, not an automatic resistance request. An actual form-origin urge may offer resistance; the player's selected travel/action does not manufacture that opportunity or count as a missed check.

## Shared implementation

`resistance-availability.js` provides the read-only `assess` projection. Its inputs are actual native form timing, Resolve, full/prerequisite state, mastery/binding/combat gates and independently eligible decision/escape opportunities. Standard influence resistance/desperate/recovery honors the saved internal-action cooldown; paid resistance is disabled below three Resolve while zero-cost desperate resistance remains an opportunity above zero Resolve. Rendering does not initialize a clock, call RNG or mutate game state.

The drawer's `data-ready` value drives the global blue/green CSS. Actual action buttons remain attached to their existing native controller; a stale menu or text request still encounters the controller's authoritative guards. New adapters must supply real eligibility and route actions through that controller rather than implement a second die/cost/mode or set a cosmetic green state.

`formMindMarkup` keeps Erin and Kibbles, dispatches the actual cat and object-form panels, and leaves unsupported native forms blue with an explicit missing-controller reason. Preeti and Pri use `catResistanceMarkup` with their existing `EpiPriyaCat.internal` actions. Priya's flats use the same readiness contract and their existing recovery controller, retaining actual first-wear prerequisites. Cat/flats resistance buttons now sit in this common drawer; their body/location controls stay in the nearby panel.

Navigation inserts exactly one common drawer across normal and special room layouts. Combat enters the blocked common dock before building guarded household controls; this fixes a render failure when an actual cat encounter is active inside Priya's apartment. Collapsed/open state and the normal front-dock behavior remain controlled by player choices and the existing interaction-state mechanism.

## Readiness scope

- An ordinary cooldown becoming due can highlight the drawer.
- A separately eligible current-decision or escape roll can highlight it while influence resistance is cooling down.
- Mastery, permanent binding, active combat or missing physical prerequisites suppress the internal rolls where the existing native controller prohibits them.
- Continuing encasement is not itself a resistance roll and no longer produces a false green highlight by itself.
- Reading/expanding a drawer cannot execute resistance.
- An unimplemented form such as Markus does not advertise a fabricated action. Its future native conquest/instinct adapter must use this common contract when an actual roll is implemented.

## Text and verification

Existing text-to-controller matching is retained. Common aliases include “resist influence,” “resist the form,” “resist this urge,” “attempt desperate resistance,” “regain composure,” and “resist this decision” where the corresponding actual control exists. Negated, quoted, hypothetical and private-thought input remain subject to the existing shared intent rules.

Verification: 2,324 checks across 187 suites, eight phone-width browser checks, eight changed-module syntax checks and five inline scripts pass. Evidence: verification/universal-resistance-summary.json. Browser fixtures use isolated synthetic slot 3 with AI disabled, real native controllers and no owner save. Browser coverage is readiness/action/cooldown/color/reload projection, not proof of new transformation, forest, pack, prey or secret-mastery systems. Markus's approved bloodlust metadata/timer helper and secret-route directions are tracked separately; those policies do not create a native forest controller.
