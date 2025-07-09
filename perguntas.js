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
    <img id="gatoRacao" src="img/gatoRacao.png" alt="gatoRacao">
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
    <img id="gatoComendo" src="img/gatoComendo.png" alt="gatoComendo">
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
        <img id="gatoDoente" src="img/gatoDoente.png" alt="gatoDoente">
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
        <img id="gatoTriste" src="img/gatoTriste.png" alt="gatoTriste">
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
        <img id="gatoDoente" src="img/gatoDoente.png" alt="gatoDoente">
        <img id="gatoDoente" src="img/gatoDoente.png" alt="gatoDoente">
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
        <img id="gatoNamm" src="img/gatoNamm.png" alt="gatoNamm">
    </div>`
    }else if(somenteracao == "SIM"){
        document.getElementById("camposomenteracao").innerHTML = `
        <div id="campovomitando">
        <p id="texto-pergunta">${nome} está vomitando ou com náuseas?</p>
        <input id="vomitando" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lervomitando()">&#129146;</button>
        <img id="gatoDoente" src="img/gatoDoente.png" alt="gatoDoente">
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
        <img id="gatoDoente" src="img/gatoDoente.png" alt="gatoDoente">
    </div>`
}

function lervomitando(){
    vomitando = document.getElementById("vomitando").value.toUpperCase();
    if (vomitando == "NAO" ||vomitando == "NÃO"){
        sessionStorage.setItem('classificacao',classificacao);
        window.location.href = "perguntas02.html"
    }else if(vomitando == "SIM"){
        classificacao += 3
        console.log(classificacao)
        document.getElementById("campovomitando").innerHTML = `
        <div id="campotipovomito">
        <p id="texto-pergunta">${nome} está vomitando algum tipo de alimento ou liquido?</p>
        <input id="tipovomito" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lertipovomito()">&#129146;</button>
        <img id="gatoMorcego" src="img/gatoMorcego.png" alt="gatoMorcegp">
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
    window.location.href = "perguntas02.html"
}