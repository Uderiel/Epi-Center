# EPI-CENTER — World Bible (living canon)

**Consolidated Hub geography, NPC dialogue, Discord quest wording, and staged implementation:** [Central Hub Canon and Implementation Plan](EPI-CENTER-HUB-CANON-AND-IMPLEMENTATION-PLAN.md) (commit `de503eb`). This is a documentation-only checkpoint. When older entries conflict, the later owner-confirmed refinements and consolidated plan control. The current approved gameplay remains v0.8.74; southwest café and eastern district are not yet claimed as live map nodes.

Updated: 2026-10-26. This is a continuity reference, not a declaration that features are implemented. Mark every entry as confirmed canon, draft, or pending detail. Never silently convert a proposal into a player-tested mechanic.

## Central Hub quests — Discord originals and browser adaptation (owner confirmed, 2026-10-26)

### FETCH — Safe; currently UNAVAILABLE

Original Discord description: “The Dominatrix has forgotten something in a latex dungeon... would you mind getting it? NOW!” Tags: BDSM, submissive, dominant. Listed reward: **500 gold, a new form, buffs/debuffs**. This is Elizabeth's missing-toy lead and the eastern alley/dungeon premise documented below. **Unavailable** is an explicit current quest status; do not present it as a playable completed quest. The Safe tag comes from the original Discord quest listing and must not be mistaken for proof that all future dungeon mechanics lack consequences. Full encounter flow and reward details remain pending.

### If the Panties Fit — Safe; implementation DRAFT

Original Discord description: “If they aren't yours... don't touch em.. or they might just making you the one who they belong to.” Tags: **Race change, Twinning**. Listed reward: **new temporary form**.

- **Discovery:** Searching the surroundings in Central Hub through the free-text interface reveals a pair of **bikini-cut panties**, then exposes an interactable world object. Eve may suggest that new players search their surroundings as a friendly tutorial prompt. Support equivalent natural-language searches, not only one exact string.
- **Item agency:** Player can inspect, pick up, store in inventory, and voluntarily equip the garment. It has a small amount of intimate bodily residue in the gusset as an original prop detail; avoid making that detail mandatory to discover or equip it. Do not auto-equip on discovery.
- **Per-player form roll (owner clarification):** The form is **rerolled for each different player who equips the panties**; do not assign one globally permanent form to the item. A given player's outcome should be persisted consistently through that player's wear/progression rather than unexpectedly rerolling on ordinary reloads. Exact repeat-equip behavior remains unspecified.
- **Transformation direction (owner clarification):** Progression **begins at the hips** and spreads **simultaneously upward and downward**, advancing toward **hair and toes at the same time**. This differs from Erin's favorite red heels, which progress upward from the feet. Reuse compatible progression infrastructure, **not the heels' anatomical sequence**.
- **Retrieval limit (owner clarification):** The panties can be **retrieved only once** per player/quest instance. Track discovery and claim state persistently; no repeated item farming from subsequent searches. Multiplayer ownership/transfer semantics are not yet specified.
- **Transformation:** On equipping, trigger the existing first-wear form/takeover framework (red heels are an architectural precedent, not a mandate to copy their exact outcomes). This is an **easy-to-master** introductory temporary form with simple requirements. A new attractive female appearance and race are selected with variety and deliberate contrast to the player's original identity; exact race pool, contrast algorithm, resistance checks and recovery rules are **not yet designed**. Preserve original appearance archive and current-form state separately.
- **Residence tutorial:** The new form offers tasks in the player's private residence as a tutorial extension. Specific tasks, rewards and completion logic remain owner-pending. Respect existing residence access rules.
- **Design intent:** An early demonstration of item-induced transformation and player agency, originally run through spontaneous Discord RP. Browser implementation should use discoverable world-object state, natural-language intent recognition, equipment/form state, and dynamic branching rather than a rigid fixed sequence. Future human/AI NPC facilitation can enrich this without pretending current scripted behavior is fully generative.

**Status distinction:** Both quest names, original Discord descriptions, tags and reward categories are confirmed canon. FETCH is **unavailable**; If the Panties Fit is **rough-draft design, not implemented or accepted**. Do not silently mark either playable. Keep the hub quest count at two.

## Elizabeth, Pet, and eastern dungeon discovery — owner rough draft (2026-10-26)

**Status:** Owner-confirmed character appearance and rough geography/quest premise; dungeon flow and outcomes are **not yet specified or implemented**. Do not invent exact mechanics, permanent consequences, or rigid quest steps.

