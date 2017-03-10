<?php 
// setear el post
if ($_SERVER['REQUEST_METHOD'] === 'POST') { // verificamos que existe envio POST
		
	if ($query) {
		echo json_encode([
			"query" => $res,
			"error" => 0,
			"resultado" => "se a cargado"
		]);
	}else{
		echo json_encode([
			"query" => $query,
			"error" => 1,
			"resultado" => "no se a cargado"
		]);
	}
	}
	else{
		echo json_encode([
			"query" => $query,
			"error" => 0,
			"resultado" => "no hay"
		]);
}

?>