//Declaring and initializing variables in excercise data table

let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let marsDistanceKm = 225000000;
let moonDistanceKm = 384400;
let milesPerKm = 0.621;

//Printing out type of each variable
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(marsDistanceKm));
console.log(typeof(moonDistanceKm));
console.log(typeof(milesPerKm));

//Calculating space mission for Mars

let milesToMars = marsDistanceKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

//printing out results

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

//Calculating space mission for Moon

let milesToMoon = moonDistanceKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

//printing out results

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");