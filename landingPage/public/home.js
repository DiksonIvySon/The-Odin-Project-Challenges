

// const API_KEY = "FqoXxM7gNsn34AG6LMAttjAi62rjhf6O"; // Get from Ticketmaster
// const CATEGORY = "music"; // Change as needed
// const LOCATION = "Johannesburg";
// let EventsData;

// async function fetchEvents() {
//     const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${CATEGORY}&city=${encodeURIComponent(LOCATION)}&apikey=${API_KEY}`;

//     try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//         const data = await response.json()
//         EventsData = data;
//         console.log(data._embedded.events); // List of events
         
//     } catch (error) {
//         console.error("Error fetching events:", error);
//     }
// }

// fetchEvents();

const API_KEY = "FqoXxM7gNsn34AG6LMAttjAi62rjhf6O"; // Replace with your actual API key
const CATEGORY = "music"; // Example category, change as needed
const LOCATION = "Johannesburg"; // Change location if needed

async function fetchEvents() {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${CATEGORY}&city=${encodeURIComponent(LOCATION)}&apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const events = data._embedded.events; // Extract the event data

        displayEvents(events);
    } catch (error) {
        console.error("Error fetching events:", error);
    }
}

function displayEvents(events) {
    const container = document.getElementById("events-container");
    container.innerHTML = ''; // Clear any existing content

    events.forEach(event => {
        // Create event elements dynamically
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");

        // Event image (if available)
        if (event.images && event.images.length > 0) {
            const eventImage = document.createElement("img");
            //const imageDiv = document.createElement("div");
            eventImage.src = event.images[0].url; // First image
            eventImage.alt = event.name;
            //imageDiv.appendChild(eventImage);
            eventDiv.appendChild(eventImage);
        }

        // Event name
        const eventName = document.createElement("h2");
        eventName.textContent = event.name;
        eventDiv.appendChild(eventName);

        // Event date & time
        const eventDate = document.createElement("p");
        eventDate.textContent = `Date: ${new Date(event.dates.start.localDate).toLocaleDateString()} at ${new Date(event.dates.start.localTime).toLocaleTimeString()}`;
        eventDiv.appendChild(eventDate);

        // Event venue
        const eventVenue = document.createElement("p");
        eventVenue.textContent = `Venue: ${event._embedded.venues[0].name}, ${event._embedded.venues[0].city.name}`;
        eventDiv.appendChild(eventVenue);

        // Event link
        const eventLink = document.createElement("a");
        const linkButton = document.createElement("button");
        eventLink.href = event.url;
        linkButton.textContent = "Learn More";
        eventLink.appendChild(linkButton);
        eventDiv.appendChild(eventLink);

        // Append the event to the container
        container.appendChild(eventDiv);
    });
}

fetchEvents();

