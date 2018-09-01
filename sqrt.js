var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function dosqrt()
{
    var c=readlineSync.question("enter c value")
    res= utility.sqrt(c);
     console.log("Square root of given number is ",res)
}
    dosqrt();