var perksList = [];
var racesList = [];
var gameMechanicsList = [];
var presetList = [];
var blessingsList = [];
var curPerkList;
var curRaceList;
var curGameMechanics;
var curPreset;
var curBlessingList;
var activeSkill = 0;

var characterData = {
  race: 0, //This is an index into the race data array
  hmsIncreases: [],
  skillLevels: [],
  perksTaken: [],
  oghmaChoice: 0, //0 for nothing, 1 for health, 2 for magicka, 3 for stam
  perkListID: 0,
  raceListID: 0,
  gameMechanicsListID: 0,
  level: 1,
  attrIncreases: 0,
  earnedPerks : 3,
  earnedAttributes: 0,
  spentPerks: 0, //The number of perks actually taken
  standingStone : 0,
  blessing : 0
};

$(document).ready(function(){

  let presetNum = parsePresetFromURL();

  curPreset = presetList[getIndexWithID(presetNum,presetList)];

  curPerkList = perksList[curPreset.perks];
  curRaceList = racesList[curPreset.races];
  curGameMechanics = gameMechanicsList[curPreset.gameMechanics];
  curBlessingList = blessingsList[curPreset.blessings];

  sortDataLists();
  initCharacterData();
  updateCustomSelectOptions();
  updateSkillNames();
  updateSkillLevelsDisplay();
  drawMiniSkillTrees();
  updateActiveSkillPanel();
  updateRaceSelect();
  updateStandingStoneSelect();
  updateBlessingSelect();
  updateAttributeText();
  updateCircleAndLineColors();
  createDerivedAttributesTable();
  updateDerivedAttributes();
  
  attachHandlers();
});

function createDerivedAttributesTable() {
  let theTable = $("#derivedAttributeTable");
  let derAttrData = curGameMechanics.derivedAttributes;
  for(let i = 0; i < derAttrData.attribute.length; i++){
    let theRow = `<div class="derivedAttributeTableRow">`;
    theRow += `<div class="derivedAttributeTableCellLabel" id="derivedAttributeName${i}">`;
    theRow += `${derAttrData.attribute[i]}</div>`;
    theRow += `<div class="derivedAttributeTableCellValue" id="derivedAttributeValue${i}">`;
    theRow += "0</div></div>";
    theTable.append(theRow);
  }
  
}

function parsePresetFromURL(){
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  if(params.has("p")){
    let presetNum = Number(params.get("p"));
    if(isNaN(presetNum) || presetNum < 0 || presetNum > presetList.length){
      presetNum = 0;
    }
    return presetNum;
  }
  else {
    return 0;
  }
  
}

//Sort all of the data lists by name alphabetically
function sortDataLists(){
  perksList.sort(dataArrayCompare);
  racesList.sort(dataArrayCompare);
  gameMechanicsList.sort(dataArrayCompare);
  presetList.sort(dataArrayCompare);
}

//Sort all of the arrays of game data by their names
function dataArrayCompare(a,b){
  return a.name.localeCompare(b.name);
}

//Reset character data completely to a starting state
function initCharacterData(){
  characterData.race = 0;
  characterData.hmsIncreases = [0,0,0];
  characterData.skillLevels = [];
  for(let i = 0; i < 18; i++){
    characterData.skillLevels.push(curRaceList.races[0].startingSkills[i]);
  }
  characterData.perksTaken = [];
  for(let i = 0; i < curPerkList.perks.length; i++){
    characterData.perksTaken.push(false);
  }
  characterData.oghmaChoice = 0;
  characterData.perkListID = 0;
  characterData.raceListID = 0;
  characterData.gameMechanicsListID = 0;
  characterData.level = 1;
  characterData.attrIncreases = 0;
  characterData.earnedPerks = curGameMechanics.initialPerks;
  characterData.spentPerks = 0;
  characterData.standingStone = 0;
  characterData.blessing = 0;
  characterData.earnedAttributes = 0;
}

//Attach all the event handlers to the main UI
function attachHandlers(){
  $(".miniSkillTreeDiv").click(leftSideSkillClick);
  $(window).resize(resizeWindowHandler);
  $("#activeSkillLevelInput").on("change",skillInputChange);
  $("#presetSelect").on("change",presetSelectChange);
  $("#perksSelect").on("change",perkSelectChange);
  $("#raceSelect").on("change",raceSelectChange);
  $("#racesListSelect").on("change",raceListSelectChange);
  $("#blessingsSelect").on("change",blessingListSelectChange);
  $("#mechanicsSelect").on("change",mechanicsListSelectChange);
  $(".customCloseText").click(customClickDivClick);
  $("#resetActiveSkillButton").click(resetActiveSkillButtonClick);
  $("#resetAllSkillsButton").click(resetAllSkillsButtonClick);
  $(".attributeInput").on("keydown input",attributeInputChange);
  $("#oghmaSelect").on("change", oghmaSelectChange);
}

function oghmaSelectChange(){
  updateCharacterLevelAndResults();
  updateAttributeText();
}

