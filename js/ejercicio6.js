function indicador(ladoA, ladoB) {
  if (ladoA > 0 && ladoB > 0) {
    const perimetro = 2 * (ladoA + ladoB);
    document.write(`El perimetro del rectangulo es de ${perimetro}`);
  } else alert("Los datos ingresados no son validos");
}
const primerLado = parseFloat(
  prompt("Ingrese el valor del lado de un rectangulo")
);
const segundoLado = parseFloat(prompt("Ingrese el valor del otro lado"));
indicador(primerLado, segundoLado);