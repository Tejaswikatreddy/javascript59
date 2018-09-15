/******************************************************************************
 *  Execution       :   1. default node         cmd> node linkedlist.js 
 * 
 *  Purpose         : adds the elements into the linked list and searches the required element in the list
 * 
 *  @description    
 * 
 *  @file           : linkedlist.js
 *  @overview       : linkedlist moduleto add and search the elements in the linked list
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 08-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var fs = require('fs');
var utility = require('/home/bridgeit/tejaswi/javascript/Utility/dsUtility.js')
function ll() {
    var list = fs.readFileSync('file.txt', 'utf8');//import list from the text file
    var arr = list.split(' ');
    utility.unOrderList(arr,readlineSync);

}
ll();