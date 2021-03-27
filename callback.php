<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

<?php

require __DIR__ . '/vendor/autoload.php';
// include_once __DIR__ . '/unsorted/accept.php';

if(isset($_POST['phone'])) {

  try {
    
      // Создание клиента
      $subdomain = 'abigroup';            // Поддомен в амо срм
      $login     = 'a.altynbekova@abigroup.kz';            // Логин в амо срм
      $apikey    = 'b6b5fb95cfec380ac84c0f49d4516592dcc373ef';            // api ключ


      $amo = new \AmoCRM\Client($subdomain, $login, $apikey);

        // создаем лида
        $lead = $amo->lead;
        $lead['name'] = $_POST['product_name'];


        $id = $lead->apiAdd();

      // Получение экземпляра модели для работы с контактами
      $contact = $amo->contact;

      // Заполнение полей модели
      $contact['name'] = isset($_POST['name']) ? $_POST['name'] : 'Не указано';
      $contact['linked_leads_id'] = [(int)$id];

        $contact->addCustomField(304033, [
            [$_POST['email'], 'PRIV'],
        ]);



      // Добавление нового контакта и получение его ID
      $id = $contact->apiAdd();


  } catch (\AmoCRM\Exception $e) {
      printf('Error (%d): %s' . PHP_EOL, $e->getCode(), $e->getMessage());
  }

}

/*$to = "assel.kashtaeva@gmail.com";*/
$to = "damir.dmr88@gmail.com";
$subject = "Поступила заявка с сайта Ремонт квартир"; 
$message = "Клиент оставил заявку на сайте Ремонт квартир \r\n";
$message .= 'Телефон: '.$_POST['phone']."\n";
$message .= 'Имя: '.$_POST['name']."\n";
$message .= 'E-mail: '.$_POST['email']."\n";
$message .= 'IP: '.$_SERVER['REMOTE_ADDR']."\n";

$headers  = "Content-type: text/html; charset=UTF-8 \n"; 
$headers .= 'From: <remont@abigroup.kz>';
mail($to, $subject, $message, $headers);

?>


    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Ваша заявка успешно отправлена</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'IBM Plex Sans', sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 20px;
            padding: 20px;
        }
    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="content">
        <div class="title">
            <br><span style="font-size:33px;font-weight:500;">Спасибо!</span><br><br>
            Ваша заявка успешно отправлена.<br>

            <?php if(isset($_SERVER['HTTP_REFERER']) && $_SERVER['HTTP_REFERER']) { ?>
                <br><br><a href="<?php echo $_SERVER['HTTP_REFERER']; ?>" style="text-decoration: none; border-bottom: 1px dotted">Вернуться назад</a>
             <?php } ?>
        </div>
    </div>
</div>

</body>
</html>
