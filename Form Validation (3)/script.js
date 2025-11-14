// Get form elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const mobileError = document.getElementById('mobileError');

const successMessage = document.getElementById('successMessage');

// Validation functions
function validateName(name) {
    // Name should be at least 3 characters and contain only letters and spaces
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    return nameRegex.test(name.trim());
}

function validateEmail(email) {
    // Standard email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function validateMobile(mobile) {
    // Mobile number should be exactly 10 digits
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile.trim());
}

// Show error function
function showError(input, errorElement) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorElement.classList.add('show');
}

// Hide error function
function hideError(input, errorElement) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    errorElement.classList.remove('show');
}

// Reset validation state
function resetValidation(input, errorElement) {
    input.classList.remove('invalid');
    input.classList.remove('valid');
    errorElement.classList.remove('show');
}

// Real-time validation on input
nameInput.addEventListener('input', function() {
    if (this.value === '') {
        resetValidation(this, nameError);
    } else if (validateName(this.value)) {
        hideError(this, nameError);
    } else {
        showError(this, nameError);
    }
});

emailInput.addEventListener('input', function() {
    if (this.value === '') {
        resetValidation(this, emailError);
    } else if (validateEmail(this.value)) {
        hideError(this, emailError);
    } else {
        showError(this, emailError);
    }
});

mobileInput.addEventListener('input', function() {
    if (this.value === '') {
        resetValidation(this, mobileError);
    } else if (validateMobile(this.value)) {
        hideError(this, mobileError);
    } else {
        showError(this, mobileError);
    }
});

// Form submission handler
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Hide success message if shown
    successMessage.classList.remove('show');
    
    // Get input values
    const name = nameInput.value;
    const email = emailInput.value;
    const mobile = mobileInput.value;
    
    // Validation flags
    let isValid = true;
    
    // Validate name
    if (!validateName(name)) {
        showError(nameInput, nameError);
        isValid = false;
    } else {
        hideError(nameInput, nameError);
    }
    
    // Validate email
    if (!validateEmail(email)) {
        showError(emailInput, emailError);
        isValid = false;
    } else {
        hideError(emailInput, emailError);
    }
    
    // Validate mobile
    if (!validateMobile(mobile)) {
        showError(mobileInput, mobileError);
        isValid = false;
    } else {
        hideError(mobileInput, mobileError);
    }
    
    // If all validations pass
    if (isValid) {
        // Show success message
        successMessage.classList.add('show');
        
        // Log the data (in real application, this would be sent to server)
        console.log('Registration Data:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Mobile:', mobile);
        
        // Reset form after successful submission
        setTimeout(function() {
            form.reset();
            resetValidation(nameInput, nameError);
            resetValidation(emailInput, emailError);
            resetValidation(mobileInput, mobileError);
            successMessage.classList.remove('show');
        }, 3000);
    }
});
