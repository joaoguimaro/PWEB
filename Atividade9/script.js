function maiorNumero(a, b, c) {
    let maior = a;
    
    if (b > maior) {
      maior = b;
    } 
    if (c > maior) {
      maior = c;
    }
    return maior;
    }

function mostrarMaior() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);
    const maior = maiorNumero(num1, num2, num3);
    document.getElementById("resultado").innerHTML = `O maior número é: ${maior}`;
}

function ordemCrescente() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);
    const numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    document.getElementById("resultadoCrescente").innerHTML = `Os números em ordem crescente são: ${numeros}`;
}