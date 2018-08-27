const _=require('lodash');

 var swap=function(str,i,j)
        {
           var temp;
           var ar = str.split(); 
           temp=ar[i];
           ar[i]=ar[j];
           ar[j]=temp;
           return ar.toString();
        }
        
         function StringPermutation(str,frstIndex,lstIndex)
    {
    if(lstIndex===frstIndex)
        {
            console.log(str)
        }
    for(var i=0;i<lstIndex;i++)
        {
            if(lstIndex!=frstIndex)
                {
           str= swap(str,i,str.length)
              StringPermutation(str,frstIndex+1,lstIndex)
           str= swap(str,i,str.length)
        }
        }
    }
module.exports = {
    StringPermutation:StringPermutation,

    hii: function (userinput) {
        console.log("Hii " + userinput + " How are you")
    },

    coin: function (n) {

        var num = Math.random();
        if (num < 0.5) {
            tails++;
        }
        else {
            heads++;
        }
        console.log("No of heads", heads, "percentage of heads is ", (heads / n) * 100)
        console.log("No of tails", tails, "percentage of tails is ", (tails / n) * 100)

    },

    leap: function (userinput) {
        if (userinput.length == 4) {

            if (userinput % 400 == 0 || userinput % 4 == 0) {

                console.log("It is a leap year")

            }
            else
            console.log("Invalis year input")
        }
       
    },
    
    power: function (n) {
        for (var i = 0; i <= n; i++) {
            var pow = Math.pow(2, i);
            console.log("2 power ", i, "is", pow)
        }
    },

    harmonic: function (n) {

        var sum = 0;
        for (var i = 1; i <= n; i++) {
            sum = sum + (1 / i)
        }
        console.log("the harmonic value is ", sum)
    },

    factorization: function (n) {
        var flag=false;
        for (var i = 1; i <= n / 2; i++) 
        {

        if (n % i == 0)
         {
             for(var j=2;j<=i;j++)
             {
                 if(i%j==0)
                 {
                  flag=true;
                  console.log("prime factor is ",i)
                 }
             }
             
        }
       
        }
        if(flag==false){
            console.log("No prime factors")
               
      }

        
    },
    gambler(amnt, desireamnt, trials)
    {
        var cash = amnt, loss = 0, wins = 0;
        
        for (var i = 1; i <= trials; i++) {
            if(cash!=0 || cash<desireamnt)
            {            
            if (Math.random() > 0.5) {
                cash++;        //wins
                console.log("won the game");
                wins++;
                
            }
            else {
                cash--; //looses
                console.log("loss the game")
                loss++
            }
        }
        }
        console.log("cash there finally is "+cash)
        console.log("no of wins are ", wins, " in", trials, "trials");
        console.log("no of lost are ", loss, " in", loss, "trials");
        console.log("percentage  of wins are ", Math.floor((wins / trials) * 100));
        console.log("percentage  of loss are ", Math.floor((loss / trials) * 100));
    },
    coupon:function(min,max) 
    {
       var random=[],count,ele;

       for(count=min;count<max;count++)
       {
          n=_.random(min,max);
          random.push(n);
       
       }
       console.log(random);
       console.log("No of coupouns generated="+random.length);
       var different=new Set(random);
       console.log("different generated are ",different)
       console.log("No of distinct coupons= "+[...different].length);     
    },
        quadratic:function(a,b,c)
        {
            var delta=b*b-4*a*c;
            if(delta>0)
                {
            var x=(-b+(Math.sqrt(delta)))/(2*a)
            var y=(-b-(Math.sqrt(delta)))/(2*a)
            console.log("root value is "+x)
            console.log("root value is "+y)
                }
        else{
            consloe.log("Invalid delta value")
        }
        },

    windchill:function(t,v)
    {
    if(v<120 && v>3)
    {
    var w=35.74+0.65*t+(0.4275*t-35.75)*(Math.pow(v,0.16))
    console.log("The value of effective temperature is ",w);
    }
    else
    {
        console.log("formula invalid for the given input")
    }
},
Distance:function(x,y)
{
     resDistance=Math.pow(Math.pow(x,2)+Math.pow(y,2),1/2)
     console.log("Resultant distance is ",Math.round(resDistance))
},
}
