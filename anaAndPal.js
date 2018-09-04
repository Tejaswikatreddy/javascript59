<<<<<<< HEAD
/******************************************************************************
 *  Execution       :   1. default node         cmd> node anaAndPal.js 
 * 
 *  Purpose         : Determines and prints the prime numbers
 *                    that are anagrams and palindromes in the given range
 * 
 *  @description    
 * 
 *  @file           : anaAndPal.js
 *  @overview       : anaAndPal module to determine if the primes numbers are anagrams and palindromes
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 31-08-2018
 *
 ******************************************************************************/
var utility=require('../Utility/algUtility.js')
=======

   var utility=require('../Utility/algUtility.js')
>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
var readline=require('readline');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function  getansAndPals()
    {
<<<<<<< HEAD
        read.question("enter the range", function(n){   //taking range as input
        var arr=utility.anaAndPal(n);                   //invoke anaAndPal() method
=======
        read.question("enter the range", function(n){
        var arr=utility.anaAndPal(n);
>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
        read.close();
        });
    }
    
    getansAndPals();