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
var arr = new Array();
var len, key;
function search() {

    console.log("-----Binary search----")
    var start = utility.getCurrentTime();
    binarysearch();       //invokes binarysearch algorithm and caluclates time
    var endtime = utility.getCurrentTime();
    var binarytime = utility.elapsedTime(start, endtime)
    console.log("---Insertion sort----")
    var start = utility.getCurrentTime();
    insertionsort();    //invokes insertionsort algorithm and caluclates time
    var endtime = utility.getCurrentTime();
    var insertiontime = utility.elapsedTime(start, endtime)
    console.log("---Bubble sort----")
    var start = utility.getCurrentTime();
    bubblesort();          //invokes bubblesort algorithm and caluclates time
    var endtime = utility.getCurrentTime();
    var bubbletime = utility.elapsedTime(start, endtime)
    console.log("binary search time " + binarytime);
    console.log("insertion time " + insertiontime);
    console.log("bubble sort time " + bubbletime);
    var timeArr = [];
    timeArr.push(binarytime);
    timeArr.push(insertiontime);
    timeArr.push(bubbletime);
    console.log("sorted times of 3 functions is")
    utility.bubble(timeArr, timeArr.length);  //printing the acending order of times
}
search();
function binarysearch() {
    var arr = new Array();
    var a = [];
    var flag = true;
    var len = readlineSync.question("enter the length of the array ");
    if (isNaN(len)) {
        console.log("Invalid length,try again...");
        binarysearch();
    }
    else {
        for (var i = 0; i < len; i++) {
            var x = readlineSync.question(`enter ${(i)}th value `)
            arr.push(x);
        }



        if (isNaN(arr[0])) {
            var flag = true
            var num = false;
            for (var i = 1; i <= arr.length; i++) {
                if (isNaN(arr[i]) == false) {
                    flag = false;
                }
            }
        }
        else {
            var num = true;
            var flag = true
            for (var i = 1; i <= arr.length; i++) {
                if (isNaN(arr[i])) {
                    flag = false;
                }
            }
        }
        if (flag == false) {
            console.log("Enter homogenous elements");
            binarysearch();
        }
        else {
            if (num == true) {
                for (var i = 0; i < len; i++) {
                    a.push(parseInt(arr[i]))
                }
                var key = readlineSync.question("enter the key to search ")
                if(isNaN(key)){
                    console.log("enter number as key value..try aagain")
                     var key = readlineSync.question("enter the key to search ")
                   }
                var index = utility.binarynum(a, 0, len - 1, parseInt(key));

            }
            else {
                var key = readlineSync.question("enter the key to search ")
                 if(isNaN(key)==false){
                    console.log("enter string as key value..try aagain")
                     var key = readlineSync.question("enter the key to search ")
                   }
                var index = utility.binaryString(arr, 0, len - 1, key);


            }


            if (index != -1) {
                console.log("Index of the key is ", index)
                //console.log("Time taken: ", result)
            }
            else {
                console.log("element not found")
                //console.log("Time taken: ", result)
            }
        }
    }


}


function insertionsort() {
    var arr = [];
    var len = readlineSync.question("enter the length of the array ");//take length of the array
    if (isNaN(len)) {
        console.log("Invalid input")
        insertionsort();
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

    }

    utility.insertion(arr, len);  //iinvoke insertion() method

}
function bubblesort() {
    var arr = [];
    var len = readlineSync.question("enter the length of the array ");//take length of the array
    if (isNaN(len)) {
        console.log("Invalid input,try again...")
        bubblesort();
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


        utility.bubble(arr, len)   //invoke bubble() method
    }
}


