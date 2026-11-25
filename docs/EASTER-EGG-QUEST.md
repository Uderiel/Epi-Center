# The Easter Egg — original v1.0.69 rules with unpublished werewolf addition

Owner confirmed the original rules and refined discovery on November6,2026. On November24the owner adds the male werewolf as an enhanced-senses discoverer and explicitly chooses discovery-only with a size restriction for follow-up. This supersedes the historical pending Easter Egg notes in CENTRAL-HUB-EXPANSION-DESIGN.md.

The quest is hidden and has no assignment, giver, Eve conversation, First Steps prerequisite, attribute threshold or discovery size rule. At Central Hub Spire, inspecting/investigating/searching surroundings while fully in an animal form with enhanced senses discovers a chicken beneath the base. Kibbles qualifies whether mastered or unmastered. Carried, incomplete, ordinary human and ordinary-senses forms do not discover it. Existing animal forms opt in with `traits: { animal: true, enhancedSenses: true }`. The approved upright werewolf uses explicit enhanced-senses/chicken-detection capability through its native definition instead of being classified as a quadrupedal animal. Its partial definition creates no owned form or shop stock.

Discovery creates the active quest entry. Examine chicken → scare chicken away → collect pastel egg. Buttons and Location text use the same state transitions. Search/inspect/examine/look-around synonyms and investigate/sniff surroundings use the canonical one-minute inspection pipeline. Each subsequent physical clue action costs one game minute through that same clock. Once discovered, the clue remains available after changing form; it must still be pursued locally at the Spire outside combat. State survives travel and reload. The chicken never respawns after completion.

## Owner-approved werewolf size exception

The actual completed male werewolf form(repository-male-werewolf) can discover the chicken at the actual Spire outside combat, mastered or unmastered. Its native traits are enhancedSenses,spireChickenDetection and spireChickenDiscoveryOnly. The owner explicitly chose “Allow discovery only; add a size restriction” after reviewing the earlier size-unrestricted quest. This supersedes the prior unrestricted-completion policy for this form, without inventing a universal numeric height cutoff or changing other forms by name.

In that body, examine/scare/collect throw the shared size reason before changing stage, rewards or time. Quest/menu UI shows the reason and disables the relevant button; typed attempts use the same reason. This also blocks switching into the werewolf after reaching a later stage. Discovery and stage survive reload and changing form; a fitting body can resume the existing sequence. No werewolf removal/transformation controller or arbitrary shrinking permission is created by testing a synthetic body switch. Once the quest is completed, ordinary owned-egg use keeps its existing rules; this is a quest-reach restriction, not deletion of rewards.

Collection completes the quest once per character, appends a timestamped Completed Quests journal entry, and adds exactly:

- One unspent original-character attribute point. Spend it in Character on any original attribute below 10; equipped form attributes are not increased. Allocation is unavailable during combat.
- 3,000 gold.
- 150 inventory Tier Mastery XP, allocated using the existing Items interface to any owned form.
- One edible pastel Easter egg.
- One separate permanent souvenir Easter egg trophy, referenced in Items and displayed in the existing Unit 3C living-room overview. These are two views of one trophy record. Eating the consumable cannot remove the trophy.

The edible egg fully restores Health, Stamina and Resolve to the current body's maxima and clears Arousal to zero. It does not restore inactive forms, the original body beneath an active animal form, needs, influence, mastery or conditions. It can be eaten from Items outside combat; during an active encounter it requires the player's phase and an unused Minor action, updates the authoritative player combatant and its persistent resource pool, and uses that Minor. It does not consume Main, change initiative, or alter the enemy. Reload cannot regenerate a consumed egg.

All new inventory/trophy details start collapsed and use stable UI keys. Existing saves need no reset. No retroactive reward is granted on loading or equipping a form.

Manual acceptance: investigate the Spire as a human (no clue); repeat equipped as Kibbles; examine/scare/collect; verify rewards and journal; spend the attribute point; eat the egg and verify current maxima and Arousal zero; revisit/reload without new rewards; view the trophy in the apartment living room.

Current unpublished evidence:8werewolf integration cases,22existing Easter Egg cases and4actual390×844browser checks. Full regression and source manifest:verification/werewolf-spire-summary.json. Existing reward amounts/one-time settlement remain unchanged. No owner save, paid model call or publication.
