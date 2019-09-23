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

const example = [
  {
    value: "value1",
    children: [
      {
        value: "value200",
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
];

const actual = flatten(example);
console.log(actual);

const expected = [
  { value: "value1" },
  { value: "value200" },
  { value: "value3" },
  { value: "value4" },
  { value: "value5" }
];
