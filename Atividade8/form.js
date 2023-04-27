var opinioes = [];
var contador = 0;

function adicionarOpiniao() {
	if (contador < 45) {
		var idade = document.getElementById("idade").value;
		var sexo = document.querySelector('input[name="sexo"]:checked').value;
		var opiniao = document.getElementById("opiniao").value;

		opinioes.push({ idade: idade, sexo: sexo, opiniao: opiniao });

		atualizarListaOpinioes();
		contador++;
        document.getElementById("contador").innerText = contador + "/45";
        
		document.getElementById("idade").value = "";
		document.querySelectorAll('input[name="sexo"]').forEach(radio => radio.checked = false);
		document.getElementById("opiniao").selectedIndex = 0;
	} else {
		alert("Você já coletou o máximo de 45 opiniões!");
    }
    
    if (contador === 45) {
        exibirResultados(opinioes);
      }
}

function atualizarListaOpinioes() {
	var listaOpinioes = document.getElementById("lista-opinioes");
	listaOpinioes.innerHTML = "";

	opinioes.forEach(function(opiniao) {
		var itemLista = document.createElement("li");
		itemLista.textContent = "Idade: " + opiniao.idade + ", Sexo: " + opiniao.sexo + ", Opinião: " + opiniao.opiniao;
		listaOpinioes.appendChild(itemLista);
	});
}

function preencherFormularioAleatorio() {
	var idade = Math.floor(Math.random() * (100 - 18 + 1)) + 18;
	document.getElementById("idade").value = idade;

	var sexoAleatorio = Math.random() < 0.5 ? "masculino" : "feminino";
	document.querySelectorAll('input[name="sexo"]').forEach(radio => {
		if (radio.value === sexoAleatorio) {
			radio.checked = true;
		}
	});

	var opiniaoAleatoria = Math.floor(Math.random() * 4) + 1;
    document.getElementById("opiniao").value = opiniaoAleatoria;
    adicionarOpiniao()
}

function exibirResultados(respostas) {
    var totalIdade = 0;
    var idadeMaisVelha = 0;
    var idadeMaisNova = Infinity;
    var totalPesquisas = respostas.length;
    var totalPessimo = 0;
    var totalBomOtimo = 0;
    var totalMulheres = 0;
    var totalHomens = 0;
  
    for (var i = 0; i < totalPesquisas; i++) {
      var resposta = respostas[i];
      var idade = parseInt(resposta.idade);
      totalIdade += idade;
      if (idade > idadeMaisVelha) {
        idadeMaisVelha = idade;
      }
      if (idade < idadeMaisNova) {
        idadeMaisNova = idade;
      }
      if (resposta.opiniao === "1") {
        totalPessimo++;
      } else if (resposta.opiniao === "3" || resposta.opiniao === "4") {
        totalBomOtimo++;
      }
      if (resposta.sexo === "feminino") {
        totalMulheres++;
      } else {
        totalHomens++;
      }
    }
  
    var mediaIdade = totalIdade / totalPesquisas;
  
    var porcentagemBomOtimo = (totalBomOtimo / totalPesquisas) * 100;
  
    var resultados = document.getElementById("resultados");
    resultados.innerHTML = "Média de idade: " + mediaIdade.toFixed(2) + "<br>";
    resultados.innerHTML += "Idade da pessoa mais velha: " + idadeMaisVelha + "<br>";
    resultados.innerHTML += "Idade da pessoa mais nova: " + idadeMaisNova + "<br>";
    resultados.innerHTML += "Quantidade de pessoas que responderam péssimo: " + totalPessimo + "<br>";
    resultados.innerHTML += "Porcentagem de pessoas que responderam ótimo e bom: " + porcentagemBomOtimo.toFixed(2) + "%<br>";
    resultados.innerHTML += "Número de mulheres que responderam o questionário: " + totalMulheres + "<br>";
    resultados.innerHTML += "Número de homens que responderam o questionário: " + totalHomens + "<br>";
  }