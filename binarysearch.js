var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')


function binarysearch() {
    var arr = new Array();
    var a = [];
    var flag = true;
    var len = readlineSync.question("enter the length of the array ");
    if (isNaN(len) == false) {
        for (var i = 0; i < len; i++) {
            var x = readlineSync.question(`enter ${(i)}th value `)
            arr.push(x);
        }
        var key = readlineSync.question("enter the key to search ")
        for (var i = 0; i < len; i++) {
            if (isNaN(arr[i]))
                flag = false;
        }

        if (flag == true) {
            for (var i = 0; i < len; i++) {
                a.push(parseInt(arr[i]))
            }
            var start = utility.getCurrentTime();
            var index = utility.binarynum(a, 0, len - 1, parseInt(key));
            var endtime = utility.getCurrentTime();
            var result = utility.elapsedTime(start, endtime)

        }
        else {
            var start = utility.getCurrentTime();
            var index = utility.binaryString(arr, key);
            var endtime = utility.getCurrentTime();
            var result = utility.elapsedTime(start, endtime)

        }


        if (index != -1) {
            console.log("Index of the key is ", index)
            console.log("Time taken: ", result)
        }
        else {
            console.log("element not found")
            console.log("Time taken: ", result)
        }
    }
    else {
        console.log("Invalid length")
    }

}
binarysearch();