/******************************************************************************
 *  Execution       :   1. default node         cmd> node windchill.js 
 * 
 *  Purpose         : Determines and prints the effective temperature of the area
 * 
 *  @description    
 * 
 *  @file           : windchill.js
 *  @overview       : winchill module to caluclate the effective temperature of area
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

function computeTemperature()
{
    read.question("enter t value", function(t){ 
        read.question("enter v value", function(v){
        utility.windchill(t,v);
       
    });
     read.close;
})
}
computeTemperature();

