
//Variables of all the information that will be needed from the Weather API.
let localTime;
let last_updated;      //Day and time.
let temp_c;
let temp_f;
let is_day;            //if 1 then it is day.
let conditionText;     //whether its sunny rainy, or windy.
let conditionIcon;
let wind_mph;
let wind_kph;
let wind_degree;
let wind_dir;
let pressure_mb;
let pressure_in;
let precip_mm;
let precip_in;
let humidity;
let cloud;
let feelslike_c;
let feelslike_f;
let vis_km;
let vis_miles;
let uv;
let gust_mph;
let gust_kph;


//function to get the data from the API and initialize the weather information variables
async function getWeatherInfo(location) {
    const response = await fetch(location, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    localTime = weatherData.current.cloud;
  }


//function to create the URL link.
function createLink(location) {
    location = 'https://api.weatherapi.com/v1/current.json?key=8badefafba8c47eb9f7184239231608&q=' + location;
    getWeatherInfo(location);
} 



createLink('cape town');
console.log(localTime);


