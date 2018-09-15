/******************************************************************************
 *  Execution       :   1. default node         cmd> node palindrome.js 
 * 
 *  Purpose         : to check if the given string is a palindrome or not
 * 
 *  @description    
 * 
 *  @file           : palindrome.js
 *  @overview       : to check if the given string is palindrome or not
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 10-09-2018
 *
 ******************************************************************************/

var readlineSync = require('readline-sync');
var utility = require('/home/bridgeit/tejaswi/javascript/Utility/dsUtility.js')
function check() {
    var str = readlineSync.question("enter the string you want to check ")//take string to check
    if (isNaN(str) == false) {
        console.log("enter string value,try again..")//check if the input is string
      var str = readlineSync.question("enter the string you want to check ") 
       
    }
    utility.palindromeCheck(str);
    
}
check();