var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function Permutation()
{
    read.question("enter the string", function(userinput){
        utility.  StringPermutation(userinput,0,userinput.length);
  
        
        });
    }
    // read.close();  

Permutation();
//swap();