function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    for (let i = litros; i>0; i--) {
        alert(`Aguarde ${i} segundos...`);
        await sleep(i * 100);
    }
    alert('Obrigado! Volte Sempre!');
}


function calcPrecoGasolina(litros)
{
    var preco = litros*5;
    return (preco) 
};

var bomba = 1000

alert("Gasolina em Promoção! Apenas R$5 por Litro!");

do{
    var litros = prompt("Digite Quantos Litros de Gasolina Você Precisa: "); 
} while(litros <= 0 || litros == "");

if(bomba >= litros)
{
    alert("O Total foi de R$ " + calcPrecoGasolina(litros));
var dinheiro = prompt("Insira o dinheiro: ");
var troco = calcPrecoGasolina(litros) - dinheiro;

while(troco > 0)
{
    var troco2 = prompt("Falta mais R$" +troco+ " para pagar")
    troco -= troco2 
}

if(troco < 0)
{   
    var troco1 = troco * (-1)
    alert("Esse é o seu troco R$" +troco1)
}

alert("Obrigado, Já Vamos Abastecer seu Veículo!")

demo()

}
else
{
    alert("Infelizmente não temos essa quantidade de Gasolina estocada, volte novamente amanhã.")
}



