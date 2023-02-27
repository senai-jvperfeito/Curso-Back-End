function calcPrecoGasolina(litros){ var preco = litros*5; return (preco) };
alert("Gasolina em Promoção! Apenas R$5 por Litro!");
var valor = prompt("Digite Quantos Litros de Gasolina Você Precisa: "); 
alert("R$ " + calcPrecoGasolina(valor));