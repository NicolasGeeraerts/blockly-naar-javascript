"use strict";
const woord = prompt("typt een woord");
const len = woord.length;


for (let i = 0; i < len / 2; i++) {  
if (woord[i] !== woord[len - 1 - i]) {  
    alert( 'It is not a palindrome');  
}  

alert( 'It is a palindrome');  
}  











