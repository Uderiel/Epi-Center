# The Easter Egg — v1.0.69

Owner confirmed the unresolved rules and refined discovery on November 6, 2026. This supersedes the historical pending Easter Egg notes in CENTRAL-HUB-EXPANSION-DESIGN.md.

The quest is hidden and has no assignment, giver, Eve conversation, First Steps prerequisite, attribute threshold, size rule or species whitelist. At Central Hub Spire, inspecting/investigating/searching surroundings while fully in an animal form with enhanced senses discovers a chicken beneath the base. Kibbles qualifies whether mastered or unmastered. Carried, incomplete, human and ordinary-senses forms do not. Future forms opt in with `traits: { animal: true, enhancedSenses: true }` on their active, completed form record. No new animal form is introduced.

Discovery creates the active quest entry. Examine chicken → scare chicken away → collect pastel egg. Buttons and Location text use the same state transitions. Search/inspect/examine/look-around synonyms and investigate/sniff surroundings use the canonical one-minute inspection pipeline. Each subsequent physical clue action costs one game minute through that same clock. Once discovered, the clue remains available after changing form; it must still be pursued locally at the Spire outside combat. State survives travel and reload. The chicken never respawns after completion.

Collection completes the quest once per character, appends a timestamped Completed Quests journal entry, and adds exactly:

- One unspent original-character attribute point. Spend it in Character on any original attribute below 10; equipped form attributes are not increased. Allocation is unavailable during combat.
- 3,000 gold.
- 150 inventory Tier Mastery XP, allocated using the existing Items interface to any owned form.
- One edible pastel Easter egg.
- One separate permanent souvenir Easter egg trophy, referenced in Items and displayed in the existing Unit 3C living-room overview. These are two views of one trophy record. Eating the consumable cannot remove the trophy.

The edible egg fully restores Health, Stamina and Resolve to the current body's maxima and clears Arousal to zero. It does not restore inactive forms, the original body beneath an active animal form, needs, influence, mastery or conditions. It can be eaten from Items outside combat; during an active encounter it requires the player's phase and an unused Minor action, updates the authoritative player combatant and its persistent resource pool, and uses that Minor. It does not consume Main, change initiative, or alter the enemy. Reload cannot regenerate a consumed egg.

All new inventory/trophy details start collapsed and use stable UI keys. Existing saves need no reset. No retroactive reward is granted on loading or equipping a form.

Manual acceptance: investigate the Spire as a human (no clue); repeat equipped as Kibbles; examine/scare/collect; verify rewards and journal; spend the attribute point; eat the egg and verify current maxima and Arousal zero; revisit/reload without new rewards; view the trophy in the apartment living room.
