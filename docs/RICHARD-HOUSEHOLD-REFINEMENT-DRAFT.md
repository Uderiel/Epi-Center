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

Richard's initial personal maid bot is clearly mechanical, efficient and competent, with understated dry humor. Within requested social engagement or an authorized service exchange it may speak courteously with understated dry humor; it is not a silent appliance or a flesh-covered humanlike model. Exact name, chassis styling and supported household duties remain to be refined. Do not infer unrestricted sentience, romantic behavior, combat abilities or access to private information from this presentation.

Richard would likely upgrade to a more realistic flesh-covered model when such models become available. This is a future preference, not an acquired replacement, scheduled purchase or implemented upgrade system. No replacement model is present now.

## Owner-confirmed maid bot duties and delegated service

The bot independently handles authorized routine cleaning, laundry and household supply management, and prepares guest food/refreshments only within Richard’s explicit authorization. It does not independently make offers. It naturally defers to Richard's instructions. Purchases and new guest access to private rooms or work information require Richard's authorization; routine supply management does not imply unlimited purchasing power. Actual supplies, prices, owner funds, preparation time and completed housekeeping jobs must be recorded.

An actual offer from Richard is sufficient authorization within its scope. If he offers a guest a drink or lists food/drink choices, the guest's selection from that offer authorizes the bot to prepare and serve it without asking Richard again. Do not add a redundant approval interaction. The offer identifies its recipient, available choices and relevant visit/context; it does not grant access to unrelated possessions, rooms or documents. A general offer permits an available matching selection; it is not unlimited stock or unlimited repeat servings. The bot follows actual stock and preparation, makes the serving usable by its intended recipient, and cannot fulfill the same selection twice after reload. Missing stock or an out-of-scope request receives a natural explanation or an alternative within the offer rather than fictitious completion.

Implementation should separate Richard's authorization, guest selection, preparation job and actual handover. Already authorized service survives ordinary UI changes/reload without another approval request; leaving the visit, cancellation, fulfillment or Richard's withdrawal closes the applicable offer. Exact UI and offer-expiry tuning remain implementation choices, not new owner-authored numerical rules.

## Owner-confirmed wardrobe and self-presentation

Richard favors restrained colors across work and leisure. He believes professional attire gives him credibility, distinguishes him as management and makes him more appealing to the people he wants to reach. This is his belief and presentation strategy, not an automatic attraction, authority or relationship bonus. His off-duty style stays recognizably consistent with his professional one; nightlife does not imply bright colors or a radically different persona.

Upscale semi-casual alternatives provide comfort and may be somewhat showier than workplace attire through fit, fabric and detailing while retaining the restrained palette. Exact colors/items are still proposed defaults. Build work and outing presets from a coherent shared wardrobe; include practical gym clothing, home comfort and sleepwear without assuming he exercises or sleeps in formal clothes. Keep clothing ownership, private changing, actual clean/dirty state and bot laundry. A visual status signal does not entitle him to access, compliance or another character's interest.

## Owner-confirmed bot discretion, initiative and confidentiality — supersedes earlier offers

The bot does not initiate social conversation with Richard or guests. Richard must request social engagement; dry humor belongs within an authorized exchange, not unsolicited commentary. The stated exception for approaching him is requesting financial permission when a household action needs spending. Routine authorized housekeeping continues independently, without unsolicited social chatter.

The bot never offers refreshments, food or other guest services without Richard's explicit authorization. Richard's already-issued offer to a guest is sufficient scoped authorization: it can receive that guest's selection, prepare and serve it without a second approval. This supersedes the earlier proposal that the bot independently offers guest refreshments. A service transaction is not permission to begin unrelated conversation or continue socializing.

It cannot grant guest access to any private part of the suite without Richard's explicit permission. Being a guest, accepting a drink, asking the bot, or Richard being absent does not create that permission. Work documents, screen contents, overheard conversations and witnessed work remain explicitly confidential. The bot does not discuss private matters with guests or disclose work information from its observations. Serving guests or being asked to socialize does not waive confidentiality or private-room restrictions; exact disclosure would need separately scoped explicit authorization from Richard.

