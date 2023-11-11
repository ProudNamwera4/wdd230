const url = "https://proudnamwera4.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector('#cards');

async function getCompanyData(){
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json()
        //console.table(data.prophets);
        displayCards(data.members);
    }
}

getCompanyData();

const displayCards = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let address = document.createElement("h3");
        let contact = document.createElement("h3");


        fullName.innerText= `${member.name}` ;
        portrait.setAttribute("src",member.image);
        address.textContent =`${member.address}`;
        contact.textContent=`${member.contact}`
        
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(portrait);
    
        cards.appendChild(card);


    });
  }











  
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