function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function aguarde() {
  for (let i = 1; i > 0; i--) {
    alert(`Aguarde ${i} segundos...`);
    await sleep(i * 100);
  }
  alert('Obrigado! Volte Sempre!');
}

function somar(total, number) {
  return total + number;
}
var bebidaPilsenM = 0;
var bebidaPilsenP = 0;
var bebidaIpaM = 0;
var bebidaIpaP = 0;
var novatabelaPilsenM = document.createElement('td');
var novatabelaPilsenP = document.createElement('td');
var novatabelaIpaM = document.createElement('td');
var novatabelaIpaP = document.createElement('td');
var pedido = [0];

// Estoque de Chopp
let pilsen = 50;
let ipa = 50;

function calcPrecoChopp(litros) {
  var preco = litros * 30;
  return preco;
}

let comanda = button => {
  let element = document.getElementById('tabela');
  let hidden = element.getAttribute('hidden');
  let comandaid = document.getElementById('buttonComanda');

  if (hidden) {
    element.removeAttribute('hidden');
    comandaid.innerText = 'Esconder Comanda';
  } else {
    element.setAttribute('hidden', 'hidden');
    comandaid.innerText = 'Ver Comanda';
  }
};

function bar() {
  alert(
    'Seja Bem Vindo ao Bar!\nHoje temos Chopp Ipa e Pilsen,\nNos tamanhos P de 300ml e M de 500ml\nO P custando R$9 e o M R$15 '
  );

  do {
    var copo = prompt('Qual o Copo que você quer?');
  } while (copo != 'P' && copo != 'M' && copo != 'p' && copo != 'm');

  switch (copo) {
    case 'P':
    case 'p':
      litros = 0.3;
      break;
    case 'M':
    case 'm':
      litros = 0.5;
      break;
  }
  do {
    var chopp = prompt('Qual o tipo de chopp?\nPilsen ou Ipa?');
  } while (
    chopp != 'Pilsen' &&
    chopp != 'pilsen' &&
    chopp != 'ipa' &&
    chopp != 'Ipa'
  );

  switch (chopp) {
    case 'Pilsen':
    case 'pilsen':
      if (pilsen < litros) {
        alert(
          'Infelizmente não temos mais Chopp Pilsen estoque, volte novamente amanhã.'
        );
        pilsen = pilsen + 50;
        console.log('Reabastecendo Pilsen: ' + pilsen);
        bar();
      } else {
        pilsen = pilsen - litros;
        console.log('Estoque de Pilsen em Litros: ' + pilsen);
      }
      break;
    case 'Ipa':
    case 'ipa':
      if (ipa < litros) {
        alert(
          'Infelizmente não temos mais Chopp Ipa no estoque, volte novamente amanhã.'
        );
        pilsen = pilsen + 50;
        console.log('Reabastecendo Ipa: ' + ipa);
        bar();
      } else {
        ipa = ipa - litros;
        console.log('Estoque de Ipa em Litros: ' + ipa);
      }
      break;
  }

  var adicionar = pedido.push(calcPrecoChopp(litros));
  console.log('Preço Total: ' + pedido.reduce(somar, 0));

  alert('Obrigado, Já Vamos Abastecer seu Copo!');

  aguarde();

  switch (true) {
    case (chopp === 'Pilsen' || chopp === 'pilsen') &&
      (copo === 'M' || copo === 'm'):
      bebidaPilsenM += 1;
      var PilsenM = document.getElementById('PilsenM');
      var tdPilsenM = PilsenM.appendChild(novatabelaPilsenM);
      tdPilsenM.innerHTML = bebidaPilsenM;
      break;
    case (chopp === 'Pilsen' || chopp === 'pilsen') &&
      (copo === 'P' || copo === 'p'):
      bebidaPilsenP += 1;
      var PilsenP = document.getElementById('PilsenP');
      var tdPilsenP = PilsenP.appendChild(novatabelaPilsenP);
      tdPilsenP.innerHTML = bebidaPilsenP;
      break;
    case (chopp === 'Ipa' || chopp === 'ipa') && (copo === 'M' || copo === 'm'):
      bebidaIpaM += 1;
      var IpaM = document.getElementById('IpaM');
      var tdIpaM = IpaM.appendChild(novatabelaIpaM);
      tdIpaM.innerHTML = bebidaIpaM;
      break;
    case (chopp === 'Ipa' || chopp === 'ipa') && (copo === 'P' || copo === 'p'):
      bebidaIpaP += 1;
      var IpaP = document.getElementById('IpaP');
      var tdIpaP = IpaP.appendChild(novatabelaIpaP);
      tdIpaP.innerHTML = bebidaIpaP;
      break;
  }

  var totalId = document.getElementById('contatotal');
  totalId.innerHTML = 'R$ ' + pedido.reduce(somar, 0);
}

function pagar() {
  if (pedido.reduce(somar, 0) > 0) {
    alert('O Total foi de R$ ' + pedido.reduce(somar, 0));

    do {
      var dinheiro = prompt('Insira o dinheiro: ');
    } while (!/^[0-9]+$/.test(dinheiro));
    var troco = pedido.reduce(somar, 0) - dinheiro;

    while (troco > 0) {
      do {
        var troco2 = prompt('Falta mais R$' + troco + ' para pagar');
      } while (!/^[0-9]+$/.test(troco2));
      troco -= troco2;
    }

    if (troco < 0) {
      var troco1 = troco * -1;
      alert('Esse é o seu troco R$' + troco1);
    }
    let remover = pedido.splice(0, pedido.length);
    alert('Obrigado! Volte Sempre!');
  }

  bebidaPilsenM = 0;
  var PilsenM = document.getElementById('PilsenM');
  var tdPilsenM = PilsenM.appendChild(novatabelaPilsenM);
  tdPilsenM.innerHTML = '';
  bebidaPilsenP = 0;
  var PilsenP = document.getElementById('PilsenP');
  var tdPilsenP = PilsenP.appendChild(novatabelaPilsenP);
  tdPilsenP.innerHTML = '';
  bebidaIpaM = 0;
  var IpaM = document.getElementById('IpaM');
  var tdIpaM = IpaM.appendChild(novatabelaIpaM);
  tdIpaM.innerHTML = '';
  bebidaIpaP = 0;
  var IpaP = document.getElementById('IpaP');
  var tdIpaP = IpaP.appendChild(novatabelaIpaP);
  tdIpaP.innerHTML = '';
  var totalId = document.getElementById('contatotal');
  totalId.innerHTML = '';
}
