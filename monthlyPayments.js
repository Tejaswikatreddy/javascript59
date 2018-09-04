<<<<<<< HEAD
/******************************************************************************
 *  Execution       :   1. default node         cmd> node monthlyPayments.js 
 * 
 *  Purpose         : Determines and prints the monthly payments for 
 *                    the given principal and interest and time
 *  
 *  @description    
 * 
 *  @file           : monthlyPayments.js
 *  @overview       : monthlyPayments module to determine the payments
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 3-09-2018
 *
 ******************************************************************************/
=======
>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function intrest()
{
<<<<<<< HEAD
    var p=readlineSync.question("enter principal amount")//enter the principal amount
    var i=readlineSync.question("enter the intrest percentage")//enter the rate of the interest
    var y=readlineSync.question("enter years")//enter the duration
=======
    var p=readlineSync.question("enter principal amount")
    var i=readlineSync.question("enter the intrest percentage")
    var y=readlineSync.question("enter years")
>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
    utility.monthlyPayments(p,i,y);
}
intrest();