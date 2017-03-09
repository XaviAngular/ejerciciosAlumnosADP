$(document).ready(function() {
    var debug=true;
    $.ajax({
      url: '../php/getSelectCat.php',
      type: 'GET',
      dataType: 'json',
      success : function(result){
        console.log(result);
        var etiquetas ="";
        var values ="";
        var options ="";      
        //Recorrer el array de la query que manda el php
        $.each(result.query, function() {
            if (debug) console.log("Pintando");
            $.each(this, function(campo , valor) {
               if (campo=="id") values=valor;
               else etiquetas = valor;
               options += "<option value='"
                          +values
                          +"'>"
                          +etiquetas
                          +"</option>";              
            });           
        });
        if (debug) console.log(options);
        $("#categoria").html(options);
        $('select').material_select();       
      },
      error: function(result){
        alert("errorrrrrr!!!");
      }
    });

//Se hace llamada Ajax para enviar formulario nuevo plato
  $("#formPlato").submit(function(event){
      event.preventDefault();//Evita el refresh automático que se produce al enviar el form
      //esta es la forma de obtener datos del formulario y 
      //convertirlo en formato JSON
      var jsonData= JSON.stringify($("#formPlato").serializeArray());
      if (debug) console.log("Datos en Json:");
      if (debug) console.log(jsonData);
      $.ajax({
        url: '../php/recibePlato.php',
        type: 'POST',
        dataType: 'json',
        data: jsonData,
        success : function(result){
          console.log(result.sql);
          if (result.error===0){
            Materialize.toast('plato creado!', 4000);
        //borrar el contenido del form
          $('#formPlato')[0].reset();

          } 
   
          else {
          Materialize.toast ('Error al crear categoria?', 6000);
            $('#formPlato')[0].reset();
          }      
        },
        error: function(result){
          alert("errorrrrrr!!!");
        }
      })
      

    }); 

     });   