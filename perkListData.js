const requiem402PerkData = {
name : "Requiem 4.0.2",
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
  {name : "Alchemical Lore", skill : 0, skillReq : 0,
   xPos : 19.3, yPos : 86.25, preReqs : [0], nextPerk: -1,
   description : "Through obscure knowledge, you now can enhance your mixtures and craft alchemistic powders at a smelter. Besides, your sensory organs have become very keen. Thus, you determine all the alchemical properties of consumed ingredients."},
  //2
  {name : "Improved Elixirs", skill : 0, skillReq : 25,
   xPos : 75.7, yPos : 80.75, preReqs : [0], nextPerk: -1,
   description : "Having refinined the brewing process, you are now able to improve the effects of all your elixirs."},
  //3
  {name : "Night Vision", skill : 0, skillReq : 25,
  xPos : 77, yPos : 62.5, preReqs : [2], nextPerk: -1,
  description : "Having altered your body with extracts from a sabrecat eye, you can now make your eyes see in the dark at will."},
  //4
  {name : "Concentrated Poisons", skill : 0, skillReq : 25,
  xPos : 30.7, yPos : 61.5, preReqs : [2,0], nextPerk: -1,
  description : "Your experience in the obscure alchemical arts allows you to concentrate your poisons. Thus, you can make most of them last longer before they need to be reapplied."},
  //5
  {name : "Regeneration", skill : 0, skillReq : 50,
   xPos : 65.7, yPos : 40.5, preReqs : [2], nextPerk: -1,
   description : "Having altered your body with extracts from troll fat, slaughterfish eggs and spriggan sap, you're now able to regenerate your body, and do so even more rapidly when you are immersed in water."},
  //6
  {name : "Catalysis", skill : 0, skillReq : 50,
   xPos : 181/3, yPos : 194/4, preReqs : [2], nextPerk: 7,
   description : "You've started experimenting with a catalyst that increases the yield of the brewing process."},
  //7
  {name : "Catalysis", skill : 0, skillReq : 100,
   xPos : 181/3, yPos : 194/4, preReqs : [6], nextPerk: -1,
   description : "You've perfected the catalyst. Thereby, you can craft double the amount of mixtures with the same amount of ingredients."},
  //8
  {name : "Improved Poisons", skill : 0, skillReq : 50,
   xPos : 104/3, yPos : 156/4, preReqs : [4], nextPerk: -1,
   description : "By adding small amounts of truly horrifying ingredients, you are able to make your poisons more potent."},
  //9
  {name : "Immunization", skill : 0, skillReq : 75,
   xPos : 172/3, yPos : 98/4, preReqs : [6,8], nextPerk: -1,
   description : "You've discovered a way to make your body more resilient to all kinds of diseases and poisons."},
  //10
  {name : "Fortified Muscles", skill : 0, skillReq : 75,
   xPos : 148/3, yPos : 225/4, preReqs : [9], nextPerk: -1,
   description : "Having altered your body with extracts from troll fat and a mammoth heart, you've become more resilient to harm."},
  //11
  {name : "Alchemical Intellect", skill : 0, skillReq : 100,
   xPos : 199/3, yPos : 65/4, preReqs : [9], nextPerk: -1,
   description : "Having altered your body with extracts from a Dremora's Heart and Ectoplasm, your mind has transcended mortal limits, expanding your magicka and improving your spell casting."},
  //12
  {name : "Purification Process", skill : 0, skillReq : 100,
   xPos : 140/3, yPos : 40/4, preReqs : [9], nextPerk: -1,
   description : "You've found a method to eliminate disadvantages from your mixtures and to make all of them even more potent."},
  //13
  {name : "Novice Alteration", skill : 1, skillReq : 0,
   xPos : 144/3, yPos : 336/4, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Alteration spells."},
  //14
  {name : "Apprentice Alteration", skill : 1, skillReq : 25,
   xPos : 160/3, yPos : 236/4, preReqs : [13], nextPerk: -1,
   description : "By pursuing your apprenticeship in Alteration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //15
  {name : "Adept Alteration", skill : 1, skillReq : 50,
   xPos : 162/3, yPos : 150/4, preReqs : [14], nextPerk: -1,
   description : "By advancing further into the school of Alteration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //16
  {name : "Expert Alteration", skill : 1, skillReq : 75,
   xPos : 193/3, yPos : 111/4, preReqs : [15], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Alteration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //17
  {name : "Master Alteration", skill : 1, skillReq : 100,
   xPos : 253/3, yPos : 65/4, preReqs : [16], nextPerk: -1,
   description : "Your knowledge of Alteration has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //18
  {name : "Spell Armor", skill : 1, skillReq : 75,
   xPos : 268/3, yPos : 145/4, preReqs : [16], nextPerk: -1,
   description : "You've expanded the versatility of your Mage Armor spells by enabling them to also decrease incoming elemental damage."},
   //19
  {name : "Magical Absorption", skill : 1, skillReq : 100,
   xPos : 147/3, yPos : 54/4, preReqs : [16], nextPerk: -1,
   description : "You've mastered the art of absorbing Magicka from incoming spells, and are now able to fully absorb their power from time to time."},
   //20
  {name : "Empowered Alterations", skill : 1, skillReq : 25,
   xPos : 100/3, yPos : 212/4, preReqs : [13], nextPerk: -1,
   description : "You learned how to empower Alteration spells. Thus, you now can overcharge their effects into even more powerful, longer lasting versions."},
   //21
  {name : "Improved Mage Armor", skill : 1, skillReq : 25,
   xPos : 113/3, yPos : 170/4, preReqs : [14], nextPerk: -1,
   description : "You've mastered the art of casting armor spells. Their effect is maximized when you don't wear any distracting armor."},
   //22
  {name : "Magic Resistance", skill : 1, skillReq : 25,
   xPos : 222/3, yPos : 167/4, preReqs : [14], nextPerk: 23,
   description : "You're able to block a part of a dangerous spell's effect."},
   //23
  {name : "Magic Resistance", skill : 1, skillReq : 50,
   xPos : 222/3, yPos : 167/4, preReqs : [22], nextPerk: 24,
   description : "You are able to block more of a dangerous spell's effect."},
   //24
  {name : "Magic Resistance", skill : 1, skillReq : 75,
   xPos : 222/3, yPos : 167/4, preReqs : [23], nextPerk: -1,
   description : "You are able to block even more of a dangerous spell's effect."},
   //25
  {name : "Stability", skill : 1, skillReq : 50,
   xPos : 120/3, yPos : 105/4, preReqs : [15], nextPerk: -1,
   description : "You've become exceptionally good at making your alteration spells more stable. Thus, they now last longer."},
   //26
  {name : "Metamagical Thesis", skill : 1, skillReq : 75,
   xPos : 48/3, yPos : 133/4, preReqs : [25], nextPerk: -1,
   description : "Your knowledge of the very fabric of magic itself allows you to cast any spell of any school with decreased effort."},
   //27
  {name : "Metamagical Empowerment", skill : 1, skillReq : 100,
   xPos : 61/3, yPos : 65/4, preReqs : [26], nextPerk: -1,
   description : "Having delved even deeper in metamagical lore, you can cast any spell more effectively and augment all other magical effects."},
   //28
  {name : "Improved Blocking", skill : 2, skillReq : 0,
   xPos : 150/3, yPos : 323/4, preReqs : [], nextPerk: -1,
   description : "You strengthened your shield arm and trained to parry blows a little. Thus you can block somewhat better."},
   //29
  {name : "Experienced Blocking", skill : 2, skillReq : 20,
   xPos : 150/3, yPos : 222/4, preReqs : [28], nextPerk: -1,
   description : "With weapon or shield you can block almost any blow with rock-solid confidence. Additionally, when blocking a hit you feel the adrenaline rushing through your veins, recovering a small amount of stamina."},
   //30
  {name : "Strong Grip", skill : 2, skillReq : 15,
   xPos : 30/3, yPos : 239/4, preReqs : [28], nextPerk: -1,
   description : "You hold on to your shield like you would hold on to your life. Blocking is even more effective and your equipped shield weighs less."},
   //31
  {name : "Elemental Protection", skill : 2, skillReq : 50,
   xPos : 55/3, yPos : 115/4, preReqs : [30], nextPerk: -1,
   description : "You've learned how to block damaging spells so that you can now<br> increase your resistance against them when blocking with a shield."},
   //32
  {name : "Defensive Stance", skill : 2, skillReq : 75,
   xPos : 103/3, yPos : 60/4, preReqs : [31], nextPerk: -1,
   description : "You have honed your defensive movements to perfection. Therefore, blocking incoming attacks will no longer slow you down."},
   //33
  {name : "Powerful Bashes", skill : 2, skillReq : 25,
   xPos : 250/3, yPos : 239/4, preReqs : [28], nextPerk: -1,
   description : "By gathering your strength for a short while, you can perform a much more powerful bash. Bashing an enemy like this with your shield or the pommel of your weapon will likely put him off balance."},
   //34
  {name : "Overpowering Bashes", skill : 2, skillReq : 50,
   xPos : 250/3, yPos : 175/4, preReqs : [33], nextPerk: -1,
   description : "When you put all of your power into your shield bashes, you will often overpower your foes. They will be staggered much more now and likely will even trip and fall."},
   //35
  {name : "Disarming Bash", skill : 2, skillReq : 75,
   xPos : 225/3, yPos : 75/4, preReqs : [34], nextPerk: -1,
   description : "Sometimes, when you put all your strength into your bashes your foes drop their weapon because of the pain."},
   //36
  {name : "Unstoppable Charge", skill : 2, skillReq : 100,
   xPos : 150/3, yPos : 30/4, preReqs : [35,32], nextPerk: -1,
   description : "When bull rushing with your shield raised, you are a tremendous force to deal with. In addition to likely being knocked down, your unfortunate enemies will also suffer serious wounds from the impact itself."},
]
};

addPerkData(requiem402PerkData);

const fTweaks17PerkData = {};
Object.assign(fTweaks17PerkData,requiem402PerkData);
fTweaks17PerkData.name = "FTweaks 1.7";
fTweaks17PerkData.id = 1;

addPerkData(fTweaks17PerkData);