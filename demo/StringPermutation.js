var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function Permutation()
{
    read.question("enter the string", function(string){
        var strArray=string.split('');
        utility.  StringPermutation(strArray,0,strArray.length-1);
        read.close();
        
        });
    }
   

Permutation();
//swap();