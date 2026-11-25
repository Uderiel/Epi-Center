# Form Repository arcade — approved rules and local implementation

Owner approved the five-stage scoring system, corrected Lee’s record to900after exact fairness review, approved additive voucher stacking, and then restricted scoreboard entry to exactly three letters. This record supersedes the earlier1000/1050record, full-name field and nonstacking voucher proposals. The historical draft is retained at work/repository-arcade/proposal-before-final-approval.md. Nothing is published.

## Free lobby cabinets

- Rift Duel — fighting-game homage; skill=floor((3×Reflexes+2×Intuition)/5).
- Neon Front — Contra-style run-and-gun; skill=floor((Reflexes+Intuition)/2).
- Vector Circuit — racing; skill=floor((2×Reflexes+3×Intuition)/5).

All cabinets are free. A complete game takes five game minutes in five one-minute stages. At each stage, selected d20+skill must reach15; natural1fails and natural20succeeds. Clear at least three of five stages to win. Score each stage as10×(selected die+skill), summed over all five stages. Match victory and record-breaking are separate measures; failed stages can contribute points. Arcade opponents are fictional game characters, not world combatants.

Lee’s seed record is900on each cabinet, displayed under the tag LEE. Only a strictly greater score beats it. With equal Reflexes/Intuition:4/4beats900in8.38percent of completed plays;5/5in16.18percent (mean6.18plays),6/6in27.30percent,10/10in81.86percent. These are not guarantees after a fixed attempt count. Five/five match victory remains59.31percent. Exact arithmetic:work/repository-arcade/record-fairness.json. Lee’s actual6/6profile is unchanged; his arcade enthusiasm is an approved personal interest, not extra attributes.

## Shared lifecycle and actual body

The adapter uses the established shared-activity engine and normal world clock. Five selected dice are saved at start; actual current-body attributes and authorized equipment bonuses determine each stage at its elapsed minute. Replay of a clock interval cannot create progress twice. Reload retains dice, stage results and receipts. Real room effects, including the nonstacking succubus aura, continue.

Playing requires the actual lobby, a body that can operate the controls, wakefulness and no combat. Leaving, changing body/player, sleep, combat or voluntary stopping interrupts the game and yields no unfinished score/prize. Another active shared activity blocks starting; no parallel cooking/watching/arcade action is created. Cabinet games never consume actual ammunition, Health, Stamina, Resolve, inventory or gold. They do not change storage access or initiate real combat.

## Three-letter scoreboard tags

After an actual record-breaking completion, the player can enter exactly three alphabetic characters, normalized to uppercase; longer names, digits, spaces within the tag and punctuation fail the same controller validation. The UI limits the field to three characters. Input can be typed, for example “I set my Rift Duel arcade initials to ACE,” or entered using that cabinet’s field/button. An unnamed score displays---until the player supplies initials; the private save/display name is never copied automatically. One best entry per player per cabinet is retained in the local saved world, with Lee’s seed record visible. No online/global leaderboard is implied. An arcade tag does not automatically establish disguised identity recognition.

The initials input is a non-form field/button. It neither nests another form inside the main composer nor imposes required-field validation on ordinary conversation. All typed and button actions use the same controller. Rejected wishes, hypotheticals and private thoughts do not start play or submit initials.

## Earned one-item vouchers

First record-breaking completion per player per cabinet grants one saved single-use five-percent voucher: at most three. Subsequent plays may improve the leaderboard but cannot farm more vouchers. Duplicate completion, reloading or reusing an event does not award twice. Each voucher is held by the actual player account and cannot be used by another player or transferred merely by changing body.

One voucher adds **five percentage points** to the valid purchase discount:0→5,10→15,15→20. This is additive percentage-point stacking, not a sequential five-percent reduction. Only one voucher applies to one positively priced purchased item, never a service, free storage action or entire basket. Manager selection and shared-negative suspension of manager courtesy remain intact; the arcade reward is separately earned. Whole-gold prices still round upward. If rounding would produce no additional saving, reject applying the voucher and retain it. Vouchers have no expiry.

Quote previews never consume a voucher. The future checkout hook requires a matching player, item, current quote and resolved purchase receipt, validates attendant/rate/eligibility again, and consumes once. Cancelled, stale or invalid transactions cannot consume it. Receipt replay is idempotent. **There is no actual item stock or player checkout yet.** The hook is tested with explicit synthetic receipts and does not create a sale, supply an item or charge gold. Real catalog/payment integration remains part of the Repository design build.

## Approved futuristic styling

The facility-wide visual direction is advanced, sleek and brightly illuminated, with glowing panels/light accents, precise synthetic architecture, molded-polymer/plexi-plastic furniture and very soft futuristic cushions. This supersedes the worn-leather sofa and nature-themed styling. The lobby table retains its concentric-pattern focal point as a digital display. All seven room descriptions and the overview use the new direction. Existing room connections, storage rarity routing and secured-access rules remain unchanged. Lee’s interests and appropriate dialogue include arcade games and his seeded record.

## Verification and limits

Core controller cases cover weighted traits/natural dice, real minutes/aura, interruptions, reload/dice persistence, actual body/equipment, reward deduplication, exact initials, player ownership, additive stacking, read-only preview, stale quotes and receipt idempotency. Actual390×844browser checks cover three cabinets, typed/button play, stage reloads, completion, uppercase initials, replay rewards, stop/movement, actual earned-voucher quote stacking, and saved tags/vouchers. The browser found and verified fixes for nested form/required-field interference with the main composer.

Current evidence and exact final suite totals:verification/repository-arcade-summary.json. No paid calls, owner saves, commit, push, worker deployment or publication were needed for this feature. Services and sale stock remain unavailable.

Final local verification:2,217named checks across174combat/hub suites,13arcade cases included,58backend checks,11phone-width checks and syntax checks of231modules/5inline scripts; all pass. No paid generation or publication.
