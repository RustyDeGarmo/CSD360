/*
Rusty DeGarmo
Professor Sampson
Interactive Dev with JavaScript
5 December 2021
*/

function threeRandomArrays(){
    //function that contains all of the other functions so I can call them all at 
    //once with a button press on the page.
    function getRandomArray(){
        //function to generate a random array of numbers between -10 and 10
        let randomArray = [];
        let sign = 1;
        let temp = 0;
        for(let i = 0; i < 20; i++){
            temp = (Math.round(Math.random() * 10));
            //generate either a positive or negative 1 to randomize sign
            sign = (Math.round(Math.random()) * 2 - 1)
            randomArray.push(temp * sign);
        }
        return randomArray;
    }

    function printArray(array){
        //function to print the complete arrays
        numberString = "";
        for(let i = 0; i < array.length; i++){
            if(i == (10)){
                numberString += ("<br />" + String(array[i]) + ", ");
            }else if(i == (array.length - 1)){
                numberString += String(array[i]);
            }else{
                numberString += (String(array[i]) + ", ");
            }
        }
        document.getElementById("counter").innerHTML += ("<br />" + numberString);
    }

    function counter(array){
        let positives = 0;
        let zeros = 0;
        let negatives = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i] > 0){
                positives += 1;
            }else if(array[i] == 0){
                zeros += 1;
            }else{
                negatives += 1;
            }
        }
        return [positives, zeros, negatives];
    }

    function printCounter(counterArray){
        document.getElementById("counter").innerHTML += ("<br />There are " + counterArray[0] +
            " positive numbers, " + counterArray[1] + " zeros and, " + counterArray[2] + 
            " negative numbers in the array.")
    }

    let arrayOne = getRandomArray();
    let arrayTwo = getRandomArray();
    let arrayThree = getRandomArray();

    document.getElementById("counter").innerHTML = "The first array is: ";
    printArray(arrayOne);
    printCounter(counter(arrayOne));
    document.getElementById("counter").innerHTML += "<br /><br />The second array is: ";
    printArray(arrayTwo);
    printCounter(counter(arrayTwo));
    document.getElementById("counter").innerHTML += "<br /><br />The third array is: ";
    printArray(arrayThree);
    printCounter(counter(arrayThree));
}


