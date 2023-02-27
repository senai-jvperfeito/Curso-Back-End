function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function aguarde() {
    for (let i = 1; i>0; i--) {
        alert(`Aguarde ${i} segundos...`);
        await sleep(i * 100);
    }
    alert('Obrigado! Volte Sempre!');
}


// Estoque de Chopp
let pilsen = 50
let ipa = 50

function calcPrecoChopp(litros)
{
    var preco = litros*30;
    return (preco) 
};

function bar(){
    alert("Seja Bem Vindo ao Bar!\nHoje temos Chopp Ipa e Pilsen,\nNos tamanhos P de 300ml e M de 500ml\nO P custando R$9 e o M R$15 ")

do {
    var copo = prompt("Qual o Copo que você quer?")
} while((copo != "P") && (copo != "M") && (copo != "p") && (copo != "m"))

switch (copo) {
    case "P": 
    case "p":
        litros = 0.3        
        break;
    case "M":
    case "m":
        litros = 40
        break;              
}
do {
    var chopp = prompt("Qual o tipo de chopp?\nPilsen ou Ipa?")
} while((chopp != "Pilsen") && (chopp != "Ipa"))

switch(chopp) {
    case "Pilsen":
        if(pilsen<litros){
            alert("Infelizmente não temos mais Chopp Pilsen estoque, volte novamente amanhã.")
            pilsen = pilsen + 50
            console.log("Reabastecendo Pilsen: "+pilsen)
            bar()
        } else {
        pilsen = pilsen - litros
        console.log("Estoque de Pilsen em Litros: "+pilsen)
        }
        break;  
    case "Ipa":
        if(ipa<litros){
            alert("Infelizmente não temos mais Chopp Ipa no estoque, volte novamente amanhã.")
            pilsen = pilsen + 50
            console.log("Reabastecendo Ipa: "+ipa)
            bar()
        } else {
            ipa = ipa - litros
            console.log("Estoque de Ipa em Litros: "+ipa)
        }
        break;
}

if(pilsen >= litros || ipa >= litros)
{
    alert("O Total foi de R$ " + calcPrecoChopp(litros));

do{
    var dinheiro = prompt("Insira o dinheiro: ");
} while(!/^[0-9]+$/.test(dinheiro))
var troco = calcPrecoChopp(litros) - dinheiro;

while(troco > 0)
{   
    do {
        var troco2 = prompt("Falta mais R$" +troco+ " para pagar")
    } while(!/^[0-9]+$/.test(troco2))
    troco -= troco2 
}

if(troco < 0)
{   
    var troco1 = troco * (-1)
    alert("Esse é o seu troco R$" +troco1)
}

alert("Obrigado, Já Vamos Abastecer seu Copo!")

aguarde()

}
// Corrigir, não está funcionando corretamente
/*else
{
    alert("Infelizmente não temos mais esse Chopp estocado, volte novamente amanhã.")
    pilsen = pilsen + 50
    console.log("Pilsen: "+pilsen)
    ipa = ipa + 50
    console.log("Ipa: "+ipa)
}*/}