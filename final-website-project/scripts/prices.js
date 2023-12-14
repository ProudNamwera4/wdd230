const url = "https://proudnamwera4.github.io/wdd230/final-website-project/data/prices.json";

const tbody = document.querySelector('#tbody');

async function getScootsPrices(){
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json()
        //console.table(data.prophets);
        displayPrices(data.rentalPricing);
    }
}

getScootsPrices();

const displayPrices = (scoots) => {
    scoots.forEach((scooter) => {
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
       
        tr.appendChild(rentalType);
        tr.appendChild(maxPersons);
        tr.appendChild(rHalfDay);
        tr.appendChild(rFullDay);
        tr.appendChild(halfDay);
        tr.appendChild(fullDay);
    
        tbody.appendChild(tr);


    });
  }