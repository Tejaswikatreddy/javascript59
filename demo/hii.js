var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function hai()
{
    read.question("enter user name", function(userinput){
        utility.hii(userinput);
        read.close;
    });
}
hai();