function attributeInputChange(){
  
  validateAttributeInput($(this));
  
  //Just be lazy and update them all at the same time.
  characterData.hmsIncreases[0] = Number($("#healthIncreasesInput").val());
  characterData.hmsIncreases[1] = Number($("#magickaIncreasesInput").val());
  characterData.hmsIncreases[2] = Number($("#staminaIncreasesInput").val());
  
  updateAttributeChoiceInputs();
  updateFreeAttributeChoicesDisplay();
  updateAttributeText();
  updateDerivedAttributes();
}

function updateDerivedAttributes(){
  let derAttrData = curGameMechanics.derivedAttributes;
  let baseAttributes = calcBaseAttributes();
  for(let i = 0; i < derAttrData.attribute.length; i++){
    let weightedSum = baseAttributes[0] * derAttrData.weight_health[i];
    weightedSum += baseAttributes[1] * derAttrData.weight_magicka[i];
    weightedSum += baseAttributes[2] * derAttrData.weight_stamina[i];
    
    let bonus = 0;
    if(weightedSum > derAttrData.threshold[i]){
      bonus = derAttrData.prefactor[i] * Math.sqrt(weightedSum - derAttrData.threshold[i]);
      bonus = Math.floor(bonus);
    }
    
    bonus = "+" + bonus;
    
    if(derAttrData.isPercent[i]){
      bonus += "%";
    }
    
    $(`#derivedAttributeValue${i}`).html(bonus);
  }
}

function calcBaseAttributes(){
  let theAnswer = [0,0,0];
  for(let i = 0; i < 3; i++){
    theAnswer[i] = curRaceList.races[characterData.race].startingHMS[i];
    theAnswer[i] += curGameMechanics.leveling.hmsGiven[i] * characterData.hmsIncreases[i];
  }
  return theAnswer;
}

function updateAttributeText(){
  let answers = ["Health: ","Magicka: ","Stamina: "];
  let oghmaVal = Number($("#oghmaSelect").val());
  for(let i = 0; i < 3; i++){
    let baseVal = curRaceList.races[characterData.race].startingHMS[i];
    baseVal += curGameMechanics.leveling.hmsGiven[i] * characterData.hmsIncreases[i];
    
    answers[i] += baseVal;
    
    let bonuses = curRaceList.races[characterData.race].hmsBonus[i];
    if( (oghmaVal - 1) == i){
      bonuses += curGameMechanics.oghmaData.hmsGiven[i];
    }
    if(bonuses > 0){
      answers[i] += ` (+${bonuses})`;
    } 
  }
  
  $("#healthAttributeText").html(answers[0]);
  $("#magickaAttributeText").html(answers[1]);
  $("#staminaAttributeText").html(answers[2]);
}

function validateAttributeInput(theInput){
  let val = Number(theInput.val());
  if(val < 0) val = 0;
  if(val > theInput.attr("max")) val = theInput.attr("max");
  theInput.val(val);
}

function resetActiveSkillButtonClick(){
  resetSkill(activeSkill);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
  updateSkillLevelsDisplay();
}

function resetAllSkillsButtonClick(){
  resetSkill(-1);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
  updateSkillLevelsDisplay();
}

//Remove all perks from the skill and set the skill level back
//to the starting value for the race. Set skillNum to -1 to do this
//for ALL skills. Then update the character level and earned perks.
function resetSkill(skillNum){
  let removeAll = skillNum == -1;
  if(removeAll){
    for(let i = 0; i < 18; i++){
      characterData.skillLevels[i] = 
        curRaceList.races[characterData.race].startingSkills[i];
    }
  }
  characterData.skillLevels[skillNum] = 
    curRaceList.races[characterData.race].startingSkills[skillNum];
    
  for(let i = 0; i < curPerkList.perks.length; i++){
    if( (removeAll || curPerkList.perks[i].skill == skillNum) 
      && characterHasPerk(i) ){
      removePerkAndDependents(i);
    }
  }
  
  updateCharacterLevelAndResults();
}

function customClickDivClick(){
  $("#presetCustomOptionsDiv").toggle();
}

function raceListSelectChange(){
  changeRaceList(Number($(this).val()));
}

function blessingListSelectChange(){
  changeBlessingList(Number($(this).val()));
}

function mechanicsListSelectChange(){
  changeGameMechanics(Number($(this).val()));
}

function changeGameMechanics(gmNum){
  curGameMechanics = gameMechanicsList[getIndexWithID(gmNum,gameMechanicsList)];
  updateCharacterLevelAndResults();
}

function changeRaceList(listNum){
  curRaceList = racesList[getIndexWithID(listNum,racesList)];
  updateRaceSelect();
  changeRace(0,false);
}

function changeBlessingList(listNum){
  curBlessingList = blessingsList[getIndexWithID(listNum,blessingsList)];
  updateBlessingSelect();
}

function raceSelectChange(){
  changeRace(Number($(this).val()));
}

