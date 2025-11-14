// Check if user is logged in
if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

// Initialize registrations array from localStorage
let registrations = JSON.parse(localStorage.getItem('registrations')) || [
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

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('registrations', JSON.stringify(registrations));
}

// Initialize data if localStorage is empty
if (!localStorage.getItem('registrations')) {
    saveToLocalStorage();
}

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

// Open add modal
function openAddModal() {
    document.getElementById('modalTitle').textContent = 'Add Registration';
    document.getElementById('registrationForm').reset();
    document.getElementById('editId').value = '';
    document.getElementById('formModal').style.display = 'block';
}

// Open edit modal
function openEditModal(id) {
    const registration = registrations.find(reg => reg.id === id);
    
    if (registration) {
        document.getElementById('modalTitle').textContent = 'Update Registration';
        document.getElementById('editId').value = registration.id;
        document.getElementById('name').value = registration.name;
        document.getElementById('email').value = registration.email;
        document.getElementById('mobile').value = registration.mobile;
        document.getElementById('event').value = registration.event;
        document.getElementById('status').value = registration.status;
        document.getElementById('formModal').style.display = 'block';
    }
}

// Close modal
function closeModal() {
    document.getElementById('formModal').style.display = 'none';
}

// Handle form submission (Add/Update)
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const editId = document.getElementById('editId').value;
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
        event: document.getElementById('event').value,
        status: document.getElementById('status').value
    };
    
    if (editId) {
        // Update existing registration
        const index = registrations.findIndex(reg => reg.id === parseInt(editId));
        if (index !== -1) {
            registrations[index] = {
                ...registrations[index],
                ...formData
            };
        }
    } else {
        // Add new registration
        const newId = registrations.length > 0 ? Math.max(...registrations.map(r => r.id)) + 1 : 1;
        const newRegistration = {
            id: newId,
            ...formData,
            date: new Date().toISOString().split('T')[0]
        };
        registrations.push(newRegistration);
    }
    
    saveToLocalStorage();
    displayRegistrations();
    closeModal();
});

// Delete registration
function deleteRegistration(id) {
    if (confirm('Are you sure you want to delete this registration?')) {
        registrations = registrations.filter(reg => reg.id !== id);
        saveToLocalStorage();
        displayRegistrations();
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('formModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize display on page load
displayRegistrations();
