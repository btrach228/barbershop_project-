<?php 

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы

$name = $_POST['feedback-name'];
$tel = $_POST['feedback-name'];
$email = $_POST['feedback-name'];
$feedbackText = $_POST["feedback-text"];

 //add toket to varriable

$token = '1617105274:AAHBok94XpKnSJa7nE81dSMCka2X3PDmE00';

 //add chat id to varriable


$chat_id = '513924330';

//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
    'Имя пользователя: ' => $name,
  'Телефон: ' => $tel,
  'Email' => $email
);

//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };
  
  //Осуществляется отправка данных в переменной $sendToTelegram
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
  
  //Если сообщение отправлено, напишет "Thank you", если нет - "Error"
  if ($sendToTelegram) {
    echo "Thank you";
  } else {
    echo "Error";
  }

?>