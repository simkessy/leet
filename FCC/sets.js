class Sets {
  constructor() {
    this.collection = [];
  }

  // check if element in set
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  // return values of set
  values() {
    return this.collection;
  }

  // add element to set
  add(element) {
    // do a check for element, prevent dups
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      let index = this.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }

    return false;
  }

  size() {
    return this.collection.length;
  }

  union(otherSet) {
    // Create a new set to add to
    var unionSet = new Sets();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(e => {
      // Add prevents duplicates
      unionSet.add(e);
    });

    secondSet.forEach(e => {
      unionSet.add(e);
    });

    return unionSet;
  }

  // add the ones that are in both sets
  intersection(otherSet) {
    var intersectionSet = new Sets();
    var firstSet = this.values();

    firstSet.forEach(e => {
      // go over first set, if it's in the second set add to new set
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  }

  // the difference of the two sets
  // take first and subtract second, what's not in second is returned
  difference(otherSet) {
    var differenceSet = new Sets();

    var firstSet = this.values();

    firstSet.forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  }

  // tests if second set is completely contained in first
  subset(otherSet) {
    var firstSet = this.values();
    return firstSet.every(e => otherSet.has(e));
  }
}

var setA = new Sets();
var setB = new Sets();
setA.add("a");
setA.add("b");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log("intersection", setA.intersection(setB).values());
