var jogoJ = [];
var jogoA = [];
var jogoV = [];

function jogoAleatorio() {
  while (jogoA.length < 6) {
    var aleatorio = Math.ceil(Math.random() * 60);
    if (jogoA.includes(aleatorio)) {
      jogoA.pop();
    } else {
      jogoA.push(aleatorio);
    }
  }
  jogoJ.pop(jogoJ.length);
  var text = document.getElementById('jogoJogador');
  text.innerText = '';
  var textA = document.getElementById('jogoAleatorio');
  textA.innerText = 'Seu Jogo Aleatório = ' + jogoA;
}

function jogoJogador() {
  while (jogoJ.length < 6) {
    var numero = prompt('Escolha um Número de 1 a 60');
    if (jogoJ.includes(numero)) {
      jogoJ.pop();
    } else if (numero > 0 && numero <= 60) {
      jogoJ.push(numero);
      alert('Número Adicionado');
    } else {
      alert('Número Inválido');
    }
  }
  jogoA.pop(jogoA.length);
  var textA = document.getElementById('jogoAleatorio');
  textA.innerText = '';
  var text = document.getElementById('jogoJogador');
  text.innerText = 'Seu Jogo = ' + jogoJ;
}

function jogoVencedor() {
  if (jogoA.length === 6 || jogoJ.length === 6) {
    while (jogoV.length < 6) {
      var aleatorio = Math.ceil(Math.random() * 60);
      if (jogoV.includes(aleatorio)) {
        jogoV.pop();
      } else {
        jogoV.push(aleatorio);
      }
    }

    var text = document.getElementById('jogoVencedor');
    text.innerText = 'Jogo Vencedor = ' + jogoV;
  }
}
