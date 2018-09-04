<<<<<<< HEAD
/******************************************************************************
 *  Execution       :   1. default node         cmd> node merge.js 
 * 
 *  Purpose         : Determines and prints the sorted array of the given array
 *  
 *  @description    
 * 
 *  @file           : merge.js
 *  @overview       : calendar module to determine the day of the given date
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 3-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
var arr1=[];
function mergesort() {
    var arr = [];
    var len = readlineSync.question("enter the length of the array ");//enter the length of the array
    for (var i = 0; i < len; i++) {
        var x = readlineSync.question(`enter ${(i)}th value `)//enter the array elements
        arr.push(x);
    }
    console.log("entered array is"+arr)
    arr1=utility.mergesort(arr);    //invoking mergesort() function
    console.log("sorted array is "+arr1);
=======
var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function mergesort() {
    var arr = new Array();
    var len = readlineSync.question("enter the length of the array ");
    for (var i = 0; i < len; i++) {
        var x = readlineSync.question(`enter ${(i)}th value `)
        x=parseInt(x)
        arr.push(x);
    }
    var start = utility.getCurrentTime();
    utility.merge(arr, len);
    var endtime = utility.getCurrentTime();
    var result = utility.elapsedTime(start, endtime)
    console.log("Time taken is ",result)
>>>>>>> 744d0ba2634b7a201bd15890a1c04a9e9eed397a
}
mergesort();