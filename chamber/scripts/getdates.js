
// footer last modified
const options = {year : "numeric"};
document.querySelector("#p").innerHTML = `&copy ${new Date().toLocaleDateString("en-UK", options)} | Proud Namwera | Zimbabwe`;


let lastModified = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);

lastModified.innerHTML = `Last Modified: ${oLastModif}`;



/*Responsive Menu */
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


/*Toggle Dark Mode*/
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🌕";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🌑";
	}
});

// local storage: date count
const theDateToday = new Date();
const msToDays = 84600000;
const msg = document.querySelector("#message");

const todayElement = document.querySelector("#today");
const today = Date.now();


const daysArray = getDaysList() || [];

function getDaysList(){
    return JSON.parse(localStorage.getItem("daysVisList"));
}

function setDaysList(){
    localStorage.setItem('daysVisList', JSON.stringify(daysArray))
}

if (daysArray.length = 0){
	msg.textContent = "'Welcome! Let us know if you have any questions.'"
}else if(daysArray[daysArray.length-1] = today){
	msg.textContent = "'Back so soon! Awesome!'";
}else{
	let n = (daysArray[daysArray.length-1] - Date.now())/msToDays;
	msToDays.textContent = "'You last visited n days ago.'";
}
daysArray.push();
setDaysList();

