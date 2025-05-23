function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 17) {
        classificacao = "Muito abaixo do peso";
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Parabéns! Peso ideal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Acima do peso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II (severa)";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
    }

    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong>: ${classificacao}`;
}
