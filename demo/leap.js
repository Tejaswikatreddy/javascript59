/******************************************************************************
 *  Execution       :   1. default node         cmd> node leap.js 
 * 
 *  Purpose         : Determines and prints if the given year is leap year or not
 * 
 *  @description    
 * 
 *  @file           : leap.js
 *  @overview       : leap module to determine if the given year is leap year or not
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 24-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../Utility/utility.js');


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function checkyear()
{
    read.question("enter year", function(userinput){
        utility.leap(userinput);
        
    });
    read.close;
}
checkyear();

