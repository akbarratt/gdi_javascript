/* var bottlesOfBeer = 99;

while (bottlesOfBeer >= 0) {
  console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer
    + " bottles of beer. Take one down, pass it around, " + (bottlesOfBeer - 1)
    + " bottles of beer on the wall.");
  bottlesOfBeer = bottlesOfBeer - 1;
} */

/* for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz.");
  } else if (i % 5 === 0) {
    console.log("Buzz.");
  }
  else {
    console.log(i);
  }
} */

/* for (var i = 100; i <= 200; i++) {
  console.log("Testing " + i);
  if (i % 7 === 0) {
    console.log("Found it!" + i);
    break;
  }
}; */


/*
var x = 1

while (x <= 12) {
  for (var i = 1; i <= 12; i++) {
    console.log(x + " x " + i + " = " + x*i);
  };
  x = x + 1;
};
*/

/*
var pets = ["dog", "cat", "parrot", "fish"];
console.log(pets);
pets.push("rabbit");
console.log(pets);

for (var i = 0; i < pets.length; i++) {
  console.log(pets[i]);
};

//spreads?

*/

/*
var user = {
  hometown: "Atlanta, GA",
  hair: "auburn",
  likes: ["knitting", "code"],
  birthday: {month: 10, day: 17}
};

user.married = "true";
console.log(user.married);

console.log(user.hair);
console.log(user["hometown"]);

//object.assign?

*/


// var users = [
//   {name: "Huey", age: 16},
//   {name: "Donald", age: 42},
//   {name: "Dewey", age: 17},
//   {name: "Louie", age: 18}
// ]
//
// for (var i = 0; i < users.length; i++) {
//   var user = users[i];
//   console.log(user.name + " is " + user.age + " years old.");
//   while (user.age >= 18) {
//     console.log(user.name + " is eligible to vote.");
//     break;
//   }
// }

var recipe = {
  recipeTitle: "Hot Honey Shrimp",
  servings: 4,
  ingredients: ["shrimp", "rice", "spicy mayo", "chili powder", "honey",
    "green onions", "jalapenos"],
  directions: "Heat the oven to 500 degrees. Peel the shrimp. Cook the shrimp."
}

for (var i = 0; i < recipe.length; i++) {
  console.log(recipe[i]);
}
