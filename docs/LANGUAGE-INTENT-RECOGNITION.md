# Language/context recognition follow-up — local, unpublished

Owner examples are a starting vocabulary, not a finite command list. `action-lexicon.js` supplies 39 action families plus speech/help/database/field syntax, with 113 examples and shared guidance. `build-action-lexicon.cjs` generates ACTION-LEXICON.md from this live data. Eve's “show common action phrases” response and topic suggestions use the same source.

## Parsing contract

`language-actions.js` produces mode, intent, target, quantity/reciprocity modifiers and an optional unobservable purpose:

- **Action:** “I travel to Burke’s Sweets” can start actual pathing.
- **Desire/intention:** “I want to travel …”, “I want to buy candy”, wishes/plans/future declarations and “I'd like to …” do not execute item, purchase or movement actions.
- **Purpose:** “I travel to Burke’s Sweets because I want to buy candy” starts only travel. The reason is stored as purpose, not another action. The narrator is never allowed to decide that candy was bought.
- **Speech:** “I speak aloud: ‘I want to buy candy’” speaks only the supplied words. Its contents are not reparsed into a purchase. Actual speech uses local listeners and current body capabilities.
- **Private/conditional:** thoughts, imagined actions, negation and hypothetical conditions do not execute outward actions.
- **Requests:** named counterparties can respond under actual controllers. A travel capability question previews a route rather than starting one.

Context entity resolution uses only actual current participants. Full names, unique first names, and a valid remembered target can resolve; ambiguous or absent targets cannot be guessed. Purpose is not exposed to NPCs as mind-read knowledge. Unsupported quantities are rejected rather than silently taking one item.

## Controller and feed contract

`language-actions-ui.js` maps structured requests to the existing navigation, menu/controller bridge, world-object, inventory/clothing, conversation, form and Dart controllers. Travel retains the full path graph, per-step restrictions, time/resource costs and interruptions. Flats cannot move or speak by issuing commands; their visual/listening observations use the existing ground-level flats controller. Item ownership, form binding, mastery and privacy checks remain in the original controllers.

Typing “I interact with [person]” can select a physically present conversation recipient without a menu. Object interaction opens/inspects actual offered affordances rather than guessing a destructive default. “I put [worn garment] into my inventory” uses actual unequipping rules; already-carried objects are not duplicated. “I sniff Dart back” uses the existing canine greeting, barriers and actual presence.

Social descriptors are outward controller-resolved acts without fabricated player quotations. Tits’s actual praise/compliment uses the already approved +1 kind-remark event. Flirtation creates no contact permission; bare criticism does not invent an insult quotation. Other NPCs retain their existing action/reaction policies and relationship accounting.

Controller-generated live-feed results remain authoritative for success, refusals and blocked actions. Feed entries carry only an interpretation-only `requestedAction` summary; parsing does not itself certify success. NPC social replies carry a separately controller-resolved speech-act summary. The AI’s serialized scene receives this neutral context plus the actual event outcome, not a menu label substituted for an event. Private purpose is excluded. All model prose remains unable to mutate state.

## Scope still separate

Kissing now uses the shared approved library, Tits’s actual availability policy, warning/confirmation, accepted contact and rolling exposure. See KISSING-INTERACTION.md. Other NPC acceptance policies and further owner-led body-target vocabulary remain separate.

## Evidence

The full automated suite passes 1,834 named cases. Twelve new parser cases cover modality, purpose, speech, privacy, reciprocity, quantity, contextual names and every documented family example. Browser checks use real composer submissions, actual pathing, an actual flats transformation, actual Dart greeting, a locally stubbed serialized NPC payload and Eve’s lexicon response. No owner saves, paid model calls or publication were used. Earlier contextual-menu, shopping/allocation and directory/permanent-binding regressions remain passing. See verification/language-lexicon-summary.json and the linked JSON reports there.

The last published release and its frozen Bible stay at v1.0.130. Reconcile these pending records into a new canon snapshot before any next publication; do not overwrite frozen release history.
