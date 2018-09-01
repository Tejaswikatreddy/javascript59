var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function insertionsort() {
    var arr = new Array();
    var len = readlineSync.question("enter the length of the array ");
    for (var i = 0; i < len; i++) {
        var x = readlineSync.question(`enter ${(i)}th value `)
        arr.push(x);
    }
    var start = utility.getCurrentTime();
    utility.insertion(arr, len);
    var endtime = utility.getCurrentTime();
    var result = utility.elapsedTime(start, endtime)
    console.log("Time taken is ",result)
}
insertionsort();