/******************************************************************************
 *  Execution       :   1. default node         cmd> node stopwatch.js 
 * 
 *  Purpose         : Determines and prints the elapsed time in the program
 * 
 *  @description    
 * 
 *  @file           : stopwatch.js
 *  @overview       : Stopwatch module to caluclate and print the elapsed time
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 24-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../Utility/utility.js');
var initial;
var CurrentDate=new Date();
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var start=0;
function findTime()
{
    read.question("enter 1 to start time", function(num1){
        if(num1==1)
            {
            start=utility.getCurrentTime();
            read.question("enter end time ",function(endtime){
                var endtime=utility.getCurrentTime();
                var result=utility.elapsedTime(start,endtime)
                console.log("elapsed time=",result)
                read.close();
            
            });
            }
        });
        
    
}
findTime();

