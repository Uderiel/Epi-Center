## v1.0.133 publication complete

UI-only release `6c28334` is live and publicly verified. Pages run44836651593 succeeded. Both live browser suites pass; exact published gameplay files, frozen Bible and excluded Repository/Worker baseline files match. No unpublished Repository, staff or dialogue follow-up changes are included. See releases/v1.0.133-release-summary.json.

# v1.0.133 — UI and help cleanup

Scope: mobile quick-reference layout, player-facing room names, Journal navigation and AI-off Eve help only. No Form Repository implementation, staff profiles/controllers, feeding, ownership, security, arousal, AI Worker or other gameplay changes.

- At390×844 quick-reference controls size to their wrapped contents. Live Feed heading does not cover Help.
- Remove redundant Location and Quests controls below the header; retain the location/interactions popup and five regular header controls.
- Place Journal then Power after Items, ahead of Settings and Dev. Journal shows Active Quests with existing objectives/rewards, Available Quests where applicable, and Completed Quests. Text access uses the same Journal navigation.
- Hide internal room-letter prefixes in Cherished Touch and Burke’s layouts without changing room IDs, routes or permission checks.
- Eve explains actual Stamina recovery moves and the absence of a general outside-combat refill command; no recovery mechanics change.

Unpublished Form Repository and Lee work remains outside this release. Existing v1.0.132 repository references remain unchanged. Earlier release evidence and frozen canon remain intact.

Publication candidate against publicly verified v1.0.132.

## Historical publication records

## v1.0.132 — published and publicly verified

- Burke’s Sweets: ten matched photorealistic day/night headers, actual room/clock selection and invitation privacy, full-image view; RoomD flour detail.
- Developer QA: start infection/archetype selection, skip real incubation without advancing global clocks, advance normal progression and apply actual test cure.
- Deferred tracker: D17 completed and published after verification; retain Wet Lily/Tits’s apartment layouts as explicit D10 dependency.

See BURKES-ART-AND-VIRUS-DEBUG.md for verification and limits. The23-group synopsis below is the historical published v1.0.131 scope, not a list of new pending changes.

# Next publication — reviewed change synopsis

Reviewed 2026-11-20. Baseline: publicly verified v1.0.130, runtime `8a0f2f9`, release evidence `90ec3ff`. Scope includes committed changes after that baseline **and the current uncommitted implementation**, not only changes since HEAD. Published version: v1.0.131. Owner-authorized release is publicly verified:225 exact-file comparisons, four public browser suites, healthy configured v1.0.131 Worker; Pages run44806977905 succeeded.

