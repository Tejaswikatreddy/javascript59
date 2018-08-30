/******************************************************************************
 *  Execution       :   1. default node         cmd> node tictactoe.js 
 * 
 *  Purpose         : play the tictactoe game and prints the table after evry iteration
 * 
 *  @description    
 * 
 *  @file           : tictactoe.js
 *  @overview       : tictactoe module to run the game
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 24-08-2018
 *
 ******************************************************************************/
var readlineSync = require('readline-sync');
var utility=require('../Utility/utility.js')
function playTurn(player) {

    console.log('Your turn player: ' + player);
   var position=readlineSync.question('enter the position ');
        if (utility.validateMove(position) === true) {
            utility.markBoard(position, player);
            utility.printBoard();
            if (utility.checkWin(player) === true) {
                console.log('Winner Winner!');
                return;
            }
            if (player === 'X') {
                playTurn('O');
            } else {
                playTurn('X');
            }
        } 
        else
        {
            console.log('incorrect input please try again...');
            playTurn(player);
        }
    
}
console.log('Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

playTurn('X');