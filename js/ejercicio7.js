function indicador(numero) {
  if (numero >= 0) {
    document.write("<table><tbody>");
    for (i = 1; i < 11; i++) {
      const resultado = numero * i;
      document.write(`
      <tr>
      <th>${i}</th>
      <td>${resultado}</td>
      </tr>`);
    }
    document.write("</tbody></table>");
  } else alert("No ingresaste un numero valido")
}
indicador(parseInt(prompt("Ingrese un numero")));