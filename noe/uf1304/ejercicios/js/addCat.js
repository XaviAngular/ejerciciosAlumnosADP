$(document).ready(function() {
    var debug=false;
    $('select').material_select();
    $("#formCat").submit(function(event){
      event.preventDefault();//Evita el refresh automático que se produce al enviar el form
      //esta es la forma de obtener datos del formulario y 
      //convertirlo en formato JSON
      var jsonData= JSON.stringify($("#formCat").serializeArray());
      if (debug) console.log("Datos en Json:");
      if (debug) console.log(jsonData);
      $.ajax({
        url: '../php/recibecat.php',
        type: 'POST',
        dataType: 'json',
        data: jsonData,
        success : function(result){
          console.log(result.sql);
          if (result.error===0){
            Materialize.toast('categoria creada!', 4000);
        //borrar el contenido del form
          $('#formCat')[0].reset();

          } 
   
          else {
          Materialize.toast ('Error al crear categoria?', 6000);
            $('#formCat')[0].reset();
          }      
        },
        error: function(result){
          alert("errorrrrrr!!!");
        }
      })
      

    });    
});     