var readline=require('readline');
var utility=require('../Utility/utility.js')

var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function caluclateRoots()
{
    read.question("enter a value", function(a){
        read.question("enter b value", function(b){
            read.question("enter c value", function(c){
        utility.quadratic(a,b,c);
        read.close();
        })
    })
})
}

caluclateRoots()