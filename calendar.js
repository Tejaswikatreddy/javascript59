var readlineSync = require('readline-sync');
var utility = require('../Utility/algUtility.js')
function date() {
    var m = readlineSync.question("enter month of the date")
    var d = readlineSync.question("enter date ")
    var y = readlineSync.question("enter year of the date")
    var day = utility.calendar(m, d, y);
    switch (day) {
        case 0: console.log("sunday");
            break;
        case 1: console.log("Monday");
            break;
        case 2: console.log("Tuesday");
            break;
        case 3: console.log("Wednesday");
            break;
        case 4: console.log("Thursday");
            break;
        case 5: console.log("Friday");
            break;
        case 6: console.log("Saturday");
            break;
        default:console.log("Invalid date")

    }

}
date();