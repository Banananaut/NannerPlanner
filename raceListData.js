const fTweaks17RaceData = {
  name : "FTweaks 1.7",
  id: 0,
  
  races : [
    {
     name: "Altmer", 
     startingHMS: [90,130,90], 
     startingCW: 90, speedBonus: 0,
     hmsBonus: [0,45,0], 
     startingHMSRegen: [0,1.05,1.55], 
     unarmedDam: 5,
     startingSkills : [ 5,       //Alchemy
                       10,       //Alteration
                        5,       //Block
                       10,       //Conjuration
                       15,       //Destruction
                       10,       //Enchanting
                        5,       //Evasion
                        5,       //Heavy Armor
                       15,       //Illusion
                        5,       //Lockpicking
                        5,       //Marksman
                        5,       //One-handed
                        5,       //Pickpocket
                       10,       //Restoration
                        5,       //Smithing
                        5,       //Sneak
                        5,       //Speech
                        5]       //Two-handed
    }
  ]
};
addRaceData(fTweaks17RaceData);