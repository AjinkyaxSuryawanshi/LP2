-- Create database
CREATE DATABASE IF NOT EXISTS event_registration;

-- Use the database
USE event_registration;

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mobile VARCHAR(10) NOT NULL,
    event VARCHAR(200) NOT NULL,
    registration_date DATETIME NOT NULL,
    INDEX idx_email (email),
    INDEX idx_mobile (mobile)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert sample data (optional)
INSERT INTO registrations (name, email, mobile, event, registration_date) VALUES
('John Doe', 'john@example.com', '9876543210', 'Health Insurance Summit', NOW()),
('Jane Smith', 'jane@example.com', '9123456789', 'Car Insurance Workshop', NOW());
