//var readlineSync = require('readline-sync');
var fs=require('fs');
var utility = require('../Utility/algUtility.js');
var filename = "file.txt";
function bubble()
{
    var list=fs.readFileSync(filename, "utf8");
      var arr=list.split(' ');
        console.log(arr);
     var index=utility.insertion(arr,arr.length);
    
}
        bubble();