const tabuleiro = document.querySelector('.tabuleiro');
const status = document.getElementById('status');
const reiniciarBtn = document.getElementById('reiniciar');

const cartasEmojis = ['🧶', '⚽', '📦', '🐭', '🦴', '🎾'];
let cartasArray = [...cartasEmojis, ...cartasEmojis]; // pares duplicados

let cartasViradas = [];
let bloqueado = false;
let paresEncontrados = 0;

function embaralharArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function criarTabuleiro() {
  tabuleiro.innerHTML = '';
  paresEncontrados = 0;
  status.textContent = 'Clique nas cartas para encontrar os pares!';
  cartasArray = embaralharArray(cartasArray);
  cartasArray.forEach((emoji, index) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.emoji = emoji;
    carta.dataset.index = index;
    carta.textContent = '';
    carta.addEventListener('click', virarCarta);
    tabuleiro.appendChild(carta);
  });
}

function virarCarta() {
  if (bloqueado) return;
  if (this.classList.contains('virada')) return;
  if (cartasViradas.length === 2) return;

  this.textContent = this.dataset.emoji;
  this.classList.add('virada');
  cartasViradas.push(this);

  if (cartasViradas.length === 2) {
    checarPar();
  }
}

function checarPar() {
  bloqueado = true;
  const [carta1, carta2] = cartasViradas;

  if (carta1.dataset.emoji === carta2.dataset.emoji) {
    paresEncontrados++;
    cartasViradas = [];
    bloqueado = false;

    if (paresEncontrados === cartasEmojis.length) {
      status.textContent = '🎉 Parabéns! Você encontrou todos os pares!';
    }
  } else {
    setTimeout(() => {
      carta1.textContent = '';
      carta2.textContent = '';
      carta1.classList.remove('virada');
      carta2.classList.remove('virada');
      cartasViradas = [];
      bloqueado = false;
    }, 1000);
  }
}

reiniciarBtn.addEventListener('click', criarTabuleiro);

criarTabuleiro();
