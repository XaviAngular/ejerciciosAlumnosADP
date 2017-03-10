$(document).ready(function() {
	var debug = true;
    $('select').material_select();
    // accion dels submit aliminada por la propieda event.preventDefault()
    $('#form').submit(function(event) {
		event.preventDefault();

	    var jsonData = JSON.stringify($("#form").serializeArray());
	    if (debug) console.log("datos del json");
	    if (debug) console.log(jsonData);
	    // llamada a ajax
	    $.ajax({
	    	url: '../php/respuesta_ajax.php',
	    	type: 'POST',
	    	dataType: 'json',
	    	data: jsonData,
	    	success: function(result){
	    		if (debug) console.log(result.campos);
	    		if (result.error === 0) {
	    			
	    			Materialize.toast('se a cargado!!!', 100000);
	    			$('#form')[0].reset()
	    		}else{
	    			Materialize.toast('ha Fallado!!!', 100000);
	    		}
	    		
	    	},
	    	error: function(result){
	    		alert('errorororor');
	    	}
	    })	
    });
});