/******************************************************************************
 *  Execution       :   1. default node         cmd> node hshing.js 
 * 
 *  Purpose         : to perform hash function on a linked list
 * 
 *  @description    
 * 
 *  @file           : hashing.js
 *  @overview       : to perform has function on a linked list
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 11-09-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var fs = require('fs');
var utility = require('/home/bridgeit/tejaswi/javascript/Utility/dsUtility.js')
function hashTable(){
    var list = fs.readFileSync('file3.txt', 'utf8');//import list from the text file
    var numArray=list.split(' ');
    utility.hash(numArray,readlineSync)
}
hashTable();