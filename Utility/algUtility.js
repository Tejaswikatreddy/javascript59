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
        if(n<=1000){
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
    else
        {
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
                anarr[k] = Math.floor(anarr[k]/10);
            }
            if (n===sum) {
                console.log("palindromes are ",n)
            }
        }

    },
    binarynum:function(arr,first,last,key)
    {
       
       console.log("Number function")
      
        var mid;
        arr.sort();
        var a=[];      
        if(last>=first)
            {
                 mid=parseInt((first+last)/2);
                 if(arr[mid]===key)
                    return (parseInt(mid));
                 if(arr[mid]>key)
                    return this.binarynum(arr,first,mid-1,key)
                 else
                     return this.binarynum(arr,mid+1,last,key)

            }
                return -1;
       },
    binaryString:function(arr,first,last,key)
    {
       console.log(arr);
       var n=arr.indexOf(key);
       return n;
     
            
    }
}
