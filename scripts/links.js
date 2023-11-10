const baseURL = "https://Proudnamwera4.github.io/wdd230/";
const linksURL = "https://Proudnamwera4.github.io/wdd230/data/links.json";
const list = document.querySelector("#activityList");

async function getLinks() {
  const response = await fetch(linksURL);
  if (response.ok) {
    const data = await response.json();
    JSON.stringify(data);
    //console.log(data)
    displayLinks(data.lessons);
  }
}
getLinks();

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
        let activity = document.createElement("a");
        let li = document.createElement("li");
        let url = week.links[0].url;
        let title = week.links[0].title;

        activity.setAttribute("src", url);
        activity.setAttribute("title", title);
        activity.textContent = `${week.lesson}| ${title}`;

        li.appendChild(activity);
        list.appendChild(li);
        
  });
};
