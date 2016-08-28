<?php

$to = "lukechalmers@gmail.com";
$subject = "Acknowledgement for High Severity Incident";
$headers = 'From: webmaster@rockstarbob.com' . "\r\n" .
    'Content-type: text/plain; charset=iso-8859-1' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$postdata = file_get_contents("php://input");

$req = json_decode($postdata);
$message = $req->message;

if(mail($to,$subject,$message,$headers)){
        echo "1";
}
else {
    echo "0";
}


?>
