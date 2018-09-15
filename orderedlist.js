/******************************************************************************
 *  Execution       :   1. default node         cmd> node Orderedlist.js 
 * 
 *  Purpose         : to perform operations on an ordered llinked list
 * 
 *  @description    
 * 
 *  @file           : Orderedlist.js
 *  @overview       : to perform operations on a linked list
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 11-09-2018
 *
 ******************************************************************************/var utility = require('/home/bridgeit/tejaswi/javascript/Utility/dsUtility.js');
fs = require('fs');
var data = fs.readFileSync('file2.txt','utf8');
console.log(data);
data = data.toString().split(' ');
data.sort(function (a, b) {
    return a - b;
});

var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function orderedList() {
   utility.orderedlist(data,read);
}
orderedList();
