const temp = document.querySelector("#current-temp");
const button = document.querySelector('#calculate');
const windSpeed = document.querySelector("#windspeed");
const windChill = document.querySelector("#windChill");

button.addEventListener('click', ()=> {
    if(temp.value <= 50 && windSpeed.value>=3.0){
        let t = (35.74 +0.6215(temp.value))-(35.75(windSpeed.value)**0.16) + (0.4275(temp.value)(windSpeed.value)**0.16)
        windChill.textContent = "Wind chill in Fahrenheit: "+ t;
    }else{
        windChill.innerHTML = " Wind Chill: N/A";
    }
})


