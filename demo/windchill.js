var readline=require('readline');
var utility=require('../Utility/utility.js');


var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function computeTemperature()
{
    read.question("enter t value", function(t){ 
        read.question("enter v value", function(v){
        utility.windchill(t,v);
        read.close;
    });
})
}
computeTemperature();

