module.exports={
    hii: function(userinput)
    {
        console.log("Hii " +userinput+ " How are you")
    },
 
    





    coin: function(n)
    { 
        var heads=0,tails=0;
        for(var i=0;i<n;i++)
{
    var num=Math.random();
if(num<0.5)
{
    tails++;
}
else
{
    heads++;
}
}
console.log("No of heads",heads)
console.log("No of tails",tails)
      console.log("percentage of heads is ",(heads/n)*100);
     console.log("percentage of tails is ",(tails/n)*100);

    },


    leap:function(userinput)
{
    if(userinput.length==4)
    {
           
                if(userinput%400==0 || userinput%4 ==0)
              {
               
                    console.log("It is a leap year")
                    
                }
              
                else
                {
                    console.log("it is not a leap year")
                }
                
            }
        
           
        
        
        else{
            console.log("Invalid input")
        }
    },



    power:function(n)
    {
    
        for(var i=0;i<=num;i++)
        {
            pow=Math.pow(2,i);
            console.log("2 power ",i,"is",pow)
            
        }
            
        },
    harmonic:function(n)
    {
     
        var sum=0;
        for(var i=1;i<=n;i++)
        {
            sum=sum+(1/i)
        }
        console.log("the harmonic value is ",sum)
    },

    factorization:function(n)
    {
        
        var count=0;
        var flag=true;
        for(var i=1;i<=n;i++)
        {
            if(n%i==0)
            {
                for(var j=2;j<=i/2;j++)
                {
                    if(i%j==0)
                  flag=false;
                    
                }
                if(flag==true)
                console.log(i);
                
                
            }
            
          
           
        }
       

    },
    
}