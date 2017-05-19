$(document).ready( function (){
    // Inicializamos la array y el objeto de la array
    var result = [];
    var resultObjet = {
        "Litres": null, 
        "Despesa": null
    }
    $('#calcular').click( function(){
        var preu = $('#preuLitre').val();
            preu = parseFloat(preu);
        
        var km = $('#kilometresRecorre').val();
            km = parseFloat(km);
        
        var consum = $('#consumo').val();
            consum = parseFloat(consum);
        
        if ((preu !=null)&&(km !=null)&&(consum != null)){
             var calculLitres = (km * consum)/100;
        var calculConsum = calculLitres * preu;
        $("#resultat").append(`
            <div style="border-bottom: 1px solid black;">
                <p>Litres = ${calculLitres} L</p>
                <p>Despesa = ${calculConsum} €</p>
            </div>
        `);
        }
       
        resultObjet = {
            "Litres": calculLitres,
            "Despesa": calculConsum
        }
        result.push(resultObjet);
        console.log("historial de busquedas: ");
        console.log(result);
        // resetar el formulario
        $('#preuLitre').val("");
        $('#kilometresRecorre').val("");
        $('#consumo').val("")
    })
})