<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $roomNumber = $_POST["roomNum"];
    $fullName = $_POST["roomName"];
    $arrivalDate = $_POST["arrDate"];
    $departureDate = $_POST["depDate"];
    $roomIssues = $_POST["issues"];

    // Set the recipient email address
    $to = "inventorylist.olympiades@gmail.com";

    // Additional headers
    $headers = "From: Inventory List <$to>";

    // Build the email message
    $subject = "Room " . $roomNumber . " - " . $arrivalDate;
    $message = "Room Number: $roomNumber\r\n";
    $message .= "Full Name: $fullName\r\n";
    $message .= "Date of Arrival: $arrivalDate\r\n";
    $message .= "Date of Departure: $departureDate\r\n\r\n";

    // Initialize a variable to check if there is any input
    $hasInput = false;

    // Define the names array
    $names = [
        "Dinner/soup plate", "Small plate", "Bowl", "Glass", "Mug", "Fork", "Table spoon", "Coffee spoon",
        "Butter knife", "Big cutting knife", "Small cutting knife", "Bread knife", "Potato peeler", "Spatula", "Corkscrew",
        "Can opener", "Cutting board", "Big pan/pot", "Small pan/pot", "Frying pan", "Salad bowl", "Oven dish", "Colander",
        "Jug", "Heatproof mat", "Coffee machine", "Microwave", "Vacuum cleaner", "Toilet brush"
    ];

    // Loop through each row
    for ($i = 1; $i <= 29; $i++) {
        // Include inventory details in the email message for each row
        $rowHasInput = false;

        for ($j = 1; $j <= 7; $j++) {
            $type = $_POST["type" . $j][$i - 1];
            
            if (!empty($type)) {
                $message .= "{$names[$i - 1]} - $type\r\n\r\n"; 
                $rowHasInput = true;
                $hasInput = true;
            }
        }
    }

    $message .= "Room Issues: \r\n$roomIssues";

    // Send the consolidated email if there is any input
    if ($hasInput && mail($to, $subject, $message, $headers)) {
        // Redirect after sending the email
        header("Location: endform.html");
        exit();
    } else {
        echo "There was no input to send or there was a problem sending the message.";
    }
}
?>
