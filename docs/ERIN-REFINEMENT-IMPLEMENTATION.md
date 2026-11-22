# Erin refinement — v1.0.106 implementation

The approved refinement extends existing systems and saves. It does not replace Erin’s character, original art, 23-stage transformation, permanent mastery, resources, household inventory, authority or work rewards.

## Implemented

- Saved ongoing manual reading, watching, bathing, cooking, eating, dishes, lying awake and selected 30/60/120-minute naps. Current activity shows elapsed/total time; Continue advances five minutes, completion is optional, Stop cancels unfinished effects. Reading continues from the activity panel without returning to the shelf. Existing normal Read/Cook/Bath controls enter the new sessions.
- Actual completion uses existing canonical chapter, recipe, portion, dish and product effects once. Cancelled cooking produces no meal; failed stock checks produce no completion. Nap/rest fatigue relief follows actual elapsed minutes. Canonical hunger/bladder and heel recovery keep running. Release/body changes interrupt activity; reload preserves partial progress.
- The legacy-authored sofa throw blanket has saved use/put-back state without duplicating inventory or adding a magic buff. It stays with the sofa when moving away.
- Recent actual manual/autonomous reading suppresses immediate generic reading desires for 120 game minutes and prompts acknowledgement. This is implementation tuning, not a new grind meter or changed trust award. Voluntary further reading remains available.
- Mastered active Erin can lead for 30/60/120 minutes, today until 22:00, or the bedtime routine. Clear controls show leader/end time and unconditional Take charge again. Explicit supported text also authorizes/reclaims. Existing home and office adapters perform real actions; mastery/influence are unchanged. Expiry, reclaim, release, encounter/body change end authority without awarding unfinished work. Bedtime delegation ends when sleep begins, not the next morning.
- Occasional private mastered-form commentary (90-minute minimum cadence; user can reduce it) and activity-aware AI context. Ongoing details have authored fallback and bounded AI expansion. Mastery does not silence Erin or authorize unsolicited control. NPC physical presence and internal consciousness remain distinct.
- Shared departure guards for Priya, Daniel, Nadia and Richard acknowledge a recent actual conversation before moving. Initial two-minute grace can extend with actual continued exchange up to ten minutes; no remote/old conversation freezes a schedule. These are bounded tuning defaults. Existing Priya home engagement rules also remain in force.
- Present Priya occasionally speaks aloud about actual writing or addresses a present cat, with a 90-minute limit. Flats must actually be worn or co-located for hearing. No disclosure of an undisclosed flats player, invented touch, automatic purr, visitors or private thought reading.
- Day-specific weekday work priorities include actual accepted-report state and confirmed appointments. Standing references keep stable IDs/read state, with old read-history migration. Saturday/Sunday differ. Report messages retain their canonical task identity; reading cannot accept work or pay rewards.
- A separate home Personal email app provides saved drafts, outgoing/reply threads and read status. Priya is the integrated contact; Maya/Lena remain visibly unavailable. Delayed replies wait for eligible actual scheduler minutes and are issued once. Personal message AI expansion responds to the actual written body and persists the thread, using a separate conversation identity. Disabled/failing AI leaves authored fallback; emails do not book visits, move actors, send external mail or reveal private form thoughts.
- The dedicated reception Scheduler holds appointment booking/cancellation. The home planner projects the existing calendar; the computer remains work/email/notes/files. Existing approval, location, collision, attendance and reward rules are reused, with no second calendar.

## Deliberate scope and limits

This release implements the activity/delegation interface for Erin and shared conversation/narration hooks for the current NPCs. Future forms need their authored native adapters; object flats do not gain a shoe mind, and cat delegation cannot control Priya. Delegation runs existing home/office routines; it does not add a new automatic city commute, shopping economy or independent offscreen Erin.

Broader proposed weekly social cadence, new Maya/Lena actors, physical grocery/cleaner interiors and new restaurants remain separate work. Existing reciprocal Priya/Erin visiting is retained. User-level consent/ownership still governs private possessions, touch and intimacy. AI cannot grant mechanical effects, invent attendance or authorize delegation.

