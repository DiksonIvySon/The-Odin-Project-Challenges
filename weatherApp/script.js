
//Variables of all the information that will be needed from the Weather API.
let inputLocation = "johannesburg"; //show johannesburg data on load.

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

//forecast
let sunrise;
let sunset;
let moonrise;
let moonset;
let moon_phase;
let daily_chance_of_rain;
let dayDate;


//function to fetch the data from the API and initialize the weather information variables.
async function getWeatherInfo(linkLocation) {
    const response = await fetch(linkLocation, {mode: 'cors'});
    const weatherData = await response.json();
    dataInitializer(weatherData);
}


//function to create the URL link.
function createLink() {
    let linkLocation = 'https://api.weatherapi.com/v1/forecast.json?key=8badefafba8c47eb9f7184239231608&q=' + inputLocation;
    getWeatherInfo(linkLocation);
} 

//****** */
createLink()



//function to get the location entered by the user when the search button is clicked.
let searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', function() {
    let searchValue = document.getElementById('searchValue').value;
    inputLocation = searchValue;
    if (searchValue === "") {
        //
    }
    else {
        createLink();
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

     //forecast
     sunrise = weatherData.forecast.forecastday[0].astro.sunrise;
     sunset = weatherData.forecast.forecastday[0].astro.sunset;
     moonrise = weatherData.forecast.forecastday[0].astro.moonrise;
     moonset = weatherData.forecast.forecastday[0].astro.moonset;
     moon_phase = weatherData.forecast.forecastday[0].astro.moon_phase;
     daily_chance_of_rain = weatherData.forecast.forecastday[0].day.daily_chance_of_rain;
     dayDate = weatherData.forecast.forecastday[0].date;


    displayData();
    displayCurrentLocation()  
    displayAstroData()
    getHourlyData(weatherData);
    makeDate();
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
    currentCloudCover.textContent = cloud + "%";

    let currentUV = document.querySelector('.current-uv');
    currentUV.textContent = uv;

    let currentHumidity = document.querySelector('.current-humidity');
    currentHumidity.textContent = humidity + "%";

    let currentWindSpeed = document.querySelector('.current-windSpeed');
    currentWindSpeed.textContent = wind_kph + "kph";

    let currentFeelsLike = document.querySelector('.current-feelsLike');
    currentFeelsLike.textContent = feelsLike_c + "°C";

    let currentChanceOfRain = document.querySelector('.current-chanceOfRain');
    currentChanceOfRain.textContent = daily_chance_of_rain + "%";
}

//function to display the current location information. 
function displayCurrentLocation() {
    document.querySelector('.locationName').textContent = locationName;
    document.querySelector('.currentLocation').textContent = locationName; //make location to show 0n the button
    document.querySelector('.locationRegion').textContent = region;
    document.querySelector('.locationCountry').textContent = country;
    document.querySelector('.locationLatitude').textContent = lat;
    document.querySelector('.locationLongitude').textContent = lon;
    document.querySelector('.locationLastUpdate').textContent = last_updated;
}

//function to display the astro data.
function displayAstroData() {
    document.querySelector('.sunrise').textContent = sunrise;
    document.querySelector('.sunset').textContent = sunset;
    document.querySelector('.moonrise').textContent = moonrise;
    document.querySelector('.moonset').textContent = moonset;
    document.querySelector('.moon_phase').textContent = moon_phase;
}

//function to get weather hourly data and structure is well
function getHourlyData(weatherData) {
    let hourlyTime;
    let hourlyConditionImg;
    let hourlyTemp;
    let hourly_chanceOfRain;
    let hourlyWind;
    
    //clear the hourly weather container before adding into it when a location changes.
    let HourlyWeatherContainer = document.querySelector('.HourlyWeather-container');
    HourlyWeatherContainer.textContent = ""; 

    for (let i=0; i < 24; i++) {
        hourlyTime = i;
        hourlyConditionImg = weatherData.forecast.forecastday[0].hour[i].condition.icon;
        hourlyTemp = weatherData.forecast.forecastday[0].hour[i].temp_c;
        hourly_chanceOfRain = weatherData.forecast.forecastday[0].hour[i].chance_of_rain;
        hourlyWind = weatherData.forecast.forecastday[0].hour[i].wind_kph

        if (hourlyTime < 10) {
            hourlyTime = "0" + hourlyTime + ":00";
        }
        else {
            hourlyTime = hourlyTime + ":00";
        }
        
        displayHourlyWeather(hourlyTime, hourlyConditionImg, hourlyTemp, hourly_chanceOfRain, hourlyWind);
    }
}

//function to display all 24 hourly weather conditions
function displayHourlyWeather(hourlyTime, hourlyConditionImg, hourlyTemp, hourly_chanceOfRain, hourlyWind) {

    let HourlyWeatherContainer = document.querySelector('.HourlyWeather-container');
    let singleHourlyWeather = document.createElement('div');
    singleHourlyWeather.setAttribute('class', 'HourlyWeather')
    singleHourlyWeather.innerHTML = `
                                    
                                    <h2 class="HourlyTime">${hourlyTime}</h2>
                                    <div>
                                        <div><img class="HourlyConditionImg" src="${hourlyConditionImg}" alt="weather type image"></div>
                                        <h1 class="HourlyTemp">${hourlyTemp}°C</h1>
                                        <hr>
                                        <div class="HourlyInfo">
                                            <div>
                                                <img src="icons/rainy.png" alt="" width="50px">
                                                <text class="Hourly-chanceOfRain">${hourly_chanceOfRain}%</text>
                                            </div>
                                            <div>
                                                <img src="icons/wind.png" alt="" width="50px">
                                                <text class="Hourly-wind">${hourlyWind}kph</text>
                                            </div>
                                        </div>
                                    </div>
                                    
                                `;

    HourlyWeatherContainer.appendChild(singleHourlyWeather);
    
}
 