For implementation, bot dialogue/AI context must receive only information allowed for the recipient and authorized task. Private observations must not enter public guest prompts, greetings, logs or screen descriptions. Preserve authorized offer fulfillment without duplicate approval, and test guest probing, host absence, out-of-scope requests, stale authorization and reload. Routine supplies remain tracked; any expenditure still requires financial permission.

## Owner-confirmed evenings, guest access and updated-report review

Owner accepts two or three weekday outings, a longer Friday or Saturday night, and quieter evenings between. Richard changes at home when appropriate and travels physically to available venues. Home leisure can include exercise, balcony time, television and brief work review. A normal invitation permits the living room, bar, balcony and guest bathroom. The guest bedroom requires an overnight invitation; master bedroom, master bathroom and work information require separate explicit permission.

Before bed he may check sales and marketing reports **if any have been updated**. Review must use actual recorded report versions/timestamps and sources; no invented new figures, duplicate nightly completion or compulsory review of unchanged content. Nadia and Erin are the colleagues most likely to be doing relevant updates and the people he is most likely to contact about additions to Monday's schedule during weekend correspondence. This does not eliminate Daniel's established sales-lead responsibilities or falsely attribute a sales record to another character.

Weekend messages are real saved correspondence and may propose an addendum for Monday. Sending is not acceptance, completed unpaid work, instant availability or a booked appointment. Scheduling follows the shared Scheduler/calendar, actual availability and existing approval/booking rules. Separate report content, Richard's review, his requested addition, recipient reply and final calendar update. Confidential work stays out of guest/bot conversation and publicly visible shared screens unless explicitly authorized. The bot must not initiate report discussion on its own.

## Social personality review — enjoyment and upward networking

Owner clarifies that Richard's social behavior is still being designed; established outings and wardrobe do not constitute a finished social personality. Richard can maintain company with Erin or Nadia for genuine enjoyment rather than networking. If he has an opportunity to meet someone in a higher position, he will use that opportunity to network. This does not mean every friendship is instrumental or every conversation becomes a business pitch. No automatic relationship, access, promotion or shared interest follows from an introduction.

Still to refine with owner: off-duty humor, how he shares or directs group plans, response to disagreement/rejection, vulnerability, friendship follow-ups and flirting boundaries. Earlier claims that the overall personality was fully settled are superseded. Existing workplace personality remains canon. Proposed confidence/playfulness or unsolicited advice are proposals until reviewed, not confirmed social behavior.

## Owner-confirmed social voice — boisterous storyteller, guarded status

Richard is generally confident and boisterous off duty. He enjoys telling stories, holding an audience's attention and having others engage with his banter. He sometimes embellishes accomplishments or story details. Distinguish his account from objective world history: dialogue may be self-flattering, but it must not create actual promotions, transactions, relationships or past player actions. Do not invent a specific canonical achievement merely to supply a story.

He is not fond of jokes at his expense. Rather than openly escalating, he tends to deflect or change the subject without making that discomfort obvious. He leans on being a manager and believes excessive familiarity, intimate joking or making him the butt of jokes could degrade workplace morale and efficiency. That is Richard's rationale, not an engine-enforced truth or automatic morale penalty. Off-duty company does not erase his awareness of workplace hierarchy. A single joke is not a new punishment, pay deduction or hostile-combat trigger.

This replaces the proposed assumption that he enjoys being teased back. Dry wit may remain a proposed accent, but his confirmed social center is confident, boisterous storytelling, audience engagement and selective embellishment, with guarded managerial status.

Still open for review: whether he yields easily when someone else chooses the venue or disagrees, how he reacts to personal rejection, what he shares when genuinely vulnerable, and his flirting/romantic approach. Current relationship status remains single; a future Research Center romance is only a possibility.

## Owner-confirmed response to challenged stories and direct contradiction

