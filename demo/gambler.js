/******************************************************************************
 *  Execution       :   1. default node         cmd> node gambler.js 
 * 
 *  Purpose         : Determines and prints the number of times a gambler can win the game
 * 
 *  @description    
 * 
 *  @file           : gambler.js
 *  @overview       : Coin module to determine the percentage of wins and looses of the gambler
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 24-08-2018
 *
 ******************************************************************************/
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
