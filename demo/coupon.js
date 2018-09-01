/******************************************************************************
 *  Execution       :   1. default node         cmd> node coupon.js 
 * 
 *  Purpose         : Determines and prints the coupon codes of the given number
 * 
 *  @description    
 * 
 *  @file           : coupon.js
 *  @overview       : Coupon module to determine the avilable coupon numbers
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 24-08-2018
 *
 ******************************************************************************/
var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function generatenum()
{
    read.question("no of coupon digits", function(n){
         read.question("no of coupon numbers", function(m){
             utility.coupon(parseInt(n),parseInt(m));
            read.close();
        })
    })
    
}

generatenum();