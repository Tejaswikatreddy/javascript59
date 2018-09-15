/******************************************************************************
 *  Execution       :   1. default node         cmd> node unOrderedUtility.js 
 * 
 *  Purpose         : to implement the unordered linkedlist
 * 
 *  @description    
 * 
 *  @file           : unOrderedUtility.js
 *  @overview       : to implement the possible actions on the linked list
 *  @author         : Dhana Tejaswi <tejaswikatreddy10@gmail.com>
 *  @version        : 8.2.1
 *  @since          : o8-09-2018
 *
 ******************************************************************************/
/**
 * @class Node holds all the nodes of the linked list
 */
class Node {
    constructor(e, n) {
        this.ele = e;
        this.next = n;
    }
}
module.exports = class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.count = 0;
    }
    /**
     * @function list() creates a new empty linked list
     */
    list() {
        new Node(null, null)
    }
    /**
     * @function add() adds the givcen element to the linked list
     * @param {Number} e  the element to be added to the linked list
     */
    add(e) {
        if (this.first == null) {
            this.first = new Node(e, null);//inserting the node at the first index
            this.last = this.first;
            this.count++;
            return;
        }
        this.last.next = new Node(e, null);
        this.last = this.last.next;
        this.count++;
    }
    /**
     * @function printlist() prints the entire list at the time of invocation
     */
    printlist() {
        var current = this.first;
        var str = " ";
        while (this.first) {
            str += this.first.ele + " ";//takes all the elements into a string
            this.first = this.first.next;
        }
        console.log("linked list is " + str)
        return str;
    }
    /**
     * @function get() gives the elements at the given index
     * @param {Number} index  at which the element is to be searched
     */
    get(index) {
        if (index >= this.size()) {
            console.log("invalid index")
            return -1;
        }
        var n = this.first;
        for (var i = 1; i <= index; i++) {
            n = n.next;
        }
        return n.ele;
    }
    /**
     * @function size() returns the size of the linked list at the time it is invoked
     */
    size() {
        return this.count;
    }
    /**
     * @function search() returns the bolean value if the string is found are not
     * @param {String} item the elemt to be searched
     */
    search(item) {
        var n = this.first;
        for (var i = 0; i < this.size(); i++) {
            if (n.ele == item) { //checks for the element
                return true; //returns true if it is present
            }
            n = n.next;
        }

        return false;   //returns false if it is not found in the linked list

    }
    /**
     * @function index() returns the index of the given element
     * @param {String} item the element whose index is to be found
     */
    indexOf(item) {
        var n = this.first;
        for (var i = 0; i < this.size(); i++) {
            if (n.ele == item) {  //checks for the element
                return i;   //returns the index
            }
            n = n.next;
        }
        return -1;
    }
    /**
     * @function remove() it removes the given element
     * @param {String} item is the element to be removed
     */
    remove(item) {
       
        var index = this.indexOf(item);//invokes indexOf() method for the given element
        var n = this.first;
        var prev = n;
        if (index == 0) {
            this.first = n.next;
        }
        for (var i = 0; i < index; i++) {
            prev = n;//removes the element from the index
            n = n.next;
        }
        prev.next = n.next;
        this.count--;
    }
    /**
     * @function isEmpty() checks if the linked list is empty
     */
    isEmpty() {
        if (this.first == null) {
            return true;    //returns true if it is empty
        }
        else
            return false;   //returns false if it is not empty
    }
    /**
     * @function append() appends the element at the end of the linked list
     * @param {String} item the slement that is to be appended
     */
    append(item) {
        this.last.next = new Node(item, null);//adds the lement at the end
        this.last = this.last.next;
        this.count++;
    }
    /**
     * @function insert() inserts the element at the given index
     * @param {Number} index enters the index at which the element is tobe inserted
     * @param {String} item element that is to be inserted
     */
    insert(index, item) {
        if (index == 0) {
            temp = this.first;
            this.first = new Node(item, temp);//inserts the element at the start if the index is 0
            this.last = this.first;
            this.count++;
            return;
        }
        else {
            var n = this.first;
            var i = 1;
            while (i < index) {
                n = n.next; //traverses till the index
                i++;
            }
            console.log("reached index " + i)
            var temp = n.next;
            n.next = new Node(item, temp);//inserts the element at the index
            this.count++;
        }
    }
    /**
     * pop() removes and returns the last item in the list
     */
    pop() {
        var n = this.first;
        for (var i = 1; i < this.size()-1; i++) {
            n = n.next;
        }
        var it = n.next.ele;//takes the element as it
        n.next=null;//make the previous node address to null
        return it;//returns it
    }
    /**
     * @function popPos() removes the element at the given index
     * @param {Number} pos is position at which the element has to be removed
     */
    popPos(pos) {
        var n = this.first;
        var prev = n;
        if (pos == 0) {
            this.first = n.next;
        }
        for (var i = 0; i < pos; i++) {
            prev = n;
            n = n.next; //traverse till the given position
        }
        prev.next = n.next;//replace the previous node address with current node address
        this.count--;
    }

}
