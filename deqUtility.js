module.exports=class Bank{
    constructor(){
        this.word=[];
        this.count=0;
    }
    /**
     * @function addFront() adds the given element at the front of the dequeue
     * @param {String} item element to be added
     */
    addFront(item){
        this.word.unshift(item);
        this.count++;
    }
    /**
     * @function addRear() adds an element at the end of the dequeue
     * @param {String} item element to be added to the dequeue
     */
    addRear(item){
        this.word.push(item);
        this.count++;
    }
    /**
     * @function removeFront() removes an element at the front of the dequeue
     */
    removeFront(){
        this.count--;
        return this.word.shift();
        
    }
    /**
     * @function removeRear() removes an element at the rear of the dequeue
     */
    removeRear(){
        this.count--;
        return this.word.pop();
        
    }
    /**
     * @function isEmpty() returns  if the stack is empty or not
     */
    isEmpty(){
        return this.count;

    }
}