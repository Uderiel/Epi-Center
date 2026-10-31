## v1.0.42 — Kibbles wearable, treat mastery and help-seeking test

Restored the v0.8.84 German Shepherd Skinsuit as one persistent Kibbles item in Equip, including the legacy ownership/worn fields and authored body descriptions. Mastered equip selects a complete appearance/attribute/resource/technique overlay; will-release restores the untouched original profile. Remaining form pools persist across release/re-equip/reload, including zero Health/Resolve from approved combat victories; no automatic healing. A regression test caught stale partial-body descriptions after mastery release; resolved encounter anatomy now stops overriding the restored original body and speech. Old v1.0.41 victory records are enriched in place, without duplicate items. Character shows current and original appearance separately; Form/Stats use the active profile. Public canine voice cannot trigger NPC quest dialogue; private thoughts retain intent. Four-paw movement and lack of precision grip are reflected in temporary text responses. No zipper or seam.

Dev now sets Kibbles mastered/unmastered without refilling pools or inventing influence progression, and adds test dog treats. Inventory feeding an available unmastered Kibbles consumes one treat and grants base mastery with placeholder acceptance narration. During combat use the encounter Inventory tab: one Minor, one treat, immediate mastered completion using Kibbles' remaining resources. Canine paws cannot manipulate the treats. Already mastered feeding does not consume another item. Cherished Touch purchasing remains unavailable. Habits, routines, preferences and internal unmastered escape routes remain unbuilt.

The opt-in Dev help-seeking simulation uses three adjacent test tiles, not a world location. Move is Main and preserves unused Minor; Call for help is a test Minor. Actual restraint/leg/speech eligibility applies, attachment persists, and enemy turns continue. Calling for help can provoke a paid, rolled head Grapple without free coverage. Reaching the simulated bystander offers assistance; it does not invent an unauthored rescue/peeling power or award mastery. World Path remains locked during combat. Approved Health/Resolve mastery, player defeat, submission and escape outcomes remain distinct. Helper ability, reduction amount and sealed-form escape rules need owner definition before real rescue is built.

Validation: **92/92 deterministic cases** (34 adapter + 38 AI + 20 wearable/help), entity-rule assertions, all combat JavaScript and HTML entrypoint compilation, and whitespace checks PASS. **35 local automated browser assertions PASS** across 390×780, 360×640 and 1100×780: overlay/restoration, old-save enrichment, depleted pools, moveset replacement, canine speech/private thought, mastered/unmastered controls, both treat routes and single consumption, help movement/AI/arrival/reload, navigation lock and pinned composer/feed. Two harness expectations were corrected for resource clamping and action-budget precedence; one stale-screen assertion was rerun after explicit navigation. No observed site-origin errors; browser-extension metadata errors excluded. Local QA uses an isolated Slot 2 fixture, never the owner's production slots. Save keys/schema unchanged.

Manual acceptance pending: use Dev to grant mastered Kibbles, Equip/unequip and compare current/original appearance and damaged pools; test Bite/Wrap menus, reload, unmastered release gate, inventory/encounter treats, and help-seeking with usable versus blocked legs/head. See [release validation](releases/v1.0.42-validation.md) for scope, evidence and publication verification. **Next world work: location, quest trigger, quest connection, repeat-trigger rules.**

[Play v1.0.42](https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.42).

# Kibbles restoration from v0.8.84 and mastery redesign

Status: source audit with owner-confirmed mastery/overlay contract. The previously listed two questions are resolved; do not ask them again. No gameplay changes or release in this revision. Current playable release remains v1.0.40. The owner's request expands the next milestone beyond Bite/AI: restore Kibbles' authored current appearance, equipped-body restrictions, identity/influence behavior and temporary action/speech responses, then establish a coherent equipment/mastery lifecycle. Kibbles was less complete than Erin in the legacy build; missing behavior must remain identified rather than presented as restored.

## Owner-confirmed contract — authoritative correction

