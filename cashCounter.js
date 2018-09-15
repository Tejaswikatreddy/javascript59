/******************************************************************************
 *  Execution       :   1. default node         cmd> node cashCounter.js 
 * 
 *  Purpose         : takes the people in the queue and perform their transaction
 * 
 *  @description    
 * 
 *  @file           : cashCounter.js
 *  @overview       : takes the people in the queue and perform their transaction
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 08-09-2018
 *
 ******************************************************************************/

var readlineSync = require('readline-sync');
var utility = require('/home/bridgeit/tejaswi/javascript/Utility/dsUtility.js')

function transaction() {
    var persons = readlineSync.question("enter no of persons in the queue at present ")//enter the no of persons in the queue intially
    if (isNaN(persons)) {
        console.log("enter number of persons,try again..")
      var persons = readlineSync.question("enter no of persons in the queue at present ")
    }
    utility.cashCounter(persons,readlineSync);
}
transaction();