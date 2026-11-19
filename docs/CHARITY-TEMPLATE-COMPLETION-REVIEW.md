## Follow-up reuse check — avoid rebuilding existing systems

See CHARITY-IMPLEMENTATION-REUSE-CHECK.md and audits/CHARITY-IMPLEMENTATION-REUSE-CHECK.json. Household item/serving/needs infrastructure, job scheduling, directed memory and once-only office-pay patterns already exist. Remaining Charity work is primarily her own source/owner/room/controller integration. Actual offline multiplayer staffing/payroll remains missing shared infrastructure. Ten focused suites/171cases passed in this check; no new game logic, paid model, owner save or browser/deployment action.

# Charity — current twelve-section template gap review

## Outcome and authority

Charity’s character and coverage **design is substantially specified**, but she is **not yet a fully implemented living NPC**. Approved decisions are not missing choices. Unknown chronological age, unrevealed history and future uprising details are legitimate unknowns/deferred lore, not facts to invent or questions to reopen.

This review uses the twelve sections in NPC-AND-FORM-DESIGN-TEMPLATE.md, current owner approvals, current runtime modules and focused frontend/provider-message checks. Historical completion text is preserved separately in `audits/CHARITY-TEMPLATE-HISTORICAL-CHECKPOINTS.md`; obsolete90eligibility,60-point stats, weekday-only hours and bathroom/dining draft-only claims no longer appear as active instructions.

## Current settled design

- Independent Charity NPC, apparent mid-thirties, established appearance, Epic75mental profile, all base scores at most10. Original player remains distinct; no free Epic budget through the mask.
- Gifted Gabber: friendly/chatty despite fatigue, playful sharing humor, minimalist household, warmth and occasional specific mannerisms. Loves volunteered travel/adventure/daily-life stories; no firsthand city-layout omniscience, iteration comparisons or public Resistance motive.
-24/7staffed service; purpose-specific ordinary private visits at75+; mask offer75+; explicit invitations/acceptance. Locked-state household access/sharing is an approved exception. Retail and protected suit/secret-route rules remain separate.
- Two actual work outfits, practical sleepwear, two towels/one washcloth, approved simple care/menu, finite favorite ice cream, ten-person-day food/care targets. Monday Only on Time top-up of missing quantities, personal funds; actual community gifts supplement stock.
- Ordinary coverage6–7game hours, approved care sequence,10minute/25stage disguise/reversion, actual outfit loan, voluntary chaining. Third/fourth-shift residual changes, deterministic conserved stat transfers and clear notices are designed.
- Fourth-shift completion begins72real-hour lock, gradual speech/exit restrictions; six-real-hour alternating paid coverage with Charity first, offline continuation, private automatic mask release and retained appearance until paid restoration. Wages, lost bonus/half-pay for meal-giver rudeness and late-report corrections are designed.
- Customer duties/interruptions, occupancy/privacy, queued service, cleanup, help, gratitude, identity-safe handovers and observed reports are approved. Original hatch route plus four-shift/lock/paid-restoration exception retained;100relationship and actual invitation still required.

## Twelve-section review

| Section | What is approved / actually present | Remaining gap and source |
| --- | --- | --- |
|1Identity/lifecycle|Canonical Charity definition/appearance/stats are local runtime. NPC and masked player remain distinct.|Full NPC actor lifecycle/private-room presence and quest disguise lifecycle are not built. `charity.js`, `cherished-touch.js`; mask design only.|
|2Character/voice|Public dossier/fallback dialogue has service warmth, private-history filtering, favorite and story curiosity; reaction scripts designed.|Context-sensitive quest emotions/confrontation not implemented. No real-model prose acceptance of newest profile.|
|3Capabilities/stats|Epic75/10cap implemented, shared rebalance/migration evidence. Mask conserves player total by approved design.|No new Charity combat powers/maxima are authorized; numeric profile alone is not a civilian/quest combat adapter.|
|4Daily rhythm|24/7availability with working-staff/closure checks implemented. Sleep/care/break/rotation/interruption design settled.|No Charity autonomous actor planner, actual counter-to-bed movement, rest/care jobs or alternate staffing adapter. `cherished-touch.js` staff is present/working flags.|
|5Home/belongings|13roomgraph, fixtures/navigation, scoped ordinary visits, actual bathroom use implemented.|Most fixtures are examine-only; no Charity-owned pantry/freezer/wardrobe/laundry/meal jobs or financial account. Locked-state access is design only.|
|6Wardrobe/care/diet|Exact basic wardrobe, shared ordinary belongings, ten-person-day food/care quantities and Monday top-ups approved.|Need real item initialization/custody/consumption, remaining reserve garment quantities, recipe effects/servings, paid purchase prices/budget and actual household fulfillment.|
|7Relationships/social agency|Directed per-player score, appearance-specific conversation/preference memory, scoped invitations and safety-warning history implemented.|Persistent reportable world knowledge beyond bounded chat, actual visitor/delivery roster, witnessed-report delivery, mood/social follow-up and quest reward corrections not implemented.|
|8Work/public life|Retail quote/checkout/receipts, stock and staff checks implemented; approved duties/queue/quiet cleanup design.|No playable clerk duty menu, real NPC customer queue or authoritative multiplayer stall occupancy. No offline customer/staff simulation or payroll.|
|9Form/quest routes|Detailed approved disguise/bleed/lock/release/pay/hatch inputs in coverage design.|Quest framework explicitly deferred. Mask timing, stage/permission/attribute controllers, restoration service and historical twentieth-trial details are not implemented.|
|10Narration/AI|Public profile and permitted scene/memory reach frontend/provider builder; actual dossier loss fixed in this review.|Deferred quest/household facts cannot be sent as completed actions. Need actual model acceptance after deployment, and later controller-emitted sensory/outcome events.|
|11Persistence|Retail/item/relationship/personal-conversation state and profile revision migration already have evidence.|Need authoritative multiplayer clock, actor/shift/job/loan/pay/expiry/restoration ledgers and isolation/migration. Existing local foreground clock pauses offline and is not that service.|
|12Verification|Focused current Charity10cases, AI-context suite and backend52cases pass; actual assembled Charity provider dossier survives intact.|No whole Charity day/household inventory cycle, occupied multiplayer fitting-room, offline72-hour payroll or quest acceptance. Earlier1498/91rebalance and browser evidence remain scoped historical records, not a fresh whole-suite run.|

