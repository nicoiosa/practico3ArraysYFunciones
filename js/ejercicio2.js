const ciudades = [];
do {
  let ciudad = prompt("Ingrese el nombre de alguna ciudad");
  if (ciudad.length >= 1) ciudades.push(ciudad);
} while (confirm("¿Desea continuar ingresando ciudades?") == true);
console.log(ciudades);
document.write(
  `<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`
);
if (ciudades.length >= 1) {
  document.write("<ul>");
  document.write(`<li>Elemento en la 1ra posicion: ${ciudades[0]}</li>`);
  if (ciudades.length >= 3) {
    document.write(`<li>Elemento en la 3ra posicion: ${ciudades[2]}</li>`);
  }
  document.write(
    `<li>Elemento en la ultima posicion: ${ciudades[ciudades.length - 1]}</li>`
  );
  document.write("</ul>");
}
ciudades.push("Paris");
document.write("<ul>");
document.write(
  `<li>Elemento en la ultima posicion: ${ciudades[ciudades.length - 1]}</li>`
);
document.write("</ul>");
if (ciudades.length >= 2) {
  document.write("<ul>");
  document.write(`<li>Elemento en la 2da posicion: ${ciudades[1]}</li>`);
  document.write("</ul>");
}
ciudades.splice(1, 0, "Barcelona");
document.write("<p>Arreglo de ciudades</p>");
document.write("<ul>");
for (i = 0; i < ciudades.length; i++) {
  document.write(`<li>${ciudades[i]}</li>`);
}
document.write("</ul>");
