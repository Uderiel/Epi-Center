/* One ordered appearance template; saved appearance remains the existing appearance text fields, including Tail. */
(function(r,f){const a=f(typeof module==='object'&&module.exports?require('./appearance-measurements'):r.EpiAppearanceMeasurements);if(typeof module==='object'&&module.exports)module.exports=a;else r.EpiAppearanceTemplate=a;})(globalThis,function(M){
'use strict';
const fields=[
 {
  "key": "age",
  "label": "Age (18–90)",
  "parts": [
   {
    "id": "value",
    "label": "Age",
    "kind": "age"
   }
  ]
 },
 {
  "key": "gender",
  "label": "Starting gender",
  "parts": [
   {
    "id": "value",
    "label": "Starting gender",
    "kind": "select",
    "choices": [
     "Male",
     "Female"
    ]
   }
  ]
 },
 {
  "key": "footSize",
  "label": "Feet",
  "parts": [
   {
    "id": "presence",
    "label": "Feet present",
    "kind": "select",
    "choices": [
     "Present",
     "Absent",
     "Not specified"
    ],
    "humanValue": "Present"
   },
   {
    "id": "count",
    "label": "Number of feet",
    "kind": "select",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "8",
     "Custom",
     "Not specified"
    ],
    "humanValue": "2"
   },
   {
    "id": "type",
    "label": "Foot type",
    "kind": "select",
    "choices": [
     "Humanlike feet",
     "Paws",
     "Hooves",
     "Taloned feet",
     "Mechanical feet",
     "Custom",
     "Not applicable"
    ],
    "humanValue": "Humanlike feet"
   },
   {
    "id": "sizeMode",
    "label": "Describe foot size using",
    "kind": "select",
    "choices": [
     "Shoe size",
     "Physical measurement",
     "Not specified"
    ]
   },
   {
    "id": "size",
    "label": "Shoe size",
    "kind": "number",
    "when": {
     "id": "sizeMode",
     "values": [
      "Shoe size"
     ]
    }
   },
   {
    "id": "sizingSystem",
    "label": "Shoe sizing system",
    "kind": "select",
    "choices": [
     "US women’s",
     "US men’s",
     "UK",
     "EU",
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "sizeMode",
     "values": [
      "Shoe size"
     ]
    }
   },
   {
    "id": "length",
    "label": "Foot length",
    "kind": "measure",
    "when": {
     "id": "sizeMode",
     "values": [
      "Physical measurement"
     ]
    }
   },
   {
    "id": "width",
    "label": "Foot width",
    "kind": "select",
    "choices": [
     "Narrow",
     "Medium",
     "Wide",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "arch",
    "label": "Arch height",
    "kind": "select",
    "choices": [
     "High",
     "Medium",
     "Low",
     "Flat",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "sole",
    "label": "Sole or pads",
    "kind": "select",
    "choices": [
     "Humanlike sole",
     "Paw pads",
     "Hoof",
     "Mechanical contact surface",
     "Custom",
     "Not specified",
     "Not applicable"
    ],
    "humanValue": "Humanlike sole"
   },
   {
    "id": "digits",
    "label": "Toes per foot",
    "kind": "select",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7",
     "8",
     "9",
     "10",
     "Custom",
     "Not applicable"
    ],
    "humanValue": "5"
   },
   {
    "id": "nails",
    "label": "Nails or claws",
    "kind": "select",
    "choices": [
     "Human nails",
     "Claws",
     "Talons",
     "None",
     "Custom",
     "Not applicable"
    ],
    "humanValue": "Human nails"
   },
   {
    "id": "covering",
    "label": "Covering",
    "kind": "select",
    "choices": [
     "Skin",
     "Fur",
     "Scales",
     "Feathers",
     "Plating",
     "Latex",
     "Silicone",
     "None",
     "Custom"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   },
   {
    "id": "texture",
    "label": "Surface texture",
    "kind": "select",
    "choices": [
     "Smooth",
     "Soft",
     "Rough",
     "Hard",
     "Variable",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "markings",
    "label": "Markings",
    "kind": "select",
    "choices": [
     "None",
     "Custom",
     "Not specified"
    ]
   }
  ]
 },
 {
  "key": "legs",
  "label": "Legs",
  "parts": [
   {
    "id": "count",
    "label": "Number of legs",
    "kind": "select",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "8",
     "Custom",
     "Not specified"
    ],
    "humanValue": "2"
   },
   {
    "id": "type",
    "label": "Leg type",
    "kind": "select",
    "choices": [
     "Human legs",
     "Digitigrade legs",
     "Mechanical legs",
     "Custom",
     "Not applicable"
    ],
    "humanValue": "Human legs"
   },
   {
    "id": "length",
    "label": "Length",
    "kind": "select",
    "choices": [
     "Short",
     "Average",
     "Long",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "build",
    "label": "Build",
    "kind": "select",
    "choices": [
     "Slender",
     "Average",
     "Muscular",
     "Full",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "covering",
    "label": "Covering",
    "kind": "select",
    "choices": [
     "Skin",
     "Fur",
     "Scales",
     "Feathers",
     "Latex",
     "Silicone",
     "Plating",
     "Custom"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "grooming",
    "label": "Hair / grooming",
    "kind": "select",
    "choices": [
     "Clean-shaven",
     "Lightly hairy",
     "Moderately hairy",
     "Very hairy",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   },
   {
    "id": "inseam",
    "label": "Exact inseam (optional)",
    "kind": "exact",
    "measurement": "inseam"
   }
  ]
 },
 {
  "key": "hips",
  "label": "Hips",
  "parts": [
   {
    "id": "width",
    "label": "Width",
    "kind": "select",
    "choices": [
     "Narrow",
     "Medium",
     "Wide",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "shape",
    "label": "Shape",
    "kind": "select",
    "choices": [
     "Straight",
     "Rounded",
     "Angular",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "proportions",
    "label": "Proportions relative to waist / torso",
    "kind": "select",
    "choices": [
     "Narrower",
     "Balanced",
     "Fuller",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   },
   {
    "id": "circumference",
    "label": "Exact hip circumference (optional)",
    "kind": "exact",
    "measurement": "hips"
   }
  ]
 },
 {
  "key": "buttocks",
  "label": "Buttocks",
  "parts": [
   {
    "id": "size",
    "label": "Size",
    "kind": "select",
    "choices": [
     "Small",
     "Medium",
     "Large",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "shape",
    "label": "Shape",
    "kind": "select",
    "choices": [
     "Rounded",
     "Flat",
     "Heart-shaped",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   }
  ]
 },
 {
  "key": "waist",
  "label": "Waist & abdomen",
  "parts": [
   {
    "id": "width",
    "label": "Waist width",
    "kind": "select",
    "choices": [
     "Narrow",
     "Medium",
     "Wide",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "abdomen",
    "label": "Abdomen shape",
    "kind": "select",
    "choices": [
     "Flat",
     "Soft",
     "Round",
     "Angular",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "muscle",
    "label": "Muscle definition",
    "kind": "select",
    "choices": [
     "Smooth",
     "Slight",
     "Defined",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   },
   {
    "id": "circumference",
    "label": "Exact waist circumference (optional)",
    "kind": "exact",
    "measurement": "waist"
   }
  ]
 },
 {
  "key": "back",
  "label": "Back & shoulders",
  "parts": [
   {
    "id": "width",
    "label": "Shoulder width",
    "kind": "select",
    "choices": [
     "Narrow",
     "Medium",
     "Broad",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "shoulders",
    "label": "Shoulder shape",
    "kind": "select",
    "choices": [
     "Level",
     "Sloping",
     "Rounded",
     "Angular",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "back",
    "label": "Back shape",
    "kind": "select",
    "choices": [
     "Straight",
     "Tapered",
     "Rounded",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   },
   {
    "id": "posture",
    "label": "Usual posture",
    "kind": "select",
    "choices": [
     "Upright",
     "Relaxed",
     "Stooped",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "wingsPresence",
    "label": "Wings present",
    "kind": "select",
    "choices": [
     "Present",
     "Absent",
     "Not specified"
    ],
    "humanValue": "Absent"
   },
   {
    "id": "wingsCount",
    "label": "Number of wings",
    "kind": "select",
    "choices": [
     "1",
     "2",
     "4",
     "6",
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "wingsPresence",
     "values": [
      "Present"
     ]
    }
   },
   {
    "id": "wingsType",
    "label": "Wing type",
    "kind": "select",
    "choices": [
     "Feathered",
     "Membranous",
     "Insect-like",
     "Mechanical",
     "Fin-like",
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "wingsPresence",
     "values": [
      "Present"
     ]
    }
   },
   {
    "id": "wingspan",
    "label": "Wingspan (tip to tip when spread)",
    "kind": "measure",
    "when": {
     "id": "wingsPresence",
     "values": [
      "Present"
     ]
    }
   },
   {
    "id": "wingsDetails",
    "label": "Wing shape and details",
    "kind": "select",
    "choices": [
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "wingsPresence",
     "values": [
      "Present"
     ]
    }
   },
   {
    "id": "wingsMaterial",
    "label": "Wing material",
    "kind": "select",
    "choices": [
     "Skin",
     "Feathers",
     "Chitin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "wingsPresence",
     "values": [
      "Present"
     ]
    }
   },
   {
    "id": "wingsColour",
    "label": "Wing colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "White",
     "Brown",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "wingsPresence",
     "values": [
      "Present"
     ]
    }
   },
   {
    "id": "shoulderWidth",
    "label": "Exact shoulder width (optional)",
    "kind": "exact",
    "measurement": "shoulderWidth"
   }
  ]
 },
 {
  "key": "chest",
  "label": "Chest",
  "parts": [
   {
    "id": "type",
    "label": "Type",
    "kind": "select",
    "choices": [
     "Flat / pectoral",
     "Breasts",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "cup",
    "label": "Cup size",
    "kind": "select",
    "choices": [
     "A",
     "B",
     "C",
     "D",
     "DD",
     "E",
     "EE",
     "F"
    ],
    "when": {
     "id": "type",
     "values": [
      "Breasts"
     ]
    }
   },
   {
    "id": "size",
    "label": "Pectoral size",
    "kind": "select",
    "choices": [
     "Small",
     "Medium",
     "Large",
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "type",
     "values": [
      "Flat / pectoral"
     ]
    }
   },
   {
    "id": "shape",
    "label": "Shape",
    "kind": "select",
    "choices": [
     "Flat",
     "Broad",
     "Rounded",
     "Teardrop",
     "Conical",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   },
   {
    "id": "underChest",
    "label": "Exact under-chest circumference (optional)",
    "kind": "exact",
    "measurement": "underChest"
   },
   {
    "id": "circumference",
    "label": "Exact chest circumference (optional)",
    "kind": "exact",
    "measurement": "chest"
   }
  ]
 },
 {
  "key": "arms",
  "label": "Arms",
  "parts": [
   {
    "id": "count",
    "label": "Number of arms",
    "kind": "select",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "8",
     "Custom",
     "Not specified"
    ],
    "humanValue": "2"
   },
   {
    "id": "type",
    "label": "Arm type",
    "kind": "select",
    "choices": [
     "Human arms",
     "Mechanical arms",
     "Tentacles",
     "Custom",
     "Not applicable"
    ],
    "humanValue": "Human arms"
   },
   {
    "id": "length",
    "label": "Length",
    "kind": "select",
    "choices": [
     "Short",
     "Average",
     "Long",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "muscle",
    "label": "Muscle definition",
    "kind": "select",
    "choices": [
     "Smooth",
     "Slight",
     "Defined",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   },
   {
    "id": "grooming",
    "label": "Hair / grooming",
    "kind": "select",
    "choices": [
     "Clean-shaven",
     "Lightly hairy",
     "Moderately hairy",
     "Very hairy",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "armLength",
    "label": "Exact shoulder-to-wrist length (optional)",
    "kind": "exact",
    "measurement": "armLength"
   }
  ]
 },
 {
  "key": "hands",
  "label": "Hands",
  "parts": [
   {
    "id": "count",
    "label": "Number of hands",
    "kind": "select",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "8",
     "Custom",
     "Not specified"
    ],
    "humanValue": "2"
   },
   {
    "id": "type",
    "label": "Hand type",
    "kind": "select",
    "choices": [
     "Human hands",
     "Paws",
     "Mechanical hands",
     "Custom",
     "Not applicable"
    ],
    "humanValue": "Human hands"
   },
   {
    "id": "size",
    "label": "Size",
    "kind": "select",
    "choices": [
     "Small",
     "Average",
     "Large",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "width",
    "label": "Width",
    "kind": "select",
    "choices": [
     "Narrow",
     "Average",
     "Broad",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   }
  ]
 },
 {
  "key": "fingers",
  "label": "Fingers",
  "parts": [
   {
    "id": "count",
    "label": "Digits per hand",
    "kind": "select",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "7",
     "8",
     "9",
     "10",
     "Custom",
     "Not applicable"
    ],
    "humanValue": "5"
   },
   {
    "id": "length",
    "label": "Length",
    "kind": "select",
    "choices": [
     "Short",
     "Average",
     "Long",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "thickness",
    "label": "Thickness",
    "kind": "select",
    "choices": [
     "Slender",
     "Average",
     "Thick",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "nails",
    "label": "Nail type",
    "kind": "select",
    "choices": [
     "Human nails",
     "Claws",
     "Talons",
     "None",
     "Custom",
     "Not applicable"
    ],
    "humanValue": "Human nails"
   },
   {
    "id": "nailLength",
    "label": "Nail length",
    "kind": "select",
    "choices": [
     "Short",
     "Average",
     "Long",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "nailShape",
    "label": "Nail shape",
    "kind": "select",
    "choices": [
     "Rounded",
     "Square",
     "Pointed",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "nailColour",
    "label": "Nail colour",
    "kind": "select",
    "choices": [
     "Natural",
     "Polish colour",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "nailMaterial",
    "label": "Nail material",
    "kind": "select",
    "choices": [
     "Human nail keratin",
     "Latex",
     "Silicone",
     "Metal",
     "Custom"
    ],
    "humanValue": "Human nail keratin"
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   }
  ]
 },
 {
  "key": "voice",
  "label": "Neck & voice",
  "parts": [
   {
    "id": "neck",
    "label": "Neck shape",
    "kind": "select",
    "choices": [
     "Slender",
     "Average",
     "Thick",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "pitch",
    "label": "Voice pitch",
    "kind": "select",
    "choices": [
     "Low",
     "Middle",
     "High",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "quality",
    "label": "Voice quality",
    "kind": "select",
    "choices": [
     "Clear",
     "Soft",
     "Breathy",
     "Husky",
     "Raspy",
     "Resonant",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   }
  ]
 },
 {
  "key": "face",
  "label": "Face",
  "parts": [
   {
    "id": "shape",
    "label": "Overall shape",
    "kind": "select",
    "choices": [
     "Oval",
     "Round",
     "Square",
     "Heart-shaped",
     "Angular",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "jaw",
    "label": "Jaw",
    "kind": "select",
    "choices": [
     "Rounded",
     "Square",
     "Tapered",
     "Angular",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "chin",
    "label": "Chin",
    "kind": "select",
    "choices": [
     "Rounded",
     "Pointed",
     "Square",
     "Cleft",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "cheeks",
    "label": "Cheeks",
    "kind": "select",
    "choices": [
     "Flat",
     "Softly rounded",
     "Prominent cheekbones",
     "Full",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "noseSize",
    "label": "Nose size",
    "kind": "select",
    "choices": [
     "Small",
     "Average",
     "Large",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "noseShape",
    "label": "Nose shape",
    "kind": "select",
    "choices": [
     "Straight",
     "Upturned",
     "Button",
     "Broad",
     "Hooked",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "lipFullness",
    "label": "Lip fullness",
    "kind": "select",
    "choices": [
     "Thin",
     "Medium",
     "Full",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "lipShape",
    "label": "Lip shape",
    "kind": "select",
    "choices": [
     "Defined Cupid’s bow",
     "Rounded",
     "Straight upper outline",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "salivation",
    "label": "Salivation rate",
    "kind": "select",
    "choices": [
     "Low",
     "Average",
     "High",
     "Custom",
     "Not specified",
     "Not applicable"
    ],
    "humanChoices": [
     "Low",
     "Average",
     "High",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "facialHair",
    "label": "Facial hair",
    "kind": "select",
    "choices": [
     "Clean-shaven",
     "Light stubble",
     "Heavy stubble",
     "Moustache",
     "Short beard",
     "Full beard",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "complexion",
    "label": "Complexion and markings",
    "kind": "marks",
    "choices": [
     "Clear/even complexion",
     "Blotchy/uneven tone",
     "Acne",
     "Acne scarring",
     "Freckles",
     "Moles",
     "Birthmarks",
     "Redness/rosy cheeks",
     "Dark spots/patches",
     "Vitiligo",
     "Scars",
     "Dark under-eye circles",
     "Fine lines/wrinkles",
     "Custom",
     "None",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   }
  ]
 },
 {
  "key": "eyes",
  "label": "Eyes",
  "parts": [
   {
    "id": "count",
    "label": "Number of eyes",
    "kind": "select",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "8",
     "Custom",
     "Not specified"
    ],
    "humanValue": "2"
   },
   {
    "id": "size",
    "label": "Size",
    "kind": "select",
    "choices": [
     "Small",
     "Average",
     "Large",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "shape",
    "label": "Shape",
    "kind": "select",
    "choices": [
     "Almond",
     "Round",
     "Hooded",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "iris",
    "label": "Iris colour",
    "kind": "select",
    "choices": [
     "Brown",
     "Blue",
     "Green",
     "Hazel",
     "Gray",
     "Amber",
     "Red",
     "Violet",
     "Heterochromia",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Brown",
     "Blue",
     "Green",
     "Hazel",
     "Gray",
     "Amber",
     "Heterochromia",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "leftIris",
    "label": "Left iris colour",
    "kind": "select",
    "choices": [
     "Brown",
     "Blue",
     "Green",
     "Hazel",
     "Gray",
     "Amber",
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "iris",
     "values": [
      "Heterochromia"
     ]
    }
   },
   {
    "id": "rightIris",
    "label": "Right iris colour",
    "kind": "select",
    "choices": [
     "Brown",
     "Blue",
     "Green",
     "Hazel",
     "Gray",
     "Amber",
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "iris",
     "values": [
      "Heterochromia"
     ]
    }
   },
   {
    "id": "sclera",
    "label": "Sclera",
    "kind": "select",
    "choices": [
     "Normal",
     "Red",
     "Yellow",
     "Black",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Normal",
     "Red",
     "Yellow",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Human eye tissue",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Custom"
    ],
    "humanValue": "Human eye tissue"
   }
  ]
 },
 {
  "key": "ears",
  "label": "Ears",
  "parts": [
   {
    "id": "count",
    "label": "Number of ears",
    "kind": "select",
    "choices": [
     "0",
     "1",
     "2",
     "3",
     "4",
     "5",
     "6",
     "8",
     "Custom",
     "Not specified"
    ],
    "humanValue": "2"
   },
   {
    "id": "size",
    "label": "Size",
    "kind": "select",
    "choices": [
     "Small",
     "Average",
     "Large",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "shape",
    "label": "Shape",
    "kind": "select",
    "choices": [
     "Rounded",
     "Pointed",
     "Elf-like",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Rounded",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   }
  ]
 },
 {
  "key": "hair",
  "label": "Scalp hair",
  "parts": [
   {
    "id": "length",
    "label": "Length",
    "kind": "select",
    "choices": [
     "Bald",
     "Shaved",
     "Buzz cut",
     "Short",
     "Medium",
     "Long",
     "Very long",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "colour",
    "label": "Colour",
    "kind": "select",
    "choices": [
     "Black",
     "Dark brown",
     "Medium brown",
     "Light brown",
     "Dark blonde",
     "Golden blonde",
     "Platinum blonde",
     "Auburn",
     "Red",
     "Grey",
     "White",
     "Salt-and-pepper",
     "Dyed/custom",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "texture",
    "label": "Texture",
    "kind": "select",
    "choices": [
     "Straight",
     "Wavy",
     "Curly",
     "Coily",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "density",
    "label": "Density",
    "kind": "select",
    "choices": [
     "Sparse",
     "Light",
     "Average",
     "Dense",
     "Very dense",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "style",
    "label": "Style",
    "kind": "select",
    "choices": [
     "Loose",
     "Centre part",
     "Side part",
     "Cropped",
     "Slicked back",
     "Ponytail",
     "Pigtails",
     "Bun",
     "Braids",
     "Twists",
     "Locs",
     "Afro",
     "Mohawk",
     "Spikes",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Human hair",
     "Fur",
     "Feathers",
     "Synthetic fibres",
     "Metal filaments",
     "Latex",
     "Silicone",
     "Gel",
     "Plant fibres",
     "Custom"
    ],
    "humanValue": "Human hair"
   }
  ]
 },
 {
  "key": "skin",
  "label": "Skin",
  "parts": [
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   },
   {
    "id": "texture",
    "label": "Texture",
    "kind": "select",
    "choices": [
     "Smooth",
     "Soft",
     "Rough",
     "Dry",
     "Oily",
     "Combination",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "markings",
    "label": "Body markings",
    "kind": "marks",
    "choices": [
     "Freckles",
     "Moles",
     "Birthmarks",
     "Scars",
     "Stretch marks",
     "Vitiligo",
     "Uneven pigmentation",
     "Acne",
     "Tattoos",
     "Custom",
     "None",
     "Not specified"
    ]
   },
   {
    "id": "bodyHair",
    "label": "Body hair",
    "kind": "select",
    "choices": [
     "Clean-shaven",
     "Lightly hairy",
     "Moderately hairy",
     "Very hairy",
     "Custom",
     "Not specified"
    ]
   }
  ]
 },
 {
  "key": "genitalAnatomy",
  "label": "Genital anatomy",
  "parts": [
   {
    "id": "configuration",
    "label": "Configuration",
    "kind": "select",
    "choices": [
     "Penis and testes",
     "Vulval anatomy",
     "Custom human anatomy",
     "Not specified"
    ]
   },
   {
    "id": "length",
    "label": "Length (maximum 10 inches)",
    "kind": "measure",
    "maxInches": 10,
    "when": {
     "id": "configuration",
     "values": [
      "Penis and testes"
     ]
    }
   },
   {
    "id": "testes",
    "label": "Testes size",
    "kind": "select",
    "choices": [
     "Small",
     "Medium",
     "Large",
     "Not specified"
    ],
    "when": {
     "id": "configuration",
     "values": [
      "Penis and testes"
     ]
    }
   },
   {
    "id": "tightness",
    "label": "Tightness",
    "kind": "select",
    "choices": [
     "Tight",
     "None",
     "Not specified"
    ],
    "when": {
     "id": "configuration",
     "values": [
      "Vulval anatomy"
     ]
    }
   },
   {
    "id": "puffiness",
    "label": "Puffiness",
    "kind": "select",
    "choices": [
     "Puffy",
     "None",
     "Not specified"
    ],
    "when": {
     "id": "configuration",
     "values": [
      "Vulval anatomy"
     ]
    }
   },
   {
    "id": "swelling",
    "label": "Swelling",
    "kind": "select",
    "choices": [
     "Swollen",
     "None",
     "Not specified"
    ],
    "when": {
     "id": "configuration",
     "values": [
      "Vulval anatomy"
     ]
    }
   },
   {
    "id": "viscosity",
    "label": "Fluid viscosity",
    "kind": "select",
    "choices": [
     "Low",
     "Medium",
     "High",
     "Not specified"
    ],
    "when": {
     "id": "configuration",
     "values": [
      "Vulval anatomy"
     ]
    }
   },
   {
    "id": "variation",
    "label": "Anatomical variation",
    "kind": "select",
    "choices": [
     "None",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "grooming",
    "label": "Pubic hair / grooming",
    "kind": "select",
    "choices": [
     "Clean-shaven",
     "Trimmed",
     "Natural",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin"
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ]
   }
  ]
 },
 {
  "key": "scent",
  "label": "Scent & physiology",
  "parts": [
   {
    "id": "natural",
    "label": "Natural body scent",
    "kind": "select",
    "choices": [
     "Neutral",
     "Musky",
     "Earthy",
     "Sweet",
     "Sharp/tangy",
     "Sour",
     "Custom",
     "Not specified",
     "Metallic",
     "Rubbery",
     "Resinous",
     "Mineral",
     "Synthetic"
    ],
    "humanChoices": [
     "Neutral",
     "Musky",
     "Earthy",
     "Sweet",
     "Sharp/tangy",
     "Sour",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "strength",
    "label": "Scent strength",
    "kind": "select",
    "choices": [
     "No noticeable scent",
     "Very faint",
     "Faint",
     "Mild",
     "Noticeable",
     "Strong",
     "Very strong",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "perspiration",
    "label": "Perspiration tendency",
    "kind": "select",
    "choices": [
     "Minimal",
     "Low",
     "Average",
     "High",
     "Very high",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "temperature",
    "label": "Usual skin temperature",
    "kind": "select",
    "choices": [
     "Cool",
     "Average",
     "Warm",
     "Variable",
     "Custom",
     "Not specified"
    ]
   },
   {
    "id": "traits",
    "label": "Other physical tendencies",
    "kind": "multi",
    "choices": [
     "Blushes easily",
     "Develops goosebumps easily",
     "Feels cold easily",
     "Feels warm easily",
     "Custom",
     "None",
     "Not specified"
    ]
   }
  ]
 },
 {
  "key": "height",
  "label": "Height",
  "parts": [
   {
    "id": "height",
    "label": "Height",
    "kind": "height"
   }
  ]
 },
 {
  "key": "weight",
  "label": "Weight",
  "parts": [
   {
    "id": "weight",
    "label": "Weight",
    "kind": "weight"
   }
  ]
 },
 {
  "key": "build",
  "label": "Build",
  "parts": [
   {
    "id": "build",
    "label": "Generated Build",
    "kind": "generated"
   }
  ]
 },
 {
  "key": "tail",
  "label": "Tail",
  "parts": [
   {
    "id": "presence",
    "label": "Tail present",
    "kind": "select",
    "choices": [
     "Present",
     "Absent",
     "Not specified"
    ],
    "humanValue": "Absent"
   },
   {
    "id": "description",
    "label": "Tail description",
    "kind": "select",
    "choices": [
     "Custom",
     "Not specified"
    ],
    "when": {
     "id": "presence",
     "values": [
      "Present"
     ]
    }
   },
   {
    "id": "material",
    "label": "Material",
    "kind": "select",
    "choices": [
     "Skin",
     "Latex",
     "Silicone",
     "Metal",
     "Gel",
     "Synthetic",
     "Mixed",
     "Custom",
     "Not specified"
    ],
    "humanValue": "Skin",
    "when": {
     "id": "presence",
     "values": [
      "Present"
     ]
    }
   },
   {
    "id": "surfaceColour",
    "label": "Surface colour",
    "kind": "select",
    "choices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark",
     "Red",
     "Blue",
     "Black",
     "Green",
     "Silver",
     "Gold",
     "Copper",
     "Bronze",
     "Custom",
     "Not specified"
    ],
    "humanChoices": [
     "Pale",
     "Light",
     "Tanned",
     "Dark"
    ],
    "when": {
     "id": "presence",
     "values": [
      "Present"
     ]
    }
   }
  ]
 }
];
const keys=fields.map(f=>f.key),byKey=Object.fromEntries(fields.map(f=>[f.key,f]));
const NS='Not specified',NA='Not applicable',isCustom=v=>['Custom','Custom human anatomy','Dyed/custom','Polish colour'].includes(v);
function createDraft(mode='creation'){if(!['creation','universal'].includes(mode))throw Error('Unknown appearance context.');const answers=Object.fromEntries(fields.map(f=>[f.key,Object.fromEntries(f.parts.filter(p=>mode==='creation'&&p.humanValue!==undefined).map(p=>[p.id,p.humanValue]))]));answers.height={unit:'imperial',value:null,raw:{}};answers.weight={unit:'imperial',value:null,raw:{}};return {schema:1,mode,answers,inheritedColours:{},review:null,stage:'editor'};}
function restoreDraft(raw){const d=createDraft();if(raw?.schema!==1||raw.mode!=='creation')return d;for(const f of fields){const a=raw.answers?.[f.key];if(!a||Array.isArray(a)||typeof a!=='object')continue;const names=['height','weight'].includes(f.key)?['unit','value','raw']:f.parts.flatMap(p=>[p.id,p.id+'Custom']);for(const id of names)if(Object.hasOwn(a,id))d.answers[f.key][id]=structuredClone(a[id]);}for(const key of keys)if(raw.inheritedColours?.[key]===true)d.inheritedColours[key]=true;d.review=raw.review&&typeof raw.review==='object'?structuredClone(raw.review):null;d.stage=raw.stage==='review'?'review':'editor';return d;}
function resolved(d,key,id){const a=d.answers?.[key]||{},v=a[id];return isCustom(v)?String(a[id+'Custom']||'').trim():v;}
function allowed(part,mode){return mode==='creation'?(part.humanValue!==undefined?[part.humanValue]:part.humanChoices||part.choices):Array.from(new Set([...(part.choices||[]),NS,NA]));}
function active(d,key,p){const a=d.answers?.[key]||{};if(p.when&&!p.when.values.includes(a[p.when.id]))return false;if(key==='hair'&&a.length==='Bald'&&p.id!=='length')return false;if(d.mode==='universal'&&(key==='footSize'&&a.presence==='Absent'&&p.id!=='presence'||a.count==='0'&&p.id!=='count'))return false;return true;}
function number(v){return typeof v==='number'?v:typeof v==='string'&&v.trim()?Number(v):NaN;}
function validMeasure(v){return v&&['in','cm'].includes(v.unit)&&Number.isFinite(number(v.value))&&number(v.value)>0;}
function measureInches(v){return M.fromUnit(number(v.value),v.unit);}
function fieldErrors(d,key){const f=byKey[key],a=d.answers?.[key]||{},errors=[];if(!f)return [{key,message:'Unknown appearance field.'}];const error=(p,message)=>errors.push({key,part:p.id,message:f.label+' — '+message});
 for(const p of f.parts){if(!active(d,key,p))continue;const v=a[p.id];
  if(p.kind==='select'){if(!allowed(p,d.mode).includes(v))error(p,'Choose '+p.label.toLowerCase()+'.');else if(isCustom(v)&&!String(a[p.id+'Custom']||'').trim())error(p,'Describe '+p.label.toLowerCase()+'.');}
  else if(p.kind==='age'){if(d.mode==='universal'&&[NS,NA].includes(v))continue;if(!Number.isInteger(number(v))||number(v)<(d.mode==='creation'?18:0)||d.mode==='creation'&&number(v)>90)error(p,'Enter a whole-number age from 18 to 90.');}
  else if(p.kind==='number'){if(!Number.isFinite(number(v))||number(v)<=0)error(p,'Enter a positive '+p.label.toLowerCase()+'.');}
  else if(p.kind==='measure'){if(v?.mode===NS)continue;if(!validMeasure(v))error(p,'Enter '+p.label.toLowerCase()+' with units, or select Not specified.');else if(p.maxInches&&measureInches(v)>p.maxInches+1e-9)error(p,'The maximum is '+p.maxInches+' inches.');}
  else if(p.kind==='exact'){if(v!=null&&v.value!==''&&!validMeasure(v))error(p,'Enter a positive exact measurement with inches or centimetres.');}
  else if(p.kind==='multi'){if(!Array.isArray(v)||!v.length||v.some(x=>!p.choices.includes(x)))error(p,'Choose '+p.label.toLowerCase()+'.');else if(v.length>1&&v.some(x=>['None',NS].includes(x)))error(p,'Choose None or Not specified alone.');else if(v.includes('Custom')&&!String(a[p.id+'Custom']||'').trim())error(p,'Describe the custom tendency.');}
  else if(p.kind==='marks'){if(!Array.isArray(v)||!v.length)error(p,'Choose '+p.label.toLowerCase()+'.');else for(const item of v){if(!p.choices.includes(item.kind))error(p,'Choose a valid marking.');else if(['None',NS,'Clear/even complexion'].includes(item.kind)){if(v.length>1)error(p,'Choose '+item.kind+' alone.');}else{if(item.kind==='Custom'&&!String(item.detail||'').trim())error(p,'Describe the custom marking.');if(!String(item.location||'').trim()||!String(item.prominence||'').trim())error(p,'Give each marking a location and prominence, or write Not specified.');}}}
  else if(p.kind==='height'||p.kind==='weight'){const m=d.answers[key];if(d.mode==='universal'&&[NS,NA].includes(m?.value))continue;if(!['imperial','metric'].includes(m?.unit)||!Number.isFinite(m?.value)||m.value<=0)error(p,'Enter '+f.label.toLowerCase()+' using the selected units.');}
 }
 if(key==='eyes'&&a.iris==='Heterochromia'&&(!resolved(d,key,'leftIris')||!resolved(d,key,'rightIris')||[NS,NA].includes(resolved(d,key,'leftIris'))||[NS,NA].includes(resolved(d,key,'rightIris'))||resolved(d,key,'leftIris').trim().toLowerCase()===resolved(d,key,'rightIris').trim().toLowerCase()))errors.push({key,part:'rightIris',message:'Eyes — heterochromia requires two different iris colours.'});return errors;
}
function validate(d){if(!d||d.schema!==1||!['creation','universal'].includes(d.mode)||!d.answers)return [{key:'age',part:'value',message:'The appearance draft is invalid.'}];return fields.flatMap(f=>fieldErrors(d,f.key));}
function setValue(d,key,id,value){if(!byKey[key])throw Error('Unknown appearance field.');d.answers[key]||={};d.answers[key][id]=value;if(id==='surfaceColour'){if(key==='skin'){for(const f of fields)if(f.key!=='skin'&&f.parts.some(p=>p.id==='surfaceColour')&&(!d.answers[f.key].surfaceColour||d.inheritedColours[f.key])){d.answers[f.key].surfaceColour=value;d.inheritedColours[f.key]=true;}}else d.inheritedColours[key]=false;}return d;}
function setDimension(d,key,unit,raw){if(!['height','weight'].includes(key)||!['imperial','metric'].includes(unit))throw Error('Invalid measurement unit.');let value=null;try{value=key==='height'?M.heightInches(unit==='metric'?{system:unit,cm:number(raw.cm)}:{system:unit,feet:number(raw.feet),inches:raw.inches===''?0:number(raw.inches)}):M.weightPounds(unit==='metric'?{system:unit,kg:number(raw.kg)}:{system:unit,lb:number(raw.lb)});}catch{}d.answers[key]={unit,value,raw:{...raw}};return d;}
function switchDimensionUnit(d,key,unit){if(!['imperial','metric'].includes(unit)||!['height','weight'].includes(key))throw Error('Invalid measurement unit.');const value=d.answers[key].value,raw={};if(Number.isFinite(value)){if(key==='height'){if(unit==='metric')raw.cm=String(value*2.54);else{raw.feet=String(Math.floor(value/12));raw.inches=String(Number((value%12).toPrecision(12)));}}else raw[unit==='metric'?'kg':'lb']=String(unit==='metric'?value*.45359237:value);}d.answers[key]={unit,value,raw};return d;}
function input(d){const a=d.answers,exact={};for(const f of fields)for(const p of f.parts)if(p.kind==='exact'&&validMeasure(a[f.key]?.[p.id]))exact[p.measurement]=measureInches(a[f.key][p.id]);return {bodyType:'human',heightInches:a.height.value,weightPounds:a.weight.value,shoulders:a.back.width,arms:a.arms.length,legs:a.legs.length,waist:a.waist.width,hips:a.hips.width,hipShape:a.hips.shape,muscleDefinition:a.waist.muscle,cup:a.chest.type==='Breasts'?a.chest.cup||'':'',chestType:a.chest.type==='Flat / pectoral'?'flat':null,pectoralSize:a.chest.type==='Flat / pectoral'?a.chest.size:null,exact};}
function checkedReview(d){const fresh=M.generate(input(d)),r=d.review,signature=JSON.stringify(input(d));if(!r||r.signature!==signature)throw Error('Review the current appearance before confirming.');const values={};for(const key of M.fields){const same=(a,b)=>a===b||Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<1e-9;if(r.sources?.[key]!==fresh.sources[key]||!same(r.baseline?.[key],fresh.baseline[key]))throw Error('The saved measurement baseline is invalid. Review the appearance again.');const value=r.values?.[key];if(fresh.sources[key]==='unavailable'){if(value!==null)throw Error('An unavailable measurement cannot be invented.');}else if(!Number.isFinite(value)||value<=0||fresh.sources[key]==='entered'&&!same(value,fresh.values[key])||fresh.sources[key]==='generated'&&(Math.abs(value-fresh.baseline[key])>2+1e-9||!same(value,M.nearestHalf(value))))throw Error('A review measurement exceeds its allowed adjustment.');values[key]=value;}return {...fresh,values,signature,build:M.summary({...fresh.design,measurements:values})};}
function measurements(d){if(d.mode!=='creation')throw Error('Human reference generation is available only during human creation.');const i=input(d),signature=JSON.stringify(i);if(d.review?.signature===signature){if(!d.review.roundingVersion){const fresh=M.generate(i),old=d.review,values={};for(const key of M.fields){const baseline=old.baseline?.[key],raw=fresh.rawValues[key],v=old.values?.[key],same=(a,b)=>a===b||Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<1e-9;if(old.sources?.[key]!==fresh.sources[key]||!same(baseline,raw)||fresh.sources[key]==='generated'&&(!Number.isFinite(v)||Math.abs(v-baseline)>2+1e-9)||fresh.sources[key]==='entered'&&!same(v,raw)||fresh.sources[key]==='unavailable'&&v!==null)throw Error('The saved measurement baseline is invalid. Review the appearance again.');values[key]=fresh.sources[key]==='generated'?M.nearestHalf(v):v;}d.review={...fresh,signature,values,build:M.summary({...fresh.design,measurements:values})};}return checkedReview(d);}const r=M.generate(i);return {...r,signature};}
function prepareReview(d){const errors=validate(d);if(errors.length)return {errors};d.review=measurements(d);d.stage='review';return {errors:[],measurements:d.review};}
function adjustReview(d,key,value){if(d.stage!=='review'||d.review?.signature!==JSON.stringify(input(d)))throw Error('Review the current appearance before adjusting measurements.');d.review=M.adjust(checkedReview(d),key,number(value),'in');return d.review;}
const fmt=n=>String(Number(n.toFixed(4))),inline=v=>String(v??'').replace(/[;\r\n]+/g,', ').trim();
function describe(d,key,review){const f=byKey[key],a=d.answers[key]||{};if(key==='age'||key==='gender')return String(a.value??NS);if(key==='height'){const h=a.value;if(!Number.isFinite(h))return NS;return a.unit==='metric'?fmt(h*2.54)+' cm':Math.floor(h/12)+' ft '+fmt(h%12)+' in';}if(key==='weight')return Number.isFinite(a.value)?fmt(a.unit==='metric'?a.value*.45359237:a.value)+(a.unit==='metric'?' kg':' lb'):NS;if(key==='build'&&d.mode==='universal')return a.value||NS;if(key==='build')return review?.build||'Build will be generated from the completed proportions.';
 const parts=f.parts.map(p=>{let v=resolved(d,key,p.id);if(!active(d,key,p))v=NA;else if(p.kind==='exact'){const n=review?.values[p.measurement];v=Number.isFinite(n)?review.sources[p.measurement]==='entered'&&validMeasure(a[p.id])?String(a[p.id].value)+' '+a[p.id].unit:fmt(n)+' in':NS;}else if(p.kind==='measure')v=v?.mode===NS?NS:validMeasure(v)?String(v.value)+' '+v.unit:NS;else if(p.kind==='multi')v=Array.isArray(v)?v.map(x=>x==='Custom'?inline(a[p.id+'Custom']):x).join(', '):NS;else if(p.kind==='marks')v=Array.isArray(v)?v.map(x=>['None',NS,'Clear/even complexion'].includes(x.kind)?x.kind:(x.kind==='Custom'?inline(x.detail):x.kind)+' (location: '+inline(x.location)+'; prominence: '+inline(x.prominence)+')').join(', '):NS;return p.label.replace('Exact ','').replace(' (optional)','')+': '+(typeof v==='string'&&p.kind!=='marks'?inline(v):v??NS);});return parts.join('; ');
}
function serialize(d,{review=d.review,requireComplete=true}={}){const errors=validate(d);if(requireComplete&&errors.length)throw Error(errors[0].message);return Object.fromEntries(fields.map(f=>[f.key,describe(d,f.key,review)]));}
function confirm(d){const errors=validate(d);if(errors.length)throw Error(errors[0].message);if(d.stage!=='review'||d.review?.signature!==JSON.stringify(input(d)))throw Error('Review the current appearance before confirming.');d.review=checkedReview(d);return serialize(d);}
function freeze(x){if(x&&typeof x==='object'){Object.values(x).forEach(freeze);Object.freeze(x);}return x;}
freeze(fields);return Object.freeze({schema:1,fields,keys:freeze(keys),byKey:freeze(byKey),NS,NA,isCustom,createDraft,restoreDraft,resolved,allowed,active,fieldErrors,validate,setValue,setDimension,switchDimensionUnit,input,measurements,prepareReview,adjustReview,describe,serialize,confirm,fmt});
});
