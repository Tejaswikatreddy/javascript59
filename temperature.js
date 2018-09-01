var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function conversion()
{
    var temp=readlineSync.question("enter temperature value ")
    var temType=readlineSync.question("Convert to celsius:1 or Farenheit:2")
    utility.temperature(temp,parseInt(temType))


}
conversion();