/******************************************************************************
 *  Execution       :   1. default node         cmd> node expression.js 
 * 
 *  Purpose         : to check if the given expression have balanced paranthesis
 * 
 *  @description    
 * 
 *  @file           : expression.js
 *  @overview       : to check if the given expression have balanced paranthesis or not
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 08-09-2018
 *
 ******************************************************************************/

var readlineSync = require('readline-sync');
var utility = require('/home/bridgeit/tejaswi/javascript/Utility/dsUtility.js')
function stack(){
    var expression=readlineSync.question("enter the expression you want to check");//enter the expression you want to check
    expression.split('');
    utility.expressionCheck(expression);
}
stack();