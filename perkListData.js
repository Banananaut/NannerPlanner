const fTweaks17PerkData = {
name : "FTweaks 1.7",
id: 0,
skillNames : [
  "Alchemy",      // 0
  "Alteration",   // 1
  "Block",        // 2
  "Conjuration",  // 3
  "Destruction",  // 4
  "Enchanting",   // 5
  "Evasion",      // 6
  "Heavy Armor",  // 7
  "Illusion",     // 8
  "Lockpicking",  // 9
  "Marksman",     // 10
  "One-Handed",   // 11
  "Pickpocket",   // 12
  "Restoration",  // 13
  "Smithing",     // 14
  "Sneak",        // 15
  "Speech",       // 16
  "Two-Handed"    // 17
],
perks : [
  /*
    {name : "", skill : 0, skillReq : 0,
      xPos : 0, yPos : 0, preReqs : [], nextPerk: -1,
      description : ""},
  */
  //0
  {name : "Alchemical Lore", skill : 0, skillReq: 0,
   xPos : 19.3, yPos : 86.25, preReqs : [], nextPerk: 1,
   description : "You've acquired basic alchemical insights and understand how to work with a laboratory. Thus, you can now craft your own potions and poisons."},
  //1
  {name : "Alchemical Lore", skill : 0, skillReq : 50,
   xPos : 19.3, yPos : 86.25, preReqs : [0], nextPerk: -1,
   description : "You now can craft alchemistic powders at a smelter. In addition, your sensory organs have become very keen. Thus, you determine most of the alchemical properties of consumed ingredients. Your created potions are 50% more potent [overrides Alchemical Lore 1]"},
  //2
  {name : "Improved Elixirs", skill : 0, skillReq : 25,
   xPos : 75.7, yPos : 80.75, preReqs : [0], nextPerk: -1,
   description : "Having refined your brewing process, you are now able to improve the effects of all your beneficial elixirs by 10%, and your health/stamina/magicka-restoring potions by a further 10%."},
  //3
  {name : "Night Vision", skill : 0, skillReq : 35,
  xPos : 77, yPos : 62.5, preReqs : [2], nextPerk: -1,
  description : "Having altered your body with extracts from a sabrecat eye, you can now make your eyes see in the dark at will."},
  //4
  {name : "Concentrated Poisons", skill : 0, skillReq : 25,
  xPos : 30.7, yPos : 61.5, preReqs : [2,0], nextPerk: -1,
  description : "Your experience in the obscure alchemical arts allows you to concentrate your poisons. Thus, you can make most of them last longer before they need to be reapplied."},
  //5
  {name : "Regeneration", skill : 0, skillReq : 65,
   xPos : 65.7, yPos : 40.5, preReqs : [2], nextPerk: -1,
   description : "Having altered your body with extracts from troll fat, slaughterfish eggs and spriggan sap, you're now able to regenerate your body, and do so even more rapidly when you are immersed in water."},
  //6
  {name : "Catalysis", skill : 0, skillReq : 50,
   xPos : 181/3, yPos : 194/4, preReqs : [2], nextPerk: 7,
   description : "You've started experimenting with a catalyst that increases the yield of the brewing process roughly one fifth of the time."},
  //7
  {name : "Catalysis", skill : 0, skillReq : 100,
   xPos : 181/3, yPos : 194/4, preReqs : [6], nextPerk: -1,
   description : "You've improved the catalyst. Thereby, you can craft double the amount of mixtures with the same amount of ingredients on third of the time."},
  //8
  {name : "Improved Poisons", skill : 0, skillReq : 50,
   xPos : 104/3, yPos : 156/4, preReqs : [4], nextPerk: -1,
   description : "You have learned to fully extract the most vile parts of your ingredients. Thus, you are able to make your poisons 15% more potent."},
  //9
  {name : "Immunization", skill : 0, skillReq : 75,
   xPos : 172/3, yPos : 98/4, preReqs : [6,8], nextPerk: -1,
   description : "You've discovered a way to make your body more resilient to all kinds of diseases and poisons."},
  //10
  {name : "Fortified Muscles", skill : 0, skillReq : 80,
   xPos : 148/3, yPos : 225/4, preReqs : [9], nextPerk: -1,
   description : "Having ingested a preparation of troll fat and mammoth heart fermented in Strange Remains, you've become more resilient to harm and your body can excrete toxic waste products more efficiently."},
  //11
  {name : "Alchemical Intellect", skill : 0, skillReq : 100,
   xPos : 199/3, yPos : 60/4, preReqs : [9], nextPerk: -1,
   description : "Having altered your body with extracts from a Dremora's Heart and Ectoplasm, your mind has transcended mortal limits, expanding your magicka and improving your spell casting."},
  //12
  {name : "Purification Process", skill : 0, skillReq : 100,
   xPos : 140/3, yPos : 40/4, preReqs : [9], nextPerk: -1,
   description : "You've found a method to eliminate disadvantages from your mixtures while making them even more potent. All created potions are 10% more potent, while all beneficial potions are a further 5% more potent. Lastly, health/magicka/stamina-restoring potions are a further 5% more potent."},
]
};