//Change the character's race to the new one with the number given.
//If respectOld is true, the starting skills of the old race will
//be taken into account when determining new skills levels. Otherwise
//just take into account the starting skills of the new race.
function changeRace(newRaceNum,respectOld = true){
  let oldRaceNum = characterData.race;
  let oldRace = curRaceList.races[oldRaceNum];
  let newRace = curRaceList.races[newRaceNum];
  
  //Adjust skills based for the new race.
  //If skills are below the staring value for the new race,
  //bring them up to the new level. If a skill is at the staring
  //value for the old race, set it to the starting value for the
  //new race.
  for(let i = 0; i < 18; i++){
    if(!respectOld || (characterData.skillLevels[i] < newRace.startingSkills[i] || 
       characterData.skillLevels[i] == oldRace.startingSkills[i])){
      characterData.skillLevels[i] = newRace.startingSkills[i];
    }
  }
  
  characterData.race = newRaceNum;
  
  updateCharacterLevelAndResults();
  updateCircleAndLineColors();
  updateSkillLevelsDisplay();
  updateDerivedAttributes();
  $("#activeSkillLevelInput").val(characterData.skillLevels[activeSkill]);
  $("#activeSkillLevelInput").attr("min",newRace.startingSkills[activeSkill]); 
}

function presetSelectChange() {
  let presetIndex = getIndexWithID(Number($(this).val()),presetList);
  let preset = presetList[presetIndex];
  let oldVal = 0;
  
  $("#perksSelect").val(preset.perks);
  
  oldVal = Number($("#racesListSelect").val());
  $("#racesListSelect").val(preset.races);
  if(oldVal != preset.races){
    changeRaceList(preset.races);
  }
  
  oldVal = $("#mechanicsSelect").val();
  $("#mechanicsSelect").val(preset.gameMechanics);
  if(oldVal != preset.gameMechanics){
    changeGameMechanics(preset.gameMechanics);
  }
  
  oldVal = $("#blessingsSelect").val();
  $("#blessingsSelect").val(preset.blessings);
  if(oldVal != preset.blessings){
    changeBlessingList(preset.blessings);
  }
}

function perkSelectChange(){
  //alert("perks changed");
}

function skillInputChange(){
  let value = Number($(this).val());
  let minVal = $(this).attr("min");
  if(value < minVal) value = minVal;
  if(value > 100) value = 100;
  $(this).val(value);
  characterData.skillLevels[activeSkill] = value;
  
  updateCircleAndLineColors();
  
  updateCharacterLevelAndResults();
  updateSkillLevelsDisplay();
}

//Remove perks from the given skill that the character should no longer have
//because the skill level is now too low.
//Returns true if a perk was removed and we need to redraw
//the active skill display.
//If input skillNum = -1, check all skills.
function removeInvalidPerks(skillNum){
  let answer = false;
  let skillLev = characterData.skillLevels[skillNum];
  let checkAll = skillNum == -1;
  
  for(let i = 0; i < curPerkList.perks.length; i++){
    if( (curPerkList.perks[i].skill != skillNum && !checkAll) || !characterHasPerk(i)){
          continue;
    }
    if(skillLev < curPerkList.perks[i].skillReq){
      removePerkAndDependents(i);
      answer = true;
    }
  }
  
  return answer;
}

function attachActiveSkillHandlers(){
  $(".activeSkillCircle").hover(activeSkillPerkHoverEnter,activeSkillPerkHoverLeave);
  $(".activeSkillCircle").mousedown(activeSkillPerkClick);
}

function activeSkillPerkClick(event){
  $("body").addClass("unselectable");
  
  let perkNum = Number($(this).attr("data-perknum"));
  
  if(event.button == 0){//LMB
    let hasPerk = characterHasPerk(perkNum);
    let isInChain = curPerkList.perks[perkNum].placeInChain != -1;
    let isFirstInChain = curPerkList.perks[perkNum].prevPerk == -1;
    
    let perkToTake = -1
    
    //The perk we clicked on is the one we want to take
    if(!isInChain || !hasPerk){ 
      perkToTake = perkNum;
    }
    //Otherwise we clicked part of a chain and actually want to take the next one.
    else{
      perkToTake = curPerkList.perks[perkNum].nextPerk;
    }
    
    if(event.detail % 2 == 0){
      
      let tookPerk = forceTakePerk(perkToTake);
      if(tookPerk){
        updateActiveSkillPanel();
      }
      updateCharacterLevelAndResults();
      updateCircleAndLineColors();
      updateSkillLevelsDisplay();
    }
    else{
      tryTakePerk(perkToTake);
    }
    
  }
  else if (event.button == 2){//RMB
    tryRemovePerk(perkNum);
  }
  
  window.getSelection().removeAllRanges();
  setTimeout(function(){$("body").removeClass("unselectable");},5);
  
}

