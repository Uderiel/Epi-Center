# Shared action lexicon — local, unpublished

This player reference is generated from the same vocabulary the recognizer and Eve use. Braces indicate placeholders for actual known targets. Templates describe requests; context, restrictions and the target’s response decide the outcome.

## Meaning comes before execution

- “I travel to …” asserts an action.
- “I want to travel to …” expresses a desire and executes nothing.
- A because/in-order-to/so-that clause is purpose, never a queued action.
- Quoted speech is delivered as the supplied words, not parsed again as item or movement commands.
- Private thoughts do not become public actions.
- Ambiguous entities require clarification.

## Vocabulary

### travel — Movement

- `I travel to {destination}`
- `I head to {destination}`
- `I walk to {destination}`

Use actual known paths; restrictions and interruptions apply.

### enter — Movement

- `I enter {place}`
- `I go inside {place}`
- `I step into {place}`

The entrance must be reachable and entry permitted.

### exit — Movement

- `I exit {place}`
- `I leave {place}`
- `I step out of {place}`

Use the actual exit and return path.

### interact — Observation and objects

- `I interact with {target}`
- `I check the options for {target}`
- `I see what I can do with {target}`

Start a conversation or inspect available object actions; no destructive default.

### examine — Observation and objects

- `I examine {target}`
- `I inspect {target}`
- `I look at {target}`

Describe only something actually perceptible here.

### listen — Observation and objects

- `I listen to {target}`
- `I listen for {target}`

Requires an implemented hearing/sound action.

### sniff — Observation and objects

- `I sniff {target}`
- `I sniff at {target}`
- `I smell {target}`

Uses actual scent/body/contact rules; no invented scent or contact.

### take — Inventory and equipment

- `I pick up {item}`
- `I take {item}`
- `I grab {item}`

Only available items that the controller permits taking.

### inventory — Inventory and equipment

- `I put {item} into my inventory`
- `I put {item} in my bag`
- `I add {item} to my inventory`

Put {item} into my inventory; existing ownership and equipped state matter.

### equip — Inventory and equipment

- `I equip {item}`
- `I put on {item}`
- `I wear {item}`

Use the owned item/form; mastery, binding and anatomy restrictions apply.

### unequip — Inventory and equipment

- `I unequip {item}`
- `I take off {item}`
- `I remove {item}`

Removal can be refused by the existing form/item rules.

### use — Inventory and equipment

- `I use {item}`
- `I activate {item}`

The actual item needs a supported use action.

### open — Observation and objects

- `I open {target}`
- `I browse {target}`
- `I look inside {target}`

Use an available object/drawer view; locks and privacy remain.

### close — Observation and objects

- `I close {target}`
- `I shut {target}`

Close an actually open object or curtain.

### read — Observation and objects

- `I read {target}`
- `I read through {target}`

Requires an accessible book, document, note or message.

### eat — Food and care

- `I eat {item}`
- `I nibble {item}`
- `I munch on {item}`

Consumes a real serving and uses its actual time/effects.

### drink — Food and care

- `I drink {item}`
- `I sip {item}`
- `I take a sip of {item}`

Consumes or uses the actual available drink.

### chew — Food and care

- `I chew {item}`
- `I start chewing {item}`

Starts the owned item’s real timer.

### clean — Food and care

- `I clean {target}`
- `I wash {target}`
- `I wipe down {target}`

Uses the actual care/cleaning controller and available supplies.

### apply — Food and care

- `I apply {item}`
- `I put on a layer of {item}`

Consumes an actual application and records its effects.

### talk — Conversation

- `I talk to {person}`
- `I speak to {person}`
- `I start a conversation with {person}`

Select a present recipient without needing the recipient menu.

### compliment — Conversation

- `I compliment {person}`
- `I pay a compliment to {person}`

An outward social act; the NPC reacts under their own rules.

### praise — Conversation

- `I praise {person}`
- `I congratulate {person}`

Uses existing praise/relationship rules, including deduplication.

### criticize — Conversation