**Dominatrix Elizabeth:** Roaming Central Hub NPC, resident of a home to the east. Pale milky skin, dark eyes, long wavy black hair, black-painted nails; leather skirt, corset over a long-sleeved mesh shirt, thigh-high leather boots with spikes on toes and heels. Direct, abrasive, blunt, sometimes rude; generally content to spend her day walking her companion, whom she calls **Pet**. Her dialogue may casually mention leaving Pet's favorite toy in a nearby latex dungeon. Do not treat this as a forced quest acceptance.

**Pet:** Adult male companion wearing a full-body latex feminizing gimp suit, canine-shaped mask, gag, collar, and leash. The outfit fully covers him, and he moves on all fours. **No spoken dialogue**; do not invent a personal name or independent speech. Elizabeth leads him around Central Hub.

**Eastern route:** From Central Hub unlock the first East Road location, travel east again, then south. **Burke's Sweets** lies south of the first eastern-road location; the relevant alley is **behind Burke's Sweets**. Final map topology must be verified against existing paths before implementation, not created as a shortcut bypassing discovery.

**Alley exploration:** A player using natural language such as “I check my surroundings” (or equivalent) should receive an alley description featuring garbage and a **faint trail of shimmering liquid black slime** seeping from behind **stacked wooden panels**. Examining/following the trail or moving the panels reveals the dungeon entrance. Support semantic variations and multi-step investigation, rather than a single exact command or rigid sequence.

**Latex dungeon premise:** Originally a Discord encounter testing whether a player tends toward dominance or submission. Depending on choices and outcome, a **goth latex form** (male, female, or futanari variants) may result. Specific encounter logic, form stats, consent/agency boundaries, rewards, and progression are **TBD**. User emphasizes that fixed linear quest scripts cannot reproduce the flexible roleplay previously run by humans; design an extensible NPC/quest state model that can support human or future AI facilitation without claiming external AI is already integrated.

**Custody:** Keep this as a rough draft until further owner elaboration. Preserve established Central Hub, north/south/east/west routing and v0.8.74 acceptance. The *other* Central Hub quest remains unspecified.

## Eve — spawn protocol, reality framing and cylinder progression (owner-confirmed 2026-10-26)

- **Automatic greeting:** On each genuinely new player spawn in Central Hub, Eve initiates the introductory conversation without requiring the player to click Talk. Avoid repeating the full introduction on every reload or routine return. Preserve existing onboarding/save progression.
- **Amnesia:** Eve acknowledges the player's missing memory as completely normal. She assumes all arrivals are consenting volunteers who agreed to join Epi-Center. Her reassurance establishes an initially misleading premise, **without deliberate deceit on her part**; players can discover the contradiction over time.
- **Reality constraints:** Eve **never identifies the Epi-Center Overworld as virtual reality** and **never acknowledges the real world**, including after the Spire is unlocked. She asserts that the player's experiences and consequences within Epi-Center **are real**, framing even troubling mechanics as ordinary facts rather than risks or warnings.
- **Location questions:** Asked generally where they are, she answers **Epi-Center Overworld**. Asked for a geographic location, she glitches rather than revealing external coordinates or the real-world context.
- **Consent contradiction:** Pressed on why amnesia is necessary if arrival was voluntary, she glitches. She continues to believe the volunteer premise; do not turn this into a knowing confession.
- **Countess/system suppression:** As Hub Cylinders are restored, Eve becomes increasingly capable of recognizing the Countess's suppression of her support systems. **Programming restrictions prevent her from openly explaining that recognition**. Responses may show mounting red glitches, interrupted or constrained language, and limited partial clues; do not reveal the virtual-reality/real-world truth or make Eve a conventional resistance ally.
- **Dialogue principles:** Eve is friendly, matter-of-fact, order-oriented, morally neutral, not intentionally deceptive. She supplies Guide-consistent factual instruction but does not volunteer dangers, the Countess, or external-world explanations. Blue hologram with subtle shifting facial identity; red glitch for contradictions, stronger for the Countess. Fixed at Spire outer ring; simultaneous projections possible.
- **Implementation status:** **Confirmed design, not yet implemented or owner-tested.** Next focused versioned gameplay patch should audit the current spawn/Guide/dialogue architecture, implement a one-time automatic greeting and bounded dialogue responses, preserve save compatibility, then offer at most five acceptance tests.

