## Current owner decisions and implementation stage — November 19, 2026

Current stage evidence: **1,510 automated cases across 89 suites**, all passed; **11 access/memory browser checks plus 10 Charity/business-presence checks**, all passed with isolated saves and intercepted/offline AI. See audits/CHARITY-ACCESS-AND-MEMORY-VERIFICATION.json. The original v1.0.125 release evidence is preserved. This does not certify the unfinished household/coverage stages.

This update supersedes conflicting historical review rows below. See HUB-NPC-COMPLETION-ORDER.md for the owner’s fixed build order.

- **Household defaults approved:** neutral everyday clothing and comfortable flats, practical sleepwear, mild toiletries, simple meals/tea and mending/crosswords/light comedy. Eight-minute shower remains required. These are now approved tastes/design inputs; household jobs and stocks are still not fully implemented.
- **Private access:** +75 relationship and a real, purpose-specific invitation; eligibility alone never grants entry. Current implementation supports hallway, bathroom (including necessary bedroom transit), and dining-room company. Invitation belongs to the individual player/current appearance/current visit; leaving ends it. Legacy blanket privateAccess no longer authorizes every room. Storage, laundry and personal belongings are not automatically included. Lost permission preserves the physical route out and prevents new private fixture use.
- **Safety:** actually admitted visitors hear the protective permanent-form/NPC-role warning without the concealed supplier. Heard warnings persist per player/apparent identity; past warning is not present access or secret-route knowledge.
- **Dialogue/memory:** explicitly spoken clothing preferences and bounded actual exchanges persist separately per player/apparent identity. Payment follow-ups answer payment. Household interests/preferences now reach the public character portrayal; prose does not create performed care/rest or stock.
- **Hours/rest:** owner retains 24-hour weekday service and rejects normal midnight–06:08 closure. Actual covered rest must be designed/implemented through the established coverage route. No normal overnight shutdown was added; weekends remain unresolved.
- **Release/AI:** v1.0.125 is already published and its Worker’s required versions are now live through Cloudflare Builds. This new access/memory work is development only. Real-model acceptance of Charity’s expanded portrayal remains unverified.

**Completion remains partial:** physical needs, actual owned wardrobe/food/care stocks, timed household/laundry jobs, covered rest and service/quest handover must still be built and verified before calling Charity template-complete. Do not promote a proposal, a dossier sentence or an access test into proof of a functioning whole day.

## Later owner relationship clarification

The universal [directed relationship contract](DIRECTED-RELATIONSHIP-SYSTEM.md) now defines the common signed bar and tier meanings. Social trust is a meaning of relationship, not a second meter. Charity's existing +75 selective-disclosure eligibility, +90 mask-job gate and +100 twentieth-trial invitation gate remain separate authored conditions; reaching an affinity tier does not execute those actions. The earlier completion review below remains scoped to its own candidate and test evidence.

# Charity and Cherished Touch — current template completion review

Owner requested a comprehensive template review, then revisiting Charity against that standard. The additional closed/unstaffed-shop rule applies to public entry across businesses. This review supersedes historical “what works now” summaries for the topics below. It preserves approved canon and does not declare Charity fully complete.

## Current conclusion

The template had broad subject coverage but lacked an enforceable completion record and a sufficiently explicit operational/AI mapping. Historical amendments mixed approved rules, proposals and obsolete implementation checkpoints. The template now requires source/implementation/AI/evidence/acceptance columns, per-activity trigger/priority/interruption/outcome contracts, audience-filtered knowledge and the business-availability extension.

Charity's retail systems are substantially ahead of her character simulation. Her public personality/appearance now has one runtime definition in `rebuild/hub/charity.js`, reused by the AI dossier. Ordinary dialogue now gives contextual service answers rather than unconditionally replaying the introduction. This is an ordinary conversation slice, not a full daily-life or quest implementation.

## Established identity and portrayal

Charity, “The Gifted Gabber,” is an adult in her mid-thirties; about 5 ft 6 in and 122 lb, wavy orangish-red hair, hazel eyes, a warm smile with subtle smile lines, mature nurturing presence, casual jeans/simple T-shirts. Kind, patient, mischievous, polite and slow to trust. A big talker who enjoys personal conversation and gentle teasing. Sincere, consistent kindness and concern matter; intrusive probing is different. Reciprocal flirting may bring a lower-lip bite; nervousness may bring a tuck behind her **left** ear. Neither gesture belongs in every reply, and compliments do not force reciprocation.

She lives in the private household inside her shop. Her protective/guarded behavior, fatigue and occasional deflection are established. Public concern can receive a light service-oriented answer; the hidden reason must not leak. Detailed brother/arrival events and several enforcement mechanisms remain unresolved. Do not invent recovered memories, omniscience, freedom from restrictions or a betrayal motive.

The existing approved review portrait (`assets/character-art-review/charity-v1.png`) was visually checked during this review: wavy red hair, a mature friendly expression, jeans, an olive tee, cream cardigan, brown flats and folded clothing fit the established public portrayal. This does not establish exact height/weight or approve a complete private wardrobe; those values/preferences require their own sources. No replacement image was generated or published.

