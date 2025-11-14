<?php

// Connect to database
$conn = mysqli_connect('localhost', 'root', '', 'event_registration');

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$event = $_POST['event'];

// Insert into database
$query = "INSERT INTO registrations (name, email, mobile, event, registration_date) 
          VALUES ('$name', '$email', '$mobile', '$event', NOW())";

$result = mysqli_query($conn, $query);

// Check if successful
if($result) {
    header("Location: Trial.html?status=success");
} else {
    header("Location: index.php?status=error");
}

mysqli_close($conn);

?>
