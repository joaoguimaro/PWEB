function obterCurso(selectObject) {
    var value = selectObject.value;

    var ads = "Análise e Desenvolvimento de Sistemas";
    var ea = "Eletrônica Automotiva";
    var fm = "Fabricação Mecânica";
    var ge = "Gestão Empresarial - EAD";
    var l = "Logística";
    var ma = "Manufatura Avançada";
    var pmt = "Processos Metalúrgicos";
    var p = "Polímeros";
    var pmc = "Projetos Mecânicos";
    var sb = "Sistemas Biomédicos";

    var texto = "Curso de ";

    var box = document.getElementById('hidden');
    var titulo = document.getElementById("tituloCurso");
    var imagem = document.getElementById('imagem');

    switch (value) {
        case 'ads':
            alert(`Deseja realmente abrir a janela do curso de ${ads}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${ads}`;
            imagem.src = "images/ads.png"
            break;

        case 'ea':
            alert(`Deseja realmente abrir a janela do curso de ${ea}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${ea}`;
            imagem.src = "images/eletAutomotiva.png"
            break;

        case 'fm':
            alert(`Deseja realmente abrir a janela do curso de ${fm}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${fm}`;
            imagem.src = "images/fabMecanica.png"
            break;

        case 'ge':
            alert(`Deseja realmente abrir a janela do curso de ${ge}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${ge}`;
            imagem.src = "images/gesEmpresarial.png"
            break;

        case 'l':
            alert(`Deseja realmente abrir a janela do curso de ${l}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${l}`;
            imagem.src = "images/logistica.png"
            break;

        case 'ma':
            alert(`Deseja realmente abrir a janela do curso de ${ma}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${ma}`;
            imagem.src = "images/manufAvancada.png"
            break;

        case 'pmt':
            alert(`Deseja realmente abrir a janela do curso de ${pmt}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${pmt}`;
            imagem.src = "images/procMetalurgicos.png"
            break;

        case 'p':
            alert(`Deseja realmente abrir a janela do curso de ${p}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${p}`;
            imagem.src = "images/polimeros.png"
            break;

        case 'pmc':
            alert(`Deseja realmente abrir a janela do curso de ${pmc}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${pmc}`;
            imagem.src = "images/projMecanicos.png"
            break;

        case 'sb':
            alert(`Deseja realmente abrir a janela do curso de ${sb}?`);
            box.style.display = "flex";
            titulo.innerHTML = ` ${texto} ${sb}`;
            imagem.src = "images/sistBiomedicos.png"
            break;

        case 'none':
            box.style.display = "none";
            titulo.innerHTML = "Pweb - Fatec Sorocaba";
            imagem.src = "images/fatec.png"
            break;
    }
}