- `I criticize {person}`
- `I criticise {person}`
- `I critique {person}`

The NPC may disagree; no fabricated player quotation.

### flirt — Conversation

- `I flirt with {person}`
- `I show romantic interest in {person}`

Expresses interest, never acceptance or permission for contact.

### kiss — Contact requests

- `I kiss {person}`
- `I ask to kiss {person}`
- `I ask for a kiss from {person}`

A request, not completed contact. Requires the target’s actual decision.

### hug — Contact requests

- `I hug {person}`
- `I offer a hug to {person}`
- `I ask for a hug from {person}`

Use the existing offered/accepted contact controller.

### pet — Contact requests

- `I pet {person}`
- `I gently stroke {person}`

Requires a present receptive target and the appropriate body.

### give — Trade and requests

- `I give {item} to {person}`
- `I offer {item} to {person}`

Transfers only a real item through its actual gift/trade controller.

### borrow — Trade and requests

- `I borrow {item}`
- `I ask to borrow {item}`

The owner can refuse; an actual loan record is required.

### return — Trade and requests

- `I return {item}`
- `I give back {item}`

Returns the actual borrowed item, not a newly created copy.

### buy — Trade and requests

- `I buy {item}`
- `I purchase {item}`
- `I add {item} to my basket`

Selecting goods is separate from paying the actual quote.

### pay — Trade and requests

- `I pay {register}`
- `I check out {register}`
- `I pay at {register}`

Must be at an actual available checkout.

### start — Ongoing activities

- `I start {activity}`
- `I resume {activity}`
- `I continue {activity}`

Starts/resumes the actual activity; no free elapsed time.

### stop — Ongoing activities

- `I stop {activity}`
- `I pause {activity}`
- `I put away {activity}`

Pauses/ends the actual activity and its effects as authored.

### wait — Ongoing activities

- `I wait one hour`
- `I wait an hour`

Only supported durations/controllers advance game time.

### accept — Decisions

- `I accept {offer}`
- `I agree to {offer}`

An actual pending offer must exist.

### decline — Decisions

- `I decline {offer}`
- `I turn down {offer}`

Refuses an actual offer without inventing a penalty.

### knock — Movement

- `I knock on {door}`
- `I rap on {door}`
- `I tap on {door}`

At a real doorstep, resolve the actual knock/visit response.

### speech — Conversation

- `I speak aloud: "Hello, everyone."`
- `I say to {person}: "Thank you for helping."`
- `I tell {person}: "Could we talk?"`

Only the provided words are spoken; nearby listeners and body capabilities apply.

### help — Help and knowledge

- `Eve, how do I {action}?`
- `Hey Eve, what can I do here?`
- `Show common action phrases`

Remote A.S.S. help uses the same live lexicon.

### database — Help and knowledge

- `Show my database`
- `Search my codex for {subject}`
- `What have I learned about {subject}?`

Only learned/owned knowledge is shown.

### fluid-contact — Fluid-contact requests

- `I consume saliva from {person}`
- `I lick {person}'s hand`
- `I hold {person}'s hand`

Actual fluid, warning, target agreement and accessible region are checked; only resolved contact time counts.

### fields — Decisions

- `Set {field} to {value}`
- `Choose {field} as {value}`
- `Save form identity`

Select actual available fields/options, then explicitly submit.

## Implementation boundary

The language layer routes supported actions to existing controllers and live-feed outcomes. A recognized verb does not create a missing controller, a target’s agreement, a new item, an infection or a physical act. Kissing now uses the approved terminology library, warning/confirmation, Tits’s availability policy and actual rolling contact exposure. See KISSING-INTERACTION.md. Tits’s saliva/sweat requests now use actual fluid-contact controllers; genital-fluid requests require an accepted private encounter and recorded source. See FLUID-CONTACT-INTERACTIONS.md. Other NPC policies, automatic private transport and further vocabulary remain separate.

Verification and implementation details: LANGUAGE-INTENT-RECOGNITION.md. Publication remains at v1.0.130; this reference is local pending the next authorized release.
