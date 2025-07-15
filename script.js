const gato = document.getElementById('gato');
let posX = 0;
let direcao = 1;
const velocidade = 2;

function andar() {
  posX += velocidade * direcao;
  gato.style.left = posX + 'px';

  // Espelha o gato ao mudar de direção
  gato.style.transform = direcao === -1 ? 'scaleX(-1)' : 'scaleX(1)';

  // Muda direção ao bater na borda
  if (posX + gato.offsetWidth >= window.innerWidth || posX <= 0) {
    direcao *= -1;
  }

  requestAnimationFrame(andar);
}

andar();
