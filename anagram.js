<<<<<<< HEAD
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
var readline=require('readline');
var utility=require('../Utility/algUtility.js')
=======
var readline=require('readline');
var utility=require('../Utility/algUtility.js')


>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

<<<<<<< HEAD
function isAnagram()
{
    read.question("enter String1", function(str1){  //enter two strings
        read.question("enter String2",function(str2){

            utility.anagram(str1.split(''),str2.split('')) //invoke anagram method
=======

function isAnagram()
{
    read.question("enter String1", function(str1){
        read.question("enter String 2",function(str2){

            utility.anagram(str1.split(''),str2.split(''))
>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
            read.close();
        })
     })
    }

isAnagram()