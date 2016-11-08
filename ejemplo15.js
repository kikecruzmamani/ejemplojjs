//sentencia whiel - for 
function contadorA(cadena){
	var contA=0;//inicializacion
	var i=0;
	while(i<cadena.length){//permanencia
		 if(cadena[i].touppercase()=="A"){//accion
			contA++;

		}
		i++;//incremento
	}
	return contA;
}
var cad ="Anastacia"
console.log("la cantidad de letras a es:"+contadorA(cad));