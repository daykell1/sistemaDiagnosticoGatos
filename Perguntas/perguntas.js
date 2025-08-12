var nome = sessionStorage.getItem('nome');
var alimento,somenteracao,tipoalimentos,vomitando,tipovomito,jejum,qtdjejum,classificacao=0;

function leralimento() {
    alimento = document.getElementById("alimento").value.toUpperCase();
    if (alimento=="SIM"){
    document.getElementById("campoalimento").innerHTML = `
    <div id="camposomenteracao">
    <p id="texto-pergunta">${nome} come somente ração?</p>
    <input id="somenteracao" type="text" placeholder="Digite aqui"></input>
    <br>
    <button onclick="lersomenteracao()">&#129146;</button>
    
</div>`

    }else if(alimento=="NAO" || alimento=="NÃO"){
        console.log(classificacao)
        classificacao += 3
    console.log(classificacao)
        document.getElementById("campoalimento").innerHTML = `
    <div id="campojejum">
    <p id="texto-pergunta">${nome} Está sem comer a mais de 24 horas?</p>
    <input id="jejum" type="text" placeholder="Digite aqui"></input>
    <br>
    <button onclick="lerjejum()">&#129146;</button>
    
</div>`
    }
}

function lerjejum(){
    jejum = document.getElementById("jejum").value.toUpperCase();
    if (jejum == "NAO" || jejum == "NÃO"){
        document.getElementById("campojejum").innerHTML = `
        <div id="campovomitando">
        <p id="texto-pergunta">${nome} está vomitando ou com náuseas?</p>
        <input id="vomitando" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lervomitando()">&#129146;</button>
       
    </div>`
    
    }else if(jejum == "SIM"){
    classificacao += 3
    console.log(classificacao)
        document.getElementById("campojejum").innerHTML = `
        <div id="campoqtdjejum">
        <p id="texto-pergunta">${nome} está sem comer há quanto tempo?</p>
        <input id="qtdjejum" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerqtdjejum()">&#129146;</button>
       
    </div>`
    }
}

function lerqtdjejum(){
    qtdjejum = document.getElementById("qtdjejum").value.toUpperCase();
    classificacao += qtdjejum * 3
    console.log(classificacao)
    document.getElementById("campoqtdjejum").innerHTML = `
        <div id="campovomitando">
        <p id="texto-pergunta">${nome} está vomitando ou com náuseas?</p>
        <input id="vomitando" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lervomitando()">&#129146;</button>
      
        
    </div>`
}

function lersomenteracao(){
    somenteracao = document.getElementById("somenteracao").value.toUpperCase();
    if (somenteracao == "NÃO" || somenteracao == "NAO"){
        classificacao += 2
        console.log(classificacao)
        document.getElementById("camposomenteracao").innerHTML = `
        <div id="campotipoalimentos">
        <p id="texto-pergunta">${nome} come que tipo de alimentos?</p>
        <input id="tipoalimentos" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lertipoalimentos()">&#129146;</button>
        
    </div>`
    }else if(somenteracao == "SIM"){
        document.getElementById("camposomenteracao").innerHTML = `
        <div id="campovomitando">
        <p id="texto-pergunta">${nome} está vomitando ou com náuseas?</p>
        <input id="vomitando" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lervomitando()">&#129146;</button>
        
    </div>`
    }
}

function lertipoalimentos(){
    tipoalimentos = document.getElementById("tipoalimentos").value.toUpperCase();
    document.getElementById("campotipoalimentos").innerHTML = `
        <div id="campovomitando">
        <p id="texto-pergunta">${nome} está vomitando ou com náuseas?</p>
        <input id="vomitando" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lervomitando()">&#129146;</button>
        
    </div>`
}

function lervomitando(){
    vomitando = document.getElementById("vomitando").value.toUpperCase();
    if (vomitando == "NAO" ||vomitando == "NÃO"){
        sessionStorage.setItem('classificacao',classificacao);
        window.location.href = "../Perguntas2/perguntas02.html"
    }else if(vomitando == "SIM"){
        classificacao += 3
        console.log(classificacao)
        document.getElementById("campovomitando").innerHTML = `
        <div id="campotipovomito">
        <p id="texto-pergunta">${nome} está vomitando algum tipo de alimento ou liquido?</p>
        <input id="tipovomito" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lertipovomito()">&#129146;</button>
     
    </div>`
    }
}

function lertipovomito(){
    tipovomito = document.getElementById("tipovomito").value.toUpperCase();
    if (tipovomito == "ALIMENTO"){
        classificacao += 2
        console.log(classificacao)
    }else if (tipovomito == "LIQUIDO" || tipovomito == "LÍQUIDO"){
        classificacao += 3
        console.log(classificacao)
    }
    sessionStorage.setItem('classificacao',classificacao);
    window.location.href = "../Perguntas2/perguntas02.html"
}

/* 
////////
///
////////
////
/////
///////
*/  

let listaCampos = ["alimento","somenteracao","jejum","qtdjejum","tipoalimentos","vomitando","tipovomito"];
let listaPerguntas = [`Seu gatinho está se alimentando?`,`${nome} come somente ração?`,`${nome} Está sem comer a mais de 24 horas?`,`Qual a idade de ${nome}?`,`Qual é o peso de ${nome}?`];
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


