//example from class

// These variables are in the global scope
var nouns = [ "car", "dog", "tree", "house" ];
var verbs = [ "drove", "swam", "entered", "mangled" ];
var adjs = [ "quickly", "easily", "happily", "eagerly" ]
var sentence = "";


// My ONLY job is to generate a random number between min and max
function generateRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// My ONLY job is to get a random noun
function addANoun(){
  var random = generateRandomNumber(0, nouns.length - 1)
  sentence += `${nouns[random]} `
}

// My ONLY job is to get a random verb
function addAVerb(){
  var random = generateRandomNumber(0, verbs.length - 1)
  sentence += `${verbs[random]} `
}

// My ONLY job is to get a random adjective
function addAnAdjective(){
  var random = generateRandomNumber(0, adjs.length - 1)
  sentence += `${adjs[random]} `
}

function start(){
  sentence += "The ";
  addANoun(); 
  addAnAdjective();
  addAVerb();
  sentence += "the ";
  addANoun();

  console.log(`Here is your sentence: ${sentence}`)
}


// This is ONLY function that actually executes when Javascript loads the file
start();