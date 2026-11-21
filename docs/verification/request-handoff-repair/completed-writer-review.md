# Completed-turn writer repair — pre-test review

Status: local implementation; real-model verification pending. No acceptance claim.

Failure: deployed v6 produced a fresh introduction instead of the actual cat-stay offer. The two-call source-fact probe cost $0.00318124; acceptance and entry were not run.

Reviewed contributors:

- Controller: dating.request produced the cat-stay offer; neither acceptance nor entry executed.
- Player input: exact date question survived both calls. No missing textbox message in this case.
- Roles/body/mastery: source records name the player as learner; offered, accepted and entered are distinct. Remote provider inspection confirmed those values.
- History: empty in the failed probe, excluding earlier generated dialogue as the cause in this case.
- Deployment: original configured endpoint, request-handoff-v6; remote /inspect confirmed actual formatting and Cydonia-24B-v4.3. No preview or credential changes.
- Assembly: the result arrived but was repeated through broad generic role guidance and several receipt copies. Fixing the legacy source facts alone did not repair prose.
- Sampling/output: temperature 0.8, no truncation. Settings remain unchanged to isolate this repair. A single trial cannot exclude sampling variance.
- Validation: existing checks catch role/schema leakage, not semantic completeness of offers. Passing them is not model acceptance.
- Harness: the first morning fixture attempted entering a closed shop and made zero model calls. Corrected fixture starts in Priya's scene; synthetic save, live time disabled.

Implemented option: a dedicated completed-turn dialogue writer for resolved NPC results. Preserve original input, full supplied dossier, projected scene, history, permissions, body state and every offer condition. Remove the competing decision task and exact duplicate result prose. No canned dialogue, prose quotas, changed gameplay gates or additional paid correction loop. Other interpretation and initiative paths remain separate.

Offline measurement: 15629 → 9890 provider-message characters for the exact failed packet. Tests preserve the player mastery subject, unaccepted offer, unchanged body, prerequisite sequence, separate collar, setting and personality. Reduced size is a measurement, not proof this fixes generation.

Next paid verification: only after local tests pass and the exact worker version is confirmed live. Start with the same two-call offer scenario. Require an actual offer, player mastery prerequisite, correct sequence, separate collar, no invented NPC powers or safety guarantees. Stop on failure. If it passes, test acceptance/entry with at most two additional calls. Report costs and failures; no comprehensive acceptance claim from these fixtures.
