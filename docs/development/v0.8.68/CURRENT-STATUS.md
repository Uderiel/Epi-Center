# Development status

Date: 2026-10-25. Branch: `development/v0.8.68`, based on published main `6c79b01acc65b41374fa0608bd3e923e01f14def`.

Production remains v0.8.67. The canonical v0.8.68 file is an unaccepted candidate, not a production release. Its prior verification recorded 52 contextual/origin checks, 81 acceptance assertions at each of two mobile viewports, and 616 overlapping assertions across 13 suites. These are automated tests, not physical-device or owner manual acceptance.

See [outstanding manual tests](OUTSTANDING-BUGS.md), [weekend handoff](WEEKEND-HANDOFF.md), [preview operation](PREVIEW.md), and [candidate verification](../../EPI-CENTER-v0.8.68-MANUAL-ACCEPTANCE-REPAIRS.md).

Weekday scope: small focused patches and documentation on development only. Weekend review: difficult bugs, authority ordering, regression evidence and release decisions. No schedule or unattended development automation has been installed.

Setup verification: 26/26 disposable Chrome infrastructure checks passed. The isolated owner-private Sites preview deployed successfully; see [preview operation](PREVIEW.md) for the literal URL, access requirements and verification boundary. The GitHub development branch is the weekday source of truth; deployment is explicit, not automatic. All four reported gameplay/manual issues remain open.

Immediately before development commit, remote main was still `6c79b01acc65b41374fa0608bd3e923e01f14def`, and the live production download matched the local v0.8.67/index SHA-256 `EFAD3BFB70ACFE629C4E53AF71129C8867D4B8D4807717D61ECDE6D910BE7B0B`. No Pages configuration API writes were performed. Three preexisting untracked v0.8.62 Phase 1 notes were left untouched and excluded from this setup commit.
