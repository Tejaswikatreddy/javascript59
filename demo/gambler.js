var readline = require('readline');
var utility = require("../Utility/utility.js");
var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function play() {
    read.question("Enter amount ", function(amnt){
            read.question("Enter desiredamnt ", function(desireamnt) {
                    read.question("Enter trials ", function(trails){
                        utility.gambler(amnt, desireamnt, trails);

                    })
            })
    })
}
play();
