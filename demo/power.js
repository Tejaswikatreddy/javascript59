var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function table()
{
    read.question("enter n value", function(userinput){
        utility.power(userinput);
        })
    }

table()