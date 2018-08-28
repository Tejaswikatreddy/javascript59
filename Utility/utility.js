const _=require('lodash');
var prompt=require("prompt");
 
   
module.exports = {
    //Take the user input and replace the given string with it
    hii: function (userinput) {
        console.log("Hii " + userinput + " How are you")//prints the given string with the username
    },
    //flips a coin for the given number of trails using random() function 
    //and caluclates the percentage of occurance of head and tail 
    coin: function (n) {

        var num = Math.random();//returns a any nummber between 0 to 0.9 and that is tored in num
        if (num < 0.5)   //enters the loop if the generated random number is less than 0.5
        {    
            tails++;      //increments the occurance of tail count by 1
        }
        else               //enters the loop if the 'if' condition failsl 
        {
            heads++;        //increment the occurance of head count
        }
        //prints the percentage of no of heads occured in the total trails
        console.log("No of heads", heads, "percentage of heads is ", (heads / n) * 100)
        //prints the percentage of no of tails occured in total trails
        console.log("No of tails", tails, "percentage of tails is ", (tails / n) * 100)

    },
    //checks if the given year is leap year or not
    leap: function (year) {
        if (year.length == 4) {//checks if the given input year length is exactly 4

            if (year % 400 == 0 || year % 4 == 0) {
                //enters the loop if the given year is divisible by 4 or 400 
                console.log("It is a leap year")
                //if the condition is satisfied it is a leap year and gives the output as leap year

            }
            else
            console.log("Invalis year input")
            //if the given year length is not of length 4 then it is not a valid input
        }
       
    },
    //gives the values of 2 power 1 to given number 'n'
    power: function (n) {
        for (var i = 0; i <= n; i++) {
            //runs the loop from 0 to given n value
            var pow = Math.pow(2, i);
            //Math.pow() returns the value of 2nd argument power of 1st argument and it is stored it in pow 
            console.log("2 power ", i, "is", pow)
            //prints the pow value of all the values less than n
        }
    },
    //gives the sum of given 'n' harmonic values
    harmonic: function (n) {

        var sum = 0;//Initialize sum=0
        for (var i = 1; i <= n; i++) {
            //run the loop from 1 to n
            sum = sum + (1 / i)
            //adds every harmonic value to sum from 1 to n and store it in sum
        }
        console.log("the harmonic value is ", sum)//prints the sum
    },
    //prints the prime factors of the given number 'n'
    factorization: function (n) {
        var flag=false;
        for (var i = 1; i <= n / 2; i++) //runs the loop from 1 to half of the number
        {

        if (n % i == 0)//checks if 'i' is the factor of 'n'
         {
             for(var j=2;j<=i;j++)
             {
                 if(i%j==0)//to check if the factor of 'n' is a prime number
                 {
                  flag=true;
                  console.log("prime factor is ",i)//prints i if it is a prime factor
                 }
             }
             
        }
       
        }
        if(flag==false){
        //if flag is false after the entire loop then there are no prime factors of the given 'n'
         console.log("No prime factors")
               
      }        
    },
    //Gambler program
    gambler(amnt, desireamnt, trials)
    {
        var cash = amnt, loss = 0, wins = 0;
        
        for (var i = 1; i <= trials; i++) {
            //runs the loop from 1 to number of trails given
            if(cash!=0 || cash<desireamnt)
            {           
            //enters the loop if the cash wit the player is not zero
            //or if the player still doesnot win the game 
            if (Math.random() > 0.5) {
                //enters the loop if the player wins the trial
                cash++;        //the player will get 1$ if she wins the game
                console.log("won the game");
                wins++;        //No of wins is increased by 1
                
            }
            else {
                cash--; //if the player looses the trial she will loose 1$
                console.log("loss the game")
                loss++  //no of looses is incremented by 1
            }
        }
        }
        console.log("cash there finally is "+cash)//final amount with the user
        console.log("no of wins are ", wins, " in", trials, "trials");//no of times the player won the trial
        console.log("no of lost are ", loss, " in", loss, "trials");//no of times the player loss the trial
        console.log("percentage  of wins are ", Math.floor((wins / trials) * 100));//percentage of no of wins
        console.log("percentage  of loss are ", Math.floor((loss / trials) * 100));//percentage of no of looses
    },
    //to get how many distinct cupoun numbers  are generated between the given numbers
    coupon:function(min,max) //
    {
       var random=[],count,ele;//declare an array random and two variables count and ele

       for(count=min;count<max;count++)//runs the loop from 0 to maximum value given
       {
          n=_.random(min,max);//gives any random number between minimum and maximum value and stores in n
          random.push(n);//push the generated random number into random array
       
       }
       console.log(random);//prints all the random numbers that are generated
       //prints the no of random numbers that are generated
       console.log("No of coupouns generated="+random.length);
       //copy the random numbers into array so that duplicates are removed
       var different=new Set(random);
       console.log("different generated are ",different)
       //prints all the distinct numbers that are generated
       console.log("No of distinct coupons= "+[...different].length);
       //gives the number of distinct numbers generated     
    },
//gives the quadratic roots of the given function
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
            else
            {
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


twodarray:function(read,r,c)
{
    var limit=r*c;
    var arr1=[];
    function input(limit)
    {
         if(arr1.length>= limit)
            {
                 var k=0;
                 arr2=[];
                 var string=' ';
                 for(var i=0;i<r;i++)
                    {
                         for(var j=0;j<c;j++)
                            {
                                 string=string+arr1[k]+' ';
                                 k++;
                            }
                                arr2.push(string);
                                string=' ';

                    }
                            for(var index=0;index<arr2.length;index++)
                                {
                                     console.log(arr2[index]);
                                     read.close();
                                }
            }
                            else{
                                 read.question(`Please enter the ${(arr1.length+1)}th value`,function(ans){
                                     arr1.push(ans);
                                     input(limit);
                                 });
                            }
    }
                        input(limit);
},

Triplet:function(read,N)
{

    this.N=N;
        var arr=[];
       var count=0;
     function input(N)
     { 
     if(arr.length>=N)
        {
           for(var p=0;p<N;p++ ){
                for(var q=p+1;q<N;q++)
                    {
                        for(var r=q+1;r<N;r++)
                            {
                                if((Number(arr[p])+Number(arr[q])+Number(arr[r]))==0)
                                    {
                                      console.log("Trilpets are "+arr[p]+","+arr[q]+","+arr[r]);
                                        count++;                                        
                                    }
                                    
                            }
                    }
           } 
                console.log("No of triplets "+count);
                read.close();
                
        }
  else
    {
      read.question(`Please enter the ${(arr.length+1)}th value`,function(arrvalue){
                arr.push(arrvalue);
                input(N);
            });
        
        }}
    input(N);
},
getCurrentTime:function()
{
    var obj=new Date();
    var start =obj.getTime();
    return start;
},
elapsedTime:function(start,end){
    resultTime=end-start;
    return resultTime;
},
  StringPermutation:function(str,frstIndex,lstIndex)
    {
      
    if(lstIndex===frstIndex)
        {
            console.log(str.join(''))
        }
        else{
    for(var i=frstIndex;i<=lstIndex;i++)
        {
           
            this.swap(str,frstIndex,i)
            console.log("trace ",str)
            this.StringPermutation(str,frstIndex+1,lstIndex)
            console.log("trace1 ",str)
            this.swap(str,i,frstIndex)
            console.log("trace2 ",str)
        
        }
        }
    },
    swap:function(str,i,j)
        {
           var temp;
 
           temp=str[i];
           str[i]=str[j];
           str[j]=temp;
           return str;
        }
        
}




