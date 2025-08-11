const areaJogo = document.getElementById('area-jogo');
const pontuacaoEl = document.getElementById('pontuacao');
const btnReiniciar = document.getElementById('btn-reiniciar');

const comidas = [
  { emoji: '🐟', nome: 'Peixe', boa: true },
  { emoji: '🥫', nome: 'Ração úmida', boa: true },
  { emoji: '🍗', nome: 'Petisco natural', boa: true },
  { emoji: '🍫', nome: 'Chocolate', boa: false },
  { emoji: '🧄', nome: 'Alho', boa: false },
  { emoji: '🥛', nome: 'Leite adulto', boa: false },
  { emoji: '🍖', nome: 'Ossos cozidos', boa: false },
  { emoji: '💧', nome: 'Água fresca', boa: true },
];

let pontuacao = 0;

function criarItens() {
  areaJogo.innerHTML = '';
  const comidasEmbaralhadas = comidas.sort(() => Math.random() - 0.5);

  comidasEmbaralhadas.forEach((comida, i) => {
    const div = document.createElement('div');
    div.classList.add('item-comida');
    div.textContent = comida.emoji;
    div.title = comida.nome;
    div.dataset.boa = comida.boa;
    div.addEventListener('click', clicarComida);
    areaJogo.appendChild(div);
  });
  atualizarPontuacao(0);
}

function clicarComida() {
  const boa = this.dataset.boa === 'true';

  if (boa) {
    pontuacao++;
    alert('Boa! Você deu comida saudável para seu gatinho! 🐱💚');
  } else {
    pontuacao--;
    alert('Ops! Essa comida pode fazer mal. 😿');
  }

  atualizarPontuacao(pontuacao);

  if (pontuacao >= 6) {
    setTimeout(() => alert('🎉 Parabéns! Seu gatinho está bem alimentado!'), 100);
  }
}

function atualizarPontuacao(pontos) {
  pontuacaoEl.textContent = `Pontuação: ${pontos}`;
}

btnReiniciar.addEventListener('click', criarItens);

criarItens();
