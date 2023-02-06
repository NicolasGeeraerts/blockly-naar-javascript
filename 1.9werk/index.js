"use strict";
let werk = prompt("Heeft u werk ? ja of nee");
if (werk === "nee") {
    werk = prompt("wilt u een opleiding volgen . ja of nee");
    if (werk === "ja") {
        console.log("Je vindt opleidingen op www.vdab.be/opleidingen.");
    } else {
        console.log("Je vindt vacatures op www.vdab.be/jobs.");
    }
} else {
    console.log("Veel werkplezier.");
}