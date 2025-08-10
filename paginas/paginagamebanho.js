const perguntas = [
    {
        texto: "Seu gatinho está muito sujo?",
        opcoes: ["Sim", "Não"]
    },
    {
        texto: "Você tem água morna preparada?",
        opcoes: ["Sim", "Não"]
    },
    {
        texto: "Você usa shampoo próprio para gatos?",
        opcoes: ["Sim", "Não"]
    },
    {
        texto: "Você enxagua bem o gatinho?",
        opcoes: ["Sim", "Não"]
    },
    {
        texto: "Você seca com toalha e secador no modo frio?",
        opcoes: ["Sim", "Não"]
    }
];

let indicePergunta = 0;
let acertos = 0;

function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePergunta];
    document.getElementById("pergunta").textContent = perguntaAtual.texto;
    document.getElementById("opcoes").innerHTML = "";

    perguntaAtual.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.onclick = () => verificarResposta(opcao);
        document.getElementById("opcoes").appendChild(botao);
    });

    document.getElementById("progresso").textContent = 
        `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;
}

function verificarResposta(resposta) {
    if (resposta === "Sim") {
        acertos++;
    }
    indicePergunta++;

    if (indicePergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("game").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    const mensagem = document.getElementById("mensagem");
    const imagemGato = document.getElementById("imagemGato");

    if (acertos >= 4) {
        mensagem.textContent = "Parabéns! Seu gatinho está limpinho!";
        imagemGato.src = "gatoLimpo.png"; // aqui você coloca a imagem do gato limpo
    } else {
        mensagem.textContent = "Ops! Seu gatinho ainda está sujinho...";
        imagemGato.src = "gatoSujo.png"; // aqui você coloca a imagem do gato sujo
    }
}

function reiniciar() {
    indicePergunta = 0;
    acertos = 0;
    document.getElementById("resultado").style.display = "none";
    document.getElementById("game").style.display = "block";
    mostrarPergunta();
    
}

mostrarPergunta();
