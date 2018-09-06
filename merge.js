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
var arr1 = [];
function mergesort() {
    var arr = [];
    var len = readlineSync.question("enter the length of the array ");//enter the length of the array
    if (isNaN(len)) {
        console.log("Invalid length..try again")
        mergesort();
    }
    else {
        console.log("select number array or string array  1:string 2:number")
        var sel = readlineSync.question("enter option")
        if (sel == 1) {
            for (var i = 0; i < len; i++) {
                var x = readlineSync.question(`enter ${(i)}th value `)//enter the array elements
                if (isNaN(x))
                    arr.push(x);
                else {
                    console.log("enter only  string elements ");
                    i--;
                }
            }
        }
        else {
            for (var i = 0; i < len; i++) {
                var x = readlineSync.question(`enter ${(i)}th value `)//enter the array elements
                if (isNaN(x) == false)
                    arr.push(x);
                else {
                    console.log("enter only  number elements ");
                    i--;
                }
            }
        }

        console.log("entered array is" + arr)
        arr1 = utility.mergesort(arr);    //invoking mergesort() function
        console.log("sorted array is " + arr1);
    }
}
mergesort();