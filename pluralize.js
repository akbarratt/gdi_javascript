function pluralize(x, animal) {
  if (animal === "goose" && x > 1) {
    return x + " " + "geese";
  } else if (animal === "moose") {
    return x + " " + "moose";
  }else if (x > 1) {
    return x + " " + animal + "s";
  }
}

console.log(pluralize(2, "goose"));
console.log(pluralize(2, "moose"));
console.log(pluralize(5, "dog"));

// You could use this to make mad-libs.
