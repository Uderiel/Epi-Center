# Richard Carter — household and daily-life refinement draft

Status: proposal for owner review following v1.0.107. No Richard household gameplay is implemented by this document. Existing canon takes priority over these proposed defaults. Sources: RICHARD-NPC-DESIGN-NOTES.md, RICHARD-NPC-IMPLEMENTATION.md, RICHARD-OFFICE-G.md, current richard.js, NPC-AND-FORM-DESIGN-TEMPLATE.md. Historical implementation notes describing a thirty-minute lunch are superseded by the shared noon–one lunch now in code.

## Owner correction — outgoing social life and current relationship status

Confirmed after the first spoken review: Richard is a professional, outward-facing socialite who likes exploring city venues and clubs. Dining out is more characteristic than cooking; hosting and home cooking must not dominate his personality or routine. He is currently single. A possible romance connected to the Research Center is a future design opportunity, with no partner, relationship or encounter established now. This supersedes the draft's earlier home-centered emphasis. Actual venue trips and meals require implemented destinations, opening hours, physical travel and transactions; deferred venues must not be narrated as completed outings.

## Owner-confirmed Suite 7A refinements

Richard's home is an upscale **suite**, comparable to Nadia's level of elegance but with different priorities. Confirmed requirements:

- A home gym/workout area within the living space; exact equipment remains proposed until selected. Actual exercise needs time, usable equipment and recorded effects.
- A kitchen organized primarily around bar/drink service, snacks and quick, easy meals. Less cooking equipment and fewer elaborate food resources than Nadia. Dining out remains his preference; occasional guests do not turn him into a habitual dinner host.
- An entertainment system more advanced than Nadia's. His workspace is integrated into the living room, with the computer networked to the main television so he can display work information there. Screen content follows actual records; sharing a screen does not grant computer, document or account access to guests.
- A personal maid bot for cleaning and ordinary household assistance. This is an owned in-world appliance/agent, not invisible instant housekeeping. Implementation must record actual jobs, location, time, access and changes to dishes, laundry or supplies; it cannot create stock, money, permissions or completed player actions. Its initial presentation is confirmed as clearly mechanical, efficient and dryly humorous; exact chassis styling, name and capabilities beyond ordinary household assistance remain open. Do not silently copy a human NPC/form mind or invent combat abilities.
- A separate spare bedroom serving as a guest room, additional to Richard's bedroom and clothing storage. Overnight permission is distinct from visiting, romance or private-room access. The suite graph must explicitly add this room rather than claim the existing six-room layout already includes it.

These owner decisions supersede the simpler apartment/kitchen and six-room-shell proposals below. No runtime implementation or publication is implied.

## Owner-confirmed Applewood suite architecture

See [shared suite standard](APPLEWOOD-SUITE-DESIGN.md). Suite7A has larger rooms, more floor/display/storage space, a guest bedroom positioned between the entry hall and master bedroom, a guest bathroom nearest the kitchen, a private master bathroom attached to the master bedroom, and a balcony with a better city view and space to sit. Final door adjacency remains to be authored; the guest bedroom is not assumed to be a passage into Richard's private bedroom. The home gym uses the enlarged living space. Nadia's upscale decor does not automatically make her apartment a suite. These confirmations supersede the earlier simpler shell proposal; no new runtime is implied.

## Owner-confirmed maid bot presentation

Richard's initial personal maid bot is clearly mechanical, efficient and competent, with understated dry humor. It may speak courteously and make occasional concise observations; it is not a silent appliance or a flesh-covered humanlike model. Exact name, chassis styling and supported household duties remain to be refined. Do not infer unrestricted sentience, romantic behavior, combat abilities or access to private information from this presentation.

Richard would likely upgrade to a more realistic flesh-covered model when such models become available. This is a future preference, not an acquired replacement, scheduled purchase or implemented upgrade system. No replacement model is present now.

## Owner-confirmed maid bot duties and delegated service

The bot independently handles routine cleaning, laundry and household supply management, offers guest refreshments, and prepares food for guests. It naturally defers to Richard's instructions. Purchases and new guest access to private rooms or work information require Richard's authorization; routine supply management does not imply unlimited purchasing power. Actual supplies, prices, owner funds, preparation time and completed housekeeping jobs must be recorded.

