<<<<<<< HEAD
/******************************************************************************
 *  Execution       :   1. default node         cmd> node sqrt.js 
 * 
 *  Purpose         : Determines and prints if the square root of the given number
 * 
 *  @description    
 * 
 *  @file           : sqrt.js
 *  @overview       : binarylist module to determine if the list has required element
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 3-09-2018
 *
 ******************************************************************************/var readlineSync = require('readline-sync');
=======
var readlineSync = require('readline-sync');
>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
var utility = require('../Utility/algUtility.js')
function dosqrt()
{
    var c=readlineSync.question("enter c value")
    res= utility.sqrt(c);
     console.log("Square root of given number is ",res)
}
    dosqrt();