- Mastered Kibbles cannot involuntarily override the player's intentions or take over identity. This was already established in the form-control framework; Erin's autonomy adapter explicitly requires delegation for a mastered form (`autonomyAdapter867`, source around lines 5637–5644). Routines, habits and preferences are what remain undeveloped for Kibbles, not this mastery-control principle.
- Mastered Kibbles is equipped as a complete form overlay: active appearance fields, attributes and combat resources immediately reflect Kibbles. Preserve the player's original appearance, underlying attributes and combat resources separately. Do not overwrite the base character or reuse the earlier gradual voluntary-equipping prototype as the mastered equip behavior.
- The player simply wills mastered Kibbles to unequip. Remove its overlay and restore the preserved original appearance, attributes and combat resources. This is deliberate form release, not hand-operated equipment manipulation. Ordinary canine paws still cannot perform arbitrary humanoid inventory actions.
- Kibbles has **no zipper or seam**, mastered or unmastered. Legacy zipper/rescue references are obsolete prototypes and must not be restored as canon.
- Fully sealed unmastered Kibbles requires alternative escape/control/mastery routes from inside the form, comparable in structural purpose to Erin's internal resistance framework. Those Kibbles-specific routes have NOT been designed. Do not substitute an external unzip action, invent a final trial or grant mastery merely for being fully transformed.
- The already-approved combat-victory acquisition route remains in place. This correction does not invent new internal mastery pathways or tier rewards.

## Source custody and precedence

- Canonical legacy artifact: `epi-center-v0.8.84-attribute-foundation-corrections.html`, introduced/last changed at repository commit `8a6370e`.
- SHA-256: `10b2da52fb85bd4fdfa470dddc629e3a155b40d6ade549e03c5250d1545677cd`.
- Current implementation inspected: development head `43f9d253f3483e065841fcbc0ee94a485804fa75`; published gameplay commit `63dabac777a0141e0078a7dc885e3c1a08ccb311`.
- The legacy file contains cumulative overrides. Restore the latest applicable behavior, not every earlier implementation at once. Bella and Kibbles aliases refer to the same German Shepherd skinsuit, not separately awarded equipment.
- Newer owner-approved encounter rules in `COMBAT-FOUNDATIONS-GUIDE.md`, section “OWNER-APPROVED Kibbles encounter outcomes and one-turn submission,” supersede legacy rescue-only mastery and old ability scores/difficulties.
- Preserve the ten attributes, Resolve naming, Main/Minor/Reaction model, connected anatomical spread, existing saves and accepted UI. Do not restore obsolete automatic stat healing, per-chat transformation advancement, sixty-second threat timers or the old Underworld encounter placement incidentally.

## Restoration inventory

