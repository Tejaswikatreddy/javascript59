/**
 * @description Dependencies require to be installed before the execution of this file.
 * @const {Class} _ class instance of the lodash
 */
const _ = require('lodash');

module.exports = {

    /** 
   *@description funtion hii() Take the name as argument
   *and replace the given string with it
   */
    hii: function (name) {
        if(isNaN(name))
            {
                console.log("Invalid input format")
            }
            else
            {
            
                if (name.length >= 4) 
                {
                    console.log("Hii " + name + " How are you")
                }
                else
                {
                    console.log("invalid name")
                }
            }   
    },


    /**
    * @description function flips a coin for the given number of trails  
    * and caluclates the percentage of occurance of head and tail 
    */
    coin: function (n) {
        /**
         * @description Math.random() function gives any number between 0 to 0.9
         * var {number} gets the random number
         */
        
        var heads = 0, tails = 0;
        for (var i = 0; i < n; i++) //executes the loop form 0 to given n value
            {  
            var num = Math.random();
            if (num < 0.5) 
            {
                tails++;      
            }
        
            else 
            {
                heads++;
            }
        }
        console.log("No of heads", heads, "percentage of heads is ", (heads / n) * 100)
        console.log("No of tails", tails, "percentage of tails is ", (tails / n) * 100)

    },

    /**
     * @description function leap() checks if the given year is leap year or not
     */
    leap: function (year) {
        if(typeof(year)==Number)
        {
        if (year.length == 4) //checks if the year is valid or not
            {
            
            if (year % 400 == 0 || year % 4 == 0) //checks if the year is leap or not
            {
                console.log("It is a leap year")
            }
            else
                {
                    console.log("It is not a leap year")
                }
        }
           
            else
                console.log("Invalid year input")
        
        }
        else{
            console.log("Invalid input format")
        }
    },

    /**
     * @description function power() is to print the power of 2 values from 1 to given number
     * It takes any number n as argument
     */
    power: function (number) 
    {
        if(isNaN(number))
        {
                       
             for (var i = 0; i <= number; i++) 
             {
            
                var pow = Math.pow(2, i);
                console.log("2 power ", i, "is", pow)

             }
        }
        else
        {
            console.log("Invalid input format")
        }
    },


    /**
     * @description function harmonic() is to caluclate the sum of given n harmonic values
     * It takes an argument n
     * @var {number} is declared and initialized to zero
     *  the sum of the n harmonic values is stored into this variable
     */
    harmonic: function (n) {
        var sum = 0;
       
        for (var i = 1; i <= n; i++) {
            sum = sum + (1 / i)

        }
        console.log("the harmonic value is ", sum)
    },


    /**
     * @description function factorization() prints the prime factors of given number
     * It takes an argument n 
     * @var var {boolean} intialize the variable to default value false
     */
    factorization: function (n) {
        var flag = false;
      
        for (var i = 1; i <= n / 2; i++) {
           
            if (n % i == 0)  //checks if i is the factor of n
            {
               
                for (var j = 2; j <i; j++) 
                    {
                    if (i % j == 0)//checks if the i has factors
                     {
                        flag = true;
                        console.log("prime factor is ", i)
                    }
                }
            }
        }
        
        if (flag == false) {
            console.log("No prime factors")

        }
    },


    /**
     * @param {number} amnt is the amount the player has with her initially
     * @param {number} desireamnt is the amount the player has to win
     * @param {number} trials is the number of times she can play the game
     * @description the function gambler() gives how many times the player has won the game
     */
    gambler(amnt, desireamnt, trials) {
       
        var cash = amnt, loss = 0, wins = 0;
        for (var i = 1; i <= trials; i++) 
            {
            
            if (cash != 0 || cash < desireamnt) {
               
                if (Math.random() > 0.5)
                {

                    cash++;
                    console.log("won the game");
                    wins++;

                }
                
                else {
                    cash--;
                    console.log("loss the game")
                    loss++
                }
            }
        }
        console.log("cash there finally is " + cash)
        console.log("no of wins are ", wins, " in", trials, "trials");
        console.log("no of lost are ", loss, " in", loss, "trials");
        console.log("percentage  of wins are ", Math.floor((wins / trials) * 100));
        console.log("percentage  of loss are ", Math.floor((loss / trials) * 100));
    },
    /**
     * @description funtion coupon() generates the random numbers between the given limit
     * @var {number} minimum value of the range
     * @var {number} maximum value of the range
     * @var {Array} random declared an array
     * @var {Number} count declared the variable count
     */
    coupon: function (min, max) {
        var random = [], count, ele;

        for (count = min; count < max; count++) {
            n = _.random(min, max);
            random.push(n);

        }
        console.log(random);
         console.log("No of coupouns generated=" + random.length);
        var different = new Set(random);
        console.log("different generated are ", different)
        console.log("No of distinct coupons= " + [...different].length);
     
    },
/**
 * @description function quadratic gives the roots of given number
 * @var {number} delta stores the value 
 */
    quadratic: function (a, b, c) 
    {
        if(isNaN(a) && isNaN(b) && isNaN(c))
            {
                console.log("Invalid user input")
            }
            else
            {          
                var delta = b * b - 4 * a * c;
                if (delta > 0) {
                 var x = (-b + (Math.sqrt(delta))) / (2 * a)
                 var y = (-b - (Math.sqrt(delta))) / (2 * a)
                 console.log("root value is " + x)
                 console.log("root value is " + y)
        }
        else {
            consloe.log("Invalid delta value")
        }
      }
    },
/**
 * @description function windchill gives the effective temperature of the area
 * @var {number} t is the wind temperature value
 * @var {Number} v is the velocity or speed of the wind
 */
    windchill: function (t, v) {
        if (v < 120 && v > 3) {
            var w = 35.74 + 0.65 * t + (0.4275 * t - 35.75) * (Math.pow(v, 0.16))
            console.log("The value of effective temperature is ", w);
        }
        else {
            console.log("formula invalid for the given input")
        }
    },
/**
 * @description function Distance measures the distance between origin to the given point
 * @var {Number} x is the x co ordinate of the point
 * @var {Number} y is the y coordinate of the point
 */
    Distance: function (x, y) {
        resDistance = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 1 / 2)
        console.log("Resultant distance is ", Math.round(resDistance))
    },
