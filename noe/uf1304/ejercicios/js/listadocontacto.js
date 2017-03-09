$(document).ready(function() {
    var debug=true;
    $.ajax({
      url: '../php/getListForm.php',
      type: 'GET',
      dataType: 'json',
      success : function(result){
        console.log(result); 
        var tbl_body ="";
        //Recorrer el array que manda el php
        $.each (result.query, function(){
          if (debug) console.log("Pintando");
          var tbl_row ="";
          $.each(this,function function (R ,V) {
            tbl_body += "<tr>" +tbl_row+"</tr>";
          })
          
        
        });       
      },
      error: function(result){
        alert("errorrrrrr!!!");
      }
    });    
});     