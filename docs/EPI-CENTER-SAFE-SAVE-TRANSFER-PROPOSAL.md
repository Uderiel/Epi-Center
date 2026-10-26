# Safe save transfer — design proposal only

Status: separate future work requiring approval. No export, import, synchronization or backend is implemented by the v0.8.68 repair.

## Current limitation

localStorage belongs to an origin (scheme, hostname and port). Local Live Server and HTTPS GitHub Pages therefore retain separate saves, despite using the same `epicenter_foundation_v060` key. Different local ports, localhost and 127.0.0.1 also differ. Versioned paths on the same origin share storage. File-URL storage behavior is browser dependent. Existing same-origin legacy loading is not cross-origin migration. There is no shared authoritative server.

Disposable browser testing verified independently written local and GitHub Pages saves remained separate after navigating back and reloading each. No player data was transferred or accessed.

## Proposed explicit workflow

1. User selects Export on the source origin. Download a complete JSON snapshot in a versioned envelope containing game build, export timestamp, informational source origin, transfer ID and checksum. A transfer ID identifies the export, not a new character. Keep the source unchanged.
2. User selects that file on the destination. Validate size, format, supported schema, finite values, dangerous property names and physical-item uniqueness before touching live storage. Never execute imported content. A checksum detects corruption, not authenticity.
3. Preview source and destination character names, builds, game time and snapshot fingerprints. Names are not identity proof. Do not merge inventory, add rewards or choose a winner by timestamp.
4. If destination is occupied, default to cancel. Offer a downloadable destination backup before any explicit replacement confirmation. Additional save slots would require a separately approved schema; do not invent live storage keys here.
5. Reconcile only an isolated copy through reviewed compatibility code, displaying meaningful changes. Preserve raw exports. Reject unsupported future formats rather than dropping unknown data or implicitly downgrading. Do not reset transformations or progress.
6. Re-read the destination fingerprint immediately before the confirmed write; abort if it changed. A single localStorage setItem is atomic, but backup plus replacement is not a transaction and localStorage provides no compare-and-swap. Web Locks protect only cooperating tabs; otherwise require other game tabs to close. Handle quota/write errors explicitly.
7. Rollback uses explicit selection of the preserved backup. Repeated imports must preserve unique item identities and not accumulate resources. Source-origin data remains unchanged throughout.

No background polling, automatic latest-save selection, clipboard inspection, postMessage transfer, remote fetch/upload or silent replacement is proposed. Cross-device conflict resolution and an authoritative backend are separate projects.

## Future verification and decisions

Test two independent origins, cancellation at every step, malformed/oversized/future files, quota errors, stale destination changes, multiple tabs, interrupted writes, rollback and repeated import. Verify identity/current appearance distinctions, transformation state, cursed footwear IDs, ownership, storage, quests, rewards, dialogue and pending autonomy survive. Verify offline export/import and Android file selection.

Owner decisions: whether to implement this workflow; envelope compatibility policy; explicit replacement/backup UX; whether multiple slots are wanted; treatment of unknown schema fields. None is resolved by the current repair.
