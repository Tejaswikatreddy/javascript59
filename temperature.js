/******************************************************************************
 *  Execution       :   1. default node         cmd> node temperature.js 
 * 
 *  Purpose         : converts and prints the given temperature from Farenheit to celsius and viceversa
 *  
 *  @description    
 * 
 *  @file           : temperature.js
 *  @overview       : temperature module to convert the temperature
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 3-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function conversion()
{
    var temp=readlineSync.question("enter temperature value ") //enter the temperature
     var temType=readlineSync.question("Convert to celsius:1 or Farenheit:2")
    if(isNaN(temp) || isNaN(temType)){
        console.log("enter number value,try again")
        conversion();

    }
   else{
    utility.temperature(temp,parseInt(temType))
   }

}
conversion();