| Area | Legacy source anchors | Restoration contract and gaps |
|---|---|---|
| Complete visible appearance | `BELLA_FINAL74`, lines 974–1003 | Restore German Shepherd body descriptions across current appearance fields; tail is separate from back posture. Original human appearance remains an archive. Human measurements must not remain labelled as current canine measurements. |
| Partial changes | `BELLA68`, lines 700–712; `regionSpread52`, line 150; `detailedBody67` overrides | Source has eleven ordered stages and older four-region encounter coverage. Rebuild has twelve connected regions. Map authored descriptions to actual current changed regions; do not replace the new graph or use total percent to claim every body part changed. |
| Identity and public name | `identityInit`, `nameNow`, `dogText`; original archive views | Keep stable actor identity, public form name, awareness and current body separate. Renaming a suit must not duplicate ownership or grant mastery. |
| Walking and posture | `movementProfile73`, `resolveMovement73`, `movementIntent75`, lines 925–1064 | Full canine body walks/runs on four paws; cannot sustain human-style upright walking. Partial limbs have context-specific limitations. This is not a universal prohibition on route travel. Preserve explicit intent/negation precedence. |
| Object manipulation | `resolveWorld71` and v0.7.2 overrides, lines 840–907 | Paws lack human precision grip. Round doorknob, writing and inventory manipulation require anatomy checks. Legacy zipper handling is rejected: Kibbles has no zipper or seam. Push/lever/muzzle alternatives depend on an actual authored object, not invented success. |
| Speech | `chat`, line 140; `act68`, `submitPlay69` and `resolveWorld71`, lines 724–875 | Canine throat produces barks/whines and gestures instead of intelligible human speech. Recipient selection does not bypass anatomy or silently trigger Eve quest completion. Physical speech restriction is distinct from influence suppressing intent. |
| High influence / identity loss | `advance51`, `outcome52Base`, lines 89–168 | Legacy uses an explicit `taken`/unaware state tied to its old Mental Resilience depletion. It does not establish a new approved Kibbles percentage threshold. Preserve temporary canine-impulse, digging and bark/gesture responses; do not copy Erin's 99% threshold onto Kibbles. |
| Private thoughts | `send816`, lines 2093–2097 | Private form communication retains intended thoughts. The form's reply is a temporary sensation/instinct response, explicitly incomplete. Never publish suppressed private words as audible speech. |
| Recovery circumstances | `advance51`, `outcome52Base`, lines 105–117 and 156–158 | Rest/dream and identity anchors exist; collar/confinement/praise can reinforce the form and block recovery in the prototype. Port circumstances deliberately; exact new Resolve gains, checks and timing require balancing and compatibility with the current engine. Do not add them as free combat heals. |
| Physical suit ownership | `reconcileSuit522`, lines 176–193; `equipment67`, lines 685–686 | One persistent physical skinsuit independent of display name. Mastered/owned Kibbles belongs under Equip, not ordinary consumable Items. Repeated victories and renames must not duplicate the same physical item or repeat acquisition rewards. |
| Equip/removal | `equipBella67`, `remove522`, `unequip51`, `equipment67`; newer owner correction | Mastered equip applies the complete form overlay; will-based unequip restores the preserved underlying player. There is no zipper/seam in either state. External unzip prototype is rejected. Internal escape routes for sealed unmastered Kibbles remain undesigned. |
| Base mastery vs progression | `recover51`, `outcome52Base`; `FORMS70`, `masteryPanel70`, lines 795–798 | Legacy base mastery involved identity resistance plus rescue. Later rarity upgrades proposed scent tracking, canine obstacle use and a tracking trial; those were displayed requirements, not scored implementations. Acquisition and upgrades must stay separate. No new tier bonuses or trial rewards are approved here. |
| Full encounter integration | current `entity-rules.js`, `play-encounter.js`, Hub `commitEncounter` | Current victory grants mastery and fully equips Kibbles, but Equip is still a placeholder; current-body descriptions, freeform speech/action restrictions, identity-loss continuation and a persistent wearable lifecycle are incomplete. Bite/AI alone would not finish Kibbles. |

## Current appearance field mapping

The restored form definition should contain authored descriptions plus source provenance. It must derive a current-body view without overwriting `save.appearance`.

| Legacy region | Rebuild display field | Established complete-form description |
|---|---|---|
| feet | footSize / Feet | Canine hind paws with weight-bearing pads and claws; no human shoe size is inferred. |
| legs | legs | German Shepherd hind legs, digitigrade and adapted for four-legged movement. |
| hips | hips | Canine pelvis and hindquarters supporting a four-legged gait. |
| buttocks | buttocks | German Shepherd hindquarter musculature and tail-base anatomy. |
| waist | waist | Canine abdomen and waist proportions. |
| back | back | Quadrupedal German Shepherd spine and back posture. |
| chest | chest | Deep canine chest supporting a four-legged stance. |
| arms | arms | Canine forelegs bearing weight during movement. |
| hands | hands | Forepaws with pads and claws; no human precision grip. |
| fingers | fingers | Canine toes and claws; human finger dexterity absent. |
| neck | voice / Neck & voice | Canine neck and throat; human speech replaced by canine vocalization when physically transformed. |
| face | face | German Shepherd muzzle, jaw and canine tongue. |
| eyes | eyes | Canine eyes and visual perspective. |
| ears | ears | German Shepherd ears and directional canine hearing. |
| hair | hair | German Shepherd fur covering the head and body. |
| skin | skin | German Shepherd double coat over canine skin. |
| scent | scent | Canine scent and heightened olfactory sensitivity. |
| measurements | height, weight, build | Full-sized German Shepherd proportions and four-legged configuration; numerical height/weight not authored. |
| tail | Separate current-body tail entry | Fully formed German Shepherd tail, balanced for canine movement. |

Unspecified anatomy stays explicitly unspecified. No new age, coloration, numerical measurements or detailed anatomy is invented to fill a blank field. Partial states use region-specific wording and retain unchanged baseline traits.

## Mastery/equipment model — confirmed core, unbuilt extensions

Represent these separately: ownership of the physical item; base mastery; equipped item; actual transformed anatomy; active resource profile; influence/awareness; mastery-upgrade progress. Possessing, wearing, becoming fully transformed and mastering are different facts. A defeated or captured player must not be promoted to mastered ownership by a broad “is canine” check.

