/******************************************************************************
 *  Execution       :   1. default node         cmd> node twodarray.js 
 * 
 *  Purpose         : Creates and displays a two dimensional array
 * 
 *  @description    
 * 
 *  @file           : twodarray.js
 *  @overview       : twodarray module to create and display a two dimensional array
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

function array()
{
    read.question("enter row value", function(r){
         read.question("enter column value", function(c){
        utility.twodarray(read,r,c);
    
    });
    });
}
array();

