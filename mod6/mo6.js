/*
Rusty DeGarmo
Professor Sampson
Interactive Dev with JavaScript
18 November 2021
*/

"use strict"


function fibonacci(){    
    let first = 1;
    let second = 1;
    let fibonacci = first + second;

    document.write('<ol>');
    document.write('<li>= ' + first + '</li>');
    document.write('<li>= ' + second + '</li>');
    

    for(count = 3; count <= 30; count++){
        fibonacci = first + second;
        document.write('<li>= ' + fibonacci + '</li>');

        first = second;
        second = fibonacci;
    }
    document.write('</ol>')
}

