let intentos = 1;
let numero = parseInt(prompt("Ingrese un numero del 1 al 10"));

do{
	numero = parseInt(prompt("Ingrese otro llevas " + intentos + " intentos"));
	intentos++;

}while(numero !== 8)
document.write("Felicitaciones acertaste el numero");