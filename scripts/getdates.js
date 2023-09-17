const options = {year : "numeric"};
document.querySelector("p").innerHTML = `&copy ${new Date().toLocaleDateString("en-UK", options)} | Proud Namwera | Zimbabwe`;


let lastModified = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);

lastModified.innerHTML = `Last Modified: ${oLastModif}`;