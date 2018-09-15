class Node {
    constructor(e,n) {
       this.ele=e;
       this.next=n;
    }
}

module.exports=class stack{
    constructor(){
        this.count=0;
        this.first=null;
    }
    /**
     * @function push() pushes the given element into the stack
     * @param {String} ele element to be pushed into the stack
     */
    push(ele){
        this.first=new Node(ele,this.first)//adding the element to the stack
        //console.log("add method "+this.first.ele)
        this.count++;   
     }
    /**
     * @function printstack() prints the stack
     */
    printstack(){
        
          var current = this.first;
        var str = " ";
        while (this.first) {
            str += this.first.ele + " ";    //takes all the elements in a stack into a string
            this.first = this.first.next;
        }
        return str;
    }
    /**
     * @function pop() removes an element from the stack
     */
    pop(){
        
        var n=this.first;
        if(n){
       this.first=n.next;
        this.count--;
        }
       else{
           this.count++;
       }
  }
    /**
     * @function isEmpty() checks if the stack is empty or not
     */
    isEmpty()
    {
        console.log("this.count is "+this.count)
        return this.count==0;
    }
}

