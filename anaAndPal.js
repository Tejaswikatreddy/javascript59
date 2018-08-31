
   var utility=require('../Utility/algUtility.js')
var readline=require('readline');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function  getansAndPals()
    {
        read.question("enter the range", function(n){
        var arr=utility.anaAndPal(n);
        read.close();
        });
    }
    
    getansAndPals();