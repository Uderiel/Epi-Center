# Charity household integration — implemented locally, unpublished

## Connected behavior

`rebuild/hub/charity-household.js` connects the actual Cherished Touch room graph, clock, directed player identity, shared serving system, real clothing/equipment custody and the existing transactional autonomy scheduler. It creates Charity-owned stock/garments once, not another copy of the player inventory. New local room controls appear only for an actual recorded locked participant; no public mask/lock-start button was added.

- Approved pantry/care counts, two work outfits, practical sleepwear, two towels and one washcloth initialize once and survive reload without refilling.
- Real Charity and the locked player consume servings from the same finite pantry. Actor-held food never becomes a phantom player item. The shared served-item source adapter returns dishes to Charity’s household, not Priya’s fallback storage.
- Player shower takes8game minutes and consumes actual products/clean towel. Clothing uses existing equip/conflict/retained-original rules with NPC ownership and temporary custody. Laundry uses real unworn garments/towels,40game-minute completion and operator checks; collection returns the same items.
- Connected NPC coverage/rest jobs actually walk the approved door graph, change into real sleepwear, sleep, shower, redress, prepare/eat a real portion, wash dishes/towels as needed and return toward the counter. The generic autonomy engine, not a new scheduler, resolves pending jobs and interruptions.
- Bedroom rest uses the existing12-per-game-hour rest reference for fatigue, does not heal other resources and stops when the player moves or duty changes. Player needs consequences remain the existing system. NPC needs use existing routine/reference rates; no NPC accident/death policy is added.
- Working staff/actual room state governs availability; another valid coverage worker can staff the register without impersonating the real Charity’s dialogue. Existing ordinary visit restrictions remain. The locked-state role enables approved interiors/household sharing, not shop-item ownership or protected quest objects.
- Personal rooms have the owner-approved floral/rose atmosphere. This adds no changed body scent, healing or masking of gameplay urine/track signals.

## Participant contract and hatch exception

`bindParticipant` accepts a recorded72-real-hour locked-state record for the actual current player. `registerCoverage` accepts an actual6–7game-hour ordinary coverage record. They are integration hooks for the deferred quest, not newly offered quests or proof of an implemented multiplayer authority. The original player ID stays unchanged; `charity-coverage` is a temporary role tag. The real NPC remains `npc:charity`, with separate money, needs and custody.

The role grants neither hidden-hatch discovery nor access. `revealGuildEntrance` explicitly rejects it; entering the storage room remains allowed. Qualified hatch quest/invitation/reveal functionality remains separately deferred. The72-hour record remains resident during the privacy-release transition, with the original expiry unchanged; release requires a recorded expiry and actual private mask-release event. No timer restart, stat reset or original-body restoration occurs through household unbinding.

## Daily finances

Owner adds a flat **700gold per completed game day** to real Charity’s personal manager/owner account, separate from the player’s wages and shop till/sales revenue. Tick boundary settlement is once-only and does not invent pay for days before this account was initialized. Existing account funds begin at0rather than creating an unapproved historical balance.

An actual priced delivery receipt can replenish only missing approved stock using Charity’s funds, once per receipt. Monday checks record what is missing; they do not conjure goods or debit player money. Production household price catalogs/courier delivery fulfillment and calculation/distribution of sales **profit** remain unbuilt; the existing till tracks revenue, not an invented net-profit figure. Player shift wages/penalties remain deferred with the coverage quest.

## Shared-system changes

- `served-items.js`: registered household source adapter and explicit actor-held servings/consumption; ordinary existing player flows retained.
- `player-clothing.js`: custody-source adapter preserves NPC-owned shared garments while using existing slots/equip/private-changing rules; UI labels borrowed ownership.
- `cherished-touch.js`: resident/controller adapter for actual staffing, interior use and safe private-release scope; temporary role explicitly cannot reveal hatch.
- `index.html`/room UI: initialize and tick household on actual world actions, apply rest before need consequences, and expose actual room controls/current clothing.
- `charity.js` and backend projection: actual recorded household activity/outfit available for Charity’s own portrayal, without exposing her wallet or inventing another actor’s care.

## Verified and remaining limits

21new household cases cover finite stock, player/NPC food separation, private authorization, actual routes/routines, clothes, depleted supplies, laundry/reload, role/identity isolation, hatch denial, salary boundaries and deliveries. The final regression run passes1575named cases across93suites including the AI backend. Eleven isolated browser checks exercise real room controls, food, shower, equipment, reload, laundry, salary, phone width and another untouched save. No owner save, real provider call or publication used.

The actual mask transformation/quest/reward controller is still deferred. The new household hooks do not make the mask quest playable. The real-time staffing phase can be evaluated from the saved record, but no server-owned shared multiplayer world/clock or offline simulation service exists yet. Care executes on actual game-time ticks; offline need/care mapping to real-time rotations is not silently invented. Role flags are local saved gameplay state, not multiplayer authorization. Remaining first-time body/loan/quest generation and cross-player concurrency require the future authoritative system.

## Subsequent65/35accounting update

Owner approves65supplier/35Charity after existing customer discounts. Checkout records exact hundredth-gold shares against a real sale receipt; her35percent moves to personal funds and retained till cash backs supplier payable. Base700salary remains distinct. This supersedes earlier wording that the basic sales-share calculation is wholly unbuilt. The Friday laptop / Monday enchanted delivery controller now settles supplier remittance once; production priced household courier fulfillment remains pending; paid favor quests are newly approved as direction without reward/eligibility details.
