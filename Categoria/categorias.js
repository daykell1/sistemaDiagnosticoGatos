var nome = sessionStorage.getItem('nome');
var classificacao = parseInt(sessionStorage.getItem('classificacao'));
var situacao;
console.log(classificacao)

if (classificacao >= 0 && classificacao <= 10) situacao = "leve"
else if(classificacao >10 && classificacao <=20) situacao = "moderado"
else situacao = "grave"

if (situacao == "grave")
    document.getElementById("campocategoria").innerHTML = `
    <div id="campocategoria">
    <p id="texto-pergunta">${nome} está com grau de saúde ${situacao}</p>
    <br>
    <style>
    #texto-pergunta{
        color:red;
    }
    </style>
    <img id="gatoChoro" src="/img/gatoChoro.png" alt="gatoChoro">
    </div>`
else if(situacao == "moderado")
    document.getElementById("campocategoria").innerHTML = `
    <div id="campocategoria">
    <p id="texto-pergunta">${nome} está com grau de saúde ${situacao}</p>
    <br>
    <style>
    #texto-pergunta{
        color:yellow;
    }
    </style>
    <img id="gatoLaranja" src="/img/gatoLaranja.png" alt="gatoLaranja">
    </div>`
else if (situacao == "leve")
    document.getElementById("campocategoria").innerHTML = `
            <div id="campocategoria">
            <p id="texto-pergunta">${nome} está com grau de saúde ${situacao}</p>
            <br>
            <style>
                #texto-pergunta{
                    color:green;
                }
            </style>
             <video autoplay loop  playsinline style="width: 400px;"
             id="videoChroma" src="./img/download.mp4"></video>
        </div>`
document.getElementById("titulodados").innerHTML = `Situação de ${nome}:`

