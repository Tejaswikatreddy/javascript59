var readline=require('readline');
var utility=require('../Utility/utility.js');


/******************************************************************************
 *  Execution       :   1. default node         cmd> node Triplet.js 
 * 
 *  Purpose         : Determines and prints the triplets whose sum is equal to zero in the given array
 * 
 *  @description    
 * 
 *  @file           : Triplet.js
 *  @overview       : Triplet module to display the triplets of the given array
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : 24-08-2018
 *
 ******************************************************************************/
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var ar=new Array()

function doTriplet()
{
    read.question("enter N value", function(N){
       utility.Triplet(read,N)
        
    });
}
doTriplet();