//Force the character into a state where we can take the given perk
//and then take the perk. That is, set the appropriate skill level to
//take the given perk if it isn't high enough and take all of the pre-reqs
//Assumes that the skill level requirement for a perk is greater or equal
//to the skill req for all pre-reqs. Returns true if a perk was actually taken.
//Do not actually do anything if the we would need to choose between multiple
//perks in order to take this one. (i.e. one of the pre-reqs has an OR condition in
//it's pre-reqs)
function forceTakePerk(perkNum){
  
  let thePerk = curPerkList.perks[perkNum];
  let hasPerk = characterHasPerk(perkNum);
  let meetsSkillReq = thePerk.skillReq <= characterData.skillLevels[thePerk.skill]
  
  if(wouldNeedChoiceToForce(perkNum)){
    let errorMessage = "This perk requires at least one of the following other perks: ";
    for(let i = 0; i < thePerk.preReqs.length; i++){
      if(thePerk.preReqs[i] < 0){
        errorMessage += curPerkList.perks[Math.abs(thePerk.preReqs[i])].name;
        if(i == (thePerk.preReqs.length - 1)){
          errorMessage += ". ";
        }
        else{
          errorMessage += ", ";
        }
      }
    }
    errorMessage += "Select one of those perks first before selecting this one.";
    $("#highlightedPerkDesc").html(errorMessage);
    $("#highlightedPerkDiv").addClass("errorMessageDiv");
    return false;
  }
  
  if(!meetsSkillReq){
    characterData.skillLevels[thePerk.skill] = thePerk.skillReq;
  }
  
  let tookPerk = false;
  
  for(let i = 0; i < thePerk.preReqs.length; i++){
    if(thePerk.preReqs[i] >= 0){
      tookPerk = forceTakePerk(thePerk.preReqs[i]) | tookPerk;
    }
  }
  
  if(!hasPerk){
    actuallyTakePerk(perkNum);
    tookPerk = true;
  }
  
  return tookPerk;
}

//Returns true if in the course of force taking the given perk
//we would need to make a choice about which of the OR pre-reqs
//to take. If there is an OR but we already have one of them, that's fine.
function wouldNeedChoiceToForce(perkNum){
  //first check this perk to see if there's an OR that we don't satisfy
  let thePerk = curPerkList.perks[perkNum];
  let hasOrPerks = false;
  let satisfiesOrPerks = false;
  for(let i = 0; i < thePerk.preReqs.length; i++){
    if(thePerk.preReqs[i] < 0){
      hasOrPerks = true;
      if(characterHasPerk(Math.abs(thePerk.preReqs[i]))){
        satisfiesOrPerks = true;
      }
    }
  }
  
  if(hasOrPerks && !satisfiesOrPerks) return true;
  
  //Then recursively check all of the hard requirements 
  for(let i = 0; i < thePerk.preReqs.length; i++) {
    if(thePerk.preReqs[i] >= 0 && wouldNeedChoiceToForce(thePerk.preReqs[i])){
      return true;
    }
  }
  
  return false;
}

//Attempt to take the given perk. Can fail if the pre-reqs for
//the perk are not met. Updates the displays if the perk is taken.
function tryTakePerk(perkNum){

  if(!canTakePerk(perkNum)) return;
  
  actuallyTakePerk(perkNum);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
}

//Check if the given perk can actually be taken
function canTakePerk(perkNum){
  if(perkNum < 0) return false;
  if(calcFreePerks() < 1) return false;
  if(characterHasPerk(perkNum)) return false;
  
  if(curPerkList.perks[perkNum].skillReq > characterData.skillLevels[activeSkill])
    return false;
  
  if(!hasPerkPreReqs(perkNum)) return false;
  
  return true;
}

function hasPerkPreReqs(perkNum){
  let hasOrPerks = false;
  let satisfiesOrPerks = false;
  
  for(let i = 0; i < curPerkList.perks[perkNum].preReqs.length; i++){
    if(curPerkList.perks[perkNum].preReqs[i] < 0){
      hasOrPerks = true;
      if(characterHasPerk(Math.abs(curPerkList.perks[perkNum].preReqs[i]))){
        satisfiesOrPerks = true;
      }
    }
    else{
      if(!characterHasPerk(curPerkList.perks[perkNum].preReqs[i])) return false;
    }
  }
  
  if(hasOrPerks && !satisfiesOrPerks) return false;
  
  return true;
}

//Take the perk. Assumes that all the prerequisites are satisfied.
function actuallyTakePerk(perkNum){
  characterData.spentPerks++;
  characterData.perksTaken[perkNum] = true;
}

//Remove the perk. Assumes that the perk has actually been taken.
function actuallyRemovePerk(perkNum){
  characterData.perksTaken[perkNum] = false;
  characterData.spentPerks--;
}

//Recursively remove the given perk and all of the perks that require
//it to be taken. Assumes the given perk can actually be removed.
function removePerkAndDependents(perkNum){
  actuallyRemovePerk(perkNum);
  for(let i = 0; i < curPerkList.perks.length; i++){
    if(characterHasPerk(i) && !hasPerkPreReqs(i)){
      actuallyRemovePerk(i);
    }
  }
}

function tryRemovePerk(perkNum){
  let perkToRemove = perkNum;
  let hasPerk = characterHasPerk(perkNum);
  let isInChain = curPerkList.perks[perkNum].placeInChain != -1;
  let isFirstInChain = curPerkList.perks[perkNum].prevPerk == -1;
 
  //Basic sanity check
  if(!characterHasPerk(perkToRemove)) return;
  
  removePerkAndDependents(perkToRemove);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
}

