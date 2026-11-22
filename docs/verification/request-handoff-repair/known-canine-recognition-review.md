# Known canine recognition handoff

Three directional sniff requests now reach the model, but the last real reply asked the known visitor's name. The durable form record remained Morgan; the physical observation packet included that name, while the main identityRecognition contract remained empty. This is a game-side handoff gap, not a lost backend transport field.

Promote actual identity-linked canine memory into the existing recognized-identity contract, with a clear explanation and knownName. No extra private knowledge is granted. Unknown visitors do not receive recognition. UI validation corrects a stranger-identity question when the name is verified; an explicitly distinct form nickname question remains allowed. Actual UI tests demonstrate correction before feed/history acceptance. New phase still uses v10; no worker publication.

Consolidated all existing request IDs instead of opaque small batch limits:102 submitted calls,0.15749516 known spend,0.09136 uncertain upper reservation retained. Original total ceiling0.50 unchanged. Next test two previously failed utterances with a maximum of one correction each; call ceiling106. Source/controller/client checks pass. Day fixture isolates durable identity/routing, not full day simulation or continuous-play acceptance.
