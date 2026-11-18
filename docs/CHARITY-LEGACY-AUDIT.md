# Charity “The Gifted Gabber” — recovered design and implementation gaps

Sources inspected: epi-center-v0.8.71-cherished-touch-foundation.html and epi-center-v0.8.84-attribute-foundation-corrections.html (CherishedTouch871 quests/charity/panel); docs/EPI-CENTER-CHANGELOG.md, October25Cherished Touch notes; docs/EPI-CENTER-PROJECT-HANDOFF.md; docs/Epi-Center-Character-Design-Gap-Audit.md CP013; docs/CHERISHED-TOUCH.md; current cherished-touch.js/UI, ai-context.js and interactCharity in index.html.

## Owner-confirmed shift commitment and enforced Charity portrayal

A player covering the counter must pass as Charity, not merely wear her face and voice. Outward dialogue and interactions must be filtered/translated into her natural speaking mannerisms and behavioral patterns so the in-world system does not detect the substitution. This is a fictional disguise/role requirement, not provider-policy bypass. Player wording cannot be emitted raw if it contradicts that portrayal. Private player thought remains distinct from outward expression; exact treatment of deliberately incompatible intent/knowledge is still to be designed, without inventing Charity’s private memories or revealing hidden lore through the mask.

Accepting the job commits the player to the entire six in-game-hour shift. There is NO early departure, cancellation or replacement handover after acceptance; this explicitly overrides the assistant’s prior suggested early-handover option. Retain safe end-of-shift mask removal/return and no permanent entrapment. Explain the commitment and role constraints before acceptance. Save/reload must preserve the unfinished shift and its remaining time, with no duplicate rewards or early completion.

The player need not initiate conversation or manually seek customer interactions. When an actual customer interacts, the resulting response/behavior must be what Charity would naturally do, including when routine service is left to proceed. This requires context-sensitive role expression, not fixed keyword replies or arbitrary actions unrelated to her shopkeeper persona. The displayed outward speech and resulting mechanical actions should agree. Customer sales/stock, authorized choices and receipts must remain grounded in actual implemented shop state; role narration alone cannot mint goods, money or quest outcomes. No real customer simulation, mask filter or commitment enforcement is implemented by this design entry.

## Owner-confirmed routine pressure — hidden Countess threat

Charity pushes herself to keep working until she can no longer continue, rather than choosing a predictable comfortable sleep window. Her reason is hidden from ordinary visitors and tied to her resistance and what she attempted before being placed in Epi-Center. Exact past actions remain unspecified; do not invent them or substitute full-memory/omniscience claims.

She can take at most approximately six hours to recover. Preserve her ability to close periodically, but closure/rest is pressured and inconvenient rather than a consequence-free break. Trusted mask coverage lets her seek recovery while the counter appears to remain staffed by Charity. She knows the Countess is targeting her and fears that rest or discovery that someone else is taking her place could antagonize the Countess. If the Countess detects the substitution, she may physically appear at the shop, creating danger for Charity and anyone nearby.

This is a potential conditional threat, not an automatic Countess appearance every time Charity rests, not a numeric detection probability, and not an authored combat/punishment outcome. The Charity-consistent mask role helps maintain the substitution; do not claim it guarantees immunity from detection. Define actual detection evidence, warnings, encounter mechanics and reconciliation with earlier Hub Cylinder/Countess appearance progression before implementation. No player-facing lore disclosure or hidden knowledge is granted by the routine. Public observations can be fatigue/hesitation/reluctance without explaining the underlying reason.

Remaining daily-life design: how she eats/drinks and handles grooming/household tasks around the counter, rest/reopening and actual coverage handover, small social opportunities, and resource recovery. Earlier suggestion that coverage is a wholly safe unrestricted outing is not confirmed; retain the six-hour commitment and new pressure context. No gameplay or scheduling change implemented by this record.

## Owner-confirmed twentieth-completion temporary entrapment branch

