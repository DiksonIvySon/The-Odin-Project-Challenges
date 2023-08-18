
//Variables of all the information that will be needed from the Weather API.
let localTime;
let last_updated;      //Day and time.
let temp_c;
let is_day;            //if 1 then it is day.
let conditionText;     //whether its sunny rainy, or windy.
let conditionIcon;
let wind_kph;
let wind_dir;
let pressure_mb;
let precip_mm;
let humidity;
let cloud;
let feelslike_c;
let vis_km;
let uv;
let gust_kph;


//function to get the data from the API and initialize the weather information variables
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

//function to get the location entered by the user when the search button is clicked
let searchButton = document.querySelector('.searchButton');
let searchValue = document.querySelector('#search').value;
searchButton.addEventListener('click', function() {
    if (searchValue === "") {
        alert("there is no value entered");
    }
    else {
        createLink(searchValue);
    }
})








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
