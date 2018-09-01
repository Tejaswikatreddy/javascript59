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
                console.log("palindromes are ", n)
            }
        }

    },
    binarynum: function (arr, first, last, key) {
        var mid;
        arr.sort();
        console.log(arr)
        console.log(key)
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
        var val, index;
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
    },
    bubble: function (arr, n) {
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

    },
    merge: function (a, b, c) {
        var c = new Array();
        var i = 0; j = 0; k = 0;
        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                c[k] = a[i];
                k++;
                i++;
            }
            else {
                c.push(b[j]);
                j++;
                k++;

            }
        }
        while (i < a.length) {
            c.push(a[i]);
            k++;
            i++;
        }
        while (j < b.length) {
            c.push(b[j]);
            k++; j++;
        }
        console.log(c);

    },
    sort: function (arr) {
        if (arr.length == 1) return;
        var m = arr.length / 2;
        var l = new Array(m);
        var r = new Array(arr.length - m)

        for (var i = 0; i < l.length; i++) {
            l[i] = arr[i];

            for (var j = 0; j < r.length; j++) {
                r[j] = arr[i];
            }

            this.sort(l)
            this.sort(r)
            this.merge(l, r, arr)
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
         var temp=1+(i/100)
         var x=Math.pow(temp,y)
         var payments=p*(x-1)
         console.log("Total payments is ", payments)
    },
    sqrt:function(c)
    {
        var t=c;
        var epsilon=1e-15
        while(Math.abs(t-(c/t)>epsilon))
            {
                 t=((c/t)+t)/2;
            }
       
       return t;
            
    }

}
