## v1.0.52 implementation checkpoint

Owner answers 1–40 below are the behavioral authority. A functional event-driven implementation now connects them to form state, world-clock advancement, legal movement, needs, relationships, cue/route learning and internal contests. See [implementation contract](KIBBLES-IMPLEMENTATION-CONTRACT.md) for exact defaults, boundaries, tests and remaining world-provider work. This is implemented and tested, not owner-accepted. Older “design only”, “remaining questions” and pending-31–40 labels below describe historical checkpoints and are superseded by the complete answer record and this note.

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


## Owner answers 31–40 (2026-11-02)

31. **Snack mastery:** An alternate reward for a player who creatively recognizes Kibbles' needs and goes to the effort of making it happy. Not a generic feed-once trust/mastery shortcut; retain previously authored route specifics pending source review.
32. **After mastery:** Kibbles remains a nonverbal canine sensory companion; may spontaneously note something the player missed or interpret a scent more effectively. It can also respond to requests for insight; mastered player has impulse control.
33. **Gender:** No intrinsic behavior/personality differences between player-selected male and female forms. Name and gender remain per-player, permanent once selected.
34. **Emotions:** Owner explicitly asks whether emotion is mechanically tracked or derived from scene/activity. **Owner-approved:** lightweight transient event-derived states (excited, bored, content, guarded, frightened/frustrated, attentive), no extra permanent emotion bars. Existing hunger/fatigue/bladder/influence/relationship remain authoritative.
35. **Memory:** Food/snack memories short; promises can be forgotten within an hour; location familiarity, time spent in places, and scent markings have longer persistence. Favorite activities: squirrel chasing and fetch.
36. **Learning:** Treat-reinforced new tricks take about **one in-game day**; route familiarity takes about **two in-game days**, if Kibbles leaves scent marks along route.
37. **Bladder:** Kibbles tolerates naps between interactions, but bladder urgency creates persistent drive to leave living space rather than soil it. Avoid inventing numerical thresholds.
38. **Novelty:** High-stimulation events (running squirrel etc.) usually distract; trusted leash/handler restraint or fatigue can suppress; newer stimuli frequently trigger interest. Personality archetype weighting still applies.
39. **Communication:** Barking, whining, ear/tail/body posture, scents, emotion and imagery. Communication does **not** become more verbal/clearer post-mastery; impulse control improves instead.
40. **Long-term:** Player usually will not remain unmastered long enough for substantial character development, but intentional prolonged experience can alter learned behaviors. Excitable energy and archetype-specific two core traits are permanent.

**Owner-approved design:** Short-lived contextual emotional flags rather than persistent bars. Do not turn Kibbles into a speaking human mind. Do not treat short-term promise forgetting as intentional deception. Next: map this specification into deterministic AI behavior priorities, trigger tables, owner-authorized numerical effects and persistence; verify snack mastery mechanics in repository before altering code. No implementation or publication is claimed.


## Emotional-state architecture — owner approved (2026-11-02)

Use **temporary, scene- and event-derived emotional states**, **not permanent emotion meters**. Representative states include excited, bored, content, guarded, frightened/frustrated, attentive. Derive these from activity, environmental stimuli, hunger, fatigue, bladder urgency, influence, and relationships; they shape behavior selection and sensory narration. Persist only meaningful enduring facts (relationships, familiarity/scent-marked routes, learned tricks, significant experiences), not a collection of extra emotional resource bars. The owner explicitly approved this approach. Exact weights, priorities and state transitions remain to be designed and tested.

