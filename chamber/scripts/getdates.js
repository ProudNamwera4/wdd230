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






