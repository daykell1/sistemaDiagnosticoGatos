// caminhos das imagens (coloque seus arquivos na pasta /img/)
const IMG = {
  feliz:  "img/gato-feliz.png",
  neutro: "img/gato-neutro.png",
  triste: "img/gato-triste.png",
};

const img = document.getElementById("gatinho");
const statusTxt = document.getElementById("status");

const barFome = document.getElementById("barFome");
const barCarinho = document.getElementById("barCarinho");
const barDiversao = document.getElementById("barDiversao");

const btnAlimentar = document.getElementById("btnAlimentar");
const btnCarinho = document.getElementById("btnCarinho");
const btnBrincar = document.getElementById("btnBrincar");

// estados (0–100)
let fome = 60;      // quanto MAIOR, melhor alimentado
let carinho = 50;   // quanto MAIOR, mais carinho
let diversao = 40;  // quanto MAIOR, mais diversão

function clamp(v, min=0, max=100){ return Math.max(min, Math.min(max, v)); }

function renderBars(){
  barFome.style.width = `${fome}%`;
  barCarinho.style.width = `${carinho}%`;
  barDiversao.style.width = `${diversao}%`;
}

function humorAtual(){
  // regras simples:
  // se qualquer barra < 25 => triste
  // se todas > 60 => feliz
  // caso contrário => neutro
  if (fome < 25 || carinho < 25 || diversao < 25) return "triste";
  if (fome > 60 && carinho > 60 && diversao > 60) return "feliz";
  return "neutro";
}

function renderHumor(){
  const h = humorAtual();
  img.src = IMG[h];
  if (h === "feliz") statusTxt.textContent = "O gatinho está feliz! 😺";
  else if (h === "triste") statusTxt.textContent = "O gatinho está triste... 😿";
  else statusTxt.textContent = "O gatinho está neutro 😐";
}

function tickDecaimento(){
  // a cada 'tick', as barras descem um pouquinho
  fome = clamp(fome - 0.4);
  carinho = clamp(carinho - 0.25);
  diversao = clamp(diversao - 0.35);
  renderBars();
  renderHumor();
}

btnAlimentar.addEventListener("click", ()=>{
  fome = clamp(fome + 18);
  diversao = clamp(diversao - 4); // comer demais entedia
  renderBars(); renderHumor();
});

btnCarinho.addEventListener("click", ()=>{
  carinho = clamp(carinho + 18);
  renderBars(); renderHumor();
});

btnBrincar.addEventListener("click", ()=>{
  diversao = clamp(diversao + 18);
  fome = clamp(fome - 6); // brincar dá fome
  renderBars(); renderHumor();
});

// loop do jogo
renderBars();
renderHumor();
setInterval(tickDecaimento, 800);
