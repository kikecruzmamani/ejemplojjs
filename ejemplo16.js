//sentencia for 
function contadorA(cadena,letra){
	for(var i=0, contA=0;i<cadena.length;i++){//permanente
		 if(cadena[i]===letra){//accion
			contA++;
		}
	}
	return contA;
}
var cad ="Romero";
var letra="m";
console.log("la cantidad de letras" + letra + "es: "+contadorA(cad,letra));