<?php
echo "<h1>Hola, aquí llegará el form</h1>";
//Se comprueba que llegan datos por método POST
if ($_POST) {
	echo "LLegan variables por post:<br>";
	echo $_POST['name'];
	echo "<br>";
	echo $_POST['email'];
	echo "<br>";
	echo $_POST['phone'];
	echo "<br>";
	echo $_POST['message'];
	
	
}
else {
	echo "Datos no enviados desde formulario";
}
?>