An actual offer from Richard is sufficient authorization within its scope. If he offers a guest a drink or lists food/drink choices, the guest's selection from that offer authorizes the bot to prepare and serve it without asking Richard again. Do not add a redundant approval interaction. The offer identifies its recipient, available choices and relevant visit/context; it does not grant access to unrelated possessions, rooms or documents. A general offer permits an available matching selection; it is not unlimited stock or unlimited repeat servings. The bot follows actual stock and preparation, makes the serving usable by its intended recipient, and cannot fulfill the same selection twice after reload. Missing stock or an out-of-scope request receives a natural explanation or an alternative within the offer rather than fictitious completion.

Implementation should separate Richard's authorization, guest selection, preparation job and actual handover. Already authorized service survives ordinary UI changes/reload without another approval request; leaving the visit, cancellation, fulfillment or Richard's withdrawal closes the applicable offer. Exact UI and offer-expiry tuning remain implementation choices, not new owner-authored numerical rules.

## Established foundation

Richard is an adult, younger, charming, ambitious and controlling Sales and Marketing Manager. Erin is his valued secretary; Daniel leads sales and Nadia leads marketing. His dark brown hair, hazel eyes, lean athletic build and professional appearance remain. He knows he relies on Erin, and stress increases his requests for help. He considers thanks and extra pay sufficient, but payment is not consent. Existing refusal memory, exactly-once task pay, resource pools, ordinary Mental-primary civilian combat and current ten attributes remain unchanged. He never quotes the numerical bonus aloud. Home is Applewood floor 7 Suite A. Nadia does not know he lives above her; meeting her elsewhere must not disclose that automatically. No Richard form or transformation route is proposed.

Implemented evidence: persistent office schedule, actual city/office graph travel, relationships, stress/fatigue, secretary report work and reward ledger, office drawers/access controls, meetings, dialogue and civilian encounters. Home currently has an address, not a playable interior. Unimplemented entertainment venues are not available destinations. Owner acceptance of the latest Nadia/Dart release remains pending independently of this draft.

## Proposed character through-line and voice

He is good at structuring decisions and bad at leaving a decision unfinished. His charm is often sincere; his flaw is treating other people's availability as another resource he can organize. At home, that shows as a carefully composed space and a tendency to reopen work after promising himself he is done. Give him dry humor, genuine interest in capable colleagues and occasional self-awareness, without turning every exchange into a task offer or a confession.

Examples, not recorded events: “That can wait until tomorrow. Remind me I said that if I open the laptop.” / “I asked for your opinion. You don't have to agree with mine.” Under stress he can sound brisk and overly certain; a refusal may disappoint him, but does not silently punish the player. Respect develops from remembered reliability, honest disagreement and boundaries, not automatic compliance or romance.

Richard is currently single. Exact age, faction allegiance and a new pet remain unspecified. Do not invent a spouse, inherited wealth, villain affiliation or hidden dependence as canon.

## Proposed connected day

Weekdays: wake about 06:30, short workout or stretching, shower/grooming, coffee and breakfast, then a bounded review of real overnight department messages. Leave with enough actual building/city travel for his existing 09:00 start. Keep his current office rounds, meetings and secretary responsibilities; lunch is noon–one. Lunch can be a genuine meal or a voluntary conversation, rather than automatic additional work.

After work: choose between an actual city outing and a trip home to change before going out. Dining out, exploring implemented venues and clubs, and social encounters are his preferred leisure rhythm. Occasional home work, a quiet film or a simple meal provide variety without defining him. Proposed bedtime around 23:00 on quieter nights; later outings must allow actual return travel and affect the next morning plausibly. Existing additional-work administration until 18:00 and real meetings can shift this; no completed meal, workout or cleaning is invented when the schedule slips.

Saturday favors a later breakfast, exercise, dining out, exploring city venues and a possible club evening. Sunday balances recovery, personal upkeep, a social meal and bounded preparation for the week. Existing occasional weekend workplace requests remain conditional, not an automatic seven-day workweek. His historical entertainment interest is retained as deferred until the venue exists.

