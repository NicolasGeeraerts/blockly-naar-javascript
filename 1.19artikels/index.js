"use strict";
const artikels = [];
let naam = prompt("Naam");
while (naam !== "stop") {
    artikels.push({
        naam: naam,
        aanKoopPrijs: Number(prompt("aankoopprijs")),
        verKoopPrijs: Number(prompt("verkoopprijs"))
    });
    naam = prompt("Naam");
}
const opzoekking = prompt("welk artikel zoekt u ")
const opgezochteArtikels = artikels.filter(artikel => artikel.naam.startsWith(opzoekking));
opgezochteArtikels.forEach(artikel => console.log(artikel.naam));
const getal1 = Number(prompt("verkoopprijs opzoeken van ?"))
const getal2 = Number(prompt("tot"))
if (getal1 > getal2) {
    alert("het 2de getal moet groter zijn dan het eerste")
}
else {
    const opgezochteprijs = artikels.filter(artikel => artikel.verKoopPrijs >= getal1 && artikel.verKoopPrijs <= getal2);
    opgezochteprijs.forEach(artikel => console.log(artikel.naam, ";", artikel.verKoopPrijs))
}
let sum = 0;
artikels.forEach(item => sum += item.verKoopPrijs);
console.log("de gemiddelde verkoopprijs is : " + sum / artikels.length);












