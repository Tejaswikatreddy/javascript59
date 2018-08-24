var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function compute()
{
    read.question("enter n value", function(userinput){
        utility.harmonic(userinput);
        })
    }

compute()