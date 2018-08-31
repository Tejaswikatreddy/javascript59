var readline=require('readline');
var utility=require('../Utility/algUtility.js')


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function isAnagram()
{
    read.question("enter String1", function(str1){
        read.question("enter String 2",function(str2){

            utility.anagram(str1.split(''),str2.split(''))
            read.close();
        })
     })
    }

isAnagram()