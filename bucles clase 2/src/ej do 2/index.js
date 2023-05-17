let name;

do{
	name = prompt("Ingrese su nombre")

}while(name.length < 3)

document.write("Nombre correcto:" + name)