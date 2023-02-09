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
const opgezochteArtikels = artikels.filter(naaam => artikels.naam === prompt("welk artikel zoekt u "));
opgezochteArtikels.forEach(naaam => console.log(artikels.naam));











