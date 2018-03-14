function compare(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else if (a === b) {
    console.log("Those numbers are equal.");
  } else {
    console.log("Error.");
  }
};

console.log(compare(7, 9));
console.log(compare(3, 0));
console.log(compare(2, 2));
console.log(compare("apple", "orange"));
console.log(compare(true, false));
console.log(compare(10, "tomato"));
