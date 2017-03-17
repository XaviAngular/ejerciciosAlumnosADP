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
      <p class="mas"> Hola ${nombre} !!! <br>
          tu Irpf Mensual es : ${resulMensual} €
      </p>`;
    $(".result").append(imprimir);
    $("#close").show();
  });

  $("#anual").click(function (){
    // var resulAnual, porCiento = irpfAnual();
    var resultado = irpfAnual();
    var resulAnual = resultado[0];
    var porCiento = resultado[1];
    console.log(resulAnual,porCiento);
    var nombre = $("#nombre").val();
    var imprimir =`
      <p class="mas"> Hola ${nombre} !!! <br>
          tu retencion ${porCiento}% es : ${resulAnual} €
      </p>`;
    $(".result").append(imprimir);
    $("#close").show();
  });
  // en esta funcion lo que realizamos es el borrado del ultimo parafo creado. para borrarlo todo solo se debe clicar tantas veces como parafos existan
  $('#close').click(function() {
    $(".result").children("p[class=mas]:last").remove();
  });
// fin del jquery
});