When someone challenges an embellished story, Richard may graciously concede: “Okay, maybe I embellished a little, but that’s generally how it went.” This is an illustrative voice example, not a recorded game event. He can acknowledge exaggeration without abandoning the broad account.

For direct contradiction he may first deflect playfully. If the person persists, he becomes increasingly annoyed or irritated. Do not equate annoyance with automatic workplace retaliation, combat, loss of pay or forced player agreement. Venue-choice flexibility and deeper personal rejection remain separate, unresolved questions.

## Owner-confirmed personal rejection response and signed relationship effect

Richard generally stays calm, keeps his composure and gives the other person space when his personal invitation or romantic interest is rejected. He remembers the rejection and it causes a small negative change in his relationship with that specific player/body identity or NPC, using the existing signed **−100 to +100** scale. It is a modest relationship loss, not a large penalty. Owner sets the change to a flat **−3 relationship points** per resolved personal rejection, clamped to the existing −100…+100 range. This is points, not a percentage multiplier.

This supersedes the proposal that personal rejection carries no relationship consequence. Visible composure does not mean he feels no disappointment. Apply a resolved rejection once, persist its memory and avoid repeated deductions from reloads, repeated narration or already-declined offers. Do not apply a second deduction where an existing rejection event already handled the same change. This personal-social rule does not silently replace established secretary extra-work refusal rules, wage/task ledgers or workplace boundaries. No automatic pay loss, combat, forced agreement or refusal to let someone leave follows.

## Owner-confirmed flirting and private interest in Erin

Richard starts with suggestive banter. If the other person is receptive, he becomes more direct and confident, often leaning into bragging and self-presentation. Use actual expressed receptivity; politeness, professional competence, friendliness, accepting refreshments or being a guest do not automatically establish romantic interest. Progressing conversation is not automatic consent to physical intimacy.

He respects Erin as his secretary and is not categorically opposed to a personal relationship with her. If she is suggestive or expresses reciprocal openness to something more, he can be receptive. He insists on keeping that personal involvement private. No relationship exists by default; player choices and actual exchanges matter. Privacy is Richard's condition for his participation, not permission to force secrecy on the player, erase witnessed events, invent agreement or make nearby observers unaware. The maid bot's existing confidentiality rules apply without assuming new access or discussion permission.

Keep personal interest separate from secretary assignments, bonuses, wages and promotion. The confirmed −3 personal-rejection rule applies once to resolved personal rejection; declining work is not silently reclassified as rejection of romance. Existing Richard civilian/workplace and Erin form identity rules remain intact. A possible future Research Center romance is still deferred and does not imply an exclusive partner now.

## Owner-confirmed trust and selective vulnerability

With someone he genuinely trusts, Richard can admit mistakes and share worries. He does not want those disclosures perceived as weakness. He chooses people he believes will understand that he is seeking advice, avoid judging him too harshly, and offer practical ways to prevent recurrence or correct the effects of his mistakes. His openness is selective and solution-oriented, not an unsolicited public confession or constant need for reassurance.

Trust and an appropriate private conversation must be grounded in actual relationship/history and expressed interaction. No specific numerical disclosure threshold or automatic trust reward has been authored. Do not invent a past mistake, secret or damaging event as established fact merely to create vulnerability; draw on actual recorded problems or separately authored approved content. A confidant's response remains their choice. His wish to appear capable does not guarantee the listener shares his interpretation. Bot observations and guest prompts retain confidentiality restrictions.

## Owner-confirmed selfishness and limited reciprocal attention

Richard is somewhat selfish and strongly focused on advancement, promotion and rising through the ranks. He is not naturally good at checking in or following up, particularly with people below him in the workplace hierarchy. Genuine enjoyment of their company does not make him consistently attentive to their needs. Do not rewrite him as an unusually thoughtful, reliably nurturing friend.

After someone has recently done him a favor, he makes an effort at a personal question or immediate gesture: how they are doing, how work feels, or whether they need time off. If that does not develop, he considers his follow-up obligation fulfilled and tends to move on. These are illustrative interaction topics, not an automatic grant of leave, a promised favor or recurring care. Any actual time-off approval needs its real authorization/calendar effect. Use the actual recent favor rather than inventing indebtedness, and do not repeatedly replay the same gratitude check after reload.

