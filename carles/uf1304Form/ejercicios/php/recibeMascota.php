<?php
if(isset($_POST)){
    $nombre = $_POST['nombre'];
    $eda = $_POST['edad'];
    $tipo = $_POST['tipo'];
    $chip = $_POST['chip'];
    // $castrado = $_POST['castrado'];
    if(isset($_POST['castrado'])){
        $cas = 'No castrado';
    }else{
        $cas = 'Castrado';
    }
    echo '<h2>Grácias por su colaboración</h2>
          <p>El nombre del mascota es: '.$nombre.'</p>
          <p>La edad del mascota es: '.$eda.'</p>
          <p>El tipo de mascota es: '.$tipo.'</p>
          <p>El mascota esta: '.$cas.'</p>';
}else{
    echo"Error en el envio de datos";
}


?>