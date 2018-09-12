var notes = 0;
module.exports = {
    /**
     * @function anagram checks if the given two strings are anagrams are not
     * @var {String} str1,str2 are the two arguments to be checked
     */
    anagram: function (str1, str2) {
        var count = 0;
        var sapce = false;

        if (typeof str1 == undefined || typeof str2 == undefined) {
            console.log("Strings are not defined")
            return;
        }
        for (i = 0; i < str1.length; i++) {
            if (str1[i] == ' ') {
                space = true;
                str1.splice(i,1)
            }
            
        }
        
        for (i = 0; i < str2.length; i++) {
            if (str2[i] == ' ') {
                space = true;
                str2.splice(i,1);
            }
        }
        if (isNaN(str1) && isNaN(str2) === true) {

            var s1 = str1.sort();
            var s2 = str2.sort();

            if (s1.join().toLowerCase() === s2.join().toLowerCase()) {  //checks if the strings are anagrams are not
                console.log("It is a anagram")
            }
            else {
                console.log("It is not a anagram")
            }

        }
        else {
            console.log("Inavlid input")
        }
    },
    /**
     * @function DisplayPrimes() displays all the prime numbers in the given range
     * @var {Number} min,max is the range to which the prime numbers should be determined
     */
    DisplayPrimes: function (min,max) {
        var count = 0, arr = [];
        if (max <= 1000) {
            console.log(`prime numbers from  ${(min)} to ${(max)} are`)
            for (var i = min; i <= max; i++) {
                var flag = true;
                for (var j = 2; j <= i / 2; j++) {
                    if (i % j == 0)
                        flag = false
                }
                if (flag == true) {
                    //console.log(i)
                    count++;
                    arr.push(i);

                }
            }
            console.log("NO of prime numbers are ", +count)
            console.log(arr)
            return arr;
        }
        else {
            console.log("range exceeded")

        }
    },
    /**
     * @function anaAndPal() determines the prime numbers which are both anagrams and palindromes in given range
     * @var {Number} min,max is the range to which prime numbers should be determined
     */
    anaAndPal: function (low,high) {
        var primearr = this.DisplayPrimes(low,high);//invokes displayprimes() function and gets prime numbers in range

        var anarr = [], printarr = [];
        for (var i = 0; i <= primearr.length; i++) {
            for (var j = i + 1; j <= primearr.length; j++) {
                var s1 = "" + primearr[i];
                var s2 = "" + primearr[j];
                s1 = s1.split('');
                s1 = s1.sort();
                s2 = s2.split('');
                s2 = s2.sort();
                if (s1.join()=== s2.join()) {//checks if the prime numbers are anagrams are not
                    console.log("the two anagrams are ", +primearr[i], +" ", +primearr[j]);
                    anarr.push(primearr[i]);
                    printarr.push(primearr[i])
                    printarr.push(primearr[j])



                }
            }
        }
        //console.log("the array of anagrams is ",+anarr);

        for (var k = 0; k < anarr.length; k++) {
            var r;
            var sum = 0;
            var n = anarr[k];
            var palarr = [];

            while (anarr[k] > 0) {//checks if anagrams are palindromes are not
                r = anarr[k] % 10;
                sum = (sum * 10) + r;
                anarr[k] = Math.floor(anarr[k] / 10);
            }
            if (n === sum) {
                palarr.push(n)
                console.log("palindromes are ", n);
            }
        }
        // console.log("Palindrome array is " + palarr)

    },
    /**
     * @function binarynum() to find the index of the given key
     * @var {Array} arr takes the array in which the elemnt need to be searched
     * @var {Number} key the element to be searched
     */
    binarynum: function (arr, first, last, key) {
        var mid;
        arr.sort();
        if (last >= first) {//checks if the number is there in the array or not
            mid = parseInt((first + last) / 2);
            if (parseInt(arr[mid]) === parseInt(key))
                return mid;
            if (parseInt(arr[mid]) > parseInt(key))
                return this.binarynum(arr, first, mid - 1, key)
            else
                return this.binarynum(arr, mid + 1, last, key)

        }
        return -1;
    },
    /**
     * @function binaryString() to find the given element in the given string array
     * @var{Array} arr string array in which the element is to be found
     * @var {String} key the element to be found
     */
    binaryString: function (arr, first, last, key) {
        var mid;
        arr.sort();
        if (last >= first) {//checks if the number is there in the array or not
            mid = Math.floor((first + last) / 2);
            if (arr[mid].toLowerCase() === key.toLowerCase())
                return mid;
            if (arr[mid] > key)
                return this.binaryString(arr, first, mid - 1, key)
            else
                return this.binaryString(arr, mid + 1, last, key)

        }
        return -1;
        // var n = arr.indexOf(key);//returns the index of the element
        // return (parseInt(n));
    },
    /**
     * @function getCurrentTime() to get the current time of the system
     */
    getCurrentTime: function () {
        var obj = new Date();//creating reference for Date class
        var start = obj.getTime();
        return start;
    },
    /**
     * @function elapsedTime() to get the elapsed time 
     */
    elapsedTime: function (start, end) {
        resultTime = end - start;
        return resultTime/1000;
    },
    /**
     * @function insertion() sorts the given array into ascending order
     * @var {Array} arr takes the array to be sorted as argument
     * @var {Number} len takes the length of the array to be sorted
     */
    insertion: function (arr, len) {
        var val, index, flag = true;
        for (var i = 0; i < len; i++) {
            if (isNaN(arr[i]))
                flag = false;
        }
        if (flag == false) {
            for (i = 1; i <= len - 1; i++) {
                val = arr[i];
                index = i;
                while (index > 0 && arr[index - 1] > val) {
                    arr[index] = arr[index - 1];//swaps the next element with before element
                    index--;
                }
                arr[index] = val;
            }
            console.log("sorted array is ", arr)
        }
        else {
            for (i = 1; i <= len - 1; i++) {
                val = arr[i];
                index = i;
                while (index > 0 && parseInt(arr[index - 1]) > parseInt(val)) {
                    arr[index] = arr[index - 1];
                    index--;
                }
                arr[index] = val;
            }
            console.log("sorted array is ", arr)
        }

    },
    /**
     * @function bubble() sorts the given array into ascending order
     * @var {Array} arr takes the array to be sorted as argument
     * @var {Number} ln takes the length of the array to be sorted
     */
    bubble: function (arr, n) {
        var flag = true;
        for (var i = 0; i < arr.length; i++) {
            if (isNaN(arr[i]))
                flag = false;
        }
        if (flag == true) {
            for (var k = 0; k <= n - 1; k++) {
                for (var i = 0; i <= n - 2; i++) {
                    if (parseInt(arr[i]) > parseInt(arr[i + 1])) {
                        temp = arr[i];//swaps the next element with before element
                        arr[i] = arr[i + 1]
                        arr[i + 1] = temp;
                    }
                }
            }
            console.log("Sorted array is ", arr)
        }
        else {
            for (var k = 0; k <= n - 1; k++) {
                for (var i = 0; i <= n - 2; i++) {
                    if (arr[i] > arr[i + 1]) {
                        temp = arr[i];
                        arr[i] = arr[i + 1]
                        arr[i + 1] = temp;
                    }
                }
            }
            console.log("Sorted array is ", arr)
        }
    },
    /**
     * @function merge() sorts the given array into ascending order
     * @var {Array} a1 takes the left array to be sorted as argument
     * @var {Array} a2 takes the right array to be sorted as argument
     */
    merge: function (a1, a2, a) {
        var i = 0; j = 0; k = 0;
        if (isNaN(a1[0])) {
            while (i < a1.length && j < a2.length) {

                if (a1[i] < a2[j]) {
                    a[k] = a1[i];
                    i++;
                    k++;
                }
                else {
                    a[k] = a2[j];
                    k++; j++;
                }
            }
            while (i < a1.length) {
                a[k] = a1[i];
                k++; i++;
            }
            while (j < a2.length) {
                a[k] = a2[j];
                k++; j++;
            }
        }
        else {
            while (i < a1.length && j < a2.length) {

                if (parseInt(a1[i]) < parseInt(a2[j])) {
                    a[k] = a1[i];
                    i++;
                    k++;
                }
                else {
                    a[k] = a2[j];
                    k++; j++;
                }
            }
            while (i < a1.length) {
                a[k] = a1[i];
                k++; i++;
            }
            while (j < a2.length) {
                a[k] = a2[j];
                k++; j++;
            }
        }
    },
    mergesort: function (arr) {
        if (arr.length == 1) { return; }
        var m = Math.floor(arr.length / 2);
        var arr1 = new Array(m);
        var arr2 = new Array(arr.length - m)
        var i = 0;
        for (i = 0; i < arr1.length; i++) {
            arr1[i] = arr[i];
        }
        for (var j = 0; j < arr2.length; j++ , i++) {
            arr2[j] = arr[i];
        }
        this.mergesort(arr1);
        this.mergesort(arr2);
        this.merge(arr1, arr2, arr);
        return arr;
    },
    /**
     * @function calendar() takes date as input and gives the day of the date
     * @var {Number} m,d,y takes month date and year as arguments
     */
    calendar: function (day, month, year) {

        aa = (Math.floor((14 - month) / 12));
        aa = parseInt(aa);
        
        yy = year - aa;
        
        mm = ((month + (12 * aa)) - 2);
        mm = parseInt(mm);
        
        dayofweek = ((day + yy + Math.floor(yy / 4) - Math.floor(yy / 100)     /**This is the formula for 
                                                                            calculating day of week*/
        + Math.floor(yy / 400) + Math.floor((31 * mm) / 12)) % 7);
        
        dayofweek = parseInt(dayofweek);
        switch ((dayofweek)) {
            case 0:
                console.log("Sunday");
                break;
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
        }

    },

    /**
     * @function temperature() converts the celsius from farenheit and viceversa
     * @var {Number} takes the temperature value to be converted
     */
    temperature: function (t, temptype) {
        if (temptype == 1) {
            var res = (t - 32) * (5 / 9);
            console.log("celsius temperature is", res)
        }
        else if(temptype==2){
            var res = (t * (9 / 5)) + 32;
            console.log("Farenheit temperature is", res)
        }
        else{
            console.log("invalid temperature type")
        }
    },
    /**
     * @function monthlyPayments() caluclates the monthly payments for the given capital
     */
    monthlyPayments: function (p, i, y) {
        // var n = 12 * y;
        // var r = i / (12 * 100);
        // var pow = Math.pow((1 + r), (-n));

        // console.log(pow);
        // var payment = (p * r) / pow;
        var temp = 1 + (i / 100)
        var x = Math.pow(temp, y)
        var payments = p * (x - 1)
        console.log("Total payments is ", payments)
    },
    /**
     * @function sqrt() gives the square root of the given number
     * @var {Number} c takes the number as argument
     */
    sqrt: function (c) {
        var t = c;
        var epsilon = 1e-15
        while (Math.abs(t - (c / t) > epsilon)) {
            t = ((c / t) + t) / 2;  //caluclates the square root
        }

        return t;

    },
    /**
     * @function toBinary() takes the decimal value and converts it into binary number
     * @var {Number} dec takes the decimal value to be converted
     */
    toBinary: function (dec) {
        var a = 0;
        var res = " ";
        while (dec > 0) {
            a = Math.floor(dec % 2);
            res = res + "" + a;    //converts the binary value
            dec = Math.floor(dec / 2);
        }
        var resarr = (res.split('')).reverse().join('');
        console.log("Binary value of given decimal is " + resarr);
        return resarr;
    },
    /**
     * @function Binary() takes the binary value and converts it into decimal value
     * @var {Number} bin takes the binary value to be converted
     */
    Binary: function (bin) {
        var str = "" + bin;
        var arr = (str.split('')).reverse();
        var dec = 0;
        for (var i = 0; i < arr.length; i++) {
            dec += parseInt(arr[i] * (Math.pow(2, i)));
        }
        console.log("decimal value of the given number is " + dec);
        return dec;

    },
    /**
     * @function nibble() swaps the nibbles of the given binary number
     * @var {Number} bin takes the binary value to be swapped
     */
    nibble: function (bin) {
        var str = "" + bin;
        var mid = 0, str1 = "", res = [];
        var flag = false;
        var final = "";
        while (flag == false) {
            if (str.length == 9) {

                mid = Math.floor(str.length / 2);
                //console.log(mid + "mid value");
                var str1 = str.slice(0, mid);
                var str2 = str.slice(mid, str.length)//swaps the nibbles
                var res = (str2.trim()) + str1;
                flag = true;
                console.log("New binary number is" + res);
                return res;
            }
            else {
                while (str.length < 9) {
                    str = '0' + str;        //appends the 0 to make the value into 8-bit
                }
            }
        }

    },
    /**
     * @function checkpow() checks if the given number is in the 2 power n format
     * @var {Number} n takes the number to be checked
     */
    checkPow: function (n) {
        var pow = 0;
        while (n > 1) {
            if (n % 2 == 0)
                pow++;  //counts the power value
            else
                return -1;
            n = n / 2;
        }
        return pow;
    },
    /**
     * @function vending() takes the amount and gives the minimum number of notes needed for the amount
     * @var {Number} amnt takes the amount as argument
     */
    vending: function (amnt) {

        if (amnt == 0) return notes;//if amount is 0 returns 0
        if (amnt >= 1000) {
            var Tnotes = Math.floor(amnt / 1000)
            notes += Tnotes;
            console.log("No of 1000 rupee notes are " + Tnotes);//caluclates number of 1000 rupee notes needed
            if (amnt % 1000 == 0) {
                console.log(notes + "minimum no of notes")
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 1000));
        }
        else if (amnt >= 500) {
            var fnotes = Math.floor(amnt / 500)
            notes += fnotes;
            console.log("No of 500 rupee notes are " + fnotes);//caluclates number of 500 rupee notes
            if (amnt % 500 == 0) {
                console.log(notes + "minimum no of notes")
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 500));
        }
        else if (amnt >= 100) {
            var hnotes = Math.floor(amnt / 100)
            notes += hnotes;
            console.log("No of 100 rupee notes are " + hnotes);//caluclates number of 100 rupee notes
            if (amnt % 100 == 0) {
                console.log(notes + "minimum no of notes")
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 100));
        }
        else if (amnt >= 50) {
            var finotes = Math.floor(amnt / 50)//caluclates number of 50 rupee notes
            notes += finotes;
            console.log("No of 50 rupee notes are " + finotes);
            if (amnt % 50 == 0) {
                console.log(notes + "minimum no of notes")
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 50));
        }
        else if (amnt >= 10) {
            var tenotes = Math.floor(amnt / 10);
            notes += tenotes;
            console.log("No of 10 rupee notes are " + tenotes);//caluclates number of 10 rupee notes
            if (amnt % 10 == 0) {
                console.log(notes + "minimum no of notes")
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 10));
        }
        else if (amnt >= 5) {
            var fivenotes = Math.floor(amnt / 5);
            notes += fivenotes;
            console.log("No of 5 rupee notes are " + fivenotes);//caluclates number of 5 rupee notes
            if (amnt % 5 == 0) {
                console.log(notes + "minimum no of notes")
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 5));
        }
        else if (amnt >= 2) {
            var twonotes = Math.floor(amnt / 2);
            notes += twonotes;
            console.log("No of 2 rupee notes are " + twonotes);//caluclates number of two rupee notes
            if (amnt % 2 == 0) {
                console.log(notes + "minimum no of notes")
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 2));
        }
        else if (amnt >= 1) {
            var onenotes = Math.floor(amnt / 1);
            notes += onenotes;
            console.log("No of 1 rupee notes are " + onenotes);//caluclates number of 1 rupee
            if (amnt % 1 == 0) {
                console.log(notes + "minimum no of notes");
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 1));
        }
    },
    /**
     * @function guesnumber() guess the number expected by the user
     *@var {Number} low,high takes the range in which the element is to be guessed
     */
    guessnumber: function (low, high, readlineSync) {
        mid = Math.floor((low + high) / 2);
        console.log(`Is your number equal to ${(mid)},press 0 or if less,press 1 or if greater press 2`)
        var temp = readlineSync.question('enter option!!')
        if (temp == 0) {
            console.log("your number is " + mid)
        }
        else if (temp == 1) {
            this.guessnumber(0, mid - 1, readlineSync);
        }
        else if (temp == 2) {
            this.guessnumber(mid + 1, high, readlineSync);
        }
        else {
            console.log("Invalid option")
        }
    },


}
