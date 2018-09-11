var unOrderdList = require('/home/bridgeit/tejaswi/javascript/DataStructures/implementations/unOrderUtility.js')
var stackObj = require('/home/bridgeit/tejaswi/javascript/DataStructures/implementations/expUtility.js')
var deQueue = require('/home/bridgeit/tejaswi/javascript/DataStructures/implementations/deqUtility.js')
var queue = require('/home/bridgeit/tejaswi/javascript/DataStructures/implementations/qUtility.js')
var fs = require('fs');
var stObj = new stackObj();//creating an object for stack implementation class
var listObj = new unOrderdList();//creating an object for linkedlist implementation class
var deObj = new deQueue();//creating an object for dequeue implementation class
var qeObj = new queue();//creating an object for queue implementation class
module.exports = {
    /**
     * @function unOrderList() to add,search and add the elements into a linked list
     * @var {Array} arr to take the elements from the file
     * @var {Object} readlineSync to take input from the user
     */
    unOrderList: function (arr, readlineSync) {
        var index = readlineSync.question("enter the index where you want to search: ")//take the index where you want to search in the linked list
        if (isNaN(index)) {//check if the input is number or string
            console.log("Invalid input,try again..");
            unOrderList(arr, readlineSync);
        }

        for (var i = 0; i < arr.length; i++) {
            if (isNaN(arr[i]))
                listObj.add(arr[i]);
        }
        var ele_at_in = listObj.get(index);
        console.log("element at given index is: " + ele_at_in);
        var search_ele = readlineSync.question("enter the element you want to search")
        var search_result = listObj.search(search_ele)
        if (search_result) {
            console.log("element found")
        }
        var ele = readlineSync.question("enter the element to be removed: ");
        var index = listObj.indexOf(ele)
        if (index >= 0) {

            listObj.remove(ele)
        }
        else {
            listObj.add(ele)
        }
        var pos = readlineSync.question("enter the pos where the ele shoould be enetered")
        if (isNaN(pos)) {
            console.log("Invalid input");
            unOrderList(arr, readlineSync);
        }
        var item = readlineSync.question("enter the item to be entered")
        listObj.insert(pos, item);

        var lst_ele = listObj.pop();
        console.log("element returned by pop is " + lst_ele)
        var str = listObj.printlist();
        fs.writeFileSync('file.txt', str.trim())
    },
    expressionCheck: function (string) {
        for (i = 0; i < string.length; i++) {
            if (string[i] == '(')
                stObj.push(string[i]);
            else if (string[i] == ')')
                stObj.pop();
        }
        if (stObj.isEmpty()) {
            console.log("balanced")
        }
        else {
            console.log("unbalenced")
        }
    },
    palindromeCheck: function (str) {
        var flag = true;
        str = str.toLowerCase().trim();
        str.split('')
        for (var i = 0; i < str.length; i++) {
            if (str[i] != " ")
                deObj.addRear(str[i]);//add characters to the queue
        }
        while (deObj.isEmpty() > 0) {
            if (deObj.isEmpty() == 1) {
                break;
            }

            var front = deObj.removeFront()
            var rear = deObj.removeRear()
            if (front == rear)
                flag = true;
            else {
                flag = false;
                break;
            }

        }
        if (flag == true) {
            console.log("given string is a palindrome")
        }
        else {
            console.log("string is not a palindrome")
        }
    },
    cashCounter: function (persons, readlineSync) {
        for (var i = 0; i < persons; i++) {
            qeObj.enqueue(i);
        }
        while (qeObj.isEmpty() > 0) {
            var sel = readlineSync.question("enter your choice of 1.deposit 2.withdrawal 3.checkbalance-->")
            switch (sel) {
                case '1': qeObj.cashdeposit(readlineSync);
                    break;
                case '2': qeObj.withdraw(readlineSync);
                    break;
                case '3': qeObj.checkbalance();
                    break;
                default: console.log("invalid input,try again...")
            }
            qeObj.dequeue();
            var add = readlineSync.question("Do you need to add persons to the queue Y:yes N:No-->")
            if (add == 'Y' || add == 'y') {
                var number = readlineSync.question("enter number of persons u want to add: ")
                for (var i = 0; i < number; i++) {
                    qeObj.queue(i)
                }

            }
        }
        if (qeObj.isEmpty() == 0) {
            console.log("Queue is empty..Transaction done ")
        }
    },
    primeNumber: function (min, max) {
        var count = 0, primeArr = [];
        if (max <= 1000) {
            //  console.log(`prime numbers from  ${(min)} to ${(max)} are`)
            for (var i = min; i <= max; i++) {
                var flag = true;
                for (var j = 2; j <= i / 2; j++) {
                    if (i % j == 0)
                        flag = false
                }
                if (flag == true) {
                    // console.log(i)
                    count++;
                    primeArr.push(i);

                }
            }
        }
        return primeArr;
    },
    twoDArray: function (low, high) {

        var primeArr = this.primeNumber(low, high);
        var p = 100, prev = 0, j = 0, twoDArray = [];
        for (var i = 0; i < max / 100; i++)  //rows
        {
            var dArray = [], q = 0;
            for (j = 0; j < p; j++) {//columns

                if (primeArr[j] <= p && primeArr[j] > prev) {
                    dArray[q] = primeArr[j];
                    q++;
                }
                else if (primeArr[j] > p) {
                    prev = p;
                    p += 100;
                    break;
                }
            }
            twoDArray.push(dArray);


        }
        console.log(twoDArray)
    },
    anagram: function (low, high) {
        var anArray = [], primeArray = [], twoDArray = [];
        var primearr = this.primeNumber(low, high);
        for (var i = 0; i <= primearr.length; i++) {
            for (var j = i + 1; j <= primearr.length; j++) {
                var s1 = "" + primearr[i];
                var s2 = "" + primearr[j];
                s1 = s1.split('');
                s1 = s1.sort();
                s2 = s2.split('');
                s2 = s2.sort();
                if (s1.join() === s2.join()) {//checks if the prime numbers are anagrams are not
                    anArray.push(primearr[i]);
                }
            }
        }
        return anArray;
    },
    anaAndPrime: function (low, high) {
        var anArray = [], primeArray = [], twoDArray = [];
        var anArray = this.anagram(low, high);
        var primearr = this.primeNumber(low, high);
        for (var p = 0; p < primearr.length; p++) {
            for (var q = 0; q < anArray.length; q++) {
                if (primearr[p] === anArray[q]) {
                    break;
                }
                else {
                    primeArray.push(primearr[p]);
                    break;
                }
            }
        }
        twoDArray.push(anArray);
        twoDArray.push(primeArray);
        for (i = 0; i < twoDArray.length; i++) {
            var str = "";
            for (var j = 0; j < (twoDArray[i]).length; j++) {
                str = str + " " + (twoDArray[i])[j]
            }
            console.log(str)
        }

    },
    stackAnagram: function (low, high) {
        var res = "";
        var arr = this.anagram(low, high);
        for (var i = 0; i < arr.length; i++) {
            stObj.push(arr[i]);
        }
        var stack = stObj.printstack();
        console.log("stack is " + stack)
    },
    queueAnagram: function (low, high) {
        var arr = this.anagram(low, high)
        for (var i = 0; i < arr.length; i++) {
            qeObj.enqueue(arr[i]);
        }
        var str = qeObj.printList();
        console.log("anagrams in queue are " + str);
    },
    hash: function (array, readlineSync) {
        var arr
        // listObj.list();
        // listObj.add(array);
        //   var search=readlineSync.question("elemnt to search ")
        // if(listObj.search(search)){
        //     console.log("element found")
        // }
        // var str=listObj.printlist();
        // console.log(str)
        // console.log("size "+listObj.size());

    },
    printCalendar: function (noOfDays, frstDay) {
        var calendar = [];
        var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
        var week = [];
        calendar.push(days)
        var dates = 1;
        for (var i = 0; i < days.length; i++) {
            if (i < frstDay)
                week[i] = " "
            else {
                week[i] = dates;
                dates++;
            }
        }
        calendar.push(week)

        while (dates <= noOfDays) {
            var week = [];
            for (var i = 0; i < days.length; i++) {
                week[i] = dates;
                dates++;
                if ((dates - 1) > (noOfDays))
                    week[i] = " "
            }

            calendar.push(week)

        }
        this.print(calendar, days)
    },
    print: function (calendar, days) {
        for (var i = 0; i < calendar.length; i++) {
            var str = ""
            for (var j = 0; j < calendar[i].length; j++) {
                str = str + " \t " + (calendar[i])[j]

            }
            console.log(str);
        }
    },

}