/** 
 * @description function twodarray takes the input array and displays the 2d array
 * @var {Number} r Number of rows value
 * @var {Number} c Number of columns value
*/
    twodarray: function (read, r, c) {
        var limit = r * c;
        var arr1 = [];
/**
 * @param {Number} limit is the product of r and c 
 */
        function input(limit) {
            if (arr1.length >= limit) {
                var k = 0;
                arr2 = [];
                var string = ' ';
                for (var i = 0; i < r; i++) {
                    for (var j = 0; j < c; j++) {//converting the array as matrix
                        string = string + arr1[k] + ' ';
                        k++;
                    }
                    arr2.push(string);
                    string = ' ';

                } 
                for (var index = 0; index < arr2.length; index++)
                 {
                    console.log(arr2[index]);//printing the matrix
                    read.close();
                }
            }
            else {
                read.question(`Please enter the ${(arr1.length + 1)}th value`, function (ans) {
                    arr1.push(ans);
                    input(limit);
                });
            }
        }
        input(limit);
    },
/**
 * @description function Triplet() gives the 3 values whose sum is equal to zero from the given array
 * @var {Number} N is the length of the array we need to enter
 * @var {class} read class instance of readline
 */
    Triplet: function (read, N) {

        this.N = N;
        var arr = [];
        var count = 0;
        function input(N)  //taking input array values
        {
            if (arr.length >= N) //checking if the array is full
            {
                for (var p = 0; p < N; p++) 
                {
                    for (var q = p + 1; q < N; q++) 
                    {
                        for (var r = q + 1; r < N; r++) 
                        {
                            if ((Number(arr[p]) + Number(arr[q]) + Number(arr[r])) == 0)//checks if the sum of 3values is 0
                            {
                                console.log("Trilpets are " + arr[p] + "," + arr[q] + "," + arr[r]);
                                count++;
                            }

                        }
                    }
                }
                console.log("No of triplets " + count);
                read.close();

            }
            else {
                read.question(`Please enter the ${(arr.length + 1)}th value`, function (arrvalue) {
                    arr.push(arrvalue);//pushing the user input into an array
                    input(N);
                });

            }
        }
        input(N);
    },
/**
 * @description function getCurrentTime() returns the current system time using getTime() method
 */
    getCurrentTime: function () 
    {
        var obj = new Date();//creating reference for Date class
        var start = obj.getTime();
        return start;
    },
/**
 * @description function elapsedTime() returns the difference between the start time and en time
 */
    elapsedTime: function (start, end) {
        resultTime = end - start;
        return resultTime;
    },
/**
 * @description  function StringPermutation() prints all the possible permutations of the given string
 */
    StringPermutation: function (str, frstIndex, lstIndex) {

        if (lstIndex === frstIndex) {
            console.log(str.join(''))//joining the array as string 

        }
        else 
            {
            for (var i = frstIndex; i <= lstIndex; i++) 
            {

                this.swap(str, frstIndex, i)//invokes the swap function
                this.StringPermutation(str, frstIndex + 1, lstIndex)//calls the function recursively
                this.swap(str, i, frstIndex)//invokes the swap function
                
            }
        }

    },
/**
 * @description function swap() swap the characters at the given 2 arrays and returns the new array
 */
    swap: function (str, i, j) {
        var temp;

        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        return str;
    }

}




