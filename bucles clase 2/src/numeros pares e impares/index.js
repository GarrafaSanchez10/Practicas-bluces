let numero = parseInt(prompt("Ingrese numero entero positivo"));
if (numero <= 0) {
    console.log('el numero no es valido vuelva a ingresarlo')
    numero = parseInt(prompt('ingrese otro numero'))
}

for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
}
let a = 0;
while (a <= numero) {
    if (a % 2 !== 0) {
      console.log(a);
    }
    a++;
}
let sumaPares = 0
let s = 2
do {
    sumaPares += s
    s +=2
} while (s <= numero);
console.log("la suma de los numeros pares del 1 hasta "+ numero + " es: " + sumaPares);