addPerkData(fTweaks17PerkData);

const requiem402PerkData = {
name : "Requiem 4.0.2",
id: 1,
skillNames : [
  "Alchemy",      // 0
  "Alteration",   // 1
  "Block",        // 2
  "Conjuration",  // 3
  "Destruction",  // 4
  "Enchanting",   // 5
  "Evasion",      // 6
  "Heavy Armor",  // 7
  "Illusion",     // 8
  "Lockpicking",  // 9
  "Marksman",     // 10
  "One-Handed",   // 11
  "Pickpocket",   // 12
  "Restoration",  // 13
  "Smithing",     // 14
  "Sneak",        // 15
  "Speech",       // 16
  "Two-Handed"    // 17
],
perks : [
  /*
    {name : "", skill : 0, skillReq : 0,
      xPos : 0, yPos : 0, preReqs : [], nextPerk: -1,
      description : ""},
  */
  //0
  {name : "Alchemical Lore", skill : 0, skillReq: 0,
   xPos : 19.3, yPos : 86.25, preReqs : [], nextPerk: 1,
   description : "You've acquired basic alchemical insights and understand how to work with a laboratory. Thus, you can now craft your own potions and poisons."},
  //1
  {name : "Alchemical Lore", skill : 0, skillReq : 50,
   xPos : 19.3, yPos : 86.25, preReqs : [0], nextPerk: -1,
   description : "You now can craft alchemistic powders at a smelter. In addition, your sensory organs have become very keen. Thus, you determine most of the alchemical properties of consumed ingredients. Your created potions are 50% more potent [overrides Alchemical Lore 1]"},
  //2
  {name : "Improved Elixirs", skill : 0, skillReq : 25,
   xPos : 75.7, yPos : 80.75, preReqs : [0], nextPerk: -1,
   description : "Having refined your brewing process, you are now able to improve the effects of all your beneficial elixirs by 10%, and your health/stamina/magicka-restoring potions by a further 10%."},
  //3
  {name : "Night Vision", skill : 0, skillReq : 35,
  xPos : 77, yPos : 62.5, preReqs : [2], nextPerk: -1,
  description : "Having altered your body with extracts from a sabrecat eye, you can now make your eyes see in the dark at will."},
  //4
  {name : "Concentrated Poisons", skill : 0, skillReq : 25,
  xPos : 30.7, yPos : 61.5, preReqs : [2,0], nextPerk: -1,
  description : "Your experience in the obscure alchemical arts allows you to concentrate your poisons. Thus, you can make most of them last longer before they need to be reapplied."},
  //5
  {name : "Regeneration", skill : 0, skillReq : 65,
   xPos : 65.7, yPos : 40.5, preReqs : [2], nextPerk: -1,
   description : "Having altered your body with extracts from troll fat, slaughterfish eggs and spriggan sap, you're now able to regenerate your body, and do so even more rapidly when you are immersed in water."},
  //6
  {name : "Catalysis", skill : 0, skillReq : 50,
   xPos : 181/3, yPos : 194/4, preReqs : [2], nextPerk: 7,
   description : "You've started experimenting with a catalyst that increases the yield of the brewing process roughly one fifth of the time."},
  //7
  {name : "Catalysis", skill : 0, skillReq : 100,
   xPos : 181/3, yPos : 194/4, preReqs : [6], nextPerk: -1,
   description : "You've improved the catalyst. Thereby, you can craft double the amount of mixtures with the same amount of ingredients on third of the time."},
  //8
  {name : "Improved Poisons", skill : 0, skillReq : 50,
   xPos : 104/3, yPos : 156/4, preReqs : [4], nextPerk: -1,
   description : "You have learned to fully extract the most vile parts of your ingredients. Thus, you are able to make your poisons 15% more potent."},
  //9
  {name : "Immunization", skill : 0, skillReq : 75,
   xPos : 172/3, yPos : 98/4, preReqs : [6,8], nextPerk: -1,
   description : "You've discovered a way to make your body more resilient to all kinds of diseases and poisons."},
  //10
  {name : "Fortified Muscles", skill : 0, skillReq : 80,
   xPos : 148/3, yPos : 225/4, preReqs : [9], nextPerk: -1,
   description : "Having ingested a preparation of troll fat and mammoth heart fermented in Strange Remains, you've become more resilient to harm and your body can excrete toxic waste products more efficiently."},
  //11
  {name : "Alchemical Intellect", skill : 0, skillReq : 100,
   xPos : 199/3, yPos : 90/4, preReqs : [9], nextPerk: -1,
   description : "Having altered your body with extracts from a Dremora's Heart and Ectoplasm, your mind has transcended mortal limits, expanding your magicka and improving your spell casting."},
  //12
  {name : "Purification Process", skill : 0, skillReq : 100,
   xPos : 140/3, yPos : 40/4, preReqs : [9], nextPerk: -1,
   description : "You've found a method to eliminate disadvantages from your mixtures while making them even more potent. All created potions are 10% more potent, while all beneficial potions are a further 5% more potent. Lastly, health/magicka/stamina-restoring potions are a further 5% more potent."},
]
};

addPerkData(requiem402PerkData);