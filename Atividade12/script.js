function janelaAberta() {
    document.getElementById("janela").src = "janelaaberta.png";
    var t = document.getElementById("cabeca");
    t.innerHTML = "Janela Aberta";
}

function janelaFechada(){
    document.getElementById("janela").src = "janelafechada.png";
    var t = document.getElementById("cabeca");
    t.innerHTML = "Janela Fechada";
}

function quebraJanela(){
    document.getElementById("janela").src = "janelaquebra.png";
    var t = document.getElementById("cabeca");
    t.innerHTML = "Janela Quebrada";
}