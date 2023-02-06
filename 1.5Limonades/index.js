"use strict";
const aantal = Number( prompt("hoeveel Limonades wenst u . vanaf 11 krijg u 5 % korting ")); 
if (aantal <= 10) {
    console.log("de prijs is  ", aantal * 3 ," euro " );
    } else { 
    console.log("de prijs is  ", (aantal * 3) * 0.95 ," euro " );
    }