This supersedes the proposed frequent remembered personal follow-ups and invitations without a need. His attention is uneven and status-conscious, not nonexistent; trusted confidants and upward networking remain distinct from routine subordinate attention. He can ask sincerely in the moment while still overestimating how much care that brief effort represents.

## Owner-approved living-room furnishings and ambient sound

Owner accepts the three-zone living-room proposal: generous charcoal sofa, two leather armchairs, low walnut table, stone-topped side tables, warm dimmable lamps, a few framed achievements and decorative pieces; large wall-mounted screen with discreet speakers and side workstation; window-side adjustable bench, weights and mat with organized storage and clear balcony route. Include a usable throw blanket, coasters and a drinks trolley for authorized bot service. Richard may explicitly share a report to the main screen; private work is concealed otherwise.

Owner additionally requests a soundbar or sound system for ambient music. Equipment name/model is an implementation choice. Music must be an actual controllable state (on/off, selected available programme and volume) reflected in local descriptions/narration. It must not expose private work audio, invent copyrighted song lyrics, imply guests heard a conversation outside their actual space or bypass the bot's no-unsolicited-socializing rule. This confirms an in-world sound system; real audio assets/playback are not yet implemented or promised.

## Owner-confirmed bar inventory and fitness breakfast supplies

The suite inventory includes a selection of beers, wines, whiskeys, rums, vodkas and mixers, not one generic drink entry. Author individual finite stock/serving choices; actual availability constrains Richard's offered list and the bot's preparation. Varieties and starting quantities below are implementation defaults, not owner-selected brands. Keep explicit service authorization; stocked alcohol is not an automatic offer, consumption or implied guest preference.

Breakfast supplies include whey protein, hemp hearts/seeds, berries and milk for varied protein shakes and simple fitness-oriented breakfasts. Additional practical staples may be proposed as compatible defaults. Preparations consume their actual ingredients; optional additions should affect the saved recipe/narrative rather than create free supplies. No training/stat gain follows merely from describing nutrition.

Owner suggests pre-sorted, organized vitamins prepared by the maid bot. Treat this as Richard's optional personal organizer: finite owned supplements, actual sorting/restocking and a deliberate use choice. No invented prescription, individualized dosing, automatic administration to guests or unapproved gameplay/stat effect. Exact products/doses remain unspecified.

Correction of spoken progress: the ambient sound fixture is in the draft catalog, but sound controls/audio playback are not yet wired; do not describe that as completed gameplay.

## Owner-confirmed master-bedroom aesthetic and private adult furnishings

Richard's master bedroom remains professional and elegant but has a darker underlying edge. The owner specifies a steel four-poster bed with integrated foot-end stocks, an under-bed cage/storage compartment and mounting/suspension attachment points. A dedicated private equipment drawer stores whips, floggers, collars, leashes, pet-play apparel and gags. These are non-graphic furnishings/inventory design notes, not implemented sexual scenes, equipment-use mechanics or automatic interactions.

The master bedroom and its private equipment retain Richard's separate explicit-access rules. Permission to enter, view storage, stay overnight or express interest does not itself authorize intimate contact or equipment use. No guest or player is automatically restrained, gagged, confined or affected by inspecting a fixture. Bot confidentiality and Richard's insistence on privacy remain in effect. Exact equipment models, capacities and interaction rules are not authored by this description.

## Owner-confirmed dressing and grooming details

Owner accepts restrained upscale bathroom/wardrobe finishes, generous grooming space and organized clothes/accessories. Richard owns multiple pairs of dress shoes. Socks are stored in his dresser. Expensive colognes form a selection rather than one generic fragrance. A watch collection is displayed on top of the dresser so he can choose a watch for the day.

