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
   //37
  {name : "Novice Conjuration", skill : 3, skillReq : 0,
   xPos : 216/4, yPos : 354/4, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Conjuration spells."},
  //38
  {name : "Apprentice Conjuration", skill : 3, skillReq : 25,
   xPos : 324/4, yPos : 231/4, preReqs : [37], nextPerk: -1,
   description : "By pursuing your apprenticeship in Conjuration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
  //39
  {name : "Adept Conjuration", skill : 3, skillReq : 50,
   xPos : 335/4, yPos : 176/4, preReqs : [38], nextPerk: -1,
   description : "By advancing further into the school of Conjuration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
  //40
  {name : "Expert Conjuration", skill : 3, skillReq : 75,
   xPos : 327/4, yPos : 132/4, preReqs : [39], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Conjuration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
  //41
  {name : "Master Conjuration", skill : 3, skillReq : 100,
   xPos : 292/4, yPos : 50/4, preReqs : [40], nextPerk: -1,
   description : "Your knowledge of Conjuration has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //42
  {name : "Mystic Binding", skill : 3, skillReq : 25,
   xPos : 242/4, yPos : 269/4, preReqs : [37], nextPerk: -1,
   description : "You've become very skilled in binding weapon-shaped daedra from Oblivion. Thereby, bound weapons are stronger and longer-lasting. Bound arrows will penetrate armor more easily."},
   //43
  {name : "Mystic Maelstrom", skill : 3, skillReq : 50,
   xPos : 262/4, yPos : 154/4, preReqs : [42], nextPerk: -1,
   description : "The weapon-shaped Daedra you conjure now directly cut into their victims' souls, thereby making them vulnerable to soul gems."},
   //44
  {name : "Mystic Banishment", skill : 3, skillReq : 75,
   xPos : 245/4, yPos : 112/4, preReqs : [43], nextPerk: -1,
   description : "Your bound weapons are now able to send summoned creatures back into the waters of Oblivion and to turn the undead."},
   //45
  {name : "Mystic Disruption", skill : 3, skillReq : 100,
   xPos : 231/4, yPos : 70/4, preReqs : [44], nextPerk: -1,
   description : "You've perfected your invocations of summoning weapon-shaped daedra by making them bypass a part of any enemy's armor."},
   //46
  {name : "Necromancy", skill : 3, skillReq : 25,
   xPos : 190/4, yPos : 188/4, preReqs : [37], nextPerk: -1,
   description : "You've developed a knack for making the dead serve your commands. Therefore, all spells that summon or raise the dead and ghosts last longer and can raise more powerful entities."},
   //47
  {name : "Ritualism", skill : 3, skillReq : 50,
   xPos : 182/4, yPos : 153/4, preReqs : [46], nextPerk: -1,
   description : "Your knowledge of the realms of the dead surpasses that of many and decreases the effort needed to raise or summon the dead and ghosts."},
   //48
  {name : "Dark Infusion", skill : 3, skillReq : 75,
   xPos : 151/4, yPos : 76/4, preReqs : [47], nextPerk: -1,
   description : "By infusing your undead creations with dark energies, you are able to make them stronger and more resilient. You can even prevent your creations from decaying to dust."},
   //49
  {name : "Summoner's Insight", skill : 3, skillReq : 25,
   xPos : 172/4, yPos : 247/4, preReqs : [37], nextPerk: -1,
   description : "You've learned how to empower Conjuration spells. Thus, you can now make them last longer in this realm."},
   //50
  {name : "Cognitive Flexibility", skill : 3, skillReq : 50,
   xPos : 126/4, yPos : 117/4, preReqs : [49], nextPerk: 51,
   description : "You have practiced the mental ability of maintaining two summons at the same time. This power extends to controlling any type of conjured or conceived entity, even outside the school of Conjuration."},
  //51
  {name : "Cognitive Flexibility", skill : 3, skillReq : 100,
   xPos : 126/4, yPos : 117/4, preReqs : [50], nextPerk: -1,
   description : "You have mastered the art of Cognitive Flexibility, a trait of only the most accomplished Summoners throughout history. You can now control three summons, of any type, simultaneously."},
   //52
  {name : "Stabilized Binding", skill : 3, skillReq : 25,
   xPos : 85/4, yPos : 221/4, preReqs : [37], nextPerk: -1,
   description : "Having studied the barriers that divide the planes of existence, you can make your summoned daedra and spirits last longer in this realm."},
  //53
  {name : "Spiritual Binding", skill : 3, skillReq : 35,
   xPos : 78/4, yPos : 161/4, preReqs : [52], nextPerk: -1,
   description : "Your knowledge of Oblivion's spiritual aspects increases the strength of all your summoned spirits."},
   //54
  {name : "Extended Binding", skill : 3, skillReq : 50,
   xPos : 53/4, yPos : 131/4, preReqs : [52], nextPerk: -1,
   description : "Your knowledge of Oblivion's spiritual aspects increases the strength of all your summoned spirits."},
   //55
  {name : "Elemental Binding", skill : 3, skillReq : 75,
   xPos : 76/4, yPos : 55/4, preReqs : [54], nextPerk: -1,
   description : "Your knowledge of Oblivion's elemental aspects increases the strength of all your summoned Atronachs while the highest level rituals will conjure Thralls that are immune to Banishment and Control spells."},
  //56
  {name : "Novice Destruction", skill : 4, skillReq : 0,
   xPos : 176/4, yPos : 345/4, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Destruction spells."},
  //57
  {name : "Pyromancy", skill : 4, skillReq : 25,
   xPos : 89/4, yPos : 219/4, preReqs : [56], nextPerk: 58,
   description : "You now are able to intensify the heat of your fire spells. Thus, they now deal increased damage."},
   //58
  {name : "Pyromancy", skill : 4, skillReq : 50,
   xPos : 89/4, yPos : 219/4, preReqs : [57], nextPerk: -1,
   description : "Your fire spells burn with almost otherworldly heat and consume earth and flesh with terrifying ease."},
   //59
  {name : "Cremation", skill : 4, skillReq : 75,
   xPos : 82/4, yPos : 143/4, preReqs : [57], nextPerk: -1,
   description : "Your higher level fire spells burn so ferociously that foes are set ablaze, often causing them to run away in gruesome agony as their very skin becomes molten."},
   //60
  {name : "Fire Mastery", skill : 4, skillReq : 100,
   xPos : 80/4, yPos : 52/4, preReqs : [59], nextPerk: -1,
   description : "Your fascination for fire now grants you a natural resistance to it, while also increasing all your fire spells' power even further."},
   //61
  {name : "Cyromancy", skill : 4, skillReq : 25,
   xPos : 155/4, yPos : 196/4, preReqs : [56], nextPerk: 62,
   description : "You now are able to improve your ice spells and thereby increase their effectiveness."},
   //62
  {name : "Cyromancy", skill : 4, skillReq : 50,
   xPos : 155/4, yPos : 196/4, preReqs : [61], nextPerk: -1,
   description : "Your ice spells freeze even air in a trice and make the harsh winters of Skyrim look like a refreshing breeze."},
   //63
  {name : "Deep Freeze", skill : 4, skillReq : 75,
   xPos : 145/4, yPos : 109/4, preReqs : [61], nextPerk: -1,
   description : "Your higher level ice spells are colder than Skyrim's most ferocious blizzards, causing them to freeze foes with low resistance to frost."},
  //64
  {name : "Frost Mastery", skill : 4, skillReq : 100,
   xPos : 153/4, yPos : 41/4, preReqs : [63], nextPerk: -1,
   description : "Your understanding of all that is cold grants you a natural resistance to it, while  increasing all your frost spells' power even further."},
   //65
  {name : "Electromancy", skill : 4, skillReq : 25,
   xPos : 210/4, yPos : 170/4, preReqs : [56], nextPerk: 66,
   description : "You can now energize your lightning spells more effectively, causing them to deal more damage."},
   //66
  {name : "Electromancy", skill : 4, skillReq : 50,
   xPos : 210/4, yPos : 170/4, preReqs : [65], nextPerk: -1,
   description : "Compared to your lightning spells, the worst tempests would look like a mild summer breeze."},
   //67
  {name : "Electrostatic Discharge", skill : 4, skillReq : 75,
   xPos : 213/4, yPos : 93/4, preReqs : [65], nextPerk: -1,
   description : "Your lightning strikes pass through body and mind with thundering intensity. Thus, they now vaporize vast amounts of Magicka off your targets."},
   //68
  {name : "Lightning Mastery", skill : 4, skillReq : 100,
   xPos : 220/4, yPos : 25/4, preReqs : [67], nextPerk: -1,
   description : "Your aptitude with lightning grants you a natural resistance to it, while also increasing all your shock spells' power even further."},
   //69
  {name : "Apprentice Destruction", skill : 4, skillReq : 25,
   xPos : 255/4, yPos : 255/4, preReqs : [56], nextPerk: -1,
   description : "By pursuing your apprenticeship in Destruction, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //70
  {name : "Rune Mastery", skill : 4, skillReq : 50,
   xPos : 302/4, yPos : 204/4, preReqs : [69], nextPerk: -1,
   description : "By studying the arcane symbols of all three elements, you have developed more powerful rune spells and have unlocked the secret of maintaining three active runes instead of just one."},
   //71
  {name : "Adept Destruction", skill : 4, skillReq : 50,
   xPos : 270/4, yPos : 130/4, preReqs : [69], nextPerk: -1,
   description : "By advancing further into the school of Destruction, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //72
  {name : "Expert Destruction", skill : 4, skillReq : 75,
   xPos : 290/4, yPos : 60/4, preReqs : [71], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Destruction and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //73
  {name : "Master Destruction", skill : 4, skillReq : 100,
   xPos : 300/4, yPos : 15/4, preReqs : [72], nextPerk: -1,
   description : "Your knowledge of Destruction has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //74
  {name : "Empowered Elements", skill : 4, skillReq : 25,
   xPos : 294/4, yPos : 316/4, preReqs : [56], nextPerk: -1,
   description : "You learned how to empower Destruction spells. Thus, you're able to overcharge their effects."},
   //75
  {name : "Impact", skill : 4, skillReq : 50,
   xPos : 360/4, yPos : 255/4, preReqs : [74], nextPerk: -1,
   description : "By intensifying the force of most of your overcharged Destruction spells, you're now capable of staggering your foes."},
   //76
  {name : "Enchanter's Insight", skill : 5, skillReq : 0,
   xPos : 183/4, yPos : 342/4, preReqs : [], nextPerk: 77,
   description : "You've acquired fundamental insights into how matter and magic intertwine. Thus, you can now infuse items with arcane energy at an enchanter and use soul gems to recharge enchanted items of all kinds."},
   //77
  {name : "Enchanter's Insight", skill : 5, skillReq : 20,
   xPos : 183/4, yPos : 342/4, preReqs : [76], nextPerk: -1,
   description : "Your advanced knowledge of arcane energy allows you to improve all your enchantments even more."},
   //78
  {name : "Soul Gem Mastery", skill : 5, skillReq : 25,
   xPos : 246/4, yPos : 218/4, preReqs : [76], nextPerk: -1,
   description : "You've learned how to draw more energy from soul gems and are now able to craft them at a smelter by transmuting and melting certain minerals."},
   //79
  {name : "Arcane Experimentation", skill : 5, skillReq : 50,
   xPos : 259/4, yPos : 176/4, preReqs : [78], nextPerk: -1,
   description : "Your studies have enabled you to research unique enchantments of your own and to craft better staves at the forge."},
   //80
  {name : "Artificer's Insight", skill : 5, skillReq : 75,
   xPos : 264/4, yPos : 80/4, preReqs : [79], nextPerk: -1,
   description : "You could fill grimoires with your newfound knowledge that allows you to create even better enchantments and staves."},
   //81
  {name : "Elemental Lore", skill : 5, skillReq : 25,
   xPos : 138/4, yPos : 219/4, preReqs : [76], nextPerk: -1,
   description : "You've learned how to tame the elements most efficiently.<br> Thus, all elemental enchantments are stronger."},
   //82
  {name : "Corpus Lore", skill : 5, skillReq : 50,
   xPos : 150/4, yPos : 150/4, preReqs : [81], nextPerk: -1,
   description : "You've become skilled in using enchantments to strengthen mind and body. Thus, all such enchantments are stronger."},
   //83
  {name : "Skill Lore", skill : 5, skillReq : 75,
   xPos : 191/4, yPos : 93/4, preReqs : [82], nextPerk: -1,
   description : "You've become a master of infusing enchantments that transfer knowledge and skill to the user, making all such ones stronger."},
   //84
  {name : "Enchantment Mastery", skill : 5, skillReq : 100,
   xPos : 258/4, yPos : 35/4, preReqs : [83,80], nextPerk: -1,
   description : "You've found a way to bind even more energy into inanimate matter. Thus, you can bend the Law of Firsts to an extent and even create Daedric staves. Additionally, all enchanted items also consume less energy."},
   //85
  {name : "Agility", skill : 6, skillReq : 0,
   xPos : 219/4, yPos : 345/4, preReqs : [], nextPerk: -1,
   description : "After some training you are now much more confident in your evasive movements. Your light armor and clothes will now hinder your movements less and you take less damage from falling."},
   //86
  {name : "Dodge", skill : 6, skillReq : 20,
   xPos : 277/4, yPos : 254/4, preReqs : [85], nextPerk: -1,
   description : "Your trained reflexes allow you to dodge incoming blows when wearing no heavy armor. By sprinting a step or two away, you can attempt to dodge hostile attacks."},
   //87
  {name : "Finesse", skill : 6, skillReq : 25,
   xPos : 192/4, yPos : 240/4, preReqs : [85], nextPerk: -1,
   description : "You inflict increased damage with all your power attacks, for you're able to hit more precisely."},
   //88
  {name : "Dexterity", skill : 6, skillReq : 50,
   xPos : 128/4, yPos : 148/4, preReqs : [87], nextPerk: -1,
   description : "You are able to balance your weapon better. Thus, you can decrease the effort to execute power attacks."},
   //89
  {name : "Agile Spellcasting", skill : 6, skillReq : 50,
   xPos : 115/4, yPos : 193/4, preReqs : [88], nextPerk: -1,
   description : "You learned how to avoid the limitations light armors bestow upon somatic spell components. Thus, you can cast spells in them unhindered."},
   //90
  {name : "Windrunner", skill : 6, skillReq : 75,
   xPos : 142/4, yPos : 92/4, preReqs : [88], nextPerk: -1,
   description : "Your light armor and clothes have become your second skin. You can move faster in them and running no longer exhausts you. Furthermore, your light armor hinders you even less than before."},
   //91
  {name : "Vexing Flanker", skill : 6, skillReq : 50,
   xPos : 267/4, yPos : 159/4, preReqs : [87], nextPerk: -1,
   description : "You deal more damage with melee weapons while you are running, for you have learned to flank your enemies with ease. Furthermore, your reflexes will never betray you when an enemy attempts a lethal strike."},
   //92
  {name : "Combat Reflexes", skill : 6, skillReq : 75,
   xPos : 237/4, yPos : 80/4, preReqs : [91,87], nextPerk: -1,
   description : "You've gained the ability to act faster in combat, though doing so will quickly exhaust you."},
   //93
  {name : "Meteoric Reflexes", skill : 6, skillReq : 100,
   xPos : 195/4, yPos : 35/4, preReqs : [92,90], nextPerk: -1,
   description : "Your reflexes are lightning fast and grant you a chance to decrease the damage of incoming melee attacks while not wearing any Heavy Armor."},
   //94
  {name : "Conditioning", skill : 7, skillReq : 0,
   xPos : 249/4.5, yPos : 406/4.5, preReqs : [], nextPerk: -1,
   description : "You've accustomed yourself to using heavy armor, without getting tired just by wearing it."},
   //95
  {name : "Relentless Onslaught", skill : 7, skillReq : 20,
   xPos : 249/4.5, yPos : 280/4.5, preReqs : [94], nextPerk: -1,
   description : "After extensive training you now can sprint in heavy armor without problems. Your familiarity with your armor also allows you to deflect most melee attacks while bull rushing."},
   //96
  {name : "Combat Casting", skill : 7, skillReq : 25,
   xPos : 130/4.5, yPos : 301/4.5, preReqs : [94], nextPerk: -1,
   description : "You're able to keep concentrated enough in heavy armor to cast Novice and Apprentice level spells without severe penalties."},
   //97
  {name : "Combat Trance", skill : 7, skillReq : 50,
   xPos : 73/4.5, yPos : 200/4.5, preReqs : [96], nextPerk: -1,
   description : "Your heavy armor distracts you even less, allowing you to cast Adept level spells with almost no penalty."},
   //98
  {name : "Combat Meditation", skill : 7, skillReq : 75,
   xPos : 84/4.5, yPos : 89/4.5, preReqs : [97], nextPerk: -1,
   description : "You're accustomed to your heavy armor so much that you can now cast even Expert level spells with relative ease."},
   //99
  {name : "Battle Mage", skill : 7, skillReq : 100,
   xPos : 103/4.5, yPos : 36/4.5, preReqs : [98], nextPerk: -1,
   description : "You have mastered spellcasting while wearing heavy armor and now can even cast Master level spells with ease. Bolstered by wearing your full heavy armor, you can concentrate even more and cast all spells easier."},
   //100
  {name : "Combat Training", skill : 7, skillReq : 25,
   xPos : 335/4.5, yPos : 307/4.5, preReqs : [94], nextPerk: -1,
   description : "You require no extra stamina for power attacks when wearing heavy armor and are less hindered by your armor. Also, your gauntlets improve your unarmed damage."},
   //101
  {name : "Fortitude", skill : 7, skillReq : 50,
   xPos : 367/4.5, yPos : 216/4.5, preReqs : [100], nextPerk: -1,
   description : "Your training made you stronger and you are now less burdened by the rigidity of your armor. You also receive some additional stamina and carry weight."},
   //102
  {name : "Power of the Combatant", skill : 7, skillReq : 75,
   xPos : 375/4.5, yPos : 163/4.5, preReqs : [101], nextPerk: -1,
   description : "Once a day, you can now push yourself to continue fighting,  allowing you to regenerate stamina very fast. Furthermore, you learned some new tricks to overcome the mobility limitations of your armor."},
   //103
  {name : "Juggernaut", skill : 7, skillReq : 100,
   xPos : 366/4.5, yPos : 62/4.5, preReqs : [102], nextPerk: -1,
   description : "You've reached perfection in the skill of wearing heavy armor and are now significantly more maneuverable in it. Your armor can now be worn with less effort and protects you even more."},
   //104
  {name : "Novice Illusion", skill : 8, skillReq : 0,
   xPos : 180/3.5, yPos : 303/3.5, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment the strength and duration of all Illusion spells."},
   //105
  {name : "Apprentice Illusion", skill : 8, skillReq : 20,
   xPos : 183/3.5, yPos : 198/3.5, preReqs : [104], nextPerk: -1,
   description : "By pursuing your apprenticeship in Illusion, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //106
  {name : "Adept Illusion", skill : 8, skillReq : 40,
   xPos : 185/3.5, yPos : 142/3.5, preReqs : [105], nextPerk: -1,
   description : "By advancing further into the school of Illusion, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //107
  {name : "Expert Illusion", skill : 8, skillReq : 60,
   xPos : 185/3.5, yPos : 80/3.5, preReqs : [106], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Illusion and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //108
  {name : "Master Illusion", skill : 8, skillReq : 80,
   xPos : 186/3.5, yPos : 40/3.5, preReqs : [107], nextPerk: -1,
   description : "Your knowledge of Illusion has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //109
  {name : "Shadow Shaping", skill : 8, skillReq : 70,
   xPos : 125/3.5, yPos : 60/3.5, preReqs : [107], nextPerk: -1,
   description : "By studying spells like Shadow Shield or Shadow Simulacrum, you gained even deeper insights into the weave of shadows. Thus, you can empower them and cast them with less effort."},
   //110
  {name : "Visual Manipulation", skill : 8, skillReq : 35,
   xPos : 110/3.5, yPos : 181/3.5, preReqs : [104], nextPerk: -1,
   description : "You've experimented with spells like Dark Vision, Invisibility and Blur to manipulate your surroundings. After a lot of training you can now empower such spells and concentrating on them requires less effort."},
   //111
  {name : "Acoustic Manipulation", skill : 8, skillReq : 25,
   xPos : 55/3.5, yPos : 226/3.5, preReqs : [104], nextPerk: -1,
   description : "After studying spells like Muffle, Arcane Resonance or Dampening Rune you are now familiar with manipulating sounds. Thus, you can empower these spells and require less concentration to maintain them."},
   //112
  {name : "Environmental Manipulation", skill : 8, skillReq : 65,
   xPos : 65/3.5, yPos : 85/3.5, preReqs : [110,111], nextPerk: -1,
   description : "After long training with spells like Shadow Stride, Veil of Silence, Invisibility and Muffling Sphere you gained a deep insight into the connections between light and sound. You can now empower these spells and maintain them with less effort."},
   //113
  {name : "Phantasmagoria", skill : 8, skillReq : 90,
   xPos : 102/3.5, yPos : 10/3.5, preReqs : [112,109,108], nextPerk: -1,
   description : "You've mastered the most powerful forms of Shadow Magic. Therefore, spells like Veil of Shadows, Shadow Sanctuary and Mistress of the Dark can now be empowered and cast with highly decreased effort."},
   //114
  {name : "Delusive Phantasms", skill : 8, skillReq : 15,
   xPos : 300/3.5, yPos : 210/3.5, preReqs : [104], nextPerk: -1,
   description : "You have studied the most common spell formulae that affect basic emotions like fear, calmness and courage. Thus, you can empower related spells and increase their overall effectiveness."},
   //115
  {name : "Otherworldly Phantasms", skill : 8, skillReq : 45,
   xPos : 285/3.5, yPos : 132/3.5, preReqs : [114], nextPerk: -1,
   description : "You have extended your knowledge of affecting emotions, being able to turn your foes into berserking maniacs or cause them to fall asleep with ease. You also learned how to empower related spells."},
   //116
  {name : "Pain and Agony", skill : 8, skillReq : 50,
   xPos : 240/3.5, yPos : 100/3.5, preReqs : [106], nextPerk: -1,
   description : "Having studied spells like Phantasmal Pain and Waking Nightmare, you can now invoke terrible agony in your foes with ease. In addition, you also learned how to empower related spells."},
   //117
  {name : "Obliterate the Mind", skill : 8, skillReq : 70,
   xPos : 270/3.5, yPos : 72/3.5, preReqs : [116,115], nextPerk: -1,
   description : "You have studied spells like Fog of Shadows, Phantasmal Killer and Blackout. Thus, you can now empower them and shatter your foes' minds with ease."},
   //118
  {name : "Domination", skill : 8, skillReq : 90,
   xPos : 267/3.5, yPos : 10/3.5, preReqs : [117,108], nextPerk: -1,
   description : "Having studied spells like Phantasmal Miasma and Mind Maelstrom, there is no thinking being that can escape your influence. These spells can now be empowered and sustaining the Miasma is less demanding."},
   //119
  {name : "Cheap Tricks", skill : 9, skillReq : 0,
   xPos : 123/4, yPos : 357/4, preReqs : [], nextPerk: -1,
   description : "You have learned the basics of the art of picking locks and gain 20 expertise. You can now pick novice and apprentice locks without difficulty, but adept locks remain a challenge. If you apply some basic smithing techniques, you can even forge steel ingots into lockpicks."},
   //120
  {name : "Locksmithing Lore", skill : 9, skillReq : 45,
   xPos : 219/4, yPos : 195/4, preReqs : [119], nextPerk: -1,
   description : "You have extended your repertoire of lockpicking tricks, which increases your expertise by an additional 25 points. Adept locks can be picked without effort and you can attempt to open expert locks."},
   //121
  {name : "Treasure Hunter", skill : 9, skillReq : 50,
   xPos : 152/4, yPos : 86/4, preReqs : [120], nextPerk: -1,
   description : "You are able to locate secret spaces in containers when you search them and can thereby find more loot."},
   //122
  {name : "Masterly Lockpicking", skill : 9, skillReq : 90,
   xPos : 300/4, yPos : 50/4, preReqs : [120], nextPerk: -1,
   description : "You learned everything there is to know about the art of lockpicking. Your expertise increases by 35 points, you can now pick expert locks without difficulty and even master locks are no longer safe from you."},
   //123
  {name : "Ranged Combat Training", skill : 10, skillReq : 0,
   xPos : 314/4, yPos : 360/4, preReqs : [], nextPerk: -1,
   description : "After some training at the shooting range you can deal more damage with bows and crossbows. [damage x 1.2, -50% weapon weight penalties, ammunition grants armor penetration]"},
   //124
  {name : "Ranger", skill : 10, skillReq : 15,
   xPos : 177/4, yPos : 322/4, preReqs : [123], nextPerk: -1,
   description : "You improved your footwork when engaging in ranged combat with light weapons. [allows running while attacking with light bows and crossbows]"},
   //125
  {name : "Eagle Eye", skill : 10, skillReq : 25,
   xPos : 170/4, yPos : 250/4, preReqs : [123], nextPerk: -1,
   description : "By concentrating only on your target and holding your breath, you can now aim much more precisely. [zoom in by holding right mouse button]"},
   //126
  {name : "Marksman's Focus", skill : 10, skillReq : 50,
   xPos : 83/4, yPos : 161/4, preReqs : [125], nextPerk: -1,
   description : "When fully focusing on your target, everything around you seems to slow down remarkably. [time slows down while zooming, -25% weapon weight penalties]"},
   //127
  {name : "Rapid Reload", skill : 10, skillReq : 60,
   xPos : 90/4, yPos : 119/4, preReqs : [125], nextPerk: -1,
   description : "Your have familiarized yourself with the mechanics of your crossbow and can use this knowledge to reload it significantly faster. [+50% reload speed with crossbows]"},
   //128
  {name : "Quick Shot", skill : 10, skillReq : 60,
   xPos : 175/4, yPos : 124/4, preReqs : [125], nextPerk: -1,
   description : "You have learned to draw and fire in one single movement, increasing your rate of fire with bows greatly. [+50% draw speed with bows]"},
   //129
  {name : "Power Shot", skill : 10, skillReq : 75,
   xPos : 100/4, yPos : 78/4, preReqs : [125], nextPerk: -1,
   description : "You have discovered the art of aiming at tendons and joints. Your shots will now have a chance to stagger enemies [chance to stagger targets]"},
   //130
  {name : "Precise Aim", skill : 10, skillReq : 20,
   xPos : 302/4, yPos : 288/4, preReqs : [123], nextPerk: -1,
   description : "Your aim is now precise enough to target weak spots in the enemy's defenses. [damage x 1.2 with bow and crossbow attacks]"},
   //131
  {name : "Piercing Shot", skill : 10, skillReq : 45,
   xPos : 284/4, yPos : 200/4, preReqs : [130], nextPerk: -1,
   description : "You've learned how to hit the weakest parts of armor, making armored foes more vulnerable to ranged weapons. [+50% armor penetration from ammunition]"},
   //132
  {name : "Penetrating Shot", skill : 10, skillReq : 80,
   xPos : 224/4, yPos : 67/4, preReqs : [131], nextPerk: -1,
   description : "You've mastered the technique of hitting weak armor parts, making armored foes even more vulnerable to ranged weapons. [+50% armor penetration from ammunition]"},
   //133
  {name : "Stunning Precision", skill : 10, skillReq : 100,
   xPos : 174/4, yPos : 27/4, preReqs : [132,129], nextPerk: -1,
   description : "Any successful staggering shot will almost always stun the target momentarily. [staggering hits will also stun the target]"},
]
};

addPerkData(requiem402PerkData);

const fTweaks17PerkData = {};
Object.assign(fTweaks17PerkData,requiem402PerkData);
fTweaks17PerkData.name = "FTweaks 1.7";
fTweaks17PerkData.id = 1;

addPerkData(fTweaks17PerkData);
