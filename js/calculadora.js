var memoria = "";
var pantalla = "0";
var operacion = "";

jQuery(document).ready(function() {
	var valor;
	$("#pantalla").val(pantalla);
	$(".botonnum").click(function(){
		valor = $(this).val();
		acumular(valor);
	})

	$(".botonsim").click(function(){
		operacion = $(this).val();
		memoria = $("#pantalla").val();
		$("#pantalla").val("0");
	})

	$(".botonigual").click(function(){
		var valor = $("#pantalla").val()
		var resultado;
		if(operacion == "+"){
			resultado = sumar(memoria,valor);
			$("#pantalla").val(resultado);
		}else if(operacion == "-"){
			resultado = restar(memoria, valor);
			$("#pantalla").val(resultado);
		}else if(operacion == "x"){
			resultado = multiplicar(memoria, valor);
			$("#pantalla").val(resultado);
		}else if(operacion == "/"){
			resultado = dividir(memoria, valor);
			$("#pantalla").val(resultado);
		}
	});

	function sumar(operando1, operando2){
		var suma;
		operando1 = parseFloat(operando1);
		operando2 = parseFloat(operando2);
		suma = operando1 + operando2;
		return suma.toString();
	}

	function restar(operando1, operando2){
		var resta;
		operando1 = parseFloat(operando1);
		operando2 = parseFloat(operando2);
		resta = operando1 - operando2;
		return resta.toString();
	}

	function dividir(operando1, operando2){
		var cociente;
		operando1 = parseFloat(operando1);
		operando2 = parseFloat(operando2);
		cociente = operando1 / operando2;
		return cociente.toString();
	}

	function multiplicar(operando1, operando2){
		var producto;
		operando1 = parseFloat(operando1);
		operando2 = parseFloat(operando2);
		producto = operando1 * operando2;
		return producto.toString();
	}

	function acumular(numero){
		if(pantalla != "0"){
			$("#pantalla").val($("#pantalla").val() + numero);
		}else{
			pantalla = numero;
			$("#pantalla").val(pantalla);
		}
	}
});