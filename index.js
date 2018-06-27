// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
  return drivers.filter(function(driver){
    return driver[0] && driver[1]
  })
}
