var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
var arr=new Array();
var len,key;
function search() {


   
    var choice = readlineSync.question("give your choice of entry 1.binary 2.insertion 3.bubble")


switch (parseInt(choice)) {
    case 1:
        binarysearch();
        break;
     case 2:
         insertionsort();
         break;
     case 3:
         bubblesort();
         break;
    default:console.log("Invalid input")
        
        
}
}
search();
function binarysearch() {
     var len = readlineSync.question("enter the length of the array ");
    for (var i = 0; i < len; i++) {
        var x = readlineSync.question(`enter ${(i)}th value `)
        arr.push(x);
    }
    var key = readlineSync.question("enter the key to search ")
            var strornum = true;
            var a=[];
            for (var i = 0; i < len; i++) {
                if (isNaN(arr[i]))
                    strornum = false;
            }

            if (strornum== true) {
                for (var i = 0; i < len; i++) {
                    a.push(parseInt(arr[i]))
                }
                var start = utility.getCurrentTime();
                var index = utility.binarynum(a, 0, len-1, key);
                var endtime = utility.getCurrentTime();
                var result = utility.elapsedTime(start, endtime)

            }
            else {
                var start = utility.getCurrentTime();
                var index = utility.binaryString(arr, key);
                var endtime = utility.getCurrentTime();
                var result = utility.elapsedTime(start, endtime)

            }


            if (parseInt(index)!= -1) {
                console.log("Index of the key is ", index)
                console.log("Time taken: ", result)
            }
            else {
                console.log("element not found")
                console.log("Time taken: ", result)
            }
        }
function insertionsort() {
     var len = readlineSync.question("enter the length of the array ");
    for (var i = 0; i < len; i++) {
        var x = readlineSync.question(`enter ${(i)}th value `)
        arr.push(x);
    }
    //var key = readlineSync.question("enter the key to search ")
    var start = utility.getCurrentTime();
    utility.insertion(arr, len);
    var endtime = utility.getCurrentTime();
    var result = utility.elapsedTime(start, endtime)
    console.log("Time taken is ",result)
}

function bubblesort() {
     var len = readlineSync.question("enter the length of the array ");
    for (var i = 0; i < len; i++) {
        var x = readlineSync.question(`enter ${(i)}th value `)
        arr.push(x);
    }
    //var key = readlineSync.question("enter the key to search ")
    var start = utility.getCurrentTime();
    utility.bubble(arr, len)
    var endtime = utility.getCurrentTime();
    var result = utility.elapsedTime(start, endtime)
     console.log("Time taken is ",result)
}