Dress shoes, socks, watches and colognes are Richard-owned items. Choosing a daily watch or shoes changes his recorded worn selection, not player inventory. Colognes need finite applications and saved chosen scent when used; inspection does not apply fragrance. Dresser drawers, tabletop display, watch choice and private changing must use actual reachable fixtures and existing private-area permission. Specific brands, prices and collection counts are implementation defaults, not newly approved real-world brands. No magical stat/authority/attraction bonus follows from expensive accessories.

## Owner-confirmed conventional guest bedroom

Guest room is a conventional, neutral room: comfortable double bed, bedside lamps, small dresser, hanging space and blackout blinds. No personal, private or intimate belongings are left there. Richard's private adult equipment remains elsewhere; an overnight guest does not discover it through ordinary guest storage.

Artwork is generic and tasteful, with a subtly sensual suggestion rather than explicit imagery; a portrait of a beautiful adult woman is an acceptable example, not a finalized image asset. No new image is generated or claimed approved.

Blackout blinds are motorized. A remote on the bedside table lets the guest open or close them. Implementation must save the actual blind position and update room lighting/descriptions; remote access does not imply access to other suite devices or private screens. Room entry follows the separate overnight invitation rule; operating the in-room remote does not require another host approval. Curtains/blinds do not change actual presence/hearing rules.

## Owner-confirmed bathrooms and personal grooming

Owner accepts the master bathroom's walk-in shower and soaking tub, and a simpler guest bathroom with shower, fresh towels and basic toiletries. Richard takes care of his skin and wants to remain presentable and clean. His master bathroom includes moisturizers, facial creams and a trimmer/shaver for managing stubble or hair growth.

Use actual reachable fixtures, owned finite skincare products and saved grooming selections/effects. Shaving is a deliberate grooming action; inspection, time passage or a generic shower does not silently remove hair or change the player's appearance. Existing generic shaving supplies do not claim working trimmer controls. Facial creams are ordinary personal-care items, with no invented medical or stat effects. Guest toiletries and access remain separate from Richard's private products; bot cleaning/linen jobs must reflect actual work.

## Owner-confirmed balcony furniture, shade and railing

Owner accepts two comfortable outdoor chairs, a small drinks table, restrained lighting and maintained planters with the city view open. Add small shade umbrellas over the drinks table. The balcony edge uses glass railing panels with metal support posts and mounting brackets, preserving the view.

Shade/open-close state should be reflected in descriptions if an umbrella control is offered. Table service uses actual authorized servings; furniture does not create drinks. Railing is an architectural boundary, not a new climbing or travel route. Exact measurements/material grades are not specified. These are approved furnishing/design requirements; new controls/assets are not implemented yet.

## Owner-confirmed maid-bot service fee and utility placement

The maid bot's service cost is **100 gold per week**, charged to Richard's own household funds rather than the player. The charging station and cleaning supplies belong in the entry-hall utility cupboard, with laundry equipment nearby. It can place supply orders after Richard grants financial permission; the service fee is not blanket permission for additional purchases. Billing must track a persistent paid-through period and avoid duplicate charges on reload/time replay. Exact unpaid-service behavior and billing anchor are implementation defaults to make explicit before testing; no new charged fee is live yet.

## Room-art generation requested

Owner requests individual room illustrations for Richard, Nadia, Erin (E-R-I-N) and Priya. Existing location artwork frame is 1100×733, approximately 3:2; the spoken 1100×730 estimate is superseded by repository evidence. Preserve existing approved art and generate new review assets matched to each room's actual authored contents, distinct resident style and layout. Generation does not imply approval, wiring or publication. Richard has nine spaces; the other three homes each have six, for 27 separate room illustrations. No characters, explicit imagery or private information should be invented in these environment illustrations.

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
- Bedroom/walk-in storage: tailored suits, shirts, trousers and dress shoes in restrained colors; upscale semi-casual pieces with comfortable fit and occasionally more pronounced detailing; practical workout clothes, home comfort and sleepwear. His core professional style remains consistent across work and outings. Work, relaxed home, hosting, exercise and bedtime presets; individual pieces and saved combinations. No wardrobe transfer by inspection.
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
