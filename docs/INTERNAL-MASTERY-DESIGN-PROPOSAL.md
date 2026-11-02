# Internal mastery — discussion proposal, November 1, 2026

Status: owner requested an objective recommendation. This is NOT an approved numerical ruleset or implemented gameplay. Current published gameplay remains v1.0.51. Track ENC-01, REST-13, REST-16 and KB-01/02 in the active log. Historical Erin testing is retained; new mastery tests must extend that coverage, not imply it was absent.

## Owner direction and proposed mechanics

Preserve Erin's slow potential cooperative mastery route through naturally polite, helpful and considerate behavior. A testable roll-based internal route must also accumulate progress rather than grant immediate mastery. Reduced-activity opportunities can include her specific Favorite Red Heels being removed or Erin watching a show. Form-active actions may restore influence. The owner is considering reducing influence to zero followed by a final saving throw; that gate, its numbers and its exact resolution are still under discussion.

These examples do not authorize arbitrary shoes to affect the curse. Heels removal currently stops physical exposure without reversing established stages. TV activity/distraction and influence recovery are not implemented simply because an apartment room exists.

## Recommendation: separate temporary pressure from secured progress

Use shared mechanics with entity-authored conditions, rather than identical personalities or opportunities:

- Physical transformation: existing bodily stages/encasement; reduction of influence does not reverse them.
- Current influence: temporary mental pressure, bounded 0–100. It can fall through internal resistance and rise through eligible form activity.
- Internal mastery progress: durable earned progress/milestones. It does not increase from merely opening a panel, saying “thank you” repeatedly, waiting offline or having zero influence momentarily. Ordinary influence recovery should not erase this progress.
- Permanent base mastery: a once-only result with form-specific consequences. It is distinct from rarity/tier XP and temporary control. Mastered Kibbles never overrides player intentions.

The resistance route should require sufficient earned progress AND zero current influence before a final attempt. Zero alone is too weak a gate: otherwise temporarily dormant equipment or an easy distraction could produce permanent mastery with one lucky roll. Do not expose an actionable “master now” button without checking both requirements atomically.

## Roll loop and opportunities

1. A real game-state opportunity opens. Its cause, duration and source are persisted. Ordinary heels removal can lower pressure or improve resistance conditions; it must not instantly set influence to zero, grant mastery or erase physical changes. Watching a show can provide a bounded distraction once that activity is implemented.
2. The player deliberately attempts an internal action. Use the player's preserved original defensive attribute, not the form's imposed attribute overlay, against the form's authored mental-control opposition. Willpower versus Reasoning is a candidate for a direct mental contest, consistent with existing Mind roles; each form's opposition, modifiers and any alternative route need explicit agreement. Do not add an unapproved eleventh attribute or automatically choose the form's highest attribute.
3. Success reduces current influence and earns a bounded amount of durable progress. Failure consumes the defined attempt/cost; it need not wipe out previous progress. Reject unavailable actions without spending time/resources. Attempts must consume a real action/opportunity or authored game-time interval, so repeat clicking is not free.
4. While the form is active, eligible completed actions restore a defined number of influence percentage POINTS. Do not use a percentage of current influence: multiplying a zero bar by a percentage cannot recover it. Do not count the same action twice, count player UI navigation, or add offline/wall-clock ticks.
5. At zero influence with earned readiness, allow one final attempt per fresh opportunity. Choose either an opposed save or a save against a clearly derived defense; do not add an unexplained second resistance roll. Tie and natural-roll handling must match the agreed core rules. A failure should cause a limited influence setback and require a new opening, retaining durable progress rather than resetting the entire journey.

Costs, progress requirement, reduction/regrowth amounts, failure setback, tie policy and eligibility limits are intentionally UNSET. Examples discussed with the owner are not balance-approved values.

## Objective balance risks

- An influence-only bar with strong regrowth creates endless oscillation and makes good rolls feel wasted. Durable progress preserves earned advancement.
- A final save without an attempt limit becomes inevitable through click-spam or reload. Preserve/check outcome and opportunity state; reopening UI is not a fresh attempt. Use the existing save-resume model; stronger guarantees against manual save editing would require a separate persistence decision.
- If passive regain exceeds expected reduction between opportunities, the route is mathematically unwinnable. Simulate full cycles across weak, average and strong original Willpower builds, not just individual rolls. A low-control-attribute character should have a slower cooperative/alternate route rather than an accidental permanent lock.
- Resolve cannot be depleted by internal attempts without an authored recovery opportunity. Do not import obsolete recovery/healing rules to patch this gap.
- “Passive” regain should depend on actual tagged form-driven activities, not every player action. Quiet/removed-heels conditions should provide meaningful progress opportunities. Avoid making cooperation itself a punishment by arbitrarily undoing mastery progress when the player helps.
- Permanent mastery must not silently refill resources, reverse transformation, award quest rewards twice, duplicate a form or re-enable takeover for mastered Kibbles.

## Cooperative Erin route without requiring integrated AI

The shared action-driven world clock already exists. A slow, deterministic first version can track eligible active game time, completed helpful tasks, respected boundaries, commitments and varied meaningful conversations with explicit UI actions or bounded text intents. Record/cap rewards per distinct task/opportunity and persist them across reload. Merely idle wall time does not qualify.

An integrated AI would help interpret unrestricted natural conversation, but it is not required to score authored actions. Its interpretation must not bypass canonical reward/time/action rules if added later.

Retain cooperative trust/goodwill separately from suppression of influence. Erin becoming willing to grant freedom is different from being mentally overpowered. Both paths can converge on the same base-mastery result; cooperation need not force Erin to be reduced to zero influence or beaten in a hostile contest. Exact agreement/negotiation requirements and whether the cooperative ending has its own stabilizing save remain owner decisions.

Source evidence: v0.8.84 contains an earlier `sayErin817` branch where trust/goodwill opens a discussion about freedom while explicitly withholding mastery. This demonstrates the intended distinction, NOT permission to reactivate old thresholds or assume earlier definitions remain final. Current `erin-restoration.js` restores limited home-topic trust (+1 for a distinct eligible topic, capped twice per game day), not the full cooperative mastery system. Do not label it complete.

## Required tests before implementation acceptance

- Original player resistance attributes versus imposed form attributes; no profile overwrite.
- Legal/illegal opportunity and action costs; partial/full encasement; resource exhaustion and available recovery.
- Repeated ordinary successes build progress but never grant instant mastery.
- Influence cannot become negative or exceed its maximum; zero alone grants nothing; points-based regain can recover from zero.
- No duplicate activity accrual; no UI/offline progress; saved opportunity, progress and outcome survive reload.
- Final failure preserves progress and does not allow immediate retry without a new eligible opening.
- Low/average/high attribute cycle simulations, including an activity-heavy form and alternate cooperative route.
- Helpful-action repetition caps; no keyword farming; slow route works without an AI service.
- Mastery permanence, current resource balances, unchanged bodily transformation and Hangry Fangs' exactly-once report hook.
- Kibbles retains player intentions after mastery; Erin-specific circumstances never become universal rules for all forms.

Next design step: agree on the state model, resistance/opposition attributes, opportunities, costs/recovery and final-failure behavior before assigning tuning numbers or implementing gameplay.
