/******************************************************************************
 *  Execution       :   1. default node         cmd> node harmonic.js 
 * 
 *  Purpose         : Caluclates and prints the sum of given N harmonic numbers
 * 
 *  @description    
 * 
 *  @file           : harmonic.js
 *  @overview       : harmonic module to caluclate the sum of first n harmonic numbers
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


function compute()
{
    read.question("enter n value", function(userinput){
        utility.harmonic(userinput);
        read.close();
        })
    }

compute()