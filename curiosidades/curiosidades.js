const curiosidades = [
  [
    "Gatos dormem em média 16 horas por dia.",
    "Cada gato tem um miado único, como se fosse uma impressão digital.",
    "Gatos podem saltar até 6 vezes a sua altura."
  ],
  [
    "O ronronar pode ajudar na cura de ossos e músculos.",
    "Gatos enxergam melhor no escuro do que os humanos.",
    "Eles têm cerca de 30 dentes adultos."
  ],
  [
    "A menor raça de gato é o Singapura.",
    "Gatos suam apenas pelas almofadas das patas.",
    "Um grupo de gatos é chamado de 'clowder'."
  ]
];

let paginaAtual = 0;
const cardsContainer = document.getElementById("cards-container");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

function mostrarCards() {
  cardsContainer.innerHTML = "";
  curiosidades[paginaAtual].forEach(texto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = texto;
    cardsContainer.appendChild(card);
  });

  btnPrev.style.display = paginaAtual === 0 ? "none" : "inline-block";
  btnNext.style.display = paginaAtual === curiosidades.length - 1 ? "none" : "inline-block";
}

btnNext.addEventListener("click", () => {
  if (paginaAtual < curiosidades.length - 1) {
    paginaAtual++;
    mostrarCards();
  }
});

btnPrev.addEventListener("click", () => {
  if (paginaAtual > 0) {
    paginaAtual--;
    mostrarCards();
  }
});

// Inicializa
mostrarCards();
