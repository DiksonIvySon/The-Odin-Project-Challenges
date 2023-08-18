
//Variables of all the information that will be needed from the Weather API.
//location
let localTime;
let country;
let lat;
let lon;
let locationName;
let region;
let tz_id;            //e.g Africa/Johannesburg.

//current
let last_updated;      //Day and time.
let last_updated_epoch;
let temp_c;
let temp_f;
let is_day;            //if 1 then it is day.
let conditionText;     //whether its sunny rainy, or windy.
let conditionIcon;
let conditionCode ;
let wind_kph;
let wind_dir;
let wind_degree;
let wind_mph;
let pressure_mb;
let precipitation_mm;
let precipitation_in;
let humidity;
let cloud;
let feelsLike_c;
let feelsLike_f;
let vis_km;
let vis_miles;
let uv;
let gust_kph;
let gust_mph;


//function to get the data from the API and initialize the weather information variables.
async function getWeatherInfo(location) {
    const response = await fetch(location, {mode: 'cors'});
    const weatherData = await response.json();
    dataInitializer(weatherData);
}


//function to create the URL link.
function createLink(location) {
    location = 'https://api.weatherapi.com/v1/current.json?key=8badefafba8c47eb9f7184239231608&q=' + location;
    getWeatherInfo(location);
} 

//function to get the location entered by the user when the search button is clicked.
let searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', function() {
    let searchValue = document.getElementById('searchValue').value;
    if (searchValue === "") {
        //
    }
    else {
        createLink(searchValue);
    }
})


//function to define all declared variables above.
function dataInitializer(weatherData) {

    //location
    localTime = weatherData.location.localtime;
    localTime_epoch = weatherData.location.localtime_epoch;
    country = weatherData.location.country;
    lat = weatherData.location.lat;
    lon = weatherData.location.lon;
    locationName = weatherData.location.name;
    region = weatherData.location.region;
    tz_id = weatherData.location.tz_id;

    //current
     last_updated = weatherData.current.last_updated;     
     last_updated_epoch = weatherData.current.last_updated_epoch;
     temp_c = weatherData.current.temp_c;
     temp_f = weatherData.current.temp_f;
     is_day = weatherData.current.is_day;           
     conditionText = weatherData.current.condition.text;     
     conditionIcon = weatherData.current.condition.icon;
     conditionCode = weatherData.current.condition.code;
     wind_kph = weatherData.current.wind_kph;
     wind_dir = weatherData.current.wind_dir;
     wind_degree = weatherData.current.wind_degree;
     wind_mph = weatherData.current.wind_mph;
     pressure_mb = weatherData.current.pressure_mb;
     precipitation_mm = weatherData.current.precip_mm;
     precipitation_in = weatherData.current.precip_in;
     humidity = weatherData.current.humidity;
     cloud = weatherData.current.cloud;
     feelsLike_c = weatherData.current.feelslike_c;
     feelsLike_f = weatherData.current.feelslike_f;
     vis_km = weatherData.current.vis_km;
     vis_miles = weatherData.current.vis_miles;
     uv = weatherData.current.uv;
     gust_kph = weatherData.current.gust_kph;
     gust_mph = weatherData.current.gust_mph;



    console.log(weatherData); //
    displayData();
    changeBackground()        // change the first page background image.
    document.getElementById('searchValue').value = "";  //setting set value to be empty
}

//function to display the data.
function displayData() {
    let conditionIconScreen = document.querySelector('.conditionIcon');
    conditionIconScreen.setAttribute('src', conditionIcon);

    let conditionTextScreen = document.querySelector('.conditionText');
    conditionTextScreen.textContent = conditionText;

    let temperature = document.querySelector('.temperature');
    temperature.textContent = temp_c + "°C";

    let dayTime = document.querySelector('.dayTime');
    dayTime.textContent = isDayOrNight();

    let currentCloudCover = document.querySelector('.current-cloudCover');
    currentCloudCover.textContent = cloud;

    let currentUV = document.querySelector('.current-uv');
    currentUV.textContent = uv;

    let currentHumidity = document.querySelector('.current-humidity');
    currentHumidity.textContent = humidity + "%";

    let currentWindSpeed = document.querySelector('.current-windSpeed');
    currentWindSpeed.textContent = wind_kph + "kph";

    let currentFeelsLike = document.querySelector('.current-feelsLike');
    currentFeelsLike.textContent = feelsLike_c + "°C";

    let currentChanceOfRain = document.querySelector('.current-chanceOfRain');
    currentChanceOfRain.textContent = precipitation_in + "mm";  //precipitation represents the chance of rain
}

//function to determine if it is day or night.
function isDayOrNight() {
    if (is_day === 1) {
        return "Day Time";
    }
    else {
        return "Night Time";
    }
} 

//function to change the first page background to match the weather condition.
function changeBackground() {
    document.querySelector('.firstPage-weather').style.color = 'black';
    let firstPageBackground = document.querySelector('.firstPage');
    if (conditionText === "cloudy") {
        firstPageBackground.style.backgroundImage = "url(images/cloudy.jpeg)";
    }
    else if (conditionText === "foggy") {
        firstPageBackground.style.backgroundImage = "url(images/foggy.jpeg)";
    }
    else if (conditionText === "overcast") {
        firstPageBackground.style.backgroundImage = "url(images/overcast.jpeg)";
    }
    else if (conditionText === "Partly cloudy") {
        firstPageBackground.style.backgroundImage = "url(images/partly-cloudy.webp)";
    }
    else if (conditionText === "rainy") {
        firstPageBackground.style.backgroundImage = "url(images/rainy.jpeg)";
    }
    else if (conditionText === "snowing") {
        firstPageBackground.style.backgroundImage = "url(images/snowing.jpeg)";
    }
    else if (conditionText === "sunny") {
        firstPageBackground.style.backgroundImage = "url(images/sunny.jpeg)";
    }
    else if (conditionText === "thunder and lightning") {
        firstPageBackground.style.backgroundImage = "url(images/thunder-and-lightning.jpeg)";
    }
    else if (conditionText === "thunder and lightning") {
        firstPageBackground.style.backgroundImage = "url(images/thunder-and-lightning.jpeg)";
    }
    else if (conditionText === "windy") {
        firstPageBackground.style.backgroundImage = "url(images/windy.webp)";
    }
    else {
        firstPageBackground.style.backgroundImage = "url(images/backup-image.jpeg)";
        document.querySelector('.firstPage-weather').style.color = 'white';
    }
}








//Making the slide show function .....................................................................
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
