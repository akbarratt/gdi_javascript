var cTemp = 0;
var fTemp = 75;
var fRandom = Math.random()*100;

var fConvert = (cTemp*9)/5 + 32; //operator precidence = PEMDAS for JS, not the same
var cConvert = (fTemp-32)*5 / 9;
var cConvertRandom = fRandom-32 * 5 / 9;

console.log(cTemp + "\u00B0C is " + fConvert + "\u00B0F.");
console.log(fTemp + "\u00B0F is " + cConvert + "\u00B0C.");
console.log("It's " + fRandom + "\u00B0F today. That's "
  + cConvertRandom + "\u00B0C.");
