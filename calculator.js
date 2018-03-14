function squareNumber(x) {
  var square = x*x;
  console.log("The square of " + x + " is " + square + ".");
  return square;
};

function halfNumber(x) {
  var half = x/2;
  console.log("Half of " + x + " is " + half + ".");
  return half;
};

function percentOf(x, y) {
  var percent = x / y * 100;
  console.log(x + " is " + percent + "% of " + y);
  return percent;
};

function areaOfCircle(r) {
  var area = Math.PI*squareNumber(r);
  console.log("The circumference of a circle with a radius of " + r + " is " +
    area + ".");
  return area;
};

squareNumber(3);
halfNumber(2);
percentOf(7, 9);
areaOfCircle(3);
