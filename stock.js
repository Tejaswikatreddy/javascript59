var readlineSync=require('readline-sync')
var utility=require('/home/bridgeit/tejaswi/javascript/Utility/oopUtility.js')
var fs=require('fs')
function jsonInventory()
{
    var data=fs.readFileSync('stock.json','utf8')
    data=JSON.parse(data);
    utility.stockMarket(data)
}
jsonInventory();