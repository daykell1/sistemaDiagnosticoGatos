var nome, castrado, sexo, idade, peso, gatoescondido;
let valor;
let setaDireita =document.querySelector(".seta-direita");
let setaEsquerda =document.querySelector(".seta-esquerda");
function lergatoescondido(){
    
}

document.getElementById("nome").addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        lernome();
    }
});



function lernome() {
    nome = document.getElementById("nome").value;
    sessionStorage.setItem('nome',nome);
    listaPerguntas = [`Qual o nome do seu gatinho?`,`${nome} é castrado?`,`Qual o sexo de ${nome}?`,`Qual a idade de ${nome}?`,`Qual é o peso de ${nome}?`];
    avancar();
    return;
    document.getElementById("camponome").innerHTML = `
    <div id="campocastrado">
            <p id="texto-pergunta">${nome} é castrado?</p>
            
            <button data-option="Sim">Sim</button>
            <button data-option="Não">Não</button>
            <button data-option="Não sei">Não sei</button>
            <img id="gatoTransparente" src="/img/gato_animado_novo (1).gif" alt="gatoTransparente"></img>
        </div>
    `
    document.querySelectorAll("button").forEach(botao => {
        botao.addEventListener("click",() =>{
            castrado = botao.dataset.option;
            console.log(castrado);
           
        });
    });

    

}

function lercastrado() {
    castrado = valor;
    
    //avancar();
}

function lersexo() {
    sexo = valor.toUpperCase();
    //avancar();
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
    console.log("nome" + nome +",castrado: "+castrado + ",sexo: "+sexo+",idade: "+idade+",peso: "+peso);

    
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
        if(listaCampos[atual+1] == "idade" || listaCampos[atual+1] == "peso")
        {
            document.getElementById(`campo${listaCampos[atual]}`).innerHTML = `
            <div id="campo${listaCampos[atual + 1]}">
            <p id="texto-pergunta">${listaPerguntas[atual+1]}</p>
            <input id="${listaCampos[atual + 1]}" type="text" placeholder="Digite aqui"></input>
            <br>
            <button onclick="ler${listaCampos[atual + 1]}()">&#129146;</button>
            <img id="gatoTransparente" src="/img/gato_animado_novo (1).gif" alt="gatoTransparente"></img>
            
            </div>`;

            if(listaCampos[atual+1] == "idade"){
                document.getElementById("idade").addEventListener("keydown",(event)=>{
                if(event.key === "Enter"){
                    leridade();
                }
            });
            }

            if(listaCampos[atual+1] == "peso"){
                document.getElementById("peso").addEventListener("keydown",(event)=>{
                if(event.key === "Enter"){
                    lerpeso();
                }
            });
            }
            
        }
        else
        {
            
            let opcao1, opcao2;
            if(listaCampos[atual+1] == "castrado"){
                opcao1 = "Sim";
                opcao2 = "Não";
            }
            if(listaCampos[atual + 1] == "sexo"){
                opcao1 = "Macho";
                opcao2 = "Fêmea";
            }
            document.getElementById(`campo${listaCampos[atual]}`).innerHTML = `
            <div id="campo${listaCampos[atual + 1]}">
            <p id="texto-pergunta">${listaPerguntas[atual+1]}</p>
            <button data-option="${opcao1}">${opcao1}</button>
            <button data-option="${opcao2}">${opcao2}</button>
            <button data-option="Não sei">Não sei</button>
            <img id="gatoTransparente" src="/img/gato_animado_novo (1).gif" alt="gatoTransparente"></img>
            </div>`;

            document.querySelectorAll("button").forEach(botao => {
            botao.addEventListener("click",() =>{
                valor = botao.dataset.option;
                //console.log(valor);
                if(listaCampos[atual] == "castrado"){
                    lercastrado();
                }
                if(listaCampos[atual] == "sexo"){
                    lersexo();
                }
                
                
                avancar();
            
            });
        });
        }
        
        atual++;
    }else{
        //window.location.href="/Perguntas/perguntas.html"
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
        <img id="gatoTransparente" src="/img/gato_animado_novo (1).gif" alt="gatoTransparente"></img>
        
        </div>`;
        atual--;
    }else{
        window.location.href="/telaInicial/index.html"
    }
    
}