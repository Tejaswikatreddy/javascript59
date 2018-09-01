var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function intrest()
{
    var p=readlineSync.question("enter principal amount")
    var i=readlineSync.question("enter the intrest percentage")
    var y=readlineSync.question("enter years")
    utility.monthlyPayments(p,i,y);
}
intrest();