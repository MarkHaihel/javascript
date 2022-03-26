'use strict';

/************* (32) Activating Strict Mode *************/
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534
*/

/************* (33) Functions *************/
/*
function logger() {
    console.log('My name is Markiian');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/************* (34) Function Declaration vs. Expressions *************/
/*
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1999);

// Function expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1999);

console.log(age1, age2);
*/

/************* (35) Arrow Functions *************/
/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, 'Mark'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/************* (35) Functions Calling Other Functions *************/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/************* (36) Reviewing Functions *************/
/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1999, 'Mark'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/************* (39) Introduction to Arrays *************/
/*
const friend1 = 'Michael';
const friend2 = 'Steve';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Mark';
const mark = [firstName, 'Haihel', 2037 - 1991, 'student', friends];
console.log(mark);
console.log(mark.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const birthYears = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), birthYears[birthYears.length - 1]];
console.log(ages);
*/

/************* (40) Basic Array Operations(Methods) *************/
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Peter');
}
*/

/************* (42) Introduction to Objects *************/
/*
const marksArray = [
    'Mark',
    'Haihel',
    2037 - 1991,
    'developer',
    ['Michael', 'Peter', 'Steven']
];
const mark = {
    firstName: 'Mark',
    lastName: 'Haihel',
    age: 2037 - 1999,
    job: 'developer',
    friends: ['Michel', 'Peter', 'Steven']
};
*/

/************* (43) Dot vs. Bracket Notation *************/
/*
const mark = {
    firstName: 'Mark',
    lastName: 'Haihel',
    age: 2037 - 1999,
    job: 'developer',
    friends: ['Michel', 'Peter', 'Steven']
};
console.log(mark);

console.log(mark.lastName);
console.log(mark['lastName']);

const nameKey = 'Name';
console.log(mark['first' + nameKey]);
console.log(mark['last'+ nameKey]);

const interestedIn = prompt('Whatdo you want to know about Mark? Choose between firstName, lastName, age, job, and friends');

if (mark[interestedIn]) {
    console.log(mark[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

mark.location = 'Ukraine';
mark['instagram'] = "@mark_haihel";
console.log(mark);

// Challenge
// "Mark has 3 friends, and his best friend is called Michael"
console.log(`${mark.firstName} has ${mark.friends.length} friends, and his best friend is called ${mark.friends[0]}`);
*/

/************* (44) Object Methods *************/
/*
const mark = {
    firstName: 'Mark',
    lastName: 'Haihel',
    birthYear: 1999,
    job: 'developer',
    friends: ['Michel', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
    
    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(mark.calcAge());

console.log(mark.age);
console.log(mark.age);
console.log(mark.age);

// Challenge
// "Mark is a 38-year old developer, and he has a driver's license"
console.log(mark.getSummary());
*/

/************* (46) Iteration: The for Loop *************/
/*
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/

/************* (47) Looping Arrays, Breaking and Continuing *************/
/*
const marks = [
    'Mark',
    'Haihel',
    2037 - 1991,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = []

// console.log(mark[0])
// console.log(mark[1])
// ...
// console.log(mark[4])
// mark[5] does NOT exist

for (let i = 0; i < marks.length; i++) {
    // Reading from marks array
    console.log(marks[i], typeof marks[i]);

    // Filling types array
    // types[i] = typeof marks[i];
    types.push(typeof marks[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < marks.length; i++) {
    if (typeof marks[i] !== 'string') continue;

    console.log(marks[i], typeof marks[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < marks.length; i++) {
    if (typeof marks[i] === 'number') break;

    console.log(marks[i], typeof marks[i]);
}
*/

/************* (48) Looping Backwards and Loops in Loops *************/
/*
const marks = [
    'Mark',
    'Haihel',
    2037 - 1991,
    'developer',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = marks.length - 1; i >= 0; i--) {
    console.log(i, marks[i]);
}

for (let execrice = 1; execrice < 4; execrice++) {
    console.log(`-------- Starting exercise ${execrice}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${execrice}; Lifting weight repetations ${rep}`);
    }
}
*/

/************* (49) The while Loop *************/
/*
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep}`);
    rep++; 
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    
    if (dice === 6) console.log(`Loop is about to end...`)
}
*/
