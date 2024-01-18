function getAllElements(arr) {
  let result = [];

  function flatten(arrToFlatten) {
    let newArray = [];
    arrToFlatten.forEach((item) => {
      if (Array.isArray(item)) {
        newArray.push(...item);
      } else {
        newArray.push(item);
      }
    });

    let allFlat = newArray.every((item) => !Array.isArray(item));

    if (allFlat) return newArray;
    else {
      return flatten(newArray);
    }
  }

  // add logic here
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let curItem = flatten(arr[i]);
      result.push(...curItem);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// expected result: [ "A", "b", "3", "!", "C", 7, 7, "D", 91, ".", "E", "F" ]
const result = getAllElements([
  "A",
  "b",
  [["3"], [[["!"], "C", [7, 7, ["D", [91, ["."], [[["E"], "F"]]]]]]]],
]);

console.log(result);
