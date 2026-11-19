# Expanded overworld — owner map, November 2026

Approved for publication as v1.0.114. Coordinates use the Central Spire as (0,0), north negative Y. All 321 references are transcribed from the owner’s supplied map/list. #300 completes Sanitarium Way; #306 remains Cybernetics Periphery. Blank cells are unassigned, not implicitly water or walkable land.

Applewood #97 moves to (2,-7); Leaf and Laurel #321 occupies its previous square. Technology Center #98 and groceries/dry cleaner #99/#100 retain their coordinates. Doll House #94 and Cloistered Madame #95 move as drawn. NW alley references90/91 exchange, but their existing location IDs remain at their original physical squares. Existing apartment floors, rooms, property, NPCs, relationships and inventory retain their identities.

All current map squares have exterior routes using the existing eight-direction movement and alley boundaries. Old Concrete Route connects160–271 diagonally; Waterway Road connects143–262 diagonally. These are surviving prior-iteration road connections. Facility layouts will define entrances and interior permissions; adding an exterior node grants no private interior. New facility interiors, services and NPC populations are not invented by this map release.

The delivery service is not placed yet. Cherished Touch and Burke’s can receive dollied supplies. Groceries Aplenty has a loading dock due to its volume; its interior and actual delivery simulation remain future work. Water placement and further map expansion remain on the owner’s to-do list.

Map rendering covers34columns ×27rows, scrolls within the viewport, retains discovery/fog and reference-label settings, and routes to known destinations only. Old saves keep stable location IDs; invalid saved journeys stop under the existing route-validation guard and can be replanned. Daniel/Nadia departure timing uses actual route length to preserve intended morning arrivals after the relocation. NPC shortest paths reuse the static graph to avoid rescanning the expanded network every simulated minute.