## Twelve-section completion matrix

| Template section | Current design and implementation | Gaps before full completion | Traceable runtime / AI evidence |
| --- | --- | --- | --- |
| 1 Identity/lifecycle | Public adult identity/appearance/role/residence retained in one runtime definition. Original player and apparent identity are separate in AI turns. | No claim that every old legacy biography detail is recovered; actual NPC personal presence beyond the public counter remains limited.  `charity.js.definition/dossier` → `ai-context.js NPCS.charity` |
| 2 Character/voice | Established traits and specific mannerisms reach AI. Authored greeting, fitting, returns, hours, concern and bundle/box replies exist. | Broader conversation variety, mood evolution, complaint handling and personal availability need full authored workflows.  `charity.js talk/context` → `ai-ui.js aiSceneOptions` → `characterState` |
| 3 Capabilities/stats | Ordinary civilian shopkeeper; body/speech restrictions continue through existing systems. No new powers/numbers invented. | Canonical attribute allocation/combat profile not established here; detailed physical routine adapter absent.  Existing body guards; no new attribute allocation authored |
| 4 Daily rhythm | Public service and explicit closure/staff flags implemented. Canon establishes overwork, quick counter meals/tea, chores in quiet windows, pressured recovery of roughly six hours and occasional closures. | No complete autonomous sleep/meal/shower/rest/closing/reopening/coverage controller. Exact timing/priorities and weekend operation remain unresolved.  `business-availability.js`, `cherished-touch.js availability/staff`; no whole-day controller |
| 5 Home/belongings | A–J layout and navigation/fixtures retained. Queen bed, vanity, bath/shower attachment requirement, kitchen/dining, closet/laundry and stock have source descriptions. | Most household fixture uses, actual product/food/clothing stocks, cleaning/laundry, personal budgets and timed jobs remain absent.  `cherished-touch.js rooms/fixtures/useFixture`; most personal uses absent |
| 6 Wardrobe/care/diet | Casual public wardrobe is established. Normal shower duration is **8 minutes**, not a 25-minute bath. | Detailed private wardrobe, grooming product/scent choices, meals/preferences and corresponding real item effects remain proposals/deferred.  `CHERISHED-TOUCH-COMPLETE-LOCATION-DRAFT.md`; shower/care controller absent |
| 7 Relationships/social agency | Shared per-player signed relationship; praise uses existing rules. New ordinary conversation memory separates apparent identities and players, survives reload, and does not invent past encounters. | Full recognition/learned preferences, private invitations, visits, decline/repair and authored disclosure controller remain incomplete.  `relationships.js`; `charity.js memory/context`; `cherished-touch.js askAccess` remains legacy |
| 8 Work/public life | Ordinary clothing, configurable bundle, fitting, checkout, owned variants, mystery jewelry and enchanted effects exist in tested retail modules. | Full customer queue/coverage work, staff responsibilities, interruptions and workday routines are not a complete living NPC.  `cherished-shop.js`, `player-clothing.js`, `enchanted-effects.js`; retail tests |
| 9 Form/quest routes | Approved thresholds, six-hour ordinary commitment, rewards and twentieth-trial exception recorded below. Protected suits stay separate. | These are design records, not functioning playable quests. Several trial/control/reward-use/dependency details remain unresolved.  Design records and a guarded reveal hook only; no completed quest controller |
| 10 Narration/AI | Canonical public profile plus actual public identity, relationship, service activity and heard topic reach selected character facts. Private author lore is excluded. | Real-model portrayal acceptance still requires the paused Worker update and candidate deployment. No claim the model saw artwork pixels.  `ai-context.js build` → `scene.characterState` → `services/ai/core.mjs sceneFacts` |
| 11 Persistence | Retail ownership/receipts and conversation/closure/staff state persist. Existing save slots and per-player relationships remain. | Whole-life migration, resumed routine jobs, closure coverage and incomplete quest state need their own implementation/evidence.  `world.charity`, shop staff/closed records, per-player relationship and retail accounts |
| 12 Verification/acceptance | Focused automated/browser evidence is recorded with this candidate. Prior public retail acceptance remains valid for its release. | A normal complete Charity day, household cycle, mask shift, sleep interruption and actual model review cannot be marked passed yet.  Candidate verification JSON, automated suites and isolated browser script; actual model pending |

## Reconciled current rules — keep exceptions distinct

