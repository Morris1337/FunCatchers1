<?php
  include('config.php');
?>
<?php
header('Content-Type: text/html; charset=utf-8');
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
                $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
		$subject = trim($_POST["subject"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR empty($subject) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
			header("Refresh: 5; url=https://funcatchers.lv/index.php");
            echo("$lang[mailtryagain]");
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "funcatcherslv@gmail.com";

        // Set the email subject.
        $subject = "FROM WEB FORM: $subject";

        // Build the email content.
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
		$email_content_type = "text/plain; charset=\"UTF-8\"";

        // Build the email headers.
        $email_headers = "From: $name <$email>";
        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
			header("Refresh: 5; url=https://funcatchers.lv/index.php");
			echo("$lang[mailthankyou]");	
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo("$lang[mailoops]");
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo("$lang[mailproblem]");
    }
?>