After20successfully completed Assist Charity missions, a special milestone subverts the expectation of another ordinary bonus: the player becomes temporarily stuck wearing Charity’s mask and must complete a standard form-mastery challenge. This is an explicit owner-authored EXCEPTION to ordinary safe end-of-shift removal. The milestone is recorded per player after actual completions, not calendar days, accepted jobs, abandoned shifts or repeated reward requests. Treat it as the twentieth-completion event, not an automatically recurring trap every20shifts unless later specified.

Entrapment lasts as long as mastery takes under the existing common form-mastery framework, rather than a fixed extra timer or automatic release after the normal six-hour shift. During that period the player lives alongside Charity, subject to the same relevant restrictions. Keep enforced Charity-consistent outward expression/behavior. Exact permitted travel, synchronization with Charity, shop obligations, body/rarity/mastery parameters and restriction enforcement need design; do not infer perpetual forced following, teleportation, duplicated private memories or revelation of all her secrets.

Completing the special mastery challenge ends the temporary binding and awards2,000gold plus one usable150-point mastery reward item that the player may apply toward a form of their choice. The player DOES NOT retain ownership of Charity’s form. Record completed challenge/reward history separately from form ownership, preserve all unrelated owned forms/mastery/resources, and prevent duplicate payout/item issuance across reloads. Ordinary coverage still awards no form-mastery points; this exceptional challenge and transferable reward are separate from normal shift rewards.

Do not silently substitute instant form mastery or assume150points means150percentage points. Existing Easter Egg rewards use inventory.tierMasteryXP+=150; this is a source integration lead, not proof that the requested usable item already exists or has the right effects. Define its use, target selection, progression semantics and consumption through the real item system. Do not auto-spend it or grant a retained Charity form.

Unresolved: challenge rarity/difficulty and body/control rules, whether ordinary twentieth-shift500gold is additional to or replaced by the2,000challenge reward, the specific restriction schedule, the in-world cause/Charity’s role in binding, and post-challenge access to future shifts. Preserve Charity’s established personality: do not invent a deliberate betrayal or punitive motives merely from the milestone. Earlier blanket statements that the mask can never temporarily entrap a player are superseded ONLY for this authored milestone. No gameplay implementation or publication in this record.

## Owner-confirmed long-term discount milestones

Successfully completed Assist Charity shifts grant the following per-player discount progression: completions1and2 each grant a one-time10%discount; completions3through9 unlock/retain permanent10%; completions10through14 unlock/retain permanent25%; completion15and later unlock/retain permanent35%. New permanent tiers REPLACE the previous percentage; do not add them together or compound them. No higher tier beyond35%is currently specified.

Payment remains250/300/350/400/450for completions1–5, then500each from6onward. Every successful completion grants+5relationship clamped at+100; accepting a shift requires+90relationship on that same per-player meter. Five completions still meet the service milestone for hidden-location access alongside other authored gates. Discount progression continues after relationship saturation. No form-mastery reward. Actual purchase rounding, unused one-time discount handling, checkout exclusions if any and repeat availability still require definition; do not invent them from this reward schedule.

## Owner correction — one relationship meter, not separate mask trust

Owner clarifies that accepting Assist Charity requires Charity’s relationship with that individual player to be at least+90on the shared−100to+100scale. Earlier conversational references to90trust mean this relationship rating; a separate mask-eligibility trust meter is NOT required. This supersedes prior statements separating the90gate from relationship rewards. Sensitive disclosure still uses relationship75+and its other private/world-progression conditions.

Each successful shift grants+5relationship, clamped at+100. Starting at exactly+90, two completions reach+100, so at most10net relationship can be gained before saturation; a player starting higher gains less. Further shifts can still progress payment, the permanent discount and the five-completion hidden-location milestone while relationship stays capped. Do not invent an additional lifetime two-reward limit: normal clamping applies if relationship later falls and the player again meets the+90entry gate. Other quest rules remain unchanged. Design clarification only.

## Owner-confirmed post-fifth pay and relationship rewards

