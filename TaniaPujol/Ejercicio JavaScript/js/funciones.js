function irpf(retencion,sueldo) {
  // 	Declaración de variable
  var irpf = retencion;
  irpf = (sueldo * irpf)/100;
  return irpf;
};
function irpfAnual() {
	var sueldo = prompt("Introduce tu sueldo anual");
	var irpfAnual;
	sueldo = parseInt(sueldo);
	switch (true) {
		case (sueldo>=0 && sueldo<= 12450) : 
			var PorCiento = 19;
			var irpfAnual = irpf(PorCiento, sueldo);
			break;
		case (sueldo>=124510 && sueldo<= 20200):
			var PorCiento = 24;
			var irpfAnual = irpf(PorCiento, sueldo);
			break;
		case (sueldo>=20201 && sueldo<= 35200):
			var PorCiento = 30;
			var irpfAnual = irpf(PorCiento, sueldo);
			break;
		case (sueldo>=35201 && sueldo<= 60000):
			var PorCiento = 37;
			var irpfAnual = irpf(PorCiento, sueldo);
			break;
		case (sueldo >= 60001):
			var PorCiento = 45;
			var irpfAnual = irpf(PorCiento, sueldo);
			break;
		default: 
			alert("Introduce un valor en positivo");
	}
	return [irpfAnual, PorCiento];
};
