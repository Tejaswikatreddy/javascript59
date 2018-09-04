/******************************************************************************
 *  Execution       :   1. default node         cmd> node insertionList.js.js 
 * 
 *  Purpose         :  prints the sorted array of the given array
 * 
 *  @description    
 * 
 *  @file           : insertionList.js
 *  @overview       : insertionList module to print the sorted array
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 3-09-2018
 *
 ******************************************************************************/
var fs=require('fs');
var filename = "file.txt";
var utility = require('../Utility/algUtility.js');
function insertion()
{
     var list=fs.readFileSync(filename, "utf8");
      var arr=list.split(' ');
        console.log(arr);
     var index=utility.bubble(arr,arr.length);
    
}
        insertion();