var notes = 0;
module.exports = {
/**
 * 
 */
    anagram: function (str1, str2) {
        var count = 0;
        if (typeof str1 == undefined || typeof str2 == undefined) {
            console.log("Strings are not defined")
            return;
        }
        if (isNaN(str1) && isNaN(str2) === true) {
             
             var s1 = str1.sort();
             var s2 = str2.sort();

            if (s1.join() === s2.join()) {
                console.log("It is a anagram")
            }
            else{
                console.log("It is not a anagram")
            }

        }
        else {
            console.log("Inavlid input")
        }
    },
    DisplayPrimes: function (n) {
        var count = 0, arr = [];
        if (n <= 1000) {
            console.log(`prime numbers from 1 to ${(n)} are`)
            for (var i = 0; i <= n; i++) {
                var flag = true;
                for (var j = 2; j <= i / 2; j++) {
                    if (i % j == 0)
                        flag = false
                }
                if (flag == true) {
                    console.log(i)
                    count++;
                    arr.push(i);

                }
            }
            console.log("NO of prime numbers are ", +count)
            return arr;
        }
        else {
            console.log("range exceeded")

        }
    },
    anaAndPal: function (n) {
        var primearr = this.DisplayPrimes(n);
        var anarr = [];
        for (var i = 0; i <= primearr.length; i++) {
            for (var j = i + 1; j <= primearr.length; j++) {
                var s1 = "" + primearr[i];
                var s2 = "" + primearr[j];
                s1 = s1.split('');
                s1 = s1.sort();
                s2 = s2.split('');
                s2 = s2.sort();
                if (s1.join() === s2.join()) {
                    console.log("the two anagrams are ", +primearr[i], +" ", +primearr[j]);
                    anarr.push(primearr[i]);

                }
            }
        }

        for (var k = 0; k < anarr.length; k++) {
            var r;
            var sum = 0;
            var n = anarr[k];

            while (anarr[k] > 0) {
                r = anarr[k] % 10;
                sum = (sum * 10) + r;
                anarr[k] = Math.floor(anarr[k] / 10);
            }
            if (n === sum) {
                console.log("palindromes are ", n);
            }
        }

    },
    binarynum: function (arr, first, last, key) {
        var mid;
        arr.sort();
        if (last >= first) {
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
    binaryString: function (arr, key) {
        arr.sort();
        var n = arr.indexOf(key);
        return (parseInt(n));


    },
    getCurrentTime: function () {
        var obj = new Date();//creating reference for Date class
        var start = obj.getTime();
        return start;
    },
    elapsedTime: function (start, end) {
        resultTime = end - start;
        return resultTime;
    },
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
                    arr[index] = arr[index - 1];
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
                        temp = arr[i];
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
    merge: function (a1, a2, a) {
        var i = 0; j = 0; k = 0;
        if(isNaN(a1[0])){
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
    else{
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
    calendar: function (m, d, y) {
        var y0, m0, d0, x;
        y0 = y-Math.round((14-m)/12)
        x = y0+Math.round(y0/4)-Math.round(y0/100)+Math.round(y0/400)
        m0 = m+Math.round(12*((14-m)/12)-2);
        d0 = Math.round((d+x+(31*m0)/12)%7)
        return d0;
                    
    },
    temperature: function (t, temptype) {
        if (temptype == 1) {
            var res = (t - 32) * (5 / 9);
            console.log("celsius temperature is", res)
        }
        else {
            var res = (t * (9 / 5)) + 32;
            console.log("Farenheit temperature is", res)
        }
    },
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
    sqrt: function (c) {
        var t = c;
        var epsilon = 1e-15
        while (Math.abs(t - (c / t) > epsilon)) {
            t = ((c / t) + t) / 2;
        }

        return t;

    },
    toBinary: function (dec) {
        var a = 0;
        var res = " ";
        while (dec > 0) {
            a = Math.floor(dec % 2);
            res = res + "" + a;
            dec = Math.floor(dec / 2);
        }
        var resarr = (res.split('')).reverse().join('');
        console.log("Binary value of given decimal is " + resarr);
        return resarr;
    },
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
    nibble: function (bin) {
        var str = "" + bin;
        var mid = 0, str1 = "",  res = [];
        var flag = false;
        var final = "";
        while (flag == false) {
            if (str.length == 9) {

                mid = Math.floor(str.length / 2);
                console.log(mid + "mid value");
                var str1 = str.slice(0, mid);
                var str2 = str.slice(mid, str.length)
                var res = (str2.trim()) + str1;
                flag = true;
                console.log("New binary number is" + res);
                return res;
            }
            else {
                while (str.length < 9) {
                    str = '0' + str;
                }
            }
        }

    },
    checkPow: function (n) {
        var pow = 0;
        while (n > 1) {
            if (n % 2 == 0)
                pow++;
            else
                return -1;
            n = n / 2;
        }
        return pow;
    },
    vending: function (amnt) {

        if (amnt == 0) return notes;
        if (amnt >= 1000) {
            var Tnotes = Math.floor(amnt / 1000)
            notes += Tnotes;
            console.log("No of 1000 rupee notes are " + Tnotes);
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
            console.log("No of 500 rupee notes are " + fnotes);
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
            console.log("No of 100 rupee notes are " + hnotes);
            if (amnt % 100 == 0) {
                console.log(notes + "minimum no of notes")
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 100));
        }
        else if (amnt >= 50) {
            var finotes = Math.floor(amnt / 50)
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
            console.log("No of 10 rupee notes are " + tenotes);
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
            console.log("No of 5 rupee notes are " + fivenotes);
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
            console.log("No of 2 rupee notes are " + twonotes);
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
            console.log("No of 1 rupee notes are " + onenotes);
            if (amnt % 1 == 0) {
                console.log(notes + "minimum no of notes");
                return notes;
            }
            else
                this.vending(Math.floor(amnt % 1));
        }
    },
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
