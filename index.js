// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
  return drivers.map(function(driver){
    return driver[0] && driver[1]
  })
}
