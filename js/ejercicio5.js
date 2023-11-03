function indicador(texto) {
  if (texto > 0) { alert("No ingresaste un texto valido")
  } else {
    if (texto == texto.toLowerCase()) {
      document.write("El texto esta formado solo por MINUSCULAS");
    } else if (texto == texto.toUpperCase()) {
      document.write("El texto esta formado solo por MAYUSCULAS");
    } else {
      document.write("El texto esta formado por MAYUSCULAS y MINUSCULAS");
    }
  }
}
indicador(prompt("Ingrese una frase"));