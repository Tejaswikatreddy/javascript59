/******************************************************************************
 *  Execution       :   1. default node         cmd> node binarylist.js 
 * 
 *  Purpose         : Determines and prints if the given element is present in the list
 * 
 *  @description    
 * 
 *  @file           : binarylist.js
 *  @overview       : binarylist module to determine if the list has required element
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 3-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var fs=require('fs');
var utility = require('../Utility/algUtility.js');
var filename = "file.txt";
function binary()
{
    
     var list=fs.readFileSync(filename, "utf8");//import list from the text file
      var arr=list.split(' ');
        arr.sort();
        console.log(arr);
     var key=readlineSync.question("enter the key to search")
     var index=utility.binaryString(arr,key);//invoke binarystring() method
          if(index==-1)
        {
            console.log("elemnt not found")
        }
        else
            {
                console.log("element found at "+index)
            }
}
        binary();