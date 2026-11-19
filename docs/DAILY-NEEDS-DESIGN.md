# Daily Needs — owner-supplied schematic

## Source and status

Owner supplied the handwritten Daily Needs sheet in the current conversation, after Going Out of Business and Groceries Aplenty. It includes connection diagrams, furnished plans for two levels, descriptions A–F, hours, manager, merchandise and four quest concepts. The image is visible in chat; no original local image-file copy has been saved or claimed. This records source design, not completed rooms, registered NPCs, purchases, research mechanics or quests.

Existing overworld **reference66**, coordinate **(-1,2)**. Preserve the location identity and surrounding routes.

## Orientation and entrance

**The drawing is rotated relative to a conventional north-up plan:** north is on the page’s right, south on the left, west at the top and east at the bottom. The sheet explicitly describes entry **from the north**. Do not convert its page-top into geographic north or place a new exterior doorway merely because a rectangle touches another room.

The ground floor has a wraparound A shop area surrounding B/C; B has the stairs. The downstairs furnished plan and connection diagram show D, six separate E cells and F. Preserve both the abstract graph and actual furnished boundaries when implementing.

| Area | Name | Recorded connections / level |
| --- | --- | --- |
| A | Store entrance / sales area | North exterior entrance; B; ground floor |
| B | Stairs / slime barrel | A, C; stairs down to D |
| C | Register | B; ground floor |
| D | Cell corridor | Stairs to B; six individual E doors; F; downstairs |
| E ×6 | Testing cells | Each connects separately to D; three east and three west |
| F | Research room | D; downstairs |

The graph does not show a separate A–C doorway. Checkout circulation therefore passes through B, the stairs/barrel area. Public access to that ground-floor circulation must remain separate from authorization to descend into D. The drawn doorway arrows do not grant basement/research access. Assign six distinct cell instance IDs when building, rather than merging all six E labels into one state.

## Hours, manager and advertisement

Hours: **Monday–Sunday, 24 hours “mostly.”** The qualifier is source text and means exceptions remain undefined; do not erase it, fabricate exact closures or assume uninterrupted staffed coverage.

Manager: **Alia**, a **former royal slime guard**. No surname, additional worker, full physical profile or personal routine is supplied. Record the former role without inventing current royal authority, hive affiliation or relationships.

Advertisement, lightly punctuated: “Come on in for all your daily needs! All the stuff you need, just be sure to properly dispose of your waste! – Alia.” This is public copy; the basement research is not automatically public knowledge.

## Ground-floor descriptions and merchandise

**A:** A convenience-style store for protein bars, energy drinks and waste-disposal aids usable on the fly. Older-model male and female domestic-maintenance bots are for sale, along with male/female intimacy aids and toys. The furnished plan labels fatigue, hunger and bladder stock areas and the toy displays. Preserve these as product categories/fixtures; do not invent individual prices, servings or effects.

**B:** A small intermediary room with stairs downstairs, a **50-gallon barrel of water filled daily**, and access to the register. The legend calls this the “slime barrel.” The refill fact does not establish a water supplier, delivery worker or exact refill time. It is not a player inventory grant or an automatically usable restoration service.

**C:** A simple register and slime checkout counter. **Arousal and anti-arousal pills are behind the counter.** Do not silently place them on unrestricted shelves or invent purchasing/administration effects.

Sheet’s sales headings:

- Fatigue / hunger / bladder restoratives.
- Male and female domestic bots.
- Male and female intimate toys.
- Specialty lubricants (sheet wording: “specialty lubrications”).

No quantities, prices, exact restoration amounts, stacking rules, duration, side effects or bot autonomy/ownership rules are authored here. The controller must resolve any actual transaction/use, not generated prose.

## Downstairs descriptions — restricted design information

**D:** Clutter-free corridor. Six ship-style watertight doors are securely locked, three east and three west. Control clamps, electroshock collars and shock batons rest beside each door. Recording these fixtures does not implement their use, give inventory ownership or make security bypass available. Lock credentials, access permissions, emergency exit and research-service rules are unprovided.

**E:** Six testing cells. Each has a single welded cast toilet and delivery slot. Battery-charged light bars provide light. Smooth hardened concrete has no holes or cracks described. Each cell has externally controlled temperature stability. The sheet does not supply dimensions, occupants, an active procedure, damage values or escape mechanics. Do not invent people already confined or treat the plan as an active player confinement event.

**F:** Research room with **six containment tanks for individual slime-kingdom hive-mind parasites**, a desk, computer and Alia’s notes on how the parasites work and co-opt slime physiology. Preserve this as restricted author knowledge. No named parasite, occupied tank state, hive link, transfer effect or research quest outcome is established.

## Existing confirmed cross-location dependency

Tits already has an owner-confirmed behavior of buying/using Daily Needs fatigue-recovery items after missed sleep or losing track of home. The new sheet confirms the restorative category. Connect her future purchase/use behavior to actual item stock, cost and effect through the shared inventory/needs systems. Do not substitute mere caffeine stimulation for real fatigue recovery, grant unpurchased items or claim her complete trip/service routine is implemented. See BURKES-SWEETS-DESIGN.md, “Approved hours and Daily Needs recovery dependency.”

## Four quest concepts — not active quests

| Risk as marked | Title transcription |
| --- | --- |
| Very Dangerous (older risk wording crossed out) | I don’t even have sides, but you found the bad one |
| Dangerous | No five finger discount, if you don’t have fingers |
| Risky | Can you man the register for me? |
| Safe | Hiring: Restock specialist |

Titles use readable punctuation. The exact corrected top risk is **Very Dangerous**. No quest is accepted, activated or assigned a reward by this transcription. Employment/pay, replacements, research consequences and any transformation/control rules remain separate design work.

## Completion checklist and next implementation boundaries

Use the shared location/navigation/object/ownership/access contracts and twelve-section NPC template. Alia’s voice, appearance, daily coverage, relationship gains/losses, event deltas, public recognition and memory cues remain missing; do not invent approved characterization. Stable Alia identity plus universal per-player/per-entity relationship storage must be used when registering her.

Required design gaps before a complete playable slice: staffing/“mostly” exceptions; public B access versus restricted stairs; door permissions and safe exit; exact product definitions/prices/effects/stock; waste/disposal behavior; water refill ownership; deliveries and shift/hiring service details. AI packets must include only the actual permitted room, visible actors and authorized product/service facts. Public store narration must not expose F’s notes, parasite facts or unseen locked cells. Hidden data requires separate controller-authorized discovery rather than dumping this document into a public dossier.

Keep quest and basement mechanics deferred until separately designed. The first ordinary retail slice can use shared baskets, checkout, owned items and actual need restoratives without enabling research/confinement systems. Source capture alone is not gameplay completion or public publication.
