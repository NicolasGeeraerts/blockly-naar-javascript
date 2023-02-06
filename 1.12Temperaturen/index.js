"use strict";
const vriesTemperaturen = [ ]; 
let temperatuur =Number(prompt("geef een Temperatuur"));
while( temperatuur !== 777) { 
    if (temperatuur <=0 ){
        vriesTemperaturen.push(temperatuur);
    }
    temperatuur =Number( prompt("geef een Temperatuur"));
}
for (const vriesTemperatuur of vriesTemperaturen) {
    console.log(vriesTemperatuur);
}
