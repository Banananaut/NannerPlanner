/*
*
* Base Requiem 4.0.2 (and probably earlier)
*
*/
const requiem402PerkData = {
name : "Requiem 4.0 - 5.45",
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
  xPos : 87, yPos : 62.5, preReqs : [2], nextPerk: -1,
  description : "Having altered your body with extracts from a sabrecat eye, you can now make your eyes see in the dark at will."},
  //4
  {name : "Concentrated Poisons", skill : 0, skillReq : 25,
  xPos : 30.7, yPos : 61.5, preReqs : [2,0], nextPerk: -1,
  description : "Your experience in the obscure alchemical arts allows you to concentrate your poisons. Thus, you can make most of them last longer before they need to be reapplied."},
  //5
  {name : "Regeneration", skill : 0, skillReq : 50,
   xPos : 75.7, yPos : 40.5, preReqs : [2], nextPerk: -1,
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
   xPos : 219/3, yPos : 45/4, preReqs : [9], nextPerk: -1,
   description : "Having altered your body with extracts from a Dremora's Heart and Ectoplasm, your mind has transcended mortal limits, expanding your magicka and improving your spell casting."},
  //12
  {name : "Purification Process", skill : 0, skillReq : 100,
   xPos : 140/3, yPos : 20/4, preReqs : [9], nextPerk: -1,
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
  {name : "Magic<br>Resistance", skill : 1, skillReq : 25,
   xPos : 222/3, yPos : 167/4, preReqs : [14], nextPerk: 23,
   description : "You're able to block a part of a dangerous spell's effect."},
   //23
  {name : "Magic<br>Resistance", skill : 1, skillReq : 50,
   xPos : 222/3, yPos : 167/4, preReqs : [22], nextPerk: 24,
   description : "You are able to block more of a dangerous spell's effect."},
   //24
  {name : "Magic<br>Resistance", skill : 1, skillReq : 75,
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
  {name : "Metamagical<br>Empowerment", skill : 1, skillReq : 100,
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
  {name : "Novice<br>Conjuration", skill : 3, skillReq : 0,
   xPos : 216/4, yPos : 354/4, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Conjuration spells."},
  //38
  {name : "Apprentice<br>Conjuration", skill : 3, skillReq : 25,
   xPos : 354/4, yPos : 231/4, preReqs : [37], nextPerk: -1,
   description : "By pursuing your apprenticeship in Conjuration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
  //39
  {name : "Adept<br>Conjuration", skill : 3, skillReq : 50,
   xPos : 365/4, yPos : 176/4, preReqs : [38], nextPerk: -1,
   description : "By advancing further into the school of Conjuration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
  //40
  {name : "Expert<br>Conjuration", skill : 3, skillReq : 75,
   xPos : 357/4, yPos : 122/4, preReqs : [39], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Conjuration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
  //41
  {name : "Master<br>Conjuration", skill : 3, skillReq : 100,
   xPos : 342/4, yPos : 50/4, preReqs : [40], nextPerk: -1,
   description : "Your knowledge of Conjuration has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //42
  {name : "Mystic<br>Binding", skill : 3, skillReq : 25,
   xPos : 272/4, yPos : 249/4, preReqs : [37], nextPerk: -1,
   description : "You've become very skilled in binding weapon-shaped daedra from Oblivion. Thereby, bound weapons are stronger and longer-lasting. Bound arrows will penetrate armor more easily."},
   //43
  {name : "Mystic<br>Maelstrom", skill : 3, skillReq : 50,
   xPos : 292/4, yPos : 164/4, preReqs : [42], nextPerk: -1,
   description : "The weapon-shaped Daedra you conjure now directly cut into their victims' souls, thereby making them vulnerable to soul gems."},
   //44
  {name : "Mystic<br>Banishment", skill : 3, skillReq : 75,
   xPos : 275/4, yPos : 112/4, preReqs : [43], nextPerk: -1,
   description : "Your bound weapons are now able to send summoned creatures back into the waters of Oblivion and to turn the undead."},
   //45
  {name : "Mystic<br>Disruption", skill : 3, skillReq : 100,
   xPos : 261/4, yPos : 60/4, preReqs : [44], nextPerk: -1,
   description : "You've perfected your invocations of summoning weapon-shaped daedra by making them bypass a part of any enemy's armor."},
   //46
  {name : "Necromancy", skill : 3, skillReq : 25,
   xPos : 220/4, yPos : 218/4, preReqs : [37], nextPerk: -1,
   description : "You've developed a knack for making the dead serve your commands. Therefore, all spells that summon or raise the dead and ghosts last longer and can raise more powerful entities."},
   //47
  {name : "Ritualism", skill : 3, skillReq : 50,
   xPos : 212/4, yPos : 153/4, preReqs : [46], nextPerk: -1,
   description : "Your knowledge of the realms of the dead surpasses that of many and decreases the effort needed to raise or summon the dead and ghosts."},
   //48
  {name : "Dark<br>Infusion", skill : 3, skillReq : 75,
   xPos : 181/4, yPos : 76/4, preReqs : [47], nextPerk: -1,
   description : "By infusing your undead creations with dark energies, you are able to make them stronger and more resilient. You can even prevent your creations from decaying to dust."},
   //49
  {name : "Summoner's<br>Insight", skill : 3, skillReq : 25,
   xPos : 172/4, yPos : 247/4, preReqs : [37], nextPerk: -1,
   description : "You've learned how to empower Conjuration spells. Thus, you can now make them last longer in this realm."},
   //50
  {name : "Cognitive<br>Flexibility", skill : 3, skillReq : 50,
   xPos : 150/4, yPos : 117/4, preReqs : [49], nextPerk: 51,
   description : "You have practiced the mental ability of maintaining two summons at the same time. This power extends to controlling any type of conjured or conceived entity, even outside the school of Conjuration."},
  //51
  {name : "Cognitive<br>Flexibility", skill : 3, skillReq : 100,
   xPos : 150/4, yPos : 117/4, preReqs : [50], nextPerk: -1,
   description : "You have mastered the art of Cognitive Flexibility, a trait of only the most accomplished Summoners throughout history. You can now control three summons, of any type, simultaneously."},
   //52
  {name : "Stabilized Binding", skill : 3, skillReq : 25,
   xPos : 85/4, yPos : 221/4, preReqs : [37], nextPerk: -1,
   description : "Having studied the barriers that divide the planes of existence, you can make your summoned daedra and spirits last longer in this realm."},
  //53
  {name : "Spiritual<br>Binding", skill : 3, skillReq : 35,
   xPos : 98/4, yPos : 161/4, preReqs : [52], nextPerk: -1,
   description : "Your knowledge of Oblivion's spiritual aspects increases the strength of all your summoned spirits."},
   //54
  {name : "Extended<br>Binding", skill : 3, skillReq : 50,
   xPos : 53/4, yPos : 131/4, preReqs : [52], nextPerk: -1,
   description : "You've perfected your spells' formulae to summon daedra and spirits, and are now able to cast them more easily and further away."},
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
  {name : "Fire<br>Mastery", skill : 4, skillReq : 100,
   xPos : 80/4, yPos : 52/4, preReqs : [59], nextPerk: -1,
   description : "Your fascination for fire now grants you a natural resistance to it, while also increasing all your fire spells' power even further."},
   //61
  {name : "Cyromancy", skill : 4, skillReq : 25,
   xPos : 145/4, yPos : 196/4, preReqs : [56], nextPerk: 62,
   description : "You now are able to improve your ice spells and thereby increase their effectiveness."},
   //62
  {name : "Cyromancy", skill : 4, skillReq : 50,
   xPos : 145/4, yPos : 196/4, preReqs : [61], nextPerk: -1,
   description : "Your ice spells freeze even air in a trice and make the harsh winters of Skyrim look like a refreshing breeze."},
   //63
  {name : "Deep Freeze", skill : 4, skillReq : 75,
   xPos : 145/4, yPos : 109/4, preReqs : [61], nextPerk: -1,
   description : "Your higher level ice spells are colder than Skyrim's most ferocious blizzards, causing them to freeze foes with low resistance to frost."},
  //64
  {name : "Frost<br>Mastery", skill : 4, skillReq : 100,
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
  {name : "Electrostatic<br>Discharge", skill : 4, skillReq : 75,
   xPos : 213/4, yPos : 93/4, preReqs : [65], nextPerk: -1,
   description : "Your lightning strikes pass through body and mind with thundering intensity. Thus, they now vaporize vast amounts of Magicka off your targets."},
   //68
  {name : "Lightning<br>Mastery", skill : 4, skillReq : 100,
   xPos : 220/4, yPos : 25/4, preReqs : [67], nextPerk: -1,
   description : "Your aptitude with lightning grants you a natural resistance to it, while also increasing all your shock spells' power even further."},
   //69
  {name : "Apprentice<br>Destruction", skill : 4, skillReq : 25,
   xPos : 255/4, yPos : 255/4, preReqs : [56], nextPerk: -1,
   description : "By pursuing your apprenticeship in Destruction, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //70
  {name : "Rune Mastery", skill : 4, skillReq : 50,
   xPos : 302/4, yPos : 204/4, preReqs : [69], nextPerk: -1,
   description : "By studying the arcane symbols of all three elements, you have developed more powerful rune spells and have unlocked the secret of maintaining three active runes instead of just one."},
   //71
  {name : "Adept<br>Destruction", skill : 4, skillReq : 50,
   xPos : 270/4, yPos : 130/4, preReqs : [69], nextPerk: -1,
   description : "By advancing further into the school of Destruction, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //72
  {name : "Expert<br>Destruction", skill : 4, skillReq : 75,
   xPos : 290/4, yPos : 60/4, preReqs : [71], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Destruction and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //73
  {name : "Master<br>Destruction", skill : 4, skillReq : 100,
   xPos : 300/4, yPos : 15/4, preReqs : [72], nextPerk: -1,
   description : "Your knowledge of Destruction has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //74
  {name : "Empowered<br>Elements", skill : 4, skillReq : 25,
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
   xPos : 84/4.5, yPos : 110/4.5, preReqs : [97], nextPerk: -1,
   description : "You're accustomed to your heavy armor so much that you can now cast even Expert level spells with relative ease."},
   //99
  {name : "Battle Mage", skill : 7, skillReq : 100,
   xPos : 103/4.5, yPos : 36/4.5, preReqs : [98], nextPerk: -1,
   description : "You have mastered spellcasting while wearing heavy armor and now can even cast Master level spells with ease. Bolstered by wearing your full heavy armor, you can concentrate even more and cast all spells easier."},
   //100
  {name : "Combat Training", skill : 7, skillReq : 25,
   xPos : 355/4.5, yPos : 307/4.5, preReqs : [94], nextPerk: -1,
   description : "You require no extra stamina for power attacks when wearing heavy armor and are less hindered by your armor. Also, your gauntlets improve your unarmed damage."},
   //101
  {name : "Fortitude", skill : 7, skillReq : 50,
   xPos : 387/4.5, yPos : 216/4.5, preReqs : [100], nextPerk: -1,
   description : "Your training made you stronger and you are now less burdened by the rigidity of your armor. You also receive some additional stamina and carry weight."},
   //102
  {name : "Power of<br>the Combatant", skill : 7, skillReq : 75,
   xPos : 400/4.5, yPos : 140/4.5, preReqs : [101], nextPerk: -1,
   description : "Once a day, you can now push yourself to continue fighting,  allowing you to regenerate stamina very fast. Furthermore, you learned some new tricks to overcome the mobility limitations of your armor."},
   //103
  {name : "Juggernaut", skill : 7, skillReq : 100,
   xPos : 366/4.5, yPos : 36/4.5, preReqs : [102], nextPerk: -1,
   description : "You've reached perfection in the skill of wearing heavy armor and are now significantly more maneuverable in it. Your armor can now be worn with less effort and protects you even more."},
   //104
  {name : "Novice Illusion", skill : 8, skillReq : 0,
   xPos : 180/3.5, yPos : 303/3.5, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment the strength and duration of all Illusion spells."},
   //105
  {name : "Apprentice<br>Illusion", skill : 8, skillReq : 20,
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
  {name : "Visual<br>Manipulation", skill : 8, skillReq : 35,
   xPos : 110/3.5, yPos : 181/3.5, preReqs : [104], nextPerk: -1,
   description : "You've experimented with spells like Dark Vision, Invisibility and Blur to manipulate your surroundings. After a lot of training you can now empower such spells and concentrating on them requires less effort."},
   //111
  {name : "Acoustic<br>Manipulation", skill : 8, skillReq : 25,
   xPos : 55/3.5, yPos : 226/3.5, preReqs : [104], nextPerk: -1,
   description : "After studying spells like Muffle, Arcane Resonance or Dampening Rune you are now familiar with manipulating sounds. Thus, you can empower these spells and require less concentration to maintain them."},
   //112
  {name : "Environmental<br>Manipulation", skill : 8, skillReq : 65,
   xPos : 65/3.5, yPos : 85/3.5, preReqs : [110,111], nextPerk: -1,
   description : "After long training with spells like Shadow Stride, Veil of Silence, Invisibility and Muffling Sphere you gained a deep insight into the connections between light and sound. You can now empower these spells and maintain them with less effort."},
   //113
  {name : "Phantasmagoria", skill : 8, skillReq : 90,
   xPos : 102/3.5, yPos : 10/3.5, preReqs : [112,109,108], nextPerk: -1,
   description : "You've mastered the most powerful forms of Shadow Magic. Therefore, spells like Veil of Shadows, Shadow Sanctuary and Mistress of the Dark can now be empowered and cast with highly decreased effort."},
   //114
  {name : "Delusive<br>Phantasms", skill : 8, skillReq : 15,
   xPos : 300/3.5, yPos : 210/3.5, preReqs : [104], nextPerk: -1,
   description : "You have studied the most common spell formulae that affect basic emotions like fear, calmness and courage. Thus, you can empower related spells and increase their overall effectiveness."},
   //115
  {name : "Otherworldly<br>Phantasms", skill : 8, skillReq : 45,
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
  {name : "Marksman's<br>Focus", skill : 10, skillReq : 50,
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
   //134
  {name : "Martial Arts", skill : 11, skillReq : 0,
   xPos : 125/4, yPos : 297/4, preReqs : [], nextPerk: -1,
   description : "You are a passionate fist fighter, and train regularly to toughen your muscles to their very limits. Thus you are able to deliver much harder punches to your enemies."},
   //135
  {name : "Weapon Mastery", skill : 11, skillReq : 0,
   xPos : 191/4, yPos : 351/4, preReqs : [], nextPerk: 136,
   description : "Your improved fighting techniques allow you to swing one-handed weapons with less effort and deal more damage. [damage x 1.2, -50% weapon weight penalties]"},
   //136
  {name : "Weapon Mastery", skill : 11, skillReq : 0,
   xPos : 191/4, yPos : 351/4, preReqs : [135], nextPerk: -1,
   description : "Your improved fighting techniques increase your damage dealt with one-handed weapons greatly. [damage x 1.4, -50% weapon weight penalties]"},
   //137
  {name : "Penetrating Strikes", skill : 11, skillReq : 20,
   xPos : 195/4, yPos : 274/4, preReqs : [135], nextPerk: -1,
   description : "Your power attacks with one-handed weapons are now devastating enough to penetrate enemy armor and less exhausting. [-50% power attack stamina cost, +5 armor penetration]"},
   //138
  {name : "Dagger<br>Focus", skill : 11, skillReq : 25,
   xPos : 85/4, yPos : 240/4, preReqs : [137], nextPerk: 139,
   description : "You learned some dirty tricks for your dagger and are more likely to find weak spots in enemy armor. [irresistable sneak attack damage x 1.25, +10 armor penetration]"},
   //139
  {name : "Dagger<br>Focus", skill : 11, skillReq : 50,
   xPos : 85/4, yPos : 240/4, preReqs : [138], nextPerk: 140,
   description : "A dagger in your hand turns into a deadly weapon that will find a weakness in every armor. [irresistable sneak attack damage x 1.55, +20 armor penetration]"},
   //140
  {name : "Dagger<br>Focus", skill : 11, skillReq : 75,
   xPos : 85/4, yPos : 240/4, preReqs : [139], nextPerk: -1,
   description : "You have mastered the deadly art of the dagger and enemy armor stands no chance against your precision. [irresistable sneak attack damage x 2, +30 armor penetration]"},
   //141
  {name : "War Axe<br>Focus", skill : 11, skillReq : 25,
   xPos : 140/4, yPos : 200/4, preReqs : [137], nextPerk: 142,
   description : "You've become familiar with war axes, thereby increasing their damage and armor penetration. [damage x 1.05, +10 armor penetration]"},
   //142
  {name : "War Axe<br>Focus", skill : 11, skillReq : 50,
   xPos : 140/4, yPos : 200/4, preReqs : [141], nextPerk: 143,
   description : "You've become an advanced axe fighter, further increasing their damage and armor penetration. [damage x 1.15, +20 armor penetration]"},
   //143
  {name : "War Axe<br>Focus", skill : 11, skillReq : 75,
   xPos : 140/4, yPos : 200/4, preReqs : [142], nextPerk: -1,
   description : "Having mastered war axe combat, they start to feel like an almost natural extension of your arm. [damage x 1.3, +30 armor penetration]"},
   //144
  {name : "Mace<br>Focus", skill : 11, skillReq : 25,
   xPos : 260/4, yPos : 200/4, preReqs : [137], nextPerk: 145,
   description : "You've become familiar with war axes, thereby increasing their damage and armor penetration. [damage x 1.05, +10 armor penetration]"},
   //145
  {name : "Mace<br>Focus", skill : 11, skillReq : 50,
   xPos : 260/4, yPos : 200/4, preReqs : [144], nextPerk: 146,
   description : "You've become an advanced mace fighter and know how to find weak spots in enemy armor. [power attack damage x 1.1, +30 armor penetration]"},
   //146
  {name : "Mace<br>Focus", skill : 11, skillReq : 75,
   xPos : 260/4, yPos : 200/4, preReqs : [145], nextPerk: -1,
   description : "You've become a masterly mace fighter, rendering armor almost useless. [power attack damage x 1.15, +45 armor penetration]"},
   //147
  {name : "Sword<br>Focus", skill : 11, skillReq : 25,
   xPos : 285/4, yPos : 246/4, preReqs : [137], nextPerk: 148,
   description : "You've learned the basics of sword combat, allowing you to increase your attack rate with them slightly. [+8% attack speed, +7 armor penetration]"},
   //148
  {name : "Sword<br>Focus", skill : 11, skillReq : 50,
   xPos : 285/4, yPos : 246/4, preReqs : [147], nextPerk: 149,
   description : "You've acquired the advanced techniques of sword combat, further increasing your attack rate with them. [+16% attack speed, +14 armor penetration]"},
   //149
  {name : "Sword<br>Focus", skill : 11, skillReq : 75,
   xPos : 285/4, yPos : 246/4, preReqs : [148], nextPerk: -1,
   description : "You've become a master of sword combat, allowing you to swing swords so fast that it's almost undetectable to the mortal eye. [+24% attack speed, +21 armor penetration]"},
   //150
  {name : "Powerful Strike", skill : 11, skillReq : 50,
   xPos : 150/4, yPos : 150/4, preReqs : [137], nextPerk: -1,
   description : "You know how to put the maximum force into your power attacks which are now even more devastating. [power attack damage x 1.2]"},
   //151
  {name : "Powerful Charge", skill : 11, skillReq : 50,
   xPos : 250/4, yPos : 150/4, preReqs : [137], nextPerk: -1,
   description : "You have learned to perform a leaping power attack while sprinting, inflicting terrible wounds. [unlocks sprinting power attack, -25% weapon weight penalties]"},
   //152
  {name : "Stunning Charge", skill : 11, skillReq : 100,
   xPos : 200/4, yPos : 25/4, preReqs : [150,151], nextPerk: -1,
   description : "Putting your whole weight behind your charge, your forward power attacks now have enough momentum to knock down opponent. [forward power attacks can knock down]"},
   //153
  {name : "Flurry", skill : 11, skillReq : 25,
   xPos : 350/4, yPos : 300/4, preReqs : [135], nextPerk: 154,
   description : "When fighting with one-handed weapons, you are able to attack faster than normal. [+10% attack speed]"},
   //154
  {name : "Flurry", skill : 11, skillReq : 50,
   xPos : 350/4, yPos : 300/4, preReqs : [153], nextPerk: -1,
   description : "When fighting with one-handed weapons, you're able to attack even faster. [+25% attack speed]"},
   //155
  {name : "Storm of Steel", skill : 11, skillReq : 75,
   xPos : 320/4, yPos : 100/4, preReqs : [153], nextPerk: -1,
   description : "You've become very skilled in wielding two weapons at once. [dual-wield power attack damage x 1.25]"},
   //156
  {name : "Nimble Fingers", skill : 12, skillReq : 0,
   xPos : 112/4, yPos : 337/4, preReqs : [], nextPerk: 157,
   description : "You've spent some time improving your sleight of hand, which gives you substantial chances when pickpocketing."},
   //157
  {name : "Nimble Fingers", skill : 12, skillReq : 0,
   xPos : 112/4, yPos : 337/4, preReqs : [156], nextPerk: -1,
   description : "Your fingers have become very nimble, and besides other advantages, they allow you to pickpocket even better and to apply poisons on your victims. Why fight if a vial of deadly venom can also do the trick?"},
   //158
  {name : "Cutpurse", skill : 12, skillReq : 25,
   xPos : 161/4, yPos : 242/4, preReqs : [156], nextPerk: -1,
   description : "People shouldn't burden themselves with purses and keys. Luckily, you now can free them of these burdens more easily."},
   //159
  {name : "Mighty Greed", skill : 12, skillReq : 25,
   xPos : 257/4, yPos : 275/4, preReqs : [158], nextPerk: -1,
   description : "You are either very strong or very greedy... You now can carry more items without becoming overencumbered."},
   //160
  {name : "Nightly Thief", skill : 12, skillReq : 50,
   xPos : 202/4, yPos : 146/4, preReqs : [158], nextPerk: -1,
   description : "You have learned how to avoid waking up targets during your \"nightly visits\", so you can free them from their worldly burdens with ease."},
   //161
  {name : "Misdirection", skill : 12, skillReq : 75,
   xPos : 221/4, yPos : 60/4, preReqs : [160], nextPerk: -1,
   description : "Why should someone own a nice weapon or piece of jewelry when it could be yours? Now you can sometimes adjust this inequity."},
   //162
  {name : "Perfected Art", skill : 12, skillReq : 100,
   xPos : 254/4, yPos : 20/4, preReqs : [161], nextPerk: -1,
   description : "After having learned everything there is to know about thievery, your legendary skill means you almost never get caught."},
   //163
  {name : "Painful Regrets", skill : 13, skillReq : 0,
   xPos : 314/4, yPos : 360/4, preReqs : [], nextPerk: -1,
   description : "You've honestly reflected your sins, and you truly regret what pain you have inflicted upon others. Therefore, the gods show at least a bit of mercy, but the torment of your deeds will haunt you for the rest of your days..."},
   //164
  {name : "Novice Restoration", skill : 13, skillReq : 0,
   xPos : 221/4, yPos : 345/4, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Restoration spells."},
   //165
  {name : "Apprentice<br>Restoration", skill : 13, skillReq : 25,
   xPos : 236/4, yPos : 268/4, preReqs : [164], nextPerk: -1,
   description : "By pursuing your apprenticeship in Restoration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //166
  {name : "Adept<br>Restoration", skill : 13, skillReq : 50,
   xPos : 213/4, yPos : 190/4, preReqs : [165], nextPerk: -1,
   description : "By advancing further into the school of Restoration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //167
  {name : "Expert Restoration", skill : 13, skillReq : 75,
   xPos : 219/4, yPos : 88/4, preReqs : [166], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Restoration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //168
  {name : "Master Restoration", skill : 13, skillReq : 100,
   xPos : 178/4, yPos : 30/4, preReqs : [167], nextPerk: -1,
   description : "Your knowledge of Restoration has become all-encompassing.You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //169
  {name : "Benefactor's<br>Insight", skill : 13, skillReq : 25,
   xPos : 306/4, yPos : 295/4, preReqs : [165], nextPerk: -1,
   description : "You learned how to empower Restoration spells. Therefore, you are now able to overcharge their effects."},
   //170
  {name : "Focused Mind", skill : 13, skillReq : 25,
   xPos : 336/4, yPos : 253/4, preReqs : [165], nextPerk: -1,
   description : "You've learned to focus your mind. Thus, you can keep your concentration even in stressful situations and regenerate your magicka faster."},
   //171
  {name : "Power of Life", skill : 13, skillReq : 50,
   xPos : 282/4, yPos : 160/4, preReqs : [170], nextPerk: -1,
   description : "Your studies of healing magic now grant you the power of making yourself almost invulnerable for a short duration once a day."},
   //172
  {name : "Essence of Life", skill : 13, skillReq : 75,
   xPos : 350/4, yPos : 201/4, preReqs : [171], nextPerk: -1,
   description : "Your understanding of healing and how magic and life are intertwined allows you to call upon your newfound power more often."},
   //173
  {name : "Improved Wards", skill : 13, skillReq : 75,
   xPos : 153/4, yPos : 169/4, preReqs : [164], nextPerk: -1,
   description : "Your arcane wards now absorb magicka from incoming spells and have slightly improved efficiency."},
   //174
  {name : "Improved Healing", skill : 13, skillReq : 50,
   xPos : 120/4, yPos : 264/4, preReqs : [164], nextPerk: -1,
   description : "You've gained more knowledge about restorative magics, allowing you to heal wounds more efficiently with your healing spells."},
   //175
  {name : "Respite", skill : 13, skillReq : 75,
   xPos : 35/4, yPos : 238/4, preReqs : [174], nextPerk: -1,
   description : "In addition to curing wounds, your healing spells now reinvigorate the body itself, restoring the affected subject's stamina."},
   //176
  {name : "Mysticism", skill : 13, skillReq : 75,
   xPos : 62/4, yPos : 161/4, preReqs : [174], nextPerk: -1,
   description : "You've learned the art of weaving mystical energies into your spells, making all of them more effective against the undead and Daedra."},
   //177
  {name : "Craftsmanship", skill : 14, skillReq : 0,
   xPos : 230/5, yPos : 310/3.5, preReqs : [], nextPerk: -1,
   description : "You've acquired the basics of craftsmanship and know how to properly use all kinds of tools. Thus, you are able to craft and improve a wide variety of common goods."},
   //178
  {name : "Advanced<br>Blacksmithing", skill : 14, skillReq : 50,
   xPos : 234/5, yPos : 203/3.5, preReqs : [177], nextPerk: -1,
   description : "You've gained quite some finesse, allowing you to craft plate armor and fine jewelry. You have also found a way to melt and crush certain gems into alchemically usable dust."},
   //179
  {name : "Arcane<br>Craftsmanship", skill : 14, skillReq : 50,
   xPos : 181/5, yPos : 160/3.5, preReqs : [178], nextPerk: -1,
   description : "After reading a tome about the ancient secrets of explosive dwemer bolts, you've learned the necessary techniques to craft bolts and arrows that will explode with elemental fury upon impact."},
   //180
  {name : "Legendary<br>Blacksmithing", skill : 14, skillReq : 100,
   xPos : 299/5, yPos : 160/3.5, preReqs : [178], nextPerk: -1,
   description : "You make steel sing songs on the anvil. Your hammer is no longer a mere tool, but a loom that weaves the fabric of myths. You can even improve the divine artifacts of Aedra and Daedra."},
   //181
  {name : "Advanced<br>Light Armors", skill : 14, skillReq : 25,
   xPos : 115/5, yPos : 220/3.5, preReqs : [177], nextPerk: -1,
   description : "You've been able to learn more advanced techniques, allowing you to craft and efficiently improve scale armor."},
   //182
  {name : "Elven Smithing", skill : 14, skillReq : 50,
   xPos : 48/5, yPos : 150/3.5, preReqs : [181], nextPerk: -1,
   description : "You've gained enough finesse to create and improve Elven armor and weapons by studying the Elven craftmanship carefully."},
   //183
  {name : "Glass Smithing", skill : 14, skillReq : 75,
   xPos : 70/5, yPos : 66/3.5, preReqs : [182], nextPerk: -1,
   description : "Crafting and improving Glass equipment is not for the unskilled, but having studied intensely, you aren't one of them any more."},
   //184
  {name : "Dwarven<br>Smithing", skill : 14, skillReq : 25,
   xPos : 347/5, yPos : 227/3.5, preReqs : [177], nextPerk: -1,
   description : "You've studied some long-lost schematics of dwarven equipment and acquired the secret knowledge of how to create and improve them efficiently."},
   //185
  {name : "Orcish<br>Smithing", skill : 14, skillReq : 50,
   xPos : 400/5, yPos : 172/3.5, preReqs : [184], nextPerk: -1,
   description : "Orcish equipment is hard to craft, but you've got what it takes. Especially the schematics! You can craft and improve it easily and most efficiently."},
   //186
  {name : "Ebony Smithing", skill : 14, skillReq : 75,
   xPos : 390/5, yPos : 68/3.5, preReqs : [185], nextPerk: -1,
   description : "Ebony weapons and armor - some even fail at heating the metal. But not you. Now that you've studied the related schematics, you can craft and improve ebony equipment with ease."},
   //187
  {name : "Daedric Smithing", skill : 14, skillReq : 100,
   xPos : 440/5, yPos : 35/3.5, preReqs : [186], nextPerk: -1,
   description : "The creation of daedric weapons and armor is a secret few mortals know - still, somehow you managed to acquire this knowledge..."},
   //188
  {name : "Draconic Blacksmithing", skill : 14, skillReq : 100,
   xPos : 251/5, yPos : 15/3.5, preReqs : [-186,-183], nextPerk: -1,
   description : "The scales and bones of dragons are probably the hardest material to work with, but you've mastered even this art since you studied that old compendium."},
   //189
  {name : "Stealth", skill : 15, skillReq : 0,
   xPos : 189/4, yPos : 349/4, preReqs : [], nextPerk: 190,
   description : "You know the basics of moving silently and are harder to detect when sneaking while not wearing any heavy armor."},
   //190
  {name : "Stealth", skill : 15, skillReq : 0,
   xPos : 189/4, yPos : 349/4, preReqs : [189], nextPerk: -1,
   description : "You are even harder to detect when sneaking while not wearing any heavy armor."},
   //191
  {name : "Deft Strike", skill : 15, skillReq : 25,
   xPos : 300/4, yPos : 252/4, preReqs : [189], nextPerk: -1,
   description : "You've learned to exploit weaknesses in your foes' armor when sneak attacking with daggers, bows or swords."},
   //192
  {name : "Anatomical Lore", skill : 15, skillReq : 50,
   xPos : 308/4, yPos : 174/4, preReqs : [191], nextPerk: -1,
   description : "Newfound knowledge of humanoid anatomy allows you to slay almost any human-like creature outright with sneak attacks."},
   //193
  {name : "Advanced Anatomical Lore", skill : 15, skillReq : 75,
   xPos : 260/4, yPos : 134/4, preReqs : [192], nextPerk: -1,
   description : "Your vast knowledge of anatomy allows you to perform devastating sneak attacks on almost any target."},
   //194
  {name : "Muffled Movement", skill : 15, skillReq : 25,
   xPos : 86/4, yPos : 245/4, preReqs : [189], nextPerk: -1,
   description : "Your newfound finesse allows you to move more quietly while not wearing any heavy armor."},
   //195
  {name : "Light Steps", skill : 15, skillReq : 50,
   xPos : 129/4, yPos : 147/4, preReqs : [194], nextPerk: -1,
   description : "By distributing your weight more consciously, you're able to avoid triggering pressure plates or similar mechanisms."},
   //196
  {name : "Acrobatics", skill : 15, skillReq : 75,
   xPos : 227/4, yPos : 79/4, preReqs : [195], nextPerk: -1,
   description : "Your improved balance allows you to silently roll forward, avoid getting knocked down except through magic and move even more quietly."},
   //197
  {name : "Shadowrunner", skill : 15, skillReq : 100,
   xPos : 324/4, yPos : 45/4, preReqs : [196], nextPerk: -1,
   description : "There's almost nothing you cannot evade. You are even harder to detect, more silent and all falling damage is decreased."},
   //198
  {name : "Haggling", skill : 16, skillReq : 0,
   xPos : 118/4, yPos : 335/4, preReqs : [], nextPerk: -1,
   description : "You've learned how to deal with Skyrim's greedy merchants and how to haggle for better prices."},
   //199
  {name : "Merchant", skill : 16, skillReq : 50,
   xPos : 98/4, yPos : 271/4, preReqs : [198], nextPerk: -1,
   description : "Your trading skills are good enough to sell almost anything to any merchant willing to trade with you, and you can invest some of your gold with a shopkeeper to increase his available gold permanently."},
   //200
  {name : "Fencing", skill : 16, skillReq : 100,
   xPos : 141/4, yPos : 246/4, preReqs : [199], nextPerk: -1,
   description : "You've become so persuasive that you could make almost anyone believe that your goods are of a legal origin."},
   //201
  {name : "Silver Tongue", skill : 16, skillReq : 25,
   xPos : 48/4, yPos : 333/4, preReqs : [198], nextPerk: -1,
   description : "You've spent quite some time improving your rhetorical skills and are now able to greatly influence any conversation and to fascinate the opposite gender. You also get better offers at respective vendors."},
   //202
  {name : "Leadership", skill : 16, skillReq : 75,
   xPos : 118/4, yPos : 174/4, preReqs : [201], nextPerk: -1,
   description : "Your rhetorical skill makes you the perfect leader. By inspiring all those who fight by your side, you encourage your followers to always push their abilities to their very limits."},
   //203
  {name : "Masquerade", skill : 16, skillReq : 50,
   xPos : 102/4, yPos : 93/4, preReqs : [201], nextPerk: 204,
   description : "You've become proficient at acting, and with the right equipment you can now disguise yourself, although sometimes people can still tell that you are not truly one of them."},
   //204
  {name : "Masquerade", skill : 16, skillReq : 100,
   xPos : 102/4, yPos : 93/4, preReqs : [203], nextPerk: -1,
   description : "There is no role you cannot play, and your acting is so believable that there is almost no way for others to see through your disguises."},
   //205
  {name : "Lore of the Thu'um", skill : 16, skillReq : 0,
   xPos : 340/4, yPos : 338/4, preReqs : [], nextPerk: -1,
   description : "You've been studying the lore and ancient script of dragons and the Thu'um. Thus, you can shout more often."},
   //206
  {name : "Destructive Urge", skill : 16, skillReq : 0,
   xPos : 250/4, yPos : 320/4, preReqs : [205], nextPerk: -1,
   description : "The horrors that the Thu'um can inflict are etched into your mind just as you have seen them etched into stone. Your Thu'um will wreak even greater havoc among your unfortunate foes."},
   //207
  {name : "Indomitable<br>Force", skill : 16, skillReq : 0,
   xPos : 265/4, yPos : 251/4, preReqs : [205], nextPerk: -1,
   description : "You know what it means to be called Ysmir, Dragon of the North. As you have withstood the test of Thu'um, so you will withstand the Thu'um of others."},
   //208
  {name : "Spiritual<br>Equilibrium", skill : 16, skillReq : 0,
   xPos : 273/4, yPos : 160/4, preReqs : [205], nextPerk: -1,
   description : "You have been guided in meditating on the Thu'um. Now your shouts linger, lasting longer than they did before."},
   //209
  {name : "The Way of<br>the Voice", skill : 16, skillReq : 0,
   xPos : 296/4, yPos : 96/4, preReqs : [205], nextPerk: -1,
   description : "You've meditated thoroughly, and acquired vast insights into the Way of the Voice. Thus, you can call upon the power of your Thu'um rapidly once each day."},
   //210
  {name : "Tongue's<br>Insight", skill : 16, skillReq : 0,
   xPos : 349/4, yPos : 71/4, preReqs : [205], nextPerk: -1,
   description : "You've spent time meditating on the Way of the Voice, unearthing more knowledge and gaining valuable insights. Thus, you can harness the might of yet another word of power."},
   //211
  {name : "Great Weapon Mastery", skill : 17, skillReq : 0,
   xPos : 192/4, yPos : 362/4, preReqs : [], nextPerk: 212,
   description : "Your improved fighting techniques increase your damage dealt with two-handed weapons. [damage x 1.2, -50% weapon weight penalties]"},
   //212
  {name : "Great Weapon Mastery", skill : 17, skillReq : 0,
   xPos : 192/4, yPos : 362/4, preReqs : [211], nextPerk: -1,
   description : "Your improved fighting techniques increase your damage dealt with two-handed weapons even more. [damage x 1.4, -50% weapon weight penalties]"},
   //213
  {name : "Barbaric Might", skill : 17, skillReq : 20,
   xPos : 195/4, yPos : 275/4, preReqs : [211], nextPerk: -1,
   description : "Your power attacks become mighty blows that will penetrate armor and are less tiring. [-50% power attack stamina cost, +5 armor penetration]"},
   //214
  {name : "Battle Axe Focus", skill : 17, skillReq : 25,
   xPos : 100/4, yPos : 232/4, preReqs : [213], nextPerk: 215,
   description : "You've become familiar with battle axes, thereby increasing their damage and armor penetration. [damage x 1.05, +10 armor penetration]"},
   //215
  {name : "Battle Axe Focus", skill : 17, skillReq : 50,
   xPos : 100/4, yPos : 232/4, preReqs : [214], nextPerk: 216,
   description : "You've become an advanced battle axe fighter, further increasing their damage and armor penetration. [damage x 1.15, +20 armor penetration]"},
   //216
  {name : "Battle Axe Focus", skill : 17, skillReq : 75,
   xPos : 100/4, yPos : 232/4, preReqs : [215], nextPerk: -1,
   description : "You've become a master of battle axe combat, allowing you to perform devastating attacks with them. [damage x 1.3, +30 armor penetration]"},
   //217
  {name : "Greatsword Focus", skill : 17, skillReq : 25,
   xPos : 280/4, yPos : 230/4, preReqs : [213], nextPerk: 218,
   description : "You've learned the basics of greatsword combat, allowing you to increase your attack rate with them slightly. [+10% attack speed with greatswords, +7 armor penetration]"},
   //218
  {name : "Greatsword Focus", skill : 17, skillReq : 50,
   xPos : 280/4, yPos : 230/4, preReqs : [217], nextPerk: 219,
   description : "You've acquired the advanced techniques of greatsword combat, further increasing your attack rate with them. [+20% attack speed with greatswords, +14 armor penetration]"},
   //219
  {name : "Greatsword Focus", skill : 17, skillReq : 75,
   xPos : 280/4, yPos : 230/4, preReqs : [218], nextPerk: -1,
   description : "You're a master of greatsword combat, making your swings even faster. [+30% attack speed with greatswords, +21 armor penetration]"},
   //220
  {name : "Warhammer Focus", skill : 17, skillReq : 25,
   xPos : 306/4, yPos : 260/4, preReqs : [213], nextPerk: 221,
   description : "You've become familiar with warhammers, enabling you to partly use their ability to penetrate your foes' armor. [power attack damage x 1.05, +15 armor penetration]"},
   //221
  {name : "Warhammer Focus", skill : 17, skillReq : 50,
   xPos : 306/4, yPos : 260/4, preReqs : [220], nextPerk: 222,
   description : "You've become an advanced warhammer fighter, further increasing your ability to penetrate armor with them. [power attack damage x 1.1, +30 armor penetration]"},
   //222
  {name : "Warhammer Focus", skill : 17, skillReq : 75,
   xPos : 306/4, yPos : 260/4, preReqs : [221], nextPerk: -1,
   description : "You've become a masterly warhammer fighter, rendering armor almost useless. [power attack damage x 1.15, +45 armor penetration]"},
   //223
  {name : "Devastating Charge", skill : 17, skillReq : 50,
   xPos : 140/4, yPos : 183/4, preReqs : [213], nextPerk: -1,
   description : "You've learned to perform a leaping power attack while sprinting, reducing your enemies to smithereens. [unlocks sprinting power attack, -25% weapon weight penalties]"},
   //224
  {name : "Devastating Strike", skill : 17, skillReq : 50,
   xPos : 260/4, yPos : 183/4, preReqs : [213], nextPerk: -1,
   description : "Your two-handed combat style has improved so much that all power attacks have become devastating. [power attack damage x 1.25]"},
   //225
  {name : "Cleave", skill : 17, skillReq : 75,
   xPos : 205/4, yPos : 91/4, preReqs : [223,224], nextPerk: -1,
   description : "Your power attacks are truly devastating and you can cut down multiple foes with a single sweeping blow. [sideways power attack can hit multiple targets]"},
   //226
  {name : "Devastating Cleave", skill : 17, skillReq : 100,
   xPos : 205/4, yPos : 50/4, preReqs : [225], nextPerk: -1,
   description : "Putting your whole weight behind your swing, your sidewards power attacks are now powerful enough to knock down foes. [sideways power attacks can knock down]"},
   //227
  {name : "Mighty Strike", skill : 17, skillReq : 100,
   xPos : 205/4, yPos : 10/4, preReqs : [226], nextPerk: -1,
   description : "You can kill almost any foe with a single strike of your two-hander, as your blows even fell giants with ease. [damage x 1.25]"},
   
]
};

addPerkData(requiem402PerkData);

/*
*
*
* Requiem with Fozar's DB Patch
*
*/
const requiem402WithFozarsPerkData = deepmerge({},requiem402PerkData);
requiem402WithFozarsPerkData.name = "Requiem 4.0.2 - 5.45 + Fozar's DB patch";
requiem402WithFozarsPerkData.id = 1;

//Add new smithing perks
requiem402WithFozarsPerkData.perks.push(
  //228
  {name : "Stalhrim Smithing", skill : 14, skillReq : 85,
   xPos : 251/5, yPos : 45/3.5, preReqs : [-186,-183], nextPerk: -1,
   description : "Around the world, only a few know the secret of properly processing enchanted ice, but you were lucky, for the help you provided to Skaals, they agreed to share their secrets."}
);

requiem402WithFozarsPerkData.perks.push(
  //229
  {name : "Morrowind<br>Smithing", skill : 14, skillReq : 25,
   xPos : 303/5, yPos : 109/3.5, preReqs : [177], nextPerk: 230,
   description : "As a rule, Dunmer are masters of the processing of bone of the fauna of Morrowind, but you have mastered their knowledge with the help of this compendium written by the famous blacksmith of Morrowind."}
);

requiem402WithFozarsPerkData.perks.push(
  //230
  {name : "Morrowind<br>Smithing", skill : 14, skillReq : 50,
   xPos : 303/5, yPos : 109/3.5, preReqs : [229], nextPerk: -1,
   description : "You have honed your bone processing skills and are now able to work with such complex material as chitin. Having read the compendium to the holes, you have become a master of this technology."}
);

requiem402WithFozarsPerkData.perks.push(
  //231
  {name : "Nordic<br>Smithing", skill : 14, skillReq : 55,
   xPos : 460/5, yPos : 183/3.5, preReqs : [184], nextPerk: -1,
   description : "The key mixture found in Nordic equipment is the blend of Quicksilver and Ebony ore. The combination creates some of the hardest alloys on Nirn."}
);
//Fozar's also changes some pre-requisites for other smithing perks.
requiem402WithFozarsPerkData.perks[186].preReqs = [-185,-231];
requiem402WithFozarsPerkData.perks[183].preReqs = [-182,-230];
requiem402WithFozarsPerkData.perks[185].preReqs = [184,229];

addPerkData(requiem402WithFozarsPerkData);

/*
*
*
* FTweaks 1.7 (and probably earlier)
*
*
*/
const fTweaks17PerkData = deepmerge({},requiem402WithFozarsPerkData);
fTweaks17PerkData.name = "FTweaks 1.7";
fTweaks17PerkData.id = 2;
//Basic description/requirement changes.
fTweaks17PerkData.perks[1].description = "You now can craft alchemistic powders at a smelter. In addition, your sensory organs have become very keen. Thus, you determine most of the alchemical properties of consumed ingredients. Your created potions are 50% more potent [overrides Alchemical Lore 1]";
fTweaks17PerkData.perks[1].skillReq = 50;
fTweaks17PerkData.perks[2].description = "Having refined your brewing process, you are now able to improve the effects of all your beneficial elixirs by 10%, and your health/stamina/magicka-restoring potions by a further 10%.";
fTweaks17PerkData.perks[3].skillReq = 35;
fTweaks17PerkData.perks[5].skillReq = 65;
fTweaks17PerkData.perks[6].description = "You've started experimenting with a catalyst that increases the yield of the brewing process roughly one fifth of the time.";
fTweaks17PerkData.perks[7].description = "You've improved the catalyst. Thereby, you can craft double the amount of <br> mixtures with the same amount of ingredients on third of the time.";
fTweaks17PerkData.perks[8].description = "You have learned to fully extract the most vile parts of your ingredients. <br> Thus, you are able to make your poisons 15% more potent.";
fTweaks17PerkData.perks[10].description = "Having ingested a preparation of troll fat and mammoth heart fermented in Strange Remains, you've become more resilient to harm and your body can excrete toxic waste products more efficiently.";
fTweaks17PerkData.perks[10].skillReq = 80;
fTweaks17PerkData.perks[12].description = "You've found a method to eliminate disadvantages from your mixtures while making them even more potent. All created potions are 10% more potent, while all beneficial potions are a further 5% more potent. Lastly, health/magicka/stamina-restoring potions are a further 5% more potent.";
fTweaks17PerkData.perks[21].description = "You've mastered the art of casting armor spells. So long as the weight of all items you have equipped is less than 20, all mage armor spells will be more effective.";
fTweaks17PerkData.perks[22].description = "Your Mage Armor spells are able to block a part of a dangerous spell's effect.";
fTweaks17PerkData.perks[23].description = "Your Mage Armor spells are able to block more of a dangerous spell's effect.";
fTweaks17PerkData.perks[24].description = "Your Mage Armor spells are able to block even more of a dangerous spell's effect.";
fTweaks17PerkData.perks[28].description = "You strengthened your shield arm and trained to parry blows a little. Thus you can block somewhat better and protect yourself a bit more from offensive magic with your shield.";
fTweaks17PerkData.perks[29].description = "With weapon or shield you can block almost any blow with rock-solid confidence. Additionally, when blocking a hit you feel the adrenaline rushing through your veins, recovering a small amount of stamina. You are also able to block a bit more offensive magic with your shield.";
fTweaks17PerkData.perks[29].skillReq = 45;
fTweaks17PerkData.perks[30].description = "You hold on to your shield like you would hold on to your life. Blocking is even more effective and your equipped shield weighs less. Your shield is also able to block a bit more of offensive magic.";
fTweaks17PerkData.perks[31].skillReq = 60;
fTweaks17PerkData.perks[31].description = "You've perfected the art of blocking spells and take even less damage from them while blocking. You've even learned to deflect spells with your weapon a bit, though a shield is still much more effective for such a task.";
fTweaks17PerkData.perks[42].skillReq = 30;
fTweaks17PerkData.perks[42].description = "You've become very skilled in binding weapon-shaped daedra from Oblivion. Thereby, bound weapons are stronger and much longer-lasting.";
fTweaks17PerkData.perks[43].description = "The weapon-shaped Daedra you conjure now directly cut into their victims' souls, thereby making targets vulnerable to soul gems and suffer irresistible damage.";
fTweaks17PerkData.perks[44].skillReq = 70;
fTweaks17PerkData.perks[44].description = "Your bound weapons are now able to send summoned creatures back into the waters of Oblivion and turn the undead.";
fTweaks17PerkData.perks[45].skillReq = 90;
fTweaks17PerkData.perks[45].description = "You've perfected your invocations of summoning weapon-shaped daedra. They now bypass an additional third of foes' armor values.";
fTweaks17PerkData.perks[48].skillReq = 90;
fTweaks17PerkData.perks[57].description = "You now are able to intensify the heat of your fire spells. Thus, they now deal increased damage. In addition, you will no longer suffer a damage penalty on all fire spells.";
fTweaks17PerkData.perks[58].skillReq = 60;
fTweaks17PerkData.perks[61].description = "You now are able to improve your ice spells and thereby increase their effectiveness. In addition, you will no longer suffer a damage penalty on all frost spells.";
fTweaks17PerkData.perks[62].skillReq = 60;
fTweaks17PerkData.perks[65].description = "You can now energize your lightning spells more effectively, causing them to deal more damage. In addition, you will no longer suffer a damage penalty on all shock spells.";
fTweaks17PerkData.perks[66].skillReq = 60;
fTweaks17PerkData.perks[78].description = "You've learned how to draw more energy from soul gems (especially smaller ones) and are now able to craft them at a smelter by transmuting and melting certain minerals.";
fTweaks17PerkData.perks[84].description = "You've found a way to bind even more energy into inanimate matter. Thus, you can bend the Law of Firsts to an extent and even create Daedric staves, while your enchantments are even stronger still. Additionally, all enchanted items also consume less energy.";
fTweaks17PerkData.perks[85].description = "After some training you are now much more confident in your evasive movements. Your light armor and clothes will now hinder your movements less and you take less damage from falling. You burn slightly less stamina from actions when not wearing a heavy cuirass.";
fTweaks17PerkData.perks[86].description = "Your trained reflexes allow you to dodge incoming blows when not wearing a heavy cuirass. By sprinting a step or two away, you can attempt to dodge hostile attacks."
fTweaks17PerkData.perks[87].description = "You inflict increased damage with all your power attacks while not wearing a heavy cuirass, for you're able to hit more precisely.";
fTweaks17PerkData.perks[88].description = "You are able to balance your weapon better. Thus, you can decrease the effort to execute power attacks when not wearing a heavy cuirass.";
fTweaks17PerkData.perks[90].description = "Your light armor and clothes have become your second skin. When not wearing a heavy cuirass, you can even run in them without becoming exhausted, recover faster from exhaustion, and even run faster.";
fTweaks17PerkData.perks[91].description = "You deal more damage with melee weapons while you are running, for you have learned to flank your enemies with ease when not wearing a heavy cuirass. Furthermore, your reflexes will never betray you when an enemy attempts a lethal strike.";
fTweaks17PerkData.perks[92].description = "You've gained the ability to act faster in combat, though doing so will quickly exhaust you.";

fTweaks17PerkData.perks[93].description = "Your reflexes are lightning fast and grant you a chance to decrease the damage of incoming melee attacks by half while not wearing a heavy cuirass.";
fTweaks17PerkData.perks[96].skillReq = 15;
fTweaks17PerkData.perks[97].skillReq = 40;
fTweaks17PerkData.perks[98].skillReq = 65;
fTweaks17PerkData.perks[99].skillReq = 95;
fTweaks17PerkData.perks[101].skillReq = 55;
fTweaks17PerkData.perks[102].skillReq = 80;
fTweaks17PerkData.perks[102].description = "Your use of heavy armor has emboldened you, allowing you to regenerate stamina more quickly while wearing heavy armor. Furthermore, you learned some new tricks to overcome the mobility limitations of your armor.";
fTweaks17PerkData.perks[123].description = "After some training at the shooting range you can deal more damage with bows and crossbows. [bow and crossbow damage x 1.2, -50% weapon weight penalties, ammunition grants extra expertise, 30% less stamina drain for bows]";
fTweaks17PerkData.perks[134].name = "Boxing";
fTweaks17PerkData.perks[134].description = "You're a passionate fist fighter, and train regularly to toughen your muscles to their very limits. Your punches now deliver 30 more damage points and cost 3 times less stamina.";
fTweaks17PerkData.perks[155].description = "You've become very skilled in wielding two weapons at once. [dual-wield power attack damage x 1.25, dual power attack cost x 0.5]";
fTweaks17PerkData.perks[163].name = "Redemption";
fTweaks17PerkData.perks[163].description = "You regret your past and vow to change yourself from here on out. You regain favor to some degree. (Cures Skooma Addiction and Resets Murders, Bounty, Thefts, but not divine-specific mandates or guild membership)";
fTweaks17PerkData.perks[170].description = "You've learned to focus your mind. Thus, you can keep your concentration even in stressful situations and regenerate your magicka 35% faster.";
fTweaks17PerkData.perks[171].name = "Enhanced Magicka";
fTweaks17PerkData.perks[171].description = "You have learned to focus yourself intensely, allowing you to access a greater amount of Magicka and lose less when struck in combat. Increases Magicka by 30 points.";
fTweaks17PerkData.perks[172].name = "Power of Life";
fTweaks17PerkData.perks[172].description = "Through your deep understanding of healing and life energies, you have developed an exceptionally efficient healing spell.";
fTweaks17PerkData.perks[173].name = "Ward Mastery";
fTweaks17PerkData.perks[173].preReqs = [167];
fTweaks17PerkData.perks[173].xPos = 250/4;
fTweaks17PerkData.perks[173].yPos = 120/4;
fTweaks17PerkData.perks[173].description = "Having learned all common ward spells, your mastery of wards is now complete. All ward spells absorb magicka from incoming spells and are easier to cast. Additionally, you have developed a new and especially powerful ward spell.";
//Skip smithing now because it's a whole deal;
fTweaks17PerkData.perks[190].description = "You are even harder to detect when sneaking even when wearing heavy armor.";
fTweaks17PerkData.perks[194].description = "Your newfound finesse allows you to move more quietly.";
fTweaks17PerkData.perks[211].description = "Your improved fighting techniques increase your damage dealt with two-handed weapons. [damage x 1.15, -50% weapon weight penalties]";
fTweaks17PerkData.perks[212].description = "Your improved fighting techniques increase your damage dealt with two-handed weapons even more. [damage x 1.3, -50% weapon weight penalties]";
fTweaks17PerkData.perks[223].skillReq = 75;
fTweaks17PerkData.perks[223].preReqs = [225,224];
fTweaks17PerkData.perks[223].xPos = 205/4; fTweaks17PerkData.perks[223].yPos = 91/4;
fTweaks17PerkData.perks[224].description = "Your two-handed combat style has improved so much that all power attacks have become devastating. [power attack damage x 1.2]";
fTweaks17PerkData.perks[225].skillReq = 50;
fTweaks17PerkData.perks[225].preReqs = [213];
fTweaks17PerkData.perks[225].xPos = 140/4; fTweaks17PerkData.perks[225].yPos = 183/4;
fTweaks17PerkData.perks[226].preReqs = [223];
//Next add the new perks from FTweaks
fTweaks17PerkData.perks.push(
  //232
  {name : "Toxin<br>Nullification", skill : 7, skillReq : 25,
   xPos : 160/4, yPos : 240/4.5, preReqs : [96], nextPerk: -1,
   description : "For each piece of heavy armor worn, you can further withstand poison by 5%, and by an extra 10% if a full suit is donned."}
);
fTweaks17PerkData.perks.push(
  //233
  {name : "Environmental<br>Nullification", skill : 7, skillReq : 50,
   xPos : 160/4, yPos : 170/4.5, preReqs : [232,97], nextPerk: -1,
   description : "For each piece of heavy armor worn, you can further withstand elemental attacks by 2.5%, and by an extra 5% if a full suit is donned."}
);
fTweaks17PerkData.perks.push(
  //234
  {name : "Magic<br>Nullification", skill : 7, skillReq : 75,
   xPos : 160/4, yPos : 85/4.5, preReqs : [233,98], nextPerk: -1,
   description : "For each piece of heavy armor worn, you can further withstand magical attacks by 2.5%, and by an extra 5% if a full suit is donned."}
);
//3Tweaks removes the second rank of Morrowind Smithing and adds Esoteric Magic
fTweaks17PerkData.perks[230] = {name : "Esoteric<br>Magic", skill : 4, skillReq : 45,
   xPos : 100/4, yPos : 270/4, preReqs : [56], nextPerk: -1,
   description : "You have studied the stranger aspects of the Destruction school. Therefore, you no longer suffer a penalty when casting non-elemental spells."};
//Now re-vamp the smithing tree.
fTweaks17PerkData.perks[229] = {name : "Morrowind<br>Smithing", skill : 14, skillReq : 60,
   xPos : 40/5, yPos : 157/3.5, preReqs : [177], nextPerk: -1,
   description : "Thanks to your studies of Dunmeri craftsmanship, you have gained the skills necessary to create armors in the Morrowind style out of materials such as chitin or bone."};
fTweaks17PerkData.perks[182] = {name : "Elven<br>Smithing", skill : 14, skillReq : 50,
   xPos : 100/5, yPos : 180/3.5, preReqs : [177], nextPerk: -1,
   description : "You've gained enough finesse to create and improve Elven armor and weapons by studying the Elven craftmanship carefully."};
 //Advanced Light Armors
 fTweaks17PerkData.perks[181].xPos = 175/5; fTweaks17PerkData.perks[181].yPos = 214/3.5;
 //Glass Smithing
 fTweaks17PerkData.perks[183].preReqs = [-181,-182,-229];
 fTweaks17PerkData.perks[183].description = "Crafting and improving Glass equipment is not for the unskilled, but having studied intensely, you have overcome that challenge.";
 //Move some perks in the middle up
 fTweaks17PerkData.perks[178].yPos = 153 / 3.5;
 fTweaks17PerkData.perks[179].yPos = 110 / 3.5;
 fTweaks17PerkData.perks[180].yPos = 110 / 3.5;
 fTweaks17PerkData.perks[185] = {name : "Orcish<br>Smithing", skill : 14, skillReq : 35,
   xPos : 320/5, yPos : 214/3.5, preReqs : [177], nextPerk: -1,
   description : "Orcish equipment is hard to craft, but you've got what it takes. With the schematics, you can now craft and improve it easily and efficiently."};
 //Dwarven Smithing
 fTweaks17PerkData.perks[184].skillReq = 60;
 fTweaks17PerkData.perks[184].xPos = 400/5; fTweaks17PerkData.perks[184].yPos = 170/3.5;
 fTweaks17PerkData.perks[231] = {name : "Nordic<br>Smithing", skill : 14, skillReq : 55,
   xPos : 470/5, yPos : 153/3.5, preReqs : [177], nextPerk: -1,
   description : "You have become skilled at quicksilver-steel alloying.  Therefore, you can now forge Nordic armor and weapons."};
 fTweaks17PerkData.perks[186].preReqs = [-231,-185,-184];

addPerkData(fTweaks17PerkData);

/*
*
* Requiem 6.0
* Some of these changes came from earlier verison but I cannot
* be bothered to add more changes just for that.
*
*/
const requiem60PerkData = deepmerge({},requiem402PerkData);
requiem60PerkData.name = "Requiem 6.0 and Up";
requiem60PerkData.id = 3;

// Block perks are more informative
// Improved Blocking
requiem60PerkData.perks[28].description = "You strengthened your shield arm and trained to parry blows a little. [Block 25% more damage]"
// Experienced Blocking
requiem60PerkData.perks[29].description = "With weapon or shield you can block almost any blow with rock-solid confidence.<br>[Block 50% more damage, recover some stamina when blocking a hit]"
// Strong Grip
requiem60PerkData.perks[30].description = "You hold on to your shield like you would hold on to your life. [75% less shield weight, 10% more armor rating, block 40% more damage, arrows that hit the shield do no damage]"
// Elemental Protection
requiem60PerkData.perks[31].description = "You've learned how to block damaging spells. [Take 50% less fire, frost, and shock damage when blocking with a shield]"
// Defensive Stance
requiem60PerkData.perks[32].description = "You have honed your defensive movements to perfection. [Blocking with a shield does not slow you down]"
// Powerful Bashes
requiem60PerkData.perks[33].description = "By gathering your strength for a short while, you can perform a much more powerful bash. [Able to do a power bash]"
// Overpowering Bashes
requiem60PerkData.perks[34].description = "When you put all of your power into your shield bashes, you will often overpower your foes. [Power bashing with a shield can knock down]"
// Disarming Bash
requiem60PerkData.perks[35].description = "Sometimes, when you put all your strength into your bashes, your foes drop their weapon because of the pain. [25% chance to disarm when power bashing with a shield, 5% chance to disarm when power bashing with a weapon]"
// Unstoppable Charge
requiem60PerkData.perks[36].description = "When bull rushing with your shield raised, you are a tremendous force to deal with. [Sprinting with a shield raised knocks down most targets]"

// Evasion perks too
// Agility
requiem60PerkData.perks[85].description = "After some training you are now much more confident in your evasive movements. [25% less falling damage when wearing no heavy armor, unique bonus when wearing high-quality materials, -50% armor weight penalty]"
// Dodge
requiem60PerkData.perks[86].description = "Your trained reflexes allow you to dodge incoming blows when wearing no heavy armor. [By sprinting a step or two away, you can attempt to dodge hostile attacks]"
// Finesse
requiem60PerkData.perks[87].description = "You are able to hit more precisely. [Up to 12% more power attack damage when wearing no heavy armor: head, chest, hands, feet]"
// Dexterity
requiem60PerkData.perks[88].description = "You are able to balance your weapon better. [Up to 24% less power attack stamina cost when wearing no heavy armor: head, chest, hands, feet]"
// Agile Spellcasting has new requirements + description
requiem60PerkData.perks[89].skillReq = 30;
requiem60PerkData.perks[89].preReqs = [85]
requiem60PerkData.perks[89].description = "You learned how to avoid the limitations light armors bestow upon somatic spell components. [No spell cost penalty for casting spells in light armor]"
// Windrunner -> Wind Walker
requiem60PerkData.perks[90].name = "Wind Walker"
requiem60PerkData.perks[90].description = "Your light armor and clothes have become your second skin. [Up to +10% movement speed when wearing no heavy armor: head, chest, hands, feet, -25% armor weight penalty]"
// Vexing Flanker
requiem60PerkData.perks[91].description = "You have learned to flank your enemies with ease. [Up to 16% more melee attack damage when running and wearing no heavy armor: head, chest, hands, feet, immune to finishers]"
// Combat Reflexes
requiem60PerkData.perks[92].description = "You've gained the ability to act faster in combat, though doing so will quickly exhaust you. [Lesser power: Slow time by 50% for 30 seconds, drains 5 stamina per second]"
// Meteoric Reflexes
requiem60PerkData.perks[93].description = "Your reflexes are lightning fast. [50% chance to take 95% less melee damage when wearing no heavy armor: head, chest, hands, feet]"

// Heavy Armor too
// Conditioning
requiem60PerkData.perks[94].description = "You've accustomed yourself to using heavy armor. [No stamina drain for wearing heavy armor, unique bonus when wearing high-quality materials, -35% armor weight penalty]"
// Relentless Onslaught
requiem60PerkData.perks[95].description = "After extensive training you now can sprint in heavy armor without problems. [no sprinting stamina cost penalty, take 80% less melee damage when bullrushing, -10% armor weight penalty]"
// Combat Casting
requiem60PerkData.perks[96].description = "You are able to keep concentrated enough in heavy armor. [No spell cost penalty for casting Novice and Apprentice spells in heavy armor]"
// Combat Trance
requiem60PerkData.perks[97].description = "Your heavy armor distracts you even less. [No spell cost penalty for casting Adept spells in heavy armor]"
// Combat Meditation
requiem60PerkData.perks[98].description = "You're accustomed to your heavy armor so much that you can now cast even sophisticated spells with relative ease. [No spell cost penalty for casting Expert spells in heavy armor]"
// Battle Mage
requiem60PerkData.perks[99].description = "You have mastered spellcasting while wearing heavy armor. [No spell cost penalty for casting Master spells in heavy armor, 15% less spell cost when wearing all heavy armor: head, chest, hands, feet]"
// Combat Training 
requiem60PerkData.perks[100].description = "You are less hindered by your armor and can attack with ease. [No power attack stamina cost penalty, increased unarmed damage with heavy gauntlets, -10% armor weight penalty]"
// Fortitude
requiem60PerkData.perks[101].description = "Your training made you stronger and you are now less burdened by the rigidity of your armor. [+40 stamina, +20 carry weight, -10% armor weight penalty]"
// Power of the Combatant
requiem60PerkData.perks[102].description = "Once a day, you can now push yourself to continue fighting. [Daily power: Restore 25 stamina per second for 30 seconds, -10% armor weight penalty]"
// Juggernaut
requiem60PerkData.perks[103].description = "You've reached perfection in the skill of wearing heavy armor and are now significantly more maneuverable in it. [15% less armor weight, 10% more armor rating, 90% less stagger when wearing all heavy armor: head, chest, hands, feet]"

// Lockpicking was revamped ( all 4 perks of it ) and got a new perk
// Cheap Tricks
requiem60PerkData.perks[119].description = "You have learned the basics of the art of picking locks. [+3 lockpicking expertise, forge lockpicks with Craftsmanship]"
// Locksmithing Lore -> Advanced Lockpicking
requiem60PerkData.perks[120].name = "Advanced Lockpicking"
requiem60PerkData.perks[120].description = "You have extended your repertoire of lockpicking tricks. [+2 Lockpicking Expertise]"
requiem60PerkData.perks[120].skillReq = 30
//Move this and Treaure Hunter down as well to make room
requiem60PerkData.perks[120].xPos = 200/4
requiem60PerkData.perks[120].yPos = 250/4
// Treasure Hunter
requiem60PerkData.perks[121].description = "You are able to locate secret spaces in containers when you search them. [15% chance to find special loot in select chests, 1-4 precious stones in select chests]"
//Move this and Treaure Hunter down as well to make room
requiem60PerkData.perks[121].xPos = 60/4
requiem60PerkData.perks[121].yPos = 175/4
// New perk !!!
 // 228: Sophisticated Lockpicking
requiem60PerkData.perks.push(
  {name : "Sophisticated Lockpicking", skill : 9, skillReq : 60,
   xPos : 275/4, yPos : 150/4.5, preReqs : [120], nextPerk: -1,
   description : "You have memorized the inner mechanics of sophisticated locks and security systems. [+2 Lockpicking Expertise]"}
)
// Mastery Lockpicking
requiem60PerkData.perks[122].description = "You learned everything there is to know about the art of lockpicking. [+2 Lockpicking Expertise]"
requiem60PerkData.perks[122].preReqs = [228]

// Marksman description changes
// Ranged Combat Training
requiem60PerkData.perks[123].description = "After some training at the shooting range you can deal more damage with bows and crossbows. [20% more damage, ammunition grants armor penetration]"
// Ranger
requiem60PerkData.perks[124].description = "You improved your footwork when engaging in ranged combat with light weapons. [Able to run with a drawn light bow or crossbow]"
// Marksman's Focus
requiem60PerkData.perks[126].description = "When fully focusing on your target, everything around you seems to slow down remarkably. [Time slows down while zooming]"
// Rapid Reload
requiem60PerkData.perks[127].description = "Your have familiarized yourself with the mechanics of your crossbow. [+50% reload speed with crossbows]"
// Quick Shot
requiem60PerkData.perks[128].description = "You have learned to draw and fire in one single movement. [+50% draw speed with bows]"
// Power Shot
requiem60PerkData.perks[129].description = "You have discovered the art of aiming at tendons and joints.<br>[Chance to stagger targets]"
// Precise Aim
requiem60PerkData.perks[130].description = "Your aim is now precise enough to target weak spots in the enemy's defenses. [20% more damage]]"
// Piercing Shot
requiem60PerkData.perks[131].description = "You've learned how to hit the weakest parts of armor. [+50% armor penetration from ammunition]"
// Penetrating Shot
requiem60PerkData.perks[132].description = "You've mastered the technique of hitting weak armor parts. [+50% armor penetration from ammunition]"
// Stunning Precision
requiem60PerkData.perks[133].description = "Any successful staggering shot will almost always stun the target momentarily. [Staggering hits will also stun the target]"

// One Handed description changes
// Martial Arts
requiem60PerkData.perks[134].description = "You are a passionate fist fighter, and train regularly to toughen your muscles to their very limits. [+30 unarmed damage]"
// Weapon Mastery 1
requiem60PerkData.perks[135].description = "Your improved fighting techniques allow you to swing one-handed weapons with less effort and deal more damage. [20% more damage]"
// Weapon Mastery 2
requiem60PerkData.perks[136].description = "Your improved fighting techniques increase your damage dealt with one-handed weapons greatly. [40% more damage]"
// Penetrating Strikes
requiem60PerkData.perks[137].description = "Your power attacks with one-handed weapons are now devastating enough to penetrate enemy armor and less exhausting. [50% less power attack stamina cost, +5% armor penetration]"
// Dagger Focus 1
requiem60PerkData.perks[138].description = "You learned some dirty tricks for your dagger. [25% irresistible sneak attack damage, +10% armor penetration]"
// Dagger Focus 2
requiem60PerkData.perks[139].description = "A dagger in your hand turns into a deadly weapon. [55% irresistible sneak attack damage, +20% armor penetration]"
// Dagger Focus 3
requiem60PerkData.perks[140].description = "You have mastered the deadly art of the dagger.<br>[100% irresistible sneak attack damage, +30% armor penetration]"
// War Axe Focus 1
requiem60PerkData.perks[141].description = "You've become familiar with war axes. [10% more damage, +10% armor penetration]"
// War Axe Focus 2
requiem60PerkData.perks[142].description = "You've become an advanced war axe fighter. [20% more damage, +20% armor penetration]"
// War Axe Focus 3
requiem60PerkData.perks[143].description = "You've become a master of war axe combat. [30% more damage, +30% armor penetration]"
// Mace Focus 1
requiem60PerkData.perks[144].description = "You've learned some techniques to crush armor with maces. [5% more power attack damage, +15% armor penetration]"
// Mace Focus 2
requiem60PerkData.perks[145].description = "You've become an advanced mace fighter and know how to find weak spots in enemy armor. [10% more power attack damage, +30% armor penetration]"
// Mace Focus 3
requiem60PerkData.perks[146].description = "You've become a masterly mace fighter, rendering armor almost useless. [15% more power attack damage, +45% armor penetration]"
// Sword Focus 1
requiem60PerkData.perks[147].description = "You've learned the basics of sword combat. [+8% attack speed, +7% armor penetration]"
// Sword Focus 2
requiem60PerkData.perks[148].description = "You've acquired the advanced techniques of sword combat. [+16% attack speed, +14% armor penetration]"
// Sword Focus 3
requiem60PerkData.perks[149].description = "You've become a master of sword combat. [+24% attack speed, +21% armor penetration]"
// Powerful Strike
requiem60PerkData.perks[150].description = "You know how to put the maximum force into your power attacks. [20% more power attack damage]"
// Powerful Charge
requiem60PerkData.perks[151].description = "You have learned to perform a leaping power attack while sprinting. [Able to do sprinting power attack]"
// Storm of Steel
requiem60PerkData.perks[155].description = "You've become very skilled in wielding two weapons at once. [20% more dual-wield power attack damage]"

// Smithing description changes
requiem60PerkData.perks[181].description = "You've been able to learn more advanced techniques, allowing you to craft and efficiently improve advanced light materials such as scale, netch leather, chitin, bonemold, and chainmail."

// Two-handed changes
// Great Weapon Mastery 1
requiem60PerkData.perks[211].description = "Your improved fighting techniques increase your damage dealt with two-handed weapons. [20% more damage]"
// Great Weapon Mastery 2
requiem60PerkData.perks[212].description = "Your improved fighting techniques increase your damage dealt with two-handed weapons even more. [40% more damage]"
// Barbaric Might
requiem60PerkData.perks[213].description = "Your power attacks become mighty blows that will penetrate armor and are less tiring. [50% less power attack stamina cost, +5% armor penetration]"
//Battle Axe Focus 1
requiem60PerkData.perks[214].description = "You've become familiar with battle axes. [10% more damage, +10% armor penetration]"
//Battle Axe Focus 2
requiem60PerkData.perks[215].description = "You've become an advanced battle axe fighter. [20% more damage, +20% armor penetration]"
//Battle Axe Focus 3
requiem60PerkData.perks[216].description = "You've become a master of battle axe combat. [30% more damage, +30% armor penetration]"
//Greatsword Focus 1
requiem60PerkData.perks[217].description = "You've learned the basics of greatsword combat. [+8% attack speed with greatswords, +7% armor penetration]"
//Greatsword Focus 2
requiem60PerkData.perks[218].description = "You've acquired the advanced techniques of greatsword combat. [+16% attack speed with greatswords, +14% armor penetration]"
//Greatsword Focus 3
requiem60PerkData.perks[219].description = "You've become a master of greatsword combat. [+24% attack speed with greatswords, +21% armor penetration]"
//Warhammer Focus 1
requiem60PerkData.perks[220].description = "You've learned some techniques to crush armor with warhammers. [5% more power attack damage, +15% armor penetration]"
//Warhammer Focus 2
requiem60PerkData.perks[221].description = "You've become an advanced warhammer fighter and know how to find weak spots in enemy armor.<br>[10% more power attack damage, +30% armor penetration]"
//Warhammer Focus 3
requiem60PerkData.perks[222].description = "You've become a masterly warhammer fighter, rendering armor almost useless. [15% more power attack damage, +45% armor penetration]"
// While we're here, add the new Quarterstaff Focus perks
// 229: Quarterstaff Focus 1
requiem60PerkData.perks.push(
  {name : "Quarterstaff Focus", skill : 17, skillReq : 25,
   xPos : 80/4, yPos : 260/4, preReqs : [213], nextPerk: 230,
   description : "You've learned the basics of quarterstaff combat. [+10% attack speed with quarterstaves, +12% armor penetration]"}
)
// 230: Quarterstaff Focus 2
requiem60PerkData.perks.push(
  {name : "Quarterstaff Focus", skill : 17, skillReq : 50,
   xPos : 80/4, yPos : 260/4, preReqs : [229], nextPerk: 231,
   description : "You've acquired the advanced techniques of quarterstaff combat. [+20% attack speed with quarterstaves, +24% armor penetration]"}
)
// 231: Quarterstaff Focus 3
requiem60PerkData.perks.push(
  {name : "Quarterstaff Focus", skill : 17, skillReq : 75,
   xPos : 80/4, yPos : 260/4, preReqs : [230], nextPerk: -1,
   description : "You've become a master of quarterstaff combat. [+30% attack speed with quarterstaves, +36% armor penetration]"}
)
// Devastating Charge
requiem60PerkData.perks[223].description = "You've learned to perform a leaping power attack while sprinting. [Able to do sprinting power attack]]"
// Devastating Strike
requiem60PerkData.perks[224].description = "Your two-handed combat style has improved so much that all power attacks have become devastating. [20% more power attack damage]"
// Mighty Strike
requiem60PerkData.perks[227].description = "You can kill almost any foe with a single strike of your two-hander, as your blows even fell giants with ease. [25% more damage]"

addPerkData(requiem60PerkData)