| Reference | Location identity | X | Y |
| --- | --- | ---: | ---: |
| 1 | Central Hub NW | -1 | -1 |
| 2 | Central Hub N | 0 | -1 |
| 3 | Central Hub NE | 1 | -1 |
| 4 | Central Hub W | -1 | 0 |
| 5 | Central Hub Spire | 0 | 0 |
| 6 | Central Hub E | 1 | 0 |
| 7 | Central Hub SW | -1 | 1 |
| 8 | Central Hub S | 0 | 1 |
| 9 | Central Hub SE | 1 | 1 |
| 10 | N. Main Street (1) | 0 | -2 |
| 11 | N. Main Street (2) | 0 | -3 |
| 12 | N. Main Street (3) | 0 | -4 |
| 13 | N. Main Street (4) | 0 | -5 |
| 14 | E. Docks Street (1) | 2 | 0 |
| 15 | E. Docks Street (2) | 3 | 0 |
| 16 | E. Docks Street (3) | 4 | 0 |
| 17 | E. Docks Street (4) | 5 | 0 |
| 18 | S. Farm Road (1) | 0 | 2 |
| 19 | S. Farm Road (2) | 0 | 3 |
| 20 | S. Farm Road (3) | 0 | 4 |
| 21 | S. Farm Road (4) | 0 | 5 |
| 22 | Entertainment Row (1) | -2 | 0 |
| 23 | Entertainment Row (2) | -3 | 0 |
| 24 | Entertainment Row (3) | -4 | 0 |
| 25 | Entertainment Row (4) | -5 | 0 |
| 26 | Outerloop Road (1) | 1 | -5 |
| 27 | Outerloop Road (2) | 2 | -5 |
| 28 | Outerloop Road (3) | 3 | -5 |
| 29 | Outerloop Road (4) | 4 | -5 |
| 30 | Outerloop Road (5) | 5 | -5 |
| 31 | Outerloop Road (6) | 5 | -4 |
| 32 | Outerloop Road (7) | 5 | -3 |
| 33 | Outerloop Road (8) | 5 | -2 |
| 34 | Outerloop Road (9) | 5 | -1 |
| 35 | Outerloop Road (10) | 5 | 1 |
| 36 | Outerloop Road (11) | 5 | 2 |
| 37 | Outerloop Road (12) | 5 | 3 |
| 38 | Outerloop Road (13) | 5 | 4 |
| 39 | Outerloop Road (14) | 5 | 5 |
| 40 | Outerloop Road (15) | 4 | 5 |
| 41 | Outerloop Road (16) | 3 | 5 |
| 42 | Outerloop Road (17) | 2 | 5 |
| 43 | Outerloop Road (18) | 1 | 5 |
| 44 | Outerloop Road (19) | -1 | 5 |
| 45 | Outerloop Road (20) | -2 | 5 |
| 46 | Outerloop Road (21) | -3 | 5 |
| 47 | Outerloop Road (22) | -4 | 5 |
| 48 | Outerloop Road (23) | -5 | 5 |
| 49 | Outerloop Road (24) | -5 | 4 |
| 50 | Outerloop Road (25) | -5 | 3 |
| 51 | Outerloop Road (26) | -5 | 2 |
| 52 | Outerloop Road (27) | -5 | 1 |
| 53 | Outerloop Road (28) | -5 | -1 |
| 54 | Outerloop Road (29) | -5 | -2 |
| 55 | Outerloop Road (30) | -5 | -3 |
| 56 | Outerloop Road (31) | -5 | -4 |
| 57 | Outerloop Road (32) | -5 | -5 |
| 58 | Outerloop Road (33) | -4 | -5 |
| 59 | Outerloop Road (34) | -3 | -5 |
| 60 | Outerloop Road (35) | -2 | -5 |
| 61 | Outerloop Road (36) | -1 | -5 |
| 62 | Cherished Touch | 1 | -2 |
| 63 | Burke's Sweets | 2 | -1 |
| 64 | Form Repository | 2 | 1 |
| 65 | Pet Boutique | 1 | 2 |
| 66 | Daily Needs | -1 | 2 |
| 67 | Neko Cafe | -2 | 1 |
| 68 | Zen Shop and Spa | -2 | -1 |
| 69 | Going Out of Business | -1 | -2 |
| 70 | NE Alley (1) | 1 | -3 |
| 71 | NE Alley (2) | 2 | -3 |
| 72 | NE Alley (3) | 3 | -3 |
| 73 | NE Alley (4) | 2 | -2 |
| 74 | NE Alley (5) | 3 | -2 |
| 75 | NE Alley (6) | 3 | -1 |
| 76 | SE Alley (1) | 3 | 1 |
| 77 | SE Alley (2) | 2 | 2 |
| 78 | SE Alley (3) | 3 | 2 |
| 79 | SE Alley (4) | 1 | 3 |
| 80 | SE Alley (5) | 2 | 3 |
| 81 | SE Alley (6) | 3 | 3 |
| 82 | SW Alley (1) | -3 | 1 |
| 83 | SW Alley (2) | -3 | 2 |
| 84 | SW Alley (3) | -2 | 2 |
| 85 | SW Alley (4) | -3 | 3 |
| 86 | SW Alley (5) | -2 | 3 |
| 87 | SW Alley (6) | -1 | 3 |
| 88 | NW Alley (1) | -3 | -1 |
| 89 | NW Alley (2) | -3 | -2 |
| 90 | NW Alley (4) | -2 | -2 |
| 91 | NW Alley (3) | -3 | -3 |
| 92 | NW Alley (5) | -2 | -3 |
| 93 | NW Alley (6) | -1 | -3 |
| 94 | The Doll House | -4 | -3 |
| 95 | The Cloistered Madame | 4 | -3 |
| 96 | Nip Tuck Cosmetics | -4 | 3 |
| 97 | Applewood Apartments | 2 | -7 |
| 98 | Technology Center | 1 | -6 |
| 99 | Groceries Aplenty | 2 | -4 |
| 100 | Prim and Proper Dry Cleaners | 3 | -4 |
| 101 | Research Center | -1 | -6 |
| 102 | N. Main Street (5) | 0 | -6 |
| 103 | N. Main Street (6) | 0 | -7 |
| 104 | N. Main Street (7) | 0 | -8 |
| 105 | N. Main Street (8) | 0 | -9 |
| 106 | E. Docks Street (5) | 6 | 0 |
| 107 | E. Docks Street (6) | 7 | 0 |
| 108 | E. Docks Street (7) | 8 | 0 |
| 109 | E. Docks Street (8) | 9 | 0 |
| 110 | S. Farm Road (5) | 0 | 6 |
| 111 | S. Farm Road (6) | 0 | 7 |
| 112 | S. Farm Road (7) | 0 | 8 |
| 113 | S. Farm Road (8) | 0 | 9 |
| 114 | Entertainment Row (5) | -6 | 0 |
| 115 | Entertainment Row (6) | -7 | 0 |
| 116 | Entertainment Row (7) | -8 | 0 |
| 117 | Entertainment Row (8) | -9 | 0 |
| 118 | City Loop Road (1) | 1 | -9 |
| 119 | City Loop Road (2) | 2 | -9 |
| 120 | City Loop Road (3) | 3 | -9 |
| 121 | City Loop Road (4) | 4 | -9 |
| 122 | City Loop Road (5) | 5 | -9 |
| 123 | City Loop Road (6) | 6 | -9 |
| 124 | City Loop Road (7) | 7 | -9 |
| 125 | City Loop Road (8) | 8 | -9 |
| 126 | City Loop Road (9) | 9 | -9 |
| 127 | City Loop Road (10) | 9 | -8 |
| 128 | City Loop Road (11) | 9 | -7 |
| 129 | City Loop Road (12) | 9 | -6 |
| 130 | City Loop Road (13) | 9 | -5 |
| 131 | City Loop Road (14) | 9 | -4 |
| 132 | City Loop Road (15) | 9 | -3 |
| 133 | City Loop Road (16) | 9 | -2 |
| 134 | City Loop Road (17) | 9 | -1 |
| 135 | City Loop Road (18) | 9 | 1 |
| 136 | City Loop Road (19) | 9 | 2 |
| 137 | City Loop Road (20) | 9 | 3 |
| 138 | City Loop Road (21) | 9 | 4 |
| 139 | City Loop Road (22) | 9 | 5 |
| 140 | City Loop Road (23) | 9 | 6 |
| 141 | City Loop Road (24) | 9 | 7 |
| 142 | City Loop Road (25) | 9 | 8 |
| 143 | City Loop Road (26) | 9 | 9 |
| 144 | City Loop Road (27) | 8 | 9 |
| 145 | City Loop Road (28) | 7 | 9 |
| 146 | City Loop Road (29) | 6 | 9 |
| 147 | City Loop Road (30) | 5 | 9 |
| 148 | City Loop Road (31) | 4 | 9 |
| 149 | City Loop Road (32) | 3 | 9 |
| 150 | City Loop Road (33) | 2 | 9 |
| 151 | City Loop Road (34) | 1 | 9 |
| 152 | City Loop Road (35) | -1 | 9 |
| 153 | City Loop Road (36) | -2 | 9 |
| 154 | City Loop Road (37) | -3 | 9 |
| 155 | City Loop Road (38) | -4 | 9 |
| 156 | City Loop Road (39) | -5 | 9 |
| 157 | City Loop Road (40) | -6 | 9 |
| 158 | City Loop Road (41) | -7 | 9 |
| 159 | City Loop Road (42) | -8 | 9 |
| 160 | City Loop Road (43) | -9 | 9 |
| 161 | City Loop Road (44) | -9 | 8 |
| 162 | City Loop Road (45) | -9 | 7 |
| 163 | City Loop Road (46) | -9 | 6 |
| 164 | City Loop Road (47) | -9 | 5 |
| 165 | City Loop Road (48) | -9 | 4 |
| 166 | City Loop Road (49) | -9 | 3 |
| 167 | City Loop Road (50) | -9 | 2 |
| 168 | City Loop Road (51) | -9 | 1 |
| 169 | City Loop Road (52) | -9 | -1 |
| 170 | City Loop Road (53) | -9 | -2 |
| 171 | City Loop Road (54) | -9 | -3 |
| 172 | City Loop Road (55) | -9 | -4 |
| 173 | City Loop Road (56) | -9 | -5 |
| 174 | City Loop Road (57) | -9 | -6 |
| 175 | City Loop Road (58) | -9 | -7 |
| 176 | City Loop Road (59) | -9 | -8 |
| 177 | City Loop Road (60) | -9 | -9 |
| 178 | City Loop Road (61) | -8 | -9 |
| 179 | City Loop Road (62) | -7 | -9 |
| 180 | City Loop Road (63) | -6 | -9 |
| 181 | City Loop Road (64) | -5 | -9 |
| 182 | City Loop Road (65) | -4 | -9 |
| 183 | City Loop Road (66) | -3 | -9 |
| 184 | City Loop Road (67) | -2 | -9 |
| 185 | City Loop Road (68) | -1 | -9 |
| 186 | Kent Street (1) | 5 | -8 |
| 187 | Kent Street (2) | 5 | -7 |
| 188 | Kent Street (3) | 5 | -6 |
| 189 | Mini Street (1) | 6 | -5 |
| 190 | Mini Street (2) | 7 | -5 |
| 191 | Mini Street (3) | 8 | -5 |
| 192 | Lily Street (1) | 6 | 5 |
| 193 | Lily Street (2) | 7 | 5 |
| 194 | Lily Street (3) | 8 | 5 |
| 195 | Otter Street (1) | 5 | 6 |
| 196 | Otter Street (2) | 5 | 7 |
| 197 | Otter Street (3) | 5 | 8 |
| 198 | Haley Street (1) | -5 | 6 |
| 199 | Haley Street (2) | -5 | 7 |
| 200 | Haley Street (3) | -5 | 8 |
| 201 | Nariel Street (1) | -8 | 5 |
| 202 | Nariel Street (2) | -7 | 5 |
| 203 | Nariel Street (3) | -6 | 5 |
| 204 | Morgan Street (1) | -8 | -5 |
| 205 | Morgan Street (2) | -7 | -5 |
| 206 | Morgan Street (3) | -6 | -5 |
| 207 | Keith Street (1) | -5 | -8 |
| 208 | Keith Street (2) | -5 | -7 |
| 209 | Keith Street (3) | -5 | -6 |
| 210 | Cherrywood Apartments | -2 | -7 |
| 211 | Fire and Ice Nightclub | 8 | -1 |
| 212 | Heartbreak Hotel | 8 | 1 |
| 213 | Craft Ink and Piercings | 6 | 1 |
| 214 | Residential Walkway (1) | -2 | -6 |
| 215 | Residential Walkway (2) | -1 | -7 |
| 216 | Residential Walkway (3) | 1 | -7 |
| 217 | Residential Walkway (4) | 2 | -6 |
| 218 | Emergency Barn | 3 | -6 |
| 219 | Library | 4 | -6 |
| 220 | Deans Office / Admin | -7 | -7 |
| 221 | Sorority House | -8 | -8 |
| 222 | Fraternity House | -6 | -8 |
| 223 | Sports Facility | -8 | -6 |
| 224 | Sports Field | -6 | -6 |
| 225 | Psychology Building | -7 | -8 |
| 226 | Science / Biology Center | -8 | -7 |
| 227 | Technology / S.T.E.M. Labs | -6 | -7 |
| 228 | College Dorms | -7 | -6 |
| 229 | Silver Shackle Casino | -8 | -4 |
| 230 | Gilded Key Apartments | -8 | -3 |
| 231 | Bimbo 365 | -7 | 1 |
| 232 | Sin-Thetic Pleasures | -7 | 4 |
| 233 | Wet Lily Apartments | -6 | 3 |
| 234 | Docks (234) | 10 | -4 |
| 235 | Docks (235) | 10 | -3 |
| 236 | Docks (236) | 10 | -2 |
| 237 | Docks (237) | 10 | -1 |
| 238 | Ferris Wheel | 10 | 0 |
| 239 | Docks (239) | 10 | 1 |
| 240 | Docks (240) | 10 | 2 |
| 241 | Docks (241) | 10 | 3 |
| 242 | Docks (242) | 10 | 4 |
| 243 | Docks (243) | 11 | -1 |
| 244 | Docks (244) | 12 | -1 |
| 245 | Docks (245) | 13 | -1 |
| 246 | Dock Gazebo | 14 | -1 |
| 247 | Docks (247) | 11 | 1 |
| 248 | Docks (248) | 12 | 1 |
| 249 | Docks (249) | 13 | 1 |
| 250 | Popcorn Stand | 14 | 1 |
| 251 | Friendly Farms Dirt Road (1) | 0 | 10 |
| 252 | Friendly Farms Dirt Road (2) | 0 | 11 |
| 253 | Friendly Farms Dirt Road (3) | 0 | 12 |
| 254 | Friendly Farms East Road (1) | 1 | 12 |
| 255 | Friendly Farms East Road (2) | 2 | 12 |
| 256 | Friendly Farms East Road (3) | 3 | 12 |
| 257 | Friendly Farms East Road (4) | 4 | 12 |
| 258 | Friendly Farms West Road (1) | -4 | 12 |
| 259 | Friendly Farms West Road (2) | -3 | 12 |
| 260 | Friendly Farms West Road (3) | -2 | 12 |
| 261 | Friendly Farms West Road (4) | -1 | 12 |
| 262 | Waterway Road (1) | 10 | 10 |
| 263 | Waterway Road (2) | 11 | 10 |
| 264 | Waterway Road (3) | 12 | 10 |
| 265 | Waterway Road (4) | 13 | 10 |
| 266 | Waterway Road (5) | 14 | 10 |
| 267 | Waterway Road (6) | 14 | 11 |
| 268 | Waterway Road (7) | 14 | 12 |
| 269 | Waterway Road (8) | 14 | 13 |
| 270 | Waterway Road (9) | 14 | 14 |
| 271 | Old Concrete Route (1) | -10 | 10 |
| 272 | Old Concrete Route (2) | -11 | 10 |
| 273 | Old Concrete Route (3) | -12 | 10 |
| 274 | Old Concrete Route (4) | -13 | 10 |
| 275 | Old Concrete Route (5) | -14 | 10 |
| 276 | Old Concrete Route (6) | -14 | 11 |
| 277 | Old Concrete Route (7) | -14 | 12 |
| 278 | Old Concrete Route (8) | -14 | 13 |
| 279 | Old Concrete Route (9) | -14 | 14 |
| 280 | Sanitarium Way (1) | -5 | 10 |
| 281 | Sanitarium Way (2) | -5 | 11 |
| 282 | Sanitarium Way (3) | -5 | 12 |
| 283 | Sanitarium Way (4) | -5 | 13 |
| 284 | Sanitarium Way (5) | -5 | 14 |
| 285 | Sanitarium Way (6) | -5 | 15 |
| 286 | Sanitarium Way (7) | -4 | 15 |
| 287 | Sanitarium Way (8) | -3 | 15 |
| 288 | Sanitarium Way (9) | -2 | 15 |
| 289 | Sanitarium Way (10) | -1 | 15 |
| 290 | Sanitarium Way (11) | 0 | 15 |
| 291 | Sanitarium Way (12) | 1 | 15 |
| 292 | Sanitarium Way (13) | 2 | 15 |
| 293 | Sanitarium Way (14) | 3 | 15 |
| 294 | Sanitarium Way (15) | 4 | 15 |
| 295 | Sanitarium Way (16) | 5 | 15 |
| 296 | Sanitarium Way (17) | 5 | 14 |
| 297 | Sanitarium Way (18) | 5 | 13 |
| 298 | Sanitarium Way (19) | 5 | 12 |
| 299 | Sanitarium Way (20) | 5 | 11 |
| 300 | Sanitarium Way (21) | 5 | 10 |
| 301 | Splash Kingdom | 14 | 9 |
| 302 | Derelict Drive-in | 15 | 10 |
| 303 | Water Treatment | 15 | 14 |
| 304 | Water Pump House | 15 | 13 |
| 305 | Cybernetics Gate | -15 | 14 |
| 306 | Cybernetics Periphery (1) | -17 | 13 |
| 307 | Cybernetics Periphery (2) | -16 | 13 |
| 308 | Cybernetics Periphery (3) | -16 | 14 |
| 309 | Cybernetics Periphery (4) | -16 | 15 |
| 310 | Cybernetics Periphery (5) | -17 | 15 |
| 311 | Cybernetics Periphery (6) | -18 | 15 |
| 312 | Cybernetics Periphery (7) | -18 | 14 |
| 313 | Cybernetics Periphery (8) | -18 | 13 |
| 314 | Cybernetics Nexus | -17 | 14 |
| 315 | Sanitarium Admin | -2 | 16 |
| 316 | Sanitarium Wards | -1 | 16 |
| 317 | Max Lockdown | -2 | 17 |
| 318 | Sanitarium Yard | -1 | 17 |
| 319 | Memorium | 3 | 16 |
| 320 | Memorium (2) | 4 | 16 |
| 321 | Leaf and Laurel | 1 | -4 |
