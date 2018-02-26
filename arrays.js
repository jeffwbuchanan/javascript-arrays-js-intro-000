var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, chocolate){
  return [chocolate, ...chocolateBars];
};

function destructivelyAddElementToBeginningOfArray (chocolateBars, chocolate){
  chocolateBars.unshift (chocolate);
  return chocolateBars;
};

function addElementToEndOfArray(chocolateBars, chocolate){
  return [...chocolateBars, chocolate];
}

function destructivelyAddElementToEndOfArray (chocolateBars, chocolate){
  chocolateBars.push(chocolate);
  return chocolateBars;
};

function accessElementInArray (chocolateBars, index){
  return chocolateBars [index];
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars, chocolate){
  return chocolateBars.shift; 
};
