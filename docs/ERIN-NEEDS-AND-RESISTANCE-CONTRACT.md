# Erin needs and resistance correction — v1.0.65

## Resistance audit

The actual character-creation UI emitted `attributes['Focus / Willpower']`; the combat engine and Stats supported the alias, but Erin/Kibbles internal-resistance and independent/control adapters used direct `.Willpower`. This could show a correct attribute in Stats and still roll +0 for internal control. Both creation and Hub now migrate the legacy key to Willpower while preserving all other allocation/state. Canonical values, including zero, take precedence. A shared originalWillpower accessor supplies Erin and Kibbles resistance/control and their narration, using original attributes only.

Dice are still independent 1+floor(rng()*20), without selective rerolls or outcome weighting. Player/form natural rules and form-preserving ties remain. Repeated identical same-minute failed control actions use the saved result without consuming randomness, and print a nonnumeric No new roll notice. New time/opportunity behavior is unchanged. Internal resistance still costs 3 Resolve and uses its thirty-minute cadence; desperate resistance retains its −2 modifier. Actual Resolve before/after and actual influence/progress changes are now shown. Final rarity pushes remain separate.

The user-supplied feed contained 19 distinct contests after deduplicating identical same-minute entries; player raw mean 7.315789, form raw mean 11.157895. That is low for this sample, but not evidence that the random generator is biased. No alteration to raw rolls is included. Tests enumerate all 400 pairs and verify face mapping and natural outcomes. No user character names or complete private feed are copied into repository evidence.

## Need-driven behavior

Urgent bladder threshold 80; hunger threshold 60, or at meal hours 07/08/12/13/18/19 with hunger at least30. Meal cadence prevents repeated meals immediately after eating: thirty minutes before another hunger-driven meal, three hours before a scheduled meal. These are baseline implementation balance values, not new owner-authored numerical rules.

At 75–100 influence, an urgent need can interrupt leisure and initiate a form-led decision without a form-attacker roll; the player can explicitly resist using original Willpower. Need episodes can use the existing unique exceptional triggering-event opportunity, rather than unlimited decisions. Below75 the existing contest rules remain; mastered/zero forms cannot autonomously take control. A successful player override retains thirty minutes of choice even if the need remains high.

At home, each move follows a real apartment edge. Toilet use takes four minutes and resets bladder at completion, recording hygiene. Hunger routes to the kitchen, selects an available authored recipe, consumes its actual ingredients at completion, creates dishes and a prepared meal, then eats that meal in one minute. Recipe times remain smoothie4/breakfast8/chicken12/steak12/salad5. Preference uses a light weekday breakfast, fuller weekend breakfast, salad at midday or chicken in the evening, with existing-stock fallbacks. Empty stock cannot create food, pay rewards or spend gold automatically. Prepared meals reduce hunger40; other manual food servings reduce25; both record lastMealAt. These are provisional nutritional balance values. No combat pools are restored by eating or toilet use.

Office bladder behavior uses the Technology Center graph to the women's stalls B, including G→F and actual corridors. Office actions bind to the office room rather than stale apartment state. Apartment food cannot be eaten remotely at work; office catering/packed lunches/store transactions remain future content. The office movement authority hook now also respects a conflicting unmastered Erin decision, while a matching step toward the toilet may cooperate without a new contest.

## Sleep, time and reporting

Wake is ineligible during night or before weekday07/weekend08 unless a physical need requires waking. This closes the prior 22:31 sleep→22:32 wake loop. Need-driven waking remains possible. Full eight-hour manual sleep and existing interruption/ownership rules remain.

Bulk Wait runs the same per-minute autonomy path as live ticks, restoring the canonical final clock in a finally block. Full-Erin hunger/bladder accrual is evaluated per minute with the existing rates, avoiding all elapsed growth being applied before relief. Timed transactions retain guard snapshots and cannot complete twice. Events carry their actual game-minute timestamps into the live feed; numeric need changes are rounded for readability. Automatic change messages explicitly say no roll. Influence at100 is displayed as capped/no increase; no fictitious +5 claim. Passive heels-off recovery and curse exposure remain time-driven and labelled. Original attributes, resources, mastery progress and existing saves are not reset.
