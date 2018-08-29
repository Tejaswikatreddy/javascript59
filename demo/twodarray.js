var readline=require('readline');
var utility=require('../Utility/utility.js');


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function array()
{
    read.question("enter row value", function(r){
         read.question("enter column value", function(c){
        utility.twodarray(read,r,c);
    
    });
    });
}
array();