function activeSkillPerkHoverEnter(event){

  let clientRect = this.getBoundingClientRect();

  let perkNum = Number($(this).attr("data-perknum"));
  let hasPerk = characterHasPerk(perkNum);
  let isInChain = curPerkList.perks[perkNum].placeInChain != -1;
  let isLastInChain = curPerkList.perks[perkNum].nextPerk == -1; 
  
  let skillReq = curPerkList.perks[perkNum].skillReq;
  let descString = curPerkList.perks[perkNum].description;
  if(skillReq > 0){
    descString += ` (Skill Req: ${skillReq})`
  }
  $("#highlightedPerkDesc").html(descString);
  
  if(hasPerk && isInChain && !isLastInChain){
    let nextPerkNum = curPerkList.perks[perkNum].nextPerk;
    let nextPerkReq = curPerkList.perks[nextPerkNum].skillReq;
    let nextPerkDescString = curPerkList.perks[nextPerkNum].description;
    let nextDescString = `<b>Next rank:</b> ${nextPerkDescString} (Skill Req: ${nextPerkReq})`;
    
    $("#highlightedNextPerkDesc").html(nextDescString);
  }
  else {
    $("#highlightedNextPerkDesc").empty();
  }
  
  $("#highlightedPerkDiv").removeClass("errorMessageDiv");
  $("#highlightedPerkDiv").css({left : `${clientRect.left-300}px`, top : `${clientRect.top+40}px`, display: "block"});
}

function activeSkillPerkHoverLeave(){
  $("#highlightedPerkDesc").empty();
  $("#highlightedNextPerkDesc").empty();
  $("#highlightedPerkDiv").hide();
}

function resizeWindowHandler(){
  drawActiveSkillTree();
  drawMiniSkillTrees();
  updateCircleAndLineColors();
}

function leftSideSkillClick(){
  activeSkill = Number($(this).attr("data-skillnum"));
  $(".miniSkillTreeDivSelected").removeClass("miniSkillTreeDivSelected");
  $(this).addClass("miniSkillTreeDivSelected");
  updateActiveSkillPanel();
}

function updateLevelAndFreePerksDisplay(){
  let theDiv = $("#freePerkCountDiv");
  let freePerks = calcFreePerks();
  theDiv.html(`Level ${characterData.level}, Free Perks: ${freePerks}`);
  if(freePerks < 0){
    theDiv.removeClass("whiteText");
    theDiv.addClass("redText");
  }
  else{
    theDiv.removeClass("redText");
    theDiv.addClass("whiteText");
  }
}

function updateActiveSkillPanel(){
  $("#activeSkillDisplayName").html(curPerkList.skillNames[activeSkill]);
  updateLevelAndFreePerksDisplay();
  $("#activeSkillLevelInput").val(characterData.skillLevels[activeSkill]);
  drawActiveSkillTree();
  updateCircleAndLineColors();
}

function drawActiveSkillTree(){
  
  //clear the lines and circles in the active skill tree
  $("#activeSkillDisplaySVG > circle").remove();
  $("#activeSkillDisplaySVG > line").remove();
  $("#activeSkillDisplaySVG > text").remove();
  
  let perks = curPerkList.perks;
  let theSVG = $("#activeSkillDisplaySVG");
  let svgWidth = theSVG.width();
  let svgHeight = theSVG.height();
  //Draw the connecting lines. Do this first so that the circles will be
  //drawn on top of them.
  for(let i = 0; i < perks.length; i++)
  {
    if(perks[i].skill != activeSkill) continue;
    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;
    
    //Assuming that all pre-reqs are in the same skill tree
    for(let j = 0; j < perks[i].preReqs.length; j++)
    {
      let preReqNum = Math.abs(perks[i].preReqs[j]);
      
      let preXPos = perks[ preReqNum ].xPos / 100 * svgWidth;
      let preYPos = perks[ preReqNum ].yPos / 100 * svgHeight;
      
      if(preXPos != curXPos || preYPos != curYPos)
      { 
        theSVG.append(`<line id="mainLine${i}to${preReqNum}" x1="${curXPos}" y1="${curYPos}" x2="${preXPos}" y2="${preYPos}" stroke-width="2" stroke-opacity="0.5" />`);
      }
    }
  }
  //Then draw the circles for the perks along with the labels
  for(let i = 0; i < perks.length; i++)
  {
    //This is only for the actively selected perk tree
    if(perks[i].skill != activeSkill) continue;
    
    let hasPerk = characterHasPerk(i);
    let isInChain = perks[i].placeInChain != -1;
    let isLastInChain = perks[i].nextPerk == -1;
    let isFirstInChain = perks[i].prevPerk == -1;
    let hasNextInChain = characterHasPerk(perks[i].nextPerk);
    let hasPrevInChain = characterHasPerk(perks[i].prevPerk);
    
    //If it's not part of a chain we always want to draw it.
    if(isInChain)
    {
      let wantToDraw = false;
      if(hasPerk && isLastInChain) wantToDraw = true;
      if(hasPerk && !hasNextInChain) wantToDraw = true;
      if(!hasPerk && isFirstInChain) wantToDraw = true;
      if(!wantToDraw) continue;
    }
    
    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;  
    
    theSVG.append(`<circle class="activeSkillCircle" id="activeCircle${i}" cx="${curXPos}" cy="${curYPos}" r="10" data-perkNum="${i}" oncontextmenu="return false"/>`);
    
    let label = perks[i].name;
    if(isInChain){
      if(!hasPerk){
        label += " (0";
      }
      else{
        label += ` (${perks[i].placeInChain}`;
      }
      label += `/${perks[i].totalInChain})`;
    }
    
    theSVG.append(`<text font-size="16px" x="${curXPos}" y="${curYPos+25}" text-anchor="middle" fill="black" filter="url(#shadow)">${label}</text>`); 
    theSVG.append(`<text font-size="16px" x="${curXPos}" y="${curYPos+25}" text-anchor="middle" fill="white">${label}</text>`); 
  }
  //Silly hack to actually draw the new SVG
  $("#activeSkillDisplaySVG").html($("#activeSkillDisplaySVG").html())
  
  $("#activeSkillLevelInput").attr("min",
    curRaceList.races[characterData.race].startingSkills[activeSkill]);
  
  //Re-attach the handlers to all of the circles
  attachActiveSkillHandlers();
}