Conversation pauses optional tasks. He gives a natural warning before a real obligation, allows a brief delay and says goodbye before moving. He can offer a later actual appointment; he cannot stay indefinitely because repeated dialogue resets a timer. Presence, not the clock alone, controls availability.

## Proposed Suite 7A

An upscale, contemporary executive suite: warm walnut, charcoal, soft off-white, restrained leather and brushed metal, with a little dark green. More deliberate and work-focused than Erin's home, less fashion/display-focused than Nadia's, distinct from Priya's holistic atmosphere. This is earned managerial comfort, not a claim of extreme wealth or Nadia's family background.

- Living room: a comfortable sofa, functional throw, reading chair, good television, books and a restrained music setup. Personal interests have content; awards do not occupy every wall.
- Living-room workspace: a high-quality computer/monitor networked to the main television, actual inbox, department dashboard and saved draft notes. Work email and personal correspondence remain distinct. Optional messages do not create staff attendance or completed work.
- Kitchen/bar: drink preparation and serving, coffee, snacks and quick meals, with fewer elaborate cooking resources than Nadia's. Dining out is the main preference. All drinks and food use finite stock; choosing a drink is optional. Existing office whiskey is retained without inventing unlimited home supplies.
- Bedroom/walk-in storage: tailored suits, shirts, trousers, dress shoes, polished casual clothes, workout clothes and sleepwear. Work, relaxed home, hosting, exercise and bedtime presets; individual pieces and saved combinations. No wardrobe transfer by inspection.
- Master bathroom attached to Richard’s bedroom, plus a separate guest bathroom nearest the kitchen: actual shampoo, conditioner, body wash, shaving and skincare products with timed use and saved effects. Do not assume shaving or change player appearance without an action.
- Guest bedroom: a real additional room positioned between entry hall and master bedroom, with bed and guest storage; actual invitations and overnight permission govern use. Exact furnishings remain to be drafted.
- Balcony: a better city view, outdoor seating and actual sit/look-out activities, with authored access and no automatic travel shortcut.
- Personal maid bot: actual household cleaning/assistance jobs with saved progress and limited capabilities; no magical restocking or guest surveillance permissions.
- Entry/hall storage: coat and shoe storage, actual laundry/cleaning supplies and guest belongings. Floor discovery follows existing Applewood rules.

Reuse the shared residence adapter with an explicitly expanded suite graph and separate guest bedroom; fixtures, descriptions and object placement are individually authored. Every advertised usable fixture needs a real action, stock/ownership, duration, receipt and interrupted/reload behavior. Meals become real servings; laundry, dishes and restocking are tracked rather than cleared by prose.

## Proposed social and work integration

Ordinary visits require an actual invitation and Richard at the door. Entry does not grant bedroom, computer or private paper access. Friendship, professional access and romantic interest are separate; neither extra work nor pay buys personal access. Social invitations more often suggest dining out or visiting an implemented venue. Occasional home hosting can include a drink declined freely, a film or discussion; it is secondary to his outward social life. Guests can leave naturally. Correspondence can arrange an actual available visit rather than instant teleportation or a guaranteed affirmative reply.

At work, flesh out the existing actual review loop: Nadia's marketing drafts and campaigns → Daniel's recorded sales results → Richard's priorities and decisions → Erin's real summary and schedule. Show sources and uncertainty. Do not generate fictitious figures, retroactively attribute sales, spawn unnamed staff as completed characters, or make the future sales employee a new dependency for the home slice.

## Proposed first release and acceptance

First implement normal home entry/exit, distinct rooms/drawers, timed routine, functional clothes/care/food, activities, personal communication and remembered social follow-ups. Preserve secretary work, bonus wording and ledger, meetings, shared lunch, signed relationships, civilian combat and saves. New faction, romance, special quest or transformation systems are outside this proposal.

Test existing save migration without resets; actual travel and natural departures; home/private-room permissions; finite stock and usable servings; ongoing activity interruption/reload; separate work and personal mail; real department sources; refusal without duplicate reward or penalty; mobile navigation; AI-off fallback and stale/private AI safeguards. Owner review should focus on whether the overall personality, household atmosphere and off-duty interests fit before choosing every fixture. Publication requires implementation, automated and browser verification, and an explicit list of remaining limits.