After the fifth successful shift, payment rises to500gold for subsequent successful completions. Current schedule:250,300,350,400,450,then500on the sixth and later; do not extrapolate above500. Every successful Assist Charity completion also awards+5to Charity’s individual relationship with that player, clamped to the shared−100to+100scale and applied exactly once for that completion. No relationship bonus for merely accepting/equipping the mask, elapsed partial coverage, rendering, reload or repeated reward clicks.

First two completions retain the one-time10%discount reward; from third onward the permanent10%discount remains active rather than adding another10%each time. Fifth completion meets the service milestone for hidden-location eligibility, with separate authored access/disclosure conditions. No form-mastery points. Trust90eligibility remains distinct from the+5relationship reward; do not silently turn relationship gains into a separate trust grant. Shift/customer workflow, early termination and unused one-time discount policy remain to be refined.

## Owner-confirmed reward schedule — supersedes proposed values

| Successful completed shift | Gold reward | Store discount | Hidden-location service milestone |
| --- | --- | --- | --- |
| 1 | 250 | One-time10%discount | 1of5 |
| 2 | 300 | One-time10%discount | 2of5 |
| 3 | 350 | Permanent10%discount unlocks | 3of5 |
| 4 | 400 | Permanent10%continues | 4of5 |
| 5 | 450 | Permanent10%continues | Five-completion requirement met |

Owner confirms the above250/300/350/400/450gold progression (+50each successive completion), one-time10%discount before the third completion, permanent10%after the third, and five completions for hidden-location service eligibility. Rewards and counts are individual per player, saved and awarded once per successful quest completion; no form-mastery points. Six-hour coverage, trust90and other privacy/disclosure/world-progression conditions remain distinct. The permanent discount is10%, not repeated additive10%increments.

Unresolved: whether and how unpaid/unused one-time discounts accumulate or expire, their transaction scope, rounding, stock funding, partial/failed shift terms, repeat interval and availability/pay beyond the fifth completion. Owner enumerated the first five increasing payments; do not silently extend the arithmetic progression indefinitely or assume a cap until that policy is decided. No new gameplay implementation in this design record.

## Owner correction — five completed shifts

Owner sets the hidden-location service requirement to FIVE successfully completed Assist Charity shifts, replacing the proposed three. This confirms the shift count only.250gold per shift and10%persistent noncompounding discount remain proposed, not approved. Preserve trust90, six-hour coverage, safe mask return, no form-mastery reward and other disclosure/location/progression conditions. Five completions qualify the service requirement; they do not teleport the player or reveal every hidden area.

## Owner refinement — Assist Charity quest rewards and repeated service

Successful coverage is a quest completion. Owner specifies gold payment and a discount on future products bought from Cherished Touch, with no form-mastery points awarded for completing the quest. These rewards belong to the individual completing player. Several successful completions are required before access to one hidden location beneath the shop becomes available. Do not equate one completed shift, elapsed partial time, mask ownership or a relationship threshold with immediate hidden access. Preserve prior relationship/trust/privacy/world-progression conditions; exact hidden destination/threshold and whether a private invitation precedes access remain to be authored.

Gold amount, discount rate/stacking, repeat interval, completion requirements and required number of successful shifts have not been approved. Proposed review defaults only:250gold per completed six-hour shift, a persistent10%store discount unlocked once (not compounded per shift), and eligibility for a private hidden-location invitation after three successful shifts. These are discussion proposals, not established prices/rewards or implemented behavior. Failed/abandoned shifts must not be silently counted as completed or duplicate rewards after reload. No automatic mask mastery or mastery point grant.

## Owner refinement — rest closures and mask trust90

Charity may periodically close the store to rest. Closure is inconvenient for her, so developing friendships can make voluntary shop coverage attractive. Owner sets the trust requirement for offering her appearance-changing mask and allowing a player to take her place at90trust. This supersedes the older Assist Charity100%trust threshold. Keep trust90 separate from sensitive-disclosure relationship75+; exact trust accrual/persistence and its mapping to current relationship infrastructure still need design. Friendship makes the offer plausible; threshold alone does not equip the mask or accept work.

