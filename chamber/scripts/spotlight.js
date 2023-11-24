const link = "https://proudnamwera4.github.io/wdd230/chamber/data/members.json";

const spotlights =document.querySelector(".spotlights");

async function getCompanyData(){
    const response = await fetch(link);
    if (response.ok){
        const data = await response.json()
        //console.table(data.prophets);
        displaySpotlights(data.members);
    }
}

getCompanyData();

const displaySpotlights = (members) => {
    members.forEach((member) => {
        if(member.membershipLevel =="7"|| member.membershipLevel =="8"|| member.membershipLevel =="9"|| member.membershipLevel == "10"){
            let div = document.createElement("div");
            let name = document.createElement("h3");
            let motto = document.createElement("p");
            let contact = document.createElement("p");
            
    
    
            name.innerText= `${member.name}` ;
            motto.innerText= `${member.motto}`
            contact.textContent=`📞 ${member.contact}`;
    
            
            div.appendChild(name);
            div.appendChild(motto);
            div.appendChild(contact);
        
            spotlights.appendChild(div);
    
        }
       

    });
  }