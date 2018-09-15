var obj = require('/home/bridgeit/tejaswi/javascript/OOP/class.js')
var queue = require('/home/bridgeit/tejaswi/javascript/DataStructures/implementations/qUtility.js')
class stock {
    constructor(name, total) {
        this.name = name;
        this.total = total;
    }
}
module.exports = {
    expression: function (data, name, fullName, phnNum, dateString) {
        data = data.replace(/<<name>>/i, name);
        data = data.replace(/<<full name>>/i, fullName);
        data = data.replace(/91-xxxxxxxxxx/i, phnNum);
        data = data.replace("xx/xx/xxxx", dateString)
        console.log(data)
    },
    stockMarket: function (data) {
        for (var i = 0; i < data.stock.length; i++) {
            var total = data.stock[i].price * data.stock[i].shares;
            console.log(`total price of shares of ${(data.stock[i].name)} is ` + total)
        }
    },
    priceCaluclator: function (data, fs) {
        var rTotal = 0, pTotal = 0, wTotal = 0;
        for (key in data.rice) {
            rTotal = rTotal + (data.rice[key].weight * data.rice[key].price)
        }

        for (key in data.pulses) {
            pTotal = pTotal + (data.pulses[key].weight * data.pulses[key].price)
        }

        for (key in data.wheat) {
            wTotal = wTotal + (data.wheat[key].weight * data.wheat[key].price)
        }


        var result = {
            rice: {
                "total": rTotal
            },
            pulses: {
                "total": pTotal
            },
            wheat: {
                "total": wTotal
            }
        }
        r = JSON.stringify(result)

        console.log(r)
    },
    inventory: function (readlineSync, fs) {
        var flag = false, total_arr = [];
        var data = fs.readFileSync('/home/bridgeit/tejaswi/javascript/OOP/result.json', 'utf8');
        var arr = JSON.parse(data);
        var choice = readlineSync.question("enter the choice of your operation->1.add 2.delete ")
        switch (choice) {

            case '1':
                var arr = [];
                var repo_Num = readlineSync.question("enter the number of repositories you want to enter")
                if (isNaN(repo_Num)) {
                    console.log("enter number value,try again..")
                    var repo_Num = readlineSync.question("enter the number of repositories you want to enter")
                }
                for (var i = 0; i < repo_Num; i++) {
                    var name = readlineSync.question("enter the name of the repository")
                    if (isNaN(name) == false) {
                        console.log("enter string value,try again")
                        var name = readlineSync.question("enter the name of the repository")
                    }
                    var price = readlineSync.question("enter the price of 1 share")
                    if (isNaN(price)) {
                        console.log("enter number value,try again")
                        var price = readlineSync.question("enter the price of 1 share")

                    }
                    var number = readlineSync.question("enter the no of shares you want")
                    if (isNaN(number)) {
                        console.log("enter number value,try again")
                        var price = readlineSync.question("enter the price of 1 share")

                    }
                    var in_Obj = new obj(name, price, number);
                    arr.push(in_Obj)
                    var total = price * number;
                    var total_Obj = new stock(name, total);
                    total_arr.push(total_Obj);

                }

                var ele = JSON.stringify(arr);
                console.log(ele);
                var ele2 = JSON.stringify(total_arr);
                console.log(ele2);
                fs.writeFileSync("/home/bridgeit/tejaswi/javascript/OOP/result.json", ele)
                fs.writeFileSync("/home/bridgeit/tejaswi/javascript/OOP/result2.json", ele2, function (err) {
                    if (err) throw err;
                });
                break;
            case '2':
                var del_name = readlineSync.question("enter the name of the stock you want to delete")
                if (isNaN(del_name) == false) {
                    console.log("enter the string value,try again....")
                    var del_name = readlineSync.question("enter the name of the stock you want to delete")
                }
                if (arr.length == 0) {
                    console.log("json file doesnot have any objects,it is not possible to delete")

                }
                else {
                    for (var i = 0; i < arr.length; i++) {
                        if ((arr[i].name).toLowerCase() == del_name.toLowerCase()) {
                            arr.splice(i, 1)
                            flag = true;
                            break;
                        }
                        var total = (arr[i].price) * (arr[i].number);
                        var name = arr[i].name;
                        var total_Obj = new stock(name, total);
                        total_arr.push(total_Obj);
                        var ele2 = JSON.stringify(total_arr);
                        console.log(ele2);
                        fs.writeFileSync("/home/bridgeit/tejaswi/javascript/OOP/result2.json", ele2, function (err) {
                            if (err) throw err;
                        });


                    }
                    if (flag == false) {
                        console.log("stock not found")
                    }
                    else {
                        console.log("desired stock deleted");
                        var ele = JSON.stringify(arr);
                        console.log("resultant data in json file is " + ele)

                        fs.writeFileSync("/home/bridgeit/tejaswi/javascript/OOP/result.json", ele)

                    }

                }
                break;
            default: console.log("invalid entry")

        }

    },
    deckOfCards: function (arr) {
        var twoDarray = [], p = 1,index=[], flag = true;
        while (p <= 4) {
            var player = [], i = 1;
            while (i <= 9) {
                var random_index = this.random(arr);
                var card=arr[random_index];
                if(index.length==0){
                    index.push(random_index);
                }
                if (index.indexOf(random_index) == -1) {
                    player.push(card);
                     index.push(random_index);
                    i++;
                }
            }
                twoDarray.push(player)
                p++;
       

         }
    this.printtwoDarray(twoDarray)
    return twoDarray;
    },
        printtwoDarray:function(twoDarray){
        for (var i = 0; i < twoDarray.length; i++) {
            var str = ""
            for (var j = 0; j < (twoDarray[i]).length; j++) {
                str = str + "\t" + (twoDarray[i])[j];
            }
            console.log(str);
        }
        return twoDarray;
    },
    random: function (arr) {
        return Math.floor(Math.random() * arr.length);
    },
 
    sorting: function (twoDarray,arr) {
        for (var i = 0 ; i < twoDarray.length ; i++) {
            for(k=0;k<(twoDarray[i].length);k++){
           for(var j=0 ; j<=((twoDarray[i]).length)-2 ; j++){
                if(arr.indexOf(twoDarray[i][j])>arr.indexOf( twoDarray[i][j+1]))
                    {
                        var temp=twoDarray[i][j];
                        twoDarray[i][j]=twoDarray[i][j+1]
                        twoDarray[i][j+1]=temp;
                    }
           }
            }
        }
        return twoDarray;
    
    },
    cardQueue:function(arr){
        var q_Obj=new queue();
        for (var i = 0 ; i < arr.length ; i++) {
            q_Obj.enqueue("player"+(i+1))
            q_Obj.enqueue(arr[i]);
            
    }
       var Str= q_Obj.printList();
       console.log(Str);
    }


}