"use strict";
const personen = [];
let naam = prompt("Naam");
while (naam !== "stop") {
    personen.push({
        naam: naam,
        lengte: Number(prompt("Lengte in meter en punt als komma gebruiken")),
        gewicht: Number(prompt("gewicht in kg"))
    });
    naam = prompt("Naam");
}
for (const persoon of personen) {
    console.log(persoon.naam + " heeft een bmi van " + persoon.gewicht / (persoon.lengte * persoon.lengte));
}











