var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')


function binarysearch() {
    var arr = new Array();
    var a=[];
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
            for(var i=0;i<len;i++)
            {
                a.push(parseInt(arr[i]))
            }
            var index = utility.binarynum(a, 0, len - 1, parseInt(key));
            console.log(index);
        }
        else {
            var index = utility.binaryString(arr.toString(), 0, len - 1, key);
            //index+1;
        }


        if (index != -1) {
            console.log("Index of the key is ", index)
        }
        else {
            console.log("element not found")
        }
    }
    else {
        console.log("Invalid length")
    }

}
binarysearch();