# Epi-Center 1.0 — Handoff

Last updated: 2026-10-27 · v1.0.4

## Current published candidate
- Title: `rebuild/title-screen/` on GitHub Pages. Approved illustrated banner and slogan included.
- Creation: `rebuild/character-creation/` with editable name/appearance, 10 expandable attributes, 40 points, review, final confirmation and limited Eve hub preview.
- Independent v1 slots use `epicenter_v1_slot_1` through `_3`. Legacy saves untouched.

## Current test status
- Three-slot original title milestone: owner accepted before creation integration.
- **OPEN / FAILED:** Android: New Character → Back shows stale New Character button; second tap reports occupied slot until manual reload. v1.0.4 published with an inline title controller that immediately re-renders after slot creation and on page restore. **Owner retest pending; not fixed/accepted yet.**
- v1.0.2 and v1.0.3 navigation/cache attempts did not resolve reported Android behavior.
- Full gameplay hub is not migrated; Eve introduction is foundation preview.

## Release discipline
Every change must include a visible version, update changelog/handoff/test status, publish, then await owner validation before marking accepted. Do not assert browser validation without running it.

## v1.0.5 appearance restoration
Published `rebuild/character-creation/index.html` with canonical v0.8.84 19 appearance regions, 23 inputs total, and age/gender required. Existing v1 slot keys remain unchanged. Android owner validation pending; no changes to legacy save keys. Version v1.0.5 is visible on creation screen.

## v1.0.6 — 2026-10-27
Owner reported full appearance spectrum not appearing in v1.0.5. Published explicit optional labels, descriptive anatomical hints, multiline input fields, and cache-busted title-to-creation navigation. Canonical 19 regions and saved keys retained. **Owner retest pending; not accepted.**

## Owner-approved checkpoint — v1.0.6
2026-10-27: Owner reports all six character-creation tests **PASS**. Preserve accepted save-slot behavior, canonical 19 appearance regions, optional anatomical inputs, 10 attributes/40 starting points, draft/review/finalization flow, and existing save keys. The hub remains a foundation preview; do not mistake character creation acceptance for full gameplay acceptance.

## v1.0.7 — UI transfer checkpoint
Published `rebuild/hub/index.html` as an isolated v0.8.84 shell/layout baseline, retaining six navigation tabs and mobile bottom bar. Character confirmation and ready-slot continuation now navigate to `/rebuild/hub/?slot=N&v=1.0.7`. The new hub reads `epicenter_v1_slot_N`, not legacy `epicenter_proto_v0523`. No legacy gameplay systems, travel, inventory actions or combat were ported. Preserve approved v1.0.6 creation and three-slot functionality. **Owner review of UI baseline pending.**

## v1.0.8 corrected final UI baseline
Owner rejected v1.0.7 as earlier shell, not final v0.8.84 live feed. v1.0.8 reconstructs final v0.8.84 live feed, sticky action text entry, five quick-reference drawers, header and activity history in modular hub. Save slots remain device-local; no cross-device synchronization. New action submission records text only, without world resolution; do not claim legacy gameplay migrated. Owner acceptance pending.

## v1.0.9 UI correction
v1.0.8 rejected by owner: incorrect bottom tabs, no proper top drawers or persistent text-feed experience. v1.0.9 restores later v0.8.84 tab list, Play as default, top five reference drawers, and World/NPCs/Players/Form composer channels. Preserve slot storage; action submission currently logs only. Do not describe as complete legacy UI migration until owner accepts. Browser/device-local saves do not sync across devices.

## v1.0.10 Play composer baseline
Owner rejected v1.0.9's screen structure. v1.0.10 fixes the composer to the bottom viewport above mobile nav, makes feed independently scrollable, and displays Location/NPC/Player/Form selection directly above text input. Existing save slot keys and draft storage unchanged. **Do not claim exact 8.84 parity until owner verifies.**

