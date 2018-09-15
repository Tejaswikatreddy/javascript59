class Node {
    constructor(e, n) {
        this.ele = e;
        this.next = n;
    }
};

module.exports = class Queue {

    constructor() {
        this.first = null;
        this.rear = null;
        this.count = 0;
        this.balance = parseInt(1000);
    }

    queue() {

        this.first = new Node(null, null);
        this.rear = this.first;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
return this.count;
}

    enqueue(e) {

        if (this.first === null) {

            this.first = new Node(e, null);
            this.rear = this.first;
            this.count++;
            return;
        }

        this.rear.next = new Node(e, null);
        this.rear = this.rear.next;
        this.count++;
        
    }

    dequeue(){

        if (this.first === null) return null;

        var n = this.first.ele;

        this.first = this.first.next;
        this.count--;

        return n;

    }

    printList(){

        if (this.size()===0) return "[]";

        var n = this.first;
        var str = n.ele+" ";
        while(n.next!== null){

            n = n.next;
            str += n.ele+" ";
        }
        return str;
        
     }

     




cashdeposit(readlinesyc){
        var amnt=readlinesyc.question("enter the amount you want to deposit ");
        if(isNaN(amnt)){
            console.log("inavlid input,try again")
            this.cashdeposit(readlinesyc);
        }
        this.balance+=parseInt(amnt);
        //console.log("Balance after deposit is "+this.balance)
}
    withdraw(readlinesync){
        var amnt=readlinesync.question("enter amount you want to withdraw ");
         if(isNaN(amnt)){
            console.log("inavlid input,try again")
            this.withdraw(readlinesyc);
        }
        if(amnt>parseInt(this.balance)){
            console.log("insufficient balance :( ")
        }
        else{
        this.balance-=parseInt(amnt);
         //console.log("Balance after withdrawal  is "+this.balance)
        }
    }
    checkbalance(){
        console.log("The balance is "+this.balance);
    }
    isEmpty(){
        return this.count;
    }
}
