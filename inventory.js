var readlineSync=require('readline-sync')
var utility=require('/home/bridgeit/tejaswi/javascript/Utility/oopUtility.js')
var fs=require('fs');
function jsonUpdate(){
    utility.inventory(readlineSync,fs)
    
  }
jsonUpdate();