//Task 1: Days of the week
/*
let dayOfWeek = "Monday";
console.log(dayOfWeek);
dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}`);
/*

//Task 2: User Input
/*
let animalInput = prompt("What is your favorite animal?");
let colorInput = prompt("What is your favorite color?");
alert(`I've never seen a ${colorInput} ${animalInput}!`);
*/

//Breakfast: Eggs and fried russet potatoes
//Lunch: Burger
//Dinner: Lasagna 

//Conditionals
//Task 1: Meals
/*
let timeOfDay = "FOISDJnv";
let belovedMeal; 

if (timeOfDay < 1200) {
    belovedMeal = "Eggs and fried russet potatoes";
}
else if (timeOfDay > 1200 && timeOfDay < 1700) {
    belovedMeal = "Burger";
}
else {
    belovedMeal = "Lasagna";
}

console.log(belovedMeal);
*/

//Task 2: Random Number 
/*
let randNum = Math.floor(Math.random() * 11); //returns integer between 0 and 10

if (randNum <= 2) {
    console.log("Beatles");
}
else if (randNum >= 3 && randNum <= 5) {
    console.log("Stones");
}
else if (randNum >= 6 && randNum <= 8) {
    console.log("Floyd");
}
else if (randNum >= 9 && randNum <= 10) {
    console.log("Hendrix");
}
*/

//For Loops
//Task 1
/*
for(let i = 0; i < 7; i++) {
    console.log("JavaScript is cool!");
}
*/
//Task 2
/*
for(let i = 0; i < 11; i++) {
    console.log(i);
}
*/

//Task 3
/*
for(let i = 0; i < 5; i++) {
    console.log("hello");
    console.log("goodbye");
}
*/

//Functions
//Task 1
/*
function printGreatMovie() {
let greatMovie = "The Untouchables";
return greatMovie;
}

console.log(printGreatMovie());
*/
//Task 2: Favorite Band
/*
function getFavBand() {
    return prompt("What is your favorite band?");
}

let band = getFavBand();
console.log(band);

//Task 3: Concert 

function concertDisplay(musicalAct){
    let myStreet = prompt("What street do you live on?");
    alert(`It would be great if ${musicalAct} played a show on ${myStreet}!`);
}

concertDisplay(band);
*/

//Arrays
//Task 1: Desktop Items
/*
let desktopItems = ["mug", "lamp", "chair"];
console.log(desktopItems[1]);
desktopItems.push('Infinity Gauntlet');
for(let item in desktopItems){
    console.log(desktopItems[item]);
}

*/


//Bonus Task
//Task 1: Magic Number 

let magicNumber = Math.floor(Math.random() * 100);
let guess = 0;

while(guess != magicNumber){
    guess = prompt("What...is the magic number?");

    if (guess < magicNumber){
        alert("Too low!");
    }
    else if (guess > magicNumber){
        alert("Too high!");
    }
    if (Math.abs(guess - magicNumber) < 10){
        if (guess != magicNumber){
            alert("Getting warmer!");
        }
        else {
            alert("Congratulations! You found it!");
            break;
        }
    }
}