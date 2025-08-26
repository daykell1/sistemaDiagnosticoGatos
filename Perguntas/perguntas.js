

var nome = sessionStorage.getItem('nome');
var valor;
var alimento,somenteracao,tipoalimentos,vomitando,tipovomito,jejum,qtdjejum,classificacao=0;

document.querySelectorAll("button").forEach(botao => {
        botao.addEventListener("click",() =>{
            valor = botao.dataset.option.toUpperCase();
            
            
            leralimento();
           
        });
    });



function ler(){
    if(valor == 0)
        return;
    if(document.getElementById("campoalimento")){
        leralimento();
    }else
    
    if(document.getElementById("camposomenteracao")){
        lersomenteracao();
        // if(valor == "SIM")
        //    lervomitando();
        // if(valor == "NÃO")
        //     lertipoalimentos();
    }else

    if(document.getElementById("campotipoalimentos")){
    
        lertipoalimentos();
    }else

    if(document.getElementById("campovomitando")){
        lervomitando();
    }else

    if(document.getElementById("campotipovomito")){
        
        lertipovomito();
    }else

    if(document.getElementById("campojejum")){
        lerjejum();
    }else

    if(document.getElementById("campoqtdjejum")){
        lerqtdjejum();
    }else

    if(document.getElementById("campoclassificacao")){
        lerclassificacao();
    }
}

function reiniciabotoes(){
    document.querySelectorAll("button").forEach(botao => {
        botao.addEventListener("click",() =>{
            valor = botao.dataset.option.toUpperCase();
            ler();
           
        });
    });
}


function leralimento() {
    alimento = valor;
    valor=0;
    
    console.log(alimento);
    if (alimento=="SIM"){
    document.getElementById("campoalimento").outerHTML = `
    <div id="camposomenteracao">
    <p id="texto-pergunta">${nome} come somente ração?</p>
    <button data-option="Sim">Sim</button>
    <button data-option="Não">Não</button>
    
    
</div>`

    }else if(alimento=="NAO" || alimento=="NÃO"){
        //console.log(classificacao)
        classificacao += 3
    //console.log(classificacao)
        document.getElementById("campoalimento").outerHTML = `
    <div id="campojejum">
    <p id="texto-pergunta">${nome} Está sem comer a mais de 24 horas?</p>
    <button data-option="Sim">Sim</button>
    <button data-option="Não">Não</button>
    
    
</div>`
    }
    reiniciabotoes();
    
}

function lerjejum(){
    jejum = valor;
    valor = 0;

    if (jejum == "NAO" || jejum == "NÃO"){
        document.getElementById("campojejum").outerHTML = `
        <div id="campovomitando">
        <p id="texto-pergunta">${nome} está vomitando ou com náuseas?</p>
        <button data-option="Sim">Sim</button>
        <button data-option="Não">Não</button>
        
       
    </div>`
    
    }else if(jejum == "SIM"){
    classificacao += 3
    //console.log(classificacao)
        document.getElementById("campojejum").outerHTML = `
        <div id="campoqtdjejum">
        <p id="texto-pergunta">${nome} está sem comer há quanto tempo?</p>
        <button data-option="2">2 dias</button>
        <button data-option="4">4 dias</button>
        <button data-option="7">7 dias</button>
       
    </div>`
    }
    reiniciabotoes();
}

function lerqtdjejum(){
    qtdjejum = valor;
    valor = 0;
    if(qtdjejum === "2")
        classificacao += 1;
    else if(qtdjejum === "4")
        classificacao += 2;
    else if(qtdjejum === "7")
        classificacao += 4;
    //console.log(classificacao)
    document.getElementById("campoqtdjejum").outerHTML = `
        <div id="campovomitando">
        <p id="texto-pergunta">${nome} está vomitando ou com náuseas?</p>
        <button data-option="Sim">Sim</button>
        <button data-option="Não">Não</button>
        
      
        
    </div>`
    reiniciabotoes();
}

function lersomenteracao(){
    
    somenteracao = valor;
    valor=0;
    console.log(somenteracao);
    if (somenteracao == "NÃO" || somenteracao == "NAO"){
        console.log("não come somente ração");
        classificacao += 2
        //console.log(classificacao)
        document.getElementById("camposomenteracao").outerHTML = `
        <div id="campotipoalimentos">
        <p id="texto-pergunta">${nome} come que tipos de alimentos?</p>
        <button data-option="Comida de humanos">Comida de humanos</button>
        <button data-option="Comida para gatos">Comida para gatos</button>
        
        
    </div>`
    }else if(somenteracao == "SIM"){
        document.getElementById("camposomenteracao").outerHTML = `
        <div id="campovomitando">
        <p id="texto-pergunta">${nome} está vomitando ou com náuseas?</p>
        <button data-option="Sim">Sim</button>
        <button data-option="Não">Não</button>
        
        
    </div>`
    }
    reiniciabotoes();
}

function lertipoalimentos(){
    tipoalimentos = valor;
    valor= 0;
    if(tipoalimentos == "Comida de humanos".toUpperCase())
        classificacao += 1;

    document.getElementById("campotipoalimentos").outerHTML = `
        <div id="campovomitando">
        <p id="texto-pergunta">${nome} está vomitando ou com náuseas?</p>
        <button data-option="Sim">Sim</button>
        <button data-option="Não">Não</button>
        
        
    </div>`
    reiniciabotoes();
}

function lervomitando(){
    vomitando = valor;
    valor = 0;
    if (vomitando == "NAO" ||vomitando == "NÃO"){
        sessionStorage.setItem('classificacao',classificacao);
        
        window.location.href = "../Perguntas2/teste.html"
    }else if(vomitando == "SIM"){
        classificacao += 3
        //console.log(classificacao)
        document.getElementById("campovomitando").outerHTML = `
        <div id="campotipovomito">
        <p id="texto-pergunta">${nome} está vomitando algum tipo de alimento ou liquido?</p>
        <button data-option="Líquido">Líquido</button>
        <button data-option="Alimento">Alimento</button>
        
     
    </div>`
    }
    reiniciabotoes();
}

function lertipovomito(){
    tipovomito = valor;
    valor = 0;
    if (tipovomito == "ALIMENTO"){
        classificacao += 2
        //console.log(classificacao)
    }else if (tipovomito == "LIQUIDO" || tipovomito == "LÍQUIDO"){
        classificacao += 3
        //console.log(classificacao)
    }
    sessionStorage.setItem('classificacao',classificacao);
    window.location.href = "../Perguntas2/teste.html";
}