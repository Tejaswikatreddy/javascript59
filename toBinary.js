/******************************************************************************
 *  Execution       :   1. default node         cmd> node toBinary.js 
 * 
 *  Purpose         : Determines and prints the binary value of given decimal value
 *  
 *  @description    
 * 
 *  @file           : toBinary.js
 *  @overview       : toBinary module to convert the given decimal number to binary
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 3-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function convert()
{
    var dec=readlineSync.question("enter decimal value") //take the decimal value that need to be converted
    if(isNaN(dec)){
        console.log("invalid input,try again...")
        convert();
    }
    else{
    res= utility.toBinary(parseInt(dec));
     console.log("binary value of given number is ",res)
}
}
    convert();