Retain the existing six-hour coverage concept, voluntary acceptance, matching appearance/voice, and safe removal/return protections unless later changed. Rest must be an actual routine rather than an invented off-screen completion. Shop availability must account for real closure or actual present coverage, with no implicit extra worker. Compensation, temporary closing schedule/return sign, early termination, supervision/handover and trust earning remain to be refined. No mask, closure or shop service implemented by this design entry.

## Owner refinement — gradual private disclosure and initial reminder privacy

System reminders are initially private to Charity, including reminders of her arrival in Epi-Center and what happened to her brother. Owner establishes that brother-related history exists as a lore thread; exact events were not found in this scoped search of local Markdown notes and the0.8.71/0.8.84HTMLsources. Do not invent his fate or her arrival history, treat absence from those sources as proof it was never designed, or ask the owner to recreate it before a broader recovery if later needed. Details may be expanded later.

The player may observe hesitation, reluctance and topic changes, without hearing the private reminder or automatically learning its cause. Relationship75+does not produce a complete explanation. As trust develops and the first Hub Cylinder is found, more dialogue and options become available incrementally. Owner’s new wording concerns first discovery; retain the older restored-cylinder/deeper-access proposals as unresolved later gates, not an automatic override granting the full Resistance route.

Sensitive conversation should normally occur privately, rather than on the sales floor or behind the register where others can overhear. High relationship and cylinder eligibility alone do not authorize a public lore dump or immediate disclosure. Separate eligibility, actual safe audience/location, Charity’s willingness and the limited topic revealed. A public question can receive a natural deflection or suggestion to talk privately later; it does not itself move either person or grant back-room access. Ordinary shop talk remains possible throughout.

Unresolved: exact arrival/brother source, deeper disclosure topics and their progression, later reminder visibility, operating-hours staffing/rest, and precise private invitations. No gameplay or AI enforcement implemented by this record.

## Owner refinement — disclosure relationship gate and consequence reminders

Owner sets Charity’s sensitive disclosure threshold at relationship75or higher on the shared per-NPC/per-player signed−100to+100scale. She needs trust in the particular player because she does not know which side they will choose. Threshold eligibility permits selective disclosure; it does not automatically reveal every secret, force a conversation, grant private-area access or establish omniscience. Keep this relationship75gate distinct from the legacy Assist Charity100%trust design and unresolved Hub Cylinder gates.

The system does not directly censor/block her speech in this design. Instead, it can remind her of consequences for being too explicit or honest about what can happen to players. Charity remains responsible for choosing her words and caution within that pressure. The form, audience, trigger cadence and actual consequences of reminders remain unresolved; do not invent punishments, stat loss, forced transformations, attacks, player knowledge or a new numerical resource. Next clarify whether reminders are private to Charity or perceptible to the player, then define authored limited disclosure topics.

## Owner refinement — voice and concealed resistance confirmed

Owner confirms the proposed conversational direction: Charity is a big talker, makes conversation easily, remembers personal details, uses gentle teasing and steers unsafe questions away. Her capacity to resist exceeds what the game recognizes, but she remains captive to it and restricted in her options. Do not treat resistance as freedom from the system, omniscience, complete recovered memory or unrestricted disclosure. Exact enforcement of those restrictions (speech, actions, travel, warnings or consequences) remains to be clarified with the owner. This is a design confirmation, not an implemented mechanic or a new resistance statistic.

## Established design to retain

Charity is “The Gifted Gabber,” Cherished Touch’s shopkeeper/manager. Legacy profile: mid-thirties; about5ft6in and122lb; wavy orangish-red hair, hazel eyes, charming warm smile/subtle smile lines; mature nurturing appearance; casual jeans/simple T-shirts. Personality: kind, patient, mischievous, polite and slow to trust. She opposes the Countess; her NPC status prevents direct disclosure of Epi-Center’s truth. CP013 separately confirms she resisted the wider rewrite/acceptance pattern. Exact retained memories, resistance mechanism, scope of knowledge and disclosure remain unresolved. Do not infer omniscience, immunity or recognition of the player’s original identity.

