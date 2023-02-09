"use strict";
const mensen =[{ naam: "Georges", spaargeld: 1500 },
{ naam: "Jules", spaargeld: 700 },
{ naam: "Jacques", spaargeld: 2000 }]
mensen.filter(persoon => persoon.spaargeld > 1000)
.forEach(persoon => console.log(persoon.naam, persoon.spaargeld));
