"use strict";
const woord = prompt("typt een woord");
const letter = prompt("welke letter zoek u ?");
let aantal = 0
for (let i = 0; i < woord.length; i++) {
    if (letter === woord[i]) {
        aantal++;
    }
}
console.log("het woord =  " + woord + " heeft  " + aantal + " keer de letter = " + letter );









