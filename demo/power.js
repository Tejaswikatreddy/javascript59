/******************************************************************************
 *  Execution       :   1. default node         cmd> node power.js 
 * 
 *  Purpose         : Determines and prints the 2 power values upto given number
 * 
 *  @description    
 * 
 *  @file           : power.js
 *  @overview       : power module to caluclate and print the power of upto n given value 
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 24-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function table()
{
    read.question("enter number value", function(userinput){
        utility.power(userinput);
        read.close;
    });
   
}

table();