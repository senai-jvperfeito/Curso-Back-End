function number(numero, minimo, maximo, inclusivo = false) {
  return inclusivo
    ? numero >= minimo && numero <= maximo
    : numero > minimo && numero < maximo;
}

console.log(number(30, 50, 100));
