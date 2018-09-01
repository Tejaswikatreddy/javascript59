/******************************************************************************
 *  Execution       :   1. default node         cmd> node coin.js 
 * 
 *  Purpose         : Determines and prints the percentage of heads and tails
 * 
 *  @description    
 * 
 *  @file           : coin.js
 *  @overview       : Coin module to caluclate number of occurences of head and tail
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


function flip()
{
    read.question("enter no of flips", function(userinput){
        utility.coin();
        })
    }

flip()