const fruits = require("./fruits");

const bubbleSort = (a, par) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i][par] > a[i + 1][par]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const sortItem = bubbleSort(fruits, "name");
let sortArr = [];
for (i = 0; i < fruits.length; i++) {
  sortArr.push(fruits[i]);
}

module.exports = sortArr;
