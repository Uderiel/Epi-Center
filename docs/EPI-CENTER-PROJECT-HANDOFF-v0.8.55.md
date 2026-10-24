# Epi-Center — Project Handoff
Updated: v0.8.55 (2026-10-24)

## Project
Browser-based RPG, Android Chrome first, static GitHub Pages hosting. Repository: https://github.com/uderiel/Epi-Center . Current candidate: epi-center-v0.8.55-integrated-fixes.html . Player saves are local to the browser; never reset saves for a patch without explicit consent.

## Core architecture and design rules
- Epi-Center hub, sealed Spire, Hub Cylinders, Countess, Eve, Squirrel City/NU Corp/Collector, persistent forms and progression.
- Erin is a conscious form sharing the player's body. Erin-T will eventually be a separate NPC, not another form.
- **At 100% influence Erin takes autonomous initiative and follows her own routine like an NPC; the player must persuade her to change course.** High trust does not equal automatic consent, obedience, or mastery.
- Keep one contextual panel per selected object, with nested/back navigation. No duplicate cards between live activity and text input.
- One authoritative item record; clothes have clean/worn/dirty, non-clothing does not. Footwear is not machine laundry.
- At v0.8.55, autonomous routines have event prompts only, not complete NPC action resolution.

## Recent state and confirmed test feedback
- v0.8.52 eight equipment regions and DEV overrides passed.
- v0.8.53 hamper and washer individual retrieval added.
- v0.8.54 attempted consolidation of separate contextual cards.
- v0.8.55 fixes bathroom item selection handler, closet accessory equip/remove, hamper bulk controls, some item labels, redundant bathroom fixture nav, completed-stage text, time-advance resilience provenance; starts 100%-influence routine events.
- User reported that everything else in earlier checklist worked unless specifically listed as an issue.

## Open bugs and incomplete systems
- Full stage-to-appearance/photo synchronization across all 23 transformation stages (especially 20–23).
- Complete autonomous decision/action engine for Erin including bedtime, hygiene, commute, persuasion and resistance; current v0.8.55 routine events do not enforce sleep.
- Actual office location, commute, work attendance and coworkers are not implemented; no penalties until implemented.
- Dialogue/action parser responds inappropriately to physical actions; needs intent-aware handling and grounded outcomes.
- Menstrual hygiene selection and effects, leakage/staining with time and flow, grooming/scent/sweat/oral hygiene persistence; Sims-like needs UI after mechanics.
- Live activity notification clear/read controls, audit sources outside tick-based recovery, duplicate legacy laundry items migration, full equipment category behavior, shoe condition tags in all views.
- Check that bathroom selected product action works after reload; ensure no nested duplicate bathroom panels.

## Workflow
User uploads HTML to GitHub repo root and tests Android Chrome. Provide latest candidate play link in every response. Refresh handoff and changelog every five versions; next checkpoint v0.8.60. Do not claim an untested patch is verified. Do not directly commit without user approval.
