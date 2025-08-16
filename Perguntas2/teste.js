var nome = sessionStorage.getItem('nome') || "Gatinho";
document.getElementById("nomeGato").innerText = nome;

var classificacao = parseInt(sessionStorage.getItem('classificacao')) || 0;

// Função para remover acentos
function removerAcentos(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para atualizar a pergunta e botões no mesmo quadro
function atualizarQuadro(pergunta, acoesHtml){
    document.getElementById("quadroPergunta").innerHTML = `
        <p id="texto-pergunta">${pergunta}</p>
        ${acoesHtml}
    `;
}

// Começa a sequência de perguntas
function iniciarPerguntas(){
    atualizarQuadro(
        `${nome} está isolado?`,
        `<button onclick="lerisolado('SIM')">Sim</button>
         <button onclick="lerisolado('NAO')">Não</button>`
    );
}

// Funções de cada pergunta
function lerisolado(valor){
    var resposta = removerAcentos(valor.toUpperCase());
    if(resposta === "SIM") classificacao += 2;
    mostrarUmidade();
}

function mostrarUmidade(){
    atualizarQuadro(
        `O lugar é úmido ou seco?`,
        `<button onclick="lerumidade('UMIDO')">Úmido</button>
         <button onclick="lerumidade('SECO')">Seco</button>`
    );
}

function lerumidade(valor){
    var resposta = removerAcentos(valor.toUpperCase());
    classificacao += (resposta === "UMIDO") ? 2 : 1;
    mostrarLocomocao();
}

function mostrarLocomocao(){
    atualizarQuadro(
        `${nome} está com dificuldades de locomoção?`,
        `<button onclick="lerlocomocao('SIM')">Sim</button>
         <button onclick="lerlocomocao('NAO')">Não</button>
         <button onclick="lerlocomocao('UM POUCO')">Um pouco</button>`
    );
}

function lerlocomocao(valor){
    var resposta = removerAcentos(valor.toUpperCase());
    if(resposta === "SIM") classificacao += 2;
    mostrarFerimento();
}

function mostrarFerimento(){
    atualizarQuadro(
        `${nome} está com algum ferimento?`,
        `<button onclick="lerferimento('SIM')">Sim</button>
         <button onclick="lerferimento('NAO')">Não</button>`
    );
}

function lerferimento(valor){
    var resposta = removerAcentos(valor.toUpperCase());
    if(resposta === "SIM") classificacao += 3;
    mostrarUrina();
}

function mostrarUrina(){
    atualizarQuadro(
        `${nome} está com dificuldades para urinar?`,
        `<button onclick="lerurina('SIM')">Sim</button>
         <button onclick="lerurina('NAO')">Não</button>
         <button onclick="lerurina('UM POUCO')">Um pouco</button>`
    );
}

function lerurina(valor){
    var resposta = removerAcentos(valor.toUpperCase());
    if(resposta === "SIM") classificacao += 2;
    mostrarCorUrina();
}

function mostrarCorUrina(){
    atualizarQuadro(
        `Qual a cor da urina de ${nome}?`,
        `<button onclick="lercorurina('AMARELO')">Amarelo</button>
         <button onclick="lercorurina('VERMELHO')">Vermelho</button>`
    );
}

function lercorurina(valor){
    var resposta = removerAcentos(valor.toUpperCase());
    classificacao += (resposta === "AMARELO") ? 2 : 3;
    mostrarQtdUrina();
}

function mostrarQtdUrina(){
    atualizarQuadro(
        `${nome} está urinando pouco ou normal?`,
        `<button onclick="lerqtdurina('POUCO')">Pouco</button>
         <button onclick="lerqtdurina('NORMAL')">Normal</button>`
    );
}

function lerqtdurina(valor){
    var resposta = removerAcentos(valor.toUpperCase());
    if(resposta === "POUCO") classificacao += 3;
    mostrarFezes();
}

function mostrarFezes(){
    atualizarQuadro(
        `As fezes estão diferentes?`,
        `<button onclick="lerfezes('SIM')">Sim</button>
         <button onclick="lerfezes('NAO')">Não</button>`
    );
}

function lerfezes(valor){
    var resposta = removerAcentos(valor.toUpperCase());
    if(resposta === "SIM") classificacao += 2;
    mostrarFim();
}

function mostrarFim(){
    atualizarQuadro(
        `Fim da avaliação. Classificação final: ${classificacao}`,
        `<button onclick="finalizar()">Concluir</button>`
    );
}

function finalizar(){
    sessionStorage.setItem('classificacao', classificacao);
    window.location.href = "../Categoria/categorias.html";
}

// Inicializa tudo
iniciarPerguntas();
