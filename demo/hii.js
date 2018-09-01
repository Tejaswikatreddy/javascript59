/******************************************************************************
 *  Execution       :   1. default node         cmd> node hii.js 
 * 
 *  Purpose         : Replaces the given string with the user name
 * 
 *  @description    
 * 
 *  @file           : hii.js
 *  @overview       : hii module to modify the given string
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

function hai()
{
    read.question("enter user name", function(userinput){
        utility.hii(userinput);
         read.close;
    });
   
}
hai();
