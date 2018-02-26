var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, chocolate){
  return [chocolate, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, chocolate){
  return chocolateBars.unshift (chocolate);
}