- **One relationship meter:** signed −100…+100 toward each individual player. Appearance familiarity is separate; do not create a second mask-trust meter. Current mask eligibility is **+90**, replacing the legacy 100% trust proposal.
- **Selective sensitive conversation:** +75 is eligibility only, with actual privacy, willingness, known world/progression context and a specific permitted fragment. Around +50 may support an indirect caution, not a fixed unlock or forced disclosure. Typed metagame knowledge is not witnessed knowledge. No secret controller is claimed implemented.
- **Ordinary Assist Charity commitment:** six in-game hours, Charity-consistent outward expression, no ordinary early handover, safe ordinary shift-end return/removal. Do not apply unrelated mastered-form delegation's immediate reclaim rule to this separately accepted commitment.
- **Ordinary successful shift rewards:** 250/300/350/400/450 gold for completions 1–5, then 500; +5 relationship once per completion, clamped at +100. First two completions grant one-use 10% checkout discounts; third unlocks permanent 10%, tenth 25%, fifteenth 35%. Tiers replace, never add. Retail can read saved reward records, but the quest completion engine is not thereby implemented.
- **Twentieth-completion exception:** temporary mask binding and standard mastery challenge; successful mastery gives 2,000 gold plus a usable 150-point mastery reward, with no retained Charity form. Rarity/control/restriction details, ordinary twentieth-shift pay interaction and selectable reward semantics remain unresolved.
- **Resistance hideout invitation:** +100 relationship **and completion of that twentieth mastery challenge**. This supersedes five-shift access. No separate entrance quest or silently added crystal-count gate. An actual Charity invitation is still required; the destination remains deferred.
- **Two different concealed routes:** hallway emergency exit to the alley versus Charity-only hideout reveal beneath fabric. Neither public shopping nor ordinary private access reveals the hideout.
- **Exactly three protected trap suits:** secure, not merchandise/fitting/loot/rewards; distinct from temporary coverage mask and ordinary owned forms. Their dangerous permanent role-assignment design does not authorize a new equip action or implemented permanent overwrite. A real authorized back-area visit needs the approved functional warning without revealing concealed provenance.
- **Deliveries:** Cherished Touch's limited enchanted restock is Monday 06:00. Burke's courier has the separately approved daily 21:30 inventory check and 06:00 delivery. Same courier does not mean the same restock cadence. Courier biography/route/venue remain deferred.

## Shop entry and the reported Burke's 19:15 case

Source finding: Burke's checked weekday 08:00–20:00 but had no public service NPC registered for the counter. At 19:15, the posted-hour guard correctly allowed entry; the absence of an actual visible worker was a separate implementation gap. It is not evidence of an approved earlier closing time.

Implemented candidate: both shops use shared public-entry availability requiring an open service window, no recorded closure and a present working employee. Burke's now has a saved Tits counter-service record, a registered visible counter actor and ordinary dialogue routing. The business module itself binds both worker and location, rather than relying on a separate UI-only registration. This is public service presence, not her future apartment/nightlife/daily-needs simulation. Explicit worker absence or off-duty state blocks entry and direct counter service. The entrance displays a clear closed/unstaffed message. Existing visitors can leave with belongings preserved. Burke's pre-closing queue grace remains separate from admitting new customers.

Cherished Touch retains the historical weekday round-the-clock window; undefined weekend service is conservatively unavailable rather than invented staffed operation. That is an implementation boundary pending an approved weekend/coverage design, not a new owner-approved weekend schedule. Recorded rest closure or absent staff also blocks entry. Full autonomous closure/reopening and substitute staffing remain unimplemented; a true flag does not prove those routines exist.

## Known safety/permission gap to address next

The legacy ordinary private-access button still grants blanket back-room access. This does **not** satisfy the later purpose-limited invitation/warning design. Around +70 hallway access was proposed, not approved; do not invent a fixed threshold now. The approved protected-suit warning and per-room/purpose/time-bound permissions need a focused adapter before claiming the private household complete. Current room access still does not allow taking/equipping those suits or revealing the hideout.

## Next design/build order

1. Finish the ordinary living-shop loop: actual availability, counter queue/attention, closure/rest/reopening and acknowledged departures. Review only genuinely unresolved timing/weekend choices together.
2. Implement the approved eight-minute shower and real food/drink/wardrobe/care/laundry jobs using existing shared adapters. Keep new personal tastes/products clearly proposed until reviewed.
3. Replace blanket private access with actual scoped invitations, necessary transit, warnings and disclosure filtering. No automatic +70 rule.
4. Implement the already-approved six-hour coverage and reward progression once real staff tasks and rest handover exist; resolve twentieth-trial parameters separately.
5. Build deferred hideout/other quests only in their own authored scope. Do not reopen approved retail prices/effects or infer that shop completion requires finishing the whole overworld.

**Honest status:** the template is strengthened, Charity's public representation/service slice is improved, and closed/unstaffed entry is implemented locally. Charity is not a template-complete living NPC yet. No new public release or Worker replacement is claimed by this review.

## Local verification

**1,479 automated cases across 88 suites passed**, including eight Charity cases and eight business-availability cases. Ten isolated browser checks passed for the reported 19:15 absence, actual Tits recipient/dialogue, closing boundary, safe exit, Charity follow-up and real client packet/public-information filtering. Syntax, script paths and diff checks passed. See [verification record](audits/charity-template-availability-verification.json). Browser AI transport was intercepted; no paid provider calls, owner-save use or actual Cydonia quality pass is claimed.
