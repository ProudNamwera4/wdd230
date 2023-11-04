const options = {year : "numeric"};
document.querySelector("p").innerHTML = `&copy ${new Date().toLocaleDateString("en-UK", options)} | Proud Namwera | Zimbabwe`;


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




const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

password2.addEventListener("focusout",checkSame);

function checkSame(){
    if(password1.value != password2.value){
        message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		password2.style.backgroundColor = "red";
		password2.value = "";
		password2.focus();
    }else{
        message.style.display = "none";
		password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
    }
}

//Page rating
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}