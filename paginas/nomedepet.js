const nomes = [
    "Mingau",
    "Simba",
    "Luna",
    "Garfield",
    "Felix",
    "Nina",
    "Tom",
    "Bolinha",
    "Chloe",
    "Tigrão",
    "Milo",
    "Sasha",
    "Oliver",
    "Mimi",
    "Loki"
];

const botao = document.getElementById('sortear-btn');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
    const indice = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indice];
    resultado.textContent = `Nome sorteado: ${nomeSorteado}! 🐱`;
});
