$(document).ready(function(){
  // Cargamos el jquery funciones para realizar nuestro js.
  // Su sintatxis es: $.getScript({url ubicado, function()[este parametro es opcional, ja que se ejecuta la funcion si se carga el js]})
  $.getScript("js/funciones.js", function (){
    console.log("cargado script de funciones")
  })
  $("#mensual").click(function (){
    var resulMensual = irpf($("#irpf").val(),$("#sueldo").val());
    console.log(resulMensual);
    var nombre = $("#nombre").val();
    var imprimir =`
      <div class="resul">
        <p> Hola ${nombre} !!! <br>
            tu Irpf Mensual es : ${resulMensual} €
        </p>
      </div>`;
    $(".resultado").append(imprimir);
    $("#close").show();
    $('#close').click(function() {
      $(".resul").remove();
    });
  });
  
  $("#anual").click(function (){
    // var resulAnual, porCiento = irpfAnual();
    var resultado = irpfAnual();
    var resulAnual = resultado[0];
    var porCiento = resultado[1];
    console.log(resulAnual,porCiento);
    var nombre = $("#nombre").val();
    var imprimir =`
      <ul class="resul">
        
      </ul>`;
      var lista = document.createElement('ul');
    var item = document.createElement('li');
    lista.appendChild(item);
    $(".resultado").appendChild(imprimir);
    $("#close").show();
    $('#close').click(function() {
      $(".resul").remove();
    });
  })
// fin del jquery
});
