let suma = 0;
let num;

do{
	num = parseInt(prompt("Ingrese numeros para sumar, confirmar suma con 0"));
	suma += num;
}while(num !== 0);
console.log("la suma es de: " + suma);