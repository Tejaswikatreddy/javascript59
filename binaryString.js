var readlineSync = require('readline-sync');
var utility=require('../Utility/algUtility.js')
function binarysearch()
{
    var arr=new Array();
    var len=readlineSync.question("enter the length of the array ");
    if(isNaN(len)==false)
        {
   for(var i=0;i<len;i++)
    {
        var x=readlineSync.question(`enter ${(i)}th value `)
        arr.push(x)
    }
    var key=readlineSync.question("enter the key to search ")
     var index=utility.binaryString(arr,0,len-1,key)
     if(index!=-1){
     console.log("Index of the key is ",index)
     }
    else{
        console.log("element not found")
    }
        }
    else{
    console.log("Invalid length")
    }


}
binarysearch();