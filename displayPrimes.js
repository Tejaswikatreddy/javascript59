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
var utility = require('../Utility/algUtility.js')
var readline = require('readline');
var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function primes() {
    read.question("enter the low range", function (low) { //given range as input
        read.question("enter the high range", function (high) {
            if (isNaN(high) || isNaN(low)) {
                console.log("enter number values..try again")
                primes();
            }
            else {
                if (low > high) {
                    console.log("enter hogh velue greater than low")
                    primes();
                }
                else {
                    var arr = utility.DisplayPrimes(low, high);   //invoke display primes method
                    read.close();
                }
            }
        });
    });
}

primes();