const content = document.getElementById("content");
const form = document.getElementById("lookupForm");
const cityInput = document.getElementById("city")

window.onload = () => {
    getWeather("http://api.weatherapi.com/v1/forecast.json?key=afc8a513ef9547378a1185517242802&q=New York&aqi=no&days=3") ;
}

form.addEventListener('submit', (element) =>{
    element.preventDefault();
    clearContent();
    getWeather(`http://api.weatherapi.com/v1/forecast.json?key=afc8a513ef9547378a1185517242802&q=${cityInput.value}&aqi=no&days=3`);
});

async function getWeather(url){
    const response = await fetch(url,{mode: "cors"});
    response.json().then(function(response){
        response.forecast.forecastday.forEach((element) => {
            displayForecast(element)
        });
    });
}

function displayForecast(dayForecast){
    const daycard = document.createElement("div");
    daycard.classList.add("card");
    daycard.innerHTML = `<img src ="${dayForecast.day.condition.icon}" alt="${dayForecast.day.condition.text}"/>
    <h5>${getDayName(dayForecast.date, navigator.languages)}</h5>
    <h5>${dayForecast.day.maxtemp_f} / ${dayForecast.day.mintemp_f}</h5>`
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