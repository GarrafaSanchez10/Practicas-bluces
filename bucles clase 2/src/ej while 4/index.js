let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

console.log(numeroAleatorio);

let numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10"));
8
while(numeroIngresado !== numeroAleatorio){
    numeroIngresado = parseInt(prompt("Ingrese otro"));
}
document.write("El numero es correcto")
