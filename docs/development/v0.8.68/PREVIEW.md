# Isolated development preview

Production: https://uderiel.github.io/Epi-Center/ — remains v0.8.67.

Deployed owner-private preview: https://epi-center-development-v0868.icysun15.chatgpt.site

Sites reported successful deployment, version 1, deployment `appgdep_6aded38266148191b4baceb29541a265`. This is a separate hosting project and origin, not a change to production GitHub Pages. Owner sign-in is required; public sharing was not enabled. The Sites source snapshot is `f35f7783c5df3af8ad8f26be5648a3d3ee410075` (a separate hosting repository, not the GitHub development commit).

The Sites plugin workflow was used for registration, source upload, packaging and owner-private deployment. Its native deployment status verifies publication. Anonymous HTTP access returned 401 Unauthorized, consistent with owner-private hosting; this is not a public preview link. Disposable Chrome checked the exact local dist artifact: 26/26 infrastructure assertions passed, including JavaScript compilation, canonical SHA, all six production-key sentinels, namespace writes, explicit import preview/confirmation, rejection of invalid/unknown/unsafe data, occupied-slot refusal, actual exported download, game boot, reload and both narrow viewports. See [results](PREVIEW-VERIFICATION.json); rerun with Node 22+ using `node preview-site/verify-preview.mjs` (requires Chrome, never a personal profile). Hosted authenticated gameplay and physical Android acceptance still require owner testing. Enabling public/shared access would require owner approval.

## Source and storage isolation

Run `powershell -NoProfile -File preview-site/build-preview.ps1` from the repository. It generates `preview-site/dist/game.html` by replacing only the six existing storage-key literals with an `epicenter_development_v0868_` prefix, and copies the launcher to dist/index.html. The canonical candidate is unchanged. The builder fails if the key inventory changes. Primary preview key is `epicenter_development_v0868_epicenter_foundation_v060`; all legacy fallbacks receive the same prefix.

Serve only `preview-site/dist` on a dedicated origin/port. Do not serve the canonical candidate as the development entry point: that file intentionally retains production-compatible keys. A different path on production Pages would not isolate storage; never change the existing Pages source to development.

The launcher does not start the game until selected, so an empty slot can be imported explicitly first. Export downloads only the development snapshot. Import requires the development v0.8.68 envelope, schema/safety checks, visible preview and a separate confirm click. It refuses any occupied development slot and is disabled while the game is active. It never reads production keys, clears storage, merges inventories, selects a latest save or replaces existing data. A real cross-origin production-save transfer tool is not implemented.

Do not run the game in another preview tab during import. localStorage has no cross-tab compare-and-swap; the empty-slot recheck is not a transaction. Export before moving devices. Private/incognito storage is temporary. Keep backups private: exported JSON contains character state and dialogue.

## Alternatives if independent deployment is unavailable

- Serve the dist directory using Live Server on a dedicated local port; only that computer has the loopback URL. Keep the namespace protection.
- Configure a separate Netlify/Cloudflare Pages project for this branch and `preview-site/dist`, or a separate GitHub repository with its own Pages host. These require separate account/project authorization; another repository on the same `uderiel.github.io` host is not an independent origin without an additional hostname.
- Branch links/raw GitHub links are source access, not a verified playable deployment. Do not describe third-party HTML proxy rendering as controlled hosting.
