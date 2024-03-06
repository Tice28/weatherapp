const content = document.getElementById("content");
const form = document.getElementById("lookupForm");
const cityInput = document.getElementById("city");
const tempTgl = document.getElementById("tempToggle");
const cityName = document.getElementById("cityName");

window.onload = () => {
    getWeather("https://api.weatherapi.com/v1/forecast.json?key=afc8a513ef9547378a1185517242802&q=New York&aqi=no&days=3") ;
}

form.addEventListener('submit', (element) =>{
    element.preventDefault();
    if(validate()){
        getWeather(`https://api.weatherapi.com/v1/forecast.json?key=afc8a513ef9547378a1185517242802&q=${cityInput.value}&aqi=no&days=3`);
    }
    else{
        alert("Please enter a valid location");
    }
    
});

tempTgl.addEventListener("click", () => {
        clearContent();
        getWeather(`https://api.weatherapi.com/v1/forecast.json?key=afc8a513ef9547378a1185517242802&q=${cityName.textContent}&aqi=no&days=3`);
});

async function getWeather(url){
    const unit = getTempUnit();
    const response = await fetch(url,{mode: "cors"});
    if(response.status !== 400){
        clearContent();
        response.json().then(function(response){
                response.forecast.forecastday.forEach((element) => {
                    changeCityName(response.location.name);
                    displayForecast(element, unit);
                });
        });
    }
    else{
        alert("City not found!");
    }
}

function displayForecast(dayForecast, tempUnit){
    let tempHi;
    let tempLo;
    let unit;
    if(tempUnit){
        tempHi = dayForecast.day.maxtemp_c;
        tempLo = dayForecast.day.mintemp_c;
        unit = "C";
    }
    else {
        tempHi = dayForecast.day.maxtemp_f;
        tempLo = dayForecast.day.mintemp_f;
        unit = "F";
    }
    const daycard = document.createElement("div");
    daycard.classList.add("card");
    daycard.innerHTML = `<img src ="${dayForecast.day.condition.icon}" alt="${dayForecast.day.condition.text}"/>
    <h4>${getDayName(dayForecast.date, navigator.languages)}</h4>
    <h4>${tempHi} / ${tempLo} ${unit}</h4>`
    content.appendChild(daycard);
}

function clearContent(){
    while(content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }
}

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toDateString(locale, { weekday: 'long' });        
}

function getTempUnit(){
    return tempTgl.checked;
}

function validate(){
    if(cityInput.value == ""){
        return false;
    }
    else{
        return true;
    }
}

function changeCityName(name){
    cityName.textContent = name;
}