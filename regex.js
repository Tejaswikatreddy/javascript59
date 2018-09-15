var readlineSync=require('readline-sync')
var utility=require('/home/bridgeit/tejaswi/javascript/Utility/oopUtility.js')
var fs=require('fs')
function regex(){
      var data=fs.readFileSync('info.txt','utf8');
      var name=readlineSync.question("enter your name")
      if(isNaN(name)==false){
          console.log("enter only alphabets as your name,please renter..:) ")
          var name=readlineSync.question("enter your name")
      }
      var firstName=readlineSync.question("enter your first name")
      if(isNaN(firstName)==false){
          console.log("enter only alphabet values as your name ")
           var firstName=readlineSync.question("enter your first name")
      }
        var fullName=name+" "+firstName;
      var phnNum=readlineSync.question("enter your phone number")
      if(isNaN(phnNum)==true || phnNum.length!=10)
      {
          console.log("please enter your phone number only in digits,please renter ")
            var phnNum=readlineSync.question("enter your phone number")
      }
        var date=new Date();
        var dateString=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
        console.log(dateString)
        utility.expression(data,name,fullName,phnNum,dateString);
}
    regex();