# Kibbles combat and AI — owner decisions

Status: approved design decisions, not yet implemented in the v1.0.40 fixture. Continue defining this checklist step in batches of up to ten questions, without re-asking rules already in the guide. The initial-contact priorities and separation of moves were already documented; the owner reiterated them rather than introducing a new mechanic.

## Confirmed

- Ultimate goal: encase the player. Health defeat and direct encasement are both acceptable approaches; use attack variety rather than defaulting repeatedly to Skin Wrap.
- Bite: Main action, 8 Stamina, 12 Health damage on a successful hit; uses 1d20 + Fitness against applicable physical defense. Health damage only: no restraint, attachment or transformation progress.
- Grapple: establishes contact/restraint, not transformation. Skin Wrap is a separate move. Early contact priorities are head/neck and hands; existing source also allows multiple legally earned contact fronts and behavior-sensitive switches. Do not invent a new random-only targeting policy.
- Any head encasement above 0% occupies Kibbles' head and disables Bite immediately, not only at full coverage. An unavailable Bite must never be selected as fallback.
- While no attachment/restraint has been established, approved basic mix is Bite/Grapple 50/50, subject to the newly requested pre-wrap Pouncing Bite opening phase and resource eligibility.
- While restrained or still tethered by any encased body portion, eligible Bite/Skin Wrap mix is 50/50 when the head is not occupied. Existing body attachment permits connected-region Skin Wrap even after restraint is escaped; re-Grapple is not required merely because restraint ended.
- With head coverage and an existing tether, use Skin Wrap when affordable; recover when no legal affordable attack is available. If there is no remaining attachment or restraint, establish legal contact again before wrapping.
- Escape Physical Restraint and active resistance to physical transformation/peeling attachment are separate. Breaking Grapple does not automatically remove encasement. A peeling action requires actual usable anatomy; no hands/zipper shortcut through a fully sealed form.
- If Kibbles is restrained, prioritize Wriggle Free as a Minor. On the first failed attempt, use the Main to recover Stamina. After the second successive failed attempt, attempt legal Bite with the Main that same turn. After a fallback Bite, make a hidden decision roll selecting one or two escape attempts for the next cycle; do not reset to a fixed two every time. If head coverage makes Bite unavailable, prioritize Skin Wrap over Wriggle Free when attachment allows wrapping. Exact optional-Minor scheduling in that special case remains to be finalized without compromising the chosen Main.
- Maintain a 32 Stamina lower floor; enter recovery before ordinary attack spending would break that floor and recover until at least 60 Stamina, using legal +12 STA recovery actions. Reserve the chosen Main cost before optional Minor spending. If two successful Skin Wraps would finish encasement, Kibbles may ignore the 32-point floor for that capture opportunity, while still needing the actual action cost. Determine proximity using current legal anatomical advancement, not a fabricated free wrap or guaranteed success.
- Analyze is once per encounter. Do not re-enable it merely because a player changes form or reveals a move. Natural canine senses remain passive.
- Pouncing Bite: 12 Stamina, 20 Health damage, no attachment/transformation effect. Hidden random decision selects two or three opening attempts (hit or miss) before entering the Grapple/Skin Wrap strategy. A player Grapple attempt automatically reduces that opening limit to two; an attempt counts even if it fails. Pounce is unavailable during the attachment/wrap sequence. Once every attachment is removed and Kibbles is physically free to move, Pouncing Bite becomes available again. Do not allow a pounce merely because restraint ended while body attachment remains.

## Already-approved baseline retained

Guide testing baselines: Grapple 10 STA, Skin Wrap 12 STA in the current fixture, Wriggle Free Minor 8 STA, Analyze Minor 4 RES, Resist Mental Minor 6 RES, Physical recovery Main +12 STA with Reaction forfeited and unused Minor retained. Preserve source labels distinguishing accepted baseline costs from unapproved damage/DC/defense formulas. The owner has approved the applicable physical-defense category; a universal new passive-defense formula is not implied.

## Remaining detail for this step

Main attack values, opening variety, detachment re-eligibility, escape fallback timing, randomized retry cycles and Stamina floor/recovery target are approved above. Hidden AI decision rolls are separate from attack/save rolls displayed in the live feed. Exact random seed/state must persist across saves to prevent reload rerolls.

Next define enemy Reaction use: Quick Sidestep/Counterbite eligibility and effects, reaction selection, and evasion while physically tethered. The guide previously proposed 8 STA Sidestep / 10 STA Counterbite as form moves; do not silently claim the enemy already uses them or treat unapproved reaction damage/defense bonuses as settled.

Do not reopen mastery, will-based unequip, no zipper/seam, base-profile preservation or approved head/hands targeting while resolving this AI step. Kibbles routines, habits/preferences and alternate internal mastery paths are separate later checklist work.

Current playable release: https://uderiel.github.io/Epi-Center/rebuild/title-screen/?v=1.0.40
