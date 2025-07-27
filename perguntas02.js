var nome = sessionStorage.getItem('nome');
var classificacao = parseInt(sessionStorage.getItem('classificacao'));
var isolado, umidade, locomocao, ferimento, localferimento, urina, corurina, qtdurina,fezes, aspectofezes;
var miando, jeitomiau, espirrando,espirrandofrequencia,secrecao,secrecaodescricao;
console.log(classificacao);

function lerisolado(){
    isolado = document.getElementById("isolado").value.toUpperCase();
    if (isolado == "SIM"){
        classificacao += 2
        console.log(classificacao)
        document.getElementById("campoisolado").innerHTML = `
    <div id="campoumidade">
    <p id="texto-pergunta">O lugar é úmido ou seco?</p>
    <input id="umidade" type="text" placeholder="Digite aqui"></input>
    <br>
    <button onclick="lerumidade()">&#129146;</button>
   
</div>`
    }else if(isolado == "NAO" || isolado == "NÃO"){
        document.getElementById("campoisolado").innerHTML = `
    <div id="campolocomocao">
    <p id="texto-pergunta">${nome} está com dificuldades de locomoção?</p>
    <input id="locomocao" type="text" placeholder="Digite aqui"></input>
    <br>
    <button onclick="lerlocomocao()">&#129146;</button>
   
</div>`
    }
}

function lerumidade(){
    umidade = document.getElementById("umidade").value.toUpperCase();
    if (umidade == "UMIDO" || umidade == "ÚMIDO"){
        classificacao += 2
        console.log(classificacao)
    }else if(umidade == "SECO"){
        classificacao += 1
        console.log(classificacao)
    }
    document.getElementById("campoumidade").innerHTML = `
    <div id="campolocomocao">
    <p id="texto-pergunta">${nome} está com dificuldades de locomoção?</p>
    <input id="locomocao" type="text" placeholder="Digite aqui"></input>
    <br>
    <button onclick="lerlocomocao()">&#129146;</button>
    
</div>`
}

function lerlocomocao(){
    locomocao = document.getElementById("locomocao").value.toUpperCase();
    if (locomocao == "SIM"){
        classificacao += 2
        console.log(classificacao)
        document.getElementById("campolocomocao").innerHTML = `
        <div id="campoferimento">
        <p id="texto-pergunta">${nome} está com algum ferimento?</p>
        <input id="ferimento" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerferimento()">&#129146;</button>
       
    </div>`
    }else if(locomocao == "NAO" || locomocao == "NÃO"){
        document.getElementById("campolocomocao").innerHTML = `
        <div id="campourina">
        <p id="texto-pergunta">${nome} está com dificuldades para urinar?</p>
        <input id="urina" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerurina()">&#129146;</button>
        
    </div>`
    }
}

function lerferimento(){
    ferimento = document.getElementById("ferimento").value.toUpperCase();
    if (ferimento == "SIM"){
        classificacao += 3
        console.log(classificacao)
        document.getElementById("campoferimento").innerHTML = `
        <div id="campolocalferimento">
        <p id="texto-pergunta">Qual o local do ferimento?</p>
        <input id="localferimento" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerlocalferimento()">&#129146;</button>
       
    </div>`
    }else if(ferimento == "NAO" || ferimento == "NÃO"){
        document.getElementById("campoferimento").innerHTML = `
        <div id="campourina">
        <p id="texto-pergunta">${nome} está com dificuldades para urinar?</p>
        <input id="urina" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerurina()">&#129146;</button>
       
    </div>`
    }
}

function lerlocalferimento(){
    localferimento = document.getElementById("localferimento").value.toUpperCase();
    document.getElementById("campolocalferimento").innerHTML = `
        <div id="campourina">
        <p id="texto-pergunta">${nome} está com dificuldades para urinar?</p>
        <input id="urina" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerurina()">&#129146;</button>
       
    </div>`
}

function lerurina(){
    urina = document.getElementById("urina").value.toUpperCase();
    if (urina == "SIM"){
        classificacao += 2
        console.log(classificacao)
        document.getElementById("campourina").innerHTML = `
        <div id="campocorurina">
        <p id="texto-pergunta">Qual a cor da urina de ${nome}?</p>
        <input id="corurina" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lercorurina()">&#129146;</button>
        
    </div>`
    }else if (urina == "NAO" || urina == "NÃO"){
        document.getElementById("campourina").innerHTML = `
        <div id="campofezes">
        <p id="texto-pergunta">As fezes estão com aspecto diferente?</p>
        <input id="fezes" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerfezes()">&#129146;</button>
       
    </div>`
    }
}

function lercorurina(){
    corurina = document.getElementById("corurina").value.toUpperCase();
    if (corurina == "AMARELO"){
        classificacao += 2
        console.log(classificacao)
    }
    else if (corurina == "VERMELHO"){
        classificacao += 3
        console.log(classificacao)
    }
    document.getElementById("campocorurina").innerHTML = `
        <div id="campoqtdurina">
        <p id="texto-pergunta">${nome} está urinando pouco ou em quantidade normal?</p>
        <input id="qtdurina" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerqtdurina()">&#129146;</button>
        
    </div>`
}

