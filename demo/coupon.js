var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function generatenum()
{
    read.question("enter nmin value", function(min){
         read.question("enter max value", function(max){
             utility.coupon(min,max);
           //  read.close();
        })
    })
    
}

generatenum();