## Concrete integration defect found and fixed

Recent prose additions grew the assembled Charity dossier to4592characters; the backend silently kept3200. Her ordinary private-invitation condition and bundle price were lost. Frontend-only assertions had not caught this. The owner explicitly requires preserving complete authored detail. Arbitrary NPC/form dossier and voice cuts are removed from frontend registration/saved-form handling and backend packets, rather than deleting canon. Charity no longer receives an automatic city directory as if she knows this layout. Her full public profile is retained. Actual final frontend→packet→provider messages are4303characters for ordinary and many-mentioned-venue cases, with appearance, LEFT-ear mannerism, stories, half-gallon favorite, prices and75+purpose-specific invitation retained. Hidden faction/iteration lore remains absent. `charity.js`, `ai-context.js`, regression in `services/ai/test.mjs`; evidence `audits/CHARITY-TEMPLATE-GAP-REVIEW.json`.

## Dependencies to resolve before claiming a full living NPC

1. **Ordinary household package:** reuse existing garment custody, served-item consumption and timed actor/needs patterns; give Charity her own state/room map rather than cloning Erin’s inventory or moving the player. Existing `served-items.js` source handling currently routes unknown sources to Priya’s household, so Charity cannot simply be plugged in without an explicit source adapter.
2. **Food/care effects and supply economics:** approved counts are not approved numeric nutrition effects, starting funds or catalog prices. Existing household references include meal hunger relief25/40, four-minute toilet and40minute laundry; these are reuse leads, not proof Charity’s package is implemented or every new effect approved. Daily Needs fatigue-item fulfillment and surgery/respec are external unbuilt dependencies.
3. **Real-time multiplayer architecture:** six-real-hour rotations/72-hour lock must not run on the single-player one-game-minute-per-ten-active-real-seconds clock. The mapping between shared game time, offline need changes and real-time duty/rest must be explicitly designed before validating the three-day supply buffer. This is a shared architecture dependency, not another character biography question.
4. **Durable learning/privacy:** current conversation stores eight short turns and supplies three recent turns. It cannot serve as a permanent verified map/intelligence ledger or automatically share everything across NPCs/players. Retain actual speaker/source and apparent identity; real Charity does not hear every encounter her disguised substitute has.
5. **Quest/offline behavior remains deferred:** do not activate mask, compulsory actions,72-hour automation or payroll while completing the ordinary household. Later quest acceptance must cover event ordering, partial/interrupted work, duplicate reports, last payout, expiry, stock exhaustion and concurrent players using authoritative state.

## Next review package — recommendation, not permission to add effects

Prepare ordinary household actions as one package: actual owned outfit/loan-safe changes, pantry/freezer servings, eight-minute shower, safe laundry/dishes, finite supply use and low-stock notices. Reuse verified common adapters with Charity-owned sources. Present any new resource effects, personal budget/prices and extra garment quantities together for approval; do not ask again about wardrobe style, basic quantities, hours, preferred food, sharing, shower length, shift timing or existing rewards. Do not imply that she needs a new power, exact chronological age or named visitor roster before generic infrastructure can be built.

## Verification and publication limits

This pass ran focused Charity dialogue/context/backend tests and inspected assembled provider messages with synthetic saves. No paid generation, owner saves, new browser/full-suite run, live release or deferred simulation was used. The complete-profile preservation fix and this review are local development changes, unpublished. No fully completed Charity day is claimed.

## Owner requirement — preserve authored character detail

Do not impose an arbitrary length ceiling on canonical NPC/form descriptions or delete details to fit a static prompt. Preserve the full authored record, with public facts and concealed lore separated. Complete selected public dossiers/voice now pass without the former2400/3200/500/600character cuts. Actual model context is finite; the existing whole-request transport and conservative model-size checks reject explicitly before paid generation if necessary, leaving the author record unchanged. Relevance-aware retrieval is a future shared-system design, not implemented or proven here. More relevant detail can improve characterization; indiscriminate prompt growth does not guarantee better following, lower cost or faster generation.
