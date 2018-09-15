/******************************************************************************
 *  Execution       :   1. default node         cmd> node calendar.js 
 * 
 *  Purpose         : to print the calendar of the iven month and year
 * 
 *  @description    
 * 
 *  @file           : calendar.js
 *  @overview       : to print the calendar of the given month and year
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 11-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility = require('/home/bridgeit/tejaswi/javascript/Utility/dsUtility.js');
function date(){
   
    var year=readlineSync.question("enter the year you want in yyyy")//enter year
    if(year.length!=4 || isNaN(year)){
        console.log("invalid input,try again...")
         var year=readlineSync.question("enter the year you want in yyyy")
    }
         var month=readlineSync.question("enter the month you want in mm")//enter month
    if(month.length!=2 || isNaN(month) || (month<=0 || month>12)){
        console.log("invalid input,try again...")
         var month=readlineSync.question("enter the month you want in mm")
    }
    date=year+"/"+month+"/"+"/1";
    var dateObj=new Date(date);//create date class object with the input date as argument
    var noOfDays=new Date(dateObj.getFullYear(), dateObj.getMonth()+1, 0).getDate()//invoke getDate() method to get number of days in the month
    var weekDay=dateObj.getDay();//invoke getDay() method to get the day of the date
    console.log(noOfDays);
    console.log(weekDay);
    utility.printCalendar(noOfDays,weekDay);
}
date();