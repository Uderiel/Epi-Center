## Release disposition

Owner approved publication in v1.0.134, excluding Repository/staff changes. The review and pre-release status statements below are historical; deployment evidence is in docs/releases.

# Dialogue expression changes — owner review required before submission

Prepared locally in /workspace/epicenter-dialogue-fix. No commit, push or publication of this candidate. This supersedes the earlier proposed short/long repetition style gate. Prior UI-only v1.0.133 remains public.

Removed generic one/two-sentence instructions and numeric sentence/word quotas in conversation guidance. Persona, knowledge, current place, private-form communication and controller facts remain. Relevant in-place expressions/gestures are allowed in NPC dialogue.

Reply cleanup now checks nonempty text and removes model think scaffolding only; it no longer strips asterisk blocks, role-style headings, paragraph breaks, length or terminal punctuation. Model response text is not shortened to the last complete sentence. Upstream truncation is reported as returned, not hidden by trimming. The artificial600token output cap is replaced by verified provider maximum constrained by remaining context. Budget reservation uses that actual request ceiling; price safeguards and the existing monthly50USD ceiling remain. There is no claim of unbounded provider capacity.

Repetition alone no longer rejects NPC dialogue or triggers a paid repair. Genuine wrong-character/context contradictions retain the existing bounded correction path. Canine character cognition/identity remains authored; the forty-word validator is removed.

Unchanged technical boundaries: authenticated server-side provider access, supported model/pricing,32KB request transport ceiling,1,600-character player input and10,000-character structured-scene input limits, bounded prior history, request timeout, actual model context, per-player/actor/scene guards and controller authority. These are disclosed rather than described as absent. Separate review can change request/history limits; this patch targets response expression.

Verification: full isolated regression1996named cases passes; both AI-enabled browser suites pass using simulated transport, including long multi-paragraph text with gestures, no style-repair retry, retained warning on provider failure, and actual wrong-character repair. Real Cydonia generation is not claimed.

Review diff: work/dialogue-expression-review.patch contains this expression-layer change against the previous local repair candidate. Existing history/scene fixes remain in the full candidate. Repository and staff work remain excluded.
