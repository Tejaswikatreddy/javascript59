/******************************************************************************
 *  Execution       :   1. default node         cmd> node vending.js 
 * 
 *  Purpose         : Determines and prints the minimum number of notes for the given amount
 *  
 *  @description    
 * 
 *  @file           : vending.js
 *  @overview       : vending module to determine the minimum number of notes
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 4-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js');
function caluclate()
{
     var amnt=readlineSync.question("enter amount");//enter the amount
     if(isNaN(amnt)){
         console.log("enter number value,try  again..")
         caluclate()
     }
        else{
     var notes=utility.vending(amnt);  //invokes vending method tthat returns the minimum number of notes
     if(notes==0)
        {
            console.log("amount entered is 0 so the noof notes is 0")
        }
}
}
caluclate();