# Kibbles restoration from v0.8.84 and mastery redesign

Status: source audit and concrete design for owner review. No gameplay changes or release in this revision. Current playable release remains v1.0.40. The owner's request expands the next milestone beyond Bite/AI: restore Kibbles' authored current appearance, equipped-body restrictions, identity/influence behavior and temporary action/speech responses, then establish a coherent equipment/mastery lifecycle. Kibbles was less complete than Erin in the legacy build; missing behavior must remain identified rather than presented as restored.

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
| Object manipulation | `resolveWorld71` and v0.7.2 overrides, lines 840–907 | Paws lack human precision grip. Round doorknob, writing, inventory manipulation and zipper handling require anatomy checks. Push/lever/muzzle alternatives depend on an actual authored object, not invented success. |
| Speech | `chat`, line 140; `act68`, `submitPlay69` and `resolveWorld71`, lines 724–875 | Canine throat produces barks/whines and gestures instead of intelligible human speech. Recipient selection does not bypass anatomy or silently trigger Eve quest completion. Physical speech restriction is distinct from influence suppressing intent. |
| High influence / identity loss | `advance51`, `outcome52Base`, lines 89–168 | Legacy uses an explicit `taken`/unaware state tied to its old Mental Resilience depletion. It does not establish a new approved Kibbles percentage threshold. Preserve temporary canine-impulse, digging and bark/gesture responses; do not copy Erin's 99% threshold onto Kibbles. |
| Private thoughts | `send816`, lines 2093–2097 | Private form communication retains intended thoughts. The form's reply is a temporary sensation/instinct response, explicitly incomplete. Never publish suppressed private words as audible speech. |
| Recovery circumstances | `advance51`, `outcome52Base`, lines 105–117 and 156–158 | Rest/dream and identity anchors exist; collar/confinement/praise can reinforce the form and block recovery in the prototype. Port circumstances deliberately; exact new Resolve gains, checks and timing require balancing and compatibility with the current engine. Do not add them as free combat heals. |
| Physical suit ownership | `reconcileSuit522`, lines 176–193; `equipment67`, lines 685–686 | One persistent physical skinsuit independent of display name. Mastered/owned Kibbles belongs under Equip, not ordinary consumable Items. Repeated victories and renames must not duplicate the same physical item or repeat acquisition rewards. |
| Equip/removal | `equipBella67`, `remove522`, `unequip51`, `equipment67` | Legacy allows voluntary menu removal of a mastered suit, but trapped/unmastered removal needs help. Newer owner correction forbids giving canine paws human-style equipment handling. A deliberate release rule must resolve this conflict before wiring an unrestricted Unequip button. |
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

## Proposed mastery/equipment model — not yet approved

Represent these separately: ownership of the physical item; base mastery; equipped item; actual transformed anatomy; active resource profile; influence/awareness; mastery-upgrade progress. Possessing, wearing, becoming fully transformed and mastering are different facts. A defeated or captured player must not be promoted to mastered ownership by a broad “is canine” check.

1. Keep the currently approved first acquisition route: defeating enemy Kibbles through Health or Resolve grants base mastery, private notification, full transformation and immediate mastered equipment. Escape, being encased, submission or player defeat do not grant mastery.
2. Keep Kibbles in Equip after acquisition with name, mastery status, worn/carried state, current restrictions and legal equip/release controls. Equip must validate ownership, current threat, available body/slot and physical requirements. Renaming does not create an item or change mastery.
3. Keep persistent form resources separate from underlying player resources. Wearing uses the form's appropriate active profile only at completion; removing restores the underlying player's preserved post-combat profile, not freshly healed stats. Re-equipping does not refresh depleted form pools.
4. Proposed meaning of base mastery: deliberate control of this specific form, rather than merely permission to display it in inventory. Recommendation: mastery prevents involuntary identity takeover by that form, while canine speech, paws and posture remain physical constraints. This meaning needs owner confirmation; it is not assumed from the present boolean.
5. Proposed removal: mastered Kibbles could respond to an intentional release command, allowing menu-initiated release without pretending paws can operate the back zipper. This would be a newly authored mastered-form capability. Alternative: mastery never bypasses anatomy, and a capable helper must open the fastening. Unmastered/trapped removal remains a distinct rescue path either way.
6. Rarity/mastery tiers are later progression, separate from first control/acquisition. Keep the legacy tracking/obstacle/trial concepts as candidates, without awarding progress simply for wearing, spamming chat or repeatedly winning the same encounter. Exact tier thresholds, rewards and repeat rules need a separate design.
7. Restore high-influence intent redirection for applicable unmastered/captured states without inventing an automatic schedule, percentage threshold or regression of a mastered form. The future post-defeat resistance route must specify eligible actions, recovery, assistance and its own mastery predicate.

### Two concrete decisions needed

- Does base mastery prevent involuntary identity takeover, while retaining physical canine limitations, or can a mastered Kibbles still override the player's intentions at high influence?
- Can a mastered Kibbles release on the player's deliberate command, or must a physically capable helper open the suit even after mastery?

These determine which speech/influence and Equip/removal rules can be connected safely. The prior encounter-victory mastery rule remains in force unless the owner explicitly changes it. No request to reapprove the accepted UI, costs, Submit duration or acquisition trigger is needed.

## Implementation and acceptance sequence after decisions

1. Build a separate authored Kibbles wearable definition and current-body projection. Test every mapped field, partial vs full state and unchanged original archive.
2. Route public speech, private thoughts, text actions, UI inventory actions and route navigation through the same anatomy/influence eligibility checks; record intended private experience separately from observable outcomes. No unrelated narrative keyword may bypass a restriction.
3. Replace the Equip placeholder with persistent mastered suit ownership and legal equip/release controls. Retain the existing Dev-only encounter launcher and pinned composer. Close the duplicate-grant/re-equip healing paths.
4. Implement the chosen mastery meaning and removal semantics, then the explicit unmastered post-defeat continuation/recovery route. Restore legacy recovery circumstances only when their new action timing/cost rules are specified.
5. Finish Bite/AI and form combat menus against the authored restrictions; test physical/mental/arousal victories, Confuse, escape, capture, mastery, repeated encounters and re-equipping across reloads.
6. Run browser acceptance for Equip, Stats/current appearance, all text channels, motion/manipulation, mastery notifications, persistence and navigation. Only publish a complete tested candidate, with unresolved design exclusions stated. Add the quest/location after this lifecycle works.

Current playable build: https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.40