No phone or external mail service is added. Real paid-provider prose acceptance, private Worker deployment, native Android and the owner’s established saves still require acceptance. Automated browser fixtures and mocked generation do not prove those. New optional state is additive; no owner save was opened/reset.

## Verification

See CURRENT-STATUS.md and releases/v1.0.106-*.json for exact final counts, runtime commit and public evidence. Owner flow is in V1.0.106-OWNER-ACCEPTANCE.md. Earlier draft-only statements are historical; proposals outside the implemented list remain proposals.

## Local appearance alignment — 2026-11-21

Erin’s current reached stages now resolve to ordered region details while unchanged base regions remain untouched. Full source height5ft4/weight114lb and high arches/green eyes/copper-red hair remain. Human-reference waist26in/under-chest29.5in are design estimates, not recovered historic measurements. That initial alignment left cup/foot number unspecified; the owner subsequently approved DD/US women6 below. Existing portrait remains connected. All24 fields/order, unknowns and image consumers are detailed in NPC-FORM-APPEARANCE-ALIGNMENT.md. Verified locally; unpublished. Full evidence:verification/npc-appearance-alignment/.

## Complete appearance — owner-approved, implemented locally

ERIN-APPEARANCE-PROPOSAL.md/.json records the owner-approved full24-field appearance. Existing5ft4/114lb/high arches/green eyes/long copper-red hair/athletic full-bodied frame remain. Approved US women6,DDcup,light skin and regional details are applied through erin-appearance.js. Generated dimensions:waist26in,hips36.5in,under-chest29.5in,chest33.5in,shoulders14in,arm21.5in,inseam29.5in. Exact age remains unspecified. Existing23 stages,timing,heels,mastery/release,attributes and needs are unchanged.

Only settled regions acquire the approved target details. Current appearance is aligned before grooming/cosmetic overlays and again afterwards,retaining reached anatomy and actual hair care/makeup/cursed-lip alterations. Transformation request assembly carries that same reached-region frame through both context fields without overwriting it with the old raw target. Stale-stage frames do not acquire later facts. The original player baseline is unchanged.

The new realistic full-body photo was generated,displayed and subsequently owner-approved. The exact PNG is now connected locally; the old erin-legacy-portrait.jpg is retained unchanged as an archive. Runtime-only verification passes2,267 named cases/162 suites and38 browser checks (NPC24,current-body9,actual inventory milestone2,Erin current-body/reload3). These use simulated responses; no new Cydonia call or worker change. General model prose acceptance remains open. Evidence:verification/erin-approved/results.json. Publication stays held.

## Unpublished Erin full-body portrait approval and connection

Owner viewed the generated full-body Erin photo and replied **“Approved!”**. The exact1024×1536 PNG is now connected locally through index.html portraitMarkup on the existing Appearance/Character references. Full2:3 proportions use contain sizing without cropping at390px/1100px. Redraw/save/reload keeps one image and preserves player appearance,resources,inventory,equipment and gold. Partial/released Erin does not display the completed-form photo. The old legacy JPG remains archived unchanged; its runtime consumer now uses the approved full-body PNG.

Verification:22 focused cases and31 browser checks pass (portrait4,NPC24,current-body3); all12 connected assets decode. Prior2,267 runtime cases/162 suites remain the previous broad checkpoint,not a new full rerun. No image regeneration,paid Cydonia call,worker change or publication. Evidence:verification/erin-portrait-approved/results.json. Erin appearance/image review is complete locally. Next is Kibbles’ complete24-field proposal: existing male25in-at-shoulder/77.5lb and female23in/60lb,one-time saved identity and both existing portraits stay; proposed black/tan double coat,brown eyes,species-specific paws/forelimbs,muzzle,ears and tail await review. Exact age remains explicitly deferred; unsupported measurements stay unspecified and never use the human matrix. No new Kibbles details are applied. General real-model prose acceptance and combined release/canon preparation remain open.
