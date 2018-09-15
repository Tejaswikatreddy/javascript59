/******************************************************************************
 *  Execution       :   1. default node         cmd> node anagram.js 
 * 
 *  Purpose         : determines and prints prime numbers that are anagrams between 0 to 1000
 * 
 *  @description    
 * 
 *  @file           : anagram.js
 *  @overview       : determines and prints the prime anagrams from 0 to 1000
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 10-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility = require('/home/bridgeit/tejaswi/javascript/Utility/dsUtility.js');
function isAnagram(){
        utility.anaAndPrime();
}
    isAnagram();