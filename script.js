const content = document.getElementById("content")


async function getWeather(url){
    const response = await fetch(url,{mode: "cors"});
    response.json().then(function(response){
        response.forecast.forecastday.forEach((element) => {
            displayForecast(element)
            console.log(element)
        });
    });
}

getWeather("http://api.weatherapi.com/v1/forecast.json?key=afc8a513ef9547378a1185517242802&q=London&aqi=no&days=3") ;

//Testing features
function displayForecast(dayForecast){
    const daycard = document.createElement("div");
    daycard.innerHTML = `${dayForecast.day.condition}`
    content.appendChild(daycard);
}