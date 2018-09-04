<<<<<<< HEAD
/******************************************************************************
 *  Execution       :   1. default node         cmd> node displayPrimes.js 
 * 
 *  Purpose         : Determines and prints the prime numbers in the given range
 * 
 *  @description    
 * 
 *  @file           : displayPrimes.js
 *  @overview       : displayPrimes module to print the prime numbers in the given range
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 31-08-2018
 *
 ******************************************************************************/
=======
>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
var utility=require('../Utility/algUtility.js')
var readline=require('readline');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function  primes()
    {
<<<<<<< HEAD
        read.question("enter the range", function(n){ //given range as input
        var arr=utility.DisplayPrimes(n);   //invoke display primes method
=======
        read.question("enter the range", function(n){
        var arr=utility.DisplayPrimes(n);
>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
        read.close();
        });
    }
    
        primes();