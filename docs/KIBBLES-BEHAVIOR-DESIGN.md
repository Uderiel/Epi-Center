# Kibbles canine consciousness — owner character specification (questions 1–20, 2026-11-02)

**Status:** Owner-provided behavioral design; design only, not gameplay implementation. “Bella” is an instance-specific name, **not the universal name**. Every player's Kibbles form may have a player-chosen name and gender; retain the established one-time choice after mastery. Do not hardcode female pronouns. The owner's wording below uses female pronouns for their instance.

## Nature and identity
- Genuine canine mind, no words; communicates via senses, impulses, emotion, mental imagery. Persistent unmastered presence; after mastery can voluntarily provide sensory insights without overriding player intent.
- Capable intelligent working dog, not human; recognizes the player is not a dog but does not understand human concepts of transformation/mastery/captivity. Feels whole rather than hollow after defeating/encasing player; regards player as overcome prey/opponent without malice.
- Archetype temperament weights: Physical = loyal/protective; Mental = curious/obedient; Arousal = playful/mischievous. One core personality, not three distinct entities.
- Primary desire: be a good dog, be fed/praised/free at lower influence, potentially accept a **kind** owner at higher influence; player helping interpret and satisfy canine impulses builds goodwill, while ignoring obvious needs despite human knowledge frustrates. Human-style commands or “bad dog” damage relationship; contextual “good girl/boy” after genuine helpful action is welcome.

