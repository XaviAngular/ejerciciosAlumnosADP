<?php
if ($_POST) {
	$nombre = $_POST['author'];
	$email = $_POST['email'];
	$mensaje = $_POST['phone'];
	$mensaje = $_POST['text'];	

	echo "Llegan variables por post:<br>";
	echo $_POST['author'];
	echo "<br>";
	echo $_POST['email'];
	echo "<br>";
	echo $_POST['phone'];
	echo "<br>";
	echo $_POST['text'];
}
else {
	echo "No llega nada por post";
}
?>