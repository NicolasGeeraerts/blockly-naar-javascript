"use strict";
let leeftijdBezoeker = Number(prompt("wat is u leeftijd"));
let aantalKortingen = 0
while (leeftijdBezoeker !== 0) {
    if (leeftijdBezoeker < 7 || leeftijdBezoeker > 80) {
        aantalKortingen++;
    }
    leeftijdBezoeker = Number(prompt("wat is u leeftijd"));
}
console.log("er zijn " + aantalKortingen + " personen die korting gekregen hebben ")
