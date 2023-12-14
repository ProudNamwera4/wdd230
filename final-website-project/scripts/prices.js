const url = "https://proudnamwera4.github.io/wdd230/final-website-project/data/prices.json";

const tr1 = document.querySelector('#tr1');

async function getScootsPrices(){
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json()
        //console.table(data.prophets);
        displayCards(data.members);
    }
}

getScootsPrices();

const displayPrices = (scooter) => {
    scooter.forEach((scooter) => {
        let tr = document.createElement("tr");
        let rentalType = document.createElement("td");
        let maxPersons = document.createElement("td");
        let rHalfDay = document.createElement("td");
        let rFullDay = document.createElement("td");
        let halfDay = document.createElement("td");
        let fullDay = document.createElement("td");


        rentalType.innerText= `${scooter.type}` ;
        /*portrait.setAttribute("src",member.image);
        portrait.setAttribute("alt","company logo");
        */
        maxPersons.textContent =`${scooter.maxPersons}`;
        rHalfDay.textContent=`${scooter.reservations.halfDay}`;
        rFullDay.textContent=`${scooter.reservations.fullDay}`;
        halfDay.textContent=`${scooter.walkIn.halfDay}`;
        fullDay.textContent=`${scooter.walkIn.fullDay}`;
       

        tr.appendChild(portrait)
        tr.appendChild(fullName);
        tr.appendChild(address);
        tr.appendChild(contact);
        tr.appendChild(link);
    
        /*cards.appendChild(card);*/


    });
  }

  /*Toogle between grid and list*/
  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  
  gridbutton.addEventListener("click", () => {
      cards.style.grid= "auto auto auto auto / auto auto auto auto"
  });
  
  listbutton.addEventListener("click", showList);
  
  function showList() {
      cards.style.grid="auto / auto"
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