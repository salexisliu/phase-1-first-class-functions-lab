// Code your solution in this file!
const array = ["a", "b", "c"]
const returnFirstTwoDrivers = driverArray => driverArray.slice(0,2);

const returnLastTwoDrivers = driverArray => driverArray.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return fare => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driverList, driver) => driver(driverList);

//function selectDifferentDrivers2 ((driverList, driver) { 
// return driver(driverList)}
  

//console.log(returnFirstTwoDrivers(array))
//console.log(selectDifferentDrivers(driverList, returnFirstTwoDrivers))