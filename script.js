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

getWeather("http://api.weatherapi.com/v1/forecast.json?key=afc8a513ef9547378a1185517242802&q=New York&aqi=no&days=7") ;

//Testing features
function displayForecast(dayForecast){
    const daycard = document.createElement("div");
    daycard.classList.add("card");
    try{
        daycard.innerHTML = `<img src ="${dayForecast.condition.icon}" alt="dayForecast.condition.text"/>
                         <h5>${dayForecast.date}</h5>
                         <h5>${dayForecast.day.maxtemp_f} / ${dayForecast.day.mintemp_f}</h5>`
    }
    catch(e){
        daycard.innerHTML = `<img src ="#" alt="dayForecast.condition.text"/>
        <h5>${getDayName(dayForecast.date, navigator.languages)}</h5>
        <h5>${dayForecast.date}</h5>
        <h5>${dayForecast.day.maxtemp_f} / ${dayForecast.day.mintemp_f}</h5>`
    }
    content.appendChild(daycard);
}

//TODO: Fix this so that it displays correct day, is a day behind
function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

/*
HTML for each weather card
<div class="card">
        <img src="#" alt="Icon"  = dayForecast.condition.icon, dayForecast.condition.text/>
        <h5>Date = dayForecast.date</h5>
        <h5>Hi/Lo = dayForecast.day.maxtemp_f / dayForecast.day.mintemp_f</h5>
      </div>

      */