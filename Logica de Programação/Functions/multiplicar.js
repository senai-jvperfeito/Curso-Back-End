function multiplicar(a, b) {
  var soma = 0;
  var num = 0;
  while (num < a) {
    soma = soma + b;
    num++;
  }

  return soma;
}
console.log(multiplicar(2, 2));
