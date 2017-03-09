$(document).ready(function() {
		    //declarar la variable para depurar y no visualizar console.log
		    
		    $('select').material_select();
				$('#presupuesto').change(function() {
				$('#valorpresupuesto').val($(this).val());
				});
				$('input.auto_origen').autocomplete({
				    data: {
				      "Barcelona": null,
				      "Reus": null,
				      "Girona": null,
				      "Madrid": null,
				      "Santiago de compostela": null
				    },
				    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
				  });
				$('input.auto_destino').autocomplete({
				    data: {
				      "Hawai": null,
				      "Shangai": null,
				      "New York": null,
				      "Paris": null,
				      "Roma": null,
				      "Tokyo": null
				    },
				    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
				  });

		    var debug = true;
		    
		    //script básico de llamada de datos con ajax
		    $.ajax({
		    		url: 'http://www.travek.com/search', // archivo php del que se obtendrán los datos
		    		type: 'GET', // forma de recibir los datos
		    		dataType: 'json', // tipo de datos que se envían
		    		
		    		// funcion que se ejecuta cuando ha funcionado la llamada ajax correctamente
		    		success : function(result){
		    			
		    			
		    		},
		    		// funcion ejecutada si ajax tiene un error
		    		error : function (result) {
		    			
		    		}
		    		// el resultado de la función queda guardado en la variable result
		    	
		    	
		    	});
		    	

		    // script básico de envío de datos con ajax
		    $('#buscador').submit(function(event){
		    	//evitar el refresh automático que se ejecuta al enviar el formulario y no se recarga de nuevo
		    	event.preventDefault();
		    
		    	var jsonData = JSON.stringify($("#buscador").serializeArray());
		    	$.ajax({
		    		url: 'http://www.travek.com/search', // archivo php que tratara los datos
		    		type: 'POST', // forma de enviar los datos
		    		dataType: 'json', // tipo de datos que se envían
		    		data: jsonData, // datos enviados
		    		// funcion que se ejecuta cuando ha funcionado la llamada ajax correctamente
		    		success : function(result){
		    			
		    		},
		    		// funcion ejecutada si ajax tiene un error
		    		error : function (result) {
		    			
		    		}
		    		// el resultado de la función queda guardado en la variable result
		    	
		    	
		    	});
		    	
		    });	
		  });