//You want function names to describe what it does i.e. log pig facts

function logPigFacts() {
  console.log('Pigs are widely considered the smartest domesticated animal in the world.');
  console.log('Pigs can move a curson on a video screen.');
};

logPigFacts();
console.log('logPigFacts', logPigFacts);
//Might want to log so you can tell what's going on in the console

function logSentence() {
  console.log('Pigs are considered food in many cultures.');
};

logSentence();

// Parameter vs argument?

/*var first = 'David';
var last = 'Barratt';

function logdavidName() {
  console.log(first + ' ' + last);
}

logdavidName(); */

/*function logFullName(firstName, lastName) {
  console.log(firstName + ' ' + lastName);
  console.log(typeof firstName);
  console.log(typeof lastName);
};

logFullName("John", "Smith"); //need quotes becaues of data type*/

//return ends the function

/*function logFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
};

console.log(logFullName('John', 'Smith'));*/

function logFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
};

var johnSmith = logFullName("Bob", "Smith");

console.log(johnSmith);

function myName() {
  console.log("My name is " + johnSmith + ".");
};

myName();

//Return ends the function, so if you need to log, you must use variables.

var temp = 0;

if (temp <= 0) {
  console.log("Stay inside.");
} else if (temp <= 30) {
  console.log("Wear a coat and hat");
} else if (temp <= 50) {
  console.log("Wear a coat.");
} else {
  console.log("Wear whatever you want.");
}

//Do the polar bear exercise.
