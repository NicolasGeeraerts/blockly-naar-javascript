"use strict";
let aantal = Number(prompt("hoeveel limonades wenst u ? "));
while (aantal <= 0) { 
aantal = Number(prompt("hoeveel limonades wenst u ?"));
} 
console.log("totaal te betalen is ", aantal * 3 ," euro");