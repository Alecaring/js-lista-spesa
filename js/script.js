"use strict"
const arrElem = [];

// angolo riservato agli elementi push dell'arrey
arrElem.push("latte", "uova", "mozzarelle", "pomodori");
arrElem.push("cavoli");
arrElem.push("latticini");


const conatinerElem = document.getElementById("containerList");

const ulElem = document.createElement("ul");
ulElem.className = "ulStyle";
    conatinerElem.append(ulElem);
        console.log(conatinerElem);

let i = 0;
while (i < arrElem.length) {

    const liElem = document.createElement("li");
    liElem.className = "liStyle";
    ulElem.append(liElem);
    const Item = arrElem[i];
    liElem.append(Item);
    
    i++;
}
