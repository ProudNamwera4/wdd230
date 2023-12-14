const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const humidity = document.querySelector("#humidity");
const windspeed = document.querySelector("#windspeed");
const maxTemp = document.querySelector("#temp-max");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.96&cnt=3&appid=bc5627345bd0bd83bacbb4a24454ec2d&units=imperial"

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
    weatherIcon.style.width= '100px';
    weatherIcon.style.height= '100px';
    currentTemp.textContent = `Temperature in Fahrenheit: ${data.main.temp}`;
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;
    humidity.textContent= `${data.main.humidity}`;
    windspeed.textContent= `Wind speed in miles per hour: ${data.wind.speed}`;
    maxTemp.textContent = `Maximum temperature for today: ${data.main.temp_max}`;

}