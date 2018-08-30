/******************************************************************************
 *  Execution       :   1. default node         cmd> node quadratic.js 
 * 
 *  Purpose         : Caluclates and prints the roots of given expression
 * 
 *  @description    
 * 
 *  @file           : quadratic.js
 *  @overview       : quadratic module to caluclate the roots
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

function caluclateRoots()
{
    read.question("enter a value", function(a){
        read.question("enter b value", function(b){
            read.question("enter c value", function(c){
        utility.quadratic(a,b,c);
        read.close();
        })
    })
})
}

caluclateRoots()