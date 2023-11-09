const baseURL = "https://proudnamwera4.github.io/wdd130/";
const linksURL = "https://proudnamwera4.github.io/wdd130/data/links.json";
const list = document.querySelector("#activityList");

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
   

}
getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let activity = document.createElement("a");
        let li = document.createElement("li");


       
        activity.setAttribute('src',`${week.links.url}`);
        activity.setAttribute('title', `${week.links.title}`);
        activity.textContent =`| ${week.links.title}`;
        
        
        li.appendChild(activity);
    
        list.appendChild(li);
    });
  }

