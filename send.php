<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';
    
	// Переменные
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $password = $_POST['password'];
    $tel = $_POST['tel'];
    $e_mail = $_POST['e_mail'];
	// Настройки
	$mail = new PHPMailer;
	try {
    //Server settings
    $mail->SMTPDebug = 1;
    $mail->CharSet = "utf-8";                             // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'SMTP_SERVER_OF_YOUR_EMAIL';  		  // Specify main and backup SMTP servers (SMTP сервер почты, откуда посылается письмо, например - "smtp.yandex.ru")
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'USERNAME_OF_YOU_EMAIL';        	  // SMTP username (Логин почты, откуда посылается письмо)
    $mail->Password = 'PASSWORD_OF_YOUR_EMAIL';           // SMTP password (Пароль почты, откуда посылается письмо)
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('1@1.com');		  		//My e-mail (Почта, откуда посылается письмо - могут быть одинаковыми)
    $mail->addAddress('1@1.com');            // Add a recipient (Почта, куда посылается письмо  - могут быть одинаковыми)
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Заявка с сайта "Купончик"';
    $mail->Body = "Имя: $name <br> Телефон: $tel <br> E-mail: $e_mail <br>";
    $mail->AltBody = "Имя: $name \r\n Телефон: $tel \r\n E-mail: $e_mail \r\n";
    

    $mail->send();
    echo 'Message has been sent';
    $answer = '1';
} catch (Exception $e) {
    $answer = '0';
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>	
