module.exports = {
    anagram: function (str1, str2) {
        var count = 0;
        if (typeof str1 == undefined || typeof str2 == undefined) {
            console.log("Strings are not defined")
            return;
        }
        if (isNaN(str1) && isNaN(str2) === true) {
            var s1 = (str1.sort()).join;
            var s2 = (str2.sort()).join;
            if (s1 === s2) {
                console.log("It is a anagram")
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
        //console.log("Number function")
        //console.log(key)
        if (last >= first) {
            mid = parseInt((first + last) / 2);
            console.log(mid)
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
        console.log(arr);
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
    merge: function (a, l, m, r) {
        console.log("merge function")
        var n1 = parseInt(m - l + 1);
        console.log("n1" + n1);
        var n2 = parseInt(r - m);
        var L = new Array(n1);
        var R = new Array(n2);
        for (var p = 0; p < n1; p++) {
            L[p] = a[l + p];
        }
        for (var q = 0; q < n2; q++) {
            R[q] = arr[m + 1 + q];
        }
        var i = 0, j = 0;
        var k = 1;
        while (parseInt(i) < parseInt(n1) && parseInt(j) < parseInt(n2)) {
            console.log("while loopfrst")
            if (l[i] <= R[j]) {
                a[k] = L[i];
                i++;
            }
            else {
                a[k] = R[j];
                j++;
            }
            k++;
        }
        while (i < n2) {
            console.log("while loop secnd")
            arr[k] = L[i];
            i++; j++;
        }
        while (j < n2) {
            console.log("while loop secnd")
            a[k] = R[j];
            j++; k++;

        }
        console.log("sorted array is " + a);

    },
    sort: function (arr, r, l) {
        console.log("sort function");
        if (r < l) {
            var m = Math.floor((l + r) / 2);
            console.log(m + "m value");
            this.sort(arr, l, m);
            this.sort(arr, m + 1, r);
            this.merge(arr, l, m, r);
        }
    },
    calendar: function (m, d, y) {
        var y0, m0, d0, x;
        y0 = (y - ((14 - m) / 12));
        x = y0 + ((y0 / 4) - (y0 / 100) + (y0 / 400));
        m0 = m + (12 * x) * ((14 - m) / 12) - 2;
        d0 = (d + x + ((31 * m0) / 12)) % 7
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
        var mid = 0, str1 = "", arr = [], arr2 = [], arr1 = [], res = [];
        var flag = false;
        var final = "";
        while (flag == false) {
            if (str.length == 9) {

                mid = Math.floor(str.length / 2);
                console.log(mid + "mid value");
                var str1=str.slice(0,mid);
                var str2=str.slice(mid,str.length)
                var res=(str2.trim())+str1;
                flag=true;
                console.log("New binary number is" +res);
                return res;
            }
            else {
                while (str.length < 9) {
                    str = '0' + str;
                }
            }
        }
        
    },
    checkPow:function(n)
        {
            var pow=0;
            while(n>1)
                {
                    if(n%2==0)
                        pow++;
                    n=n/2;
                }
                return pow;
        }


}
