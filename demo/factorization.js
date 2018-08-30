/******************************************************************************
 *  Execution       :   1. default node         cmd> node factorization.js 
 * 
 *  Purpose         : Determines and prints the prime factors of the given number
 * 
 *  @description    
 * 
 *  @file           : factorization.js
 *  @overview       : factorization module to determine the prime factors of the given number
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


function primefactors()
{
    read.question("enter n value", function(userinput){
        utility.factorization(userinput);
        read.close();
        });
}

primefactors()