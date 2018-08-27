var readline=require('readline');
var utility=require('../Utility/utility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function createArray()
{
    read.question("enter np of rows value", function(rows){
        read.question("enter no of columns value", function(columns){
        utility.printArray(userinput);

        })
        });
}

createArray()