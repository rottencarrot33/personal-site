<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_POST['honeypot'])) {
      echo "Spam detected. Form submission failed.";
      exit();
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = "netorbyte.com request";
    $message = $_POST['message'];

    $to = "dev@netorbyte.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
      header("Location: thankyou.html");
      exit();
    } else {
      echo "There was a problem sending the message.";
    }
  }
?>
