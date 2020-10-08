/**
 * Data Structures - Stacks
 */

 // functions: push, pop, peek, length

/**
 * Palindrome is a word that is spelled the same forwards and backwards
 * such as Bob: b.o.b or race car: racecar
 */

let letters = []; // this is our stack

let word = "racecar";

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
};

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// Is Palindrome
function isPalindrome() {
  if (rword === word) {
    console.log(`${word} is a palindrome.`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
};

isPalindrome()

/**
 * ==========
 *  Create a Stacks
 * ==========
 */

 var Stack = function() {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
        return undefined;
    };

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function() {
    return this.count;
  };

  // Returns the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count-1];
  };

};

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(`myStack peek: ${myStack.peek()}`)
console.log(`myStack pop: ${myStack.pop()}`)
console.log(`myStack peek: ${myStack.peek()}`)

myStack.push("hummm");

console.log(`size: ${myStack.size()}`);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
