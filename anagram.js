/******************************************************************************
 *  Execution       :   1. default node         cmd> node anagram.js 
 * 
 *  Purpose         : Determines and prints if the two strings are anagrams are not
 * 
 *  @description    
 * 
 *  @file           : anagram.js
 *  @overview       : anagram module to determine if the given strings are anagrams or not
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 31-08-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility=require('../Utility/algUtility.js')


function isAnagram()
{
   var str1= readlineSync.question("enter String1 ")  //enter two strings
      
       var str2= readlineSync.question("enter String2 ")
     
    if(isNaN(str1) && isNaN(str2))
            utility.anagram(str1.split(''),str2.split('')) //invoke anagram method
        else{
            console.log("enter strings...try again")
            isAnagram();
        }
    

}

isAnagram()