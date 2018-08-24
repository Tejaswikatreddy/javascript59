var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function flip()
{
    read.question("enter no of flips", function(userinput){
        utility.coin(userinput);
        })
    }

flip()