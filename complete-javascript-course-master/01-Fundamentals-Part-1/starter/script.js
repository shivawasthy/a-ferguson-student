/*let js = 'amazing';
// console.log(40 + 8 + 2)


console.log("shiv");

let firstName = "shiv";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

//let shiv = true;
//console.log(shiv);


console.log(typeof 'yooo');
console.log(typeof 23);
console.log(typeof 'jonas');

const firstName = 'Shiv'
const middleName = 'Naman'
const lastName = 'Awasthy'
const age = 20

console.log(firstName + middleName + ' ' + lastName);
console.log(typeof firstName);
console.log(typeof middleName);
console.log(typeof lastName);
console.log(typeof age);
console.log(firstName, middleName, lastName);


//coding challange 1 

let marksweight = 78;
let marksheight = 1.69
let johnsweight = 92;
let johnsheight = 1.95;

let marksBMI = marksweight / (marksheight * marksheight);
let johnsBMI = johnsweight / (johnsheight * johnsheight);
let markhigherBMI = marksBMI >= johnsBMI;
console.log(marksBMI);
console.log(johnsBMI);
console.log(markhigherBMI);

// coding challange 2 


marksweight = 95;
marksheight = 1.88
johnsweight = 85;
johnsheight = 1.76;

marksBMI = marksweight / (marksheight * marksheight);
johnsBMI = johnsweight / (johnsheight * johnsheight);
markhigherBMI = marksBMI > johnsBMI;
console.log(marksBMI, johnsBMI);
console.log(markhigherBMI);

// creating a string in javacript

const myName = 'Shiv '
const job = 'student'
const yob = 2002
const year = 2021

const shiv = "Hello, I'm " + myName + ', a ' + (year - yob) + ' years old ' + job;
console.log(shiv)

const shivNew = `I'm ${myName} , a ${year - yob} years old ${job}`;
console.log(shivNew);



console.log('String with \n\
multiple \n\
lines');


const age1 = 17
const isOldenough = age1 >= 18

if (isOldenough) {
    console.log('you can drive mate');
}
else {
    const yearsleft = 18 - age1;
    console.log(`You have to wait for ${yearsleft} year mate`);
}

// Coding challenge 2

let marksweight1 = 78;
let marksheight1 = 1.69
let johnsweight1 = 92;
let johnsheight1 = 1.95;

let marksBMI1 = marksweight1 / (marksheight1 * marksheight1);
let johnsBMI1 = johnsweight1 / (johnsheight1 * johnsheight1);
let markhigherBMI1 = marksBMI1 > johnsBMI1;

console.log(`Marks BMI is ${marksBMI1}`);
console.log(`Johns BMI is ${johnsBMI1}`);
console.log(markhigherBMI1);

if (markhigherBMI1) {
    console.log('Mark has higher BMI');
} else {
    console.log("John's BMI is higher");

}

//switch statement

const day = 'tuesday'

switch (day) {
    case 'monday':
        console.log('Ah Mondays suck!');
        break;
    case 'tuesday':
        console.log('Survive the day!');
        break;
    default:
        console.log('Weekend chaiye yaar!!!!!')
}

const yaearsUntillRetirement = (birthyear, Aka) => {
    const age4 = 2037 - birthyear;
    const yearsleft = 65 - age4;
    return `${Aka} reteires in ${yearsleft} years`
}

const yearsLeftis = yaearsUntillRetirement(1999, 'Bob')
console.log(yearsLeftis)

const yearsLeftto = yaearsUntillRetirement(2003, 'smith');
console.log(yearsLeftto)

//coding challenge 1 

/*const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(32, 29, 40);
const scoreKoalas = calcAverage(45, 65, 03);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDOlphins, avgkoalas)
if (avgDOlphins >= 2 * avgkoalas) {
}*/


const object = {
    myself : 'shiv',
    work : 'Student',
    birth : 1999,
    address : 'NY',
};

for(let i= 0; i>5; i++) {
    console.log(object[i]);
}



//for (let num = 1; num <= 100; num++) {
//    console.log(`Counting from 1 to 100 ::::: ${num}`)


const rishi = [
    'Shiv',
    'Pratik',
    'Awasthy',
    'Jobless',
    2021 - 2005,
    ['Sid', 'Sandy', 'Piyush']
];
console.log(rishi);
// for(let i = 1; i>[0] ; i++ ){
 //    console.log(`string elements are ${i}`)
for(i= rishi.length-1; i>= 0; i--) {
    console.log(i, rishi[i])
}


for(let exercise = 1; exercise <4; exercise++){
    console.log(`-----Start exercise--------- ${exercise}`);


    for(let reps = 1; reps <6; reps++){
        console.log(`Rishi ko kuch ni aata  h!!! ${reps}`)
    };

}

let reps = 1
while(reps <=10){
    console.log(`Rishi commerce lega!!! ${reps}`);
    reps++;
}


//let dice =Math.trunc(Math.random() * 6) + 1;
 //   console.log(`dice::: ${dice} `)

let dice =Math.trunc(Math.random() * 6)  
   while(dice !==6){
    console.log(`you rolled a ${dice}`);
     dice =Math.trunc(Math.random() * 6) + 1

    if(dice === 6) console.log(`Loop is about to end ${dice}`)

   }    



   const calcTip = function(bill) {
        return bill >= 50 && bill <=300 ? bill * 0.15:
        bill * 0.2;
   }

   const bills = [ 23, 34, 45, 29, 68, 50, 89, 99];
   const tips = [];
   const total = [];

   for(let i = 0; i < bills.length; i++ ){
        const tip = calcTip(bills[i]);
        tips.push(tip);
        total.push(tip + bills[i]); 
   }
   console.log(bills, tips, total);



   