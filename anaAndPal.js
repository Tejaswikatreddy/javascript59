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
var readline=require('readline');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function  getansAndPals()
    {
        read.question("enter the low range", function(low){//taking range as input
            read.question("enter the high range", function(high){
              if (isNaN(high) || isNaN(low)) {
                console.log("enter number values..try again")
                getansAndPals();
            }
            else{
                if(low>high){
                    console.log("enter low value less than high");
                    getansAndPals();
                }
                else{
        var arr=utility.anaAndPal(low,high);                   //invoke anaAndPal() method
        read.close();
                }
            }
        });

        });
    }
    
    getansAndPals();