Store: everyday clothes/eclectic items, oak counter and valuable enhanced/enchanted displays, four individual fitting stalls, private household behind the counter/hall and concealed authored access. Owner-authored A–J geometry remains the basis. Legacy advertises Monday–Friday24-hour operation; weekend hours/staff coverage unresolved. A staffed24-hour shop conflicts with giving Charity a realistic sleep/rest routine unless explicitly resolved; do not invent an employee or off-screen service.

Posted legacy prices: umbrella50gold, Mystery Box150gold. Mystery-item disclaimer: nonreturnable, store accepts no responsibility for effects. These were displayed concepts, not a working checkout or defined box effects. Current sign offers a full basic new-arrival clothing set without a price. Current new character default100gold; First Steps visit/report reward100gold/50EXP once. No purchase required for First Steps.

## Five existing quest designs, not five implemented playable quests

| Design | Recovered rules | Still missing |
| --- | --- | --- |
| Advertising Job | Safe; wear store advertising uniform;1d10rolls toward cumulative50; listed payout350gold female form/250gold male form | Real uniform/item and form applicability; time per roll; locations/customer evidence; repeat/cooldown limits; funding and economic balance; preserve listed differential as a legacy rule pending review, not a new invented policy |
| Assist Charity | Safe;100%trust plus positive relationship; voluntary temporary Charity-face mask gives matching appearance/voice; cover shop6hours; Charity rests weekdays, may explore/socialize weekends; return/remove mask, no permanent entrapment | Charity-specific trust versus shared signed relationship; mask/body/control/capability and safe removal rules; shop duties, transactions, interruptions, return timing and reward |
| Search the Backrooms | Extra Dangerous; high trust, associated with Assist Charity; residence/exclusive goods/concealed Resistance/Underworld access; Hub Cylinder progression | Separate ordinary household permission from restricted quest access; exact cylinder threshold; authored disclosure; real destination and quest/reward dependencies |
| Display Quality | Risky; find shop’s secret; danger of becoming part of a display | Trigger, form/item, encounter/progression, outcomes, reversal, reward |
| It Was Just One Time | Risky; apparently accidental unpaid item may have consequences | Ownership/payment/theft distinction, trigger, consequences, resolution, reward |

October25notes require at least one, preferably two restored Hub Cylinders for trusted curtain invitations; exact threshold is unresolved. First restored cylinder physically introduces the Countess, further cylinders escalate danger. Do not implement those dependencies by merely revealing a door.

## What works now

Physical shop entry, public rooms, private permission button, connected room/stall navigation, fixture examination, curtain states, toilet and canonical front/revealed rear exits. Concealed Resistance access remains behind a Charity-only authored reveal hook; browsing/search must not expose it. Current ordinary Charity conversation routes to her repeated introduction; AI dossier is brief. Shared relationship infrastructure exists, but full Charity trust/social/home/schedule integration is not established by that infrastructure alone.

## Recommended next design sequence

1. Retain the recovered personality and clarify her voice, boundaries, daily shop/home routine, knowledge limits and operating-hours coverage. Start here; no need to ask the owner to choose a wholly new shopkeeper archetype.
2. Define ordinary catalogue, starter outfit price/content, fitting/ownership, checkout/receipts, shop funds, stock/replenishment and return/buyback policy. Keep known50/150prices as source anchors; do not invent Mystery Box outcomes.
3. Make Advertising Job the first shop-specific work loop to connect actual tasks, time, purchases and payouts. Review reward balance and repeatability together rather than minting unlimited gold.
4. Design Assist Charity after the shop can actually run: separate trust from relationship, implement temporary-mask safeguards and real6-hour coverage.
5. Preserve the three risk/secret quest concepts for later dependency design. Resolve ordinary household visits versus gated restricted areas without spoiling hidden content.

Audit only: no gameplay, store prices, quest rewards, openings or lore disclosures changed. Original First Steps remains unchanged. Universal NPC/form template should absorb approved design decisions and distinguish source-confirmed rules, proposed defaults and tested implementation.