| Item | What this update adds or changes |
| --- | --- |
| Text-first actions | Shared context-sensitive text access invokes existing menu controllers with common wording variants, room/item/NPC targeting, ambiguity checks and identical permissions/costs. Menus remain shortcuts. This is deterministic recognition, not unrestricted language understanding. |
| Intent parsing | Separates asserted action from desire, quoted speech, thoughts and purpose clauses. “I travel to Burke's because I want candy” travels without buying; “I want to travel” does not move. Body movement/speech restrictions remain. |
| Priya text access | Typed doorstep knocks and relationship requests reach her existing route; stranger/cat and Erin identity exceptions remain distinct. |
| Eve and learned database | Remote guidance, shared action examples and player-scoped learned NPC/location/form information, without publishing secret dossiers. |
| Neutral action/source vocabulary | Structured kissing/contact terminology and clinical fluid names with source, route, target, freshness and resolved scene metadata. Authored tone classifications survive payload serialization; labels create no permissions or events. |
| Kissing | Accepted typed kisses with Tits's willingness/work gates; French/open-mouth exposure tracks actual contact toward20 game minutes in a rolling120-minute window. Individual minutes expire; either side can stop. |
| Ingestion and skin exposure | Real fresh-source contact/consumption reaches the existing route timers. Ingestion10 rolling minutes; intact skin60 continuous; broken skin30; ordinary mucous contact20 continuous. Dry skin/source-free requests create no exposure. |
| Concurrent resistance | Separate qualifying contamination points get separate hidden rolls even when simultaneous. First failure starts incubation and stops further rolls; one route cannot qualify another prematurely. |
| Regional perspiration | Activity-driven moisture, drying, body-region/clothing contact and visibility. Observers see appropriate exposed regions; worn-flat players and actual participants receive private direct-contact information. |
| Garment effects | Moisture and persistent soiling remain separate and region-specific. Shoes retain descriptive moisture but receive no dirty/soiled tags and never enter the hamper. |
| Sleeping contact | Actual accepted pressed-skin contact can persist during shared sleep; affected regions dry at half normal rate. Dry-skin contacts start when sweat appears. Separation/barriers end relevant exposure. Documented math covers viability. |
| Routine continuity | Priya/Erin/Tits ordinary routines defer through accepted encounter/shared rest and resume afterward; urgent needs retain their existing handling. No bed-sharing permission is invented. |
| Tits warning and speech | Automatic infectiousness warning once per stable player across interaction types/reload; questions remain possible. Default dialogue uses the existing club speech overlay, with authoritative choices/facts separate from voice. |
| Room D private flow | Offer, explicit acceptance, actual movement and scene-only temporary access; no permanent staff permission. Entry alone creates no sample/exposure. Source and transfer method are separately agreed and resolved. |
| Encounter arousal and sources | Ongoing accepted kissing/private activity uses actual game time, per-participant bars, threshold outcome/reset, actual fresh source records and five-minute recovery. Combat suppresses encounter-clock gains without catching up afterward; passive items retain their effects. |
| Universal relationships and gifts | Shared contextual gains/losses, repetition protection, owned-item preferred gifts and saved history. Preserves Tits's existing +5 gift/reset and other character rules. Future-NPC template requires gifts and relationship exceptions. |
| Priya date ending | Optional first-date kiss is offered only after the completed date and net +10 gained during it; typed/menu accept/decline and reload are supported. |
| Readiness policy | Mental75/physical65/arousal55; Charity90; Priya cat exception; Erin/Richard defaults. Nadia actual companion65 versus separately known canine-form55 route; private motive excluded from public/AI projections. Further dating scenes remain deferred. |
| Carrier social policy and context fix | Ordinary affinity still works; mixed-status dating/deeper contact and shared personal clothing/tableware are restricted through text and menus. Preparing AI context no longer mutates saved relationship data. Speech overlay does not erase intended social gains. |
| Double carrier gains | Active carriers receive double positive arousal from interactions, passive effects and successful rolled combat gains; caps remain. Cure ends modifier. Resets/floors/pre-carrier transformation timing are not doubled; dice and standard combat behavior remain. |
| Transformation presentation | Concrete saved-field line for each stage, highlighted milestones, coalesced routine transformation updates and persistent milestone archive reachable from History/Live Feed. Works with AI off and after feed overflow/reload. |
| Appearance UI | Removes the duplicate expandable live Appearance panel. Current fields remain available in the existing Appearance tab. |
| Canon and review records | Source-backed design/template updates, current verification evidence, this release synopsis and deferred-systems index. Historical release evidence remains immutable. |

## Evidence and limits

- 1,977 automated cases pass (including the added directed-speech framing regression); entity suites also run their internal assertions.
- Latest AI-off browser sequence: actual typed contact → failed resistance → controlled72-real-hour incubation → fourteen stages using actual Wait controls → final sleep/carrier; stable player ID/possessions and reload checked.
- Five current carrier text/menu refusal checks, encounter-arousal browser checks, Appearance-tab checks and milestone retrieval after200 routine messages/reload pass. Earlier targeted Room D, kissing, language, relationship and sleep reports remain scoped evidence, not proof of every dynamic combination.
- No owner saves or paid-model generation. Frozen v1.0.130 Bible verifies byte-for-byte unchanged. No new artwork, Underworld cure acquisition, general dating scenes or multiplayer/offline service is claimed.

## Release checklist (completed for v1.0.131)

Reconcile and regenerate the **new** release's source-backed World Bible/snapshot; select/bump release version; run release-specific verification and save evidence; freeze that new version; deploy only with authorization and verify public assets/Bible/worker afterward. The historical v1.0.130 Bible must remain unchanged. Owner subsequently authorized deployment; publication and public verification are complete. See releases/v1.0.131-release-summary.json.

See DEFERRED-SYSTEMS-TRACKER.md for remaining work and revisit triggers. Already published v1.0.130 directory/sucker-warning/Bible fixes are baseline, not new features in this candidate.
