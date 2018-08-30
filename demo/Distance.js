/******************************************************************************
 *  Execution       :   1. default node         cmd> node Distance.js 
 * 
 *  Purpose         : Determines and prints the distance between the origin and the given point
 * 
 *  @description    
 * 
 *  @file           : Distance.js
 *  @overview       : Distance module to clauclate the distance to the given point
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

function computeDistance()
{
    read.question("enter x value", function(x){
        read.question("enter y value", function(y){
        utility.Distance(x,y);
        read.close;
    });
});
}
computeDistance();

