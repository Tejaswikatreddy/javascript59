var readline=require('readline');
var utility=require('../Utility/utility.js');


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function checkyear()
{
    read.question("enter year", function(userinput){
        utility.leap(userinput);
        read.close;
    });
}
checkyear();

