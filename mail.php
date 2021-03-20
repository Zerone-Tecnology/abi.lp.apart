<?php
$method = $_SERVER['REQUEST_METHOD'];
if ( $method === 'POST' ) {
	echo $method;
	$frm_name  = "Ремонт квартир Новая завяка с сайта";
	$recepient = "no-reply@abigroup.kz";
	$sitename  = "Ремонт квартир";
	$subject   = "Новая заявка с сайта \"$sitename\"";
	// $admin_email = "damir.dmr88@gmail.com";
	$admin_email = "damir.dmr88@gmail.com";

	$name = trim($_POST["name"]);
	$phone = trim($_POST["phone"]);

	$message = "
	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>ФИО</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
	</tr>
	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$phone</td>
	</tr>
	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Почта</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$email</td>
	</tr>
	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Консультация</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$expiryText</td>
	</tr>
	<tr>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Сумма</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$expiry руб.</td>
	</tr>
		";

	$message = "<table style='width: 100%;'>$message</table>";

	mail($admin_email, $subject, $message, "From: $frm_name <$recepient>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
} else {
	echo ":(";
}