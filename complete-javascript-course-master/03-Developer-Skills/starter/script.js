// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log('hello world');
console.log("Hello world")

const data1 = [17, 21, 23];
const data2 = [12, 13, 45, 34];

const printForecast = function(arr){
    let str = ''
    for(let i = 0; i < arr.length; i++ ){
        str = str + `....${arr[i]}C in ${i+1} days....`
    }
    console.log(str)
}
printForecast(data1)

