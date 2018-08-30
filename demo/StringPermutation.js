/******************************************************************************
 *  Execution       :   1. default node         cmd> node StringPermutation.js 
 * 
 *  Purpose         : Determines and prints the possible permutations of the given string
 * 
 *  @description    
 * 
 *  @file           : StringPermutation.js
 *  @overview       : StringPermutation module to print the possible permutations of the given string
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


function Permutation()
{
    read.question("enter the string", function(string){
        var strArray=string.split('');//splits the input string into an array
        utility.  StringPermutation(strArray,0,strArray.length-1);
        read.close();
        
        });
    }
   

Permutation();
