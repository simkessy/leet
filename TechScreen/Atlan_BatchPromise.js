// getBatch(index)

// The function makes a request call to the backend to fetch the data.
// It returns a promise which can be resolved to the same JSON structure as Part 1.

// Mock implementation
const flatten = input => {
  // Code here
  // store results
  const results = [];
  // map array
  // value
  // if children
  // map over them

  // traverse data helper
  const traverse = items => {
    //console.log("c", items)
    // set base
    if (items.length === 0) return;

    // iterate
    items.forEach(item => {
      if (item.value) {
        results.push({ value: item.value });
      }

      // if there are children, traverse them
      if (item.children.length > 0) traverse(item.children);
    });
  };
  traverse(input);

  return results;
};

const getBatch = index => {
  return new Promise((resolve, reject) => {
    if (index === 1) {
      resolve([
        {
          value: "value0",
          children: []
        }
      ]);
    } else if (index === 2) {
      resolve([
        {
          value: "value1",
          children: [
            {
              value: "value2",
              children: [
                {
                  value: "value3",
                  children: []
                }
              ]
            },
            {
              value: "value4",
              children: []
            }
          ]
        },
        {
          value: "value5",
          children: []
        }
      ]);
    } else if (index === 3) {
      resolve([
        {
          value: "value6",
          children: []
        }
      ]);
    }
  });
};

// Task: Implement getValueList(fromIndex, toIndex) such that it combines successive calls
// to getBatch(index) to produce a Promise containing the result shown below:

// loop from 1 to 3
// result 1 to 3
// combine result
// return result
const getValueList = async (fromIndex, toIndex) => {
  // Code here
  let results;
  let promisesArr = [];
  for (let index = fromIndex; index <= toIndex; index++) {
    // Push promises into array
    // let response = await getBatch(index).then().catch()
    // response = flatten(response)
    // results = [...results, ...response]

    // Updated to use promise all
    promisesArr.push(getBatch(index));
  }

  results = await Promise.all(promisesArr);

  return results.reduce((t, batch) => {
    t.push(...flatten(batch));
    return t;
  }, []);
};

try {
  getValueList(1, 3).then(result => console.log(result));
} catch {
  alert("Don't do this");
}

const expected = [
  { value: "value0" },
  { value: "value1" },
  { value: "value2" },
  { value: "value3" },
  { value: "value4" },
  { value: "value5" },
  { value: "value6" }
];
