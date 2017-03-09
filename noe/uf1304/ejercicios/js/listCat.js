$(document).ready(function() {
    var debug=true;
    $.ajax({
      url: '../php/getselectCat.php',
      type: 'GET',
      dataType: 'json',
      success : function(result){
        console.log(result);
        var options="";
        //Recorrer el array de la query que manda el php
        $.each(result.query, function() {
            if (debug) console.log("Pintando");
            var options="";
            $.each(this, function(campo , valor) {
             options += "<options>"+valor+"</options>";    
            }); 

            
         });
        if (debug) console.log(options);
        //$("# categoria").html(options);
        $("#categoria").html(options);
         $('select').material_select();       
      },
      error: function(result){
        alert("errorrrrrr!!!");
      }
    });    
});     