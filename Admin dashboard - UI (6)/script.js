// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Static registrations data (UI only, no backend operations)
let registrations = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        mobile: "9876543210",
        event: "Health Insurance Summit",
        date: "2025-11-14",
        status: "Active"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        mobile: "9123456789",
        event: "Car Insurance Workshop",
        date: "2025-11-13",
        status: "Active"
    },
    {
        id: 3,
        name: "Mike Johnson",
        email: "mike@example.com",
        mobile: "9988776655",
        event: "Bike Insurance Convention",
        date: "2025-11-12",
        status: "Pending"
    },
    {
        id: 4,
        name: "Sarah Williams",
        email: "sarah@example.com",
        mobile: "9876512345",
        event: "Life Insurance Seminar",
        date: "2025-11-11",
        status: "Active"
    },
    {
        id: 5,
        name: "David Brown",
        email: "david@example.com",
        mobile: "9123498765",
        event: "Home Insurance Forum",
        date: "2025-11-10",
        status: "Active"
    }
];

// Display all registrations
function displayRegistrations() {
    const tableBody = document.getElementById('tableBody');
    
    if (registrations.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5" class="no-data">No registrations found</td></tr>';
        return;
    }
    
    let html = '';
    registrations.forEach(reg => {
        html += `
            <tr>
                <td>${reg.id}</td>
                <td>${reg.name}</td>
                <td>${reg.email}</td>
                <td>${reg.event}</td>
                <td>
                    <button class="action-btn update-btn" onclick="openEditModal(${reg.id})">Update</button>
                    <button class="action-btn delete-btn" onclick="deleteRegistration(${reg.id})">Delete</button>
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// Initialize display on page load
displayRegistrations();
