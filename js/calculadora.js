var memoria = "";
var pantalla = "0";
var operacion = "";
var signo = false;

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
		pantalla = "0";
		$("#pantalla").val(pantalla);
	})

	$(document).keypress(function() {
		valor = $(this).val();
		acumular(valor);
	})

	$(".botonc").click(function(){
		memoria = "";
		pantalla = "0";
		$("#pantalla").val(pantalla);
		operacion = "";
		signo = false;
	})

	$(".botonsig").click(function(){
		if(signo == true){
		var digito = $("#pantalla").val().substring(1, $("#pantalla").val().length);
         $("#pantalla").val(digito);
         signo = false;
		}else{
		var digito = "-" + $("#pantalla").val();
         $("#pantalla").val(digito);
         signo = true;
		}
	})

	$(".botonigual").click(function(){
		var valor = $("#pantalla").val()
		var resultado;
		if(operacion == "+"){
			resultado = sumar(memoria,valor);
			$("#pantalla").val(resultado);
			pantalla = "0";
		}else if(operacion == "-"){
			resultado = restar(memoria, valor);
			$("#pantalla").val(resultado);
			pantalla = "0";
		}else if(operacion == "x"){
			resultado = multiplicar(memoria, valor);
			$("#pantalla").val(resultado);
			pantalla = "0";
		}else if(operacion == "/"){
			resultado = dividir(memoria, valor);
			$("#pantalla").val(resultado);
			pantalla = "0";
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