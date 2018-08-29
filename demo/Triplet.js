var readline=require('readline');
var utility=require('../Utility/utility.js');


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var ar=new Array()

function doTriplet()
{
    read.question("enter N value", function(N){
       utility.Triplet(read,N)
        
    });
}
doTriplet();
