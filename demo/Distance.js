var readline=require('readline');
var utility=require('../Utility/utility.js');


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function computeDistance()
{
    read.question("enter x value", function(x){
        read.question("enter y value", function(y){
        utility.Distance(x,y);
        read.close;
    });
});
}
computeDistance();

