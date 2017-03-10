<?php
	echo "<h1>Prueva evaluativa Práctica Unidad Formativa 1305</h1><br>";
	if ($_POST){
		echo "<h2>Datos recibidos del formulario<h2>";
		$nombre= $_POST[('author')];
		$email= $_POST[('email')];
		$telefono= $_POST[('phone')];
		$mensaje= $_POST[('text')];
		echo "<b>Nombre:</b> $nombre <br>";
		echo "<b>E-mail:</b> $email <br>";
		echo "<b>Teléfono:</b> $telefono <br>";
		echo "<hr>";
		echo "<b>Mensaje:</b> <br> $mensaje <br>";
	}
	else
	{
		echo "<h2>No se han recibido datos del formulario<h2>";
	}
?>