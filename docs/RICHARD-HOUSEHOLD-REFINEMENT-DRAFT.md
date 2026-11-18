# Richard Carter — household and daily-life refinement draft

Status: proposal for owner review following v1.0.107. No Richard household gameplay is implemented by this document. Existing canon takes priority over these proposed defaults. Sources: RICHARD-NPC-DESIGN-NOTES.md, RICHARD-NPC-IMPLEMENTATION.md, RICHARD-OFFICE-G.md, current richard.js, NPC-AND-FORM-DESIGN-TEMPLATE.md. Historical implementation notes describing a thirty-minute lunch are superseded by the shared noon–one lunch now in code.

## Established foundation

Richard is an adult, younger, charming, ambitious and controlling Sales and Marketing Manager. Erin is his valued secretary; Daniel leads sales and Nadia leads marketing. His dark brown hair, hazel eyes, lean athletic build and professional appearance remain. He knows he relies on Erin, and stress increases his requests for help. He considers thanks and extra pay sufficient, but payment is not consent. Existing refusal memory, exactly-once task pay, resource pools, ordinary Mental-primary civilian combat and current ten attributes remain unchanged. He never quotes the numerical bonus aloud. Home is Applewood floor 7 Suite A. Nadia does not know he lives above her; meeting her elsewhere must not disclose that automatically. No Richard form or transformation route is proposed.

Implemented evidence: persistent office schedule, actual city/office graph travel, relationships, stress/fatigue, secretary report work and reward ledger, office drawers/access controls, meetings, dialogue and civilian encounters. Home currently has an address, not a playable interior. Unimplemented entertainment venues are not available destinations. Owner acceptance of the latest Nadia/Dart release remains pending independently of this draft.

## Proposed character through-line and voice

He is good at structuring decisions and bad at leaving a decision unfinished. His charm is often sincere; his flaw is treating other people's availability as another resource he can organize. At home, that shows as a carefully composed space and a tendency to reopen work after promising himself he is done. Give him dry humor, genuine interest in capable colleagues and occasional self-awareness, without turning every exchange into a task offer or a confession.

Examples, not recorded events: “That can wait until tomorrow. Remind me I said that if I open the laptop.” / “I asked for your opinion. You don't have to agree with mine.” Under stress he can sound brisk and overly certain; a refusal may disappoint him, but does not silently punish the player. Respect develops from remembered reliability, honest disagreement and boundaries, not automatic compliance or romance.

Relationship status, exact age, faction allegiance and a new pet remain unspecified. Do not invent a spouse, inherited wealth, villain affiliation or hidden dependence as canon.

## Proposed connected day

Weekdays: wake about 06:30, short workout or stretching, shower/grooming, coffee and breakfast, then a bounded review of real overnight department messages. Leave with enough actual building/city travel for his existing 09:00 start. Keep his current office rounds, meetings and secretary responsibilities; lunch is noon–one. Lunch can be a genuine meal or a voluntary conversation, rather than automatic additional work.

After work: actual commute, put away work things, change, prepare or finish dinner, then choose an evening priority. Two or three evenings can include a short, visible home work session; other evenings favor a film, music, reading or a visit. Proposed bedtime around 23:00. Existing additional-work administration until 18:00 and real meetings can shift this; no completed meal, workout or cleaning is invented when the schedule slips.

Saturday favors a later breakfast, exercise, errands at implemented venues, leisure and occasional agreed hosting. Sunday favors home upkeep and a bounded preparation for the week. Existing occasional weekend workplace requests remain conditional, not an automatic seven-day workweek. His historical entertainment interest is retained as deferred until the venue exists.

Conversation pauses optional tasks. He gives a natural warning before a real obligation, allows a brief delay and says goodbye before moving. He can offer a later actual appointment; he cannot stay indefinitely because repeated dialogue resets a timer. Presence, not the clock alone, controls availability.

## Proposed Suite 7A

A comfortable, contemporary executive apartment: warm walnut, charcoal, soft off-white, restrained leather and brushed metal, with a little dark green. More deliberate and work-focused than Erin's home, less fashion/display-focused than Nadia's, distinct from Priya's holistic atmosphere. This is earned managerial comfort, not a claim of extreme wealth or Nadia's family background.

- Living room: a comfortable sofa, functional throw, reading chair, good television, books and a restrained music setup. Personal interests have content; awards do not occupy every wall.
- Home workspace: laptop/monitor, actual inbox, department dashboard and saved draft notes. Work email and personal correspondence remain distinct. Optional messages do not create staff attendance or completed work.
- Kitchen/dining: good coffee equipment, competent appliances and a table suited to a small dinner. Proposed preferences: eggs or toast on workdays; fuller weekend breakfast; practical chicken/fish/vegetable dinners, pasta and occasional steak. Coffee and a modest whiskey selection fit existing office canon, with finite portions and separate choices.
- Bedroom/walk-in storage: tailored suits, shirts, trousers, dress shoes, polished casual clothes, workout clothes and sleepwear. Work, relaxed home, hosting, exercise and bedtime presets; individual pieces and saved combinations. No wardrobe transfer by inspection.
- Bathroom: actual shampoo, conditioner, body wash, shaving and skincare products with timed use and saved effects. Do not assume shaving or change player appearance without an action.
- Entry/hall storage: coat and shoe storage, actual laundry/cleaning supplies and guest belongings. Floor discovery follows existing Applewood rules.

Reuse the shared six-room residence adapter where appropriate; fixtures, descriptions and object placement are individually authored. Every advertised usable fixture needs a real action, stock/ownership, duration, receipt and interrupted/reload behavior. Meals become real servings; laundry, dishes and restocking are tracked rather than cleared by prose.

## Proposed social and work integration

Ordinary visits require an actual invitation and Richard at the door. Entry does not grant bedroom, computer or private paper access. Friendship, professional access and romantic interest are separate; neither extra work nor pay buys personal access. Hosting can include a meal, a drink declined freely, a film or discussion. Guests can leave naturally. Correspondence can arrange an actual available visit rather than instant teleportation or a guaranteed affirmative reply.

At work, flesh out the existing actual review loop: Nadia's marketing drafts and campaigns → Daniel's recorded sales results → Richard's priorities and decisions → Erin's real summary and schedule. Show sources and uncertainty. Do not generate fictitious figures, retroactively attribute sales, spawn unnamed staff as completed characters, or make the future sales employee a new dependency for the home slice.

## Proposed first release and acceptance

First implement normal home entry/exit, distinct rooms/drawers, timed routine, functional clothes/care/food, activities, personal communication and remembered social follow-ups. Preserve secretary work, bonus wording and ledger, meetings, shared lunch, signed relationships, civilian combat and saves. New faction, romance, special quest or transformation systems are outside this proposal.

Test existing save migration without resets; actual travel and natural departures; home/private-room permissions; finite stock and usable servings; ongoing activity interruption/reload; separate work and personal mail; real department sources; refusal without duplicate reward or penalty; mobile navigation; AI-off fallback and stale/private AI safeguards. Owner review should focus on whether the overall personality, household atmosphere and off-duty interests fit before choosing every fixture. Publication requires implementation, automated and browser verification, and an explicit list of remaining limits.
