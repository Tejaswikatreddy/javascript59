/******************************************************************************
 *  Execution       :   1. default node         cmd> node staticMethods.js 
 * 
 *  Purpose         : Determines and prints the time taken by different algorithms
 * 
 *  @description    
 * 
 *  @file           : staticMethods.js
 *  @overview       : staticMethods module to determine which algorithm takes less time
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 1-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
var arr=new Array();
var len,key;
function search() {
    
        console.log("-----Binary search----")
        var binarytime= binarysearch();       //invokes binarysearch algorithm and caluclates time
        console.log("---Insertion sort----")
         var insertiontime=insertionsort();    //invokes insertionsort algorithm and caluclates time
        console.log("---Bubble sort----")
         var bubbletime=bubblesort();          //invokes bubblesort algorithm and caluclates time
         console.log("binary search time "+binarytime);
         console.log("insertion time "+insertiontime);
         console.log("bubble sort time "+bubbletime);
         var timeArr=[];        
         timeArr.push(binarytime);
         timeArr.push(insertiontime);
         timeArr.push(bubbletime);
         console.log("sorted times of 3 functions is")
          utility.bubble(timeArr, timeArr.length);  //printing the acending order of times
}
search();
/**
 * @function binarysearch() searches the given key in the given array
 */
function binarysearch() {
    var arr=new Array();

     var len = readlineSync.question("enter the length of the array ");//give length of the array
    for (var i = 0; i < len; i++) {
        var x = readlineSync.question(`enter ${(i)}th value `) //enter array elements
        arr.push(x);
    }
    var key = readlineSync.question("enter the key to search ")
            var strornum = true;
            var a=[];
            
                if (isNaN(arr[0]))
                    strornum = false;
            
            if (strornum== true) {
                for (var i = 0; i < len; i++) {
                    a.push(parseInt(arr[i]))
                }
                var start = utility.getCurrentTime(); //invoke getcurrentTime() method
                var index = utility.binarynum(a, 0, len-1, key); //invoke binarynum() function
                var endtime = utility.getCurrentTime();
                var result = utility.elapsedTime(start, endtime)

            }
            else {
                var start = utility.getCurrentTime();
                var index = utility.binaryString(arr, key);
                var endtime = utility.getCurrentTime();
                var result = utility.elapsedTime(start, endtime)

            }


            if (parseInt(index)!= -1) {
                console.log("Index of the key is ", index)
            }
            else {
                console.log("element not found")
            }
            return result;
        }
/**
 * @function insertionsort() takes an array and sorts in ascending order
 */        
function insertionsort() {
    var arr=[];
     var len = readlineSync.question("enter the length of the array ");//take length of the array
    for (var i = 0; i < len; i++) {
        var x = readlineSync.question(`enter ${(i)}th value `)//take array elements
        arr.push(x);
    }
    var start = utility.getCurrentTime();
    utility.insertion(arr, len);  //iinvoke insertion() method
    var endtime = utility.getCurrentTime();
    var result = utility.elapsedTime(start, endtime)
    return result;
}
/**
 * @function bubblesort() takes an array and sorts it in ascending order
 */
function bubblesort() {
     var arr=[];
     var len = readlineSync.question("enter the length of the array ");//take length of the array
    for (var i = 0; i < len; i++) {
        var x = readlineSync.question(`enter ${(i)}th value `)//take array elements
        arr.push(x);
    }
    var start = utility.getCurrentTime();
    utility.bubble(arr, len)   //invoke bubble() method
    var endtime = utility.getCurrentTime();
    var result = utility.elapsedTime(start, endtime)
     return result;
}