let temperature = 60;
let precipitation = 'rain';
let indoors = true
console.log(`The temperature is ${temperature} degrees.`);
if(temperature>80 && !precipitation || indoors) {
    console.log("Time to swim!");
}