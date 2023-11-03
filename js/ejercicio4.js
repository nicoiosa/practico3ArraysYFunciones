function indicador(numero) {
  if (Number.isInteger(numero)) {
    if (numero % 2 == 0) {
      document.write("<p>El numero ingresado es PAR</p>");
    } else document.write("<p>El numero ingresado es IMPAR</p>");
  } else document.write("No ingresaste un numero valido");
}
const numeroIngresado = parseFloat(
  prompt("Ingrese un numero")
);
indicador(numeroIngresado);