## v1.0.11 diagram implementation
Based on owner-supplied paper layout and clarification: player attributes and health/stamina/arousal remain authoritative through transformation stage 22/23; form becomes authoritative at 23/23, without overwriting original player data. Each form's relationship is independent, starts at 0 when no value exists, bounded −100..+100. Play view contains location imagery placeholder, quick drawers, feed and fixed composer; NPC/Player channels request target names. No NPC responses, world action resolver, quest switching, route survey, time simulation or actual location art migrated yet. Do not mark these complete. Both main and rebuild branch updated.

## v1.0.12 owner feedback
Android screenshot confirmed v1.0.11 fields load but exposed missing base meters and incorrect attributes. v1.0.12 reads lowercase attribute keys, seeds absent player baselines 100/100/0, normalizes `hub` to Central Hub, displays specified description and Eve. First Steps objective and 100 gold/50 EXP are informational only until quest logic is migrated. Existing slot keys unchanged; don't overwrite player values.

## v1.0.13 attribute compatibility
Never rename persisted creation keys without migration. Hub uses explicit display-name-to-save-key mapping, notably Empathy / Insight and Influence / Intimidation. Descriptions sourced from character-creation ATTR definitions. Syntax checked; owner verification pending.

## v1.0.14 naming contract
Canonical ten-attribute keys are Endurance, Fitness, Intuition, Reflexes, Willpower, Reasoning, Stability, Presence, Insight, Influence. Legacy saved keys Empathy / Insight and Influence / Intimidation are migrated on hub or creation load; do not reintroduce old names in new game systems. Preserve existing canonical value on conflict. Legacy v0.8.84 remains untouched.

## v1.0.15 Back and logout behavior
Hub installs guarded browser history entry and popstate handler; Back closes open drawer, navigates other tabs to Play, or shows logout reminder on Play. Escape and backdrop/back-button close drawers. Settings Log Out saves and navigates to title via location.replace; local save is not deleted. Test Android back stack and returning from title carefully; browser navigation behavior can vary.

## Future consideration — installable Epi-Center app (deferred, 2026-10-28)
Keep v1.0 web-first while building playable foundations. Later evaluate Progressive Web App (PWA) installation: manifest, icons, standalone display, service worker/offline shell, and refined Android Back behavior. Before encouraging installation, implement and verify Export Save / Import Save, including same-origin/storage differences across browsers and standalone installations. PWA does not guarantee native Back-button behavior. After core gameplay, quests, combat, and saves stabilize, consider optional Android APK packaging (e.g. Capacitor), signing and distribution. Do not abandon the web version or create a second independent game codebase. This is a planning note, not authorization to implement now.

## Recommended next gameplay milestone (2026-10-28)
Excluding the Central Hub image transfer, prioritize a fully playable First Steps starter loop: Eve interaction and quest acceptance, Hub surveying to discover Access Tunnel A South, valid directional travel and visited-state tracking, World action completion at the tunnel, exactly-once 100 gold / 50 EXP rewards, quest journal updates and persistence. Connect live-feed channels to actual world/NPC action routing, then integrate approved ten-attribute 1d20 resolution, then design combat. Reuse validated legacy v0.8.84 behaviors without altering legacy save key or monolith. Owner approval and Android tests required before claiming completion.

## Starter tutorial route correction — 2026-10-28 (owner direction)
Supersedes the Access Tunnel A South destination in the preceding recommended First Steps milestone. Access Tunnel A is an UNDERWORLD location, not a discoverable overworld route from Central Hub; exclude it from overworld tutorial survey/pathing. Use Cherished Touch as the starter destination, northeast of Central Hub. Proposed First Steps: meet Eve and accept, survey to discover Cherished Touch, select northeast in Path, travel and explore, then complete/turn in tutorial. Preserve existing proposed 100 gold/50 EXP pending owner balancing. Distinguish discovered, visited and accessible states. This is a design note only; gameplay implementation remains pending.

## v1.0.16 Cherished Touch initial implementation
Location NE of Central Hub. Exterior single-story clothing store, sign, display windows, Help Wanted sign; interior shelves and eclectic stock, manager Charity behind counter, curtained backroom hallway. Owner-established store hours Mon–Fri 24h, umbrella 50 gold, mystery box 150 gold, no returns; commerce, restricted backrooms and exclusive quests are NOT implemented yet. `save.world.discovered.cherishedTouch` and `save.world.visited.cherishedTouch` track route state; `save.world.npcsDiscovered.Charity` only becomes true after direct Charity interaction. Do not auto-discover Cherished Touch quests or Charity on entry. First Steps quest still needs acceptance/completion/turn-in implementation. No Access Tunnel A overworld route.

