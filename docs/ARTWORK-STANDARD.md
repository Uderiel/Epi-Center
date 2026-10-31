# Epi-Center artwork standard

Owner directive, October 31, 2026: all future game images must use the Central Hub image size and dimensions: **1100 × 733 pixels**, landscape. The embedded Central Hub JPEG is the canonical reference, verified from its decoded pixels.

Generate or recompose imagery for this landscape canvas, then export at exactly 1100 × 733. Fill the complete canvas with scene content; do not embed bars, transparent gutters or solid padding. Preserve enough room around ears, heads and feet to keep the full subject visible. Do not stretch portrait images to force this size.

Image displays and gender previews must use width:100%, height:auto, aspect-ratio:1100/733, max-height:none and object-fit:cover. Supply matching width/height HTML attributes to avoid layout shifts. Do not use fixed-height contain boxes that create pillarboxing. Central Hub/location artwork and form portraits share this landscape standard.

Use a new versioned asset path when replacing artwork so existing devices receive the new image. All current-form and Equip consumers must use the shared form profile resolver rather than independent paths. Before publication, verify stored dimensions and loaded browser dimensions, then visually check every image frame for bars/cropping. Historical builds and unrelated existing artwork are not retroactively changed by this rule.