function updateCircleAndLineColors(){
  //First handle the active skill
  for(let i = 0; i < curPerkList.perks.length; i++){
    let thePerk = curPerkList.perks[i];
    let hasPerk = characterHasPerk(i);
    //Handle the active skill display
    if(thePerk.skill == activeSkill){
      //First deal with the circles
      if(hasPerk){
        if(characterData.skillLevels[activeSkill] >= thePerk.skillReq){
          $(`#activeCircle${i}`).attr("fill","url(#perkSelectedGrad)");
        }
        else{
          //Don't meet the skill requirement anymore
          $(`#activeCircle${i}`).attr("fill","url(#perkNotValidGrad)");
        }
        
        //Then the connecting lines
        for(let j = 0; j < thePerk.preReqs.length; j++){
          if(characterHasPerk(Math.abs(thePerk.preReqs[j]))){
            $(`#mainLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","yellow");
          }
          else{
            $(`#mainLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","lightblue");
          }
        }
      }
      else{
        $(`#activeCircle${i}`).attr("fill","url(#perkNotSelectedGrad)");
        for(let j = 0; j < thePerk.preReqs.length; j++){
          $(`#mainLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","lightblue");
        }
      } 
    }
  }
  //Then the mini-skill trees
  for(let i = 0; i < curPerkList.perks.length; i++){
    let thePerk = curPerkList.perks[i];
    //We only drew the first perk in the chain, so nothing to do for the rest
    if (thePerk.prevPerk != -1) continue;
    
    let hasPerk = characterHasPerk(i);
    if(!hasPerk){
      $(`#miniSkillCircle${i}`).attr("fill","lightblue");
      for(let j = 0; j < thePerk.preReqs.length; j++){
        $(`#miniLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","lightblue");
      }
    }
    else{
      for(let j = 0; j < thePerk.preReqs.length; j++){
        if(characterHasPerk(Math.abs(thePerk.preReqs[j]))){
          $(`#miniLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","yellow");
        }
        else{
          $(`#miniLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","lightblue");
        }
      }
      //Check if the circle should be red because we have a later perk in the
      //chain that we don't meet the skill req for.
      let shouldBeRed = false;
      let checkingNum = i;
      while(checkingNum != -1){
        let checking = curPerkList.perks[checkingNum];
        if(characterHasPerk(checkingNum) &&
            checking.skillReq > characterData.skillLevels[checking.skill])
        {
          shouldBeRed = true;
          break;
        }
        checkingNum = checking.nextPerk;
      }
      
      if(shouldBeRed){
        $(`#miniSkillCircle${i}`).attr("fill","red");
      }
      else {
        $(`#miniSkillCircle${i}`).attr("fill","yellow");
      }
    }
  }
}

function drawMiniSkillTrees() {
  
  for(let i = 1; i <= 18; i++){
    $(`#skill${i}SVG`).html("")
  }
  
  let perks = curPerkList.perks;
  //Draw the connecting lines. Do this first so that the circles will be
  //drawn on top of them.
  for(let i = 0; i < perks.length; i++)
  {
    let theSVG = $("#skill" + (perks[i].skill + 1) + "SVG");
    let svgWidth = theSVG.width();
    let svgHeight = theSVG.height();
    
    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;
    
    for(let j = 0; j < perks[i].preReqs.length; j++)
    {
      let preReqNum = Math.abs(perks[i].preReqs[j]);
      let preXPos = perks[ preReqNum ].xPos / 100 * svgWidth;
      let preYPos = perks[ preReqNum ].yPos / 100 * svgHeight;
      
      if(preXPos != curXPos || preYPos != curYPos)
      { 
        theSVG.append(`<line id="miniLine${i}to${preReqNum}" x1="${curXPos}" y1="${curYPos}" x2="${preXPos}" y2="${preYPos}" stroke-width="1" />`);
      }
    }
  }
  
  for(let i = 0; i < perks.length; i++)
  {
    let theSVG = $("#skill" + (perks[i].skill + 1) + "SVG");
    let svgWidth = theSVG.width();
    let svgHeight = theSVG.height();
    
    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;
    
    //For perk chains, only draw one circle for the first one
    if(perks[i].prevPerk == -1)
    {
      $("#skill" + (perks[i].skill + 1) + "SVG").append(`<circle class="miniSkillCircle" id="miniSkillCircle${i}" cx="${curXPos}" cy="${curYPos}" r="3" data-perkNum="${i}" />`);
    }
  }
 
  for(let i = 1; i <= 18; i++){
    $(`#skill${i}Div`).html($(`#skill${i}Div`).html())
  }
  
  attachMiniSkillTreeHandlers();
}

function attachMiniSkillTreeHandlers(){
  $(".miniSkillCircle").hover(miniPerkHoverEnter,activeSkillPerkHoverLeave);
}

function miniPerkHoverEnter(event){

  let clientRect = this.getBoundingClientRect();

  let perkNum = Number($(this).attr("data-perknum"));
  let hasPerk = characterHasPerk(perkNum);
  let isInChain = curPerkList.perks[perkNum].placeInChain != -1;
  
  $("#highlightedPerkDiv").removeClass("errorMessageDiv");
  $("#highlightedPerkDesc").html(curPerkList.perks[perkNum].name);
  $("#highlightedNextPerkDesc").empty();
  
  $("#highlightedPerkDiv").css({left : `${clientRect.left-80}px`, top : `${clientRect.top+5}px`, display: "block"}); 
}

function updateSkillNames() {
  for(let i = 0; i < 18; i++){
    $("#skill" + (i+1) + "Name").html(curPerkList.skillNames[i]);
  }
}

function updateSkillLevelsDisplay(){
  for(let i = 1; i <= 18; i++){
    $("#skill" + i + "Level").html(characterData.skillLevels[i-1]);
  }
  $("#activeSkillLevelInput").val(characterData.skillLevels[activeSkill]);
}

function characterHasPerk(perkNum){
  return characterData.perksTaken[perkNum];
}

//Don't need to do any processing here (yet).
function addRaceData(raceData){
  racesList.push(raceData);
}

//Don't need to do any processing here (yet).
function addBlessingsData(blessingData){
  blessingsList.push(blessingData);
}

//Do some additional processing on the perk data,
//primarily to identify skill chains and add some extra
//fields to make dealing with them easier.
function addPerkData(perkData){
  //First add the prevPerk property
  for(let i = 0; i < perkData.perks.length; i++){
    let nextPerk = perkData.perks[i].nextPerk
    if(nextPerk != -1){
      perkData.perks[nextPerk].prevPerk = i;
    }
  }
  //Then find those with the prevPerk property defined and nextPerk == -1
  //These are the ends of the chains
  //If prevPerk isn't defined and nextPerk is -1, then it's not in a chain at all.
  for(let i = 0; i < perkData.perks.length; i++){

    if( !("prevPerk" in perkData.perks[i]) && perkData.perks[i].nextPerk == -1){
      //Not in chain
      perkData.perks[i].prevPerk = -1;
      perkData.perks[i].totalInChain = -1;
      perkData.perks[i].placeInChain = -1;
    }
    else if(perkData.perks[i].nextPerk != -1 && !("prevPerk" in perkData.perks[i])){
      perkData.perks[i].prevPerk = -1;
      //The start of a chain
      //First count how many are in the chain
      let totalInChain = 1;
      let checking = i;
      
      while(perkData.perks[checking].nextPerk != -1){
        totalInChain++;
        checking = perkData.perks[checking].nextPerk; 
      }
      //Then add the total and running total to each in the chain
      checking = i;
      for(let j = 1; j <= totalInChain; j++){
        perkData.perks[checking].totalInChain = totalInChain;
        perkData.perks[checking].placeInChain = j;
        checking = perkData.perks[checking].nextPerk; 
      }
    }
  }
  
  perksList.push(perkData);
}

//A little processing to do here: build a table of the cumulative amount
//of character XP is needed to get to each level
function addGameMechanicsData(gameData){
  
  gameData.xpTable = [0];
  
  for(let i = 1; i < 99; i++){
    gameData.xpTable.push(
       gameData.xpTable[i-1] + gameData.leveling.base + i * gameData.leveling.mult);
  }
  
  gameMechanicsList.push(gameData);
}

function addPresetData(presetData){
  presetList.push(presetData);
}

function updateCustomSelectOptions(){
  
  let presetSel = $("#presetSelect");
  presetSel.empty();
  for(let i = 0; i < presetList.length; i++){
    presetSel.append(`<option value="${presetList[i].id}">${presetList[i].name}</option>`);
  }
  presetSel.val(curPreset.id);
  
  let perksSel = $("#perksSelect");
  perksSel.empty();
  for(let i = 0; i < perksList.length; i++){
    perksSel.append(`<option value="${perksList[i].id}">${perksList[i].name}</option>`);
  }
  perksSel.val(curPerkList.id);
  
  let racesSel = $("#racesListSelect");
  racesSel.empty();
  for(let i = 0; i < racesList.length; i++){
    racesSel.append(`<option value="${racesList[i].id}">${racesList[i].name}</option>`);
  }
  racesSel.val(curRaceList.id);
  
  let mechanicsSel = $("#mechanicsSelect");
  mechanicsSel.empty();
  for(let i = 0; i < gameMechanicsList.length; i++){
    mechanicsSel.append(`<option value="${gameMechanicsList[i].id}">${gameMechanicsList[i].name}</option>`);
  }
  mechanicsSel.val(curGameMechanics.id);
  
  let blessingsSel = $("#blessingsSelect");
  blessingsSel.empty();
  for(let i = 0; i < blessingsList.length; i++){
    blessingsSel.append(`<option value="${blessingsList[i].id}">${blessingsList[i].name}</option>`);
  }
  blessingsSel.val(curBlessingList.id);
}

function getIndexWithID(id,dataArray){
  for(let i = 0; i < dataArray.length; i++){
    if(dataArray[i].id == id) return i;
  }
  return -1;
}

function updateRaceSelect(){
  let raceSel = $("#raceSelect");
  raceSel.empty();
  for(let i = 0; i < curRaceList.races.length; i++){
    raceSel.append(`<option value="${i}">${curRaceList.races[i].name}</option>`);
  }
}

function updateBlessingSelect(){
  let blessSel = $("#blessingSelect");
  blessSel.empty();
  for(let i = 0; i < curBlessingList.blessings.length; i++){
    blessSel.append(`<option value="${i}">${curBlessingList.blessings[i]}</option>`);
  }
}

function updateStandingStoneSelect(){
  let ssSelect = $("#stoneSelect");
  ssSelect.empty();
  for(let i = 0; i < standingStoneNames.length; i++){
    ssSelect.append(`<option value="${i}">${standingStoneNames[i]}</option>`);
  }
}

function calcFreePerks(){
  return characterData.earnedPerks - characterData.spentPerks;
}

//Get what level the player should be based on the skill levels
function calcLevel(){
  
  let totalXP = calcTotalXP();
  
  //Don't need to check i=0 because the value there should always be 0
  for(let i = 1; i < curGameMechanics.xpTable.length; i++){
    if(totalXP < curGameMechanics.xpTable[i]) return i;
  }
  // How would we ever get here???
  return 1;
}

//Calculate how much character XP has been earned based on skill levels
function calcTotalXP(){
  let answer = 0;
  for(let i = 0; i < 18; i++){
    let baseSkill = curRaceList.races[characterData.race].startingSkills[i];
    let currentSkill = characterData.skillLevels[i];
    if(baseSkill == currentSkill) continue;
    
    let start = baseSkill + 1;
    let n = (currentSkill - start) + 1;
    
    //use formula for sum of consective integers
    answer += (n/2) * (start + currentSkill);
  }
  return answer;
}

function updateCharacterLevelAndResults(){
  let newLevel = calcLevel();
  let levelDiff = newLevel - characterData.level;
  characterData.level = newLevel;
  characterData.earnedAttributes = newLevel - 1;
  characterData.earnedPerks = curGameMechanics.initialPerks + (newLevel-1);
  
  if(Number($("#oghmaSelect").val()) > 0){
    characterData.earnedPerks += curGameMechanics.oghmaData.perksGiven;
  }
  updateLevelAndFreePerksDisplay();
  updateFreeAttributeChoicesDisplay();
  updateAttributeChoiceInputs();
  updateAttributeText();
}

function updateAttributeChoiceInputs() {
  let freeChoices = calcFreeAttributeChoices();
  if(freeChoices < 0) freeChoices = 0;
  $("#healthIncreasesInput").attr("max",characterData.hmsIncreases[0] + freeChoices);
  $("#magickaIncreasesInput").attr("max",characterData.hmsIncreases[1] + freeChoices);
  $("#staminaIncreasesInput").attr("max",characterData.hmsIncreases[2] + freeChoices);
}

function calcFreeAttributeChoices(){
  return characterData.earnedAttributes - (characterData.hmsIncreases[0] +
    characterData.hmsIncreases[1] + characterData.hmsIncreases[2]);
}

function updateFreeAttributeChoicesDisplay(){
  let theDiv = $("#attributesToSpendDiv");
  let freeChoices = calcFreeAttributeChoices();
  theDiv.html(`Attribute Choices Remaining: ${freeChoices}`);
  if(freeChoices < 0){
    theDiv.removeClass("whiteText");
    theDiv.addClass("redText");
  }
  else{
    theDiv.removeClass("redText");
    theDiv.addClass("whiteText");
  }
}