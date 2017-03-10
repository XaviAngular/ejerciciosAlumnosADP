<?php 
// setear el post
if ($_SERVER['REQUEST_METHOD'] === 'POST') { // verificamos que existe envio POST
	$request = file_get_contents('php://input'); //datos enviados por el formulario
	$datos = json_decode($request, true); //recoge los datos del formulario
	$valores ="'"; //variable $valores
	$campos=""; //variable $campos
	foreach ($datos as $key => $value) {
		$valores .= $value['value']."','"; //la variable valor recoge los dato value del formulario
		$campos .= $value['name'].','; // la variable $campo recoge los datos name del formulario

	};
	$campos = substr($campos, 0, -1);
	$valores = substr($valores, 0, -2);
	$sql = "INSERT INTO enterprise ($campos) VALUES ($valores)";
	$conexion = new mysqli('localhost', 'root', '', 'empresa');
	if ($conexion) {
		$query = $conexion->query($sql);
	}else{
		$conexion->close();
	}
	if ($query) {
		echo json_encode([
			"campos" => $campos,
			"error" => 0,
			"valores" => $valores,
			"sql" => $sql,
			"resultado" => "se a gravado"
		]);
	}else{
		echo json_encode([
				"campos" => $campos,
				"error" => 1,
				"valores" => $valores,
				"resultado" => 'no gravado'
			]);
	}
	}
	else{
		echo json_encode([
				"campos" => 'ko',
				"error" => '1',
				"valores" => 'no hay'
			]);
}

?>