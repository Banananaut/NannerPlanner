const requiem402GameMechanicsData = {
  name: "Requiem 4.0 and Up",
  id : 0,
  
  initialPerks: 3,
  
  oghmaData : {
    perksGiven : 7,
    hmsGiven : [200,200,200]
  },
  
  leveling: {
    base : 75,
    mult : 25,
    hmsGiven : [5,5,5]
  },
  
  derivedAttributes : {
    attribute : ["Magic Resist",
                 "Magicka Regeneration",
                 "Disease Resist",
                 "Poison Resist",
                 "Stamina Regeneration",
                 "Move Speed",
                 "Carry Weight",
                 "Marksman Damage",
                 "One-Handed Damage",
                 "Two-Handed Damage",
                 "Unarmed Damage"],
    isPercent : [true,
                 true,
                 true,
                 true,
                 true,
                 true,
                 false,
                 true,
                 true,
                 true,
                 false],
    prefactor : [1.0,
                8.0,
                4.0,
                4.0,
                8.0,
                0.75,
                4.0,
                4.0,
                4.0,
                4.0,
                4.5],
    threshold : [150,
                 100,
                 100,
                 140,
                 100,
                 125,
                 110,
                 150,
                 150,
                 150,
                 125],
    weight_health : [0,
                     0,
                     0.4,
                     0.6,
                     0,
                     0.2,
                     0.8,
                     0.2,
                     0.5,
                     0.8,
                     0.5],
    weight_magicka : [1,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,],
    weight_stamina : [0,
                      0,
                      0.6,
                      0.4,
                      1.0,
                      0.8,
                      0.2,
                      0.8,
                      0.5,
                      0.2,
                      0.5]                     
  }
};

addGameMechanicsData(requiem402GameMechanicsData);

const fTweaks17GameMechanicsData = deepmerge({},requiem402GameMechanicsData);

fTweaks17GameMechanicsData.id = 1;
fTweaks17GameMechanicsData.name = "3/B/FTweaks";
fTweaks17GameMechanicsData.oghmaData = {perksGiven: 5, hmsGiven :[100,100,100]};
fTweaks17GameMechanicsData.leveling = {
  base:150,
  mult:23,
  hmsGiven : [5,5,5]
};

addGameMechanicsData(fTweaks17GameMechanicsData);
