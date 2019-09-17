// functions: push pop peek length

var letters = [];
var word = "racecar";

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off stack in reverse order

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word, " is a pal");
} else {
  console.log(word, " is a not pal");
}

// proper implementation
class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    return this.storage[this.count - 1];
  }

  size() {
    return this.count;
  }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log("log:", myStack.peek());
console.log("log:", myStack.pop());
console.log("log:", myStack.peek());
myStack.push("FreeCodeCamp");
console.log("log:", myStack.size());
console.log("log:", myStack.peek());
console.log("log:", myStack.pop());
console.log("log:", myStack.peek());
