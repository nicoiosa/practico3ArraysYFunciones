const apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (i = 0; i < 50; i++) {
  let primerDado = Math.floor(Math.random() * (7 - 1) + 1);
  let segundoDado = Math.floor(Math.random() * (7 - 1) + 1);
  let suma = primerDado + segundoDado;
  let posicion = suma - 2;
  apariciones.splice(posicion, 1, apariciones[posicion] + 1);
}
document.write(`
  <table>
  <tbody>
  <thead>
  <tr>
  <th>Suma🎲🎲</th>
  <th>Apariciones</th>
  </tr>
  </thead>
`);
for (i = 0; i < 11; i++) {
  document.write(`
  <tr>
  <th>${i + 2}</th>
  <td>${apariciones[i]}</td>
  </tr>`);
}
document.write(`
  </table>
  </tbody>`);