function lerqtdurina(){
    qtdurina = document.getElementById("qtdurina").value.toUpperCase();
    if (qtdurina == "POUCO"){
        classificacao += 3
        console.log(classificacao)
    }
    document.getElementById("campoqtdurina").innerHTML = `
        <div id="campofezes">
        <p id="texto-pergunta">As fezes estão com aspecto diferente?</p>
        <input id="fezes" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerfezes()">&#129146;</button>
       
    </div>`
}

function lerfezes(){
    fezes = document.getElementById("fezes").value.toUpperCase();
    if (fezes == "SIM"){
        classificacao += 2
        console.log(classificacao)
        document.getElementById("campofezes").innerHTML = `
        <div id="campoaspectofezes">
        <p id="texto-pergunta">Descreva como estão as fezes</p>
        <input id="aspectofezes" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="leraspectofezes()">&#129146;</button>
       
    </div>`
    }else if(fezes == "NAO" || fezes == "NÃO"){
        document.getElementById("campofezes").innerHTML = `
        <div id="campomiando">
        <p id="texto-pergunta">${nome} está miando e ronronando com excessividade?</p>
        <input id="miando" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lermiando()">&#129146;</button>
    </div>`
    }
}

function leraspectofezes(){
    aspectofezes = document.getElementById("aspectofezes").value.toUpperCase();
    document.getElementById("campoaspectofezes").innerHTML = `
        <div id="campomiando">
        <p id="texto-pergunta">${nome} está miando e ronronando com excessividade?</p>
        <input id="miando" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lermiando()">&#129146;</button>
        
    </div>`
}

function lermiando(){
    miando = document.getElementById("miando").value.toUpperCase();
    if (miando == "SIM"){
        classificacao += 2
        console.log(classificacao)
        document.getElementById("campomiando").innerHTML = `
        <div id="campojeitomiau">
        <p id="texto-pergunta">Descreva como está o miado e ronronado</p>
        <input id="jeitomiau" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerjeitomiau()">&#129146;</button>
       
    </div>`
    }else if(miando == "NAO" || miando == "NÃO"){
        document.getElementById("campomiando").innerHTML = `
        <div id="campoespirrando">
        <p id="texto-pergunta">${nome} está espirrando?</p>
        <input id="espirrando" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerespirrando()">&#129146;</button>
        
    </div>`
    }
}

function lerjeitomiau(){
    jeitomiau = document.getElementById("jeitomiau").value.toUpperCase();
    document.getElementById("campojeitomiau").innerHTML = `
        <div id="campoespirrando">
        <p id="texto-pergunta">${nome} está espirrando?</p>
        <input id="espirrando" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerespirrando()">&#129146;</button>
       
    </div>`
}

function lerespirrando(){
    espirrando = document.getElementById("espirrando").value.toUpperCase();
    if (espirrando == "SIM"){
        classificacao += 2
        console.log(classificacao)
        document.getElementById("campoespirrando").innerHTML = `
        <div id="campoespirrandofrequencia">
        <p id="texto-pergunta">${nome} está espirrando com muita frequência?</p>
        <input id="espirrandofrequencia" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lerespirrandofrequencia()">&#129146;</button>
       
    </div>`
    }else if(espirrando == "NAO" || espirrando == "NÃO"){
        document.getElementById("campoespirrando").innerHTML = `
        <div id="camposecrecao">
        <p id="texto-pergunta">${nome} está com secreção no nariz e nos olhos?</p>
        <input id="secrecao" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lersecrecao()">&#129146;</button>
        
    </div>`
    }
}

function lerespirrandofrequencia(){
    espirrandofrequencia = document.getElementById("espirrandofrequencia").value.toUpperCase();
    if(espirrandofrequencia == "SIM"){
        classificacao += 2
        console.log(classificacao)
    }
    document.getElementById("campoespirrandofrequencia").innerHTML = `
        <div id="camposecrecao">
        <p id="texto-pergunta">${nome} está com secreção no nariz e nos olhos?</p>
        <input id="secrecao" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lersecrecao()">&#129146;</button>
       
    </div>`
}

function lersecrecao(){
    secrecao = document.getElementById("secrecao").value.toUpperCase();
    if (secrecao == "SIM"){
        classificacao += 2
        console.log(classificacao)
        document.getElementById("camposecrecao").innerHTML = `
        <div id="camposecrecaodescricao">
        <p id="texto-pergunta">Descreva como está a secreção</p>
        <input id="secrecaodescricao" type="text" placeholder="Digite aqui"></input>
        <br>
        <button onclick="lersecrecaodescricao()">&#129146;</button>
       
    </div>`
    }else if(secrecao == "NÃO" || secrecao == "NAO"){
        sessionStorage.setItem('classificacao',classificacao);
        window.location.href = "categorias.html"
    }
}

function lersecrecaodescricao(){
    secrecaodescricao = document.getElementById("secrecaodescricao").value.toUpperCase();
    sessionStorage.setItem('classificacao',classificacao);
    window.location.href = "categorias.html"
}