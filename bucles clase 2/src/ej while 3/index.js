
let texto = prompt("Ingrese un texto");
let indice = 0;

while (indice < texto.length) {
  let caracter = texto[indice];
  
  if (caracter === ".") {
    break; // Detener el bucle cuando se encuentra un punto
  }
  
  document.write(caracter+"<br>");
  indice++;
}