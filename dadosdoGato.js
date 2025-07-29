var nome, castrado, sexo, idade, peso, gatoescondido;
function lergatoescondido(){
    
}

function lernome() {
    nome = document.getElementById("nome").value;
    sessionStorage.setItem('nome',nome);
    document.getElementById("camponome").innerHTML = `
    <div id="campocastrado">
    <p id="texto-pergunta">${nome} é castrado?</p>
    <input id="castrado" type="text" placeholder="Digite aqui"></input>
    <br>
    <button onclick="lercastrado()">&#129146;</button>
     <img id="gatoTransparente" src="img/gato_transparente.gif" alt="gatoTransparente"></img>
    
</div>`
}
//  <img id="gatoCastracao" src="img/gatoCastracao.png" alt="gatoCastracao"></img>

function lercastrado() {
    castrado = document.getElementById("castrado").value.toUpperCase();
    document.getElementById("campocastrado").innerHTML = `
    <div id="camposexo">
    <p id="texto-pergunta">Qual o sexo de ${nome}?</p>
    <input id="sexo" type="text" placeholder="Digite aqui"></input>
    <br>
    <button onclick="lersexo()">&#129146;</button>
     <img id="gatoTransparente" src="img/gato_transparente.gif" alt="gatoTransparente"></img>
 
</div>`
}

function lersexo() {
    sexo = document.getElementById("sexo").value.toUpperCase();
    document.getElementById("camposexo").innerHTML = `
    <div id="campoidade">
    <p id="texto-pergunta">Qual a idade de ${nome}?</p>
    <input id="idade" type="text" placeholder="Digite aqui"></input>
    <br>
    <button onclick="leridade()">&#129146;</button>
     <img id="gatoTransparente" src="img/gato_transparente.gif" alt="gatoTransparente"></img>
    
</div>`
}

function leridade() {
    idade = document.getElementById("idade").value;
    document.getElementById("campoidade").innerHTML = `
    <div id="campopeso">
    <p id="texto-pergunta">Qual é o peso de ${nome}?</p>
    <input id="peso" type="text" placeholder="Digite aqui"></input>
    <br>
    <button onclick="lerpeso()">&#129146;</button>
     <img id="gatoTransparente" src="img/gato_transparente.gif" alt="gatoTransparente"></img>
   
</div>`
}

function lerpeso() {
    peso = document.getElementById("peso").value;
    document.getElementById("titulodados").innerHTML = ``;        
    if (idade >= 1 && idade <= 7 ){
        if (sexo == "MACHO" || sexo == "M"){
            if (peso >= 4 && peso <=6) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome} está na faixa normal de peso</h1>`;
            else if (peso < 4) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome} está abaixo do peso</h1>`;
            else if (peso > 6) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome} está acima do peso</h1>`;
        }else if(sexo == "FÊMEA" || sexo == "FEMEA" || sexo == "F"){
            if (peso >= 3 && peso <=5) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome} está na faixa normal de peso</h1>`;        
            else if (peso < 3) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome} está abaixo do peso</h1>`;
            else if (peso > 5) document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">${nome} está acima do peso</h1>`;
        }
    }else{
        document.getElementById("campopeso").innerHTML = `<h1 class="titulo-text" id = "campopeso">Não temos avaliação para peso ideal nessa faixa de idade</h1>`;
    }

    document.getElementById("campopeso").innerHTML += `<img id="gatosPeso" src="img/gatosPeso.png" alt="gatosPeso">`
    
}