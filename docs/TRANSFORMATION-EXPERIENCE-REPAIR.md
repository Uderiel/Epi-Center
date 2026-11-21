# Transformation experience repair — implemented locally, not published

## Verified faults in v1.0.134

- Disease milestones and onset used mechanics-only feed metadata. The enrichment guard therefore skipped them before selecting the transformation narrator.
- Ordinary narration received no ongoing symptom-course context. A world-event narrator could substitute scenery when the player asked about their illness.
- Body-awareness routing required an equipped form, so a transformed base body’s self-inspection/self-touch fell through to general world narration.
- Narration-specific one/two-sentence instructions survived the earlier NPC expression repair.
- Coalesced disease arousal rows retained the first tick’s timestamp while their values updated later, making later high arousal appear immediate.

## Implemented

Onset and reached milestones now use transformation narration with a stage-specific snapshot of reached changes and symptoms; catch-up snapshots exclude future-stage fields. Current illness context reaches private world/body narration, not NPC knowledge. The narrator focuses on the actual change or self-observation rather than unrelated scenery. Arbitrary narration sentence quotas are removed while outcomes and character knowledge remain authoritative.

The existing body-awareness controller now handles the base body as well as equipped forms. It recognizes the reported thigh/hip input, uses actual appearance and worn clothing, does not undress or grant resources, and rejects private thoughts, desires and negation as physical actions. Appearance → Inspect current body uses the same controller. Existing observation/touch costs remain one/two game minutes; questions cost zero.

Expanded milestone prose is saved with its recorded milestone and appears in the persistent history after feed eviction/reload. Mechanics remain in the result receipt. Existing completed stages are not rerolled or automatically regenerated on load.

Coalesced arousal updates use the latest tick’s actual timestamp and move to the current feed position. Milestone timestamps use the recorded milestone time.

## Owner-approved symptom movement rule

From symptom onset through the end of final settling: outdoor walking costs twelve game minutes per tile, and jogging is unavailable. Existing saved jogging selection safely falls back to walking while symptomatic. Controller validation, typed jog refusal, disabled menu option, visible pace labels, route estimates and actual text/menu travel use the same rule. Incubation is unaffected; completion or cure ends this illness gate. No new indoor delay, extra damage, forced vomiting, forced relocation or treatment rule is added. The existing completed-carrier missed-activity penalties remain separate.

## Evidence and limits

2,012 automated named cases pass, including eleven new focused cases. Ten browser checks pass with AI enabled and simulated transport on a synthetic slot: onset; four natural timed milestones; body-focused input; spoken illness concern; menu/typed movement limits; text/menu twelve-minute travel parity; menu self-inspection; corrected arousal timestamps; persistent prose through feed eviction/reload. Multiple assertions are grouped into these ten checks. No owner save or real paid model call was used. Cydonia writing quality is not established by simulated transport.

Code remains uncommitted/unpublished for review. Repository/staff work remains excluded. No frozen v1.0.134 Bible or release evidence is rewritten.
