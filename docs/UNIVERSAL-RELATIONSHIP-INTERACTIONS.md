# Universal relationship interactions

## Current rule and implementation

Owner approved the conversation examples as the general template for all present and future NPCs, plus actual gifts suited to an NPC’s interests. The implementation uses the existing signed, stable-player/entity relationship record and event ledger, not another score. Generic defaults are inherited through relationship policies, heard speech is evaluated at the shared scene boundary, and existing direct dialogue paths use the same evaluator. Registered future NPCs inherit the generic exchanges automatically. Character-specific controllers and rewards remain authoritative.

| Resolved exchange | Default change |
| --- | ---: |
| Ask about an authored interest, then give a thoughtful relevant response | +2 |
| Share a relevant personal experience | +2 |
| Discuss media actually being shared | +2 |
| Express considerate kindness or appreciation | +2 |
| Give a specific sincere compliment | +1 |
| Dismiss or belittle something shared | −2 |
| Press after an actually stated boundary | −3 |
| Break an explicitly accepted recorded commitment | −2 |
| Transfer an actual preferred gift | +5 |

Preferred gifts reuse the established +5 preferred-gift reward. Tits’s gift controller still owns her transfer, +5, and touching-incident reset. Her purchase/kindness/patience rules remain separate. Erin’s existing care effects and quotas remain, without stacking the same shared exchange with another care award. Existing professional praise, listening, visits and aggression rules retain their own values and deduplication. Declining affection or an invitation is not a universal penalty.

## Context and repetition

Interest questions do not award points by themselves. Follow-ups require the same actual room and presentation. Shared-media credit requires an actual activity record and, for Priya’s date, the agreed identity. Positive categories resolve one at a time; repeating or paraphrasing a category for the same topic in the current date/day does not produce more credit. The date has its own scope; ordinary interactions use a game-day scope. Existing character-specific cooldowns remain separate.

Private thoughts, hypotheticals, reported insults, unavailable recipients and bodies unable to speak do not qualify for these spoken exchanges. Negated dismissal is not an insult. Existing NPC agreement, access, recognition and body rules do not change. Eve can receive appropriate actual remote conversation, but has no physical gift-receiving body. Dart retains his authored care/play/handling rules rather than being assigned human film conversation.

Actual authored NPC replies can record a stated boundary; generated prose cannot create penalties or awards. Commitment outcomes require an accepted controller record. Priya’s accepted after-work invitation is connected to completion/missed attendance; merely declining an offer or leaving unfinished unaccepted content does not create a promise penalty. Other controllers can call the same accepted/completed/broken adapter where an actual commitment exists.

## Gifts and authored interests

Typed “I give {owned item} to {person}” and the optional gift shortcut share one controller. The item must exist, be carried, owned and unequipped. Borrowed, quest/bound/cursed/form items cannot be transferred through the generic path. A declined/unmatched gift stays with the player. A transfer removes one unit, preserves any remaining stack’s ownership, stores the recipient’s actual item and receipt, and awards once per transfer ID across reloads.

Current authored profiles include Priya’s crystals/writing/rom-coms, Erin’s foxes/books/plants, Tits’s pink/sparkly interests and nightlife/sweets, Charity’s stories/mending/crosswords/roses, Daniel’s cooking/hiking/wine, Nadia’s creative marketing and Richard’s department/business interests. Preferred-gift matching is configured only where a preference is authored: Priya crystals, Erin fox items, Charity roses/mint chocolate chip, Daniel wine from his established wine-collecting interest, and Tits’s existing preferred-gift rules. No missing personal gift preference was invented for another NPC. Erin’s gift is stored with her existing form state; no second physical Erin is spawned.

Future NPCs can provide `relationshipPolicy.interactionProfile` with `interests: {topic: [aliases]}` and `gifts: [authored preference phrases]`. Their policy can override a default event weight. Registering a new interest does not reveal it to the player; existing learned-information rules remain separate. The recognizer supports contextual common phrases, not unrestricted semantic understanding of every possible sentence.

## Player access and verification

Eve’s live lexicon explains relationship conversation, gifts and repetition. The relationship display includes recent recorded score changes. Priya’s listening shortcut now has a matching “I listen to Priya” text route. A real typed date conversation can reach +10; her offered kiss waits until the thirty-minute shared date finishes; no developer score mutation is used in that browser scenario.

Focused tests cover the date threshold, distinct categories, repetition/paraphrases, media context, private/hypothetical speech, presence/body/presentation changes, negatives, accepted commitments, gifts/ownership/stacks/quest restrictions, Erin, future registered NPCs and player isolation. Browser checks cover the actual composer, clock, text/shortcut gift parity, negatives and reloads. See verification/universal-relationships-summary.json for the final evidence. No owner saves or paid model calls were used. This follow-up is local and unpublished; v1.0.130 remains unchanged.
