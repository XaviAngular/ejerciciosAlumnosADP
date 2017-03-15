<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	echo " <h1> LLegan variable por Post </h1>";
	echo "<br>";
	echo "Autor : " . $_POST['author'];
	echo "<br>";
	echo "E-mail :". $_POST['email'];
	echo "<br>";
	echo "Phone : " . $_POST['phone'];
	echo "<br>";
	echo "Message : " . $_POST['text'];
}else{
	echo "
	<h1>
	Datos no enviados desde Formulario
	</h1> ";
}

?>