<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
  $nombre = $_POST['author'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $text = $_POST['text'];
  echo 'Hola Sr. '. $nombre .' Gracias por su tiempo<br>
        sus email es: '.$email.'<br>
        su teléfono es: '.$phone.'<br>
        su comentario es: '.$text;
}else{
  echo'no hay POST';
}
?> 