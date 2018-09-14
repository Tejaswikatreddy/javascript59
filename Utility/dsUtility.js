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
        for (var i = 0; i < arr.length; i++) {
            if (isNaN(arr[i]))
                listObj.add(arr[i]);
        }       
        var ele = readlineSync.question("enter the element to be search: ");//enter the element you want to remove
        if(isNaN(ele)==false){
            console.log("enter string element to search,try again...")
            var ele = readlineSync.question("enter the element to be search: ");
        }
        var index = listObj.indexOf(ele)
        if (index >= 0) {
            listObj.remove(ele)//remove the element if it is found
            console.log("element found and removed")
        }
        else {
            listObj.add(ele)//add the element if it is notr present in the list
            console.log("element not found so added to the list")
        }
        
        var str = listObj.printlist();
        fs.writeFileSync('file.txt', str.trim())//save the modified list into the file
    },
    /**
     * @function expressionCheck() checks if the given expression have balanced paranthesis
     * @var {String} string expression whichis to be checked
     */
    expressionCheck: function (string) {
        for (i = 0; i < string.length; i++) {
            if (string[i] == '(')
                stObj.push(string[i]);//invoke push method of stack
            else if (string[i] == ')')
                stObj.pop();  //invoke pop method of the stack
        }
        if (stObj.isEmpty()) {
            console.log("balanced")
        }
        else {
            console.log("unbalenced")
        }
    },
    /**
     * @function palindrome() checks if the given string is palindrome or not
     * @var {String} str the string to be checked
     */
    palindromeCheck: function (str) {
        var flag = true;
        str = str.toLowerCase().trim();
        str.split('')   //covert the string into an array
        for (var i = 0; i < str.length; i++) {
            if (str[i] != " ")
                deObj.addRear(str[i]);//add characters to the queue
        }
        while (deObj.isEmpty() > 0) {
            if (deObj.isEmpty() == 1) {
                break;
            }

            var front = deObj.removeFront() //invokes removeFRont method of dequeue
            var rear = deObj.removeRear()   //invokes removeRear methof of dequeue
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
    /**
     * @function cashCounter() performs transaction of the persons
     * @var {Number} persons no of persons that are present in the queue intially
     */
    cashCounter: function (persons, readlineSync) {
        for (var i = 0; i < persons; i++) {
            qeObj.enqueue(i);//enequeue the people into the queue
        }
        while (qeObj.isEmpty() > 0) {
            var sel = readlineSync.question("enter your choice of 1.deposit 2.withdrawal 3.checkbalance-->")//takes the choice of transaction as input
            switch (sel) {
                case '1': qeObj.cashdeposit(readlineSync);
                    break;
                case '2': qeObj.withdraw(readlineSync);
                    break;
                case '3': qeObj.checkbalance();
                    break;
                default: console.log("invalid input,try next time...")
            }
            qeObj.dequeue();//after every transaction dequeu one person from the queue
            var add = readlineSync.question("Do you need to add persons to the queue Y:yes N:No-->")
            if (add == 'Y' || add == 'y') {
                var number = readlineSync.question("enter number of persons u want to add: ")
                for (var i = 0; i < number; i++) {//every time check if there are persons to enter into the queue
                    qeObj.queue(i)
                }
            }
        }
        if (qeObj.isEmpty() == 0) {
            console.log("Queue is empty..Transaction done ")
        }
    },
    /**
     * @function primeNumber() gives the prime Numbers from 0 to `1000`
     */
    primeNumber: function () {
        var count = 0, primeArr = [],max=1000;
        if (max <= 1000) {
            for (var i = 0; i <= max; i++) {
                var flag = true;
                for (var j = 2; j <= i / 2; j++) {
                    if (i % j == 0)
                        flag = false
                }
                if (flag == true) {
                    count++;
                    primeArr.push(i);   //pushing all the prime numbers into an array

                }
            }
        }
        return primeArr;    
    },
    /**
     * @function twoDArray () prints the prime numbers in the form of twoDArray
     */
    twoDArray: function () {

        var primeArr = this.primeNumber();
        var p = 100, prev = 0, j = 0, twoDArray = [],max=1000;
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
        for(var i=0;i<twoDArray.length;i++){
            var str="";
            for(var j=0;j<twoDArray[i].length;j++){
                 str = str +" "+ (twoDArray[i])[j]
            }
                console.log(str)
        }
        
    },
    /**
     * @function anagram() give the prime numbers and anagrams from 0 to 1000
     */
    anagram: function () {
        var anArray = [], primeArray = [], twoDArray = [];
        var primearr = this.primeNumber();
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
    /**
     * @function anaAndPrime() prints the prime numbers and anagrams seperately in two dimensional array
     */
    anaAndPrime: function () {
        var anArray = [], primeArray = [], twoDArray = [];
        var anArray = this.anagram();
        var primearr = this.primeNumber();
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
        // for (i = 0; i < twoDArray.length; i++) {
        //     var str = "";
        //     for (var j = 0; j < (twoDArray[i]).length; j++) {
        //         str = str + " " + (twoDArray[i])[j]
        //     }
        //     console.log(str)
        // }
        console.log(twoDArray)

    },
    /**
     * @function stackAnagram() prints the anagrams in the reverse order using stack
     */
    stackAnagram: function () {
        var res = "";
        var arr = this.anagram();
        for (var i = 0; i < arr.length; i++) {
            stObj.push(arr[i]); //pushes the anagram array into the stack
        }
        var stack = stObj.printstack();//prints the stack
        console.log("stack is " + stack)
    },
    /**
     * @function queueAnagram() takes the anagrams into queue and prints the queue
     */
    queueAnagram: function () {
        var arr = this.anagram()
        for (var i = 0; i < arr.length; i++) {
            qeObj.enqueue(arr[i]);//enqueues the anagrams into the queue
        }
        var str = qeObj.printList();//prints the queue
        console.log("anagrams in queue are " + str);
    },
    /**
     * @function prntCalendar() prints the calendar of the given month
     * @var {Number} noOfDays is thenumber of days in the given month
     * @var {Number} frstDay is the day of the first date of the month
     */
    printCalendar: function (noOfDays, frstDay) {
        var calendar = [];
        var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
        var week = [];
        calendar.push(days)  //push an array into an array
        var dates = 1;
        for (var i = 0; i < days.length; i++) {
            if (i < frstDay)
                week[i] = " "
            else {
                week[i] = dates;
                dates++;
            }
        }
        calendar.push(week)     //push an array into an array

        while (dates <= noOfDays) {
            var week = [];
            for (var i = 0; i < days.length; i++) {
                week[i] = dates;
                dates++;
                if ((dates - 1) > (noOfDays))
                    week[i] = " "
            }

            calendar.push(week)        //push an array into an array

        }
        this.print(calendar, days)
    },
    /**
     * @function print() prints the calendar
     */
    print: function (calendar, days) {
        for (var i = 0; i < calendar.length; i++) {
            var str = ""
            for (var j = 0; j < calendar[i].length; j++) {
                str = str + " \t " + (calendar[i])[j]   //printing a 2D array in string format

            }
            console.log(str);
        }
    },

}