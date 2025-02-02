
const API_KEY = "FqoXxM7gNsn34AG6LMAttjAi62rjhf6O"; 
let CATEGORY = "music";
let LOCATION = "Johannesburg"; 

async function fetchEvents() {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${CATEGORY}&city=${encodeURIComponent(LOCATION)}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const events = data._embedded.events; 

        displayEvents(events);
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

async function searchEvents() {
    let category = document.getElementById("category").value;
    let location = document.getElementById("location").value;

    if (!location) {
        alert("Please enter a location.");
        return;
    }

    const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${category}&city=${location}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        if (data._embedded && data._embedded.events) {
            displayEvents(data._embedded.events);
        } else {
            document.getElementById("events-container").innerHTML = `<h1 class="notFound">No events found.</h1>`;
        }
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

function displayEvents(events) {
    let container = document.getElementById("events-container");
    container.innerHTML = ""; 
    console.log(events)

    events.forEach(event => {
        let eventDiv = document.createElement("div");
        eventDiv.setAttribute("class", "event");

        eventDiv.innerHTML = `
            <div class="event-img">
                <img src="${event.images && event.images.length > 0 ? event.images[0].url : 'placeholder.jpg'}" alt="${event.name}">
            </div>
            <div class="event-info">
                <h2>${event.name}</h2>
                <p><strong>Date:</strong> ${new Date(event.dates.start.localDate).toLocaleDateString()} at ${event.dates.start.localTime.slice(0,5)}</p>
                <p><strong>Venue:</strong> ${event._embedded.venues[0].name}, ${event._embedded.venues[0].city.name}</p>
                <a href="${event.url}" target="_blank">
                    <button class="learn-more-btn">Learn More</button>
                </a>
            </div>
        `;

        container.appendChild(eventDiv);
    });
}


fetchEvents();

