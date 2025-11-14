// Array of insurance events
const insuranceEvents = [
    {
        name: "Health Insurance Wellness Summit 2025",
        type: "Health Insurance",
        description: "Learn about comprehensive health coverage and wellness benefits"
    },
    {
        name: "Car Insurance Safety Drive Workshop",
        type: "Car Insurance",
        description: "Understanding auto insurance policies and safe driving practices"
    },
    {
        name: "Bike Insurance Riders Convention",
        type: "Bike Insurance",
        description: "Exclusive event for two-wheeler insurance and rider safety"
    },
    {
        name: "Life Insurance Planning Seminar",
        type: "Life Insurance",
        description: "Secure your family's future with life insurance strategies"
    },
    {
        name: "Home Insurance Protection Forum",
        type: "Home Insurance",
        description: "Protecting your home and property from unexpected damages"
    },
    {
        name: "Travel Insurance Global Conference",
        type: "Travel Insurance",
        description: "Coverage for international and domestic travel emergencies"
    },
    {
        name: "Business Insurance Enterprise Expo",
        type: "Business Insurance",
        description: "Comprehensive insurance solutions for businesses and startups"
    },
    {
        name: "Health Insurance Family Care Meet",
        type: "Health Insurance",
        description: "Family health coverage and critical illness protection"
    },
    {
        name: "Car Insurance Claims Processing Workshop",
        type: "Car Insurance",
        description: "Fast-track your car insurance claims and settlements"
    },
    {
        name: "Bike Insurance Premium Discount Fair",
        type: "Bike Insurance",
        description: "Special offers on bike insurance with cashback benefits"
    }
];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const eventsContainer = document.getElementById('eventsContainer');
const eventCount = document.getElementById('eventCount');
const noResults = document.getElementById('noResults');

// Function to display events
function displayEvents(events) {
    // Clear container
    eventsContainer.innerHTML = '';
    
    // Update count
    eventCount.textContent = events.length;
    
    // Show/hide no results message
    if (events.length === 0) {
        noResults.classList.add('show');
        eventsContainer.style.display = 'none';
    } else {
        noResults.classList.remove('show');
        eventsContainer.style.display = 'grid';
        
        // Create event cards
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            
            eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p style="color: #666; font-size: 14px; margin-top: 8px;">${event.description}</p>
                <span class="event-type">${event.type}</span>
            `;
            
            eventsContainer.appendChild(eventCard);
        });
    }
}

// Function to filter events
function filterEvents(keyword) {
    // Convert keyword to lowercase for case-insensitive search
    const searchTerm = keyword.toLowerCase().trim();
    
    // If search is empty, show all events
    if (searchTerm === '') {
        return insuranceEvents;
    }
    
    // Filter events based on keyword
    const filteredEvents = insuranceEvents.filter(event => {
        // Search in event name, type, and description
        return event.name.toLowerCase().includes(searchTerm) ||
               event.type.toLowerCase().includes(searchTerm) ||
               event.description.toLowerCase().includes(searchTerm);
    });
    
    return filteredEvents;
}

// Event listener for search input
searchInput.addEventListener('input', function() {
    const keyword = this.value;
    const filteredEvents = filterEvents(keyword);
    displayEvents(filteredEvents);
});

// Display all events on page load
window.addEventListener('DOMContentLoaded', function() {
    displayEvents(insuranceEvents);
});

// Optional: Add animation when typing
let typingTimer;
searchInput.addEventListener('keyup', function() {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function() {
        // Add subtle animation effect
        eventsContainer.style.opacity = '0.7';
        setTimeout(function() {
            eventsContainer.style.opacity = '1';
        }, 100);
    }, 200);
});