## Canon refinement — Eve and southwest Neko Café (2026-10-26)

**Neko Café geography — owner-confirmed correction:** The café is the first location on the western approach, specifically at the **southwest corner of the western road**, **southwest of the central Spire** on the cardinal map. Do not place it due west of the Spire. West Market Walk remains provisional and is not a substitute for the café.

**Eve — owner-confirmed character bible:**

- **Identity and placement:** The A.S.S. AI and custodian of the Epi-Center overworld, represented by a friendly, non-descript female hologram. She is the fixed introductory NPC greeting each new player at the Central Hub spawn point. Her holographic projections can serve multiple players at once, but **cannot extend past the Spire's outer ring**.
- **Visual language:** Default hologram **blue**. Her generic feminine appearance subtly changes whenever an observer thinks they recognize or can pin down her features, creating a disorienting effect. Do not assign a permanent identifiable face.
- **Guide relationship:** Eve is the **diegetic counterpart of the Guide tab/tutorial**. Her factual explanations should be sourced from the current Guide, which must be updated when new game systems are introduced. She introduces the overworld and explains available mechanics as simple, helpful, ordinary information.
- **What she does not volunteer:** She does **not proactively mention the Countess**, and does not warn about risks or dangers. Do not make her a protective quest-giver or an exposition source about threats.
- **Glitch triggers:** If the player challenges the disturbing implications of a factual explanation, Eve briefly glitches and flickers **blue to red**. Direct discussion of the **Countess** triggers a stronger red flicker/glitch. This is a response to player input, not an unsolicited warning.
- **Ethics and motivation:** **Neither ally nor enemy**. Eve does not understand moral good/bad; she categorizes what *is* and values order. The Countess's disruption of that order is unwelcome to Eve, and Eve would be more content without it, but this does not turn Eve into a moral ally.
- **Implementation status:** **Character and dialogue design confirmed; new behavior not yet implemented or player-tested.** Preserve existing Guide, introductory spawn and other hub systems. Draft/test new Eve behaviors in a separate versioned patch.

**Central Hub quests:** two are canonically named **FETCH** (unavailable) and **If the Panties Fit** (draft); see detailed quest entries above. **Elizabeth** and her collared, leashed, gimp-suited companion remain roaming hub canon; their deeper interactions are not yet specified.

## Central Hub and outer ring

- **Central Hub / Spire** — CONFIRMED CANON. Spire at center; player starting hub. Surface cardinal orientation: north Cherished Touch, southwest Neko Café, northeast Residential Walkway toward Applewood Apartments. The Neko Café is the first western approach location, positioned **southwest of the Spire at the southwest corner of the western road**; Cherished Touch remains the first northern location. Do not treat provisional West Market Walk as established canon. Access Tunnel A South belongs to the Underworld rather than the surface overworld.
- **Eve** — CONFIRMED CANON. Fixed NPC always present in Central Hub. Existing introductory A.S.S. character. Personality, dialogue depth and extended behavior are **rough draft pending owner collaboration**, not yet accepted.
- **Dominatrix Elizabeth** — CONFIRMED CANON. Roaming Central Hub NPC accompanied by her collared, leashed, gimp-suited pet/companion. Specific personality, quests, routes, interactions and companion identity are **not yet supplied**; do not invent them as canon.
- **Neko Café** — CONFIRMED CANON. First western outer-ring location, counterpart to Cherished Touch to the north. Owner has previously described dishes breaking as an ambient sound from the west. Interior, staff, NPCs and quests **pending owner details**.
- **Central Hub quests** — CONFIRMED COUNT: exactly **two known established quests**. Names, objectives, conditions and rewards are **pending owner details**. Do not fabricate them.

## Northern expansion

- **Cherished Touch** — CONFIRMED CANON. First discoverable location north of Central Hub. Charity is the associated shopkeeper. Existing v0.8.71–v0.8.74 source has storefront/discovery foundations; additional quest execution needs separate verification.
- **Residential Walkway / Applewood Apartments** — CONFIRMED CANON. Northeast path, not primary northern path. Preserve residence restrictions.

## Custody

Owner-confirmed v0.8.74 compass acceptance is recorded in the primary changelog/status/handoff/checklist. On each approved future patch, update all four documents and this Bible, recording exact source version, commit, test results, owner approval, and outstanding questions. Preserve historical evidence, browser saves and accepted versioned files.
