var nome, castrado, sexo, idade, peso, gatoescondido;
let setaDireita =document.querySelector(".seta-direita");
let setaEsquerda =document.querySelector(".seta-esquerda");
function lergatoescondido(){
    
}

function lernome() {
    nome = document.getElementById("nome").value;
    sessionStorage.setItem('nome',nome);
    listaPerguntas = [`Qual o nome do seu gatinho?`,`${nome} é castrado?`,`Qual o sexo de ${nome}?`,`Qual a idade de ${nome}?`,`Qual é o peso de ${nome}?`];

    avancar();
}
//  <img id="gatoCastracao" src="img/gatoCastracao.png" alt="gatoCastracao"></img>

function lercastrado() {
    castrado = document.getElementById("castrado").value.toUpperCase();
    avancar();
}

function lersexo() {
    sexo = document.getElementById("sexo").value.toUpperCase();
    avancar();
}

function leridade() {
    idade = document.getElementById("idade").value;
    avancar();
}

function lerpeso() {
    peso = document.getElementById("peso").value;
    document.getElementById("titulodados").innerHTML = ``;    
     let nome1 = `<span class="nome-destaque">${nome}</span>`; 
    if (idade >= 1 && idade <= 7 ){
        if (sexo == "MACHO" || sexo == "M"){
            if (peso >= 4 && peso <=6) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome1} está na faixa normal de peso</h1>`;
            else if (peso < 4) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome1} está abaixo do peso </h1>`;
            else if (peso > 6) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome1} está acima do peso</h1>`;
        }else if(sexo == "FÊMEA" || sexo == "FEMEA" || sexo == "F"){
            if (peso >= 3 && peso <=5) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome1} está na faixa normal de peso</h1>`;        
            else if (peso < 3) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome1} está abaixo do peso</h1>`;
            else if (peso > 5) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome1} está acima do peso</h1>`;
        }
    }else{
        document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">Não temos avaliação para peso ideal nessa faixa de idade</h1>`;
    }

    // document.getElementById("campopeso").innerHTML += `<img id="gatosPeso" src="img/gatosPeso.png" alt="gatosPeso">`
    
}

//////////////
////////////
///////////////
/////////////
///////////////
let listaCampos = ["nome","castrado","sexo","idade","peso"];
let listaPerguntas = [`Qual o nome do seu gatinho?`,`${nome} é castrado?`,`Qual o sexo de ${nome}?`,`Qual a idade de ${nome}?`,`Qual é o peso de ${nome}?`];
let atual = 0;
function avancar(){
    if(atual < listaCampos.length - 1){
        document.getElementById(`campo${listaCampos[atual]}`).innerHTML = `
        <div id="campo${listaCampos[atual + 1]}">
        <p id="texto-pergunta">${listaPerguntas[atual+1]}</p>
        <input id="${listaCampos[atual + 1]}" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="ler${listaCampos[atual + 1]}()">&#129146;</button>
        <img id="gatoTransparente" src="/img/gato_transparente.gif" alt="gatoTransparente"></img>
        
        </div>`;
        atual++;
    }else{
        window.location.href="/Perguntas/perguntas.html"
    }
    
}

function voltar(){
    if(atual > 0){
        document.getElementById(`campo${listaCampos[atual]}`).innerHTML = `
        <div id="campo${listaCampos[atual - 1]}">
        <p id="texto-pergunta">${listaPerguntas[atual-1]}</p>
        <input id="${listaCampos[atual - 1]}" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="ler${listaCampos[atual - 1]}()">&#129146;</button>
        <img id="gatoTransparente" src="/img/gato_transparente.gif" alt="gatoTransparente"></img>
        
        </div>`;
        atual--;
    }else{
        window.location.href="/telaInicial/index.html"
    }
    
}