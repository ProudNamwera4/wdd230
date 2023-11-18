const banner = document.querySelector(".banner");
const closeX = document.querySelector(".closeX");

closeX.addEventListener('click',closeBanner)

function closeBanner(){
    banner.style.display = "none";
}

const date = new Date();
let day = date.getDay();

if (day == 2|| day == 1|| day ==3){
    closeBanner();
}