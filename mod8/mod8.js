/*
    Rusty DeGarmo
    Professor Sampson
    Interactive Dev with JavaScript
    28 November 2021
*/

let baseNumbers = [];
for(let i = 4; i <= 14; i++){
    baseNumbers.push(i);
}

                        
let taData = document.getElementById("tData");
baseNumbers.forEach( number => {
let row = taData.insertRow();
let baseNumber = row.insertCell(0);
baseNumber.innerHTML = number;
let squareRoot = row.insertCell(1);
squareRoot.innerHTML = Math.sqrt(number).toFixed(2);
let squareNumber = row.insertCell(2);
squareNumber.innerHTML = Math.pow(number, 2);
let cubicNumber = row.insertCell(3);
cubicNumber.innerHTML = Math.pow(number, 3);
})



