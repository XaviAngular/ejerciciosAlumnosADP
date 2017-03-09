$(document).ready(function() {
	//declarar la variable para depurar y no visualizar console.log
	var debug = true;
	$.ajax ({
	            url: 'http://www.travek.com/search',
	            type: 'GET',
	            dataType: 'json',
	            success: function(result){
	            	
	            },
	            error: function(result){
	                
	            }
	});

	$('#buscarviaje').submit(function(event){
        
        event.preventDefault();
        // Imprimir los datos en JSON
        var jsonData = JSON.stringify($("#buscarviaje").serializeArray());
        
        $.ajax({
            url: 'http://www.travek.com/search',
            type: 'POST',
            dataType: 'json',
            data: jsonData,
            
            success: function(result){
            },
            error: function(result){
            }
        });
        

    });
});