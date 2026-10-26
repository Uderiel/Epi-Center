# Weekend development handoff

Start on `development/v0.8.68`. Inspect working tree and remote before editing; preserve any user work. Production main remains the v0.8.67 baseline. Do not promote or merge without explicit approval.

Canonical gameplay source: repository-root `epi-center-v0.8.68-manual-acceptance-repairs.html`. The preview game is generated from that source by `preview-site/build-preview.ps1`; do not patch generated gameplay independently. Only save-key string literals differ. The launcher/import/export is preview infrastructure, not a gameplay refactor.

Review `movementAuthority868`, `accommodateMovement868`, final `moveRoom835` and `autonomyAdapter867.authority` wrappers, `Autonomy867.record`/`onEvent`, `preferenceReply868` and `pendingDialogue868`. Check effective override order rather than only original declarations. The earlier C20EA2 checkpoint over-enforced nighttime movement; the current AA8A8C candidate corrected that. Scoped accommodation uses the existing delegation duration and permits other routines. No new resistance dice thresholds were approved.

Read the [outstanding checklist](OUTSTANDING-BUGS.md) before treating prior automated results as acceptance. Particularly inspect apartment arrival, Go Home and exact "I don't want to read." responses. These are not fixed by this setup.

Prior verification sources/results are in `docs/releases/v0.8.68-manual-acceptance-verification.zip`; extract outside the checkout. Some diagnostic traces are historical; use final assertion reports and hash. Browser profiles must remain disposable.

Save model: production and preview are separate origins; the preview additionally namespaces all six primary/legacy storage keys. No automatic import/fallback from production. The launcher only accepts its explicit development export envelope and refuses occupied slots. A future full production transfer design is [separate and unimplemented](../../EPI-CENTER-SAFE-SAVE-TRANSFER-PROPOSAL.md).

Weekday patches should be small and independently verifiable. Update development changelog/status and attach reproduction/results. Keep main/index.html, historical builds and production Pages configuration unchanged. No automatic GitHub-to-preview deployment is assumed; rebuild and explicitly deploy the isolated preview after reviewed development updates.