## Territory, needs, social life
- Home/territory is original alley near Central Hub between Spire and outer loop; roaming dog packs usually avoid this inner area. Home crate holds favorite ball and worn blanket; unauthorized touching/removal prompts warning/aggression.
- Immediately after encasement food-seeking is strong. Can eat garbage, has canine digestive tract. Accepting food is not instant trust; may initially avoid taking from a hand. Hunger >=70% makes food a priority **if no food is stored in crate**.
- With other dogs: cautious until reading scent markers/personality/gender; with strangers: sniff/investigate, reject rushed collaring/ownership, respect autonomy earns trust; familiar humans: may help/follow but wary of rooms with doors that close; friendly/playful/protective toward children; guarded/defensive toward authority.
- Enjoys petting but limited brushing; praise for completed actions; cuddling/belly rubs/close contact only with deep familiarity and trust (cuddling additionally if collared in owner's example); wary of rushed ownership. Seeks people of the same gender as its selected instance.
- Likes fetch, chase, tug, swimming, digging, scent-tracking, exploration; chasing squirrel wandering hub periphery especially enticing.
- Knows sit, stay, roll over, beg, speak, shake; dominant persona (e.g. Elizabeth) may command a few; treat improves compliance; praise follows performed behavior; familiar trust increases willingness for vulnerable commands such as roll over.
- Fears loud noises, abrupt movements, weapons, bright flashing lights; severe distrust of confinement by unfamiliar people; medical procedures provoke aggressive fear. On encountering roaming dog pack, fights/resists; if leashed, warns handler before encounter.

## Daily schedule and priorities
- Seek food at sunrise, midday, sunset; explore park, chase squirrel when paths cross; light naps near hub periphery if unengaged; deep sleep in crate.
- Easily distracted if roaming within outer loop; attractive food, engagement or concern about territorial security can redirect chase/play. Another dog's scent in home alley interrupts sleep; protecting a trusted human outranks treat.
- Significant environmental triggers: unfamiliar territorial scent, distress, threats. Exceptional high-influence triggers: intrusion by crate, attempted capture, storm; additional events may include another canine or strong fresh food smells where justified.
- A player challenging a high-influence routine must contest or offer a genuinely more appealing canine alternative; don't treat the routine as rigid human scheduling.
- Unattended behaviors derive from routine, context, and archetype weights, not unlimited idle rolls.

## Relationship
- Gains trust from respecting boundaries, consistent care, interpreting desires, helping satisfy wants with player's knowledge.
- Loses trust from “bad dog”, careless interactions with other dogs, harsh/demanding treatment, and especially broken promises (e.g. promising food then tricking it into seeking help from a friend).
- Trust and influence are distinct. Accepting a scrap does not imply accepting collar, owner, command, or captivity. Positive reinforcement must be event-specific, not text-spammable.

## Universal rules to preserve
- Influence control bands, autonomous event cadence and conditional exceptional third attempt, 30-in-game-minute internal action eligibility, original Willpower vs form Reasoning, 3 Resolve / 0 Resolve -2 / +6 recovery, successful resistance -10 influence/+10 progress, failure +5 influence, completed forced activity +5 influence, and rarity-specific mastery/escape rules remain in COMBAT-FOUNDATIONS-GUIDE.md.
- Kibbles has no zipper/seam; mastered Kibbles release is by will, with no free healing. Existing snack route is an independently authored mastery route. No automatic body changes reversal or assumed gender before player choice.
- Do not conflate dog instincts with human-level verbal reasoning, or penalize legitimate resistance as abuse.

## Remaining owner questions (21–40)
Forgiveness, relationship/influence effects, cooperative mastery route, severe consequences, transformation onset, staged influence personality, subjective encasement experience, collar/leash/kennel meaning, low-pressure windows, legal escape/release, existing snack route, post-mastery agency, male/female identity distinctions, emotional variables, memory, habit learning, contextual reaction, weighted variation, sensory communication and long-term growth.

## Implementation checkpoint
Define per-instance name/gender/archetype and pronoun handling; motive/needs priorities; actual event and schedule triggers; form-owned state vs player-owned state; persistent trust/memory; behavior weights; autonomous control eligibility; authored world events and no-farm IDs; narrative sensory output; tests and Player Guide/Eve language. This file is a design record only.

## Owner answers 21–30 (2026-11-02)

21. **Forgiveness:** Easy to earn, particularly for encased player. Other characters can soothe with treats or gentle words except serious violations such as rushed collaring/kenneling.
22. **Voluntary shared control:** Kibbles can yield some control even at high influence but may become distracted and forget permission mid-activity. It will not willingly pass the **outer loop road** boundary. Preserve player challenge/contest rules.
23. **Cooperative release, not easy mastery:** No generic trust-based mastery for Kibbles. Bored Kibbles may consider releasing encased player if they promise appealing play, belly rubs or similar attention. Very strong relationship **plus actual follow-through** might warrant further special consideration, but do not invent a mastery threshold or automatic mastery. Voluntary release is distinct from base mastery.
24. **Relationship declines:** Repeated complaining, calling it a bad dog, denying appealing snacks/treats, or repeatedly resisting to pursue boring actions frustrate Kibbles. No unapproved numeric penalties.
25. **Onset:** Distinct canine mental presence starts **once player's head is fully encased**, regardless of total transformation percent.
26. **Influence-driven sensory prompts:** Higher influence intensifies attention to new/appealing scents, rapid movement, loud sounds/ear flicks, toys, offered ball throws, salivation at treats, and words linked to pleasant outcomes (walk/play/treat). Lower influence reduces intrusive prompts/automatic responses, not canine existence.
27. **Embodied perspective:** High kinetic energy, taut action-ready muscles, rapidly shifting emotion, impatience/boredom in inactivity; mental imagery focuses on movement, ball, attention. Activity is exhilarating; prolonged isolation dull and interminable, reflecting dependence on others for engagement.
28. **Collar/leash/kennel and handler:** With **trusted other player**, collar represents consistency/partnership; leash represents walk and loyalty to holder; kennel frustrates freedom, proximity and ability to protect handler. These shift focus to handler and **make internal resistance harder** without automatically reducing form-player relationship. Do not invent numeric modifiers yet. Untrusted forced collar/kennel remains a boundary violation.
29. **Reduced pressure:** Bored after no interaction, or absorbed in pleasant mindless eating/chewing bone; strongest opportunities when not collared, leashed or kenneled. Distinguish sensory desire from pressure and resistance opportunities.
30. **Physical escape:** Successful eligible 1d50 escape check results in Kibbles' throat/mouth distending to **hack/regurgitate the player out**. No zipper/seam, no ordinary peeling; escaping is not mastery. Eligibility, anatomy and release effects require authored implementation.

**Still pending:** questions 31–40; exact resistance modifiers from handler attention; outer-loop boundary exception policy; voluntary release requirements; actual game implementation and tests.

---

