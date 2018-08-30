module.exports={
    anagram:function(str1,str2)
{
    var count=0;
    if(typeof str1== undefined || typeof str2==undefined)
        {
            console.log("Strings are not defined")
        }
        if(isNaN(str1) && isNaN(str2) === true)
            {
                var s1=(str1.sort()).join;
                var s2=(str2.sort()).join;
                if(s1===s2)
                {
                    console.log("It is a anagram")
                }

            }
            else{
                console.log("Inavlid input")
            }
},
    DisplayPrimes:function()
    {
        var count=0;
        console.log("prime numbers from 1 to 1000 are")
        for(var i=0;i<=1000;i++)
            {
                var flag=true;
                for(var j=2;j<=i/2;j++)
                    {
                        if(i%j==0)
                            flag=false
                    }
                    if(flag==true)
                        {
                            console.log(i)
                            count++;
                        }
            }
                    console.log("NO of prime numbers are ",+count)
    }
}