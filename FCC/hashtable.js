var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor(storageLimit = 14) {
    this.storage = [];
    this.storageLimit = storageLimit;
  }

  print() {
    console.log(this.storage);
  }

  add(key, value) {
    var index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          // update existing value if key already there
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      // if item doesn't exist add at position
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  remove(key) {
    var index = hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][1][0] === key) {
          delete storage[index][i];
        }
      }
    }
  }

  lookup(key) {
    var index = hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }
}

let ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();
