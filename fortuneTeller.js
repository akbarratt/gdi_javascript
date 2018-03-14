var numberOfChildren = 10;
var partnerName = 'Brad Pitt';
var geo = 'Antarctica';
var job = 'circus clown';
console.log('You will be a ' + job + ' in ' + geo + ' and married to ' +
partnerName + ' with ' + numberOfChildren + ' kids.');

function tellFortune(x, y, z, n) {
  console.log("You will be a " + x + " in " + y + " and married to "
  + z + " with " + n + " kids.");
};

tellFortune("farmer", "Missouri", "nobody", 0);
tellFortune("web developer", "California", "Serena Williams", 1);
tellFortune("tattoo artist", "New Jersey", "Ashlee Simpson", 4);
