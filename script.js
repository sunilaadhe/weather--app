
/*
const apikey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
*/
let input = document.querySelector(".search-input")

async function checkweather(result) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${result}`);
let data = await response.json();
    console.log(data);

    
}


checkweather(jalna)