//function to get the previous data
function makeDate() {

    let dayDate_Day;

    dayDate_Day = parseInt(dayDate.substr(8, 2));
    dayDate_Day = dayDate_Day - 1;
    let loopTimes = 7;
    
    for (let i = loopTimes; i > 0; i--) {
        if (dayDate_Day < 0) {
            dayDate_Day = 31 - dayDate_Day;
        }

        let new_dayDate = dayDate.substr(0, 4) + "-" + dayDate.substr(5, 2) + "-" + dayDate_Day.toString();
        console.log(new_dayDate)

        //empty the previous weather container
        let previousWeatherContainer = document.querySelector('.previousWeather-container');
        previousWeatherContainer.textContent = "";

        getPreviousData(new_dayDate);
        dayDate_Day -= 1;
    }

}


//function to fetch the previous data
async function getPreviousData(new_dayDate) {
    let previousDataLink = "http://api.weatherapi.com/v1/history.json?key=8badefafba8c47eb9f7184239231608&q=" + inputLocation + "&dt=" + new_dayDate;
    const response = await fetch(previousDataLink, {mode: 'cors'});
    const previousDataInfo = await response.json();
    displayPreviousDataInfo(previousDataInfo);
    
}

//function to display the previous data information
function displayPreviousDataInfo(previousDataInfo) {

    console.log(previousDataInfo);

    let previousData_date = previousDataInfo.forecast.forecastday[0].date;
    let previousData_icon = previousDataInfo.forecast.forecastday[0].day.condition.icon;
    let previousData_avgtemp = previousDataInfo.forecast.forecastday[0].day.avgtemp_c;
    let previousData_maxwind_kph = previousDataInfo.forecast.forecastday[0].day.maxwind_kph;
    let previousData_totalprecip_mm = previousDataInfo.forecast.forecastday[0].day.totalprecip_mm;

    let previousWeatherContainer = document.querySelector('.previousWeather-container');
    let singlePreviousWeather = document.createElement('div');
    singlePreviousWeather.setAttribute('class', 'dayWeather')
    singlePreviousWeather.innerHTML = `
                                    
                                    <h2 class="HourlyTime">${previousData_date}</h2>
                                    <div>
                                        <div><img class="HourlyConditionImg" src="${previousData_icon}" alt="weather type image"></div>
                                        <h1 class="HourlyTemp">${previousData_avgtemp}°C</h1>
                                        <hr>
                                        <div class="HourlyInfo">
                                            <div>
                                                <img src="icons/rainy.png" alt="" width="50px">
                                                <text class="Hourly-chanceOfRain">${previousData_totalprecip_mm}mm</text>
                                            </div>
                                            <div>
                                                <img src="icons/wind.png" alt="" width="50px">
                                                <text class="Hourly-wind">${previousData_maxwind_kph}kph</text>
                                            </div>
                                        </div>
                                    </div>
                                    
                                `;

    previousWeatherContainer.appendChild(singlePreviousWeather);
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
    document.querySelector('.firstPage-weather').style.color = 'white';
    let firstPageBackground = document.querySelector('.firstPage');
    if (conditionText === "Cloudy") {
        firstPageBackground.style.backgroundImage = "url(images/cloudy.jpeg)";
    }
    else if (conditionText === "Foggy" || conditionText === "Mist") {
        firstPageBackground.style.backgroundImage = "url(images/foggy.jpeg)";
    }
    else if (conditionText === "Overcast") {
        firstPageBackground.style.backgroundImage = "url(images/overcast.jpeg)";
    }
    else if (conditionText === "Partly cloudy" || conditionText === "Partly cloudy rain" || conditionText === "Partly cloudy rainy") {
        firstPageBackground.style.backgroundImage = "url(images/partly-cloudy.webp)";
        document.querySelector('.firstPage-weather').style.color = 'black';  
    }
    else if (conditionText === "Rainy" || conditionText === "Rain" || conditionText === "Light rain" || conditionText === "Heavy rain" || conditionText === "Moderate rain") {
        firstPageBackground.style.backgroundImage = "url(images/rainy.jpeg)";
    }
    else if (conditionText === "snowing" || conditionText === "snow") {
        firstPageBackground.style.backgroundImage = "url(images/snowing.jpeg)";
        document.querySelector('.firstPage-weather').style.color = 'black';
    }
    else if (conditionText === "Sunny" || conditionText === "sun") {
        firstPageBackground.style.backgroundImage = "url(images/sunny.jpeg)";
    }
    else if (conditionText === "thunder and lightning" || conditionText === "thunder" || conditionText === "lightning") {
        firstPageBackground.style.backgroundImage = "url(images/thunder-and-lightning.jpeg)";
    }
    else if (conditionText === "Windy") {
        firstPageBackground.style.backgroundImage = "url(images/windy.jpeg)";
    }
    else if (conditionText === "Clear") {
        firstPageBackground.style.backgroundImage = "url(images/clear.jpeg)";
    }
    else {
        firstPageBackground.style.backgroundImage = "url(images/backup-image.jpeg)";
    }
}






//function to make the location information button to toggle between showing and hiding information.
let  currentLocationButton = document.querySelector('.currentLocation');
currentLocationButton.addEventListener('click', function() {
    let currentLocationInfo = document.querySelector('.currentLocationInfo');
    hideOrShow(currentLocationInfo);
})

//function to hide or show a dom element.
function hideOrShow(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
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
