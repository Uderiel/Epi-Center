# Optional NPC response — pre-test review

Status: implemented locally; real Cydonia verification pending. This supersedes the failed writer-only hypothesis for Priya's optional offer.

Evidence: v7 delivered the actual offer facts but Cydonia proposed coffee instead. Two calls cost $0.00238794. The earlier source-fact probe cost $0.00318124. No further paid call has run during the following investigation.

Root integration defect: dating.request called requestDate, which immediately created a cat offer. Cydonia was then asked to narrate an NPC decision it had never selected. This violated the owner's instruction that an NPC's actual proposal establishes its menu availability. Reducing duplicated instructions did not fix that mismatch.

Implemented repair:

1. Keep semantic player-request interpretation separate from the NPC's social response.
2. Prepare the real allowed responses without creating a cat offer, acquiring a form or changing body.
3. The existing second model call returns a closed JSON choice plus its matching dialogue: conversation or the existing cat.offer. No additional decision call is added.
4. Validate the choice, dialogue shape, actual current turn/body/presence and saved contract. Commit the selected offer only after a usable reply arrives. Conversation creates no acceptance controls. Malformed/stale responses create no offer.
5. Text date requests, explicit cat requests and menu requests use the same prepare/resolve boundary. Menu requests retain their origin and do not invent an exact player quotation. Authored AI-off behavior remains available.
6. Preserve existing player mastery, ownership, form-entry and collar rules. No consent, transformation or date is granted by selecting an offer.

Contributor review:

- Source/controller: premature offer removed from the AI request path; readiness remains controller-checked.
- Participants: host is Priya; possible cat participant and mastery learner are explicitly the player. Preparation does not describe anyone as already accepted or transformed.
- Request/history: original words or actual menu origin remain; independent synthetic scenes exclude poisoned old dialogue.
- Competing instructions: response-choice mode bypasses completed-result narration. The inherited acknowledge-an-already-completed-action repair block is removed for this undecided step. Choice data occurs once in provider assembly.
- Model settings: original Cydonia model, temperature and budget stay unchanged. JSON mode is enabled only for the existing internal decision/response steps. Other character prose remains unrestricted by a sentence quota.
- Validation: rejects unsupported choices, extra keys, empty dialogue, late turns and changed scenes. This is structural validation; semantic agreement between prose and choice still requires real-model review.
- Clock: the existing dating-conversation cost applies once after the NPC response; no time is charged twice. Normal departure initiatives may follow, and are checked separately rather than mistaken for the original response.
- Tests: seven focused source cases, six request/menu browser checks and the broader automated suite pass locally. Related feline identity/entry/privacy browser checks also pass with simulated replies. These are not real-model acceptance.

Next paid test: confirm the exact deployed worker and inspect the complete reviewed request without generation first. Freeze the client candidate. Repeat the previously failing date question in a fresh synthetic scene; allow at most three model calls (intent, response, one normal initiative). Verify the declared NPC choice matches the actual dialogue and actual availability of acceptance controls. If a cat offer is chosen, require the player mastery prerequisite and separate collar choice, with no invented host mastery or safety guarantee. If conversation is chosen, no cat offer/menu may exist. Stop and review before any acceptance/entry or further paid run. Report cost and untested paths explicitly. A single passing fixture is not comprehensive acceptance.
