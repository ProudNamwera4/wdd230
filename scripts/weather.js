const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=18.11&lon=31.32&appid=bc5627345bd0bd83bacbb4a24454ec2d&units=imperial"

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
        }else{
        throw Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}
apiFetch();


function displayResults(data){
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',"weather icon");
    weatherIcon.style.width= '18px';
    weatherIcon.style.height= '18px';
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;
}