## v1.0.18 handoff
Original hub art embedded; clickable NE/SW compass markers; Eve NPC targeting and First Steps reward flow; NPC dropdown uses entity IDs. Player dropdown currently local-only. Android validation pending.

## v1.0.19 routing principle
Path drawer uses a shared discovered, directly connected overworld adjacency model. Each accessible destination is a clickable compass marker. Central Hub SW from Cherished Touch must permit return; Cherished Touch NE from Hub after survey. Extend this same principle to Map tab later, not in v1.0.19. Test original Hub artwork only while physically at Hub. NPC selection and Charity discovery verified by owner at Cherished Touch.

## v1.0.20 image presentation
Original Central Hub art now renders full width at intrinsic aspect ratio, without cover cropping or fixed 105px viewport. Owner confirmed earlier travel return, image presence, and Eve interaction. Full-frame Android confirmation pending. NPC conversational AI deferred.

## v1.0.21 image viewer
Owner still saw incomplete artwork after v1.0.20. Added unconstrained full-ratio inline image and tappable full-screen viewer with Close. Preserve legacy JPEG exactly. Await Android verification.

## v1.0.23 quest journal
Quest drawer now has Active Quests and Journal Completed sections. Completed quests migrate into save.quests.journal.completed with expandable title, details, rewards and completedAt timestamp. New completions capture ISO date at Eve turn-in; previously completed saves show timestamp unavailable. Preserve exactly-once reward. Owner confirmed original First Steps completion; new journal awaits Android test.

## v1.0.24 Journal navigation
Bottom Builder tab replaced with Journal. Journal screen owns completed quest archive and expandable details; Quests drawer has Completed Journal button navigating to it. Saved journal data unchanged. Await Android verification.

## v1.0.25 combat design / Resolve
Owner approved separate Resolve, staged encasement with escape chances, encounter-specific defeat consequences. Mastery is earned when player resists defeat/transformation and overcomes form; submission means form influence (e.g. Erin daily routines). Tiers TBD. Combat implementation deferred. Resolve replaces Mental Resilience and appears as fourth resource, migrating old save values. Preserve 23/23 transformation attribute rule.

## Standalone combat engine foundation
rebuild/combat/engine.js exposes EpiCombat API and seeded simulate('kibbles'|'erinsHeels'|'ordinaryNpc',seed). Four resource bars per combatant and 10 attributes; rarity budgets provisional. Not loaded into Play UI. Defeat and mastery are distinct: losing form encounter never permanently bars mastery, and post-defeat internal resistance/escape must be supported in later persistence design. No automatic 23/23 transformation. Do not interpret fixture numbers as lore. Current prototype is single encounter only; needs action costs, status lifecycle, resistance from inside, mastery ledger, item-specific agency and PvP safety before live gameplay.

## Combat foundation continuation
Canonical combatant records now include identity and relationships; encounterSnapshot clones source records; outcomeRecord produces a separate record with appliedToPersistentState=false. Read docs/COMBAT-FOUNDATIONS-GUIDE.md for plain-language Guide and future Eve dialogue intents. Capture should permit Resolve recovery and mental saves; mastery possible after defeat/from within. No live consequences or dialogue implemented.

## v1.0.26 alignment
Specialization is calculated, not chosen. Physical Fitness+Endurance+Reflexes+0.5 Intuition; Mental Willpower+Reasoning+Stability+0.5 Insight; Arousal Influence+Presence+Insight+0.5 Intuition. Percentages from three-score total. Character and Stats display alignment. Engine helper available for forms/NPCs/items; individual profiles not yet authored. No manual specialization override.

## v1.0.27 UI
combatAlignmentMarkup renders native details/summary for accessible tap-to-expand alignment, closed by default. No custom event listener or save mutation. Applies to both Character and Stats drawer.
