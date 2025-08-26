document.getElementById("botao-filtrar").addEventListener("click", () => {
  const sexo = document.getElementById("filtro-sexo").value;
  const idade = document.getElementById("filtro-idade").value;
  const nome = document.getElementById("busca-nome").value.toLowerCase();

  const cards = document.querySelectorAll(".gato-card");

  cards.forEach(card => {
    const cardSexo = card.getAttribute("data-sexo");
    const cardIdade = card.getAttribute("data-idade");
    const cardNome = card.getAttribute("data-nome").toLowerCase();

    let mostrar = true;

    if (sexo && cardSexo !== sexo) mostrar = false;
    if (idade && cardIdade !== idade) mostrar = false;
    if (nome && !cardNome.includes(nome)) mostrar = false;

    card.style.display = mostrar ? "block" : "none";
  });
});

// --- FILTRO DE GATOS ---
document.getElementById("botao-filtrar").addEventListener("click", () => {
  const sexo = document.getElementById("filtro-sexo").value;
  const idade = document.getElementById("filtro-idade").value;
  const nome = document.getElementById("busca-nome").value.toLowerCase();

  const cards = document.querySelectorAll(".gato-card");

  cards.forEach(card => {
    const cardSexo = card.getAttribute("data-sexo");
    const cardIdade = card.getAttribute("data-idade");
    const cardNome = card.getAttribute("data-nome").toLowerCase();

    let mostrar = true;

    if (sexo && cardSexo !== sexo) mostrar = false;
    if (idade && cardIdade !== idade) mostrar = false;
    if (nome && !cardNome.includes(nome)) mostrar = false;

    card.style.display = mostrar ? "block" : "none";
  });
});

// --- REDIRECIONAMENTO DOS BOTÕES "ADOTAR" ---
const botoesAdotar = document.querySelectorAll(".adotar");

botoesAdotar.forEach(botao => {
  botao.addEventListener("click", () => {
    const page = botao.getAttribute("data-page");
    if (page) {
      window.location.href = "./gatos/" + page; 
      // 👆 supondo que você crie uma pasta "gatos" com Luna.html, Thor.html, etc.
    }
  });
});

