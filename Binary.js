/******************************************************************************
 *  Execution       :   1. default node         cmd> node Binary.js 
 * 
 *  Purpose         : Converts the given decimal into binary and do nibble function on it
 *  
 *  @description    
 * 
 *  @file           : Binary.js
 *  @overview       : Binary module to determine the binary code for the given decimal
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 4-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function convert()
{
    var bin=readlineSync.question("enter binary value") //take decimal value as input
    if(isNaN(bin)){
        console.log("invalid input enter integers")
        convert();
}
    else{
   var res= utility.toBinary(bin);                       //invoke tobinary() function
   var newbin=utility.nibble(res);                       //invoke nibble() function   
   var newdec=utility.Binary(newbin);                    //convert the new binary number to decimal
   console.log("New number of the given decimal number is "+newdec)
   var power=utility.checkPow(newdec);                    //check if the new decimal is power of 2
   if(power>0)
    {
        console.log(`2 power ${(power)} is`+newdec);
    }
    else{
        console.log(newdec+"is not a power of 2 value");
    }
    }
}
    convert();