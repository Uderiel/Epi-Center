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
