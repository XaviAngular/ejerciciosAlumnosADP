<?php
echo "<h1>Hola, aquí llegará el form</h1>";

//Se comprueba que llegan datos por método POST
if($_POST){
   echo "Llegan variables por post:<br>";
   echo $_POST['author'];
   echo"<br>";
   echo $_POST['email'];
   echo"<br>";   
   echo $_POST['phone'];
   echo"<br>"; 
   echo $_POST['text'];
   echo"<br>"; 
   $nombre=$_POST['author'];
   $email=$_POST['email'];
   $mensaje=$_POST['phone'];
   $mensaje=$_POST['text'];    
	   
		   echo"Se ha enviado correctamente la información";
	   }

  else {
   echo "No llegan variables por post:";

  }   