<?php
	
	echo "<h1>Prueba Evaluativa Practica Unidad Formativa 1305 'Elaboración de plantillas y formularios'</h1>";

	if ($_POST) {
    	$author = $_POST[('author')];
    	$email = $_POST[('email')];
    	$phone = $_POST[('phone')];
    	$text = $_POST[('text')];

    	echo "Author: $author<br>";
    	echo "Email: $email<br>";
    	echo "Phone: $phone<br>";
    	echo "<hr>";
    	echo "Text:<br> $text<br>";
	
	} else {
    echo "Datos no enviados desde formulario<br>";
}


?>