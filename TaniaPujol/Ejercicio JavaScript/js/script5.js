$(document).ready(function(){
  // Cargamos el jquery funciones para realizar nuestro js.
  // Su sintatxis es: $.getScript({url ubicado, function()[este parametro es opcional, ja que se ejecuta la funcion si se carga el js]})
  $.getScript("js/funciones.js", function (){
    console.log("cargado script de funciones")
  })
  $("#mensual").click(function (){
    var resulMensual = irpf($("#irpf").val());
    console.log(resulMensual);
    var nombre = $("#nombre").val();
    var btn =`<button type="reset" id="borrar" class="btn right"> borrar</button>`;
    var btn_s =`<button type="button" id="close" class="btn right small"> X</button>`
    var imprimir =`
      <div class="resul">
        ${btn_s}
        <p> Hola ${nombre} !!! <br>
            tu Irpf Mensual es : ${resulMensual} €
        </p>
        ${btn}
      </div>`;
    $(".resultado").append(imprimir);
  });
  $('#close').click(function() {
    // $(".resul").remove();
    alert('vas a borrar');
  });
  $("#anual").click(function (){
    var resulAnual = irpfAnual();
    console.log(resulAnual);
  })
// fin del jquery
});