1. Keep the currently approved first acquisition route: defeating enemy Kibbles through Health or Resolve grants base mastery, private notification, full transformation and immediate mastered equipment. Escape, being encased, submission or player defeat do not grant mastery.
2. Keep Kibbles in Equip after acquisition with name, mastery status, worn/carried state, current restrictions and legal equip/release controls. Equip must validate ownership, current threat, available body/slot and physical requirements. Renaming does not create an item or change mastery.
3. Keep persistent form resources separate from underlying player resources. Equipping a mastered form immediately applies the complete appearance/attribute/resource overlay; removing restores the underlying player's preserved profile, not freshly healed stats. Re-equipping does not refresh depleted form pools.
4. Confirmed meaning of base mastery: deliberate control of this specific form. Mastered Kibbles cannot override player intentions. Canine speech, paws and posture remain physical constraints, rather than evidence of mental takeover.
5. Confirmed mastered removal: will-based unequip removes the form overlay and restores the original profile. No hands, zipper, seam or helper required for this mastered release. A fully sealed unmastered form cannot use that mastered release; its alternative internal routes remain to be designed.
6. Rarity/mastery tiers are later progression, separate from first control/acquisition. Keep the legacy tracking/obstacle/trial concepts as candidates, without awarding progress simply for wearing, spamming chat or repeatedly winning the same encounter. Exact tier thresholds, rewards and repeat rules need a separate design.
7. Restore high-influence intent redirection for applicable unmastered/captured states without inventing an automatic schedule, percentage threshold or regression of a mastered form. The future post-defeat resistance route must specify eligible actions, recovery, assistance and its own mastery predicate.

### What remains undeveloped

Kibbles' routine, habits, preferences, context-aware intentions and responses need their own authored definition. Its alternate internal escape/resistance/mastery routes also need design. These are not permission questions about the now-confirmed overlay or mastery-control rules.

### Erin framework reviewed for structure, not copied personality

- `ERIN817` (around line 2155): personality, values, interests, communication and mastery expression are authored data.
- `ERIN_AUTONOMY867` (lines 5407–5425): form actor/binding, capabilities, location eligibility, needs, preferences, weekday/weekend schedules and bounded history/memory.
- `influenceBand867`, `controlPolicy867` (around 5552 onward): separate influence context from permission to execute an action.
- `autonomyAdapter867` and `think` (around 5637–5655): a mastered form retains player control and requires explicit delegation; recording a preference/intention does not grant execution authority.
- `authorizeDialogue867`, `Dialogue867` (around 5559–5680): request assessment, agreement, refusal, clarification and authorization are distinct; actual location/resources/control are rechecked when an action executes.

Reuse that structure for a Kibbles-specific definition when its routine/habits/preferences are authored. Do not copy Erin's office schedule, hobbies, human hands or conversation style, and do not imply her legacy framework is already integrated into the rebuild. Her internal resistance/mastery structure is a reference for designing Kibbles' distinct sealed-form pathways, not an already-authored solution for Kibbles.

## Implementation and acceptance sequence

1. Build a separate authored Kibbles wearable definition and current-body projection. Test every mapped field, partial vs full state and unchanged original archive.
2. Route public speech, private thoughts, text actions, UI inventory actions and route navigation through the same anatomy/influence eligibility checks; record intended private experience separately from observable outcomes. No unrelated narrative keyword may bypass a restriction.
3. Replace the Equip placeholder with persistent mastered suit ownership and will-based equip/release controls under the confirmed overlay contract. Retain the existing Dev-only encounter launcher and pinned composer. Close the duplicate-grant/re-equip healing paths.
4. Implement confirmed mastery control and will-based removal semantics; separately design the unmastered internal escape/mastery continuation before implementing it. Restore legacy recovery circumstances only when their new action timing/cost rules are specified.
5. Finish Bite/AI and form combat menus against the authored restrictions; test physical/mental/arousal victories, Confuse, escape, capture, mastery, repeated encounters and re-equipping across reloads.
6. Run browser acceptance for Equip, Stats/current appearance, all text channels, motion/manipulation, mastery notifications, persistence and navigation. Only publish a complete tested candidate, with unresolved design exclusions stated. Add the quest/location after this lifecycle works.

Current playable build: https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.40
