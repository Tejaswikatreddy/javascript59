/******************************************************************************
 *  Execution       :   1. default node         cmd> node guessnumber.js 
 * 
 *  Purpose         : Guesses and prints the number thought by the user
 *  
 *  @description    
 * 
 *  @file           : guessnumber.js
 *  @overview       : guessnumber module to guess the number from the given range
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 3-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js');
function caluclate() {
    var value = readlineSync.question("enter any value");//enter the range
    if (isNaN(value)) {
        console.log("enter number value,try again...")
        caluclate();

    }
    else {
        utility.guessnumber(0, value - 1, readlineSync);
    }
}
caluclate();