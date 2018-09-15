/******************************************************************************
 *  Execution       :   1. default node         cmd> node anagramStck.js 
 * 
 *  Purpose         : to check if the given input arrays has anagram or not using stack
 * 
 *  @description    
 * 
 *  @file           : anagramStck.js
 *  @overview       : to check if the given input has any anagram or not
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 10-09-2018
 *
 ******************************************************************************/

var readlineSync = require('readline-sync');
var utility = require('/home/bridgeit/tejaswi/javascript/Utility/dsUtility.js');
function anagram(){
        utility.stackAnagram();
        
}
    anagram();